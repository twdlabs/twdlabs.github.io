


<?php


	// Display list of table entries in dropdown menu. 
	function showSelectOptions($entrieslist,$tableid) {
		global $databasetables;

		// Go thru each table entry. 
		foreach($entrieslist as $entry) {

			// Get id of table entry. 
			$id = $entry['id'];

			// Get entry caption. 
			if($tableid) $entrycaption = $databasetables[$tableid]['captioner']($entry);
			// Get entry summary as caption. 
			else $entrycaption = createEntrySummary($entry);

			// Display table entry as select option. 
			print "<option value=\"$id\">$entrycaption</option>";
		}
	}
	// Get summary of given entry. 
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

	// TODO: Display editor fields. 
	function displayEditorFields($tableid) {
		global $databasetables;
		// print $tableid;

		// Get list of fields for given table. 
		$fieldslist = $databasetables[$tableid]['fields'];

		// Go thru each table field. 
		foreach($fieldslist as $field) {

			// Get field id. 
			$fid = $field['id'];

			// Get field type. 
			$type = $field['type'];

			// Get field caption. 
			$caption = $field['caption'];

			// Display select field. 
			if($type=='select') {

				// Get field's table id. 
				$ftid = $field['tid'];

				// Get list of table entries for given field. 
				$fieldentries = $databasetables[$ftid]['entries'];

				// Get table entries for given field. 
				$fieldentriesoptionslist = getSelectOptions($fieldentries,$ftid);

				// Display select field. 
				print "
				<!-- field -->
				<li class=\"field\">
	
					<!-- fieldlabel -->
					<label class=\"fieldlabel\" for=\"$fid-$tableid\">$caption</label>
					<!-- /fieldlabel -->
	
					<!-- fieldinput -->
					<!-- <input class=\"fieldinput\" type=\"$type\" id=\"$fid-$tableid\" name=\"$fid\"> -->
					<!-- /fieldinput -->
	
					<!-- fieldinput -->
					<select class=\"fieldinput\" id=\"$fid-$tableid\" name=\"$fid\">
						<!-- <option value=\"\"></option> -->
						$fieldentriesoptionslist
					</select>
					<!-- /fieldinput -->
	
				</li>
				<!-- /field -->";
			}

			// Display input field. 
			else {

				// Check input type. 
				$xyz = ($type=='number') ? ' min=\"0\"' : '';

				// Display input field. 
				print "
				<!-- field -->
				<li class=\"field\">
		
					<!-- fieldlabel -->
					<label class=\"fieldlabel\" for=\"$fid-$tableid\">$caption</label>
					<!-- /fieldlabel -->
		
					<!-- fieldinput -->
					<input class=\"fieldinput\" type=\"$type\"$xyz id=\"$fid-$tableid\" name=\"$fid\">
					<!-- /fieldinput -->
		
				</li>
				<!-- /field -->";
			}
		}
	}
	// Get list of select options. 
	function getSelectOptions($fieldentries,$ftid) {

		// Initialize list of field select options. 
		$fieldentriesoptionslist = '';

		// Accumulate field select options in list. 
		foreach($fieldentries as $entry) {
			$fieldentriesoptionslist .= createSelectOption($entry,$ftid);
		}

		// Initialize list of field select options. 
		return $fieldentriesoptionslist;
	}
	// Create select option for given table entry. 
	function createSelectOption($tableentry,$tid) {
		global $databasetables;

		// Get id for given table entry. 
		$id = '';

		// Get caption for given table entry. 
		$caption = $databasetables[$tid]['captioner']($tableentry);

		// Compile layout for given table entry. 
		return "<option value=\"$id\">$caption</option>";
	}


	/*****/


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
		global $databasetables;

		// Go thru each club entry. 
		foreach($databasetables['clubs']['entries'] as $entry) {

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
		global $databasetables;

		// Go thru each hole entry. 
		foreach($databasetables['holes']['entries'] as $entry) {

			// Check if match found. 
			$matchfound = $id == $entry['id'];

			// Return name of matching entry. 
			if($matchfound) return $entry['holename'];
		}

		// Return nothing if match not found. 
		return '';
	}

?>
