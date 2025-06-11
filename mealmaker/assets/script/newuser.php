
<?php

	// Get functions to access server database. 
	require_once('./../../../sharedassets/script/config.php');
	// Get functions to handle database queries. 
	require_once('./../../../sharedassets/script/query.php');
	// // Get functions to access user input. 
	require_once('./../../../sharedassets/script/input.php');
	// Get functions to display output. 
	require_once('./../../../sharedassets/script/output.php');
	// Get functions to perform CRUD operations. 
	require_once('./../../../sharedassets/script/crudops.php');
	// Get functions to perform user password operations. 
	require_once('./../../../sharedassets/script/userpasswdops.php');

	// Get metadata for database tables. 
	require_once('./../../assets/database/database.php');
	// Get metadata for database table icons. 
	require_once('./../../assets/database/tableicons.php');
	// Get functions to perform CRUD operations. 
	require_once('./../../assets/crudops.php');
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
		<link href="./../../../sharedassets/style/style.css" rel="stylesheet" type="text/css"/>
		<!-- Navbar Stylesheet (shared) -->
		<link href="./../../../sharedassets/style/navbar.css" rel="stylesheet" type="text/css"/>
		<!-- Query Stylesheet (shared) -->
		<link href="./../../../sharedassets/style/query.css" rel="stylesheet" type="text/css"/>
		<!-- Data Table Stylesheet (shared) -->
		<link href="./../../../sharedassets/style/datatable.css" rel="stylesheet" type="text/css"/>
		<!-- CRUD Form Stylesheet (shared) -->
		<link href="./../../../sharedassets/style/crudform.css" rel="stylesheet" type="text/css"/>

		<!-- Main Stylesheet -->
		<link href="./../../assets/style.css" rel="stylesheet" type="text/css"/>
		<!-- <style></style> -->

		<script type="text/javascript">
			// console.log('Server data:', <?php print isset($_SERVER) ? json_encode($_SERVER) : null; ?>);
			console.log('Session data:', <?php print isset($_SESSION) ? json_encode($_SESSION) : null; ?>);
			console.log('GET response data:', <?php print isset($_GET) ? json_encode($_GET) : null; ?>);
			console.log('POST response data:', <?php print isset($_POST) ? json_encode($_POST) : null; ?>);
			console.log('Database tables (start):', <?php print json_encode( getDatabaseEntries() ); ?>);
		</script>
	</head>

	<body>

		<!-- #container -->
		<div id="container">

			<!-- queryarena -->
			<div class="queryarena navbaby open">
				
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
						$db = openDb('mealmaker');
					
						// Create new person. 
						$validperson = createNewPerson();

						// Create new user (if person valid). 
						if( $validperson ) createNewUser();

						/*****/

						// Create new person. 
						function createNewPerson() {

							// Get received person details. 
							$childname = $_POST['childname'] ?? '';
							$parentname = $_POST['parentname'] ?? '';
							$phonenumber = $_POST['phonenumber'] ?? '';
							$emailaddress = $_POST['emailaddress'] ?? '';
							// Create database query. 
							$sql = " INSERT INTO `persons` (childname,parentname,phonenumber,emailaddress) VALUES ( '$childname' , '$parentname' , '$phonenumber' , '$emailaddress' ) ; ";
							// Send database query and save state. 
							$querystate = sendDatabaseQuery($sql/* ,true */);

							// Return validity of record for newly added person. 
							return ( $querystate['roweffect'] && $querystate['success'] );
						}

						// Remove new person. 
						function removeNewPerson() {

							// 
						}

						// Create new user. 
						function createNewUser() {

							// 
							// Send database query and save state. 
							// $sql = " SELECT id FROM persons WHERE xyz ORDER BY ; ";
							$sql = " SELECT LAST_INSERT_ID() AS personid; ";
							$querystate = sendDatabaseQuery($sql/* ,true */);
							$personid = $querystate['queryresults'][0]['personid'];
							$pw = $_POST['password'] ?? '';
							$pw1 = $_POST['passwordconfirm'] ?? '';

							// 
							// if( $pw && $pw1 && $pw==$pw1 )
							if( !$pw || !$pw1 || $pw!=$pw1 ) return;
							$passwdsalt = generateRandomSalt(/* 1 */);
							$passwdhash = getPasswdHash($pw/* ,1 */);
							$sql = " INSERT INTO `users` (id,passwdsalt,passwdhash) VALUES ( $personid , '$passwdsalt' , '$passwdhash' ); ";
							// Send database query and save state. 
							$querystate = sendDatabaseQuery($sql/* ,true */);
						}
					?>

				</div>
				<!-- /stage -->

			</div>
			<!-- /queryarena -->

			<!-- navbar -->
			<nav class="navbar">

				<!-- bin -->
				<div class="bin">

					<!-- togglebtn -->
					<a class="tm togglebtn btn" href="javascript:void(0)" title="Toggle table menu">

						<!-- icon -->
						<svg class="icon bars" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
						</svg>
						<!-- /icon -->

					</a>
					<!-- /togglebtn -->

					<!-- homebtn -->
					<!-- <a class="homebtn btn" href="./" title="Home"> -->
					<a class="homebtn btn" href="javascript:void(0)" title="Home" onclick="document.querySelector('div.queryarena').classList.toggle('open')">

						<!-- head -->
						<h1 class="head">

							<!-- icon -->
							<svg class="icon journals" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<?php print $databasetablesicons['bagel']; ?>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Baba's Bagel</span>
							<!-- /caption -->

						</h1>
						<!-- /head -->

					</a>
					<!-- /homebtn -->

					<!-- togglebtn -->
					<a class="um togglebtn btn" href="javascript:void(0)" title="Toggle user menu">

						<!-- icon -->
						<svg class="icon personcircle" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
							<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
						</svg>
						<!-- /icon -->

						<!-- avatar -->
						<!-- <img class="avatar" src="./abcxyz.png" alt=""> -->
						<!-- /avatar -->

					</a>
					<!-- /togglebtn -->

					<!-- tablemenu -->
					<div class="tablemenu navmenu">

						<!-- navlist -->
						<ul class="navlist tables">

							<!-- navitem -->
							<li class="navitem">

								<!-- navlink -->
								<a class="navlink" href="./" title="Home">

									<!-- icon -->
									<svg class="icon house" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
										<?php print $databasetablesicons['housebold']; ?>
									</svg>
									<!-- /icon -->

									<!-- caption -->
									<span class="caption">Home</span>
									<!-- /caption -->

								</a>
								<!-- /navlink -->

							</li>
							<!-- /navitem -->

							<?php foreach($databasetables as $tid=>$table): ?>

								<?php
									$currenttabletitle = $table['tabletitle'];
									$currenttableicontag = $table['tableicontag'];
								?>

								<!-- navitem -->
								<li class="navitem">

									<!-- navlink -->
									<a class="navlink" href="./?view=<?php print $tid; ?>" title="<?php print $currenttabletitle; ?>">

										<!-- icon -->
										<svg class="icon <?php print $currenttableicontag; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
											<?php print $databasetablesicons[ $currenttableicontag ]; ?>
										</svg>
										<!-- /icon -->

										<!-- caption -->
										<span class="caption"><?php print $currenttabletitle; ?></span>
										<!-- /caption -->

									</a>
									<!-- /navlink -->

								</li>
								<!-- /navitem -->

							<?php endforeach; ?>

						</ul>
						<!-- /navlist -->

					</div>
					<!-- /tablemenu -->

				</div>
				<!-- /bin -->

			</nav>
			<!-- /navbar -->

		</div>
		<!-- /#container -->

		<!-- Toggler Script -->
		<script src="./../../../sharedassets/script/toggler.js" type="text/javascript"></script>

		<script type="text/javascript">
			console.log('Database tables (end):', <?php print json_encode( getDatabaseEntries() ); ?>);

			// Get query arena. 
			let queryarena = document.querySelector('div#container div.queryarena');

			// Close query arena (if page fully loaded). 
			queryarena.classList.remove('open');


			// Clear all input fields. 
			clearInputFields();

			// Clear all input fields. 
			function clearInputFields() {

				// Get all input fields. 
				let allinputfields = document.querySelectorAll('input');

				// Go thru each input field. 
				for(let field of allinputfields) {
					// console.log(field);

					// Clear input field. 
					// field.value = 'x';
					field.value = '';
				}
			}
		</script>

	</body>

</html>
