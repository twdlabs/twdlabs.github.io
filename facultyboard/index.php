
<?php 

	// Get functions to access server database. 
	require_once('./../sharedassets/script/config.php');
	// Get functions to access input and display output. 
	require_once('./../sharedassets/script/io.php');

	// Get database tables. 
	require_once('./assets/database.php');
	// Get functions to perform CRUD operations. 
	require_once('./assets/operation.php');
?>

<?php

	// Connect to server database. 
	$db = openDb('cis355issuecomments');

	// Perform crud operation from previous page. 
	// Check for crud operation. 
	checkForOps();

	// // Get entries for each database table. 
	// $persons = getResultTableById('persons');
	// $issues = getResultTableById('issues');
	// $comments = getResultTableById('comments');
?>

<?php

	// Check if any view selected. 
	$tableselected = isset( $_GET['tid'] );

	// Get id of selected table. 
	$selectedtableid = $tableselected ? $_GET['tid'] : null;

	// Check if data exists for selected table. 
	$tableexists = isset( $databasetables[$selectedtableid] );

	// Proceed if table data exists. 
	if($tableexists) {
	
		// Get title of selected table. 
		$selectedtabletitle = $databasetables[$selectedtableid]['tabletitle'];
	
		// Get form submit url. 
		$formsubmiturl = "?tid=$selectedtableid";
	
		// Get caption for single item. 
		$singlecaption = /* '' ||  */$databasetables[$selectedtableid]['singlecaption'];

		// Get editor fields. 
		$editorfields = $databasetables[$selectedtableid]['editorfields'];
	}
?>

