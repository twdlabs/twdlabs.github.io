
<?php


	// Check for user operations. 
	function checkUserOps() {

		// Check for user registration. 
		$userregistrationtakingplace = isset( $_POST['register'] );
		// Perform user registration. 
		if($userregistrationtakingplace) createNewUser();

		// Check for user login. 
		$userlogintakingplace = isset( $_POST['login'] );
		// Perform user login. 
		if($userlogintakingplace) loginUser();

		// TODO: Check if now logging out. 
		$useronthewayoutthedoor = isset( $_GET['logout'] );
		// Perform user logout. 
		if($useronthewayoutthedoor) {
			logoutUser();
			// exit;
		}
	}
	// Check id of current user. 
	function getUserId() {
		$sessionvalid = isset( $_SESSION );
		printToPage("Session valid: $sessionvalid");

		// Return current user id (if valid). 
		return isset( $_SESSION['userid'] ) ? $_SESSION['userid'] : null;
	}
	// TODO: Create new user. 
	function createNewUser() {

		// Get user input: name. 
		$name = getFieldValueById('name');
		// Get user input: password. 
		$passwd = getFieldValueById('passwd');
		// Get user input: password. 
		$passwdrpt = getFieldValueById('passwdrpt');
		// Check if passwords match. 
		$pwmatch = ($passwd == $passwdrpt);

		// Proceed (if passwords match). 
		if($pwmatch) {
			// Create database query. 
			$sql = "INSERT INTO persons (personid,password) values ('$personid','$passwd');";
			// Send database query. 
			sendDatabaseQuery($sql);
		}
		else ;

		// // Login user. 
		// loginUser();
	}
	// Login existing user. 
	function loginUser() {
		// if( !isset( $_POST['userid'] ) || !$_POST['userid'] ) return;
		$oversimplify = false;

		// Get user input: user id. 
		$uid = $_POST['userid'];
		// $uid = getFieldValueById('userid');
		// Get user input: password. 
		$pw = $_POST['password'];
		// $pw = getFieldValueById('password');
		$pwslt = getUserSaltById($uid);
		$passwdhash = generatePasswdHash($pw.$pwslt);

		// Run in simple mode. 
		if($oversimplify) $_SESSION['userid'] = $uid;

		// Run in production mode. 
		else {

			// Create database query to find existing user. 
			$sql = "SELECT * FROM (persons as p) WHERE p.id=$uid AND p.passwdhash='$passwdhash'";
			// Send database query to find user. 
			$userexists = sendDatabaseQuery($sql);
	
			// Save user id to session if user exists. 
			if($userexists) $_SESSION['userid'] = $uid;
			else session_destroy();
		}

		// TODO: Refresh page. 
		header('location:./');
	}
	// Logout current user. 
	function logoutUser($dorefresh) {
		print "<script>console.log('Logging out user...')</script>";

		// Destroy session upon logout. 
		session_destroy();

		// TODO: Refresh page. 
		// header('location:./');
	}

	// Get data for current user. 
	function getCurrentUser($currentuserid) {
		global $databasetables;
		if(!$currentuserid) return null;

		// Compile database query. 
		$awayquery = $databasetables['persons']['awayquery'];
		$sql = "$awayquery WHERE id=$currentuserid";
		printQueryToPage($sql);

		// Send database query. 
		$userresults = sendDatabaseQuery($sql);
		// printToPage( json_encode($userresults) );

		// Get current user. 
		return $userresults[0];
	}
?>
