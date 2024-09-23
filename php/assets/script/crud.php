


<?php


	// Set state of fwds back to home page. 
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
					'id'=>'clubid',
					'type'=>'select',
				],
				[
					'id'=>'holeid',
					'type'=>'select',
				],
				[
					'id'=>'distance',
					'type'=>'number',
				],
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
					'id'=>'holename',
					'type'=>'text',
				],
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
					'id'=>'clubname',
					'type'=>'text',
				],
				[
					'id'=>'clubbrand',
					'type'=>'text',
				],
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
	function createNewEntry($tableid) {
		global $db;
		global $databasetables;

		// Get list of field ids. 
		$fieldids = array_map('getFieldId', $databasetables[$tableid]['fields'] );

		/****/

		// Get list of field values (in string form). 
		function getFieldValuesList($fieldids) {
	
			// Initialize list of field values. 
			$fieldvalues = [];
	
			// Go thru each field id key. 
			foreach($fieldids as $idkey) {
	
				// Get field value from form. 
				$value = getFieldValueById($idkey);
				
				// Save to list of field values. 
				$fieldvalues[] = $value;
			}
	
			// Create comma separated list of field values. 
			return getCommaList($fieldvalues);
		}

		/****/

		// Consolidate list of field values. 
		$fieldidslist = getCommaList($fieldids);
		$fieldvalueslist = getFieldValuesList($fieldids);

		// Print line. 
		print '<br>';

		// Create database query. 
		$sql = "INSERT INTO $tableid ($fieldidslist) VALUES ($fieldvalueslist)";
		print "<br>$sql";
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}

	// Read existing table entry in database. 
	function readEntry($tableid) {
		global $db;

		// Get field value from form. 
		$id = getFieldValueById('id');

		// Check for multiple values. 
		$multipleids = is_array($id);
		print "<br><br>multipleids = $multipleids";

		// Handle single value. 
		if(!$multipleids) {
			
			// Create database query (for single value). 
			$sql = "SELECT * FROM $tableid WHERE (id=$id)";
		}

		// Handle multiple values. 
		else {

			// Compile condition list. 
			$conditionlist = implode( ' OR ' , array_map('createIdCondition',$id) );

			// Create database query (for multiple values). 
			$sql = "SELECT * FROM $tableid WHERE ($conditionlist)";
		}
		print "<br>$sql";
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}
	// Read all existing table entries in database. 
	function readAllEntries($tableid) {
		global $db;

		// Print line. 
		print '<br>';

		// Create database query. 
		$sql = "SELECT * FROM $tableid";
		print "<br>$sql";
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}
	
	// Update existing table entry in database. 
	function updateEntry($tableid) {
		global $db;
		global $databasetables;

		// Get list of field ids. 
		$fieldids = array_map('getFieldId', $databasetables[$tableid]['fields'] );

		/****/

		// Get list of field ids and values (in string form). 
		function getFieldIdsNValuesList($fieldids) {
	
			// Initialize list of field values. 
			$fieldidsnvalues = [];
			
			// Go thru each field id key. 
			foreach($fieldids as $idkey) {
	
				// Get field value from form. 
				$value = getFieldValueById($idkey);
				
				// Save to list of field values. 
				$fieldidsnvalues[] = "$idkey='$value'";
			}
	
			// Create comma separated list of field ids. 
			return getCommaList($fieldidsnvalues);
		}

		/****/

		// Get field value from form. 
		$id = getFieldValueById('id');

		// Consolidate list of field values. 
		$fieldidsnvalueslist = getFieldIdsNValuesList($fieldids);

		// Print line. 
		print '<br>';

		// Create database query. 
		$sql = "UPDATE $tableid SET ($fieldidsnvalueslist) WHERE (id=$id)";
		print "<br>$sql";
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}

	// Delete existing table entry in database. 
	function deleteEntry($tableid) {
		global $db;

		// Get field value from form. 
		$id = getFieldValueById('id');

		// Check for multiple values. 
		$multipleids = is_array($id);
		print "<br><br>multipleids = $multipleids";

		// Handle single value. 
		if(!$multipleids) {
			
			// Create database query (for single value). 
			$sql = "DELETE FROM $tableid WHERE (id=$id)";
		}

		// Handle multiple values. 
		else {

			// Compile condition list. 
			$conditionlist = implode( ' OR ' , array_map('createIdCondition',$id) );

			// Create database query (for multiple values). 
			$sql = "DELETE FROM $tableid WHERE ($conditionlist)";
		}
		print "<br>$sql";
	
		// Send database query. 
		$query = $db->query($sql);
		// Return result of query. 
		return getResult($query);
	}
?>
