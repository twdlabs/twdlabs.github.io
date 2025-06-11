
<?php

	// Switch into hanging reference mode. 
	// $hangingrefmode = true;


	// Download public table entries from database. 
	function getPublicTables($displaydetail=false) {
		global $databasetables, $publictableids;
		printToPage();
		printToPage("Retrieving public database table entries...");

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
	// Download all table entries from database. 
	function getAllTables($displaydetail=false) {
		global $databasetables;
		// $hangingrefmode = true;
		printToPage();
		printToPage("Retrieving all database table entries...");
		printToPage();

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

			// Display details of retrieved data. 
			// if( $displaydetail ) {
				$print = json_encode( $table['entrydata'] );
				printToPage( "Local: $print" );
				$print = json_encode( $databasetables[$tid]['entrydata'] );
				printToPage( "Global: $print" );
			// }
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
