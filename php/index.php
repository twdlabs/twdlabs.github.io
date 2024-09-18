
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="./../atgicon.ico" rel="icon"/>
		<link href="./../atgicon.ico" rel="apple-touch-icon"/>
		<title>CRUD Home</title>

		<!-- Main Stylesheet -->
		<link href="./style.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->
	</head>

	<body>

		<!-- #container -->
		<div id="container">

			<!-- main -->
			<main class="main">

				<!-- head -->
				<h1 class="head">
					Welcome to the site!
				</h1>
				<!-- /head -->
				
				<!-- link -->
				<a class="link" href="./" target="_blank">Start here</a>
				<!-- /link -->

				<!-- grid -->
				<div class="grid">

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
	
						<!-- field -->
						<div class="field">
	
							<!-- fieldlabel -->
							<label class="fieldlabel" for="clubid">Club ID</label>
							<!-- /fieldlabel -->
	
							<!-- fieldinput -->
							<input class="fieldinput" type="text" id="clubid" name="clubid" required>
							<!-- /fieldinput -->
	
						</div>
						<!-- /field -->
	
						<!-- field -->
						<div class="field">
	
							<!-- fieldlabel -->
							<label class="fieldlabel" for="holeid">Hole ID</label>
							<!-- /fieldlabel -->
	
							<!-- fieldinput -->
							<input class="fieldinput" type="text" id="holeid" name="holeid" required>
							<!-- /fieldinput -->
	
						</div>
						<!-- /field -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn">
	
								<!-- caption -->
								<span class="caption">Go</span>
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
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn">
	
								<!-- caption -->
								<span class="caption">Go</span>
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
	
						<!-- field -->
						<div class="field">
	
							<!-- fieldlabel -->
							<label class="fieldlabel" for="shotid">ID</label>
							<!-- /fieldlabel -->
	
							<!-- fieldinput -->
							<input class="fieldinput" type="text" id="shotid" name="shotid" required>
							<!-- /fieldinput -->
	
						</div>
						<!-- /field -->
	
						<!-- field -->
						<div class="field">
	
							<!-- fieldlabel -->
							<label class="fieldlabel" for="clubid">Club ID</label>
							<!-- /fieldlabel -->
	
							<!-- fieldinput -->
							<input class="fieldinput" type="text" id="clubid" name="clubid" required>
							<!-- /fieldinput -->
	
						</div>
						<!-- /field -->
	
						<!-- field -->
						<div class="field">
	
							<!-- fieldlabel -->
							<label class="fieldlabel" for="holeid">Hole ID</label>
							<!-- /fieldlabel -->
	
							<!-- fieldinput -->
							<input class="fieldinput" type="text" id="holeid" name="holeid" required>
							<!-- /fieldinput -->
	
						</div>
						<!-- /field -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn">
	
								<!-- caption -->
								<span class="caption">Go</span>
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
	
						<!-- field -->
						<div class="field">
	
							<!-- fieldlabel -->
							<label class="fieldlabel" for="shotid">ID</label>
							<!-- /fieldlabel -->
	
							<!-- fieldinput -->
							<input class="fieldinput" type="text" id="shotid" name="shotid" required>
							<!-- /fieldinput -->
	
						</div>
						<!-- /field -->
	
						<!-- field -->
						<div class="field go">
	
							<!-- gobtn -->
							<button class="gobtn">
	
								<!-- caption -->
								<span class="caption">Go</span>
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

			</main>
			<!-- /main -->

		</div>
		<!-- /#container -->


		<!-- Xyz Database -->
		<!-- <script src="./xyzdatabase.js" type="text/javascript"></script> -->

		<!-- Main Script -->
		<!-- <script src="./template.js" type="text/javascript"></script> -->
		<!-- <script type="text/javascript"></script> -->

	</body>

</html>
