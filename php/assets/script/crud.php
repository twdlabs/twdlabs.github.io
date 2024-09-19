


<?php


	// Set state of fwds back to home page. 
	$stayhome = false;

	// Define table name. 
	$tn = 'shots';
	// Define primary field id (field id for form POST). 
	$pfieldid = 'shotid';
	// Define list of field ids. 
	$fieldids = [
		'clubid',
		'holeid',
		'distance',
	];


	// Display options for select dropdown menu. 
	function showSelectOptions($tableentries) {

		// Go thru each table entry. 
		foreach($tableentries as $entry) {

			// Get id of table entry. 
			$id = $entry['id'];

			// Initialize entry summary. 
			$entrysummary = '';
			// $entrysummary = json_encode($entry);

			// Go thru each entry field. 
			foreach($entry as $key=>$value) {

				// Skip id field. 
				if($key=='id') ;

				// Proceed for other fields. 
				else {

					// Get first letter of field id. 
					$k = substr($key,0,1);

					// Add summary of given field. 
					$entrysummary .= "$k:$value ";
				}
			}

			// Display table entry as select option. 
			print "<option value=\"$id\">$entrysummary</option>";
		}
	}


	// Create new database entry. 
	function createNewEntry($db,$tablename,$fieldids) {

		// Consolidate list of field values. 
		$fieldidslist = getCommaList($fieldids);
		$fieldvalueslist = getFieldValuesList($fieldids,$db);

		// Create SQL database query. 
		$sql = "INSERT INTO $tablename($fieldidslist) VALUES($fieldvalueslist)";
	
		// Send database query and return result. 
		return $db->query($sql);
	}

	// Read existing database entry. 
	function readEntry($db,$tablename,$pfieldid) {

		// Get field value from form. 
		$id = getFieldValueById($pfieldid,$db);

		// Create SQL database query. 
		$sql = "SELECT * FROM $tablename WHERE id=$id";
	
		// Send database query and return result. 
		return $db->query($sql);
	}
	// Read all existing database entries. 
	function readEntries($db,$tablename) {

		// Create SQL database query. 
		$sql = "SELECT * FROM $tablename";
	
		// Send database query and return result. 
		return $db->query($sql);
	}

	// Update existing database entry. 
	function updateEntry($db,$tablename,$fieldids,$pfieldid) {

		// Get field value from form. 
		$id = getFieldValueById($pfieldid,$db);

		// Consolidate list of field values. 
		$fieldidsnvalueslist = getFieldIdsNValuesList($fieldids,$db);

		// Create SQL database query. 
		$sql = "UPDATE $tablename SET $fieldidsnvalueslist WHERE id=$id";
	
		// Send database query and return result. 
		return $db->query($sql);
	}

	// Delete existing database entry. 
	function deleteEntry($db,$tablename,$pfieldid) {

		// Get field value from form. 
		$id = getFieldValueById($pfieldid,$db);

		// Create SQL database query. 
		$sql = "DELETE FROM $tablename WHERE id=$id";
	
		// Send database query and return result. 
		return $db->query($sql);
	}
?>
