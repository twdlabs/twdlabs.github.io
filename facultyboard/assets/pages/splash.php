
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<!-- splash -->
		<section class="splash float">

			<!-- msgcenter -->
			<div class="msgcenter">

				<?php $errormsg = ''; ?>
				<?php if( $errormsg ): ?>

					<!-- msg -->
					<div class="msg r"><?php print $errormsg; ?></div>
					<!-- /msg -->

				<?php endif; ?> 

				<?php $justloggedout = isset( $_GET['logout'] ); ?>
				<?php $successmsg = $justloggedout ? 'Logout successful' : ''; ?>
				<?php if($successmsg): ?>

					<!-- msg -->
					<div class="msg g"><?php print $successmsg; ?></div>
					<!-- /msg -->

				<?php endif; ?>

			</div>
			<!-- /msgcenter -->

			<!-- head -->
			<div class="head">

				<!-- head -->
				<h2 class="head">

					<!-- caption -->
					<span class="caption">Faculty Board</span>
					<!-- /caption -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

			<!-- enterlink -->
			<a class="enterlink" href="?view=home">

				<!-- logo -->
				<img class="logo" src="./assets/image/6354674.png" alt="">
				<!-- /logo -->
				
			</a>
			<!-- /enterlink -->

			<!-- usernavlist -->
			<ul class="usernavlist">

				<?php if( $currentuserdata && !$justloggedout ): ?>

					<!-- usernavitem -->
					<li class="usernavitem">

						<!-- usernavlink -->
						<a class="usernavlink pr" href="?view=home">Enter</a>
						<!-- /usernavlink -->

					</li>
					<!-- /usernavitem -->

				<?php else: ?>

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

				<?php endif; ?>

			</ul>
			<!-- /usernavlist -->

		</section>
		<!-- /splash -->

	</body>

</html>
