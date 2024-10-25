
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php 

			// Check for login mode. 
			$newusermode = isset( $_GET['view'] ) && ($_GET['view']=='register');
		?>

		<?php if($newusermode): ?>

			<!-- register -->
			<section class="register user">

				<!-- head -->
				<div class="head">

					<!-- head -->
					<h2 class="head">

						<!-- caption -->
						<span class="caption">New User</span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

				</div>
				<!-- /head -->

				<!-- register -->
				<form class="register create crud" method="post" action="./">

					<!-- fieldlist -->
					<ul class="fieldlist">

						<!-- field -->
						<li class="field">
							
							<!-- fieldinput -->
							<!-- <input class="fieldinput" type="text" name="personid" placeholder="Person" value=""> -->
							<select class="fieldinput" name="personid" required>
								<option value="">Select Person</option>
								<?php foreach($databasetables['persons']['entries'] as $person): ?>
									<option value="<?php print $person['id']; ?>"><?php print $person['personname']; ?></option>
								<?php endforeach; ?>
							</select>
							<!-- /fieldinput -->

						</li>
						<!-- /field -->

						<!-- field -->
						<li class="field">

							<!-- fieldinput -->
							<input class="fieldinput" type="password" name="passwd" placeholder="Password" value="" required>
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
						<span class="caption">Submit</span>
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
				<!-- /register -->

			</section>
			<!-- /register -->

		<?php else: ?>

			<!-- login -->
			<section class="login user">

				<!-- head -->
				<div class="head">

					<!-- head -->
					<h2 class="head">

						<!-- caption -->
						<span class="caption">Existing User</span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

				</div>
				<!-- /head -->

				<!-- login -->
				<form class="login read crud" method="post" action="./">

					<!-- msg -->
					<!-- <div class="msg">Xyz</div> -->
					<!-- /msg -->

					<!-- msg -->
					<!-- <div class="msg g">Login successful</div> -->
					<!-- /msg -->

					<!-- msg -->
					<!-- <div class="msg r">Invalid user selected</div> -->
					<!-- /msg -->

					<!-- fieldlist -->
					<ul class="fieldlist">

						<!-- field -->
						<li class="field">
							
							<!-- fieldinput -->
							<!-- <input class="fieldinput" type="text" name="personid" placeholder="Person" value=""> -->
							<select class="fieldinput" name="userid" required>
								<option value="">Select User</option>
								<?php $userslist = $databasetables['admins']['entries']; ?>
								<?php $userslist = $databasetables['persons']['entries']; ?>
								<?php foreach($userslist as $user): ?>
									<option value="<?php print $user['id']; ?>"><?php print $user['personname']; ?></option>
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
				<!-- /login -->

			</section>
			<!-- /login -->

		<?php endif; ?>

	</body>

</html>
