


<?php


	// Get value of field using field id. 
	function getFieldValueById($fieldid) {
		global $db;

		// Get field input value from form submission. 
		$fieldinput = $_POST[$fieldid];

		// Check for multiple values. 
		$gotmultivalue = is_array($fieldinput);

		// Display multiple field values. 
		if($gotmultivalue) {

			// Go thru each field value. 
			foreach($fieldinput as $value) {

				// Display string input field value. 
				print "<br>$fieldid: " . $value . '';
			}
		}
		// Display single field value. 
		else {

			// Sanitize string input. 
			$fieldinput = $db->real_escape_string($fieldinput);

			// Display string input field value. 
			print "<br>$fieldid: " . $fieldinput;
		}

		// Handle empty field value. 
		if($fieldinput==null) {

			// Set null field value. 
			$fieldinput = -1;

			// Display field value. 
			print " => $fieldid: " . $fieldinput;
		}
		print '';

		// Return field value. 
		return $fieldinput;
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
		print '<br>' . json_encode($querystatus);

		// Display query results. 
		// print '<br>Returned: ';
		// print '<br>' . json_encode($resultentries);

		// Return list of table entries. 
		return $resultentries;
	}
?>
