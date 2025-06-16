
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body>

		<!-- navbar -->
		<nav class="navbar">

			<!-- bin -->
			<div class="bin">

				<!-- togglebtn -->
				<a class="tm togglebtn btn" href="javascript:void(0)" title="Toggle table menu">

					<!-- icon -->
					<svg class="icon bars" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
					</svg>
					<!-- /icon -->

				</a>
				<!-- /togglebtn -->

				<!-- homebtn -->
				<!-- <a class="homebtn btn" href="./" title="Home"> -->
				<a class="homebtn btn" href="javascript:void(0)" title="Home" onclick="document.querySelector('div.queryarena').classList.toggle('open')">

					<!-- head -->
					<h1 class="head">

						<!-- icon -->
						<svg class="icon journals" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<?php print $databasetablesicons['bagel']; ?>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">Baba's Bagel</span>
						<!-- /caption -->

					</h1>
					<!-- /head -->

				</a>
				<!-- /homebtn -->

				<!-- togglebtn -->
				<a class="um togglebtn btn" href="javascript:void(0)" title="Toggle user menu">

					<!-- icon -->
					<svg class="icon personcircle" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
						<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
					</svg>
					<!-- /icon -->

					<!-- avatar -->
					<!-- <img class="avatar" src="./abcxyz.png" alt=""> -->
					<!-- /avatar -->

				</a>
				<!-- /togglebtn -->

				<!-- logoutbtn -->
				<a class="logoutbtn btn" href="./signout.php" title="Logout">

					<!-- caption -->
					<!-- <span class="caption">Logout</span> -->
					<!-- /caption -->

					<!-- icon -->
					<svg class="icon boxoutwardarrow" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
						<path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
					</svg>
					<!-- /icon -->

				</a>
				<!-- /logoutbtn -->

				<!-- tablemenu -->
				<div class="tablemenu navmenu">

					<!-- navlist -->
					<ul class="navlist tables">

						<!-- navitem -->
						<li class="navitem">

							<!-- navlink -->
							<a class="navlink" href="./" title="Home">

								<!-- icon -->
								<svg class="icon house" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<?php print $databasetablesicons['housebold']; ?>
								</svg>
								<!-- /icon -->

								<!-- caption -->
								<span class="caption">Home</span>
								<!-- /caption -->

							</a>
							<!-- /navlink -->

						</li>
						<!-- /navitem -->

						<?php foreach($databasetables as $tid=>$table): ?>

							<?php
								$currenttabletitle = $table['tabletitle'];
								$currenttableicontag = $table['tableicontag'];
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

				</div>
				<!-- /tablemenu -->

			</div>
			<!-- /bin -->

		</nav>
		<!-- /navbar -->

	</body>

</html>
