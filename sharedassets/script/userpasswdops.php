
<?php


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

	// Get hash of given password. 
	function getPasswdHash($input, $displaydetail=false) {

		// Generate password hash. 
		$h = hash('sha256',$input);
		if($displaydetail) printToPage ("h: $h");

		// Return password hash. 
		return $h;
	}
?>
