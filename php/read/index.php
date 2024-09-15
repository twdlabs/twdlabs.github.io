


<?php


	// Get functions to access server database. 
	require_once('../assets/connect.php');
	// Get functions to access given field data. 
	require_once('../assets/input.php');
	// Get functions to access given field data. 
	require_once('../assets/output.php');

	// Connect to server database. 
	$conn = openDbConnection();

	// Read existing database entries. 
	$queryresult = readEntries($conn);
	showResult($queryresult);

	// Close server connection. 
	closeDbConnection($conn);


	/*****/


	// Read existing database entries. 
	function readEntries($conn) {

		// Create SQL database query. 
		$sql = "SELECT * FROM shots";
	
		// Send SQL query to database. 
		return sendDbQuery($conn,$sql);
	}
?>
