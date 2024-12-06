
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php if( $currentuserprofile ): ?>

			<?php $personname = $currentuserprofile['personname'] ?? ''; ?>

			<!-- welcome -->
			<section class="welcome">

				<!-- head -->
				<div class="headbar">

					<?php if( !$justloggedout ): ?>

						<!-- head -->
						<h2 class="headline">

							<!-- caption -->
							<span class="caption">Hello<?php print $personname ? ", $personname" : ''; ?></span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- textcopy -->
						<p class="textcopy">

							<?php if( isset( $currentuserprofile['lastlogin'] ) ): ?>

								<!-- caption -->
								<span class="caption">Last logged in: <?php print $currentuserprofile['lastlogin']; ?></span>
								<!-- /caption -->

							<?php else: ?>

								<!-- caption -->
								<span class="caption">Welcome to the Faculty Board platform!</span>
								<!-- /caption -->

							<?php endif; ?>

						</p>
						<!-- /textcopy -->

					<?php else: ?>

						<!-- head -->
						<h2 class="headline">

							<!-- caption -->
							<span class="caption">Till next time<?php print $personname ? ", $personname" : ''; ?>.</span>
							<!-- /caption -->

						</h2>
						<!-- /head -->

						<!-- textcopy -->
						<p class="textcopy">

							<!-- caption -->
							<span class="caption">See you later!</span>
							<!-- /caption -->

						</p>
						<!-- /textcopy -->

					<?php endif; ?>

				</div>
				<!-- /head -->

			</section>
			<!-- /welcome -->

		<?php endif; ?>

		<!-- splash -->
		<section class="splash <?php print ( $currentuserprofile ) ? '' : 'float'; ?>">

			<!-- head -->
			<div class="headbar">

				<!-- head -->
				<h2 class="headline">

					<!-- caption -->
					<span class="caption">Faculty Board</span>
					<!-- /caption -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

			<!-- enterlink -->
			<a class="enterlink" href="./?view=home">

				<!-- logo -->
				<img class="logo" src="./assets/image/6354674.png" alt="">
				<!-- /logo -->
				
			</a>
			<!-- /enterlink -->

			<!-- usernavlist -->
			<ul class="usernavlist">

				<?php if( $currentuserprofile && !$justloggedout ): ?>

					<!-- usernavitem -->
					<li class="usernavitem">

						<!-- usernavlink -->
						<a class="usernavlink pr" href="./?view=home">Enter</a>
						<!-- /usernavlink -->

					</li>
					<!-- /usernavitem -->

				<?php else: ?>

					<!-- usernavitem -->
					<li class="usernavitem">

						<!-- usernavlink -->
						<a class="usernavlink pr" href="./?view=login">Login</a>
						<!-- /usernavlink -->

					</li>
					<!-- /usernavitem -->

					<!-- usernavitem -->
					<li class="usernavitem">

						<!-- usernavlink -->
						<a class="usernavlink" href="./?view=register">Register</a>
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