<!DOCTYPE html>
<html>
	
	<head>
		<meta charset="UTF-8"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="./assets/6354674.png" rel="icon"/>
		<link href="./assets/6354674.png" rel="apple-touch-icon"/>
		<title>Faculty Board</title>

		<!-- Main Stylesheet -->
		<link href="./assets/style.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->
	</head>
	
	<body>

		<!-- #container -->
		<div id="container">

			<!-- navbar -->
			<nav class="navbar">

				<!-- bin -->
				<div class="bin">

					<!-- head -->
					<h1 class="head">
	
						<!-- icon -->
						<svg class="icon journals" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
							<path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
						</svg>
						<!-- /icon -->
						
						<!-- caption -->
						<span class="caption">Faculty Board</span>
						<!-- /caption -->
					
					</h1>
					<!-- /head -->
	
					<!-- navlist -->
					<ul class="navlist">
	
						<!-- navitem -->
						<li class="navitem">

							<!-- navlink -->
							<a class="navlink" href="?tid=persons">
	
								<!-- icon -->
								<svg class="icon personsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
									<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
								</svg>
								<!-- /icon -->

								<span class="caption">Faculty</span>

							</a>
							<!-- /navlink -->

						</li>
						<!-- /navitem -->
	
						<!-- navitem -->
						<li class="navitem">

							<!-- navlink -->
							<a class="navlink" href="?tid=issues">
	
								<!-- icon -->
								<svg class="icon journaltext" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
									<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
									<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
								</svg>
								<!-- /icon -->

								<span class="caption">Issues</span>

							</a>
							<!-- /navlink -->

						</li>
						<!-- /navitem -->
	
						<!-- navitem -->
						<li class="navitem">

							<!-- navlink -->
							<a class="navlink" href="?tid=comments">
	
								<!-- icon -->
								<!-- <svg class="icon chatbubble" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
								</svg> -->
								<!-- /icon -->
	
								<!-- icon -->
								<svg class="icon chatbubble" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
									<path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
								</svg>
								<!-- /icon -->

								<span class="caption">Comments</span>

							</a>
							<!-- /navlink -->

						</li>
						<!-- /navitem -->
	
					</ul>
					<!-- /navlist -->

				</div>
				<!-- /bin -->

			</nav>
			<!-- /navbar -->

			<?php if( $tableexists ): ?>

				<?php

					// Get data associated with selected table. 
					$selectedtable = $databasetables[$selectedtableid];
					// Save table entries for selected table. 
					$selectedtable['entries'] = getResultTableById($selectedtableid);

					// Go thru each reference table for selected table. 
					foreach($selectedtable['reftableids'] as $rtid) {

						// Save table rows for reference table. 
						$databasetables[$rtid]['entries'] = getResultTableById($rtid,false);
					}
				?>

				<!-- table -->
				<section class="table">

					<!-- head -->
					<h2 class="head">

						<!-- caption -->
						<span class="caption"><?php print $selectedtabletitle; ?></span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

					<!-- table -->
					<table class="table">

						<!-- head -->
						<thead class="head">

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<th class="cell">

									<!-- caption -->
									<span class="caption">ID</span>
									<!-- /caption -->
									
								</th>
								<!-- /cell -->

								<?php foreach($editorfields as $field): ?>

									<!-- cell -->
									<th class="cell">

										<!-- caption -->
										<span class="caption"><?php print $field['fieldtitle']; ?></span>
										<!-- /caption -->
										
									</th>
									<!-- /cell -->

								<?php endforeach; ?>

								<!-- cell -->
								<th class="cell">

									<!-- caption -->
									<span class="caption">Action</span>
									<!-- /caption -->
									
								</th>
								<!-- /cell -->

							</tr>
							<!-- /row -->
							
						</thead>
						<!-- /head -->

						<!-- body -->
						<tbody class="body">

							<?php foreach($selectedtable['entries'] as $tablerow): ?>

								<!-- row -->
								<tr class="row">

									<!-- cell -->
									<td class="cell">

										<!-- caption -->
										<span class="caption"><?php print $tablerow['id']; ?></span>
										<!-- /caption -->
										
									</td>
									<!-- /cell -->

									<?php foreach($editorfields as $field): ?>

										<?php 
											// Get field id. 
											$fid = isset($field['capref']['fid']) ? $field['capref']['fid'] : $field['fid'];
											// Get field value. 
											$value = $tablerow[$fid];
										?>

										<!-- cell -->
										<td class="cell">

											<!-- caption -->
											<span class="caption"><?php print $value ?></span>
											<!-- /caption -->
											
										</td>
										<!-- /cell -->

									<?php endforeach; ?>

									<!-- cell -->
									<td class="cell">

										<!-- update -->
										<form class="update crud" method="post" action="<?php print $formsubmiturl; ?>">

											<!-- parameter -->
											<input class="parameter" type="hidden" name="operation" value="update">
											<input class="parameter" type="hidden" name="tid" value="<?php print $selectedtableid; ?>">
											<input class="parameter" type="hidden" name="rid" value="<?php print $tablerow['id']; ?>">
											<!-- /parameter -->

											<!-- fieldlist -->
											<ul class="fieldlist">

												<?php foreach($editorfields as $field): ?>

													<!-- field -->
													<li class="field">

														<?php 
															// Get field id. 
															$fid = $field['fid'];
															// Get field type. 
															$ftype = $field['type'];
															// Get field value. 
															$fieldvalue = $tablerow[$fid];
														?>

														<?php if($ftype=='select'): ?>

															<?php 
																// Get id of caption reference table. 
																$rtid = $field['capref']['tid'];
																// Get id of field to display from reference table. 
																$ptfid = $field['capref']['fid'];
															?>

															<!-- fieldinput -->
															<select class="fieldinput" name="<?php print $fid; ?>" <?php print $field['required'] ? 'required' : ''; ?>>

																<!-- option -->
																<option value="">Select <?php print $databasetables[$rtid]['singlecaption']; ?></option>
																<!-- option -->

																<?php foreach($databasetables[$rtid]['entries'] as $rtablerow): ?>

																	<?php $selected = false; ?>
																	<?php $selected = $rtablerow['id']==$tablerow[$fid]; ?>

																	<!-- option -->
																	<option value="<?php print $rtablerow['id']; ?>" <?php print $selected?'selected':''; ?>><?php print $rtablerow[$ptfid]; ?></option>
																	<!-- option -->

																<?php endforeach; ?>

															</select>
															<!-- /fieldinput -->

														<?php else: ?>

															<?php
																// Get field title. 
																$fieldtitle = $field['fieldtitle'];
															?>

															<?php if($ftype=='textarea'): ?>
																
																<!-- fieldinput -->
																<textarea class="fieldinput" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" <?php print $field['required'] ? 'required' : ''; ?>><?php print $fieldvalue; ?></textarea>
																<!-- /fieldinput -->

															<?php else: ?>

																<!-- fieldinput -->
																<input class="fieldinput" type="<?php print $ftype; ?>" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" value="<?php print $fieldvalue; ?>" <?php print $field['required'] ? 'required' : ''; ?>>
																<!-- /fieldinput -->

															<?php endif; ?>

														<?php endif; ?>

													</li>
													<!-- /field -->

												<?php endforeach; ?>
												
											</ul>
											<!-- /fieldlist -->

											<!-- sendbtn -->
											<button class="sendbtn btn" type="submit">

												<!-- caption -->
												<span class="caption">Update <?php /* print $singlecaption; */ ?></span>
												<!-- /caption -->

											</button>
											<!-- /sendbtn -->

										</form>
										<!-- /update -->

										<!-- delete -->
										<form class="delete crud" method="post" action="<?php print $formsubmiturl; ?>">

											<!-- parameter -->
											<input class="parameter" type="hidden" name="operation" value="delete">
											<input class="parameter" type="hidden" name="tid" value="<?php print $selectedtableid; ?>">
											<input class="parameter" type="hidden" name="rid" value="<?php print $tablerow['id']; ?>">
											<!-- /parameter -->

											<!-- sendbtn -->
											<button class="sendbtn btn" type="submit">

												<!-- caption -->
												<span class="caption">Delete <?php /* print $singlecaption; */ ?></span>
												<!-- /caption -->

											</button>
											<!-- /sendbtn -->

										</form>
										<!-- /delete -->
										
									</td>
									<!-- /cell -->

									<!-- cell -->
									<td class="cell">

										<!-- caption -->
										<span class="caption test"><!-- <?php print json_encode($tablerow); ?> --></span>
										<!-- /caption -->
										
									</td>
									<!-- /cell -->
									
								</tr>
								<!-- /row -->

							<?php endforeach; ?>
							
						</tbody>
						<!-- /body -->

					</table>
					<!-- /table -->

				</section>
				<!-- /table -->

				<!-- editor -->
				<section class="editor">

					<!-- head -->
					<h2 class="head">

						<!-- caption -->
						<span class="caption">New <?php print $singlecaption; ?></span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

					<?php
						// // Save relevant data from database. 
						// $sql = $databasetables['persons']['awayquery'];
						// $databasetables['persons'] = sendDatabaseQuery($sql);
						// $sql = $databasetables['issues']['awayquery'];
						// $databasetables['issues'] = sendDatabaseQuery($sql);
					?>

					<!-- create -->
					<form class="create crud" method="post" action="<?php print $formsubmiturl; ?>">

						<!-- parameter -->
						<input class="parameter" type="hidden" name="operation" value="create">
						<input class="parameter" type="hidden" name="tid" value="<?php print $selectedtableid; ?>">
						<!-- /parameter -->

						<!-- fieldlist -->
						<ul class="fieldlist">

							<?php foreach($editorfields as $field): ?>

								<!-- field -->
								<li class="field">

									<?php 
										// Get field id. 
										$fid = $field['fid'];
										// Get field type. 
										$ftype = $field['type'];
									?>

									<?php if($ftype=='select'): ?>

										<?php
											// Get id of caption reference table. 
											$rtid = $field['capref']['tid'];
											// Get id of field to display from reference table. 
											$ptfid = $field['capref']['fid'];
										?>

										<!-- fieldinput -->
										<select class="fieldinput" name="<?php print $fid; ?>" <?php print $field['required'] ? 'required' : ''; ?>>

											<!-- option -->
											<option value="">Select <?php print $databasetables[$rtid]['singlecaption']; ?></option>
											<!-- option -->

											<?php foreach($databasetables[$rtid]['entries'] as $rtablerow): ?>

												<!-- option -->
												<option value="<?php print $rtablerow['id']; ?>"><?php print $rtablerow[$ptfid]; ?></option>
												<!-- option -->

											<?php endforeach; ?>

										</select>
										<!-- /fieldinput -->

									<?php else: ?>

										<?php
											// Get field title. 
											$fieldtitle = $field['fieldtitle'];
										?>

										<?php if($ftype=='textarea'): ?>
											
											<!-- fieldinput -->
											<textarea class="fieldinput" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" <?php print $field['required'] ? 'required' : ''; ?>></textarea>
											<!-- /fieldinput -->

										<?php else: ?>

											<!-- fieldinput -->
											<input class="fieldinput" type="<?php print $ftype; ?>" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" value="" <?php print $field['required'] ? 'required' : ''; ?>>
											<!-- /fieldinput -->

										<?php endif; ?>

									<?php endif; ?>

								</li>
								<!-- /field -->

							<?php endforeach; ?>
							
						</ul>
						<!-- /fieldlist -->

						<!-- sendbtn -->
						<button class="sendbtn btn" type="submit">

							<!-- caption -->
							<span class="caption">Add <?php print $singlecaption; ?></span>
							<!-- /caption -->

						</button>
						<!-- /sendbtn -->

					</form>
					<!-- /create -->

				</section>
				<!-- /editor -->

			<?php else: ?>

				<!-- nav -->
				<section class="nav">

					<!-- head -->
					<h2 class="head">

						<!-- caption -->
						<span class="caption">Select a table</span>
						<!-- /caption -->

					</h2>
					<!-- /head -->
	
					<!-- navlist -->
					<ul class="navlist">
	
						<!-- navitem -->
						<li class="navitem">

							<!-- navlink -->
							<a class="navlink" href="?tid=persons">
	
								<!-- icon -->
								<svg class="icon personsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
									<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
								</svg>
								<!-- /icon -->

								<span class="caption">Faculty</span>

							</a>
							<!-- /navlink -->

						</li>
						<!-- /navitem -->
	
						<!-- navitem -->
						<li class="navitem">

							<!-- navlink -->
							<a class="navlink" href="?tid=issues">
	
								<!-- icon -->
								<svg class="icon journaltext" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
									<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
									<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
								</svg>
								<!-- /icon -->

								<span class="caption">Issues</span>

							</a>
							<!-- /navlink -->

						</li>
						<!-- /navitem -->
	
						<!-- navitem -->
						<li class="navitem">

							<!-- navlink -->
							<a class="navlink" href="?tid=comments">
	
								<!-- icon -->
								<!-- <svg class="icon chatbubble" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
								</svg> -->
								<!-- /icon -->
	
								<!-- icon -->
								<svg class="icon chatbubble" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
									<path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
								</svg>
								<!-- /icon -->

								<span class="caption">Comments</span>

							</a>
							<!-- /navlink -->

						</li>
						<!-- /navitem -->
	
					</ul>
					<!-- /navlist -->

				</section>
				<!-- /nav -->

			<?php endif; ?>

		</div>
		<!-- /#container -->


		<!-- Database -->
		<!-- <script src="./database.js" type="text/javascript"></script> -->

		<!-- Main Script -->
		<!-- <script src="./template.js" type="text/javascript"></script> -->

		<script type="text/javascript">
			console.log('Post:',<?php print json_encode($_POST); ?>);
			console.log('Database tables:',<?php print json_encode($databasetables); ?>);
			console.log('Selected table (rows):',<?php print json_encode($selectedtable['entries']); ?>);
			console.log('tablerow:',<?php print json_encode($tablerow); ?>);
			console.log('rtablerow:',<?php print json_encode($rtablerow); ?>);
		</script>

	</body>

</html>

<?php

	// Disconnect server database. 
	closeDb($db);
?>
