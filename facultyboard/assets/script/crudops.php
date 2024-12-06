
<?php

	// Perform C.R.U.D. operation. 
	function goCrudOp($optable,$crudop) {
		global $databasetables;
		printToPage();
		printToPage("Doing C.R.U.D. operation: (op:$crudop, tid:$optable)");


		// Go for no operation. 
		$invalidtableselected = !isset( $databasetables[$optable] );
		if($invalidtableselected) return;

		// Go for department operation. 
		else if( $optable=='departments' ) {

			// Perform department create operation. 
			if($crudop=='create') {

				// Get initial set of field data. 
				$fieldids = ['deptname',];
				// $fieldvaluelist = " '$deptname' ";
				$fieldvalues = array_map('getFieldValueById',$fieldids);
				// Get initial set of field data. 
				$fielddataset = getFieldDataByIds($fieldids);
				// Get validated set of field data. 
				$validfielddataset = validateFieldData($fielddataset);
	
				// Get query parameter: field value(s). 
				$deptname = getFieldValueById('deptname');

				// TODO: Get field id list. 
				$fieldidlist = getCommaList($fieldids);
				// TODO: Get field value list. 
				$fieldvaluelist = getCommaList($fieldvalues);

				// Compile database query. 
				$sql = " INSERT INTO $optable ($fieldidlist) VALUES ($fieldvaluelist); ";
			}
	
			// Perform department update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');
				// Get query parameter: field value(s). 
				$deptname = getFieldValueById('deptname');

				// Define field assign list. 
				$fieldsetlist = "deptname=$deptname";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform department delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform departments read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for gender operation. 
		else if( $optable=='genders' ) {

			// Perform gender create operation. 
			if($crudop=='create') {

				// Get initial set of field data. 
				$fieldids = ['gendername', 'avatarfilename',];
				// $fieldvaluelist = " '$gendername', '$avatarfilename' ";
				$fieldvalues = array_map('getFieldValueById',$fieldids);
				// Get initial set of field data. 
				$fielddataset = getFieldDataByIds($fieldids);
				// Get validated set of field data. 
				$validfielddataset = validateFieldData($fielddataset);
	
				// Get query parameter: field value(s). 
				$gendername = getFieldValueById('gendername');
				$avatarfilename = getFieldValueById('avatarfilename');

				// TODO: Get field id list. 
				$fieldidlist = getCommaList($fieldids);
				// TODO: Get field value list. 
				$fieldvaluelist = getCommaList($fieldvalues);

				// Compile database query. 
				$sql = " INSERT INTO $optable ($fieldidlist) VALUES ($fieldvaluelist); ";
			}
	
			// Perform gender update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');
				// Get query parameter: field value(s). 
				$gendername = getFieldValueById('gendername');
				$avatarfilename = getFieldValueById('avatarfilename');

				// Define field assign list. 
				$fieldsetlist = "gendername=$gendername, avatarfilename=$avatarfilename";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform gender delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform departments read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for person operation. 
		else if( $optable=='persons' ) {

			// Perform person create operation. 
			if($crudop=='create') {
	
				// Get query parameter: field value(s). 
				$personname = getFieldValueById('personname');
				$genderid = getFieldValueById('genderid');
				$position = getFieldValueById('position');
				$deptid = getFieldValueById('deptid');
				$referrerid = getFieldValueById('referrerid');
				$username = getFieldValueById('username');
				// Get password details. 
				$passwd = $_POST['password'] ?? '';
				$passwdrpt = $_POST['passwordrepeat'] ?? '';

				// Create database query (with password). 
				if( $passwd && $passwd == $passwdrpt ) {

					// printToPage("Password: $passwd");
					$passwdsalt = generateRandomSalt(1);
					// printToPage("passwdsalt: $passwdsalt");
					$passwdhash = getPasswdHash( $passwd . $passwdsalt , 1 );
					// printToPage("passwdhash: $passwdhash");

					// Create database query (with referral). 
					if($referrerid) {

						// Get initial set of field data. 
						$fieldids = ['personname', 'genderid', 'position', 'deptid', 'referrerid', 'username'/* , 'passwdsalt', 'passwdhash', */];
						// $fieldvaluelist = " '$personname', $genderid, '$position', $deptid, $referrerid, '$username', '$passwdsalt', '$passwdhash' ";
						$fieldvalues = array_map('getFieldValueById',$fieldids);
						// Get initial set of field data. 
						$fielddataset = getFieldDataByIds($fieldids);
						// Get validated set of field data. 
						$validfielddataset = validateFieldData($fielddataset);
						
						// TODO: Get field id list. 
						$fieldidlist = getCommaList($fieldids);
						$fieldidlist .= ", passwdsalt, passwdhash";
						// TODO: Get field value list. 
						$fieldvaluelist = getCommaList($fieldvalues);
						$fieldvaluelist .= ", '$passwdsalt', '$passwdhash' ";
					}
					// Create database query (without referral). 
					else {

						// Get initial set of field data. 
						$fieldids = ['personname', 'genderid', 'position', 'deptid', 'username'/* , 'passwdsalt', 'passwdhash', */];
						// $fieldvaluelist = " '$personname', $genderid, '$position', $deptid, '$username', '$passwdsalt', '$passwdhash' ";
						$fieldvalues = array_map('getFieldValueById',$fieldids);
						// Get initial set of field data. 
						$fielddataset = getFieldDataByIds($fieldids);
						// Get validated set of field data. 
						$validfielddataset = validateFieldData($fielddataset);
						
						// TODO: Get field id list. 
						$fieldidlist = getCommaList($fieldids);
						$fieldidlist .= ", passwdsalt, passwdhash";
						// TODO: Get field value list. 
						$fieldvaluelist = getCommaList($fieldvalues);
						$fieldvaluelist .= ", '$passwdsalt', '$passwdhash' ";
					}
				}
				// Create database query (without password). 
				else {

					// Create database query (with referral). 
					if($referrerid) {

						// Get initial set of field data. 
						$fieldids = ['personname', 'genderid', 'position', 'deptid', 'referrerid', 'username',];
						// $fieldvaluelist = " '$personname', $genderid, '$position', $deptid, $referrerid, '$username' ";
						$fieldvalues = array_map('getFieldValueById',$fieldids);
						// Get initial set of field data. 
						$fielddataset = getFieldDataByIds($fieldids);
						// Get validated set of field data. 
						$validfielddataset = validateFieldData($fielddataset);

						// TODO: Get field id list. 
						$fieldidlist = getCommaList($fieldids);
						// TODO: Get field value list. 
						$fieldvaluelist = getCommaList($fieldvalues);
					}
					// Create database query (without referral). 
					else {

						// Get initial set of field data. 
						$fieldids = ['personname', 'genderid', 'position', 'deptid', 'username',];
						// $fieldvaluelist = " '$personname', $genderid, '$position', $deptid, '$username' ";
						$fieldvalues = array_map('getFieldValueById',$fieldids);
						// Get initial set of field data. 
						$fielddataset = getFieldDataByIds($fieldids);
						// Get validated set of field data. 
						$validfielddataset = validateFieldData($fielddataset);

						// TODO: Get field id list. 
						$fieldidlist = getCommaList($fieldids);
						// TODO: Get field value list. 
						$fieldvaluelist = getCommaList($fieldvalues);
					}
				}
	
				// Compile database query. 
				$sql = " INSERT INTO $optable ($fieldidlist) VALUES ($fieldvaluelist); ";
			}
	
			// Perform person update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');
				// Get query parameter: field value(s). 
				$personname = getFieldValueById('personname');
				$genderid = getFieldValueById('genderid');
				$position = getFieldValueById('position');
				$deptid = getFieldValueById('deptid');
				$referrerid = getFieldValueById('referrerid');
				$username = getFieldValueById('username');
				// $passwd = $_POST['password'] ?? '';
				// $passwdrpt = $_POST['passwordrepeat'] ?? '';

				// Create database query (with referral). 
				if($referrerid) {

					// Define field assign list. 
					$fieldsetlist = " personname=$personname, genderid=$genderid, position=$position, deptid=$deptid, referrerid=$referrerid, username=$username ";
				}
				// Create database query (without referral). 
				else {

					// Define field assign list. 
					$fieldsetlist = " personname=$personname, genderid=$genderid, position=$position, deptid=$deptid, referrerid=null, username=$username ";
				}

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform person delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform persons read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for user operation. 
		else if( $optable=='admins' ) {

			// Perform person create operation. 
			if($crudop=='create') {

				// Get initial set of field data. 
				$fieldids = ['personid',];
				// $fieldvaluelist = " $personid ";
				$fieldvalues = array_map('getFieldValueById',$fieldids);
				// Get initial set of field data. 
				$fielddataset = getFieldDataByIds($fieldids);
				// Get validated set of field data. 
				$validfielddataset = validateFieldData($fielddataset);
	
				// Get query parameter: field value(s). 
				$personid = getFieldValueById('personid');

				// TODO: Get field id list. 
				$fieldidlist = getCommaList($fieldids);
				// TODO: Get field value list. 
				$fieldvaluelist = getCommaList($fieldvalues);	// $fieldvaluelist = [$personid,];

				// Compile database query. 
				$sql = " INSERT INTO $optable ($fieldidlist) VALUES ($fieldvaluelist); ";
			}
	
			// Perform person update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');
				// Get query parameter: field value(s). 
				$personid = getFieldValueById('personid');

				// Define field assign list. 
				$fieldsetlist = "personid=$personid";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform person delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform admins read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for session operation. 
		else if( $optable=='sessions' ) {

			// Perform session create operation. 
			if($crudop=='create') {

				// Get initial set of field data. 
				$fieldids = ['personid',];
				// $fieldvaluelist = " $personid ";
				$fieldvalues = array_map('getFieldValueById',$fieldids);
				// Get initial set of field data. 
				$fielddataset = getFieldDataByIds($fieldids);
				// Get validated set of field data. 
				$validfielddataset = validateFieldData($fielddataset);
	
				// Get query parameter: field value(s). 
				// $personid = getFieldValueById('personid');
				$personid = $_SESSION['currentuserid'] ?? null;

				// TODO: Get field id list. 
				$fieldidlist = getCommaList($fieldids);
				// TODO: Get field value list. 
				$fieldvaluelist = getCommaList($fieldvalues);

				// Compile database query. 
				$sql = " INSERT INTO $optable ($fieldidlist) VALUES ($fieldvaluelist); ";
			}
	
			// Perform session update operation. 
			// else if($crudop=='update') {
	
			// 	// Get query parameter: id. 
			// 	$id = getFieldValueById('tablerowid');
			// 	// Get query parameter: field value(s). 
			// 	$personid = getFieldValueById('personid');

			// 	// Define field assign list. 
			// 	$fieldsetlist = "";

			// 	// Compile database query. 
			// 	$sql = " UPDATE $optable SET personid=$personid WHERE (id=$id); ";
			// }
	
			// Perform session delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform sessions read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for issue operation. 
		else if( $optable=='issues' ) {

			// Perform issue create operation. 
			if($crudop=='create') {

				// Get initial set of field data. 
				$fieldids = ['deptid', 'issuetitle', 'issuedescription',];
				// $fieldvaluelist = " '$issuetitle', '$issuedescription' ";
				$fieldvalues = array_map('getFieldValueById',$fieldids);
				// Get initial set of field data. 
				$fielddataset = getFieldDataByIds($fieldids);
				// Get validated set of field data. 
				$validfielddataset = validateFieldData($fielddataset);
	
				// Get query parameter: field value(s). 
				$deptid = getFieldValueById('deptid');
				$issuetitle = getFieldValueById('issuetitle');
				$issuedescription = getFieldValueById('issuedescription');

				// TODO: Get field id list. 
				$fieldidlist = getCommaList($fieldids);
				// TODO: Get field value list. 
				$fieldvaluelist = getCommaList($fieldvalues);

				// Compile database query. 
				$sql = " INSERT INTO $optable ($fieldidlist) VALUES ($fieldvaluelist); ";
			}
	
			// Perform issue update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');
				// Get query parameter: field value(s). 
				$deptid = getFieldValueById('deptid');
				$issuetitle = getFieldValueById('issuetitle');
				$issuedescription = getFieldValueById('issuedescription');

				// Define field assign list. 
				$fieldsetlist = "deptid=$deptid, issuetitle=$issuetitle, issuedescription=$issuedescription";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform issue delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform issues read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for comment operation. 
		else if( $optable=='comments' ) {

			// Perform comment create operation. 
			if($crudop=='create') {

				// Get initial set of field data. 
				$fieldids = ['personid', 'issueid', 'commenttext',];
				// $fieldvaluelist = " $issueid, $personid, '$commenttext' ";
				$fieldvalues = array_map('getFieldValueById',$fieldids);
				// Get initial set of field data. 
				$fielddataset = getFieldDataByIds($fieldids);
				// Get validated set of field data. 
				$validfielddataset = validateFieldData($fielddataset);
	
				// Get query parameter: field value(s). 
				$issueid = getFieldValueById('issueid');
				$personid = getFieldValueById('personid');
				$commenttext = getFieldValueById('commenttext');

				// TODO: Get field id list. 
				$fieldidlist = getCommaList($fieldids);
				// TODO: Get field value list. 
				$fieldvaluelist = getCommaList($fieldvalues);

				// Compile database query. 
				$sql = " INSERT INTO $optable ($fieldidlist) VALUES ($fieldvaluelist); ";
			}
	
			// Perform comment update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');
				// Get query parameter: field value(s). 
				$issueid = getFieldValueById('issueid');
				$commenttext = getFieldValueById('commenttext');

				// Define field assign list. 
				$fieldsetlist = "commenttext=$commenttext, issueid=$issueid";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform comment delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = getFieldValueById('tablerowid');

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform comments read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Display error message for new undefined table. 
		else printToPage("New undefined table selected for operation: $optable");

		// Send database query (if valid). 
		if( isset($sql) ) {

			// Send database query. 
			$querystate = sendDatabaseQuery($sql,true);

			// Return state of query. 
			// return $querystate;
			// Return effect of query. 
			return $querystate['roweffect'];
			// Return results from query. 
			// return $querystate['queryresults'];
		}

		// Notify of no database query (if not valid). 
		else {
			
			// Notify of no database query. 
			printToPage('No query!!!');

			// Return results from query. 
			return 0;
		}
	}

	// Download public table entries from database. 
	function getPublicTables($displaydetail=false) {
		global $databasetables;
		printToPage();
		printToPage("Retrieving public database table entries...");

		// Define public database tables. 
		$publictableids = [
			'departments',
			'genders',
		];

		// Go thru each public database table. 
		foreach($publictableids as $tid) {

			// Do hanging reference mode. 
			if( isset($hangingrefmode) ) {

				// Get public table. 
				$table = $databasetables[$tid];

				// Download basic data for public database table. 
				$table['entrydata'] = getResultTableById($tid,0,$displaydetail);
			}

			// Do direct reference mode. 
			else {

				// Download basic data for public database table. 
				$databasetables[$tid]['entrydata'] = getResultTableById($tid,0,$displaydetail);
			}
		}
	}
	// Download relevant table entries from database. 
	function getRelevantTables($selectedviewid /* 'home' */,$displaydetail=false) {
		global $databasetables;		// $databasetables
		global $selectedtable;		// $databasetables['mycomments']
		printToPage();
		printToPage("Retrieving relevant database table entries ($selectedviewid)...");

		// Do hanging reference mode. 
		if( isset($hangingrefmode) ) {

			// Download detailed data for selected table. 
			$selectedtable['entrydata'] = getResultTableById($selectedviewid,1,$displaydetail);
		}

		// Do direct reference mode. 
		else {

			// Download detailed data for selected table. 
			$databasetables[$selectedviewid]['entrydata'] = getResultTableById($selectedviewid,1,$displaydetail);
		}

		// Do hanging reference mode. 
		if( isset($hangingrefmode) ) {

			// Go thru each referenced database table. 
			foreach($selectedtable['reftableids'] as $rtid) {
	
				// Get reference table. 
				$reftable = $databasetables[$rtid];
				// Download basic data for reference table. 
				$reftable['entrydata'] = getResultTableById($rtid,0,$displaydetail);
			}
		}

		// Do direct reference mode. 
		else {

			// Go thru each referenced database table. 
			foreach($databasetables[$selectedviewid]['reftableids'] as $rtid) {
	
				// Download basic data for reference table. 
				$databasetables[$rtid]['entrydata'] = getResultTableById($rtid,0,$displaydetail);
			}
		}
	}
?>
