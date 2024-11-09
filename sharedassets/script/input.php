
<?php


	// Get field ids for given table. 
	function getAllFieldIds($tableid) {

		// Get list of field data. 
		$fielddatalist = $databasetables[$tableid]['fields'];

		// Isolate ids from list of field data. 
		return array_map('getFieldId', $fielddatalist );

		/****/

		// Get id of given field. 
		function getFieldId($field) {
			return $field['id'];
		}
	}
	// Get list of field values (for create query). 
	function getFieldValues($fieldids) {

		// Initialize list of field values. 
		$fieldvalues = [];

		// Go thru each field id key. 
		foreach($fieldids as $fid) {

			// Get field value. 
			$value = getFieldValueByIdWithDefault($fid);
			
			// Save to list of field values. 
			$fieldvalues[] = "$value";
			// $fieldvalues[] = "'$value'";
		}

		// Create comma separated list of field values. 
		return $fieldvalues;
	}
	// Get list of field ids set to input values (for update query). 
	function getFieldSetterList($fieldids) {

		// Initialize list of field values. 
		$fieldidsnvalues = [];
		
		// Go thru each field id key. 
		foreach($fieldids as $fid) {

			// Get field value. 
			$value = getFieldValueByIdWithDefault($fid);
			
			// Save to list of field values. 
			$fieldidsnvalues[] = "$fid='$value'";
		}

		// Create comma separated list of field ids. 
		return $fieldidsnvalues;
	}
	// Get conditions list (for read/delete query). 
	function getConditionsList($entryids) {
		
		// Compile conditions list. 
		return implode( ' OR ' , array_map('createIdCondition',$entryids) );

		/****/

		// Create single id condition. 
		function createIdCondition($id) {
			return "id=$id";
		}
	}


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
		// if($input=='') {
		// 	print "<script>console.log('Null input found:','$input')</script>";
		// 	return 'null';
		// }

		// Return clean input. 
		return $db->real_escape_string($input);
		return addslashes($input);
		return ($input);
	}
	// Clean user input for output (HTML). 
	function cleanInputForOutput($input) {

		// Return clean input. 
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
		// print "<script>console.log('Sending database query:',`$sql`)</script>";
		printQueryToPage($sql);
		
		// Send database query. 
		$queryresult = $db->query($sql);
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
	/****/
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
