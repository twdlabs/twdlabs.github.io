
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
		<title>Sign Up | Baba's Bagel</title>

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
				include('./assets/module/queryarena/open.php');

				// Connect to server database. 
				$db = openDb('mealmaker');

				// Initialize success markers. 
				$validuserregistered = null;

				// Get submitted user details. 
				$name = $_POST['parentname'] ?? '';
				$phone = $_POST['phonenumber'] ?? '';
				$email = $_POST['emailaddress'] ?? '';
				$pwd = $_POST['password'] ?? '';
				$pwd1 = $_POST['passwordconfirm'] ?? '';
				// Check if all info present. 
				$allinfopresent = $name && $phone && $email && $pwd && $pwd1 ;
				// Check if given email address already exists for another user. 
				$emailalreadyexists = checkForSameEmail( $email );

				// Create new user account for parent or operator. 
				$validuserregistered = $allinfopresent && !$emailalreadyexists && createNewUser($name,$phone,$email,$pwd,$pwd1);

				// Login new user (if valid). 
				if( $validuserregistered ) {

					// Get id of new user (if email address exists). 
					$pid = getPersonIdByEmail( $email );
					// Check for valid login (if user exists). 
					$validuserlogin = $pid && checkUserLogin( $pid , $pwd );

					// Initialize new session data. 
					if( $validuserlogin ) createNewSession( $pid );
					print '<meta http-equiv="refresh" content="1;url=./">';
				}

				// Display closing of query arena. 
				include('./assets/module/queryarena/close.php');

				// Display navbar. 
				include('./assets/module/navbar.php');
			?>

			<!-- item -->
			<section class="item">

				<?php if($validuserregistered): ?>

					<!-- head -->
					<h2 class="head">Registration successful!</h2>
					<!-- /head -->

				<?php else: ?>

					<!-- head -->
					<h2 class="head">Registration unsuccessful</h2>
					<!-- /head -->

				<?php endif; ?>

				<!-- returnlink -->
				<a class="returnlink" href="./">Proceed</a>
				<!-- /returnlink -->

			</section>
			<!-- /item -->

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
