
<?php


	// Define login mode. 
	$easyusermode = false;
	$easypassmode = true && false;

	// Define input receipt mode. 
	$cleanuplogincredentials = true;

	// Set state of refresh after login. 
	$dorefreshafterlogin = true;

	// Set state of refresh after logout. 
	$dorefreshafterlogout = true;

	// Check if registration received. 
	$registrationreceived = isset( $_POST['register'] );
	// Check if login received. 
	$loginreceived = isset( $_POST['login'] );
	// Check if logout request received. 
	$abouttobeonthewayoutthedoor = isset( $_GET['logout'] );


	/*****/


	// Check for in/out user operations. 
	function checkIfUserIn() {
		global $registrationreceived,$loginreceived,$abouttobeonthewayoutthedoor;
		printToPage();
		printToPage("Now checking the door...");

		// Execute user registration. 
		if( $registrationreceived ) {

			// Create new user. 
			$loginreceived = createNewUser();
		}

		// Execute user login. 
		if( $registrationreceived || $loginreceived ) {

			// Login existing user. 
			$loggedin = loginExistingUser();

			// Refresh page. 
			if($loggedin) header('location:./?view=home');
			else header('location:./?view=login');

			// Return login state. 
			return $loggedin;
		}

		// Execute user logout. 
		if( $abouttobeonthewayoutthedoor ) {

			// Logout current user. 
			logoutUser();
		}
	}
	// TODO: Create new user. 
	function createNewUser() {

		// Create entry for new person. 
		goCrudOp('persons','create');

		// 
		// if($xyz) return true;
		// else return false;
	}
	// TODO: Login existing user. 
	function loginExistingUser() {
		global $easyusermode, $easypassmode;
		global $dorefreshafterlogin;
		global $cleanuplogincredentials;
		// if( !isset( $_POST['userid'] ) || !$_POST['userid'] ) return;

		// Define field list for database query. 
		$fieldlist = 'id, username';

		// Disregard password (easy mode). 
		if($easypassmode) {

			// Select user (easy mode). 
			if($easyusermode) {
	
				// Get user input: user id. 
				$uid = $cleanuplogincredentials ? getFieldValueById('userid') : $_POST['userid'];
		
				// Create database query. 
				$sql = " SELECT $fieldlist FROM persons WHERE (id=$uid); ";
			}
			// Select user (non-easy mode). 
			else {
	
				// Get user input: username. 
				$uname = $cleanuplogincredentials ? getFieldValueById('username') : $_POST['username'];
		
				// Create database query. 
				$sql = " SELECT $fieldlist FROM persons WHERE (username='$uname'); ";
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

				// Create database query. 
				$sql = " SELECT $fieldlist FROM persons WHERE (id=$uid AND passwdhash='$passwdhash'); ";
			}
			// Select user (non-easy mode). 
			else {
	
				// Get user input: username. 
				$uname = $cleanuplogincredentials ? getFieldValueById('username') : $_POST['username'];

				// Get hashing salt for given user. 
				$pwslt = getUserSalt($uname,'username');
	
				// Get password hash for input password and selected user. 
				$passwdhash = generatePasswdHash($pw.$pwslt);

				// Create database query. 
				$sql = " SELECT $fieldlist FROM persons WHERE (username='$uname' AND passwdhash='$passwdhash'); ";
			}
		}

		// Send database query to find existing user. 
		$userqueryresult = sendDatabaseQuery($sql)['queryresults'];
	
		// Save user id as session data (if match found). 
		if( isset($userqueryresult[0]) ) {

			// Get id of existing user. 
			$uid = $userqueryresult[0]['id'];

			// Update user session data: Save user id. 
			$_SESSION['userid'] = $uid;

			// Return result. 
			return true;
		}
		// Clear session data (if match not found). 
		else {

			// Clear session data upon logout. 
			session_destroy();

			// Return result. 
			return false;
		}
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
	function logoutUser() {
		global $dorefreshafterlogout;
		// print "<script>console.log('Now logging out...')</script>";

		// Clear session data upon logout. 
		session_destroy();

		// Refresh page. 
		if($dorefreshafterlogout) header('location:./');
	}

	// Get id of currently active user (from session data). 
	function getCurrentUserId() {

		// Get id of current user (if valid). 
		$uid = isset( $_SESSION['userid'] ) ? $_SESSION['userid'] : null;

		// Return id of current user. 
		return $uid;
	}
	// Check admin status of given user. 
	function checkIfUserAdmin($uid) {
		global $databasetables;
		printToPage();
		printToPage("Now checking if user is admin...");

		// Return nothing if no user id given. 
		if(!$uid) return false;

		// Compile database query. 
		$basicusersquery = $databasetables['admins']['basicquery'];
		// $basicusersquery = " SELECT * FROM admins; ";
		$sql = "$basicusersquery WHERE (personid=$uid)";
		// printToPage('Retrieving data for current user...');
		// printQuery($sql);

		// Send database query. 
		$adminqueryresults = sendDatabaseQuery($sql)['queryresults'];
		// printToPage( json_encode($adminqueryresults) );
		printToPage( isset($adminqueryresults[0]) ? 'true' : 'false' );

		// Get current user. 
		return isset($adminqueryresults[0]);
	}
	// Get data for given user. 
	function getUserData($uid,$displayuserdata=false) {
		global $databasetables;
		printToPage();
		printToPage("Now retrieving user data...");

		// Return nothing if no user id given. 
		if(!$uid) return null;

		// Compile database query. 
		$basicusersquery = $databasetables['persons']['basicquery'];
		$sql = "$basicusersquery WHERE (id=$uid)";
		// printToPage('Retrieving data for current user...');
		// printQuery($sql);

		// Send database query. 
		$userqueryresults = sendDatabaseQuery($sql)['queryresults'];
		// printToPage( json_encode($userqueryresults) );

		// Return nothing if no user found. 
		if( sizeof($userqueryresults)==0 ) {

			// Display data for no user. 
			printToPage("Not it!");
	
			// Return nothing. 
			return null;
		}

		// Return user data if user found. 
		else {

			// Display data for given user. 
			printToPage("Got it!");
			if($displayuserdata) printToPage( json_encode($userqueryresults[0]) );
	
			// Return data for given user. 
			return $userqueryresults[0];
		}
	}

	// Generate random salt for password hashing. 
	function generateRandomSalt() {

		// Generate random bytes. 
		$r = random_bytes(16);
		printToPage ("r: $r");

		// Convert binary bytes to hexadecimal. 
		$b = bin2hex($r);
		printToPage ("b: $b");

		// Return hexadecimal bytes as salt. 
		return $b;
	}
	// Generate password hash. 
	function generatePasswdHash($input) {

		// Generate password hash. 
		$h = hash('sha256',$input);
		printToPage ("h: $h");

		// Return password hash. 
		return $h;
	}

	// Save new record for current user session. 
	function saveNewSession() {
		printToPage();
		printToPage("Now creating new session record...");

		// Create record of new session. 
		goCrudOp('sessions','create');
	}
?>
