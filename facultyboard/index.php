
<?php 

	// Start new session to store login status. 
	// Resume existing session for login status. 
	session_start();

	// Get functions to access server database. 
	require_once('./../sharedassets/script/config.php');

	// Get metadata for database tables. 
	require_once('./assets/database/databasetables.php');
	// Get metadata for database table icons. 
	require_once('./assets/database/tableicons.php');
	// Get functions to perform user operations. 
	require_once('./assets/script/userops.php');
	// Get functions to perform CRUD operations. 
	require_once('./assets/script/crudops.php');
?>

<!DOCTYPE html>
<html>
	
	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="./assets/images/6354674.png" rel="icon"/>
		<link href="./../sharedassets/flaskicon.png" rel="icon"/>
		<link href="./assets/images/6354674.png" rel="apple-touch-icon"/>
		<title>Faculty Board</title>

		<!-- Query Stylesheet -->
		<link href="./../sharedassets/style/query.css" rel="stylesheet" type="text/css"/>
		<link href="./assets/style/query.css" rel="stylesheet" type="text/css"/>
		<!-- Main Stylesheet -->
		<link href="./assets/style/style.css" rel="stylesheet" type="text/css"/>
		<!-- Data Table Stylesheet -->
		<link href="./assets/style/datatable.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->

		<script type="text/javascript">
			console.log('Session data:', <?php print isset($_SESSION) ? json_encode($_SESSION) : null; ?>);
			console.log('Get response data:', <?php print isset($_GET) ? json_encode($_GET) : null; ?>);
			console.log('Post response data:', <?php print isset($_POST) ? json_encode($_POST) : null; ?>);
		</script>
	</head>
	
	<body>

		<!-- #container -->
		<div id="container">

			<!-- queryarena -->
			<div class="queryarena head">
				
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
						// Get functions to access input and display output. 
						require_once('./../sharedassets/script/io.php');

						// Check for in/out user operations (before doing anything else). 
						$successfullogin = checkTheDoor();

						// Check for session. 
						// checkSession();
						// Get user id (if currently logged in). 
						$currentuserid = getUserId();
						// Get data for current user (if currently logged in). 
						$currentuserdata = getUserData($currentuserid);
						$currentuserdatastr = json_encode($currentuserdata);
						// Display data for current user (if currently logged in). 
						// printToPage("User data: ( $currentuserdatastr )");
						// $databasetablesstr = json_encode($databasetables);
						// printToPage("Table data: ( $databasetablesstr )");

						// Check for crud operation from previous page. 
						checkForMovement();

						// Download all table data from database. 
						getAllTableData();
						// $databasetablesstr = json_encode($databasetables);
						// printToPage("Table data: ( $databasetablesstr )");

						// Check for selected view. 
						$isviewselected = isset( $_GET['view'] );
						$isviewselectedstr = $isviewselected ? '👍' : '👎';
						// printToPage();
						printToPage("View selected: $isviewselectedstr");

						// Proceed for selected view. 
						if($isviewselected) {

							// Get id of selected view (if selected). 
							$selectedviewid = $isviewselected ? $_GET['view'] : null;
							printToPage();
							printToPage("Selected view id: $selectedviewid");
							// Check if table view is selected. 
							$istableviewselected = $isviewselected && isset( $databasetables[$selectedviewid] );
	
							// 
							$istableviewselectedstr = $istableviewselected ? '👍' : '👎';
							printToPage();
							printToPage("Table view selected: $istableviewselectedstr");

							// Proceed for table view. 
							if( isset($istableviewselected) && $istableviewselected ) {
							
								// Define form submit url (for given table). 
								$formsubmiturl = "./?view=$selectedviewid";
							
								// Get data associated with selected table. 
								$selectedtable = $databasetables[$selectedviewid];
								// Get title of selected table. 
								$tabletitle = $selectedtable['tabletitle'];
								// Get caption for single item. 
								$singlecaption = $selectedtable['singlecaption'];
								// Get fields of table display. 
								$displayfields = $selectedtable['displayfields'];
								// Get fields of table editor. 
								$editorfields = $selectedtable['editorfields'];
	
								// // Retrieve relevant table data from database. 
								// getRelevantTableData();
							}
							// Proceed for misc views. 
							else {
							
								// Define default form submit url. 
								$formsubmiturl = './';
							}
						}
					?>

				</div>
				<!-- /stage -->

			</div>
			<!-- /queryarena -->

			<?php include('./assets/module/navbar.php'); ?>

			<?php if($currentuserdata): ?>

				<?php
					if( isset($istableviewselected) && $istableviewselected ) include('./assets/module/datatable.php');
					else include('./assets/module/navtable.php');
				?>

			<?php elseif(  isset($selectedviewid) && ( $selectedviewid=='login' || $selectedviewid=='register' )  ): ?>

				<?php include('./assets/module/userchooser.php'); ?>

			<?php else: ?>

				<?php include('./assets/module/splash.php'); ?>

			<?php endif; ?>

		</div>
		<!-- /#container -->


		<!-- Database -->
		<!-- <script src="./database.js" type="text/javascript"></script> -->

		<!-- Main Script -->
		<!-- <script src="./template.js" type="text/javascript"></script> -->

		<!-- Toggler Script -->
		<script src="./assets/script/toggler.js" type="text/javascript"></script>

		<script type="text/javascript">
			console.log('Database tables:', <?php print json_encode($databasetables); ?>);
		</script>

	</body>

</html>

<?php

	// Disconnect server database. 
	closeDb($db);
?>
