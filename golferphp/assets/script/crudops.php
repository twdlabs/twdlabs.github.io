


<?php


	// Convert string array to comma-separated list string. 
	function getCommaList($list) {

		// Create comma separated list of field ids. 
		return implode(',',$list);
	}


	// Create new table entry in database. 
	function createTableEntry(/* $tableid */) {
		global $databasetables;

		// Print header. 
		printToPage('Field Values<br>----------------');
		// Get field value: selected table id. 
		$tableid = getFieldValueByIdWithDefault('tableid');

		// Get list of field ids. 
		$fieldids = getAllFieldIds($tableid);
		$fieldidslist = getCommaList($fieldids);

		// Get list of field values. 
		$fieldvalues = getFieldValues($fieldids);
		$fieldvalueslist = getCommaList($fieldvalues);

		// Create database query. 
		$sql = "INSERT INTO $tableid ($fieldidslist) VALUES ($fieldvalueslist)";
		// Display database query. 
		printQueryToPage($sql);
		// Return result of database query. 
		return sendDatabaseQuery($sql);
	}

	// Read existing table entry in database. 
	function readTableEntry(/* $tableid */) {

		// Print header. 
		printToPage('Field Values<br>----------------');
		// Get field value: selected table id. 
		$tableid = getFieldValueByIdWithDefault('tableid');
		// Get field value: selected entry id(s). 
		$entryids = getFieldValueByIdWithDefault('id');

		// Check for multiple values. 
		$multiplevalues = is_array($entryids);
		// $multipleselected = $multiplevalues ? 'true' : 'false';
		// printToPage();
		// printToPage("Multiple selected: $multipleselected");

		// Create database query for single value. 
		if(!$multiplevalues) {
			
			// Create database query (for single value). 
			$sql = "SELECT * FROM $tableid WHERE (id=$entryids)";
		}
		// Create database query for multiple values. 
		else {

			// Compile condition list. 
			$conditionlist = getConditionsList($entryids);

			// Create database query (for multiple values). 
			$sql = "SELECT * FROM $tableid WHERE ($conditionlist)";
		}
		// Display database query. 
		printQueryToPage($sql);
		// Return result of database query. 
		return sendDatabaseQuery($sql);
	}
	// Read existing table entries in database. 
	function readTableEntries($tableid) {

		// Get field value: selected table id. 
		// $tableid = getFieldValueByIdWithDefault('tableid');

		// Create database query. 
		$sql = "SELECT * FROM $tableid";
		// Display database query. 
		printQueryToPage($sql);
		// Return result of database query. 
		return sendDatabaseQuery($sql);
	}
	
	// Update existing table entry in database. 
	function updateTableEntry(/* $tableid */) {
		global $databasetables;

		// Print header. 
		printToPage('Field Values<br>----------------');
		// Get field value: selected table id. 
		$tableid = getFieldValueByIdWithDefault('tableid');
		// Get field value: selected entry id. 
		$entryid = getFieldValueByIdWithDefault('id');

		// Get list of field ids. 
		$fieldids = getAllFieldIds($tableid);

		// Get list of field ids set to input values. 
		$fieldidsnvalues = getFieldSetterList($fieldids);
		$fieldidsnvalueslist = getCommaList($fieldidsnvalues);

		// Create database query. 
		$sql = "UPDATE $tableid SET $fieldidsnvalueslist WHERE (id=$entryid)";
		// Display database query. 
		printQueryToPage($sql);
		// Return result of database query. 
		return sendDatabaseQuery($sql);
	}

	// Delete existing table entry in database. 
	function deleteTableEntry(/* $tableid */) {

		// Print header. 
		printToPage('Field Values<br>----------------');
		// Get field value: selected table id. 
		$tableid = getFieldValueByIdWithDefault('tableid');
		// Get field value: selected entry id(s). 
		$entryids = getFieldValueByIdWithDefault('id');

		// Check for multiple values. 
		$multiplevalues = is_array($entryids);
		// $multipleselected = $multiplevalues ? 'true' : 'false';
		// printToPage();
		// printToPage("Multiple selected: $multipleselected");

		// Create database query for single value. 
		if(!$multiplevalues) {
			
			// Create database query (for single value). 
			$sql = "DELETE FROM $tableid WHERE (id=$entryids)";
		}
		// Create database query for multiple values. 
		else {

			// Compile condition list. 
			$conditionlist = getConditionsList($entryids);

			// Create database query (for multiple values). 
			$sql = "DELETE FROM $tableid WHERE ($conditionlist)";
		}
		// Display database query. 
		printQueryToPage($sql);
		// Return result of database query. 
		return sendDatabaseQuery($sql);
	}
?>
