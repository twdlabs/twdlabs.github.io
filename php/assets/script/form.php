


<?php


	// TODO: Display form fields for currently selected table. 
	function displayFormFields($tableid) {
	
		print "<script> displayFormFields('$tableid'); </script>";
	}

	// Display select options for dropdown menu. 
	function showSelectOptions($entrieslist,$tableid) {
		global $databasetables;

		/****/

		// Go thru each table entry. 
		foreach($entrieslist as $entry) {

			// Get id of table entry. 
			$id = $entry['id'];

			// Get entry summary. 
			if($tableid) $entrycaption = $databasetables[$tableid]['captioner']($entry);
			else $entrycaption = createEntrySummary($entry);

			// Display table entry as select option. 
			print "<option value=\"$id\">$entrycaption</option>";
		}
	}

	/****/

	// Create summary of given entry. 
	function createEntrySummary($givenentry) {

		// Return entry summary (simple JSON object string). 
		// return json_encode($givenentry);

		// Initialize entry summary. 
		$entrysummary = '';

		// Go thru each entry field. 
		foreach($givenentry as $key=>$value) {

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

		// Return entry summary. 
		return $entrysummary;
	}

	// Get caption for club entry. 
	function getClubCaption($entry) {

		// Get id of table entry. 
		$brand = $entry['clubbrand'];
		$name = $entry['clubname'];

		// Compile entry caption. 
		return "$brand $name";
	}

	// Get caption for hole entry. 
	function getHoleCaption($entry) {

		// Get id of table entry. 
		$holename = $entry['holename'];

		// Compile entry caption. 
		return "$holename";
	}

	// Get caption for shot entry. 
	function getShotCaption($entry) {

		// Get id of table entry. 
		$distance = $entry['distance'];
		$clubid = $entry['clubid'];
		$holeid = $entry['holeid'];

		// Compile entry caption. 
		return "$distance ft ($clubid,$holeid)";
	}

?>
