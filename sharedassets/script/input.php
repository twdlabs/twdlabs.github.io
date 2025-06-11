
<?php


	// Get field ids for new entries of given table. 
	function getEntryFieldIds($crudtableid) {
		global $databasetables;

		return array_map( 'getFieldId' , $databasetables[$crudtableid]['editorfields'] );
		// return $databasetables[$crudtableid]['newentryfieldids'];
	}
	// Extract field id from field item. 
	function getFieldId($field) {
		return $field['fid'];
	}

	// Clean user input for sending database query (in SQL). 
	function cleanInputForQuery($input) {

		// Handle empty input. 
		// if( $input=='' ) {
		// 	print "<script>console.log('Null input found:','$input')</script>";
		// 	return 'null';
		// }

		// Get input type. 
		$type = gettype($input);

		// Get clean null value. 
		if( !$input ) {

			// Clean input. 
			$cleaninput = null;
		}
		// Get clean integer value. 
		else if( $type=='integer' ) {

			// Clean input. 
			$cleaninput = intval($input);
		}
		// Get clean number value. 
		else if( $type=='double' ) {

			// Clean input. 
			$cleaninput = floatval($input);
		}
		// Get clean string. 
		else {
			global $db;

			// Clean input. 
			// $cleaninput = addslashes($input);
			$cleaninput = $db->real_escape_string($input);
			$cleaninput = "'$cleaninput'";
		}

		// Return clean input value. 
		return $cleaninput;
	}
	// Clean user input for sending database query (in SQL). 
	function cleanInputForQuerySimple($input) {
		global $db;

		// Clean input. 
		$cleaninput = $db->real_escape_string($input);

		// Return clean input value. 
		return $cleaninput;
	}
	// Clean user input for displaying output (in HTML). 
	function cleanInputForDisplay($input) {

		// Return clean input. 
		// return htmlentities($input);
		return htmlspecialchars($input);
	}
	// Clean user input (general ?). 
	function cleanInputForXyz($input) {

		// 
		return filter_var($input);
	}

	// Get field value using field id. 
	function getFieldValueById($fieldid) {

		// Check if input value received for given field. 
		$inputreceived = isset( $_POST[$fieldid] );
		
		// Get cleaned field value (if input received). 
		if($inputreceived) {

			// Get original field value. 
			$fieldinputvalue = $_POST[$fieldid];

			// Get clean field value. 
			$fieldvalue = cleanInputForQuery( $fieldinputvalue );
		}

		// Set null field value (if no input received). 
		else $fieldvalue = null;
		// else $fieldvalue = 'null';

		// Return field value. 
		return $fieldvalue;
	}
	// Get list of field ids and values (for general query). 
	function getFieldDataByIds($fieldids) {

		// Initialize list of field ids and values. 
		$fielddata = [];

		// Go thru each field id key. 
		foreach($fieldids as $fid) {

			// Get field value. 
			$fieldvalue = getFieldValueById($fid);
			
			// Save to list of field values. 
			if( $fieldvalue ) {
				$fielddata[$fid] = $fieldvalue;
				// $fielddata[$fid] = "'$fieldvalue'";
			}
		}

		// Display field data. 
		// displayFieldData($fielddata);

		// Create comma separated list of field values. 
		return $fielddata;
	}

	// Compile string array into one comma-separated string representation of list. 
	function getCommaList($list) {

		// Create comma separated list of field ids. 
		return implode(',',$list);
	}

	// Display field data. 
	function displayFieldData($fielddata,$isvalidated=false) {

		// Display field data. 
		printToPage( );
		if($isvalidated) printToPage( "Validated field data: ");
		else printToPage( "Initial field data: ");
		printToPage( json_encode($fielddata) );

		// // Go thru each field data item. 
		// foreach($fielddata as $fid=>$fval) {

		// 	// Display field data item. 
		// 	printToPage("$fid => $fval");
		// }
	}
?>
