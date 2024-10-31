
<?php require_once('./script/config.php'); ?>
<?php require_once('./script/io.php'); ?>

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
		<title>PHP Server Tester</title>
		<style type="text/css">
			@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@100;300;400;500;600&display=swap');

			* {box-sizing:border-box; /* padding:0; margin:0; */}


			:root {

				/* Theme Colors */
				--lightgrey:#CCC;
				--lightblack:#333;
				
				/* Gradient Colors */
				/* --bgimg:linear-gradient(135deg,dodgerblue,white,wheat); */

				/* Page Sizes */
				--dt:.5s;
				--pagewidth:60rem;
				--cornersize:.5rem;
				
				/* Box Shadows */
				--boxshadow:0 0 1rem 0 #0002;
				--boxshadow:0 0 .25rem 0 #0003;
			}

			body {

				--backcolor:var(--lightgrey);
				--forecolor:black;
			}

			/* body.dark {

				--backcolor:var(--lightblack);
				--forecolor:white;
			} */


			body {background-color:var(--backcolor); background-image:var(--bgimg); display:grid; place-items:center; min-height:100vh margin:0;}
			body {color:var(--forecolor); font-family:Nunito,sans-serif;}

			
			form.tester {background-color:white; display:flex; flex-direction:column; place-items:center; padding:1rem; border-radius:var(--cornersize); box-shadow:var(--boxshadow);}
			/* form.tester {width:100%; max-width:var(--pagewidth);} */
			form.tester button.btn,
			form.tester input.fieldinput {width:100%; padding:.5em 1em; margin-top:.25rem}
		</style>
	</head>
	
	<body>
		<!-- #container -->
		<div id="container">

			<!-- queryarena -->
			<div class="queryarena">

				<!-- togglebtn -->
				<div class="togglebtn"></div>
				<!-- /togglebtn -->

				<!-- stage -->
				<div class="stage">

				</div>
				<!-- /stage -->

			</div>
			<!-- /queryarena -->
			
		</div>
		<!-- /#container -->

		<?php $selfrefurl = ''; ?>

		<!-- tester -->
		<form class="tester" method="post" action="<?php print $selfrefurl; ?>">
			<input class="fieldinput" type="text" name="a" placeholder="a" value="">
			<input class="fieldinput" type="text" name="b" placeholder="b" value="">
			<input class="fieldinput" type="text" name="c" placeholder="c" value="">
			<button class="btn" type="submit">Send</button>
		</form>
		<!-- /tester -->

		<script type="text/javascript">
			console.log('Session data:', <?php print isset($_SESSION) ? json_encode($_SESSION) : null; ?>);
			console.log('Get response data:', <?php print isset($_GET) ? json_encode($_GET) : null; ?>);
			console.log('Post response data:', <?php print isset($_POST) ? json_encode($_POST) : null; ?>);
			<?php foreach($_POST as $fid=>$field): ?>
				console.log('\t<?php print $fid; ?>:', '<?php print $field; ?>', '<?php print isset($field); ?>', '<?php print isset($_POST[$fid]); ?>');
			<?php endforeach; ?>
		</script>

	</body>

</html>
