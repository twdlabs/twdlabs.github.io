
<?php

	// Check crud operation from previous page. 
	function checkForOperation() {
		global $databasetables;
		$no_operation = !isset( $_POST['tid'] ) || !isset( $_POST['operation'] );
		if($no_operation) return;

		// Get operation parameters. 
		$tid = cleanInputForQuery( $_POST['tid'] );
		$operation = cleanInputForQuery( $_POST['operation'] );

		// Go for person operation. 
		if( $tid=='persons' ) {

			// Perform person create operation. 
			if($operation=='create') {
	
				// Get query parameter(s). 
				$personname = cleanInputForQuery( $_POST['personname'] );
				$department = cleanInputForQuery( $_POST['department'] );
				$emailaddress = cleanInputForQuery( $_POST['emailaddress'] );

				// Create database query. 
				$sql = "INSERT INTO persons (personname, department, emailaddress) VALUES ('$personname', '$department', '$emailaddress');";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform person update operation. 
			else if($operation=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$personname = cleanInputForQuery( $_POST['personname'] );
				$department = cleanInputForQuery( $_POST['department'] );
				$emailaddress = cleanInputForQuery( $_POST['emailaddress'] );

				// Create database query. 
				$sql = "UPDATE persons SET personname='$personname', department='$department', emailaddress='$emailaddress' WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform person delete operation. 
			else if($operation=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM persons WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
		}

		// Go for issue operation. 
		else if( $tid=='issues' ) {

			// Perform issue create operation. 
			if($operation=='create') {
	
				// Get query parameter(s). 
				$issuetitle = cleanInputForQuery( $_POST['issuetitle'] );
				$issuedescription = cleanInputForQuery( $_POST['issuedescription'] );

				// Create database query. 
				$sql = "INSERT INTO issues (issuetitle, issuedescription) VALUES ('$issuetitle', '$issuedescription');";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform issue update operation. 
			else if($operation=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$issuetitle = cleanInputForQuery( $_POST['issuetitle'] );
				$issuedescription = cleanInputForQuery( $_POST['issuedescription'] );

				// Create database query. 
				$sql = "UPDATE issues SET issuetitle='$issuetitle', issuedescription='$issuedescription' WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform issue delete operation. 
			else if($operation=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM issues WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
		}

		// Go for comment operation. 
		else if( $tid=='comments' ) {

			// Perform comment create operation. 
			if($operation=='create') {
	
				// Get query parameter(s). 
				$issueid = cleanInputForQuery( $_POST['issueid'] );
				$personid = cleanInputForQuery( $_POST['personid'] );
				$commenttext = cleanInputForQuery( $_POST['commenttext'] );

				// Create database query. 
				$sql = "INSERT INTO comments (issueid, personid, commenttext) VALUES ('$issueid', '$personid', '$commenttext');";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform comment update operation. 
			else if($operation=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$commenttext = cleanInputForQuery( $_POST['commenttext'] );

				// Create database query. 
				$sql = "UPDATE comments SET commenttext='$commenttext' WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform comment delete operation. 
			else if($operation=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM comments WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
		}
	}

	// Check for logged-in user. 
	function checkForUser() {

		// 
		return isset( $_SESSION['username'] );
	}

	// Setup user. 
	function setupUser() {

		// Check for user registration. 
		$xyz = xyz;
		// Register user. 
		if($xyz) registerUser();

		// Check for user login. 
		$xyz = xyz;
		// Login user. 
		if($xyz) loginUser();
	}
	// Register user. 
	function registerUser() {

		// 
	}
	// Login user. 
	function loginUser() {

		// 
	}

	// Get result table for given table id. 
	function getResultTableById($giventableid,$fromhome=true) {
		global $databasetables;
		if(!$giventableid) return [];

		// Get database query. 
		if($fromhome) $sql = $databasetables[$giventableid]['homequery'];
		else $sql = $databasetables[$giventableid]['awayquery'];

		// Get rows of result table from query. 
		$resulttable = sendDatabaseQuery($sql);
		// printToPage($sql);

		// Return rows of result table. 
		return $resulttable;
	}
?>
