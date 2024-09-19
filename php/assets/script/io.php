


<?php


	// Get value of field using field id. 
	function getFieldValueById($fieldid,$db) {

		// Get field value from form submission. 
		$fieldvalue = $_POST[$fieldid];
		$fieldvalue = $db->real_escape_string($fieldvalue);

		// Display field value. 
		print "$fieldid: " . $fieldvalue;

		// Handle empty field value. 
		if($fieldvalue==null) {

			// Set null field value. 
			$fieldvalue = -1;

			// Display field value. 
			print " => $fieldid: " . $fieldvalue;
		}
		print '<br>';

		// Return field value. 
		return $fieldvalue;
	}

	// Convert string array to comma-separated list string. 
	function getCommaList($fieldids) {

		// Create comma separated list of field ids. 
		return implode(',',$fieldids);
	}

	// Get list of field values (in string form). 
	function getFieldValuesList($fieldids,$db) {

		// Initialize list of field values. 
		$fieldvalues = [];

		// Go thru each field id key. 
		foreach($fieldids as $idkey) {

			// Get field value from form. 
			$value = getFieldValueById($idkey,$db);
			
			// Save to list of field values. 
			$fieldvalues[] = $value;
		}

		// Create comma separated list of field values. 
		return getCommaList($fieldvalues);
	}

	// Get list of field ids and values (in string form). 
	function getFieldIdsNValuesList($fieldids,$db) {

		// Initialize list of field values. 
		$fieldidsnvalues = [];
		
		// Go thru each field id key. 
		foreach($fieldids as $idkey) {

			// Get field value from form. 
			$value = getFieldValueById($idkey,$db);
			
			// Save to list of field values. 
			$fieldidsnvalues[] = "$idkey='$value'";
		}

		// Create comma separated list of field ids. 
		return getCommaList($fieldidsnvalues);
	}

	// Get result of database query. 
	function getResult($db,$query,$tablename) {

		// Initialize list of table entries. 
		$resultentries = array();
		// Check for any rows in query. 
		$anyrowsexist = $query && isset($query->num_rows);
		// Get returned query results (if any rows exist). 
		if( $anyrowsexist ) {

			// Go thru each table row from query. 
			while($queryrow = $query->fetch_assoc()) {

				// Save query table row as table entry. 
				$resultentries[] = $queryrow;
			}
		}

		// Get number of rows hit by last query. 
		$numrows = $db->affected_rows;
		// Set query state if successful. 
		if($query) $queryresult = [
			'tablename'=>$tablename,
			'status'=>'success', 
			'rows'=>$numrows, 
			/* 'result'=>$resultentries, */ 
		];
		// Set query state if unsuccessful. 
		else $queryresult = [
			'tablename'=>$tablename,
			'status'=>'error', 
			'rows'=>$numrows, 
			'message'=>$db->error, 
			/* 'result'=>$resultentries, */ 
		];

		// Display query state and query results. 
		// header('Content-Type: application/json');
		print '<br><br>' . json_encode($queryresult);
		// print '<br>Returned: ';
		print '<br>' . json_encode($resultentries);

		// Return list of table entries. 
		return $resultentries;
	}

	// Log result of database query. 
	function logResult($numrows) {
		?>
		<script>
			console.log("Num rows: <?php print $numrows; ?>");
		</script>
		<?php
	}
?>
