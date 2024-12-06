
<?php


	// Define login modes. 
	$quickloginmode = true;
	$easypassmode = false;
	// $easypassmode = true;

	// Check if login received. 
	$isloginreceived = isset( $_POST['login'] ) ;
	$isautologinreceived = isset( $_POST['autologinuserid'] ) ;
	// Check if login registration received. 
	$isregistrationreceived = isset( $_POST['login'] ) && ( $_POST['login'] == 'register' ) ;


	/*****/


	// Check for user state changes. 
	function checkUserChanges() {
		global $isloginreceived,$isautologinreceived,$isregistrationreceived;
		// printToPage();
		// printToPage("Checking for changes in user state...");

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
		if( $isautologinreceived ) {

			// Get user id. 
			$uid = $_POST['autologinuserid'] ?? 1;

			// Update session data: user id. 
			$_SESSION['currentuserid'] = $uid;
		}

		// Execute user registration. 
		else if( $isregistrationreceived ) {
			printToPage("Registration received...");

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
			printToPage("Login received...");

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
		global $easypassmode;
		// if( !isset( $_POST['userid'] ) || !$_POST['userid'] ) return;

		// Define input receipt mode. 
		$cleanuplogincredentials = false;
		// $cleanuplogincredentials = true;

		// Disregard password (easy mode). 
		if($easypassmode) {
	
			// Get user input: username. 
			$uname = $cleanuplogincredentials ? getFieldValueById('username') : $_POST['username'];

			// Define list of conditions for database query. 
			$querycondition = " username=$uname ";
		}
		// Check password (production mode). 
		else {

			// Get user input: password. 
			$pw = $cleanuplogincredentials ? getFieldValueById('password') : $_POST['password'];
	
			// Get user input: username. 
			$uname = $cleanuplogincredentials ? getFieldValueById('username') : $_POST['username'];
			// Get hashing salt for given user. 
			$pwslt = getUserSalt($uname,'username');
			// Get password hash for input password and selected user. 
			$passwdhash = getPasswdHash($pw.$pwslt);

			// Define list of conditions for database query. 
			$querycondition = " username='$uname' AND passwdhash='$passwdhash' ";
		}

		// Create database query. 
		$sql = " SELECT id, username FROM persons WHERE ($querycondition); ";
		$sql = " 
		SELECT p.id, p.username, count(distinct a.personid) as admincount 
		FROM (persons as p) LEFT JOIN (admins as a) ON (a.personid=p.id) 
		WHERE ($querycondition) 
		GROUP BY p.id; ";

		// Send database query to find existing user. 
		$userloginqueryresult = sendDatabaseQuery($sql)['queryresults'];
		$userfound = isset( $userloginqueryresult[0] );

		// Save user id as session data (if match found). 
		if( $userfound ) {

			// Get id of existing user. 
			$uid = $userloginqueryresult[0]['id'];
			$adminstatus = $userloginqueryresult[0]['admincount'];

			// Save user id into session data. 
			$_SESSION['currentuserid'] = $uid;
			$_SESSION['currentuseradmin'] = $adminstatus;
		}
		// Clear session data (if match not found). 
		else {

			// Clear session data upon logout. 
			session_destroy();
		}

		// Return result. 
		return $userfound;
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
	function logoutUser($doredirectafterlogout=false) {
		// print "<script>console.log('Now logging out...')</script>";

		// Clear session data upon logout. 
		session_destroy();

		// Refresh page. 
		if($doredirectafterlogout) header('location:./?view=login');
	}

	// Get id of currently active user (from session data). 
	function getCurrentUserId($displaydetail=false) {
		// printToPage();
		printToPage("Retrieving user id...");

		// Get id of current user (if valid). 
		$uid = $_SESSION['currentuserid'] ?? null;

		// Display result block. 
		if($displaydetail) {
			?>
			<!-- resultblock -->
			<details class="resultblock">
				<?php if( $uid ): ?>
					<summary>User id: <?php print $uid; ?></summary>
				<?php else: ?>
					<summary>User id: [none]</summary>
				<?php endif; ?>
				<span class="resultstring"><?php print json_encode( $_SESSION ); ?></span>
			</details>
			<!-- /resultblock -->
			<?php
		}

		// Return id of current user. 
		return $uid;
	}
	// Retrieve profile data for given user. 
	function getUserProfile( $uid, $displaydetail=false ) {
		// printToPage();
		printToPage("Retrieving user profile data...");

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
		$userqueryresults = sendDatabaseQuery($sql,$displaydetail)['queryresults'];

		// Display result block. 
		if( $displaydetail ) {
			?>
			<!-- resultblock -->
			<details class="resultblock">
				<?php if( $userqueryresults ): ?>
					<summary>Got it: User data found!</summary>
				<?php else: ?>
					<summary>Not it: No user data found!</summary>
				<?php endif; ?>
				<span class="resultstring"><?php print json_encode( $userqueryresults ); ?></span>
			</details>
			<!-- /resultblock -->
			<?php
		}

		// Return user data (if user found). 
		// Return nothing (if no user found). 
		return $userqueryresults[0] ?? null;
	}
	// Check admin status of given user. 
	function checkIfUserAdmin( $uid, $displaydetail=false ) {
		// printToPage();
		printToPage("Checking user's admin status...");

		// Return nothing if no user id given. 
		if(!$uid) return false;

		// Create database query. 
		$sql = " SELECT personid FROM admins WHERE (personid=$uid) ";

		// Send database query. 
		$adminqueryresults = sendDatabaseQuery($sql,$displaydetail)['queryresults'];

		// Display result block. 
		if( $displaydetail ) {
			?>
			<!-- resultblock -->
			<details class="resultblock">
				<?php if( $adminqueryresults ): ?>
					<summary>TRUE: Admin</summary>
				<?php else: ?>
					<summary>FALSE: Not admin</summary>
				<?php endif; ?>
				<span class="resultstring"><?php print json_encode( $adminqueryresults ); ?></span>
			</details>
			<!-- /resultblock -->
			<?php
		}

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
	// Get hash of given password. 
	function getPasswdHash($input, $displaydetail=false) {

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
