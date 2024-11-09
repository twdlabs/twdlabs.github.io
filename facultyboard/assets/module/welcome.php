
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php if( $selectedviewid=='login' ): ?>

			<!-- welcome -->
			<section class="welcome">

				<!-- head -->
				<div class="head">

					<!-- head -->
					<h2 class="head">

						<?php $name = $currentuserdata['personname'] ?? ''; ?>

						<!-- caption -->
						<span class="caption">Welcome <?php print $name; ?>!</span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

				</div>
				<!-- /head -->

			</section>
			<!-- /welcome -->

		<?php endif; ?>

	</body>

</html>
