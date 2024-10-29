
<?php


	// Define login mode. 
	$easyusermode = false;
	$easypasswdmode = true;

	// Define input receipt mode. 
	$cleanuplogincredentials = false;

	// Set state of refresh after login. 
	$dorefreshafterlogin = true;

	// Set state of refresh after logout. 
	$dorefreshafterlogout = true;


	/*****/


	// Check for in/out user operations. 
	function checkTheDoor() {
		printToPage();
		printToPage("Now checking the door...");

		// Check if logout request received. 
		$abouttobeonthewayoutthedoor = isset( $_GET['logout'] );
		// Check if registration received. 
		$registrationreceived = isset( $_POST['register'] );
		// Check if login received. 
		$loginreceived = isset( $_POST['login'] );

		// Execute user registration. 
		if( $registrationreceived ) {

			// Create new user. 
			$loginreceived = createNewUser();
		}
		// Execute user login. 
		if( $loginreceived ) {

			// Login existing user. 
			return loginExistingUser();
		}
		// Execute user logout. 
		if( $abouttobeonthewayoutthedoor ) {

			// Logout current user. 
			logoutUser();
		}
	}
	// TODO: Create new user. 
	function createNewUser() {

		// Get user input: name. 
		$uid = getFieldValueById('name');
		// Get user input: password. 
		$passwd = getFieldValueById('passwd');
		// Get user input: password. 
		$passwdrpt = getFieldValueById('passwdrpt');
		// Check if passwords match. 
		$pwmatch = ($passwd == $passwdrpt);

		// Proceed (if passwords match). 
		if($pwmatch) {
			// Create database query. 
			$sql = " INSERT INTO persons (personid,password) values ($personid,'$passwd'); ";
			// Send database query. 
			sendDatabaseQuery($sql);
			return true;
		}
		else return false;
	}
	// Login existing user. 
	function loginExistingUser() {
		global $easyusermode;
		global $easypasswdmode;
		global $dorefreshafterlogin;
		global $cleanuplogincredentials;
		// if( !isset( $_POST['userid'] ) || !$_POST['userid'] ) return;

		// Do user selection in easy mode. 
		if($easyusermode) {

			// Get user input: user id. 
			if($cleanuplogincredentials) $uid = getFieldValueById('userid');
			else $uid = $_POST['userid'];
		}
		// Do user selection in non-easy mode. 
		else {

			// Get user input: username. 
			if($cleanuplogincredentials) $uname = getFieldValueById('username');
			else $uname = $_POST['username'];

			// Get user id (using username). 
			$uid = getUserIdByUsername($uname);
			if(!$uid) return false;
		}

		// Disregard password (easy mode). 
		if($easypasswdmode) {

			// Create database query to find existing user. 
			$sql = " SELECT p.id FROM (persons as p) WHERE (p.username='$uname'); ";
			// Send database query to find user. 
			$userqueryresult = sendDatabaseQuery($sql);
		}
		// Check password (non-easy mode). 
		else {

			// Get user input: password. 
			if($cleanuplogincredentials) $pw = getFieldValueById('password');
			else $pw = $_POST['password'];

			// Get hashing salt for given user. 
			$pwslt = getUserSaltById($uid);

			// Get password hash for input password and selected user. 
			$passwdhash = generatePasswdHash($pw.$pwslt);

			// Create database query to find existing user. 
			// $sql = " SELECT * FROM (persons as p) WHERE (p.id=$uid AND p.passwdhash='$passwdhash'); ";
			$sql = " SELECT * FROM (persons as p) WHERE (p.username='$uname' AND p.passwdhash='$passwdhash'); ";
			// Send database query to find user. 
			$userqueryresult = sendDatabaseQuery($sql);
		}
	
		// Save user id as session data (if match found). 
		if($userqueryresult) {

			// Update user session data: Save user id. 
			$_SESSION['userid'] = $uid;

			// Return result. 
			return true;
		}
		// Clear session data (if match not found). 
		else {

			// Logout user. 
			logoutUser();

			// Return result. 
			return false;
		}

		// Refresh page. 
		if($dorefreshafterlogin) header('location:./');
	}
	// Get id of given user. 
	function getUserIdByUsername($uname) {

		// Create database query. 
		$sql = " SELECT id FROM persons WHERE (username='$uname'); ";
		// printToPage('Retrieving user id...');
		// printQueryToPage($sql);

		// Send database query to get hashing salt. 
		$userqueryresult = sendDatabaseQuery($sql);

		// Return id if found. 
		if($userqueryresult) {
			// printToPage('User id found.');
			return $userqueryresult[0]['id'];
		}
		// Return nothing if not found. 
		else {
			// printToPage('User id not found.');
			return null;
		}
	}
	// Get hashing salt for given user. 
	function getUserSaltById($uid) {

		// Create database query. 
		$sql = " SELECT passwdsalt FROM persons WHERE (id=$uid); ";
		printToPage('Retrieving user salt...');
		// printQueryToPage($sql);

		// Send database query to get hashing salt. 
		$saltqueryresult = sendDatabaseQuery($sql);

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
		if(!$uid) return false;

		// Compile database query. 
		$basicusersquery = $databasetables['admins']['basicquery'];
		// $basicusersquery = " SELECT * FROM admins; ";
		$sql = "$basicusersquery WHERE (personid=$uid)";
		// printToPage('Retrieving data for current user...');
		// printQueryToPage($sql);

		// Send database query. 
		$userresult = sendDatabaseQuery($sql);
		// printToPage( json_encode($userresult) );
		printToPage( isset($userresult[0]) ? 'TRUE' : 'FALSE' );

		// Get current user. 
		return isset($userresult[0]);
	}
	// Get data for given user. 
	function getUserData($uid) {
		global $databasetables;
		printToPage();
		printToPage("Now retrieving user data...");
		if(!$uid) return null;

		// Compile database query. 
		$basicusersquery = $databasetables['persons']['basicquery'];
		$sql = "$basicusersquery WHERE (id=$uid)";
		// printToPage('Retrieving data for current user...');
		// printQueryToPage($sql);

		// Send database query. 
		$userresult = sendDatabaseQuery($sql);
		// printToPage( json_encode($userresult) );

		// Display data for given user. 
		printToPage("Got it!");
		// printToPage( json_encode($userresult[0]) );

		// Return data for given user. 
		return $userresult[0];
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
