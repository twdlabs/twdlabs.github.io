
<!DOCTYPE html>
<html>
	
	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="./../sharedassets/flaskicon.png" rel="icon"/>
		<link href="./../sharedassets/flaskicon.png" rel="apple-touch-icon"/>
		<title>Tester</title>

		<script type="text/javascript">
			console.log('Session data:', <?php print isset($_SESSION) ? json_encode($_SESSION) : null; ?>);
			console.log('Get response data:', <?php print isset($_GET) ? json_encode($_GET) : null; ?>);
			console.log('Post response data:', <?php print isset($_POST) ? json_encode($_POST) : null; ?>);
		</script>
	</head>
	
	<body>

		<!-- tester -->
		<form class="tester" action="./" method="post">
			<input type="text" name="code">
		</form>
		<!-- /tester -->

	</body>

</html>
