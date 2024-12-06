
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<!-- navtable -->
		<section class="navtable">

			<!-- head -->
			<div class="headbar">

				<!-- head -->
				<h2 class="headline">

					<!-- caption -->
					<span class="caption">Tables</span>
					<!-- /caption -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

			<!-- navlist -->
			<ul class="navlist">

				<!-- navitem -->
				<li class="navitem<?php print $iscurrentuseradmin ? ' fill' : ''; ?>">

					<!-- navlink -->
					<a class="navlink" href="./?view=home" title="Home">

						<!-- icon -->
						<svg class="icon house" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<?php print $databasetablesicons['house']; ?>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">Home</span>
						<!-- /caption -->

					</a>
					<!-- /navlink -->

				</li>
				<!-- /navitem -->

				<?php foreach($databasetables as $tid=>$currenttable): ?>

					<?php
						// Skip invisible tables for non-admin users. 
						if( !$iscurrentuseradmin && !$currenttable['tablenavvisible'] ) continue;
						// Get details of current table. 
						$currenttabletitle = $currenttable['tabletitle'];
						$currenttableicontag = $currenttable['tableicontag'];
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

				<!-- navitem -->
				<li class="navitem x<?php print $iscurrentuseradmin ? ' fill' : ''; ?>">

					<!-- navlink -->
					<a class="navlink" href="./?view=settings" title="Settings">

						<!-- icon -->
						<svg class="icon gear" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
							<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">Settings</span>
						<!-- /caption -->

					</a>
					<!-- /navlink -->

				</li>
				<!-- /navitem -->

			</ul>
			<!-- /navlist -->

		</section>
		<!-- /navtable -->

	</body>

</html>
