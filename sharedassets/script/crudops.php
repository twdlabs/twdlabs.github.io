
<?php

	// Switch into hanging reference mode. 
	$hangingrefmode = true;


	// Check for new C.R.U.D. operations. 
	function checkCrudOps() {
		printToPage();
		printToPage("Checking for new C.R.U.D. operations...");

		// Check for operation parameters. 
		$newcrudop = isset( $_POST['crudtableid'] ) && isset( $_POST['crudopid'] );

		// Perform operation (if valid parameters). 
		if( $newcrudop ) {

			// Get operation parameters. 
			$crudopid = cleanInputForQuerySimple( $_POST['crudopid'] );
			$crudtableid = cleanInputForQuerySimple( $_POST['crudtableid'] );

			// Perform C.R.U.D. operation. 
			$numsuccessfulcrudops = goCrudOp($crudtableid,$crudopid);
			printToPage("$numsuccessfulcrudops DONE!");
		}

		// Display indication (if parameters not valid). 
		else printToPage('NONE!');
	}

	// Download all table entries from database. 
	function getAllTables($displaydetail=false) {
		global $databasetables;
		printToPage();
		printToPage("Retrieving all database table entries...");

		// Go thru each database table. 
		foreach($databasetables as $tid=>$table) {

			// Do hanging reference mode. 
			if( isset($hangingrefmode) ) {
			
				// Download basic data for current database table. 
				// $table['entrydata'] = getResultTableById($tid,0,$displaydetail);
				$table['entrydata'] = getResultTableById($tid,1,$displaydetail);
			}

			// Do direct reference mode. 
			else {

				// Download basic data for current database table. 
				// $databasetables[$tid]['entrydata'] = getResultTableById($tid,0,$displaydetail);
				$databasetables[$tid]['entrydata'] = getResultTableById($tid,1,$displaydetail);
			}

			// 
			$print = json_encode( $table['entrydata'] );
			printToPage( "Local: $print" );
			$print = json_encode( $databasetables[$tid]['entrydata'] );
			printToPage( "Global: $print" );
		}
	}
	// Get result table for given table id. 
	function getResultTableById($giventableid,$querydatadetail=false,$displaydetail=false) {
		global $databasetables;
		if($displaydetail) printToPage("Retrieving table entries (tid:$giventableid)...");
		if(!$giventableid) return [];

		// Get database query. 
		if($querydatadetail) {
			$sql = $databasetables[$giventableid]['detaildataquery'];
		} else {
			$sql = $databasetables[$giventableid]['basicdataquery'];
		}

		// Add id to query for 'my comments' table. 
		if( $giventableid=='mycomments' ) {
			global $currentuserid;
			$sql .= $currentuserid;
			// $sql .= $_SESSION['currentuserid'];
		}

		// Get rows of result table from query.
		$queryresults = sendDatabaseQuery($sql,$displaydetail)['queryresults'];

		// Return rows of result table. 
		return $queryresults;
	}
?>
