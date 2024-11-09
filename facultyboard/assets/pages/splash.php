
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<!-- splash -->
		<section class="splash center">

			<?php $successfullogout = isset( $_GET['logout'] ); ?>
			<?php $successfullogout = false; ?>

			<!-- msgcenter -->
			<div class="msgcenter">

				<?php if($successfullogout): ?>

					<!-- msg -->
					<div class="msg g">Logout successful</div>
					<!-- /msg -->

				<?php endif; ?>

			</div>
			<!-- /msgcenter -->

			<!-- logo -->
			<img class="logo" src="./assets/image/6354674.png" alt="">
			<!-- /logo -->

			<!-- usernavlist -->
			<ul class="usernavlist">

				<!-- usernavitem -->
				<li class="usernavitem">

					<!-- usernavlink -->
					<a class="usernavlink pr" href="?view=login">Login</a>
					<!-- /usernavlink -->

				</li>
				<!-- /usernavitem -->

				<!-- usernavitem -->
				<li class="usernavitem">

					<!-- usernavlink -->
					<a class="usernavlink" href="?view=register">Register</a>
					<!-- /usernavlink -->

				</li>
				<!-- /usernavitem -->

			</ul>
			<!-- /usernavlist -->

		</section>
		<!-- /splash -->

	</body>

</html>
