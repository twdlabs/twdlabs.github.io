
<?php 

	// Start new session to store login status. 
	// Resume existing session for login status. 
	session_start();

	// Get functions to access server database. 
	require_once('./../sharedassets/script/config.php');

	// Get metadata for database tables. 
	require_once('./assets/database/database.php');
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

						// Check for user operations (before doing anything else). 
						checkUserOps();

						// Get id of currently logged-in user. 
						$currentuserid = getUserId();
						// Display currently logged-in user. 
						printToPage("Current user id: \"$currentuserid\"");

						// Get data for current user. 
						$currentuser = getCurrentUser($currentuserid);
						// Display currently logged-in user. 
						printToPage( json_encode($currentuser) );
						printToPage();

						// Check for crud operation from previous page. 
						// checkForCrudOps();

						// Retrieve all table data from database. 
						getAllTableData();

						// Check if any view selected. 
						$viewselected = isset( $_GET['view'] );

						// Get id of selected view. 
						$selectedviewid = $viewselected ? $_GET['view'] : null;

						// Check if table view selected. 
						$tableviewselected = isset( $databasetables[$selectedviewid] );
						printToPage();
						printToPage();
						printToPage("Table view selected: $tableviewselected");

						// Proceed if table view selected. 
						if($tableviewselected) {
						
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

						// Proceed for diff views. 
						else {
						
							// Define default form submit url. 
							$formsubmiturl = './';
						}
					?>

				</div>
				<!-- /stage -->

			</div>
			<!-- /queryarena -->

			<?php include('./assets/module/navbar.php'); ?>

			<?php include('./assets/module/splash.php'); ?>

			<?php if($currentuser): ?>

				<?php
					if($tableviewselected) include('./assets/module/datatable.php');
					else include('./assets/module/navtable.php');
				?>

			<?php else: ?>

				<?php include('./assets/module/userchooser.php'); ?>

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
