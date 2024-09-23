
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="./assets/flaskicon.png" rel="icon"/>
		<link href="./assets/flaskicon.png" rel="apple-touch-icon"/>
		<title>CRUD Template</title>

		<!-- Main Stylesheet -->
		<link href="./assets/style/style.css" rel="stylesheet" type="text/css"/>
		<link href="./assets/style/home.css" rel="stylesheet" type="text/css"/>
		<link href="./assets/style/dbquery.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->
	</head>

	<body>

		<!-- #container -->
		<div id="container">

			<!-- section -->
			<section class="">

				<!-- dbquery -->
				<div class="dbquery head">
					
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

					<?php

						// Get functions to display form layout. 
						require_once('./assets/script/form.php');
						// Get functions to access server database. 
						require_once('./assets/script/db.php');
						// Get functions to perform CRUD operations. 
						require_once('./assets/script/crud.php');
						// Get functions to access input and display output. 
						require_once('./assets/script/io.php');

						// Connect to server database. 
						$db = openDb();

						// Print header. 
						// print '<br>Database tables:<br>'.json_encode($databasetables).'<br>';
						print '<br>Form Data<br>------------';

						// Read existing table entries: shots. 
						$shotentries = readAllEntries('shots');

						// Read existing table entries: holes. 
						$holeentries = readAllEntries('holes');

						// Read existing table entries: clubs. 
						$clubentries = readAllEntries('clubs');

						// Disconnect server database. 
						closeDb($db);
					?>
					
				</div>
				<!-- /dbquery -->

				<!-- head -->
				<h1 class="head">

					<!-- icon -->
					<svg class="icon pencilsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
						<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon eyeglasses" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon trashcan" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Welcome to the site!</span>
					<!-- /caption -->

				</h1>
				<!-- /head -->
				
				<!-- link -->
				<a class="link" href="./" target="_blank">Start here</a>
				<!-- /link -->

				<!-- grid -->
				<div class="grid">

					<!-- form -->
					<form class="form table" method="post" action="./">

						<!-- fieldlabel -->
						<!-- <label class="fieldlabel" for="tablename">Table</label> -->
						<!-- /fieldlabel -->

						<!-- fieldinput -->
						<select class="fieldinput" id="tablename" name="tableid[]" multiple oninput="selectTableById(this.value) /* this.parentElement.submit() */">
							<!-- <option value=""></option> -->
							<option value="shots">Shots</option>
							<option value="holes">Holes</option>
							<option value="clubs">Clubs</option>
						</select>
						<!-- /fieldinput -->

					</form>
					<!-- /form -->

				</div>
				<!-- /grid -->

			</section>
			<!-- /section -->

			<!-- section -->
			<section class="crud shots">

				<!-- head -->
				<h1 class="head">

					<!-- caption -->
					<span class="caption">Shots</span>
					<!-- /caption -->

				</h1>
				<!-- /head -->

				<!-- grid -->
				<div class="grid g4">

					<!-- form -->
					<form class="form create" method="post" action="./create/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon pencilsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
								<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Create</span>
							<!-- /caption -->
	
							<!-- fieldinput -->
							<input class="fieldinput table" type="hidden" name="tableid" value="shots">
							<!-- /fieldinput -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="clubentry-c">Club</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="clubentry-c" name="clubid">
									<!-- <option value=""></option> -->
									<?php

										// Display clubs table entries in dropdown menu. 
										showSelectOptions($clubentries,'clubs');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="clubid-c" name="clubid"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="holeentry-c">Hole</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="holeentry-c" name="holeid">
									<!-- <option value=""></option> -->
									<?php

										// Display clubs table entries in dropdown menu. 
										showSelectOptions($holeentries,'holes');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="holeid-c" name="holeid"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="distance-c">Distance</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<input class="fieldinput" type="number" min="0" id="distance-c" name="distance">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
							
						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Create</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

					<!-- form -->
					<form class="form read" method="post" action="./read/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon eyeglasses" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Read</span>
							<!-- /caption -->
	
							<!-- fieldinput -->
							<input class="fieldinput table" type="hidden" name="tableid" value="shots">
							<!-- /fieldinput -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="shotentry-r">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="shotentry-r" name="id[]" multiple required oninput="this.parentElement.parentElement.parentElement.submit()">
									<!-- <option value=""></option> -->
									<?php

										// Display table entries in dropdown menu. 
										showSelectOptions($shotentries,'shots');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="id-r" name="id"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
							
						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Read</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

					<!-- form -->
					<form class="form update" method="post" action="./update/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon pencilsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
								<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Update</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="shots">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="shotentry-u">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="shotentry-u" name="id" oninput="displaySelectedEntry()">
									<!-- <option value=""></option> -->
									<?php

										// Display table entries in dropdown menu. 
										showSelectOptions($shotentries,'shots');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="id-u" name="id"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="clubentry-u">Club</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="clubentry-u" name="clubid">
									<!-- <option value=""></option> -->
									<?php

										// Display clubs table entries in dropdown menu. 
										showSelectOptions($clubentries,'clubs');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="clubid-u" name="clubid"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="holeentry-u">Hole</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="holeentry-u" name="holeid">
									<!-- <option value=""></option> -->
									<?php

										// Display clubs table entries in dropdown menu. 
										showSelectOptions($holeentries,'holes');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="holeid-u" name="holeid"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="distance-u">Distance</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<input class="fieldinput" type="number" min="0" id="distance-u" name="distance">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
							
						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Update</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

					<!-- form -->
					<form class="form delete" method="post" action="./delete/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon trashcan" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Delete</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="shots">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="shotentry-d">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="shotentry-d" name="id[]" multiple required>
									<!-- <option value=""></option> -->
									<?php

										// Display table entries in dropdown menu. 
										showSelectOptions($shotentries,'shots');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="id-d" name="id"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
							
						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Delete</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

				</div>
				<!-- /grid -->

			</section>
			<!-- /section -->

			<!-- section -->
			<section class="crud holes">

				<!-- head -->
				<h1 class="head">

					<!-- caption -->
					<span class="caption">Holes</span>
					<!-- /caption -->

				</h1>
				<!-- /head -->

				<!-- grid -->
				<div class="grid g4">

					<!-- form -->
					<form class="form create" method="post" action="./create/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon pencilsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
								<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Create</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="holes">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

							<?php
								
							?>

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Create</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

					<!-- form -->
					<form class="form read" method="post" action="./read/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon eyeglasses" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Read</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="holes">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Read</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

					<!-- form -->
					<form class="form update" method="post" action="./update/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon pencilsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
								<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Update</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="holes">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Update</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

					<!-- form -->
					<form class="form delete" method="post" action="./delete/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon trashcan" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Delete</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="holes">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Delete</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

				</div>
				<!-- /grid -->

			</section>
			<!-- /section -->

			<!-- section -->
			<section class="crud clubs">

				<!-- head -->
				<h1 class="head">

					<!-- caption -->
					<span class="caption">Clubs</span>
					<!-- /caption -->

				</h1>
				<!-- /head -->

				<!-- grid -->
				<div class="grid g4">

					<!-- form -->
					<form class="form create" method="post" action="./create/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon pencilsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
								<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Create</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="clubs">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Create</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

					<!-- form -->
					<form class="form read" method="post" action="./read/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon eyeglasses" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Read</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="clubs">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="clubentry-r">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="clubentry-r" name="id[]" multiple required oninput="this.parentElement.parentElement.parentElement.submit()">
									<!-- <option value=""></option> -->
									<?php

										// Display table entries in dropdown menu. 
										showSelectOptions($clubentries,'clubs');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="id-r" name="id"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Read</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

					<!-- form -->
					<form class="form update" method="post" action="./update/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon pencilsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
								<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Update</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="clubs">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="clubentry-u">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="clubentry-u" name="id" oninput="displaySelectedEntry()">
									<!-- <option value=""></option> -->
									<?php

										// Display table entries in dropdown menu. 
										showSelectOptions($clubentries,'clubs');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="id-u" name="id"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Update</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

					<!-- form -->
					<form class="form delete" method="post" action="./delete/index.php">
	
						<!-- head -->
						<h2 class="head">
	
							<!-- icon -->
							<svg class="icon trashcan" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">Delete</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldinput -->
								<input class="fieldinput table" type="hidden" name="tableid" value="clubs">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field long">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="clubentry-d">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="clubentry-d" name="id[]" multiple required>
									<!-- <option value=""></option> -->
									<?php

										// Display table entries in dropdown menu. 
										showSelectOptions($clubentries,'clubs');
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="id-d" name="id"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn btn">
	
								<!-- caption -->
								<!-- <span class="caption">Go</span> -->
								<span class="caption">Delete</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
							
						</div>
						<!-- /field -->
	
					</form>
					<!-- /form -->

				</div>
				<!-- /grid -->

			</section>
			<!-- /section -->

		</div>
		<!-- /#container -->


		<!-- Xyz Database -->
		<!-- <script src="./xyzdatabase.js" type="text/javascript"></script> -->
		<!-- <script src="./../golfer/assets/database/tabledatabase.js" type="text/javascript"></script> -->
		<!-- <script src="./../../../../../Users/atg/Dropbox/Developer/Code Projects/Web/Experiment/golfer/assets/database/tabledatabase.js" type="text/javascript"></script> -->

		<!-- Navigation Script -->
		<script src="./assets/script/nav.js" type="text/javascript"></script>

		<!-- CRUD Script -->
		<script src="./assets/script/crud.js" type="text/javascript"></script>

		<!-- Form Script -->
		<script src="./assets/script/form.js" type="text/javascript"></script>

		<!-- Main Script -->
		<!-- <script src="./template.js" type="text/javascript"></script> -->
		<!-- <script type="text/javascript"></script> -->
		<script type="text/javascript">
			let shotentries = <?php echo json_encode($shotentries); ?>;
			console.log('Shot entries:',shotentries);
			let clubentries = <?php echo json_encode($clubentries); ?>;
			console.log('Club entries:',clubentries);
			let holeentries = <?php echo json_encode($holeentries); ?>;
			console.log('Hole entries:',holeentries);
		</script>

	</body>

</html>
