


<?php

	// Connect to server database. 
	function openDbConnection() {

		// Define server credentials. 
		$sn = 'localhost';
		$un = 'root';
		$pw = '';
		$db = 'cis355xampp';
	
		// Open server connection to database. 
		$conn = new mysqli($sn,$un,$pw,$db);

		// 
		echo '<br>';

		// Check server connection to database. 
		if($conn) echo 'Connection successful';
		else echo 'Connection unsuccessful';

		// 
		if($conn->connect_error) die( 'Connection failed: ' . $conn->connect_error );

		// 
		echo '<br><br>';

		// 
		return $conn;
	}

	// Send query to database. 
	function sendDbQuery($conn,$sql) {

		// Send SQL query to database. 
		$querystate = $conn->query($sql);
	
		// Display state of successful query. 
		if($querystate) {
			echo 'Query successful';
		}
		// Display state of unsuccessful query. 
		else {
			echo 'Query unsuccessful' . $conn->error;
		}

		// 
		echo '<br>';
	
		// Return result of query. 
		return $querystate;
	}

	// Close server connection to database. 
	function closeDbConnection($conn) {
		$conn->close();
	}
?>
