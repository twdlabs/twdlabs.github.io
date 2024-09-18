


<?php


	// Get value of form field by form id. 
	function getFieldValueById($fieldname) {

		// Get field value from form submission. 
		$fieldvalue = $_POST[$fieldname];

		// Display field value. 
		print "$fieldname: " . $fieldvalue;

		// Handle empty field value. 
		if($fieldvalue==null) {

			// Set null field value. 
			$fieldvalue = -1;

			// Display field value. 
			print " => $fieldname: " . $fieldvalue;
		}
		print '<br>';

		// Return field value. 
		return $fieldvalue;
	}

	// Get value of form field by form id. 
	function getFieldIdsList($fieldids) {

		// Create comma separated list of field ids. 
		return implode(',',$fieldids);
	}

	// Get value of form field by form id. 
	function getFieldValuesList($fieldids) {

		// Initialize list of field values. 
		$allfieldvalues = [];

		// Go thru each field id. 
		foreach($fieldids as $id) {

			// Get value of field. 
			$fieldvalue = getFieldValueById($id);
			// Save field value to list. 
			$allfieldvalues[] = $fieldvalue;

			// Set 'null value' if no value provided. 
			// if($fieldvalue==null) $fieldvalue = -1;
		}

		// Create comma separated list of field values. 
		return implode(',',$allfieldvalues);
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
