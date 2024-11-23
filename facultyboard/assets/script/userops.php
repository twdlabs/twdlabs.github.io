
<?php


	// Define login mode. 
	$easyusermode = false;
	// $easyusermode = true;
	$easypassmode = false;
	// $easypassmode = true;

	// Check if login received. 
	$isloginreceived = isset( $_POST['login'] );


	/*****/


	// Check for user state changes. 
	function checkUserChanges() {
		global $isloginreceived;
		// printToPage();
		printToPage("Checking for changes in user state...");

		// Check if logout request received. 
		$letsjustlogout = isset( $_GET['logout'] );
		// Execute user logout. 
		if( $letsjustlogout ) {

			// Logout current user. 
			logoutUser(1);

			// Return login state. 
			// return false;
		}

		// Check for auto-login. 
		if( isset( $_POST['autologinuserid'] ) ) {

			// Get user id. 
			$uid = $_POST['autologinuserid'] ?? 1;

			// Update session data: user id. 
			$_SESSION['currentuserid'] = $uid;
		}

		// Check if login registration received. 
		$isregistrationreceived = isset( $_POST['login'] ) && ( $_POST['login'] == 'register' );
		// Execute user registration. 
		if( $isregistrationreceived ) {

			// Create new person/user. 
			$successfulregistrations = goCrudOp('persons','create');

			// Proceed with login of new user if registration completed. 
			$isloginreceived = ( $successfulregistrations > 0 );

			// Execute new user login. 
			$isuserloggedin = loginExistingUser(1);

			// Refresh page. 
			if($isuserloggedin) header('location:./?view=home');
			else header('location:./?view=login');

			// Return login state. 
			return $isuserloggedin;
		}

		// Execute user login. 
		else if( $isloginreceived ) {

			// Execute existing user login. 
			$isuserloggedin = loginExistingUser(1);

			// Refresh page. 
			if($isuserloggedin) header('location:./?view=home');
			else header('location:./?view=login');

			// Return login state. 
			return $isuserloggedin;
		}

		// Return login state (if not already sent elsewhere). 
		else return false;
	}
	// TODO: Login existing user. 
	function loginExistingUser($dorefreshafterlogin=false) {
		global $easyusermode, $easypassmode;
		// if( !isset( $_POST['userid'] ) || !$_POST['userid'] ) return;

		// Define input receipt mode. 
		$cleanuplogincredentials = false;
		// $cleanuplogincredentials = true;

		// Disregard password (easy mode). 
		if($easypassmode) {

			// Select user (easy mode). 
			if($easyusermode) {
	
				// Get user input: user id. 
				$uid = $cleanuplogincredentials ? getFieldValueById('userid') : $_POST['userid'];

				// Define list of conditions for database query. 
				$querycondition = " id=$uid ";
			}
			// Select user (non-easy mode). 
			else {
	
				// Get user input: username. 
				$uname = $cleanuplogincredentials ? getFieldValueById('username') : $_POST['username'];

				// Define list of conditions for database query. 
				$querycondition = " username=$uname ";
			}
		}
		// Check password (production mode). 
		else {

			// Get user input: password. 
			$pw = $cleanuplogincredentials ? getFieldValueById('password') : $_POST['password'];

			// Select user (easy mode). 
			if($easyusermode) {
	
				// Get user input: user id. 
				$uid = $cleanuplogincredentials ? getFieldValueById('userid') : $_POST['userid'];
				// Get hashing salt for given user. 
				$pwslt = getUserSalt($uid,'id');
				// Get password hash for input password and selected user. 
				$passwdhash = generatePasswdHash($pw.$pwslt);

				// Define list of conditions for database query. 
				$querycondition = " id=$uid AND passwdhash='$passwdhash' ";
			}
			// Select user (non-easy mode). 
			else {
	
				// Get user input: username. 
				$uname = $cleanuplogincredentials ? getFieldValueById('username') : $_POST['username'];
				// Get hashing salt for given user. 
				$pwslt = getUserSalt($uname,'username');
				// Get password hash for input password and selected user. 
				$passwdhash = generatePasswdHash($pw.$pwslt);

				// Define list of conditions for database query. 
				$querycondition = " username='$uname' AND passwdhash='$passwdhash' ";
			}
		}

		// Create database query. 
		$sql = " SELECT id, username FROM persons WHERE ($querycondition); ";
		$sql = " 
		SELECT p.id, p.username, count(distinct a.personid) as admincount 
		FROM (persons as p) LEFT JOIN (admins as a) ON (a.personid=p.id) 
		WHERE ($querycondition) 
		GROUP BY p.id; ";

		// Send database query to find existing user. 
		$userqueryresult = sendDatabaseQuery($sql)['queryresults'];
		$isuserfound = isset( $userqueryresult[0] );

		// Save user id as session data (if match found). 
		if( $isuserfound ) {

			// Get id of existing user. 
			$uid = $userqueryresult[0]['id'];

			// Save user id into session data. 
			$_SESSION['currentuserid'] = $uid;
		}
		// Clear session data (if match not found). 
		else {

			// Clear session data upon logout. 
			session_destroy();
		}

		// Return result. 
		return $isuserfound;
	}
	// Get hashing salt for given user. 
	function getUserSalt($propvalue,$propname) {
		printToPage('Retrieving user salt...');

		// Create database query. 
		$sql = " SELECT passwdsalt FROM persons WHERE ($propname='$propvalue'); ";
		// Send database query to get hashing salt. 
		$saltqueryresult = sendDatabaseQuery($sql,true)['queryresults'];

		// Return hashing salt if found. 
		if($saltqueryresult) {
			printToPage('User salt found.');
			return $saltqueryresult[0]['passwdsalt'];
		}
		// Return nothing if not found. 
		else {
			printToPage('User salt not found.');
			return null;
		}
	}
	// Logout current user. 
	function logoutUser($dorefreshafterlogout=false) {
		// print "<script>console.log('Now logging out...')</script>";

		// Clear session data upon logout. 
		session_destroy();

		// Refresh page. 
		if($dorefreshafterlogout) header('location:./');
	}

	// Get id of currently active user (from session data). 
	function getCurrentUserId($displaydetail=false) {
		// printToPage();
		printToPage("Retrieving user id...");

		// Get id of current user (if valid). 
		$uid = $_SESSION['currentuserid'] ?? null;
		if($displaydetail) printToPage ("uid: $uid");

		// Return id of current user. 
		return $uid;
	}
	// Retrieve profile data for given user. 
	function getUserProfile( $uid, $displayqueryresults=false ) {
		// printToPage();
		printToPage("Retrieving user data...");

		// Return nothing if no user id given. 
		if( ! $uid ) return null;

		// Create database query. 
		$sql = " SELECT 
				p.id, personname, username, position,
				g.avatarfilename, max(s.createdat) as lastlogin
			FROM (persons as p) 
			LEFT JOIN (genders as g) ON (p.genderid = g.id)
			LEFT JOIN (sessions as s) ON (s.personid = p.id)
			WHERE (p.id=$uid) ";
		// Send database query. 
		$userqueryresults = sendDatabaseQuery($sql,1)['queryresults'];
		if($displayqueryresults) printToPage( json_encode( $userqueryresults ) );

		// Return user data if user found. 
		if( $userqueryresults ) {

			// Display report for found user. 
			printToPage("Got it: user data found!");

			// Return data for given user. 
			return $userqueryresults[0];
		}

		// Return nothing if no user found. 
		else {

			// Display report for no user. 
			printToPage("No user data found!");

			// Return nothing. 
			return null;
		}
	}
	// Check admin status of given user. 
	function checkIfUserAdmin( $uid, $displayqueryresults=false ) {
		// printToPage();
		printToPage("Checking user's admin status...");

		// Return nothing if no user id given. 
		if(!$uid) return false;

		// Create database query. 
		$sql = " SELECT personid FROM admins WHERE (personid=$uid) ";

		// Send database query. 
		$adminqueryresults = sendDatabaseQuery($sql)['queryresults'];
		printToPage( !empty($adminqueryresults) ? 'true' : 'false' );
		if($displayqueryresults) printToPage( json_encode( $adminqueryresults ) );

		// Return status of current user. 
		return !empty($adminqueryresults);
	}

	// Generate random salt for password hashing. 
	function generateRandomSalt($displaydetail=false) {

		// Generate random bytes. 
		$r = random_bytes(16);
		if($displaydetail) printToPage ("r: $r");

		// Convert binary bytes to hexadecimal. 
		$b = bin2hex($r);
		if($displaydetail) printToPage ("b: $b");

		// Return hexadecimal bytes as salt. 
		return $b;
	}
	// Generate password hash. 
	function generatePasswdHash($input, $displaydetail=false) {

		// Generate password hash. 
		$h = hash('sha256',$input);
		if($displaydetail) printToPage ("h: $h");

		// Return password hash. 
		return $h;
	}

	// Save new record for current user session. 
	function saveNewSession() {
		// printToPage();
		printToPage("Creating new session record...");

		// Create record of new session. 
		$successfulsessionssaved = goCrudOp('sessions','create');
	}
?>
