
<?php

	// Get self-referencing url for form. 
	function getSelfRefUrl($includequery=true) {

		// Get components of url. 
		$urlbase = $_SERVER['PHP_SELF'];
		$urlquery = $_SERVER['QUERY_STRING'];

		// Return compiled url. 
		if( $includequery && $urlquery ) return htmlspecialchars( "$urlbase?$urlquery" );
		else return htmlspecialchars( "$urlbase" );
	}

	// Print to page. 
	function printToPage($text='') {
		print "<span class=\"block\">$text</span>";
	}

	// Print query to page. 
	function printQuery($sql) {
		print "<script>console.log('Sending query:',`$sql`)</script>";
		?>
		<!-- queryblock -->
		<details class="queryblock">
			<summary>Sending query...</summary>
			<span class="querystring"><?php print $sql; ?></span>
		</details>
		<!-- /queryblock -->
		<?php
		
		// return;
		// printToPage("Sending query...");
		// printToPage($sql);
	}

	// Print query status and results to page. 
	function printQueryDetails($querystatus) {
		$querystate = json_encode( $querystatus );
		print "<script>console.log('Query state:',$querystate)</script>";
		// $queryresults = json_encode( $querystatus['queryresults'] );
		// print "<script>console.log('Query results:',$queryresults)</script>";
		?>
		<!-- queryblock -->
		<details class="queryblock">
			<summary>Details of query...</summary>
			<span class="querystring"><?php print $querystate; ?></span>
		</details>
		<!-- /queryblock -->
		<?php
		
		// return;
		// printToPage("Details of query...");
		// printToPage($sql);
	}

	// Display table entries for all database tables. 
	function displayDatabaseTables() {
		$print = json_encode( getDatabaseEntries() );
		printToPage();
		printToPage("Database table entries: $print");
	}
	// Get table entries for all database tables. 
	function getDatabaseEntries() {
		global $databasetables;
		$databasetableentries = array_map( 'getTableEntries', $databasetables );
		return $databasetableentries;
	}
	// Get list of table entries associated with given table. 
	function getTableEntries($giventable) {
		return $giventable['entrydata'];
	}
?>
