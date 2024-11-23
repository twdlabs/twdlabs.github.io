
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<!-- navtable -->
		<section class="navtable">

			<!-- head -->
			<div class="head">

				<!-- head -->
				<h2 class="head">

					<!-- caption -->
					<span class="caption">Tables</span>
					<!-- /caption -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

			<!-- navlist -->
			<ul class="navlist">

				<?php foreach($databasetables as $tid=>$currenttable): ?>

					<?php
						// Skip invisible tables for non-admin users. 
						if( !$currenttable['tablevisible'] ) continue;
						// Get details of current table. 
						$currenttabletitle = $currenttable['tabletitle'];
						$currenttableicontag = $currenttable['tablenavicon'];
					?>

					<!-- navitem -->
					<li class="navitem">

						<!-- navlink -->
						<a class="navlink" href="./?view=<?php print $tid; ?>" title="<?php print $currenttabletitle; ?>">

							<!-- icon -->
							<svg class="icon <?php print $currenttableicontag; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<?php print $databasetablesicons[ $currenttableicontag ]; ?>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption"><?php print $currenttabletitle; ?></span>
							<!-- /caption -->

						</a>
						<!-- /navlink -->

					</li>
					<!-- /navitem -->

				<?php endforeach; ?>

			</ul>
			<!-- /navlist -->

		</section>
		<!-- /navtable -->

		<?php if( $iscurrentuseradmin ): ?>

			<!-- navtable -->
			<section class="navtable">

				<!-- head -->
				<div class="head">

					<!-- head -->
					<h2 class="head">

						<!-- caption -->
						<span class="caption">Admin Tables</span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

				</div>
				<!-- /head -->

				<!-- navlist -->
				<ul class="navlist">

					<?php foreach($databasetables as $tid=>$currenttable): ?>

						<?php
							// Show invisible tables for admin users. 
							if( $currenttable['tablevisible'] ) continue;
							// Get details of current table. 
							$currenttabletitle = $currenttable['tabletitle'];
							$currenttableicontag = $currenttable['tablenavicon'];
						?>

						<!-- navitem -->
						<li class="navitem">

							<!-- navlink -->
							<a class="navlink" href="./?view=<?php print $tid; ?>" title="<?php print $currenttabletitle; ?>">

								<!-- icon -->
								<svg class="icon <?php print $currenttableicontag; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<?php print $databasetablesicons[ $currenttableicontag ]; ?>
								</svg>
								<!-- /icon -->

								<!-- caption -->
								<span class="caption"><?php print $currenttabletitle; ?></span>
								<!-- /caption -->

							</a>
							<!-- /navlink -->

						</li>
						<!-- /navitem -->

					<?php endforeach; ?>

				</ul>
				<!-- /navlist -->

			</section>
			<!-- /navtable -->

		<?php endif; ?>

	</body>

</html>
