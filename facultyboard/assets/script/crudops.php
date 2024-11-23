
<?php

	// Check for crud operation from previous page. 
	function checkForDataMoves() {
		printToPage();
		printToPage("Checking for new data operations...");

		// Check for operation parameters. 
		$validoperationparameters = isset( $_POST['tableid'] ) && isset( $_POST['optypeid'] );

		// Perform operation (if parameters valid). 
		if($validoperationparameters) {

			// Get operation parameters. 
			$opid = cleanInputForQuerySimple( $_POST['optypeid'] );
			$tableid = cleanInputForQuerySimple( $_POST['tableid'] );

			// Perform crud operation. 
			$successfuloperations = goCrudOp($tableid,$opid);
			printToPage("$successfuloperations DONE!");
		}

		// Display indication (if parameters not valid). 
		else printToPage('NONE!');
	}

	// Perform crud operation. 
	function goCrudOp($optable,$crudop) {
		printToPage();
		printToPage("Doing crud operation: (op:$crudop, tid:$optable)");


		// Go for no operation. 
		if(false) ;

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
					$passwdhash = generatePasswdHash( $passwd . $passwdsalt , 1 );
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
				$passwd = $_POST['password'] ?? '';
				// $passwdrpt = $_POST['passwordrepeat'] ?? '';

				// Create database query (with password). 
				if( $passwd == $passwdrpt ) {

					printToPage('Password present');
					// printToPage("Password: $passwd");
					$passwdsalt = generateRandomSalt(1);
					// printToPage("passwdsalt: $passwdsalt");
					$passwdhash = generatePasswdHash( $passwd . $passwdsalt , 1 );
					// printToPage("passwdhash: $passwdhash");

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

					// Append password-related data. 
					// $fieldsetlist .= ", passwdsalt='$passwdsalt', passwdhash='$passwdhash' ";
				}
				// Create database query (without password). 
				else {

					// Create database query (with referral). 
					if($referrerid) {

						// Define field assign list. 
						$fieldsetlist = "personname=$personname, genderid=$genderid, position=$position, deptid=$deptid, referrerid=$referrerid, username=$username";
					}
					// Create database query (without referral). 
					else {

						// Define field assign list. 
						$fieldsetlist = "personname=$personname, genderid=$genderid, position=$position, deptid=$deptid, referrerid=null, username=$username";
					}
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
				$fieldids = ['issueid', 'personid', 'commenttext',];
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

		// Display error message for invalid table id. 
		else printToPage("Invalid table selected for operation: $optable");

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
			return null;
		}
	}

	// Download public table entries from database. 
	function getPublicTables() {
		global $databasetables;
		// global $selectedtable;
		printToPage();
		printToPage("Retrieving public database table entries...");

		// Define public database tables. 
		$publictableids = [
			'departments',
			'genders',
		];

		// Go thru each database table. 
		foreach($publictableids as $tid) {

			// Save list of entries for database table. 
			$databasetables[$tid]['entrydata'] = getResultTableById($tid);
		}
	}
	// Download all table entries from database. 
	function getAllTables() {
		global $databasetables;
		printToPage();
		printToPage("Retrieving all database table entries...");

		// Go thru each database table. 
		foreach($databasetables as $tid=>$table) {
			
			// Save list of entries for database table. 
			// $table['entrydata'] = getResultTableById($tid);
			// Save list of entries for database table. 
			$databasetables[$tid]['entrydata'] = getResultTableById($tid);
			$print = json_encode( $table['entrydata'] );
			printToPage( "Local: $print" );
			$print = json_encode( $databasetables[$tid]['entrydata'] );
			printToPage( "Global: $print" );
		}
	}
	// Download relevant table entries from database. 
	function getRelevantTables($selectedviewid /* 'home' */) {
		global $databasetables;		// $databasetables
		global $selectedtable;		// $databasetables['recentactivity']
		printToPage();
		printToPage("Retrieving relevant database table entries ($selectedviewid)...");

		// Save table entries for selected table. 
		// $selectedtable['entrydata'] = getResultTableById($selectedviewid,1,1);
		$databasetables[$selectedviewid]['entrydata'] = getResultTableById($selectedviewid,1,1);

		// Go thru each reference table. 
		// foreach($selectedtable['reftableids'] as $rtid) {
		foreach($databasetables[$selectedviewid]['reftableids'] as $rtid) {

			// Get reference table. 
			// $reftable = $databasetables[$rtid];
			// Save table rows for reference table. 
			// $reftable['entrydata'] = getResultTableById($rtid,0,1);

			// Save table rows for reference table. 
			$databasetables[$rtid]['entrydata'] = getResultTableById($rtid,0,1);
		}
	}
	// Get result table for given table id. 
	function getResultTableById($giventableid,$querydetail=false,$showdetail=false) {
		global $databasetables;

		if($showdetail) printToPage("Retrieving table entries ($giventableid)...");
		if(!$giventableid) return [];

		// Get database query. 
		if($querydetail) $sql = $databasetables[$giventableid]['detaildataquery'];
		else $sql = $databasetables[$giventableid]['basicdataquery'];
		// Add id to query for 'recent activity' table. 
		if($giventableid=='recentactivity') $sql .= $_SESSION['currentuserid'];

		// Get rows of result table from query.
		$queryresults = sendDatabaseQuery($sql,$showdetail)['queryresults'];

		// Return rows of result table. 
		return $queryresults;
	}
?>
