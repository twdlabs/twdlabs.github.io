


<?php


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

		// Get name of club entry. 
		$name = $entry['clubname'];
		// Get brand of club entry. 
		$brand = $entry['clubbrand'];

		// Compile club entry caption. 
		return "$brand $name";
	}

	// Get caption for hole entry. 
	function getHoleCaption($entry) {

		// Get name of hole entry. 
		$holename = $entry['holename'];

		// Compile hole entry caption. 
		return "$holename";
	}

	// Get caption for shot entry. 
	function getShotCaption($entry) {

		// Get distance of shot entry. 
		$distance = $entry['distance'];
		// Get id of club entry. 
		$cid = $entry['clubid'];
		// Get id of hole entry. 
		$hid = $entry['holeid'];
		
		// Get name of club entry. 
		$clubname = getClubNameById($cid);
		// Get name of hole entry. 
		$holename = getHoleNameById($hid);

		// Compile entry caption. 
		// return "$distance ft ($cid,$hid)";
		return "$distance ft ($clubname, $holename)";
	}

	// Get club name by id. 
	function getClubNameById($id) {
		global $clubentries;

		// Go thru each club entry. 
		foreach($clubentries as $entry) {

			// Check if match found. 
			$matchfound = $id == $entry['id'];

			// Return name of matching entry. 
			if($matchfound) return $entry['clubname'];
		}

		// Return nothing if match not found. 
		return '';
	}

	// Get hole name by id. 
	function getHoleNameById($id) {
		global $holeentries;

		// Go thru each hole entry. 
		foreach($holeentries as $entry) {

			// Check if match found. 
			$matchfound = $id == $entry['id'];

			// Return name of matching entry. 
			if($matchfound) return $entry['holename'];
		}

		// Return nothing if match not found. 
		return '';
	}

?>
