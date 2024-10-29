

<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<!-- navbar -->
		<nav class="navbar">

			<!-- bin -->
			<div class="bin">

				<?php if($currentuserdata): ?>

					<!-- togglebtn -->
					<a class="tm togglebtn btn" href="javascript:void(0)" title="Toggle table menu">

						<!-- icon -->
						<svg class="icon bars" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
						</svg>
						<!-- /icon -->

					</a>
					<!-- /togglebtn -->

				<?php endif; ?>

				<!-- homebtn -->
				<a class="homebtn btn" href="./" title="Home">

					<!-- head -->
					<h1 class="head">
	
						<!-- icon -->
						<svg class="icon journals" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<?php print $databasetablesicons['journals']; ?>
						</svg>
						<!-- /icon -->
						
						<!-- caption -->
						<span class="caption">Faculty Board</span>
						<!-- /caption -->
					
					</h1>
					<!-- /head -->

				</a>
				<!-- /homebtn -->

				<!-- togglebtn -->
				<a class="um togglebtn btn" href="javascript:void(0)" title="Toggle user menu">

					<?php if($currentuserdata && isset($currentuserdata['genderid']) ): ?>

						<?php
							$gid = $currentuserdata['genderid'];
							$filename = [
								'1'=>'avatar-m.png',
								'2'=>'avatar-f.png',
							][$gid];
						?>

						<!-- profilepic -->
						<img class="profilepic" src="./assets/image/<?php print $filename; ?>" alt="">
						<!-- /profilepic -->

					<?php else: ?>

						<!-- icon -->
						<svg class="icon personcircle" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
							<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<!-- <span class="caption">Profile</span> -->
						<!-- /caption -->

					<?php endif; ?>

				</a>
				<!-- /togglebtn -->

				<!-- tablemenu -->
				<div class="tablemenu navmenu">

					<!-- navlist -->
					<ul class="navlist tables">

						<?php if($currentuserdata): ?>

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

						<?php endif; ?>

					</ul>
					<!-- /navlist -->

				</div>
				<!-- /tablemenu -->

				<!-- usermenu -->
				<div class="usermenu navmenu">

					<?php if($currentuserdata): ?>

						<!-- profile -->
						<div class="profile">

							<?php

								// Display current user data. 
								// print json_encode($currentuserdata);

								// Get name of current user. 
								$name = $currentuserdata['personname'] ?? '[none]';
								// Get username of current user. 
								$username = $currentuserdata['username'] ?? '[none]';
							?>

							<!-- textcopy -->
							<p class="textcopy">
								<span class="name">Name:</span>
								<span class="value"><?php print $name; ?></span>
							</p>
							<!-- /textcopy -->

							<!-- textcopy -->
							<p class="textcopy">
								<span class="name">E-mail:</span>
								<span class="value"><?php print $username; ?>@twdlabs.io</span>
							</p>
							<!-- /textcopy -->

						</div>
						<!-- /profile -->

					<?php endif; ?>

					<!-- navlist -->
					<ul class="navlist user">

						<?php if($currentuserdata): ?>

							<!-- navitem -->
							<li class="navitem">

								<!-- navlink -->
								<a class="navlink" href="?view=settings" title="Settings">

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

							<!-- navitem -->
							<li class="navitem">

								<!-- navlink -->
								<a class="navlink" href="?logout" title="Sign out">

									<!-- icon -->
									<svg class="icon closeddoor" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
										<path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z"/>
										<path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
									</svg>
									<!-- /icon -->

									<!-- caption -->
									<span class="caption">Sign out</span>
									<!-- /caption -->

								</a>
								<!-- /navlink -->

							</li>
							<!-- /navitem -->

						<?php else: ?>

							<!-- navitem -->
							<li class="navitem">

								<!-- navlink -->
								<a class="navlink" href="?view=login" title="Sign in">

									<!-- icon -->
									<svg class="icon arrowin" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
										<path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
									</svg>
									<!-- /icon -->

									<!-- caption -->
									<span class="caption">Sign in</span>
									<!-- /caption -->

								</a>
								<!-- /navlink -->

							</li>
							<!-- /navitem -->

							<!-- navitem -->
							<li class="navitem">

								<!-- navlink -->
								<a class="navlink" href="?view=register" title="Sign up">

									<!-- icon -->
									<svg class="icon personplus" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
										<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
										<path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
									</svg>
									<!-- /icon -->

									<!-- caption -->
									<span class="caption">Sign up</span>
									<!-- /caption -->

								</a>
								<!-- /navlink -->

							</li>
							<!-- /navitem -->

						<?php endif; ?>

					</ul>
					<!-- /navlist -->

				</div>
				<!-- /usermenu -->

			</div>
			<!-- /bin -->

		</nav>
		<!-- /navbar -->

	</body>

</html>
