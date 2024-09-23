
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
		<title>Update | CRUD Template</title>

		<!-- Main Stylesheet -->
		<link href="../assets/style/style.css" rel="stylesheet" type="text/css"/>
		<link href="../assets/style/dbquery.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->
	</head>

	<body>

		<!-- #container -->
		<div id="container">

			<!-- section -->
			<section class="">
				
				<!-- dbquery -->
				<div class="dbquery">

					<?php

						// Get functions to display form layout. 
						require_once('../assets/script/form.php');
						// Get functions to access server database. 
						require_once('../assets/script/db.php');
						// Get functions to perform CRUD operations. 
						require_once('../assets/script/crud.php');
						// Get functions to access input and display output. 
						require_once('../assets/script/io.php');

						// Connect to server database. 
						$db = openDb();

						// Print header. 
						print '<br>Form Data<br>------------';

						// Get id of selected table. 
						$selectedtableid = getFieldValueById('tableid');

						// Update existing table entry in database. 
						$queryresult = updateEntry($selectedtableid);

						// Disconnect server database. 
						closeDb($db);

						// Go back to home page. 
						if($stayhome) header('location:../');
					?>
					
				</div>
				<!-- /dbquery -->

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

			</section>
			<!-- /section -->

		</div>
		<!-- /#container -->

		<!-- Navigation Script -->
		<script src="../assets/script/nav.js" type="text/javascript"></script>

	</body>

</html>
