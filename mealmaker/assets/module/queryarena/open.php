
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body>
		
		<?php $currentuserisadmin = isset( $_SESSION ) && isset( $_SESSION['currentuserisadmin'] ) && $_SESSION['currentuserisadmin'] ; ?>
		<?php $queryarenastate = $currentuserisadmin ? 'openx' : '' ; ?>

		<!-- queryarena -->
		<div class="queryarena navbaby <?=$queryarenastate?>">

			<!-- togglebtn -->
			<div class="togglebtn" onclick="toggleQueryArena()">

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

	</body>

</html>
