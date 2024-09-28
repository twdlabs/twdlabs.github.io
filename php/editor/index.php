
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
		<link href="../assets/style/query.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->
	</head>

	<body>

		<!-- #container -->
		<div id="container">

			<!-- section -->
			<section class="hi">

				<!-- query -->
				<div class="query head">
					
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

						// Get functions to access server database. 
						require_once('../assets/script/config.php');
						// Get functions to display form layout. 
						require_once('../assets/script/form.php');
						// Get functions to perform CRUD operations. 
						require_once('../assets/script/crud.php');
						// Get functions to access input and display output. 
						require_once('../assets/script/io.php');

						// Connect to server database. 
						$db = openDb();

						// Print header. 
						print '<script>databasetables = '.json_encode($databasetables).'</script>';
						// print '<br>Database tables:<br>'.json_encode($databasetables).'<br>';
						print '<br>Form Data<br>------------';

						// Read existing table entries: shots. 
						$shotentries = readAllEntries('shots');
						$databasetables['shots']['entries'] = $shotentries;
						// Read existing table entries: holes. 
						$holeentries = readAllEntries('holes');
						$databasetables['holes']['entries'] = $holeentries;
						// Read existing table entries: clubs. 
						$clubentries = readAllEntries('clubs');
						$databasetables['clubs']['entries'] = $clubentries;

						// Get id of selected table. 
						$selectedtableid = getFieldValueById('tableid');

						// Disconnect server database. 
						closeDb($db);

						// Go back to home page. 
						// if($stayhome) header('location:../');
					?>
					
				</div>
				<!-- /query -->

				<!-- backbtn -->
				<button class="backbtn btn" onclick="goBackHome()">

					<!-- icon -->
					<svg class="icon up arrowleft" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Back</span>
					<!-- /caption -->
					
				</button>
				<!-- /backbtn -->

				<!-- grid -->
				<div class="grid">

					<!-- form -->
					<form class="form" method="post">

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="clubentry">Club</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="clubentry" name="clubid">
									<!-- <option value=""></option> -->
									<?php

										// Display clubs table entries in dropdown menu. 
										$tid = 'clubs';
										showSelectOptions( $databasetables[$tid]['entries'] , $tid );
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="clubid" name="clubid"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="holeentry">Hole</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="holeentry" name="holeid">
									<!-- <option value=""></option> -->
									<?php

										// Display clubs table entries in dropdown menu. 
										$tid = 'holes';
										showSelectOptions( $databasetables[$tid]['entries'] , $tid );
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="holeid" name="holeid"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="distance">Distance</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<input class="fieldinput" type="number" min="0" id="distance" name="distance">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist --> 

						<!-- fieldlist -->
						<ul class="fieldlist">
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="clubentry">Club</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="clubentry" name="clubid">
									<!-- <option value=""></option> -->
									<?php

										// Display clubs table entries in dropdown menu. 
										$tid = 'clubs';
										showSelectOptions( $databasetables[$tid]['entries'] , $tid );
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="clubid" name="clubid"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="holeentry">Hole</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<select class="fieldinput" id="holeentry" name="holeid">
									<!-- <option value=""></option> -->
									<?php

										// Display clubs table entries in dropdown menu. 
										$tid = 'holes';
										showSelectOptions( $databasetables[$tid]['entries'] , $tid );
									?>
								</select>
								<!-- /fieldinput -->
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="holeid" name="holeid"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
		
							<!-- field -->
							<li class="field">
		
								<!-- fieldlabel -->
								<label class="fieldlabel" for="distance">Distance</label>
								<!-- /fieldlabel -->
		
								<!-- fieldinput -->
								<input class="fieldinput" type="number" min="0" id="distance" name="distance">
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->
	
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
				<div class="grid g2">

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
								<label class="fieldlabel" for="shotentry-u">Entry</label>
								<!-- /fieldlabel -->
		
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
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="id-u" name="id"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->
							
						</ul>
						<!-- /fieldlist -->

						<!-- fieldlist -->
						<ul class="fieldlist"></ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn update btn" formaction="../update/index.php">
	
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
							<button class="gobtn create btn" formaction="../create/index.php">
	
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
				<div class="grid g2">

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
								<label class="fieldlabel" for="holeentry-u">Entry</label>
								<!-- /fieldlabel -->
		
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
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="id-u" name="id"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->

						<!-- fieldlist -->
						<ul class="fieldlist"></ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn update btn" formaction="../update/index.php">
	
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
							<button class="gobtn create btn" formaction="../create/index.php">
	
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
				<div class="grid g2">

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
								<label class="fieldlabel" for="clubentry-u">Entry</label>
								<!-- /fieldlabel -->
		
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
		
								<!-- fieldinput -->
								<!-- <input class="fieldinput" type="text" id="id-u" name="id"> -->
								<!-- /fieldinput -->
		
							</li>
							<!-- /field -->

						</ul>
						<!-- /fieldlist -->

						<!-- fieldlist -->
						<ul class="fieldlist"></ul>
						<!-- /fieldlist -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn update btn" formaction="../update/index.php">
	
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
							<button class="gobtn create btn" formaction="../create/index.php">
	
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

				</div>
				<!-- /grid -->

			</section>
			<!-- /section -->

		</div>
		<!-- /#container -->


		<!-- Xyz Database -->
		<!-- <script src="../xyzdatabase.js" type="text/javascript"></script> -->
		<!-- <script src="../../golfer/assets/database/tabledatabase.js" type="text/javascript"></script> -->
		<script type="text/javascript">
			let databasetables = <?php echo json_encode($databasetables); ?>;
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
