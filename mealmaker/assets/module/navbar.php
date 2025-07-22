<!-- 
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body> -->

		<?php $userloggedin = isset( $_SESSION['pid'] ) || ( isset($validuserlogin) && $validuserlogin ); ?>

		<!-- navbar -->
		<nav class="navbar">

			<!-- bin -->
			<div class="bin">

				<!-- drawer -->
				<div class="drawer">

					<!-- homebtn -->
					<!-- <a class="homebtn btn" href="./" title="Home"> -->
					<a class="homebtn btn" href="javascript:void(0)" title="Home" <?=( $currentuserisadmin ? ' onclick="toggleQueryArena();" ' : '' )?>>

						<!-- head -->
						<h1 class="head">

							<!-- logo -->
							<img class="logo" src="./assets/images/bbicon.jpg" alt="BB" title="Baba's Bagel">
							<!-- /logo -->

							<!-- icon -->
							<svg class="icon bagel" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
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

					<?php if( $userloggedin ): ?>

						<!-- togglebtn -->
						<a class="tm togglebtn btn" href="javascript:void(0)" title="Toggle table menu">

							<!-- icon -->
							<svg class="icon bars" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
							</svg>
							<!-- /icon -->

						</a>
						<!-- /togglebtn -->

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

					<?php endif; ?>

				</div>
				<!-- /drawer -->

				<?php if( $userloggedin ): ?>

					<!-- drawer -->
					<div class="drawer">

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

								<?php foreach( $databasetablesnavbarorder as $currenttableid ): ?>

									<?php if( !isTableVisibleToUser($currenttableid) ) continue; ?>

									<?php $currentdatabasetable = $databasetables[$currenttableid]; ?>

									<?php
										$usinguserspecificquery = !$currentuserisoperator && isset( $databasetablequery[$currenttableid]['userspecificquery'] );
										$currentdatabasetabletitle = /* ( $usinguserspecificquery ? 'My ' : '' ) . */ $currentdatabasetable['tabletitle'];
										$currentdatabasetableicontag = $currentdatabasetable['tableicontag'];
									?>

									<!-- navitem -->
									<li class="navitem">

										<!-- navlink -->
										<a class="navlink" href="./?view=<?php print $currenttableid; ?>" title="<?php print $currentdatabasetabletitle; ?>">

											<!-- icon -->
											<svg class="icon <?php print $currentdatabasetableicontag; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
												<?php print $databasetablesicons[ $currentdatabasetableicontag ]; ?>
											</svg>
											<!-- /icon -->

											<!-- caption -->
											<span class="caption"><?php print $currentdatabasetabletitle; ?></span>
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

						<!-- usermenu -->
						<div class="usermenu navmenu">

							<!-- profile -->
							<ul class="profile">

								<!-- profileitem -->
								<li class="profileitem">

									<!-- name -->
									<span class="name">Name</span>
									<!-- /name -->

									<!-- value -->
									<span class="value"><?php print $_SESSION['name']; ?></span>
									<!-- /value -->

								</li>
								<!-- /profileitem -->

								<!-- profileitem -->
								<li class="profileitem">

									<!-- name -->
									<span class="name">E-mail</span>
									<!-- /name -->

									<!-- value -->
									<span class="value"><?php print $_SESSION['email']; ?></span>
									<!-- /value -->

								</li>
								<!-- /profileitem -->

								<!-- profileitem -->
								<li class="profileitem">

									<!-- name -->
									<span class="name">Last Login</span>
									<!-- /name -->

									<!-- value -->
									<span class="value"><?php print $_SESSION['lastlogin']; ?></span>
									<!-- /value -->

								</li>
								<!-- /profileitem -->

							</ul>
							<!-- /profile -->

							<!-- logoutbtn -->
							<a class="logoutbtn btn" href="./signout.php" title="Sign out">

								<!-- icon -->
								<svg class="icon boxoutwardarrow" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
									<path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
								</svg>
								<!-- /icon -->

								<!-- caption -->
								<span class="caption">Sign out</span>
								<!-- /caption -->

							</a>
							<!-- /logoutbtn -->

						</div>
						<!-- /usermenu -->

					</div>
					<!-- /drawer -->

				<?php endif; ?>

			</div>
			<!-- /bin -->

		</nav>
		<!-- /navbar -->
<!-- 
	</body>

</html> -->
