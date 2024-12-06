
<?php

	// Perform C.R.U.D. operation. 
	function goCrudOp($optable,$crudop) {
		global $databasetables;
		printToPage();
		printToPage("Doing C.R.U.D. operation: (op:$crudop, tid:$optable)");


		// Go for no operation. 
		$invalidtableselected = !isset( $databasetables[$optable] );
		if($invalidtableselected) return;

		// Go for event operation. 
		else if( $optable=='events' ) {

			// Perform event create operation. 
			if($crudop=='create') {

				// 
			}

			// Perform event update operation. 
			else if($crudop=='update') {

				// 
			}

			// Perform event delete operation. 
			else if($crudop=='delete') {

				// 
			}

			// Perform event read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for person operation. 
		else if( $optable=='persons' ) {

			// Perform person create operation. 
			if($crudop=='create') {

				// 
			}

			// Perform person update operation. 
			else if($crudop=='update') {

				// 
			}

			// Perform person delete operation. 
			else if($crudop=='delete') {

				// 
			}

			// Perform person read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Go for assignment operation. 
		else if( $optable=='assignments' ) {

			// Perform assignment create operation. 
			if($crudop=='create') {

				// 
			}

			// Perform assignment update operation. 
			else if($crudop=='update') {

				// 
			}

			// Perform assignment delete operation. 
			else if($crudop=='delete') {

				// 
			}

			// Perform assignment read operation. 
			else {

				// Create database query. 
				$sql = " SELECT * FROM $optable; ";
			}
		}

		// Display error message for new undefined table. 
		else printToPage("New undefined table selected for operation: $optable");

		// Send database query (if valid). 
		if( isset($sql) ) {

			// Send database query. 
			$querystate = sendDatabaseQuery($sql,true);

			// Return state of query. 
			// return $querystate;
			// Return effect of query. 
			return $querystate['roweffect'];
			// Return results from query. 
			// return $querystate['queryresults'];
		}

		// Notify of no database query (if not valid). 
		else {
			
			// Notify of no database query. 
			printToPage('No query!!!');

			// Return results from query. 
			return 0;
		}
	}

?>
