
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

				// Create database query. 
				$sql = " INSERT INTO $optable (personid) VALUES ($personid); ";
			}
	
			// Perform person update operation. 
			else if($crudop=='update') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$personid = cleanInputForQuery( $_POST['personid'] );

				// Create database query. 
				// $sql = " UPDATE $optable SET personid=$personid, password='$password' WHERE (id=$id); ";
				// $sql = " UPDATE $optable SET password='$password' WHERE (id=$id); ";
				$sql = " UPDATE $optable SET personid=$personid WHERE (id=$id); ";
			}
	
			// Perform person delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

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
					if($referralid) $sql = " INSERT INTO $optable (personname, genderid, position, referralid, username,  passwdsalt, passwdhash) VALUES ('$personname', $genderid, '$position', $referralid, '$username', '$passwdsalt', '$passwdhash'); ";
					else $sql = " INSERT INTO $optable (personname, genderid, position, referralid, username,  passwdsalt, passwdhash) VALUES ('$personname', $genderid, '$position', null, '$username', '$passwdsalt', '$passwdhash'); ";
				}

				// Create database query (without password). 
				else {
					if($referralid) $sql = " INSERT INTO $optable (personname, genderid, position, referralid, username) VALUES ('$personname', $genderid, '$position', $referralid, '$username'); ";
					else $sql = " INSERT INTO $optable (personname, genderid, position, referralid, username) VALUES ('$personname', $genderid, '$position', null, '$username'); ";
				}
			}
	
			// Perform person update operation. 
			else if($crudop=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$personname = cleanInputForQuery( $_POST['personname'] );
				$genderid = cleanInputForQuery( $_POST['genderid'] );
				$position = cleanInputForQuery( $_POST['position'] );
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
					if($referralid) $sql = " UPDATE $optable SET personname='$personname', genderid=$genderid, position='$position', referralid=$referralid, username='$username', passwdsalt='$passwdsalt', passwdhash='$passwdhash' WHERE (id=$id); ";
					// Create database query (without referral). 
					else $sql = " UPDATE $optable SET personname='$personname', genderid=$genderid, position='$position', referralid=null, username='$username', passwdsalt='$passwdsalt', passwdhash='$passwdhash' WHERE (id=$id); ";
				}

				// Create database query (without password). 
				else {
					// Create database query (with referral). 
					if($referralid) $sql = " UPDATE $optable SET personname='$personname', genderid=$genderid, position='$position', referralid=$referralid, username='$username' WHERE (id=$id); ";
					// Create database query (without referral). 
					else $sql = " UPDATE $optable SET personname='$personname', genderid=$genderid, position='$position', referralid=null, username='$username' WHERE (id=$id); ";
				}
			}
	
			// Perform person delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

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

				// Create database query. 
				$sql = " INSERT INTO $optable (issuetitle, issuedescription) VALUES ('$issuetitle', '$issuedescription'); ";
			}
	
			// Perform issue update operation. 
			else if($crudop=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$issuetitle = cleanInputForQuery( $_POST['issuetitle'] );
				$issuedescription = cleanInputForQuery( $_POST['issuedescription'] );

				// Create database query. 
				$sql = " UPDATE $optable SET issuetitle='$issuetitle', issuedescription='$issuedescription' WHERE (id=$id); ";
			}
	
			// Perform issue delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

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

				// Create database query. 
				$sql = " INSERT INTO $optable (issueid, personid, commenttext) VALUES ($issueid, $personid, '$commenttext'); ";
			}
	
			// Perform comment update operation. 
			else if($crudop=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$issueid = cleanInputForQuery( $_POST['issueid'] );
				$commenttext = cleanInputForQuery( $_POST['commenttext'] );

				// Create database query. 
				$sql = " UPDATE $optable SET commenttext='$commenttext', issueid=$issueid WHERE (id=$id); ";
			}
	
			// Perform comment delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

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

				// Create database query. 
				$sql = " INSERT INTO $optable (personid) VALUES ($currentuserid); ";
			}
	
			// Perform session update operation. 
			else if($crudop=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$personid = cleanInputForQuery( $_POST['personid'] );

				// Create database query. 
				$sql = " UPDATE $optable SET personid=$personid WHERE (id=$id); ";
			}
	
			// Perform session delete operation. 
			else if($crudop=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

				// Create database query. 
				$sql = " DELETE FROM $optable WHERE (id=$id); ";
			}

			// Perform sessions read operation. 
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
