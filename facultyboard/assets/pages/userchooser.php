
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php

			// Check for login/register mode. 
			// $quickmode = true;
			$existingusermode = ($selectedviewid == 'login');
			// Define form title. 
			$formtitle = isset( $quickmode ) ? 'Auto-Login' : ( $existingusermode ? 'Existing User' : 'New User' );
		?>

		<?php include('./assets/module/message.php'); ?>

		<!-- user -->
		<section class="user float">

			<!-- head -->
			<div class="head">

				<!-- head -->
				<h2 class="head">

					<!-- caption -->
					<span class="caption"><?php print $formtitle; ?></span>
					<!-- /caption -->

				</h2>
				<!-- /head -->

			</div>
			<!-- /head -->

			<?php if( isset($quickmode) ): ?>

				<!-- autologin -->
				<form class="user crud" method="post" action="<?php print $selfurlbase; ?>">

					<!-- action -->
					<div class="action">

						<?php $databasetables['persons']['entrydata'] = getResultTableById('persons',0,0); ?>

						<!-- btnbox -->
						<div class="btnbox">

							<?php foreach($databasetables['persons']['entrydata'] as $person): ?>

								<!-- sendbtn -->
								<button class="sendbtn btn" type="submit" name="autologinuserid" value="<?php print $person['id']; ?>">

									<!-- caption -->
									<span class="caption"><?php print $person['username']; ?></span>
									<!-- /caption -->

								</button>
								<!-- /sendbtn -->

							<?php endforeach; ?>

						</div>
						<!-- /btnbox -->

					</div>
					<!-- /action -->

				</form>
				<!-- /autologin -->

			<?php else: ?>

				<?php if( $existingusermode ): ?>

					<!-- login -->
					<form class="user crud" method="post" action="<?php print $selfurlbase; ?>">

						<!-- fieldlist -->
						<ul class="fieldlist">

							<!-- field -->
							<li class="field">

								<?php if($easyusermode): ?>

									<!-- fieldinput -->
									<select class="fieldinput" name="userid">

										<!-- option -->
										<option value="">Select User</option>
										<!-- /option -->

										<?php $userslist = $databasetables['persons']['entrydata']; ?>

										<?php foreach($userslist as $user): ?>

											<!-- option -->
											<option value="<?php print $user['id']; ?>"><?php print $user['personname']; ?></option>
											<!-- /option -->

										<?php endforeach; ?>

									</select>
									<!-- /fieldinput -->

								<?php else: ?>

									<!-- label -->
									<label class="label" for="un">

										<!-- icon -->
										<svg class="icon person" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
											<!-- <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/> -->
											<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
										</svg>
										<!-- /icon -->

									</label>
									<!-- /label -->

									<!-- fieldinput -->
									<input class="fieldinput" id="un" type="text" name="username" placeholder="Username" value="" required>
									<!-- /fieldinput -->

								<?php endif; ?>

							</li>
							<!-- /field -->

							<?php if(!$easypassmode): ?>

								<!-- field -->
								<li class="field">

									<!-- label -->
									<label class="label" for="pw">

										<!-- icon -->
										<svg class="icon key" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
											<!-- <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/> -->
											<path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
											<path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
										</svg>
										<!-- /icon -->

									</label>
									<!-- /label -->

									<!-- fieldinput -->
									<input class="fieldinput" id="pw" type="password" name="password" placeholder="Password" value="" required>
									<!-- /fieldinput -->

								</li>
								<!-- /field -->

							<?php endif; ?>
							
						</ul>
						<!-- /fieldlist -->

						<!-- action -->
						<div class="action">

							<!-- sendbtn -->
							<button class="sendbtn btn" type="submit" name="login">

								<!-- caption -->
								<span class="caption">Sign in</span>
								<!-- /caption -->

							</button>
							<!-- /sendbtn -->

						</div>
						<!-- /action -->

					</form>
					<!-- /login -->

					<!-- switcher -->
					<div class="switcher">

						<!-- caption -->
						<span class="caption">New here?</span>
						<!-- /caption -->

						<!-- link -->
						<a class="link" href="./?view=register">Create an account</a>
						<!-- /link -->

					</div>
					<!-- /switcher -->

				<?php else: ?>

					<!-- register -->
					<form class="user crud" method="post" action="<?php print $selfurlbase; ?>">

						<!-- fieldlist -->
						<ul class="fieldlist">

							<?php $editorfields = $databasetables['persons']['editorfields']; ?>

							<?php foreach($editorfields as $field): ?>

								<?php if( isset($field['skipinregistration']) ) continue; ?>

								<?php

									// Define field attributes
									$fieldattr = $field['required']?' required':'';
								?>

								<!-- field -->
								<li class="field">

									<?php 
										// Get field id. 
										$fid = $field['fid'];
										// Get field type. 
										$ftype = $field['type'];
										// Get field title. 
										$fieldtitle = $field['fieldtitle'];
									?>

									<?php if($ftype=='select'): ?>

										<?php
											// Get id of referenced table. 
											$rtid = $field['capref']['tid'];
											// Get id of display field from referenced table. 
											$rtdfid = $field['capref']['fid'];
										?>

										<!-- fieldinput -->
										<select class="fieldinput" name="<?php print $fid; ?>">

											<!-- option -->
											<option value="">Select <?php print $fieldtitle; ?></option>
											<!-- /option -->

											<?php $entrieslist = $databasetables[$rtid]['entrydata']; ?>

											<?php foreach($entrieslist as $entry): ?>

												<!-- option -->
												<option value="<?php print $entry['id']; ?>"><?php print $entry[$rtdfid]; ?></option>
												<!-- /option -->

											<?php endforeach; ?>

										</select>
										<!-- /fieldinput -->

									<?php else: ?>

										<?php
											// Get field icon. 
											$fieldicontag = $field['fieldicon'] ?? '';
											$fieldiconfill = $databasetablesicons[$fieldicontag] ?? '';
										?>

										<!-- label -->
										<label class="label" for="<?php print $fid; ?>">
			
											<!-- icon -->
											<svg class="icon <?php print $fieldicontag; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
												<?php print $fieldiconfill; ?>
											</svg>
											<!-- /icon -->
			
										</label>
										<!-- /label -->

										<!-- fieldinput -->
										<input class="fieldinput" id="<?php print $fid; ?>" type="<?php print $ftype; ?>" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" value="" <?php print $fieldattr; ?>>
										<!-- /fieldinput -->

									<?php endif; ?>

								</li>
								<!-- /field -->

							<?php endforeach; ?>
							
						</ul>
						<!-- /fieldlist -->

						<!-- action -->
						<div class="action">

							<!-- sendbtn -->
							<button class="sendbtn btn" type="submit" name="login" value="register">

								<!-- caption -->
								<span class="caption">Sign up</span>
								<!-- /caption -->

							</button>
							<!-- /sendbtn -->

						</div>
						<!-- /action -->

					</form>
					<!-- /register -->

					<!-- switcher -->
					<div class="switcher c">

						<!-- caption -->
						<!-- <span class="caption">Already registered?</span> -->
						<span class="caption">Already have an account?</span>
						<!-- /caption -->

						<!-- link -->
						<a class="link" href="./?view=login">Log in here</a>
						<!-- /link -->

					</div>
					<!-- /switcher -->

				<?php endif; ?>

			<?php endif; ?>

		</section>
		<!-- /user -->

	</body>

</html>
