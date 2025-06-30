
<?php

	// Handle new C.R.U.D. operations. 
	function handleCrudOps() {
		global $databasetables;
		printToPage();
		printToPage("Checking for new C.R.U.D. operations...");

		// Get C.R.U.D. operation parameters. 
		$crudopid = $_POST['crudopid'] ?? '';
		$crudtableid = $_POST['crudtableid'] ?? '';

		// Check for valid operation parameters. 
		$docrudop = $crudopid && $crudtableid && isset( $databasetables[ $crudtableid ] ) && in_array( $crudopid , ['create','update','delete',] );

		// Conclude operation (if parameters not valid). 
		if( !$docrudop ) {

			// Display indication of no operation. 
			printToPage("No C.R.U.D. operation (op:$crudopid, tid:$crudtableid)");
			return;
		}

		/****/

		// Perform C.R.U.D. operation (parameters valid). 
		printToPage();
		printToPage("Doing C.R.U.D. operation (op:$crudopid, tid:$crudtableid)");

		// Perform create operation. 
		if( $crudopid=='create' ) {

			// Get field ids. 
			$fieldids = getEntryFieldIds($crudtableid);
			// Get list of field ids. 
			$fieldidlist = getCommaList($fieldids);
			// Get field value list. 
			$fieldvalues = array_map('getFieldValueById',$fieldids);
			$fieldvaluelist = getCommaList($fieldvalues);

			// Compile database query. 
			$sql = " INSERT INTO $crudtableid ($fieldidlist) VALUES ($fieldvaluelist); ";
		}

		// TODO: Perform update operation. 
		else if( $crudopid=='update' ) {

			// Get query condition parameter (id of row to modify). 
			$tablerowid = getFieldValueById('tablerowid');

			// Get field ids. 
			$fieldids = getEntryFieldIds($crudtableid);
			// Get field data: ids, values. 
			$fielddata = getFieldDataByIds($fieldids);

			// Initialize field assigns. 
			$fieldassigns = [];
			// Go thru each field. 
			foreach( $fielddata as $fieldid=>$fieldvalue ) {
				// Save field assign for current field. 
				$fieldassigns[] = "$fieldid=$fieldvalue";
			}
			// Compile field assigns. 
			$fieldassignlist = getCommaList($fieldassigns);

			// Compile database query. 
			$sql = " UPDATE $crudtableid SET $fieldassignlist WHERE (id=$tablerowid); ";
		}

		// Perform delete operation. 
		else if( $crudopid=='delete' ) {

			// Ensure clean query parameter. 
			$crudtableid = cleanInputForQuerySimple( $crudtableid );

			// Get query condition parameter (id of row to modify). 
			$tablerowid = getFieldValueById('tablerowid');

			// Create database query. 
			$sql = " DELETE FROM $crudtableid WHERE (id=$tablerowid); ";
		}

		// Display message for undefined table operation. 
		else printToPage("Warning: Undefined table operation (op:$crudopid, tid:$crudtableid)");

		// Handle database query statement. 
		if( $sql ) {
			// Save state of query. 
			// Send database query. 
			$querystate = sendDatabaseQuery($sql,true);
			// Save effect of query. 
			// $numentries = $querystate['roweffect'];
			// Save results from query. 
			// return $querystate['queryresults'];
		}

		// Notify of no database query (if not valid). 
		else {

			// Notify of no database query. 
			printToPage('No query!!!');

			// Save state of non-query. 
			// $querystate = null;
			// Save effect of non-query. 
			// $numentries = 0;
			// Save results from non-query. 
			// return null;
		}

		// Display indication of completion. 
		// printToPage("$numentries DONE!");
	}
?>
