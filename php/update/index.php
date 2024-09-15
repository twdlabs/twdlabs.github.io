


<?php


	// Get functions to access server database. 
	require_once('../assets/connect.php');
	// Get functions to access given field data. 
	require_once('../assets/input.php');
	// Get functions to access given field data. 
	require_once('../assets/output.php');

	// Connect to server database. 
	$conn = openDbConnection();

	// Update existing database entry. 
	$queryresult = updateEntry($conn);
	showResult($queryresult);

	// Close server connection. 
	closeDbConnection($conn);


	/*****/


	// Update existing database entry. 
	function updateEntry($conn) {

		// Get value of form field: xyz. 
		$id = getFieldValue('shotid');
		// Get value of form field: xyz. 
		$clubid = getFieldValue('clubid');
		// Get value of form field: xyz. 
		$holeid = getFieldValue('holeid');

		// Create SQL database query. 
		$sql = "UPDATE shots SET (clubid,holeid) ('$clubid','$holeid') WHERE id=$id";
	
		// Send SQL query to database. 
		return sendDbQuery($conn,$sql);
	}
?>
