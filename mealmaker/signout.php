
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
	// Get metadata for database table icons. 
	require_once('./assets/database/tableicons.php');
	// Get functions to perform CRUD operations. 
	require_once('./assets/crudops.php');
?>

<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<title>Meal Maker</title>

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
		<link href="./assets/style.css" rel="stylesheet" type="text/css"/>
		<!-- <style></style> -->

		<script type="text/javascript">
			// console.log('Server data:', <?php print isset($_SERVER) ? json_encode($_SERVER) : null; ?>);
			console.log('Session data:', <?php print isset($_SESSION) ? json_encode($_SESSION) : null; ?>);
			console.log('Response data (GET):', <?php print isset($_GET) ? json_encode($_GET) : null; ?>);
			console.log('Response data (POST):', <?php print isset($_POST) ? json_encode($_POST) : null; ?>);
		</script>
	</head>

	<body>

		<!-- #container -->
		<div id="container">

			<?php

				// Display opening of query arena. 
				include('./assets/module/queryarenaopen.php');

				// Connect to server database. 
				$db = openDb('mealmaker');

				// Redirect back to user form. 
				print '<meta http-equiv="refresh" content="3;./">';

				// Display closing of query arena. 
				include('./assets/module/queryarenaclose.php');

				// Display navbar. 
				include('./assets/module/navbar.php');

				// Reset session data. 
				$_SESSION['pid'] = null;
				// End user session. 
				session_destroy();

				// Display message. 
				print 'Logout successful!';

				// Display return link. 
				?>
					<!-- returnlink -->
					<a class="returnlink" href="./">Proceed</a>
					<!-- /returnlink -->
				<?php
			?>

		</div>
		<!-- /#container -->

		<!-- Toggler Script -->
		<script src="./../sharedassets/script/toggler.js" type="text/javascript"></script>

		<script type="text/javascript">

			// Close query arena (when page fully loaded). 
			closeQueryArena();
		</script>

	</body>

</html>
