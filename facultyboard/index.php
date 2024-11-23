
<?php 

	// Start new session to store login status. 
	// Resume existing session for login status. 
	session_start();

	// Get functions to access server database. 
	require_once('./../sharedassets/script/config.php');
	// Get functions to handle database queries. 
	require_once('./../sharedassets/script/query.php');
	// Get functions to access user input. 
	require_once('./../sharedassets/script/input.php');
	// Get functions to display output. 
	require_once('./../sharedassets/script/output.php');

	// Get metadata for database tables. 
	require_once('./assets/database/database.php');
	// Get metadata for database table icons. 
	require_once('./assets/database/tableicons.php');
	// Get functions to perform user operations. 
	require_once('./assets/script/userops.php');
	// Get functions to perform CRUD operations. 
	require_once('./assets/script/crudops.php');

	// Display all database table data. 
	function displayDatabaseTables() {
		global $databasetables;

		// 
		printToPage();
		$paste = json_encode($databasetables);
		printToPage("Table data: ( $paste )");
	}

	// Display details of selected view. 
	function displaySelectedViewDetails() {
		global $selectedviewid;
		global $selecteduserchooser;
		global $selectedhomeview;
		global $selectedtableview;

		// 
		printToPage();
		$paste = !!$selectedviewid ? $selectedviewid : '[none]';
		printToPage("Selected view id: $paste");
		$paste = $selecteduserchooser ? 'true' : 'false';
		printToPage("User chooser selected: $paste");
		$paste = $selectedhomeview ? 'true' : 'false';
		printToPage("Home view selected: $paste");
		$paste = $selectedtableview ? 'true' : 'false';
		printToPage("Table view selected: $paste");
	}

	// Get list of table entries associated with given table id. 
	function getTableEntries($giventable) {
		return $giventable['entrydata'];
	}

	// 
	$xyz = array_map( 'getTableEntries', $databasetables );
?>

