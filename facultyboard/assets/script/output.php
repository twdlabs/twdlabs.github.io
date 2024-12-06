
<?php

	// Display details of selected view. 
	function displaySelectedViewDetails() {
		global $selectedviewid;
		global $loadinghomeview;
		global $loadingtableview;
		global $loadingsettingsview;
		global $loadinguserchooser;

		// 
		printToPage();
		// $paste = !!($selectedviewid) ? $selectedviewid : '[none]';
		$paste = $selectedviewid ?? '[none]';
		printToPage("Selected view id: $paste");
		$paste = $loadinghomeview ? 'true' : 'false';
		printToPage("Home view: $paste");
		$paste = $loadingtableview ? 'true' : 'false';
		printToPage("Table view: $paste");
		$paste = $loadingsettingsview ? 'true' : 'false';
		printToPage("Settings view: $paste");
		$paste = $loadinguserchooser ? 'true' : 'false';
		printToPage("User chooser: $paste");
	}
?>
