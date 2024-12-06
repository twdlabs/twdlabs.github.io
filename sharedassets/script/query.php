
<?php

	// Send database query to get result table rows. 
	function sendDatabaseQuery($sql,$displaydetails=false) {
		global $db;

		// Display contents of database query. 
		if($displaydetails) printQuery($sql);
		
		// Send database query. 
		$query = $db->query($sql);
		// Get status of database query. 
		$querystatus = getQueryStatus($query);

		// Display details of database query. 
		if($displaydetails) printQueryDetails($querystatus);

		// Return resulting state of query. 
		return $querystatus;
	}
	// Get status of database query. 
	function getQueryStatus($query) {
		global $db;

		// Define query status. 
		$querystatus = [

			// Get number of rows hit by query. 
			'roweffect'=> $db->affected_rows,
		];

		// Set status of successful query. 
		if($query) {

			// Set query status. 
			$querystatus['success'] = true;

			// Add query message. 
			$querystatus['message'] = 'Query executed successfully!';
		}

		// Set status of unsuccessful query. 
		else {

			// Set query status. 
			$querystatus['success'] = false;

			// Add query message. 
			$querystatus['message'] = $db->error;
		}

		// Save query results into query status. 
		$querystatus['queryresults'] = getQueryResults($query);

		// Return query status. 
		return $querystatus;
	}
	// Get results of database query. 
	function getQueryResults($query) {

		// Initialize list of query results. 
		$queryresults = [];

		// Check for any result rows from query. 
		$anyresultrowsreturned = isset($query->num_rows);
		// Go thru data results from query (if any). 
		if( $anyresultrowsreturned ) {

			// Go thru each row from query result table. 
			while( $tablerow = $query->fetch_assoc() ) {

				// Save current row to list of query results. 
				$queryresults[] = $tablerow;
			}
		}

		// Return list of query results. 
		return $queryresults;
	}
?>
