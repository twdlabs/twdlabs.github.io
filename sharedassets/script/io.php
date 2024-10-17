
<?php

	// Get field value using field id. 
	function getFieldValueById($fieldid) {
		
		// Get user input field value (sanitized). 
		$fieldvalue = cleanInputForQuery( $_POST[$fieldid] );

		// Return field value. 
		return $fieldvalue;
	}
	// Get field value (with fallback default value) using field id. 
	function getFieldValueByIdWithDefault($fieldid) {

		// Get user input field value. 
		$fieldvalue = $_POST[$fieldid] /* ?? '' */;
		// Check for multiple field values. 
		$gotmultivalue = is_array($fieldvalue);

		// Sanitize field value. 
		$fieldvalue = cleanInputForQuery($fieldvalue);

		// Handle empty field value. 
		if($fieldvalue==null) {

			// TODO: Set null field value. 
			// $fieldvalue = null;
			$fieldvalue = -1;
			// $fieldvalue = 'xyz';
			// $fieldvalue = 0;
			// $fieldvalue = '0';

			// Display default field value. 
			printToPage("$fieldid: $fieldvalue (default)");
		}
		// Display for multiple field values. 
		else if($gotmultivalue) {
			
			// Get list of input field values. 
			$fieldvaluelist = getCommaList($fieldvalue);
			
			// Display input field values. 
			printToPage("$fieldid: [ $fieldvaluelist ]");
		}
		// Display for single field value. 
		else {

			// Display input field value. 
			printToPage("$fieldid: $fieldvalue");
		}

		// Return field value. 
		return $fieldvalue;
	}
	// Clean user input for database query (SQL). 
	function cleanInputForQuery($input) {
		global $db;

		// 
		return $db->real_escape_string($input);
		return addslashes($input);
	}
	// Clean user input for output (HTML). 
	function cleanInputForOutput($input) {

		// 
		return htmlspecialchars($input);
		return htmlentities($input);
	}
	// Clean user input. 
	function cleanInput($input) {

		// 
		return filter_var($input);
	}

	// Send database query to get result table rows. 
	function sendDatabaseQuery($sql) {
		global $db;
		$printstuffout = false;
		// $printstuffout = true;
		
		// Send database query. 
		$queryresult = $db->query($sql);
		// print "<script>console.log('Sending database query:','$sql')</script>";
		// Get status of database query. 
		$querystatus = getQueryStatus($queryresult);
		// Display status of database query. 
		// header('Content-Type: application/json');

		// Check for any result rows in query. 
		$anyresultrows = $queryresult && isset($queryresult->num_rows);
		// Get returned query results (if any rows exist). 
		if($anyresultrows) {

			// Initialize list of result table rows. 
			$resulttablerows = [];

			// Go thru each row from query result table. 
			while( $queryrow = $queryresult->fetch_assoc() ) {

				// Save table row to list. 
				$resulttablerows[] = $queryrow;
			}
		}

		// Display results. 
		if($printstuffout) {

			// Display query. 
			printToPage ($sql);

			// Display query status. 
			printToPage( json_encode($querystatus) );

			// Display result of query (list of table rows). 
			printToPage( $anyresultrows ? json_encode($resulttablerows) : 'null' );
		}

		// Return resulting list of table rows from query. 
		return $anyresultrows ? $resulttablerows : null;
	}
	// Get status of database query. 
	function getQueryStatus($queryresult) {
		global $db;

		// Get number of rows hit by database query. 
		$numrows = $db->affected_rows;

		// Return status of successful query. 
		if($queryresult) $querystatus = [
			'status'=>'success',
			'rows'=>$numrows,
		];

		// Return status of unsuccessful query. 
		else $querystatus = [
			'status'=>'error',
			'rows'=>$numrows,
			'message'=>$db->error,
		];

		// Return query status. 
		return $querystatus;
	}
?>
