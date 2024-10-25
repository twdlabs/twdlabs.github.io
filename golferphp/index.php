
<?php

	// Get functions to access server database. 
	require_once('./../sharedassets/script/config.php');
	// Get metadata for database tables. 
	require_once('./assets/database/database.php');
	// Get functions to display form layout. 
	require_once('./assets/script/form.php');
	// Get functions to perform CRUD operations. 
	require_once('./assets/script/crudops.php');
	// Get functions to access input and display output. 
	require_once('./../sharedassets/script/io.php');
?>

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
		<title>Golfer Tracker</title>

		<!-- Main Stylesheet -->
		<link href="./assets/style/style.css" rel="stylesheet" type="text/css"/>
		<link href="./assets/style/form.css" rel="stylesheet" type="text/css"/>
		<!-- Query Stylesheet -->
		<link href="./../sharedassets/style/query.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->
	</head>

	<body>

		<!-- #container -->
		<div id="container">

			<!-- queryarena -->
			<div class="queryarena head open">
				
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
						$db = openDb('cis355golfer');

						// Print header. 
						printToPage('Field Values<br>----------------');
						// Read existing table entries: shots. 
						$tid = 'shots';
						$queryresultrows = readTableEntries($tid);
						$databasetables[$tid]['entries'] = $queryresultrows;
						// Read existing table entries: holes. 
						$tid = 'holes';
						$queryresultrows = readTableEntries($tid);
						$databasetables[$tid]['entries'] = $queryresultrows;
						// Read existing table entries: clubs. 
						$tid = 'clubs';
						$queryresultrows = readTableEntries($tid);
						$databasetables[$tid]['entries'] = $queryresultrows;

						// Disconnect server database. 
						closeDb($db);

						// Save database tables. 
						print '<script>databasetables = '.json_encode($databasetables).'</script>';
					?>

				</div>
				<!-- /stage -->

			</div>
			<!-- /queryarena -->

			<!-- section -->
			<section class="hi">

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

				</h1>
				<!-- /head -->

				<!-- head -->
				<h1 class="head">

					<!-- caption -->
					<span class="caption">Welcome!</span>
					<!-- /caption -->

				</h1>
				<!-- /head -->

				<!-- navbar -->
				<nav class="navbar x">
					
					<!-- link -->
					<a class="link" href="./">Home</a>
					<!-- /link -->
					
					<!-- link -->
					<a class="link" href="./editor/">Editor</a>
					<!-- /link -->

				</nav>
				<!-- /navbar -->

			</section>
			<!-- /section -->

			<!-- grid -->
			<div class="grid">

				<!-- section -->
				<section class="crud shots">

					<!-- head -->
					<h1 class="head">

						<!-- caption -->
						<span class="caption">Shots</span>
						<!-- /caption -->

					</h1>
					<!-- /head -->

					<!-- form -->
					<form class="form" method="post">

						<!-- fieldinput -->
						<input class="fieldinput table" type="hidden" name="tableid" value="shots">
						<!-- /fieldinput -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="shotentry">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="shotentry" name="id[]" multiple xyz>
									<!-- <option value=""></option> -->
									<?php

										// Display table entries in dropdown menu. 
										$tid = 'shots';
										showSelectOptions( $databasetables[$tid]['entries'] , $tid );
									?>
								</select>
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
							
						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="btnpanel">
	
							<!-- gobtn -->
							<button class="gobtn btn" formaction="./read/index.php">
	
								<!-- caption -->
								<span class="caption">Read</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn btn" name="editmode" value="u" formaction="./editor/index.php">
	
								<!-- caption -->
								<span class="caption">Edit</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn btn" formaction="./delete/index.php">
	
								<!-- caption -->
								<span class="caption">Delete</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn wide btn" name="editmode" value="c" formaction="./editor/index.php">
	
								<!-- caption -->
								<span class="caption">New</span>
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

					<!-- form -->
					<form class="form" method="post">

						<!-- fieldinput -->
						<input class="fieldinput table" type="hidden" name="tableid" value="holes">
						<!-- /fieldinput -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="holeentry">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="holeentry" name="id[]" multiple xyz>
									<!-- <option value=""></option> -->
									<?php

										// Display table entries in dropdown menu. 
										$tid = 'holes';
										showSelectOptions( $databasetables[$tid]['entries'] , $tid );
									?>
								</select>
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="btnpanel">
	
							<!-- gobtn -->
							<button class="gobtn btn" formaction="./read/index.php">
	
								<!-- caption -->
								<span class="caption">Read</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn btn" name="editmode" value="u" formaction="./editor/index.php">
	
								<!-- caption -->
								<span class="caption">Edit</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn btn" formaction="./delete/index.php">
	
								<!-- caption -->
								<span class="caption">Delete</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn wide btn" name="editmode" value="c" formaction="./editor/index.php">
	
								<!-- caption -->
								<span class="caption">New</span>
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

					<!-- form -->
					<form class="form" method="post">

						<!-- fieldinput -->
						<input class="fieldinput table" type="hidden" name="tableid" value="clubs">
						<!-- /fieldinput -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="clubentry">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="clubentry" name="id[]" multiple xyz>
									<!-- <option value=""></option> -->
									<?php

										// Display table entries in dropdown menu. 
										$tid = 'clubs';
										showSelectOptions( $databasetables[$tid]['entries'] , $tid );
									?>
								</select>
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="btnpanel">
	
							<!-- gobtn -->
							<button class="gobtn btn" formaction="./read/index.php">
	
								<!-- caption -->
								<span class="caption">Read</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn btn" name="editmode" value="u" formaction="./editor/index.php">
	
								<!-- caption -->
								<span class="caption">Edit</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn btn" formaction="./delete/index.php">
	
								<!-- caption -->
								<span class="caption">Delete</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn wide btn" name="editmode" value="c" formaction="./editor/index.php">
	
								<!-- caption -->
								<span class="caption">New</span>
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

				</section>
				<!-- /section -->

			</div>
			<!-- /grid -->

		</div>
		<!-- /#container -->


		<!-- Xyz Database -->
		<!-- <script src="./xyzdatabase.js" type="text/javascript"></script> -->
		<!-- <script src="./../golfer/assets/database/tabledatabase.js" type="text/javascript"></script> -->
		<script type="text/javascript">
			let post = <?php print json_encode($_POST); ?>;
			console.log('Post:',post);
			let databasetables = <?php print json_encode($databasetables); ?>;
			console.log('Database tables:',databasetables);
		</script>

		<!-- Navigation Script -->
		<!-- <script src="./assets/script/nav.js" type="text/javascript"></script> -->

		<!-- Home Script -->
		<script src="./assets/script/home.js" type="text/javascript"></script>

		<!-- Editor Script -->
		<!-- <script src="./assets/script/editor.js" type="text/javascript"></script> -->

	</body>

</html>
