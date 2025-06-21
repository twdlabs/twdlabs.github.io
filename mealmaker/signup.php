
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
				// Initialize success markers. 
				$validparentuser = null;

				// Get received user details. 
				$name = $_POST['parentname'] ?? '';
				$phone = $_POST['phonenumber'] ?? '';
				$email = $_POST['emailaddress'] ?? '';
				$pwd = $_POST['password'] ?? '';
				$pwd1 = $_POST['passwordconfirm'] ?? '';

				// Check if all info present. 
				$allinfopresent = $name && $phone && $email && $pwd && $pwd1 ;

				// Proceed to query (if no info missing). 
				if( $allinfopresent ) {

					// Create new user account for parent or operator. 
					function createNewUser($name,$phone,$email,$pwd,$pwd1) {

						// Ensure both passwords match. 
						if( !$pwd || !$pwd1 || $pwd!=$pwd1 ) return null;
						// Generate password salt for new user. 
						$passwdsalt = generateRandomSalt(/* 1 */);
						// Generate password hash. 
						$passwdhash = getPasswdHash( $pwd.$passwdsalt /* , 1 */);

						// Create database query. 
						$sql = " INSERT INTO `parents` (parentname,phonenumber,emailaddress,passwdsalt,passwdhash) VALUES ( '$name' , '$phone' , '$email' , '$passwdsalt' , '$passwdhash' ) ; ";
						// Send database query and save state. 
						$querystate = sendDatabaseQuery($sql,true);

						// // Create database query. 
						// $sql = " SELECT LAST_INSERT_ID() AS parentid; ";
						// // Send database query and save state. 
						// $querystate = sendDatabaseQuery($sql/* ,true */);
						// // Get id of person. 
						// $parentid = $querystate['queryresults'][0]['parentid'];

						// Return validity of record for newly added person. 
						return ( $querystate['roweffect'] /* && $querystate['success'] */ );
					}

					// Create new user account for parent or operator. 
					$validparentuser = createNewUser($name,$phone,$email,$pwd,$pwd1);
				}

				// Redirect back to user form (if any info missing). 
				else print '<meta http-equiv="refresh" content="3;./">';

				// Display closing of query arena. 
				include('./assets/module/queryarenaclose.php');

				// Display navbar. 
				include('./assets/module/navbar.php');

				// Handle successful registration. 
				if($validparentuser) {

					// Display message. 
					print 'Registration successful!';
				}
				// Handle unsuccessful registration. 
				else {

					// Display message. 
					print 'Registration unsuccessful';
				}

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
