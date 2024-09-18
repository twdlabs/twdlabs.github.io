


<?php


	// Set state of fwds back to home page. 
	$stayhome = false;


	// Display options for select dropdown menu. 
	function showSelectOptions($entries) {

		// Go thru each table entry. 
		foreach($entries as $entry) {

			// Get id of table entry. 
			$id = $entry['id'];

			// // Display table entry as select option. 
			// print "<option value=\"$id\">". json_encode($entry) ."</option>";

			// Display table entry as select option. 
			print "<option value=\"$id\">";
			foreach($entry as $k=>$v) {
				if($k!='id') print substr($k,0,1).":$v".' ';
			}
			print "</option>";
		}
	}


	// Create new database entry. 
	function createNewEntry($db,$tablename,$fieldids) {

		// Create SQL database query. 
		$fieldidslist = getFieldIdsList($fieldids);
		$fieldvalueslist = getFieldValuesList($fieldids);
		$sql = "INSERT INTO shots($fieldidslist) VALUES($fieldvalueslist)";
	
		// Send database query and return result. 
		return $db->query($sql);
	}

	// TODO: Read existing database entry. 
	function readEntry($db,$tablename) {

		// Get value of form field: shotid. 
		$id = getFieldValueById('shotid');

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

	// TODO: Update existing database entry. 
	function updateEntry($db,$tablename) {

		// Get value of form field: shotid. 
		$id = getFieldValueById('shotid');
		// Get value of form field: clubid. 
		$clubid = getFieldValueById('clubid');
		// Get value of form field: holeid. 
		$holeid = getFieldValueById('holeid');

		// Create SQL database query. 
		$fieldidvaluelist = "";
		$fieldidvaluelist .= "clubid='$clubid'";
		$fieldidvaluelist .= ",";
		$fieldidvaluelist .= "holeid='$holeid'";
		$sql = "UPDATE $tablename SET $fieldidvaluelist WHERE id=$id";
	
		// Send database query and return result. 
		return $db->query($sql);
	}

	// TODO: Delete existing database entry. 
	function deleteEntry($db,$tablename) {

		// Get value of form field: shotid. 
		$id = getFieldValueById('shotid');

		// Create SQL database query. 
		$sql = "DELETE FROM $tablename WHERE id=$id";
	
		// Send database query and return result. 
		return $db->query($sql);
	}
?>
