
<?php

	// Check for valid session. 
	$validsession = isset($_SESSION) && isset($_SESSION['pid']) ;
	// printToPage("validsession = $validsession");

	// Check if current user is admin/operator. 
	$currentuserisadmin = isset( $_SESSION['currentuserisadmin'] ) && $_SESSION['currentuserisadmin'] ;
	// printToPage("currentuserisadmin = $currentuserisadmin");
	$currentuserisoperator = $currentuserisadmin || ( isset($_SESSION['currentuserisoperator']) && $_SESSION['currentuserisoperator'] );
	// printToPage("currentuserisoperator = $currentuserisoperator");


	// Check if given email address already exists for another user. 
	function checkForSameEmail( $email ) {
		printToPage();
		printToPage("Checking for users with same email...");

		// Create database query. 
		$sql = " SELECT id FROM `parents` WHERE (emailaddress='$email') ; ";
		// Send database query and save result. 
		$queryresult = sendDatabaseQuery( $sql );

		// Return validity of record for newly added person. 
		return ( $queryresult['summary']['rowreturn'] );
	}

	// Create new user account for parent or operator. 
	function createNewUser( $name , $phone , $email , $pwd , $pwd1 ) {
		printToPage();
		printToPage("Creating new user...");

		// Ensure both passwords match. 
		if( !$pwd || !$pwd1 || $pwd!=$pwd1 ) return null;
		// Generate password salt for new user. 
		$passwdsalt = generateRandomSalt();
		// Generate password hash. 
		$passwdhash = getPasswdHash( $pwd . $passwdsalt );

		// Create database query. 
		$sql = " INSERT INTO `parents` (parentname,phonenumber,emailaddress,passwdsalt,passwdhash) VALUES ( '$name' , '$phone' , '$email' , '$passwdsalt' , '$passwdhash' ) ; ";
		// Send database query and save result. 
		$queryresult = sendDatabaseQuery( $sql );

		// // Create database query. 
		// $sql = " SELECT LAST_INSERT_ID() AS parentid; ";
		// // Send database query and save result. 
		// $queryresult = sendDatabaseQuery( $sql );
		// // Get id of person. 
		// $parentid = $queryresult['tablerows'][0]['parentid'];

		// Return validity of record for newly added person. 
		return ( $queryresult['summary']['roweffect'] /* && $queryresult['summary']['success'] */ );
	}

	// Get id of given person (by email address). 
	function getPersonIdByEmail( $email ) {
		printToPage();
		printToPage("Getting person by email...");

		// Create database query. 
		$sql = " SELECT id FROM `parents` WHERE (emailaddress='$email') ; ";
		// Send database query and save result. 
		$queryresult = sendDatabaseQuery( $sql );

		// Return id of selected person (if valid). 
		return $queryresult['summary']['roweffect'] ? $queryresult['tablerows'][0]['id'] : null ;
	}

	// Get profile of given user (by id). 
	function getUserProfileById( $pid ) {
		printToPage();
		printToPage("Getting user profile by id...");

		// Create database query. 
		$sql = " SELECT p.parentname, p.emailaddress, s.startedat as lastlogin FROM (`parents` as p) LEFT JOIN (`sessions` as s) ON (s.userid=p.id) WHERE (p.id='$pid') ORDER BY s.startedat desc ; ";
		// Send database query and save result. 
		$queryresult = sendDatabaseQuery( $sql );
		// print $queryresult['summary']['roweffect'] ? json_encode( $queryresult['tablerows'] ) : '[no profile data]' ;

		// Return profile of selected person (if valid). 
		return $queryresult['summary']['roweffect'] ? $queryresult['tablerows'][0] : null ;
	}

	// Check for valid user login info. 
	function checkUserLogin( $pid , $passwd ) {
		printToPage();
		printToPage("Checking user login...");

		// Create database query. 
		$sql = " SELECT passwdsalt FROM `parents` WHERE (id=$pid) ; ";
		// Send database query and save result. 
		$queryresult = sendDatabaseQuery( $sql );
		// Get password salt for given user. 
		$passwdsalt = $queryresult['tablerows'][0]['passwdsalt'];

		// Generate password hash. 
		$passwdhash = getPasswdHash( $passwd . $passwdsalt );

		// Create database query. 
		$sql = " SELECT id FROM `parents` WHERE ( (id=$pid) AND (passwdhash='$passwdhash') ) ; ";
		// Send database query and save result. 
		$queryresult = sendDatabaseQuery( $sql );

		// Return validity of record for selected user. 
		return $queryresult['summary']['roweffect'] /* ? $queryresult['tablerows'][0]['id'] : null */ ;
	}

	// Initialize new session data. 
	function createNewSession( $pid , $newrealsession=1 ) {
		global $programmermode;
		printToPage();
		printToPage("Creating new session...");

		// Display's user id. 
		if( $programmermode ) {

			// Display's user id. 
			// printToPage("User ID: $pid");
			printResultList( "User ID" , $pid );
		}

		// Get id of admin. 
		// $adminid = 1;
		$adminid = getPersonIdByEmail('tituswebdev@gmail.com');
		// Get id of operator. 
		// $operatorid = 2;
		$operatorid = getPersonIdByEmail('aceboogie@yahoo.com');

		// Get details of user profile. 
		$userprofile = getUserProfileById($pid);
		printResultList( 'User profile' , $userprofile );
		// Set session data: id of parent user. 
		$_SESSION['pid'] = $pid;
		$_SESSION['name'] = $userprofile['parentname'] ?? '';
		$_SESSION['email'] = $userprofile['emailaddress'] ?? '';
		$_SESSION['lastlogin'] = $userprofile['lastlogin'] ?? '';

		// Set session data: admin state of parent user. 
		$_SESSION['currentuserisadmin'] = ( $pid==$adminid ) ? 1 : 0 ;

		// Set session data: operator state of parent user. 
		$_SESSION['currentuserisoperator'] = ( $pid==1 || $pid==$operatorid ) ? 1 : 0 ;

		// Save new session to database. 
		if( $newrealsession ) saveNewSession($pid);

		// 
		return 1;
	}

	// Save new session to database. 
	function saveNewSession( $pid ) {
		printToPage();
		printToPage("Saving new session...");

		// Get user agent. 
		$useragent = $_SERVER['HTTP_USER_AGENT'];
		$useripaddress = $_SERVER['REMOTE_ADDR'] .' : '. $_SERVER['REMOTE_PORT'];

		// Compile database query. 
		$sql = " INSERT INTO `sessions` (`userid`,`useripaddress`,`useragent`) VALUES ( $pid , '$useripaddress' , '$useragent' ); ";

		// Send database query. 
		$queryresult = sendDatabaseQuery( $sql );
	}

	// Clear out current session data. 
	function clearSession() {

		// Reset session data. 
		$_SESSION['pid'] = null;

		// Clear details of user session. 
		session_unset();
		// End user session. 
		session_destroy();
	}

	// Check if given database table is visible to current user. 
	function isTableVisibleToUser($selectedtableid) {
		global $databasetables, $currentuserisadmin, $currentuserisoperator;

		// Get meta-data for current database table. 
		$selecteddatabasetable = $databasetables[$selectedtableid];

		// 
		return $selecteddatabasetable['allparentsaccess'] || ( $currentuserisoperator && $selecteddatabasetable['operatoraccess'] ) || ( $currentuserisadmin && $selecteddatabasetable['adminaccess'] ) ; 
	}
?>
