


<?php


	// Get functions to access server database. 
	require_once('../assets/connect.php');
	// Get functions to access given field data. 
	require_once('../assets/input.php');
	// Get functions to access given field data. 
	require_once('../assets/output.php');

	// Connect to server database. 
	$conn = openDbConnection();

	// Create new database entry. 
	$queryresult = createNewEntry($conn);
	showResult($queryresult);

	// Close server connection. 
	closeDbConnection($conn);


	/*****/


	// Create new database entry. 
	function createNewEntry($conn) {

		// Get value of form field: xyz. 
		$clubid = getFieldValue('clubid');
		// Get value of form field: xyz. 
		$holeid = getFieldValue('holeid');

		// Create SQL database query. 
		$sql = "INSERT INTO shots(clubid,holeid) VALUES($clubid,$holeid)";
	
		// Send SQL query to database. 
		return sendDbQuery($conn,$sql);
	}
?>
