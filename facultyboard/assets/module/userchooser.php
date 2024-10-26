
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php

			// Check for login/register mode. 
			$newusermode = ($selectedviewid == 'register');

			// 
			$loginreceived = isset($_POST['login']);
		?>

		<!-- user -->
		<section class="user center">

			<!-- head -->
			<div class="head">

				<!-- head -->
				<h2 class="head">

					<?php $formtitle = $newusermode ? 'New User' : 'Existing User'; ?>

					<!-- caption -->
					<span class="caption"><?php print $formtitle; ?></span>
					<!-- /caption -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

			<!-- xyz -->
			<form class="xyz crud" method="post" action="">

				<?php  ?>
				<?php $successfullogin = true; ?>

				<!-- msgcenter -->
				<div class="msgcenter">

					<?php if(false): ?>

						<!-- msg -->
						<div class="msg">Xyz</div>
						<!-- /msg -->

					<?php endif; ?>

					<?php if($successfullogin): ?>

						<!-- msg -->
						<!-- <div class="msg g">Login successful</div> -->
						<!-- /msg -->

					<?php else: ?>

						<!-- msg -->
						<div class="msg r">Invalid credentials</div>
						<!-- /msg -->

					<?php endif; ?>

				</div>
				<!-- /msgcenter -->

			</form>
			<!-- /xyz -->

			<?php if($newusermode): ?>

				<!-- create -->
				<form class="create crud" method="post" action="">

					<!-- msgcenter -->
					<div class="msgcenter">

						<?php if( $loginreceived && !$successfullogin ): ?>

							<!-- msg -->
							<div class="msg r">Invalid credentials</div>
							<!-- /msg -->

						<?php endif; ?>

					</div>
					<!-- /msgcenter -->

					<!-- fieldlist -->
					<ul class="fieldlist">

						<!-- field -->
						<li class="field">
							
							<!-- fieldinput -->
							<!-- <input class="fieldinput" type="text" name="personid" placeholder="Person" value=""> -->
							<select class="fieldinput" name="personid" required>

								<!-- option -->
								<option value="">Select Person</option>
								<!-- /option -->

								<?php foreach($databasetables['persons']['entries'] as $person): ?>

									<?php
										$id = $person['id'];
										$name = $person['personname'];
									?>

									<!-- option -->
									<option value="<?php print $id; ?>"><?php print $name; ?></option>
									<!-- /option -->

								<?php endforeach; ?>

							</select>
							<!-- /fieldinput -->

						</li>
						<!-- /field -->

						<!-- field -->
						<li class="field">

							<!-- fieldinput -->
							<input class="fieldinput" type="password" name="passwd" placeholder="Create Password" value="" required>
							<!-- /fieldinput -->

						</li>
						<!-- /field -->

						<!-- field -->
						<li class="field">

							<!-- fieldinput -->
							<input class="fieldinput" type="password" name="passwdrpt" placeholder="Repeat Password" value="" required>
							<!-- /fieldinput -->

						</li>
						<!-- /field -->
						
					</ul>
					<!-- /fieldlist -->

					<!-- sendbtn -->
					<button class="sendbtn btn" type="submit" name="register">

						<!-- caption -->
						<span class="caption">Sign up</span>
						<!-- /caption -->

					</button>
					<!-- /sendbtn -->

					<!-- nav -->
					<div class="nav">

						<!-- caption -->
						<!-- <span class="caption">Already registered?</span> -->
						<span class="caption">Already have an account?</span>
						<!-- /caption -->

						<!-- link -->
						<a href="?view=login" class="link">Log in here</a>
						<!-- /link -->

					</div>
					<!-- /nav -->

				</form>
				<!-- /create -->

			<?php else: ?>

				<!-- read -->
				<form class="read crud" method="post" action="">

					<!-- msgcenter -->
					<div class="msgcenter">

						<?php if( $loginreceived && !$successfullogin ): ?>

							<!-- msg -->
							<div class="msg r">Invalid credentials</div>
							<!-- /msg -->

						<?php endif; ?>

					</div>
					<!-- /msgcenter -->

					<!-- fieldlist -->
					<ul class="fieldlist">

						<!-- field -->
						<li class="field">
							
							<!-- fieldinput -->
							<!-- <input class="fieldinput" type="text" name="personid" placeholder="Person" value=""> -->
							<select class="fieldinput" name="userid" required>
								<!-- option -->
								<option value="">Select User</option>
								<!-- /option -->

								<?php $userslist = $databasetables['admins']['entries']; ?>
								<?php $userslist = $databasetables['persons']['entries']; ?>

								<?php foreach($userslist as $user): ?>

									<?php
										$id = $user['id'];
										$name = $user['personname'];
									?>

									<!-- option -->
									<option value="<?php print $id; ?>"><?php print $name; ?></option>
									<!-- /option -->

								<?php endforeach; ?>

							</select>
							<!-- /fieldinput -->

						</li>
						<!-- /field -->

						<!-- field -->
						<li class="field">

							<!-- fieldinput -->
							<input class="fieldinput" type="password" name="password" placeholder="Password" value="" required>
							<!-- /fieldinput -->

						</li>
						<!-- /field -->
						
					</ul>
					<!-- /fieldlist -->

					<!-- sendbtn -->
					<button class="sendbtn btn" type="submit" name="login">

						<!-- caption -->
						<span class="caption">Sign in</span>
						<!-- /caption -->

					</button>
					<!-- /sendbtn -->

					<!-- nav -->
					<div class="nav">

						<!-- caption -->
						<span class="caption">New here?</span>
						<!-- /caption -->

						<!-- link -->
						<a href="?view=register" class="link">Create an account</a>
						<!-- /link -->

					</div>
					<!-- /nav -->

				</form>
				<!-- /read -->

			<?php endif; ?>

		</section>
		<!-- /user -->

	</body>

</html>
