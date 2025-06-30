
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

<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<title>Sign In | Baba's Bagel</title>

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
		<link href="./assets/style.css?v=20250629" rel="stylesheet" type="text/css"/>
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

				// Initialize success markers. 
				$pid = null;
				$validuserlogin = null;

				// Get submitted user details. 
				$email = $_POST['emailaddress'] ?? '';
				$pw = $_POST['password'] ?? '';

				// Check if all info present. 
				$allinfopresent = $email && $pw ;

				// Redirect back to user form (if any info missing). 
				if( !$allinfopresent ) print '<meta http-equiv="refresh" content="3;./">';

				// Proceed to query (if no info missing). 
				else {

					// Get id of given person (if email address exists). 
					$pid = getPersonIdByEmail($email);
					// Check for valid user login (if person exists). 
					$validuserlogin = $pid && checkUserLogin($pid,$pw);
				}

				// Initialize new session data. 
				if( $validuserlogin ) createNewSession($pid);

				// Display closing of query arena. 
				include('./assets/module/queryarenaclose.php');

				// Display navbar. 
				include('./assets/module/navbar.php');
			?>

			<?php if( $validuserlogin ): ?>

				<!-- head -->
				<h2 class="head">Login successful!</h2>
				<!-- /head -->

			<?php else: ?>

				<!-- head -->
				<h2 class="head">Login unsuccessful</h2>
				<!-- /head -->

			<?php endif; ?>

			<!-- returnlink -->
			<a class="returnlink" href="./">Proceed</a>
			<!-- /returnlink -->

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

<?php

	// Disconnect server database. 
	closeDb($db);
?>
