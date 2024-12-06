
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php $justloggedout = $currentuserprofile && isset( $_GET['logout'] ); ?>

		<?php $errormsg = ''; ?>
		<?php $errormsg = ( $isloginreceived && !$newsuccessfullogin ) ? 'Invalid credentials<br>Please try again' : ''; ?>
		<?php $successmsg = ''; ?>
		<?php $successmsg = $justloggedout ? 'Logout successful' : ''; ?>
		<?php $gotmsg = $successmsg || $errormsg; ?>

		<?php if( $gotmsg ): ?>

			<!-- msgcenter -->
			<section class="msgcenter">

				<!-- msgcenter -->
				<div class="msgcenter">

					<?php if( $errormsg ): ?>

						<!-- msg -->
						<div class="msg e"><?php print $errormsg; ?></div>
						<!-- /msg -->

					<?php endif; ?>

					<?php if($successmsg): ?>

						<!-- msg -->
						<div class="msg s"><?php print $successmsg; ?></div>
						<!-- /msg -->

					<?php endif; ?>

				</div>
				<!-- /msgcenter -->

			</section>
			<!-- /msgcenter -->

		<?php endif; ?>

	</body>

</html>