<!DOCTYPE html>
<html>
	
	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="./assets/image/6354674.png" rel="icon"/>
		<link href="./../sharedassets/flaskicon.png" rel="icon"/>
		<link href="./assets/image/6354674.png" rel="apple-touch-icon"/>
		<title>Faculty Board</title>

		<!-- Query Stylesheet -->
		<link href="./../sharedassets/style/query.css" rel="stylesheet" type="text/css"/>
		<link href="./assets/style/query.css" rel="stylesheet" type="text/css"/>
		<!-- Main Stylesheet -->
		<link href="./assets/style/style.css" rel="stylesheet" type="text/css"/>
		<!-- Navbar Stylesheet -->
		<link href="./assets/style/navbar.css" rel="stylesheet" type="text/css"/>
		<!-- Data Table Stylesheet -->
		<link href="./assets/style/datatable.css" rel="stylesheet" type="text/css"/>
		<!-- Social Feed Stylesheet -->
		<link href="./assets/style/socialfeed.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->

		<script type="text/javascript">
			// console.log('Server data:', <?php print isset($_SERVER) ? json_encode($_SERVER) : null; ?>);
			console.log('Session data:', <?php print isset($_SESSION) ? json_encode($_SESSION) : null; ?>);
			console.log('Get response data:', <?php print isset($_GET) ? json_encode($_GET) : null; ?>);
			console.log('Post response data:', <?php print isset($_POST) ? json_encode($_POST) : null; ?>);
			// console.log('Database tables (start):', <?php print json_encode($databasetables); ?>);
			console.log('Database tables (start):', <?php print json_encode( $xyz ); ?>);
		</script>
	</head>
	
	<body class="dark" ondblclick="this.classList.toggle('dark')">

		<!-- #container -->
		<div id="container">

			<!-- queryarena -->
			<div class="queryarena head openx">
				
				<!-- togglebtn -->
				<div class="togglebtn" onclick="this.parentElement.classList.toggle('open')">
					
					<!-- icon -->
					<svg class="icon dn arrowdown" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon up arrowup" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Toggle</span>
					<!-- /caption -->
					
				</div>
				<!-- /togglebtn -->

				<!-- stage -->
				<div class="stage">

					<?php

						// Connect to server database. 
						$db = openDb('cis355issuecomments');

						// Download public table entries from database. 
						getPublicTables();

						// Check for user state changes (before anything else). 
						$newsuccessfullogin = checkUserChanges();
						// Save record of new user session. 
						if( $newsuccessfullogin ) saveNewSession();

						// Get user id (if currently logged in). 
						$currentuserid = getCurrentUserId(1);
						// Get profile data for current user (if currently logged in). 
						$currentuserprofile = getUserProfile($currentuserid,1);
						// Check if current user is admin. 
						$iscurrentuseradmin = checkIfUserAdmin($currentuserid);
						// Display all database table data. 
						// displayDatabaseTables();

						// Check for crud operation from previous page. 
						checkForDataMoves();


						// Check for selected view. 
						$selectedviewid = $_GET['view'] ?? '';
						// $selectedviewid = isset( $_GET['view'] ) ? cleanInputForQuery( $_GET['view'] ) : '';
						// Check if selected view is home. 
						$selectedhomeview = ( $selectedviewid == 'home' );
						// Check if selected view is table. 
						$selectedtableview = isset( $databasetables[$selectedviewid] ) && ( $iscurrentuseradmin || $databasetables[$selectedviewid]['tablevisible'] );
						// Check if selected view is user chooser. 
						$selecteduserchooser = ( $selectedviewid=='login' || $selectedviewid=='register' );
						// Display details of selected view. 
						displaySelectedViewDetails();


						// Download inside data from database (if logged in). 
						if( $currentuserprofile ) {
							
							// Download all table entries from database. 
							// getAllTables();

							// Download relevant table entries for table view. 
							if( $selectedtableview ) getRelevantTables($selectedviewid);
							// Download relevant table entries for home view: issues, comments. 
							else if( $selectedhomeview ) {

								// Get detail data for comments and basic data for issues and persons. 
								getRelevantTables('comments');
								// Get detail data for issues and basic data for departments. 
								getRelevantTables('issues');
							}
						}
						// Display all database table data. 
						// displayDatabaseTables();

						// Get data associated with selected table. 
						if( $selectedhomeview ) {
							$selectedtable = $databasetables['recentactivity'];
						}
						elseif( $selectedtableview ) {
							$selectedtable = $databasetables[$selectedviewid];
						}

						// Get data needed for table view & home view. 
						if( $selectedtableview || $selectedhomeview ) {

							// Get title of selected table. 
							$tabletitle = $selectedtable['tabletitle'];
							// Get icon tag for selected table. 
							$tableicontag = $selectedtable['tablenavicon'];
							// Get caption for single item. 
							$singlecaption = $selectedtable['singlecaption'];
							// Get fields of table display. 
							$displayfields = $selectedtable['displayfields'];
							// Get fields of table editor. 
							$editorfields = $selectedtable['editorfields'];
						}

						// Get self-reference url (for forms and links). 
						$selfurl = getSelfRefUrl();
						$selfurlbase = getSelfRefUrl(false);
					?>

				</div>
				<!-- /stage -->

			</div>
			<!-- /queryarena -->



			<?php /* include('./assets/module/navbar.php'); ?>

			<?php if( $currentuserprofile ): ?>

				<?php if( isset($selectedtableview) && $selectedtableview ): ?>

					<?php include('./assets/module/datatable.php'); ?>

				<?php else: ?>

					<?php include('./assets/module/recentactivity.php'); ?>

					<?php include('./assets/module/socialfeed.php'); ?>

				<?php endif; ?>

				<?php if( $iscurrentuseradmin ) include('./assets/module/navtable.php'); ?>

			<?php elseif(  isset($selectedviewid) && ( $selectedviewid=='login' || $selectedviewid=='register' )  ): ?>

				<?php include('./assets/pages/userchooser.php'); ?>

			<?php else: ?>

				<?php include('./assets/pages/splash.php'); ?>

			<?php endif; */ ?>



			<?php

				// Display navbar. 
				include('./assets/module/navbar.php');

				// Display any relevant messages. 
				include('./assets/module/message.php');

				// Proceed if user logged in. 
				if( $currentuserprofile ) {

					// Display data table (if view selected). 
					if( $selectedtableview ) {

						// Display navigation for data tables. 
						include('./assets/module/navtable.php');
						// Display data table. 
						include('./assets/pages/datatable.php');
					}

					// Display home screen (if view selected). 
					elseif( $selectedhomeview ) {

						// Display navigation for data tables. 
						include('./assets/module/navtable.php');
						// Display user's recent activity. 
						// include('./assets/module/recentactivity.php');
						// Display user's social feed. 
						include('./assets/module/socialfeed.php');
					}

					// Display splash screen (if no view selected). 
					else {

						// Display splash screen. 
						include('./assets/pages/splash.php');
					}
				}

				// Proceed if user not logged in. 
				else {

					// Display user chooser screen (if view selected). 
					if( $selecteduserchooser ) {

						// Display user chooser (login/register) screen. 
						include('./assets/pages/userchooser.php');
					}

					// Display splash screen (if no view selected). 
					else {

						// Display splash screen. 
						include('./assets/pages/splash.php');
					}
				}

			?>


		</div>
		<!-- /#container -->


		<!-- Database -->
		<!-- <script src="./database.js" type="text/javascript"></script> -->

		<!-- Main Script -->
		<!-- <script src="./template.js" type="text/javascript"></script> -->

		<!-- Toggler Script -->
		<script src="./assets/script/toggler.js" type="text/javascript"></script>

		<script type="text/javascript">
			console.log('Database tables (end):', <?php print json_encode($databasetables); ?>);
		</script>

	</body>

</html>

<?php

	// Disconnect server database. 
	closeDb($db);
?>
