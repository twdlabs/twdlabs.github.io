
<?php

	// Send database query to get result table rows. 
	function sendDatabaseQuery($sql,$displayquerydetails=false) {
		global $db;

		// Display contents of database query. 
		if($displayquerydetails) printQuery($sql);
		
		// Send database query. 
		$query = $db->query($sql);
		// Get status of database query. 
		$querystatus = getQueryStatus($query);

		// Get data results from query (if any). 
		if( $querystatus['anyresults'] ) {

			// Initialize query result table. 
			$queryresults = [];

			// Go thru each row from query result table. 
			while( $tablerow = $query->fetch_assoc() ) {

				// Save current row to results table. 
				$queryresults[] = $tablerow;
			}
		}
		// Clear data results from query (if none). 
		else $queryresults = null;

		// Save query result into query status. 
		$querystatus['queryresults'] = $queryresults;

		// Display details of database query. 
		if($displayquerydetails) {
			printQueryDetails($querystatus);
			// header('Content-Type: application/json');
		}

		// Return resulting state of query. 
		return $querystatus;

		// Return resulting list of table rows from query. 
		// return $queryresults;

		// // 
		// $querystatus = sendDatabaseQuery($sql);
		// $queryresults = $querystatus['queryresults'];

		// // 
		// $queryresults = sendDatabaseQuery($sql)['queryresults'];
	}

	// Get status of database query. 
	function getQueryStatus($query) {
		global $db;

		// Define query status. 
		$querystatus = [

			// Get number of rows hit by query. 
			'roweffect'=> $db->affected_rows,

			// Check for any result rows from query. 
			'anyresults'=> isset($query->num_rows),
		];

		// Set status of successful query. 
		if($query) {

			// Set query status. 
			$querystatus['status'] = 'success';

			// Add query message. 
			$querystatus['message'] = 'Query executed successfully!';
		}

		// Set status of unsuccessful query. 
		else {

			// Set query status. 
			$querystatus['status'] = 'error';

			// Add query message. 
			$querystatus['message'] = $db->error;
		}

		// Return query status. 
		return $querystatus;
	}
?>
