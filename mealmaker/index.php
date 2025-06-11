
<?php

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

						// Handle new C.R.U.D. operations. 
						// handleCrudOps();

						// Download all table entries from database. 
						// getAllTables(0);

						// Get self-reference url (for forms and links). 
						// $selfurl = getSelfRefUrl();
						// $selfurlbase = getSelfRefUrl(false);
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

			<!-- grid -->
			<div class="grid">

				<!-- item -->
				<div class="item">

					<!-- user -->
					<form class="user form" method="post" action="./assets/script/newuser.php">

						<!-- head -->
						<h2 class="head">Sign up</h1>
						<!-- /head -->

						<!-- field -->
						<div class="field">

							<!-- label -->
							<label class="label" for="childname">Child Name</label>
							<!-- /label -->

							<!-- datafield -->
							<input class="datafield" type="text" id="childname" name="childname" placeholder="Johnny Smith" requireds>
							<!-- /datafield -->

						</div>
						<!-- /field -->

						<!-- field -->
						<div class="field">

							<!-- label -->
							<label class="label" for="parentname">Name</label>
							<!-- /label -->

							<!-- datafield -->
							<input class="datafield" type="text" id="parentname" name="parentname" placeholder="John Smith" requireds>
							<!-- /datafield -->

						</div>
						<!-- /field -->

						<!-- field -->
						<div class="field">

							<!-- label -->
							<label class="label" for="phonenumber">Phone number</label>
							<!-- /label -->

							<!-- datafield -->
							<input class="datafield" type="text" id="phonenumber" name="phonenumber" placeholder="2134567890" requireds>
							<!-- /datafield -->

						</div>
						<!-- /field -->

						<!-- field -->
						<div class="field">

							<!-- label -->
							<label class="label" for="useridcreate">Email address</label>
							<!-- /label -->

							<!-- datafield -->
							<input class="datafield" type="text" id="useridcreate" name="emailaddress" placeholder="johnsmith@gmail.com" requireds>
							<!-- /datafield -->

						</div>
						<!-- /field -->

						<!-- field -->
						<div class="field">

							<!-- label -->
							<label class="label" for="passwordcreate">Create Password</label>
							<!-- /label -->

							<!-- datafield -->
							<input class="datafield" type="password" id="passwordcreate" name="password" placeholder="********" requireds>
							<!-- /datafield -->

						</div>
						<!-- /field -->

						<!-- field -->
						<div class="field">

							<!-- label -->
							<label class="label" for="passwordconfirm">Confirm Password</label>
							<!-- /label -->

							<!-- datafield -->
							<input class="datafield" type="password" id="passwordconfirm" name="passwordconfirm" placeholder="********" requireds>
							<!-- /datafield -->

						</div>
						<!-- /field -->

						<!-- field -->
						<div class="act">

							<!-- btn -->
							<button class="btn clear" type="reset">

								<!-- caption -->
								<span class="caption">Clear</span>
								<!-- /caption -->

								<!-- icon -->
								<svg class="icon bigx" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
								</svg>
								<!-- /icon -->

							</button>
							<!-- /btn -->

							<!-- btn -->
							<button class="btn send" type="submit">

								<!-- caption -->
								<span class="caption">Continue</span>
								<!-- /caption -->

								<!-- icon -->
								<!-- <svg class="icon up arrowright" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
								</svg> -->
								<!-- /icon -->

								<!-- icon -->
								<svg class="icon chevronright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
								</svg>
								<!-- /icon -->

							</button>
							<!-- /btn -->

						</div>
						<!-- /field -->

					</form>
					<!-- /user -->

				</div>
				<!-- /item -->

				<!-- item -->
				<div class="item">

					<!-- user -->
					<form class="user form" method="post" action="./assets/script/login.php">

						<!-- head -->
						<h2 class="head">Sign in</h1>
						<!-- /head -->

						<!-- field -->
						<div class="field">

							<!-- label -->
							<label class="label" for="userid">Email address</label>
							<!-- /label -->

							<!-- datafield -->
							<input class="datafield" type="text" id="userid" name="userid" placeholder="johnsmith@gmail.com" requireds>
							<!-- /datafield -->

						</div>
						<!-- /field -->

						<!-- field -->
						<div class="field">

							<!-- label -->
							<label class="label" for="password">Password</label>
							<!-- /label -->

							<!-- datafield -->
							<input class="datafield" type="password" id="password" name="password" placeholder="********" requireds>
							<!-- /datafield -->

						</div>
						<!-- /field -->

						<!-- field -->
						<div class="act">

							<!-- btn -->
							<button class="btn clear" type="reset">

								<!-- caption -->
								<span class="caption">Clear</span>
								<!-- /caption -->

								<!-- icon -->
								<svg class="icon bigx" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
								</svg>
								<!-- /icon -->

							</button>
							<!-- /btn -->

							<!-- btn -->
							<button class="btn send" type="submit">

								<!-- caption -->
								<span class="caption">Login</span>
								<!-- /caption -->

								<!-- icon -->
								<svg class="icon chevronright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
								</svg>
								<!-- /icon -->

							</button>
							<!-- /btn -->

						</div>
						<!-- /field -->

					</form>
					<!-- /user -->

				</div>
				<!-- /item -->

				<!-- item -->
				<div class="item">

					<!-- order -->
					<form class="order form" method="post" action="./assets/script/createorder.php">

						<!-- head -->
						<h2 class="head">Place Order</h1>
						<!-- /head -->

						<!-- fieldtable -->
						<table class="fieldtable">

							<!-- row -->
							<tr class="row">

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption"></span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Monday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Tuesday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Wednesday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Thursday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Friday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

							</tr>
							<!-- /row -->

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<th class="cell">

									<!-- caption -->
									<span class="caption">Breakfast</span>
									<!-- /caption -->

								</th>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="bfmon" title="Monday Breakfast" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="bftue" title="Tuesday Breakfast" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="bfwed" title="Wednesday Breakfast" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="bfthu" title="Thursday Breakfast" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="bffri" title="Friday Breakfast" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

							</tr>
							<!-- /row -->

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<th class="cell">

									<!-- caption -->
									<span class="caption">Lunch</span>
									<!-- /caption -->

								</th>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="lnmon" title="Monday Lunch" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="lntue" title="Tuesday Lunch" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="lnwed" title="Wednesday Lunch" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="lnthu" title="Thursday Lunch" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- field -->
									<div class="field">
			
										<!-- datafield -->
										<select class="datafield" name="lnfri" title="Friday Lunch" requireds>
			
											<!-- choice -->
											<option class="choice" value="">[none]</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->
			
											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
											<!-- /choice -->
			
										</select>
										<!-- /datafield -->
			
									</div>
									<!-- /field -->

								</td>
								<!-- /cell -->

							</tr>
							<!-- /row -->

						</table>
						<!-- /fieldtable -->

						<!-- field -->
						<div class="act">

							<!-- btn -->
							<button class="btn clear" type="reset">

								<!-- caption -->
								<span class="caption">Clear</span>
								<!-- /caption -->

								<!-- icon -->
								<svg class="icon bigx" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
								</svg>
								<!-- /icon -->

							</button>
							<!-- /btn -->

							<!-- btn -->
							<button class="btn send" type="submit">

								<!-- caption -->
								<span class="caption">Send Order</span>
								<!-- /caption -->

								<!-- icon -->
								<svg class="icon chevronright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
								</svg>
								<!-- /icon -->

							</button>
							<!-- /btn -->

						</div>
						<!-- /field -->

					</form>
					<!-- /order -->

				</div>
				<!-- /item -->

				<!-- item -->
				<div class="item">

					<!-- table -->
					<div class="table">

						<!-- head -->
						<h2 class="head">Manage Users</h1>
						<!-- /head -->

						<!-- datatable -->
						<table class="datatable">

							<!-- row -->
							<tr class="row">

								<!-- head -->
								<th class="head x">

									<!-- caption -->
									<span class="caption">ID</span>
									<!-- <span class="caption">id</span> -->
									<!-- <span class="caption">userid</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Name</span>
									<!-- <span class="caption">personname</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Child Name</span>
									<!-- <span class="caption">childname</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Phone number</span>
									<!-- <span class="caption">phonenumber</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Email address</span>
									<!-- <span class="caption">emailaddress</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

							</tr>
							<!-- /row -->

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<td class="cell x">

									<!-- caption -->
									<span class="caption">0</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

							</tr>
							<!-- /row -->

						</table>
						<!-- /datatable -->

					</div>
					<!-- /table -->

				</div>
				<!-- /item -->

				<!-- item -->
				<div class="item">

					<!-- table -->
					<div class="table">

						<!-- head -->
						<h2 class="head">Manage Meal Menu</h1>
						<!-- /head -->

						<!-- datatable -->
						<table class="datatable">

							<!-- row -->
							<tr class="row">

								<!-- head -->
								<th class="head x">

									<!-- caption -->
									<span class="caption">ID</span>
									<!-- <span class="caption">id</span> -->
									<!-- <span class="caption">mealid</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Meal Name</span>
									<!-- <span class="caption">mealname</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

							</tr>
							<!-- /row -->

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<td class="cell x">

									<!-- caption -->
									<span class="caption">0</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

							</tr>
							<!-- /row -->

						</table>
						<!-- /datatable -->

					</div>
					<!-- /table -->

				</div>
				<!-- /item -->

				<!-- item -->
				<div class="item">

					<!-- table -->
					<div class="table">

						<!-- head -->
						<h2 class="head">Manage Meal Orders</h1>
						<!-- /head -->

						<!-- datatable -->
						<table class="datatable">

							<!-- row -->
							<tr class="row">

								<!-- head -->
								<th class="head f x">

									<!-- caption -->
									<span class="caption"></span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head f x">

									<!-- caption -->
									<span class="caption"></span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head f">

									<!-- caption -->
									<span class="caption"></span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head" colspan="2">

									<!-- caption -->
									<span class="caption">Monday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head" colspan="2">

									<!-- caption -->
									<span class="caption">Tuesday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head" colspan="2">

									<!-- caption -->
									<span class="caption">Wednesday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head" colspan="2">

									<!-- caption -->
									<span class="caption">Thursday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head" colspan="2">

									<!-- caption -->
									<span class="caption">Friday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

							</tr>
							<!-- /row -->

							<!-- row -->
							<tr class="row">

								<!-- head -->
								<th class="head x">

									<!-- caption -->
									<span class="caption">ID</span>
									<!-- <span class="caption">id</span> -->
									<!-- <span class="caption">orderid</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head x">

									<!-- caption -->
									<span class="caption">Parent</span>
									<!-- <span class="caption">personname</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Child</span>
									<!-- <span class="caption">childname</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Breakfast</span>
									<!-- <span class="caption">bf-mon</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Lunch</span>
									<!-- <span class="caption">ln-mon</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Breakfast</span>
									<!-- <span class="caption">bf-tue</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Lunch</span>
									<!-- <span class="caption">ln-tue</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Breakfast</span>
									<!-- <span class="caption">bf-wed</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Lunch</span>
									<!-- <span class="caption">ln-wed</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Breakfast</span>
									<!-- <span class="caption">bf-thu</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Lunch</span>
									<!-- <span class="caption">ln-thu</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Breakfast</span>
									<!-- <span class="caption">bf-fri</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Lunch</span>
									<!-- <span class="caption">ln-fri</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

							</tr>
							<!-- /row -->

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<td class="cell x">

									<!-- caption -->
									<span class="caption">0</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell x">

									<!-- caption -->
									<span class="caption">John Smith</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">Johnny Smith</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

							</tr>
							<!-- /row -->

						</table>
						<!-- /datatable -->

					</div>
					<!-- /table -->

				</div>
				<!-- /item -->

			</div>
			<!-- /grid -->

		</div>
		<!-- /#container -->

		<!-- Toggler Script -->
		<script src="./../sharedassets/script/toggler.js" type="text/javascript"></script>

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
