
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
		<title>Create | CRUD Template</title>

		<!-- Main Stylesheet -->
		<link href="../assets/style/style.css" rel="stylesheet" type="text/css"/>
		<link href="../assets/style/crud.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->
	</head>

	<body>
		
		<!-- dbquery -->
		<div class="dbquery solo">

			<?php

				// Get functions to access server database. 
				require_once('../assets/script/db.php');
				// Get functions to access given field data. 
				require_once('../assets/script/crud.php');
				// Get functions to access given field data. 
				require_once('../assets/script/output.php');

				// Connect to server database. 
				$db = openDb();

				// Define table name. 
				$tn = 'shots';
				// Define list of field ids. 
				$fieldids = ['clubid','holeid','distance'];
				// Create new database entry. 
				$query = createNewEntry($db,$tn,$fieldids);
				// Get result of database query. 
				getResult($db,$query,$tn);

				// Disconnect server database. 
				closeDb($db);

				// Go back to home page. 
				if($stayhome) header('location:../');
			?>
			
		</div>
		<!-- /dbquery -->

	</body>

</html>
