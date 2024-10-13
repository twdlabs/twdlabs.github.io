
<?php

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

	// Check for crud operation. 
	function checkForOps() {
		global $databasetables;
		$no_operation = !isset( $_POST['tid'] ) || !isset( $_POST['operation'] );
		if($no_operation) return;

		// Get operation parameters. 
		$tid = cleanInput( $_POST['tid'] );
		$operation = cleanInput( $_POST['operation'] );

		// Check for person operation. 
		if( $tid=='persons' ) {

			// Perform person create operation. 
			if($operation=='create') {
	
				// Get query parameters. 
				$personname = cleanInput( $_POST['personname'] );
				$department = cleanInput( $_POST['department'] );
				$emailaddress = cleanInput( $_POST['emailaddress'] );

				// Create database query. 
				$sql = "INSERT INTO persons (personname, department, emailaddress) VALUES ('$personname', '$department', '$emailaddress');";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform person update operation. 
			else if($operation=='update') {
	
				// Get query parameters. 
				$id = cleanInput( $_POST['rid'] );
				$personname = cleanInput( $_POST['personname'] );
				$department = cleanInput( $_POST['department'] );
				$emailaddress = cleanInput( $_POST['emailaddress'] );

				// Create database query. 
				$sql = "UPDATE persons SET personname='$personname', department='$department', emailaddress='$emailaddress' WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform person delete operation. 
			else if($operation=='delete') {
	
				// Get query parameters. 
				$id = cleanInput( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM persons WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
		}

		// Check for issue operation. 
		else if( $tid=='issues' ) {

			// Perform issue create operation. 
			if($operation=='create') {
	
				// Get query parameters. 
				$issuetitle = cleanInput( $_POST['issuetitle'] );
				$issuedescription = cleanInput( $_POST['issuedescription'] );

				// Create database query. 
				$sql = "INSERT INTO issues (issuetitle, issuedescription) VALUES ('$issuetitle', '$issuedescription');";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform issue update operation. 
			else if($operation=='update') {
	
				// Get query parameters. 
				$id = cleanInput( $_POST['rid'] );

				// Create database query. 
				$sql = "UPDATE issues SET issuetitle='$issuetitle', issuedescription='$issuedescription' WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform issue delete operation. 
			else if($operation=='delete') {
	
				// Get query parameters. 
				$id = cleanInput( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM issues WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
		}

		// Check for comment operation. 
		else if( $tid=='comments' ) {

			// Perform comment create operation. 
			if($operation=='create') {
	
				// Get query parameters. 
				$personid = cleanInput( $_POST['personid'] );
				$issueid = cleanInput( $_POST['issueid'] );
				$commenttext = cleanInput( $_POST['commenttext'] );

				// Create database query. 
				$sql = "INSERT INTO comments (personid, issueid, commenttext) VALUES ('$issueid', '$personid', '$commenttext');";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform comment update operation. 
			else if($operation=='update') {
	
				// Get query parameters. 
				$id = cleanInput( $_POST['rid'] );
				$commenttext = cleanInput( $_POST['commenttext'] );

				// Create database query. 
				$sql = "UPDATE comments SET commenttext='$commenttext' WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
	
			// Perform comment delete operation. 
			else if($operation=='delete') {
	
				// Get query parameters. 
				$id = cleanInput( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM comments WHERE id='$id';";
				// Send database query. 
				sendDatabaseQuery($sql);
			}
		}
	}
?>