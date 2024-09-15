


<?php


	// Get functions to access server database. 
	require_once('../assets/connect.php');
	// Get functions to access given field data. 
	require_once('../assets/input.php');
	// Get functions to access given field data. 
	require_once('../assets/output.php');

	// Connect to server database. 
	$conn = openDbConnection();

	// Delete existing database entry. 
	$queryresult = deleteEntry($conn);
	showResult($queryresult);

	// Close server connection. 
	closeDbConnection($conn);


	/*****/


	// Delete existing database entry. 
	function deleteEntry($conn) {

		// Get value of form field: xyz. 
		$id = getFieldValue('shotid');

		// Create SQL database query. 
		$sql = "DELETE FROM shots WHERE id=$id";
	
		// Send SQL query to database. 
		return sendDbQuery($conn,$sql);
	}
?>
