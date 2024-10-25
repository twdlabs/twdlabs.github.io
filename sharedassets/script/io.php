


<?php


	// Get value of field using field id. 
	function getFieldValueById($fieldid) {
		global $db;

		// Get input field value. 
		$fieldvalue = $_POST[$fieldid] /* ?? '' */;
		// Check for multiple field values. 
		$gotmultivalue = is_array($fieldvalue);

		// Handle empty field value. 
		if($fieldvalue==null) {

			// TODO: Set null field value. 
			// $fieldvalue = null;
			// $fieldvalue = -1;
			// $fieldvalue = 'xyz';
			// $fieldvalue = 0;
			$fieldvalue = '0';

			// Display default field value. 
			printToPage("$fieldid: $fieldvalue (default)");
		}
		// Display multiple field values. 
		else if($gotmultivalue) {
			
			// Get list of input field values. 
			$fieldvaluelist = getCommaList($fieldvalue);
			
			// Display input field values. 
			printToPage("$fieldid: [ $fieldvaluelist ]");
		}
		// Display single field value. 
		else {

			// TODO: Sanitize string input. 
			$fieldvalue = $db->real_escape_string($fieldvalue);

			// Display input field value. 
			printToPage("$fieldid: $fieldvalue");
		}

		// Return field value. 
		return $fieldvalue;
	}

	// Print to page. 
	function printToPage($text='') {
		/* if($text)  */print "<span class=\"block\">$text</span>";
		// else print "<span class=\"block\"></span>";
	}

	// Get result of database query. 
	function getResult($query) {
		global $db;
		// Get number of rows hit by last query. 
		$numrows = $db->affected_rows;

		// Initialize list of table entries. 
		$resultentries = [];

		// Check for any rows in query. 
		$anyrowsexist = $query && isset($query->num_rows);
		// Get returned query results (if any rows exist). 
		if($anyrowsexist) {

			// Go thru each table row from query. 
			while( $queryrow = $query->fetch_assoc() ) {

				// Save table row from query to list of table entries. 
				$resultentries[] = $queryrow;
			}
		}

		// Set query status if successful. 
		if($query) $querystatus = [
			'status'=>'success',
			'rows'=>$numrows,
		];
		// Set query status if unsuccessful. 
		else $querystatus = [
			'status'=>'error',
			'rows'=>$numrows,
			'message'=>$db->error,
		];

		// Display query status. 
		// header('Content-Type: application/json');
		printToPage(json_encode($querystatus));

		// Display query results. 
		// printToPage('Returned:');
		// printToPage(json_encode($resultentries));

		// Return list of table entries. 
		return $resultentries;
	}
?>
