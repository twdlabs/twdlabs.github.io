
<?php


	// Check for in/out user operations. 
	function checkTheDoor() {

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
			loginExistingUser();
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
			$sql = "INSERT INTO persons (personid,password) values ('$personid','$passwd');";
			// Send database query. 
			sendDatabaseQuery($sql);
		}
		else ;
	}
	// Login existing user. 
	function loginExistingUser($dorefresh=false,$oversimplify=false) {
		// if( !isset( $_POST['userid'] ) || !$_POST['userid'] ) return;

		// Get user input: user id. 
		$uid = $_POST['userid'];
		// $uid = getFieldValueById('userid');

		// Run in simple mode. 
		if($oversimplify) {

			// Save user id as session data. 
			$_SESSION['userid'] = $uid;
		}

		// Run in production mode. 
		else {

			// Get user input: password. 
			$pw = $_POST['password'];
			// $pw = getFieldValueById('password');
			// Get hashing salt for given user. 
			$pwslt = getUserSaltById($uid);
			// Get password hash for input password and selected user. 
			$passwdhash = generatePasswdHash($pw.$pwslt);

			// Create database query to find existing user. 
			$sql = "SELECT * FROM (persons as p) WHERE p.id=$uid AND p.passwdhash='$passwdhash'";
			// Send database query to find user. 
			$userqueryresult = sendDatabaseQuery($sql);
	
			// Save user id as session data (if match found). 
			if($userqueryresult) {
				$_SESSION['userid'] = $uid;
				return true;
			}

			// Delete session data (if match not found). 
			else {
				session_destroy();
				return false;
			}
		}

		// Refresh page. 
		if($dorefresh) header('location:./');
	}
	// Get hashing salt for given user. 
	function getUserSaltById($uid) {

		// Create database query. 
		$sql = "SELECT passwdsalt FROM persons WHERE id=$uid";
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
			return '';
		}
	}
	// Logout current user. 
	function logoutUser($dorefresh=true) {
		// print "<script>console.log('Now logging out...')</script>";

		// Delete session data upon logout. 
		session_destroy();

		// Refresh page. 
		if($dorefresh) header('location:./');
	}

	// Check id of current user. 
	function getUserId() {

		// Get id of current user (if valid). 
		$uid = isset( $_SESSION['userid'] ) ? $_SESSION['userid'] : null;

		// Return id of current user. 
		return $uid;
	}
	// Get data for current user. 
	function getUserData($uid) {
		global $databasetables;
		if(!$uid) return null;

		// Compile database query. 
		$awayquery = $databasetables['persons']['awayquery'];
		$sql = "$awayquery WHERE id=$uid";
		// printToPage('Retrieving user data...');
		// printQueryToPage($sql);

		// Send database query. 
		$userresults = sendDatabaseQuery($sql);
		// printToPage( json_encode($userresults) );

		// Get current user. 
		return $userresults[0];
	}
?>
