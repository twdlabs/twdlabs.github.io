
<?php

	// // Get C.R.U.D. operation parameters. 
	// $crudopid = $_POST['crudopid'] ?? '';
	// $crudtableid = $_POST['crudtableid'] ?? '';

	// Handle new C.R.U.D. operations. 
	function handleCrudOps( $crudopid , $crudtableid ) {
		global $databasetables;
		// global $crudopid, $crudtableid;
		printToPage();
		printToPage("Checking for C.R.U.D.");

		// Check for valid operation parameters. 
		$docrudop = $crudopid && $crudtableid && isset( $databasetables[ $crudtableid ] ) && in_array( $crudopid , ['create','update','delete'] );
		// $docrudop = ( $crudopid && in_array( $crudopid , ['create','update','delete'] ) )  &&  ( $crudtableid && isset( $databasetables[ $crudtableid ] ) ) ;

		// Conclude operation (if parameters not valid). 
		if( !$docrudop ) {

			// Display message: no operation. 
			printToPage("No C.R.U.D. operation (op:'$crudopid', tid:'$crudtableid')");
			return;
		}

		/****/

		// Perform C.R.U.D. operation (parameters valid). 
		printToPage();
		printToPage("Doing C.R.U.D. operation (op:'$crudopid', tid:'$crudtableid')");

		// Perform create operation. 
		if( $crudopid=='create' ) {

			// Get list of field ids. 
			$fieldids = getEntryFieldIds($crudtableid);
			// Get list of field values. 
			$fieldvalues = array_map('getFieldValueById',$fieldids);
			
			// Compile database query. 
			// $crudtableid = cleanInputForQuerySimple( $crudtableid );
			$fieldidlist = getCommaList($fieldids);
			// $fieldidlist = cleanInputForQuerySimple( $fieldidlist );
			$fieldvaluelist = getCommaList($fieldvalues);
			// $fieldvaluelist = cleanInputForQuerySimple( $fieldvaluelist );
			$sql = " INSERT INTO $crudtableid ( $fieldidlist ) VALUES ( $fieldvaluelist ); ";
		}

		// Perform update operation. 
		else if( $crudopid=='update' ) {

			// Get list of field ids. 
			$fieldids = getEntryFieldIds($crudtableid);
			// Get list of field assigns. 
			$fieldassigns = getFieldAssigns($fieldids);

			// Compile database query. 
			// $crudtableid = cleanInputForQuerySimple( $crudtableid );
			$fieldassignlist = getCommaList($fieldassigns);
			// $fieldassignlist = cleanInputForQuerySimple( $fieldassignlist );
			$tablerowid = getFieldValueById('tablerowid');	// Get query parameter (id of row to modify). 
			$sql = " UPDATE $crudtableid SET $fieldassignlist WHERE (id=$tablerowid); ";
		}

		// Perform delete operation. 
		else if( $crudopid=='delete' ) {

			// Create database query. 
			// $crudtableid = cleanInputForQuerySimple( $crudtableid );
			$tablerowid = getFieldValueById('tablerowid');	// Get query parameter (id of row to modify). 
			$sql = " DELETE FROM $crudtableid WHERE (id=$tablerowid); ";
		}

		// Display message for undefined table operation. 
		else printToPage("Warning: Undefined table operation (op:'$crudopid', tid:'$crudtableid')");

		// Handle database query statement. 
		if( $sql ) {

			// Send database query n save result. 
			$queryresult = sendDatabaseQuery( $sql );

			// Save result table rows from query. 
			return $queryresult;

			// Save result table rows from query. 
			// return $queryresult['tablerows'];
		}

		// Notify of no database query (if not valid). 
		else {
			
			// Save result of non-query. 
			$queryresult = null;
			printToPage('No query!!!');

			// Save result table rows from non-query. 
			return null;
			// return [];
		}
	}

	// Get current week's order schedule for given student. 
	function getStudentDayOrders( $sid , $deliverydate , $mealtypeid ) {
		global $programmermode, $upcomingwk;

		// Display data request. 
		if( $programmermode /* || $debugmode */ ) {

			// Define message. 
			$mealtimelist = ['','breakfast','lunch'];
			$mealtime = $mealtimelist[$mealtypeid];
			$msg = "Now retrieving order [sid:$sid, date:$deliverydate, meal:$mealtime]..." ;

			// Display message in query arena. 
			printToPage();
			printToPage( $msg );

			// Display message in console. 
			print "<script>console.log()</script>";
			print "<script>console.log('$msg')</script>";
		}

		// Get id of current user. 
		$pid = $_SESSION['pid'];
		// print "pid = $pid";

		// Get date range for orders (current week). 
		// $mindate = '2025-01-01';
		// $maxdate = '2025-12-31';
		// Get earliest date in the week. 
		$mindate = $upcomingwk['fulldates'][0];
		// Get latest date in the week. 
		$maxdate = $upcomingwk['fulldates'][ sizeof( $upcomingwk['fulldates'] ) - 1 ];
		// printToPage( 'mindate: ' . $mindate );
		// printToPage( 'maxdate: ' . $maxdate );

		// TODO: Create database query to get orders for current week. 
		$sql = " SELECT /* s.studentname, */ o.deliverydate, /* m.entree, */ "
		. " concat(m.entree,'<br> ',m.sidedish,'<br> ',d.drinkname) AS mealsummary "
		. " FROM (mealorders as o) "
		. " LEFT JOIN (students as s) ON (o.studentid=s.id) "
		. " LEFT JOIN (parents as op) ON (o.orderedby=op.id) "
		. " LEFT JOIN (parents as sp) ON (s.parentid=sp.id) "
		. " LEFT JOIN (meals as m) ON (o.mealid=m.id) "
		. " LEFT JOIN (drinks as d) ON (m.drinkid=d.id) "
		. " WHERE ( (o.orderedby = $pid) OR (s.parentid = $pid) ) "
		. " AND (s.id = $sid) AND (o.deliverydate = '$deliverydate') AND (o.typeid = $mealtypeid) ; " ;
		// . " AND (o.deliverydate >= '$mindate') AND (o.deliverydate <= '$maxdate') ; " ;

		// Send database query to get order schedule. 
		$schedulequeryresult = sendDatabaseQuery( $sql );
		// TODO: Save table rows of order schedule. 
		$schedulequerytablerows = $schedulequeryresult['tablerows'];
		// printToPage( "schedulequerytablerows: " . json_encode($schedulequerytablerows) );
		// printToPage( "schedulequeryresult: " . json_encode($schedulequeryresult) );

		// Return result. 
		return $schedulequerytablerows;
	}
	// Get upcoming week. 
	function getUpcomingWk() {

		// Initialize list of day labels for upcoming week. 
		$upcomingwk = [
			'daylabels' => [],
			'fulldates' => [],
			// [
			// 	'daylabel' => '',
			// 	'fulldate' => '',
			// ],
		];

		// Save dates for upcoming week. 
		for( $dx=1 ; $dx<=5 ; $dx++ ) {

			// Define day prompt. 
			// $dayprompt = "last sunday + $dx days";
			$dayprompt = getSundayDesc() . " + $dx days";

			// Add current day to list. 
			// $daylabel = date('D M jS', strtotime($dayprompt) );
			$daylabel = date('M j (D)', strtotime($dayprompt) );
			// $daylabel = date('D n/j', strtotime($dayprompt) );
			// $daylabel = date('M j', strtotime($dayprompt) );
			$upcomingwk['daylabels'][] = $daylabel;

			// Add current day to list. 
			// $fulldate = date('l, Y-m-d', strtotime($dayprompt) );
			$fulldate = date('Y-m-d', strtotime($dayprompt) );
			$upcomingwk['fulldates'][] = $fulldate;
		}

		// Display dates for each day of current week. 
		// printToPage( 'Upcoming wk: ' . json_encode( $upcomingwk ) );

		// Return list of day labels for upcoming week. 
		return $upcomingwk;
	}
	// Get description of Sunday preceding upcoming/current week. 
	function getSundayDesc() {

		// Get current day of week. 
		$dayofwk = date('w');
		// printToPage( "dayofwk: $dayofwk" );

		// Check if current day is weekday. 
		$onweekday = ($dayofwk>=1) && ($dayofwk<=5);
		// $onweekend = ($dayofwk<=0) || ($dayofwk>=6);

		// Define timestamp for date. 
		if($onweekday) return ("last week Sunday");
		else return ("this week Sunday");
	}
?>
