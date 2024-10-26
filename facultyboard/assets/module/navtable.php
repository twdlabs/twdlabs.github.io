
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<!-- welcome -->
		<section class="welcome">

			<?php

				// Get name of current user. 
				$name = $currentuserdata['personname'] ?? '[none]';
			?>

			<!-- head -->
			<div class="head">

				<!-- head -->
				<h2 class="head">

					<!-- caption -->
					<span class="caption">Welcome <?php print $name; ?>!</span>
					<!-- /caption -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

		</section>
		<!-- /welcome -->

		<!-- nav -->
		<section class="nav">

			<!-- head -->
			<div class="head">

				<!-- head -->
				<h2 class="head">

					<!-- caption -->
					<span class="caption">Select a table</span>
					<!-- /caption -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

			<!-- navlist -->
			<ul class="navlist">

				<?php foreach($databasetables as $tid=>$table): ?>

					<?php
						if(!$table['tabledisplay']) continue;
						$title = $table['tabletitle'];
						$icontag = $table['tablenavicon'];
					?>

					<!-- navitem -->
					<li class="navitem">

						<!-- navlink -->
						<a class="navlink" href="?view=<?php print $tid; ?>" title="<?php print $title; ?>">

							<!-- icon -->
							<svg class="icon <?php print $icontag; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<?php print $databasetablesicons[ $icontag ]; ?>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption"><?php print $title; ?></span>
							<!-- /caption -->

						</a>
						<!-- /navlink -->

					</li>
					<!-- /navitem -->

				<?php endforeach; ?>

			</ul>
			<!-- /navlist -->

		</section>
		<!-- /nav -->

	</body>

</html>
