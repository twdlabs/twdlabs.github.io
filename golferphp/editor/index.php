
<?php

	// Get functions to access server database. 
	require_once('../../sharedassets/script/config.php');
	// Get metadata for database tables. 
	require_once('../assets/database/database.php');
	// Get functions to display form layout. 
	require_once('../assets/script/form.php');
	// Get functions to perform CRUD operations. 
	require_once('../assets/script/crudops.php');
	// Get functions to access input and display output. 
	require_once('../../sharedassets/script/io.php');
?>

<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="../assets/flaskicon.png" rel="icon"/>
		<link href="../assets/flaskicon.png" rel="apple-touch-icon"/>
		<title>Editor | CRUD Template</title>

		<!-- Main Stylesheet -->
		<link href="../assets/style/style.css" rel="stylesheet" type="text/css"/>
		<link href="../assets/style/form.css" rel="stylesheet" type="text/css"/>
		<link href="../assets/style/editor.css" rel="stylesheet" type="text/css"/>
		<!-- Query Stylesheet -->
		<link href="../../sharedassets/style/query.css" rel="stylesheet" type="text/css"/>
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
						// Get id of selected table. 
						$tableid = getFieldValueByIdWithDefault('tableid');
						// Get id of selected entry. 
						$entryid = getFieldValueByIdWithDefault('id');
						// Get editor mode. 
						$editormode = getFieldValueByIdWithDefault('editmode');

						// Get id of selected table for editor. 
						$etid = substr($tableid,0,1);

						// Check if editor in update mode. 
						if($editormode=='update') {

							// Return home if updating w/o entry given. 
							if(!$entryid || $entryid==0 || $entryid==-1) {
	
								// Revert to create mode. 
								// $editormode = 'create';
	
								// Go back to home page. 
								header("location:../");
							}
						}
						// // Check if editor in create mode. 
						// else if($editormode=='create') {

						// 	// 
						// }
						// // TODO: Do xyz. 
						// else {

						// 	// 
						// }

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

						/*****/

						// Get editor mode. 
						function getEditorMode() {
							print ($entryid)?'u':'c';
						}

						// Get xyz. 
						function getXyz() {

							// 
						}
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

				</h1>
				<!-- /head -->

				<!-- navbar -->
				<nav class="navbar x">
					
					<!-- link -->
					<a class="link" href="../">Home</a>
					<!-- /link -->
					
					<!-- link -->
					<a class="link" href="./">Editor</a>
					<!-- /link -->

				</nav>
				<!-- /navbar -->

			</section>
			<!-- /section -->

			<!-- grid -->
			<div class="grid <?php print $etid; ?>">

				<!-- section -->
				<section class="crud shots">

					<!-- head -->
					<h1 class="head">

						<!-- caption -->
						<span class="caption">Shot Editor</span>
						<!-- /caption -->

					</h1>
					<!-- /head -->

					<!-- form -->
					<form class="form <?php print $editormode; ?>" method="post">

						<!-- fieldinput -->
						<input class="fieldinput table" type="hidden" name="tableid" value="shots">
						<!-- /fieldinput -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field pfield">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="shotentry-u">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="shotid-u" name="id"> -->
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="shotentry-u" name="id" oninput="displaySelectedEntry(this.value)">
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

							<?php

								// 
								// printToPage('hi');
								// printToPage('hi');

								// Display editor fields. 
								$tid = 'shots';
								displayEditorFields($tid);
							?>

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="btnpanel">

							<!-- backbtn -->
							<button class="backbtn btn" type="button" onclick="goBackHome()">

								<!-- icon -->
								<svg class="icon up arrowleft" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
								</svg>
								<!-- /icon -->

								<!-- caption -->
								<span class="caption">Cancel</span>
								<!-- /caption -->
								
							</button>
							<!-- /backbtn -->
	
							<!-- gobtn -->
							<button class="gobtn updatebtn btn" formaction="../update/index.php">
	
								<!-- caption -->
								<span class="caption">Update</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn createbtn btn" onclick="turnOffPrimaryField(this)" formaction="../create/index.php">
	
								<!-- caption -->
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

				</section>
				<!-- /section -->

				<!-- section -->
				<section class="crud holes">

					<!-- head -->
					<h1 class="head">

						<!-- caption -->
						<span class="caption">Hole Editor</span>
						<!-- /caption -->

					</h1>
					<!-- /head -->

					<!-- form -->
					<form class="form <?php print $editormode; ?>" method="post">

						<!-- fieldinput -->
						<input class="fieldinput table" type="hidden" name="tableid" value="holes">
						<!-- /fieldinput -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field pfield">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="holeentry-u">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="holeid-u" name="id"> -->
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="holeentry-u" name="id" oninput="displaySelectedEntry(this.value)">
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

							<?php

								// 
								// printToPage('hi');
								// printToPage('hi');

								// Display editor fields. 
								$tid = 'holes';
								displayEditorFields($tid);
							?>

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="btnpanel">

							<!-- backbtn -->
							<button class="backbtn btn" type="button" onclick="goBackHome()">

								<!-- icon -->
								<svg class="icon up arrowleft" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
								</svg>
								<!-- /icon -->

								<!-- caption -->
								<span class="caption">Cancel</span>
								<!-- /caption -->
								
							</button>
							<!-- /backbtn -->
	
							<!-- gobtn -->
							<button class="gobtn updatebtn btn" formaction="../update/index.php">
	
								<!-- caption -->
								<span class="caption">Update</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn createbtn btn" onclick="turnOffPrimaryField(this)" formaction="../create/index.php">
	
								<!-- caption -->
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

				</section>
				<!-- /section -->

				<!-- section -->
				<section class="crud clubs">

					<!-- head -->
					<h1 class="head">

						<!-- caption -->
						<span class="caption">Club Editor</span>
						<!-- /caption -->

					</h1>
					<!-- /head -->

					<!-- form -->
					<form class="form <?php print $editormode; ?>" method="post">

						<!-- fieldinput -->
						<input class="fieldinput table" type="hidden" name="tableid" value="clubs">
						<!-- /fieldinput -->

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field pfield">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="clubentry-u">Entry</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="clubid-u" name="id"> -->
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="clubentry-u" name="id" oninput="displaySelectedEntry(this.value)">
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

							<?php

								// 
								// printToPage('hi');
								// printToPage('hi');

								// Display editor fields. 
								$tid = 'clubs';
								displayEditorFields($tid);
							?>

						</ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="btnpanel">

							<!-- backbtn -->
							<button class="backbtn btn" type="button" onclick="goBackHome()">

								<!-- icon -->
								<svg class="icon up arrowleft" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
								</svg>
								<!-- /icon -->

								<!-- caption -->
								<span class="caption">Cancel</span>
								<!-- /caption -->
								
							</button>
							<!-- /backbtn -->
	
							<!-- gobtn -->
							<button class="gobtn updatebtn btn" formaction="../update/index.php">
	
								<!-- caption -->
								<span class="caption">Update</span>
								<!-- /caption -->
	
								<!-- icon -->
								<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
								</svg>
								<!-- /icon -->
	
							</button>
							<!-- /gobtn -->
	
							<!-- gobtn -->
							<button class="gobtn createbtn btn" onclick="turnOffPrimaryField(this)" formaction="../create/index.php">
	
								<!-- caption -->
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

				</section>
				<!-- /section -->

			</div>
			<!-- /grid -->

		</div>
		<!-- /#container -->


		<!-- Xyz Database -->
		<!-- <script src="../xyzdatabase.js" type="text/javascript"></script> -->
		<!-- <script src="../../golfer/assets/database/tabledatabase.js" type="text/javascript"></script> -->
		<script type="text/javascript">
			let post = <?php print json_encode($_POST); ?>;
			console.log('Post:',post);
			let databasetables = <?php print json_encode($databasetables); ?>;
			console.log('Database tables:',databasetables);
		</script>

		<!-- Navigation Script -->
		<script src="../assets/script/nav.js" type="text/javascript"></script>

		<!-- Home Script -->
		<!-- <script src="../assets/script/home.js" type="text/javascript"></script> -->

		<!-- Editor Script -->
		<script src="../assets/script/editor.js" type="text/javascript"></script>

	</body>

</html>
