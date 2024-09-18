


<?php

	// Connect to server database. 
	function openDb() {

		// Define server credentials. 
		$sn = 'localhost';
		$un = 'root';
		$pw = '';
		$db = 'cis355xampp';
		// Open server connection to database. 
		$dbconnect = new mysqli($sn,$un,$pw,$db);

		// Check server connection to database. 
		if($dbconnect) {

			// Notify if connection successful. 
			print '<br>Connection started...';
			
			// Notify of any connection errors. 
			if($dbconnect->connect_errno) {
				$errornum = $dbconnect->connect_errno;
				$errormsg = $dbconnect->connect_error;
				exit( "<br>Connection error ($errornum): $errormsg" );
			}
		}
		// Notify if connection unsuccessful. 
		else print '<br>Connection failed.';
		// Insert line. 
		print '<br>';

		// Return connection. 
		return $dbconnect;
	}

	// Disconnect from server database. 
	function closeDb($db) {

		// Close server connection to database. 
		$db->close();
		print '<br><br>Connection closed.';
		// Insert lines. 
		print '<br><br>';
	}
?>
