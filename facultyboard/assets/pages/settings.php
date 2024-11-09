
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<!-- settings -->
		<section class="settings">

			<!-- msgcenter -->
			<div class="msgcenter">

				<?php $errormsg = ''; ?>
				<?php if( $errormsg ): ?>

					<!-- msg -->
					<div class="msg r"><?php print $errormsg; ?></div>
					<!-- /msg -->

				<?php endif; ?> 

				<?php $successmsg = ''; ?>
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
					<span class="caption">Settings</span>
					<!-- /caption -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

		</section>
		<!-- /settings -->

	</body>

</html>
