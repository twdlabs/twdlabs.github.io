
<?php

	// Check for crud operation from previous page. 
	function checkForDataMoves() {
		printToPage();
		printToPage("Now checking for crud operation...");

		// Check for operation parameters. 
		$validoperationparameters = isset( $_POST['tableid'] ) && isset( $_POST['operation'] );

		// Perform operation (if parameters valid). 
		if($validoperationparameters) {

			// Get operation parameters. 
			$tid = /* cleanInputForQuery */( $_POST['tableid'] );
			$opid = /* cleanInputForQuery */( $_POST['operation'] );

			// Perform crud operation. 
			goCrudOp($tid,$opid);
			printToPage('DONE!');
		}
		else printToPage('NONE!');
	}
	// Perform crud operation. 
	function goCrudOp($optable,$crudop) {
		printToPage();
		printToPage("Now doing crud operation: $crudop $optable");

		// Go for user operation. 
		if( $optable=='admins' ) {

			// Perform person create operation. 
			if($crudop=='create') {
	
				// Get query parameter(s). 
				$personid = cleanInputForQuery( $_POST['personid'] );

				// Define field id list. 
				$fieldidlist = "(personid)";
				// Define field value list. 
				$fieldvaluelist = "($personid)";

				// Compile database query. 
				$sql = " INSERT INTO $optable $fieldidlist VALUES $fieldvaluelist; ";
			}
	
			// Perform person update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );
				// Get query parameter(s). 
				$personid = cleanInputForQuery( $_POST['personid'] );

				// Define field assign list. 
				// $fieldsetlist = "personid=$personid, password='$password'";
				// $fieldsetlist = "password='$password'";
				$fieldsetlist = "personid=$personid";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform person delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform admins read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for person operation. 
		else if( $optable=='persons' ) {

			// Perform person create operation. 
			if($crudop=='create') {
	
				// Get query parameter(s). 
				$personname = cleanInputForQuery( $_POST['personname'] );
				$genderid = cleanInputForQuery( $_POST['genderid'] );
				$position = cleanInputForQuery( $_POST['position'] );
				$deptid = cleanInputForQuery( $_POST['deptid'] );
				$referralid = cleanInputForQuery( $_POST['referralid'] );
				$username = cleanInputForQuery( $_POST['username'] );
				$pwd = $_POST['password'] ?? '';

				// Create database query (with password). 
				if($pwd) {

					// printToPage("pwd: $pwd");
					$passwdsalt = generateRandomSalt();
					// printToPage("passwdsalt: $passwdsalt");
					$passwdhash = generatePasswdHash( $pwd . $passwdsalt );
					// printToPage("passwdhash: $passwdhash");

					// Create database query (with referral). 
					if($referralid) {

						// Define field id list. 
						$fieldidlist = "(personname, genderid, position, deptid, referralid, username, passwdsalt, passwdhash)";
						// Define field value list. 
						$fieldvaluelist = "('$personname', $genderid, '$position', $deptid, $referralid, '$username', '$passwdsalt', '$passwdhash')";
					}
					// Create database query (without referral). 
					else {

						// Define field id list. 
						$fieldidlist = "(personname, genderid, position, deptid, referralid, username, passwdsalt, passwdhash)";
						// Define field value list. 
						$fieldvaluelist = "('$personname', $genderid, '$position', $deptid, null, '$username', '$passwdsalt', '$passwdhash')";
					}
				}
				// Create database query (without password). 
				else {

					// Create database query (with referral). 
					if($referralid) {

						// Define field id list. 
						$fieldidlist = "(personname, genderid, position, deptid, referralid, username)";
						// Define field value list. 
						$fieldvaluelist = "('$personname', $genderid, '$position', $deptid, $referralid, '$username')";
					}
					// Create database query (without referral). 
					else {

						// Define field id list. 
						$fieldidlist = "(personname, genderid, position, deptid, referralid, username)";
						// Define field value list. 
						$fieldvaluelist = "('$personname', $genderid, '$position', $deptid, null, '$username')";
					}
				}
	
				// Compile database query. 
				$sql = " INSERT INTO $optable $fieldidlist VALUES $fieldvaluelist; ";
			}
	
			// Perform person update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );
				// Get query parameter(s). 
				$personname = cleanInputForQuery( $_POST['personname'] );
				$genderid = cleanInputForQuery( $_POST['genderid'] );
				$position = cleanInputForQuery( $_POST['position'] );
				$deptid = cleanInputForQuery( $_POST['deptid'] );
				$referralid = cleanInputForQuery( $_POST['referralid'] );
				$username = cleanInputForQuery( $_POST['username'] );
				$pwd = $_POST['password'] ?? '';

				// Create database query (with password). 
				if($pwd) {

					printToPage('Password present');
					// printToPage("pwd: $pwd");
					$passwdsalt = generateRandomSalt();
					// printToPage("passwdsalt: $passwdsalt");
					$passwdhash = generatePasswdHash( $pwd . $passwdsalt );
					// printToPage("passwdhash: $passwdhash");

					// Create database query (with referral). 
					if($referralid) {

						// Define field assign list. 
						$fieldsetlist = "personname='$personname', genderid=$genderid, position='$position', deptid=$deptid, referralid=$referralid, username='$username', passwdsalt='$passwdsalt', passwdhash='$passwdhash'";
					}
					// Create database query (without referral). 
					else {

						// Define field assign list. 
						$fieldsetlist = "personname='$personname', genderid=$genderid, position='$position', deptid=$deptid, referralid=null, username='$username', passwdsalt='$passwdsalt', passwdhash='$passwdhash'";
					}
				}
				// Create database query (without password). 
				else {

					// Create database query (with referral). 
					if($referralid) {

						// Define field assign list. 
						$fieldsetlist = "personname='$personname', genderid=$genderid, position='$position', deptid=$deptid, referralid=$referralid, username='$username'";
					}
					// Create database query (without referral). 
					else {

						// Define field assign list. 
						$fieldsetlist = "personname='$personname', genderid=$genderid, position='$position', deptid=$deptid, referralid=null, username='$username'";
					}
				}

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform person delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform persons read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for issue operation. 
		else if( $optable=='issues' ) {

			// Perform issue create operation. 
			if($crudop=='create') {
	
				// Get query parameter(s). 
				$issuetitle = cleanInputForQuery( $_POST['issuetitle'] );
				$issuedescription = cleanInputForQuery( $_POST['issuedescription'] );

				// Define field id list. 
				$fieldidlist = "(issuetitle, issuedescription)";
				// Define field value list. 
				$fieldvaluelist = "('$issuetitle', '$issuedescription')";

				// Compile database query. 
				$sql = " INSERT INTO $optable $fieldidlist VALUES $fieldvaluelist; ";
			}
	
			// Perform issue update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );
				// Get query parameter(s). 
				$issuetitle = cleanInputForQuery( $_POST['issuetitle'] );
				$issuedescription = cleanInputForQuery( $_POST['issuedescription'] );

				// Define field assign list. 
				$fieldsetlist = "issuetitle='$issuetitle', issuedescription='$issuedescription'";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform issue delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );

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
	
				// Get query parameter(s). 
				$issueid = cleanInputForQuery( $_POST['issueid'] );
				$personid = cleanInputForQuery( $_POST['personid'] );
				$commenttext = cleanInputForQuery( $_POST['commenttext'] );

				// Define field id list. 
				$fieldidlist = "(issueid, personid, commenttext)";
				// Define field value list. 
				$fieldvaluelist = "($issueid, $personid, '$commenttext')";

				// Compile database query. 
				$sql = " INSERT INTO $optable $fieldidlist VALUES $fieldsetlist; ";
			}
	
			// Perform comment update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );
				// Get query parameter(s). 
				$issueid = cleanInputForQuery( $_POST['issueid'] );
				$commenttext = cleanInputForQuery( $_POST['commenttext'] );

				// Define field assign list. 
				$fieldsetlist = "commenttext='$commenttext', issueid=$issueid";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform comment delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform comments read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for session operation. 
		else if( $optable=='sessions' ) {

			// Perform session create operation. 
			if($crudop=='create') {
				global $currentuserid;
	
				// Get query parameter(s). 
				// $personid = cleanInputForQuery( $_POST['personid'] );

				// Define field id list. 
				$fieldidlist = "(personid)";
				// Define field value list. 
				$fieldvaluelist = "($currentuserid)";

				// Compile database query. 
				$sql = " INSERT INTO $optable $fieldidlist VALUES $fieldsetlist; ";
			}
	
			// Perform session update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );
				// Get query parameter(s). 
				$personid = cleanInputForQuery( $_POST['personid'] );

				// Define field assign list. 
				$fieldsetlist = "";

				// Compile database query. 
				$sql = " UPDATE $optable SET personid=$personid WHERE (id=$id); ";
			}
	
			// Perform session delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform sessions read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for department operation. 
		else if( $optable=='departments' ) {

			// Perform department create operation. 
			if($crudop=='create') {
				global $currentuserid;
	
				// Get query parameter(s). 
				$deptname = cleanInputForQuery( $_POST['deptname'] );

				// Define field id list. 
				$fieldidlist = "(deptname)";
				// Define field value list. 
				$fieldvaluelist = "('$deptname')";

				// Compile database query. 
				$sql = " INSERT INTO $optable $fieldidlist VALUES $fieldsetlist; ";
			}
	
			// Perform department update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );
				// Get query parameter(s). 
				$deptname = cleanInputForQuery( $_POST['deptname'] );

				// Define field assign list. 
				$fieldsetlist = "deptname='$deptname'";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform department delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );

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
				global $currentuserid;
	
				// Get query parameter(s). 
				$deptname = cleanInputForQuery( $_POST['deptname'] );

				// Define field id list. 
				$fieldidlist = "(deptname)";
				// Define field value list. 
				$fieldvaluelist = "('$deptname')";

				// Compile database query. 
				$sql = " INSERT INTO $optable $fieldidlist VALUES $fieldsetlist; ";
			}
	
			// Perform gender update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );
				// Get query parameter(s). 
				$deptname = cleanInputForQuery( $_POST['deptname'] );

				// Define field assign list. 
				$fieldsetlist = "deptname='$deptname'";

				// Compile database query. 
				$sql = " UPDATE $optable SET $fieldsetlist WHERE (id=$id); ";
			}
	
			// Perform gender delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['tablerowid'] );

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform departments read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Display error message for invalid table id. 
		else printToPage("Invalid table selected for operation: $optable");

		// Send database query.
		if( isset($sql) ) {
			printQueryToPage($sql);
			sendDatabaseQuery($sql);
		}
	}

	// Download all table data from database. 
	function getAllTableData() {
		global $databasetables;
		printToPage();
		printToPage("Now retrieving all database data...");

		// Go thru each database table. 
		foreach($databasetables as $tid=>$table) {
			// printToPage("Retrieving $tid...");
			
			// Save list of entries for database table. 
			// $table['entries'] = getResultTableById($tid);
			// printToPage(  json_encode( $table['entries'] )  );
			// Save list of entries for database table. 
			$databasetables[$tid]['entries'] = getResultTableById($tid);
			// printToPage(  json_encode( $databasetables[$tid]['entries'] )  );
		}
	}
	// Retrieve relevant table data from database. 
	function getRelevantTableData() {
		global $databasetables;
		global $selectedtable;
		global $selectedviewid;
		printToPage();
		printToPage("Now retrieving relevant database data...");

		// Save table entries for selected table. 
		$selectedtable['entries'] = getResultTableById($selectedviewid);

		// Go thru each reference table for selected table. 
		foreach($selectedtable['reftableids'] as $rtid) {

			// Get reference table. 
			$reftable = $databasetables[$rtid];

			// Save table rows for reference table. 
			$reftable['entries'] = getResultTableById($rtid,false);
			// $databasetables[$rtid]['entries'] = getResultTableById($rtid,false);
		}
	}
	// Get result table for given table id. 
	function getResultTableById($giventableid,$fulldetail=true) {
		global $databasetables;
		if(!$giventableid) return [];

		// Get database query. 
		if($fulldetail) $sql = $databasetables[$giventableid]['detailquery'];
		else $sql = $databasetables[$giventableid]['basicquery'];
		// printQueryToPage($sql);

		// Get rows of result table from query.
		$resulttable = sendDatabaseQuery($sql);

		// Return rows of result table. 
		return $resulttable;
	}
?>
