
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
		// print "<span class=\"block\">$text</span>";
	}

	// Print query status and results to page. 
	function printQueryDetails($querystatus) {
		$queryresults = json_encode( $querystatus['queryresults'] );
		print "<script>console.log('Results of query:',`$queryresults`)</script>";
		$querystatus = json_encode( $querystatus );
		print "<script>console.log('Status of query:',`$querystatus`)</script>";
		?>
		<!-- queryblock -->
		<details class="queryblock">
			<summary>Details of query...</summary>
			<span class="querystring"><?php print $querystatus; ?></span>
			<span class="querystring"><?php print $queryresults; ?></span>
		</details>
		<!-- /queryblock -->
		<?php
		
		// return;
		// printToPage("Sending query...");
		// printToPage($sql);
		// print "<span class=\"block\">$text</span>";
	}
?>
