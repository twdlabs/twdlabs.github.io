


<?php


	// Set state of fwds back to home page. 
	$stayhome = true;
	$stayhome = false;

	// Define database tables. 
	$databasetables = [
		'shots' => [

			// Define id of primary field. 
			// 'pfid' => 'shotid',
			// 'pfid' => 'id',

			// Define table fields. 
			'fields' => [
				[
					'type'=>'select',
					'id'=>'clubid',
					'tid'=>'clubs',
					'caption'=>'Club',
				],
				[
					'type'=>'select',
					'id'=>'holeid',
					'tid'=>'holes',
					'caption'=>'Hole',
				],
				[
					'type'=>'number',
					'id'=>'distance',
					'caption'=>'Distance',
				],
			],

			// Define table entries. 
			'entries' => [
			],

			// Define caption getter functions. 
			'captioner' => 'getShotCaption',
		],
		'holes' => [

			// Define id of primary field. 
			// 'pfid' => 'holeid',
			// 'pfid' => 'id',

			// Define table fields. 
			'fields' => [
				[
					'type'=>'text',
					'id'=>'holename',
					'caption'=>'Hole Name',
				],
			],

			// Define table entries. 
			'entries' => [
			],

			// Define caption getter functions. 
			'captioner' => 'getHoleCaption',
		],
		'clubs' => [

			// Define id of primary field. 
			// 'pfid' => 'clubid',
			// 'pfid' => 'id',

			// Define table fields. 
			'fields' => [
				[
					'type'=>'text',
					'id'=>'clubbrand',
					'caption'=>'Club Brand',
				],
				[
					'type'=>'text',
					'id'=>'clubname',
					'caption'=>'Club Name',
				],
			],

			// Define table entries. 
			'entries' => [
			],

			// Define caption getter functions. 
			'captioner' => 'getClubCaption',
		],
	];


	/*****/


	// Get id of given field. 
	function getFieldId($field) {
		return $field['id'];
	}

	// Create single id condition. 
	function createIdCondition($id) {
		return "id=$id";
	}

	// Convert string array to comma-separated list string. 
	function getCommaList($list) {

		// Create comma separated list of field ids. 
		return implode(',',$list);
	}


	// Create new table entry in database. 
	function createTableEntry(/* $tableid */) {
		global $db;
		global $databasetables;

		/****/

		// Get list of field values. 
		function getFieldValues($fieldids) {
	
			// Initialize list of field values. 
			$fieldvalues = [];
	
			// Go thru each field id key. 
			foreach($fieldids as $fid) {
	
				// Get field value. 
				$value = getFieldValueById($fid);
				
				// Save to list of field values. 
				$fieldvalues[] = "$value";
				// $fieldvalues[] = "'$value'";
			}
	
			// Create comma separated list of field values. 
			return $fieldvalues;
		}

		/****/

		// Print header. 
		printToPage('Field Values<br>----------------');

		// Get field value: selected table id. 
		$tableid = getFieldValueById('tableid');

		// Get list of field ids. 
		$fieldids = array_map('getFieldId', $databasetables[$tableid]['fields'] );
		$fieldidslist = getCommaList($fieldids);

		// Get list of field values. 
		$fieldvalues = getFieldValues($fieldids);
		$fieldvalueslist = getCommaList($fieldvalues);

		// Create database query. 
		$sql = "INSERT INTO $tableid ($fieldidslist) VALUES ($fieldvalueslist)";
		// Display database query. 
		printToPage();
		printToPage($sql);
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}

	// Read existing table entry in database. 
	function readTableEntry(/* $tableid */) {
		global $db;

		// Print header. 
		printToPage('Field Values<br>----------------');

		// Get field value: selected table id. 
		$tableid = getFieldValueById('tableid');
		// Get field value: selected entry id(s). 
		$entryids = getFieldValueById('id');

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
			$conditionlist = implode( ' OR ' , array_map('createIdCondition',$entryids) );

			// Create database query (for multiple values). 
			$sql = "SELECT * FROM $tableid WHERE ($conditionlist)";
		}
		// Display database query. 
		printToPage();
		printToPage($sql);
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}
	// Read existing table entries in database. 
	function readTableEntries($tableid) {
		global $db;

		// Get field value: selected table id. 
		// $tableid = getFieldValueById('tableid');

		// Create database query. 
		$sql = "SELECT * FROM $tableid";
		// Display database query. 
		printToPage();
		printToPage($sql);
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}
	
	// Update existing table entry in database. 
	function updateTableEntry(/* $tableid */) {
		global $db;
		global $databasetables;

		/****/

		// Get list of field ids set to input values. 
		function getFieldSetterList($fieldids) {
	
			// Initialize list of field values. 
			$fieldidsnvalues = [];
			
			// Go thru each field id key. 
			foreach($fieldids as $fid) {
	
				// Get field value. 
				$value = getFieldValueById($fid);
				
				// Save to list of field values. 
				$fieldidsnvalues[] = "$fid='$value'";
			}
	
			// Create comma separated list of field ids. 
			return $fieldidsnvalues;
		}

		/****/

		// Print header. 
		printToPage('Field Values<br>----------------');

		// Get field value: selected table id. 
		$tableid = getFieldValueById('tableid');
		// Get field value: selected entry id. 
		$entryid = getFieldValueById('id');

		// Get list of field ids. 
		$fieldids = array_map('getFieldId', $databasetables[$tableid]['fields'] );

		// Get list of field ids set to input values. 
		$fieldidsnvalues = getFieldSetterList($fieldids);
		$fieldidsnvalueslist = getCommaList($fieldidsnvalues);

		// Create database query. 
		$sql = "UPDATE $tableid SET $fieldidsnvalueslist WHERE (id=$entryid)";
		// Display database query. 
		printToPage();
		printToPage($sql);
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}

	// Delete existing table entry in database. 
	function deleteTableEntry(/* $tableid */) {
		global $db;

		// Print header. 
		printToPage('Field Values<br>----------------');

		// Get field value: selected table id. 
		$tableid = getFieldValueById('tableid');
		// Get field value: selected entry id(s). 
		$entryids = getFieldValueById('id');

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
			$conditionlist = implode( ' OR ' , array_map('createIdCondition',$entryids) );

			// Create database query (for multiple values). 
			$sql = "DELETE FROM $tableid WHERE ($conditionlist)";
		}
		// Display database query. 
		printToPage();
		printToPage($sql);
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}
?>
