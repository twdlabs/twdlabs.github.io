
<?php


	// Get list of field ids and values (for general query). 
	function getFieldDataByIds($fieldids) {

		// Initialize list of field ids and values. 
		$fielddata = [];

		// Go thru each field id key. 
		foreach($fieldids as $fid) {

			// Get field value. 
			$fieldvalue = getFieldValueById($fid);
			
			// Save to list of field values. 
			$fielddata[$fid] = $fieldvalue;
			// $fielddata[$fid] = "'$fieldvalue'";
		}

		// Create comma separated list of field values. 
		return $fielddata;
	}


	// Get field value using field id. 
	function getFieldValueById($fieldid) {

		// Check if input received for given field. 
		$inputreceived = isset( $_POST[$fieldid] );
		
		// Get user input field value (sanitized). 
		// Get clean field value (if input received). 
		if($inputreceived) {

			// Get original field input. 
			$fieldinput = $_POST[$fieldid];

			// Get clean field value. 
			$fieldvalue = cleanInputForQuery( $fieldinput );
		}

		// Set null field value (if no input received). 
		else $fieldvalue = 'null';

		// Return field value. 
		return $fieldvalue;
	}

	// Compile string array into one comma-separated string representation of list. 
	function getCommaList($list) {

		// Create comma separated list of field ids. 
		return implode(',',$list);
	}

	// Clean user input for database query (SQL). 
	function cleanInputForQuery($input) {

		// Handle empty input. 
		// if( $input=='' ) {
		// 	print "<script>console.log('Null input found:','$input')</script>";
		// 	return 'null';
		// }

		// Get input type. 
		$type = gettype($input);

		// Return clean integer value. 
		if( $type=='integer' ) return intval($input);
		// Return clean float value. 
		else if( $type=='double' ) return floatval($input);
		// Return clean string. 
		else {
			global $db;
			return $db->real_escape_string($input);
			return addslashes($input);
		}
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
?>
