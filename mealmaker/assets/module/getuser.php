<!-- 
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body> -->

		<style>
			/*  */
			div#container section.signup {display:none;}
			div#container section.signin {display:block;}
			div#container.newuser section.signup {display:block;}
			div#container.newuser section.signin {display:none;}
		</style>

		<!-- item -->
		<section class="item signin">

			<!-- form -->
			<div class="block form">

				<!-- head -->
				<h2 class="head">Sign in</h1>
				<!-- /head -->

				<!-- dataform -->
				<form class="biform dataform" method="post" action="./signin.php">

					<!-- field -->
					<div class="field">

						<!-- label -->
						<label class="label" for="userid">Email Address</label>
						<!-- /label -->

						<!-- datafield -->
						<input class="datafield" type="email" id="userid" name="emailaddress" placeholder="johnsmith@gmail.com" required>
						<!-- /datafield -->

					</div>
					<!-- /field -->

					<!-- field -->
					<div class="field">

						<!-- label -->
						<label class="label" for="password">Password</label>
						<!-- /label -->

						<!-- datafield -->
						<input class="datafield" type="password" id="password" name="password" placeholder="********" required>
						<!-- /datafield -->

					</div>
					<!-- /field -->

					<!-- act -->
					<div class="act">

						<!-- btn -->
						<button class="btn clear" type="reset">

							<!-- caption -->
							<span class="caption">Clear</span>
							<!-- /caption -->

							<!-- icon -->
							<svg class="icon bigx" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
							</svg>
							<!-- /icon -->

						</button>
						<!-- /btn -->

						<!-- btn -->
						<button class="btn send" type="submit">

							<!-- caption -->
							<span class="caption">Login</span>
							<!-- /caption -->

							<!-- icon -->
							<svg class="icon chevronright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
							</svg>
							<!-- /icon -->

						</button>
						<!-- /btn -->

					</div>
					<!-- /act -->

					<!-- textcopy -->
					<p class="textcopy">

						<!-- caption -->
						<span class="caption">New here?</span>
						<!-- /caption -->

						<!-- switchlink -->
						<a class="switchlink" href="javascript:void(0)" onclick="setNewUserMode(1)">Sign up</a>
						<!-- /switchlink -->

					</p>
					<!-- /textcopy -->

				</form>
				<!-- /dataform -->

			</div>
			<!-- /form -->

		</section>
		<!-- /item -->

		<!-- item -->
		<section class="item signup">

			<!-- form -->
			<div class="block form">

				<!-- head -->
				<h2 class="head">Sign up</h1>
				<!-- /head -->

				<!-- dataform -->
				<form class="biform dataform" method="post" action="./signup.php">

					<!-- field -->
					<div class="field">

						<!-- label -->
						<label class="label" for="parentname">Your Name</label>
						<!-- /label -->

						<!-- datafield -->
						<input class="datafield" type="text" id="parentname" name="parentname" placeholder="John Smith" required>
						<!-- /datafield -->

					</div>
					<!-- /field -->

					<!-- field -->
					<div class="field">

						<!-- label -->
						<label class="label" for="phonenumber">Phone Number</label>
						<!-- /label -->

						<!-- datafield -->
						<input class="datafield" type="text" id="phonenumber" name="phonenumber" placeholder="2134567890" required>
						<!-- /datafield -->

					</div>
					<!-- /field -->

					<!-- field -->
					<div class="field">

						<!-- label -->
						<label class="label" for="useridcreate">Email Address</label>
						<!-- /label -->

						<!-- datafield -->
						<input class="datafield" type="email" id="useridcreate" name="emailaddress" placeholder="johnsmith@gmail.com" required>
						<!-- /datafield -->

					</div>
					<!-- /field -->

					<!-- field -->
					<div class="field">

						<!-- label -->
						<label class="label" for="passwordcreate">Create Password</label>
						<!-- /label -->

						<!-- datafield -->
						<input class="datafield" type="password" id="passwordcreate" name="password" placeholder="********" required>
						<!-- /datafield -->

					</div>
					<!-- /field -->

					<!-- field -->
					<div class="field">

						<!-- label -->
						<label class="label" for="passwordconfirm">Confirm Password</label>
						<!-- /label -->

						<!-- datafield -->
						<input class="datafield" type="password" id="passwordconfirm" name="passwordconfirm" placeholder="********" required>
						<!-- /datafield -->

					</div>
					<!-- /field -->

					<!-- act -->
					<div class="act">

						<!-- btn -->
						<button class="btn clear" type="reset">

							<!-- caption -->
							<span class="caption">Clear</span>
							<!-- /caption -->

							<!-- icon -->
							<svg class="icon bigx" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
							</svg>
							<!-- /icon -->

						</button>
						<!-- /btn -->

						<!-- btn -->
						<button class="btn send" type="submit">

							<!-- caption -->
							<span class="caption">Continue</span>
							<!-- /caption -->

							<!-- icon -->
							<!-- <svg class="icon up arrowright" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
							</svg> -->
							<!-- /icon -->

							<!-- icon -->
							<svg class="icon chevronright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
							</svg>
							<!-- /icon -->

						</button>
						<!-- /btn -->

					</div>
					<!-- /act -->

					<!-- textcopy -->
					<p class="textcopy">

						<!-- caption -->
						<span class="caption">Already registered?</span>
						<!-- /caption -->

						<!-- switchlink -->
						<a class="switchlink" href="javascript:void(0)" onclick="setNewUserMode(0)">Sign in</a>
						<!-- /switchlink -->

					</p>
					<!-- /textcopy -->

				</form>
				<!-- /dataform -->

			</div>
			<!-- /form -->

		</section>
		<!-- /item -->

		<script type="text/javascript">

			// Set user mode: new user or existing user. 
			function setNewUserMode(newusermode) {

				// Get container. 
				let container = document.querySelector('div#container');

				// Set user mode: new user. 
				if(newusermode) container.classList.add('newuser');

				// Set user mode: existing user. 
				else container.classList.remove('newuser');
			}
		</script>
<!-- 
	</body>

</html> -->
