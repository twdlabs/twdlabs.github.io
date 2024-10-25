
<?php

	// Connect to server database. 
	function openDb($dbname) {

		// Define server credentials. 
		$sn = 'localhost';
		$un = 'root';
		$pw = '';
		// Open server connection to database. 
		$dbconnect = new mysqli($sn,$un,$pw,$dbname);

		// Check server connection to database. 
		if($dbconnect) {

			// Notify if connection successful. 
			printToPage('Connection started...');
			
			// Notify of any connection errors. 
			if($dbconnect->connect_errno) {
				$errornum = $dbconnect->connect_errno;
				$errormsg = $dbconnect->connect_error;
				exit( "<br>Connection error ($errornum): $errormsg" );
			}
		}
		// Notify if connection unsuccessful. 
		else printToPage('Connection failed.');
		// Insert line. 
		printToPage();

		// Return connection. 
		return $dbconnect;
	}

	// Print to page. 
	function printToPage($text='') {
		print "<span class=\"block\">$text</span>";
	}

	// Print query to page. 
	function printQueryToPage($sql) {
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

	// Disconnect from server database. 
	function closeDb($db) {

		// Close server connection to database. 
		$db->close();
		// printToPage();
		// printToPage('Connection closed.');
	}
?>
