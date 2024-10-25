
<?php

	// Perform crud operation from previous page. 
	function checkForCrudOps($opid,$optid) {
		global $databasetables;
		$no_operation = !isset( $_POST['tableid'] ) || !isset( $_POST['operation'] );
		if($no_operation) return;

		// Get operation parameters. 
		$operationid = $opid ? $opid : cleanInputForQuery( $_POST['operation'] );
		$operationtableid = $optid ? $optid : cleanInputForQuery( $_POST['tableid'] );

		// Go for user operation. 
		if( $operationtableid=='admins' ) {

			// Perform person create operation. 
			if($operationid=='create') {
	
				// Get query parameter(s). 
				$personid = cleanInputForQuery( $_POST['personid'] );

				// Create database query. 
				$sql = "INSERT INTO $operationtableid (personid) VALUES ('$personid');";
			}
	
			// Perform person update operation. 
			else if($operationid=='update') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$personid = cleanInputForQuery( $_POST['personid'] );

				// Create database query. 
				// $sql = "UPDATE $operationtableid SET personid='$personid', password='$password' WHERE id='$id';";
				// $sql = "UPDATE $operationtableid SET password='$password' WHERE id='$id';";
				$sql = "UPDATE $operationtableid SET personid='$personid' WHERE id='$id';";
			}
	
			// Perform person delete operation. 
			else if($operationid=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM $operationtableid WHERE id='$id';";
			}

			// Perform admins read operation. 
			else {

				// Create database query. 
				$sql = "SELECT * FROM $operationtableid;";
			}
			
			// Send database query. 
			printQueryToPage($sql);
			sendDatabaseQuery($sql);
		}

		// Go for person operation. 
		else if( $operationtableid=='persons' ) {

			// Perform person create operation. 
			if($operationid=='create') {
	
				// Get query parameter(s). 
				$personname = cleanInputForQuery( $_POST['personname'] );
				$genderid = cleanInputForQuery( $_POST['genderid'] );
				$department = cleanInputForQuery( $_POST['department'] );
				$referralsource = cleanInputForQuery( $_POST['referralsource'] );
				$emailaddress = cleanInputForQuery( $_POST['emailaddress'] );
				$pwd = $_POST['password'] ?? '';

				// Create database query (with password). 
				if($pwd) {
					// printToPage("pwd: $pwd");
					$passwdsalt = generateRandomSalt();
					// printToPage("passwdsalt: $passwdsalt");
					$passwdhash = generatePasswdHash( $pwd . $passwdsalt );
					// printToPage("passwdhash: $passwdhash");
					$sql = "INSERT INTO $operationtableid (personname, genderid, department, referralsource, emailaddress,  passwdsalt, passwdhash) VALUES ('$personname', '$genderid', '$department', '$referralsource', '$emailaddress', '$passwdsalt', '$passwdhash');";
				}

				// Create database query (without password). 
				else $sql = "INSERT INTO $operationtableid (personname, genderid, department, referralsource, emailaddress) VALUES ('$personname', '$genderid', '$department', '$referralsource', '$emailaddress');";
			}
	
			// Perform person update operation. 
			else if($operationid=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$personname = cleanInputForQuery( $_POST['personname'] );
				$genderid = cleanInputForQuery( $_POST['genderid'] );
				$department = cleanInputForQuery( $_POST['department'] );
				$referralsource = cleanInputForQuery( $_POST['referralsource'] );
				$emailaddress = cleanInputForQuery( $_POST['emailaddress'] );
				$pwd = $_POST['password'] ?? '';

				// Create database query (with password). 
				if($pwd) {
					printToPage('Password present');
					// printToPage("pwd: $pwd");
					$passwdsalt = generateRandomSalt();
					// printToPage("passwdsalt: $passwdsalt");
					$passwdhash = generatePasswdHash( $pwd . $passwdsalt );
					// printToPage("passwdhash: $passwdhash");
					$sql = "UPDATE $operationtableid SET personname='$personname', genderid='$genderid', department='$department', referralsource='$referralsource', emailaddress='$emailaddress', passwdsalt='$passwdsalt', passwdhash='$passwdhash' WHERE id='$id';";
				}

				// Create database query (without password). 
				else $sql = "UPDATE $operationtableid SET personname='$personname', genderid='$genderid', department='$department', referralsource='$referralsource', emailaddress='$emailaddress' WHERE id='$id';";
			}
	
			// Perform person delete operation. 
			else if($operationid=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM $operationtableid WHERE id='$id';";
			}

			// Perform persons read operation. 
			else {

				// Create database query. 
				$sql = "SELECT * FROM $operationtableid;";
			}

			// Send database query. 
			printQueryToPage($sql);
			sendDatabaseQuery($sql);
		}

		// Go for issue operation. 
		else if( $operationtableid=='issues' ) {

			// Perform issue create operation. 
			if($operationid=='create') {
	
				// Get query parameter(s). 
				$issuetitle = cleanInputForQuery( $_POST['issuetitle'] );
				$issuedescription = cleanInputForQuery( $_POST['issuedescription'] );

				// Create database query. 
				$sql = "INSERT INTO $operationtableid (issuetitle, issuedescription) VALUES ('$issuetitle', '$issuedescription');";
			}
	
			// Perform issue update operation. 
			else if($operationid=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$issuetitle = cleanInputForQuery( $_POST['issuetitle'] );
				$issuedescription = cleanInputForQuery( $_POST['issuedescription'] );

				// Create database query. 
				$sql = "UPDATE $operationtableid SET issuetitle='$issuetitle', issuedescription='$issuedescription' WHERE id='$id';";
			}
	
			// Perform issue delete operation. 
			else if($operationid=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM $operationtableid WHERE id='$id';";
			}

			// Perform issues read operation. 
			else {

				// Create database query. 
				$sql = "SELECT * FROM $operationtableid;";
			}

			// Send database query. 
			printQueryToPage($sql);
			sendDatabaseQuery($sql);
		}

		// Go for comment operation. 
		else if( $operationtableid=='comments' ) {

			// Perform comment create operation. 
			if($operationid=='create') {
	
				// Get query parameter(s). 
				$issueid = cleanInputForQuery( $_POST['issueid'] );
				$personid = cleanInputForQuery( $_POST['personid'] );
				$commenttext = cleanInputForQuery( $_POST['commenttext'] );

				// Create database query. 
				$sql = "INSERT INTO $operationtableid (issueid, personid, commenttext) VALUES ('$issueid', '$personid', '$commenttext');";
			}
	
			// Perform comment update operation. 
			else if($operationid=='update') {
	
				
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );
				// Get query parameter(s). 
				$issueid = cleanInputForQuery( $_POST['issueid'] );
				$commenttext = cleanInputForQuery( $_POST['commenttext'] );

				// Create database query. 
				$sql = "UPDATE $operationtableid SET commenttext='$commenttext', issueid='$issueid' WHERE id='$id';";
			}
	
			// Perform comment delete operation. 
			else if($operationid=='delete') {
	
				// Get query parameter: id. 
				$id = cleanInputForQuery( $_POST['rid'] );

				// Create database query. 
				$sql = "DELETE FROM $operationtableid WHERE id='$id';";
			}

			// Perform comments read operation. 
			else {

				// Create database query. 
				$sql = "SELECT * FROM $operationtableid;";
			}

			// Send database query. 
			printQueryToPage($sql);
			sendDatabaseQuery($sql);
		}
	}

	// Retrieve all table data from database. 
	function getAllTableData() {
		global $databasetables;

		// Go thru each database table. 
		foreach($databasetables as $tid=>$table) {
			printToPage();
			printToPage("Retrieving all $tid from database...");
			
			// Save list of entries for database table. 
			// $table['entries'] = getResultTableById($tid);
			// printToPage(json_encode($table['entries']));
			// Save list of entries for database table. 
			$databasetables[$tid]['entries'] = getResultTableById($tid);
			// printToPage(json_encode($databasetables[$tid]['entries']));
		}
	}
	// Retrieve relevant table data from database. 
	function getRelevantTableData() {
		global $databasetables;
		global $selectedtable;

		// Save table entries for selected table. 
		$selectedtable['entries'] = getResultTableById($selectedviewid);

		// Go thru each reference table for selected table. 
		foreach($selectedtable['reftableids'] as $rtid) {

			// Get reference table. 
			$reftable = $databasetables[$rtid];

			// Save table rows for reference table. 
			$reftable['entries'] = getResultTableById($rtid,false);
		}
	}
	// Get result table for given table id. 
	function getResultTableById($giventableid,$fromhome=true) {
		global $databasetables;
		if(!$giventableid) return [];

		// Get database query. 
		if($fromhome) $sql = $databasetables[$giventableid]['homequery'];
		else $sql = $databasetables[$giventableid]['awayquery'];
		printQueryToPage($sql);

		// Get rows of result table from query.
		$resulttable = sendDatabaseQuery($sql);

		// Return rows of result table. 
		return $resulttable;
	}

	// Get hashing salt for given user. 
	function getUserSaltById($uid) {

		// Create database query. 
		$sql = "SELECT * FROM persons WHERE id=$uid";
		printQueryToPage($sql);

		// Send database query. 
		$userqueryresult = sendDatabaseQuery($sql);
		if($userqueryresult) {
			printToPage('User salt found');
			return $userqueryresult[0]['passwdsalt'];
		}
		else {
			printToPage('User salt not found');
			return '';
		}
	}

	// Generate random salt for password hashing. 
	function generateRandomSalt() {

		// Generate random bytes. 
		$r = random_bytes(16);
		printToPage ("r: $r");

		// Convert binary bytes to hexadecimal. 
		$b = bin2hex($r);
		printToPage ("b: $b");

		// Return hexadecimal bytes as salt. 
		return $b;
	}

	// Generate password hash. 
	function generatePasswdHash($input) {

		// Generate password hash. 
		$h = hash('sha256',$input);
		printToPage ("h: $h");

		// Return password hash. 
		return $h;
	}
?>
