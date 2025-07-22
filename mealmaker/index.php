
<?php

	// Start user session. 
	session_start();

	// Get functions to access server database. 
	require_once('./../sharedassets/script/config.php');
	// Get functions to handle database queries. 
	require_once('./../sharedassets/script/query.php');
	// // Get functions to access user input. 
	require_once('./../sharedassets/script/input.php');
	// Get functions to display output. 
	require_once('./../sharedassets/script/output.php');
	// Get functions to perform CRUD operations. 
	require_once('./../sharedassets/script/crudops.php');
	// Get functions to perform user password operations. 
	require_once('./../sharedassets/script/userpasswdops.php');

	// Get metadata for database tables. 
	require_once('./assets/database/database.php');
	require_once('./assets/database/databasequery.php');
	// Get metadata for database table icons. 
	require_once('./assets/database/tableicons.php');
	// Get functions to perform CRUD operations. 
	require_once('./assets/script/crudops.php');
	// Get functions to perform user operations. 
	require_once('./assets/script/userops.php');
?>

<?php

	// Check if any view selected. 
	$isanyviewselected = isset( $_GET['view'] ); 
	$currentviewid = $isanyviewselected ? $_GET['view'] : ''; 

	// Check if table view selected. 
	$istableviewselected = $isanyviewselected && isset( $databasetables[$currentviewid] ) ;
	// Check if viewable table view selected. 
	$isviewabletableviewselected = $istableviewselected && isTableVisibleToUser($currentviewid) ;

	// Compile add-on for table title (if table view selected). 
	$tablepagetitlesupplement = $isviewabletableviewselected ? ( $databasetables[$currentviewid]['tabletitle'] . ' | ' ) : '' ;

	// Redirect to home page (if non-viewable view selected). 
	if( $isanyviewselected && !$isviewabletableviewselected ) header('location:./');
?>

<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="./assets/images/bbicon.jpg" rel="icon"/>
		<link href="./assets/images/bbicon.jpg" rel="apple-touch-icon"/>
		<title><?=$tablepagetitlesupplement?>Baba's Bagel</title>

		<!-- Cache Blocker -->
		<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
		<meta http-equiv="Pragma" content="no-cache">
		<meta http-equiv="Expires" content="0">

		<!-- Main Stylesheet (shared) -->
		<link href="./../sharedassets/style/style.css" rel="stylesheet" type="text/css"/>
		<!-- Navbar Stylesheet (shared) -->
		<link href="./../sharedassets/style/navbar.css" rel="stylesheet" type="text/css"/>
		<!-- Query Stylesheet (shared) -->
		<link href="./../sharedassets/style/query.css" rel="stylesheet" type="text/css"/>
		<!-- Data Table Stylesheet (shared) -->
		<link href="./../sharedassets/style/datatable.css" rel="stylesheet" type="text/css"/>
		<!-- CRUD Form Stylesheet (shared) -->
		<link href="./../sharedassets/style/crudform.css" rel="stylesheet" type="text/css"/>

		<!-- Main Stylesheet -->
		<link href="./assets/style/style.css?v=20250712" rel="stylesheet" type="text/css"/>
		<link href="./assets/style/navbar.css?v=20250717" rel="stylesheet" type="text/css"/>
		<!-- <style></style> -->

		<script type="text/javascript">
			console.log('Server data:', <?php print isset($_SERVER) ? json_encode($_SERVER) : null; ?>);
			console.log('Session data:', <?php print isset($_SESSION) ? json_encode($_SESSION) : null; ?>);
			console.log('Response data (GET):', <?php print isset($_GET) ? json_encode($_GET) : null; ?>);
			console.log('Response data (POST):', <?php print isset($_POST) ? json_encode($_POST) : null; ?>);
		</script>
	</head>

	<body>

		<!-- #container -->
		<div id="container">

			<!-- <input type="hidden" name="xyz" value="<?php print $_SESSION['pid']; ?>"> -->

			<?php

				// Display opening of query arena. 
				include('./assets/module/queryarena/open.php');

				// Display details of user's current view selection. 
				if( $currentuserisadmin /* && false */ ) displayViewDetails();

				// Display details of user's current view selection. 
				function displayViewDetails() {
					global $isanyviewselected, $currentviewid, $istableviewselected, $isviewabletableviewselected, $tablepagetitlesupplement;

					// 
					// $displaybinary = $xyz ? 1 : 0 ;
					// $displaybinary = $xyz ? '👍' : '👎' ;

					// Display details of current view. 
					$displaybinary = $isanyviewselected ? 1 : 0 ;
					printToPage("isanyviewselected: $displaybinary");
					printToPage("currentviewid: '$currentviewid'");

					// Display details of current table view. 
					$displaybinary = $istableviewselected ? 1 : 0 ;
					printToPage("istableviewselected: $displaybinary");
					$displaybinary = $isviewabletableviewselected ? 1 : 0 ;
					printToPage("isviewabletableviewselected: $displaybinary");
					printToPage("tablepagetitlesupplement: '$tablepagetitlesupplement'");
				}

				// Proceed if valid session. 
				if($validsession) {

					// Connect to server database. 
					$db = openDb('mealmaker');

					// Get self-reference url (for forms and links). 
					// $selfurl = getSelfRefUrl();
					// $selfurlbase = getSelfRefUrl(false);

					// Handle new C.R.U.D. operations. 
					// handleCrudOps();

					// Download all table entries from database. 
					getAllTables();

					// Check if displaying home view. 
					$displayinghomeview = $validsession && !$isviewabletableviewselected;
					// Download current schedule from database (upcoming week). 
					if( $displayinghomeview ) {

						// Get upcoming week. 
						$upcomingwk = getUpcomingWk();
					}
				}

				// Display closing of query arena. 
				include('./assets/module/queryarena/close.php');

				// Display navbar. 
				include('./assets/module/navbar.php');


				// Proceed for valid session. 
				if( $validsession ) {

					// Display view of selected table. 
					if( $isviewabletableviewselected ) {

						// Get id of selected table. 
						$selectedtableid = $currentviewid;	// same value from $_GET['view']
						// Get data from selected table. 
						$selecteddatabasetable = $databasetables[ $selectedtableid ];

						// Display view of selected table. 
						include('./assets/module/userview/table.php');
					}

					// Display view of home page (calendar n schedule). 
					else {

						// Display view of home page (calendar n schedule). 
						include('./assets/module/userview/home.php');
					}
				}
				// Proceed for invalid session. 
				else {

					// Display user getter forms (sign-in/sign-up). 
					include('./assets/module/getuser.php');
				}
			?>

		</div>
		<!-- /#container -->

		<!-- Toggler Script -->
		<script src="./../sharedassets/script/toggler.js" type="text/javascript"></script>

		<script type="text/javascript">

			// Close query arena (when page fully loaded). 
			closeQueryArena();
			/* if(<?=( !$currentuserisadmin ? 1 : 0 )?>) */ 

			// Clear all input fields. 
			// clearUserInputFields();
		</script>

	</body>

</html>

<?php

	// Disconnect server database. 
	if($validsession) closeDb($db);
?>
