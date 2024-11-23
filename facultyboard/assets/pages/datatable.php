
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php

			// Check if entry selected for details. 
			$gotentryselection = isset( $_GET['eid'] );
			// Proceed if entry selected for details. 
			if( $gotentryselection ) {

				// Get id of selected entry. 
				$tableid = $selectedviewid;
				$entryid = $_GET['eid'];

				// Check if valid entry selected. 
				foreach( $databasetables[$tableid]['entrydata'] as $tablerow ) {

					// Check if entry found. 
					$entryfound = ( $tablerow['id'] == $entryid );

					// 
					if($entryfound) $selectedentry = $tablerow;
				}
			}

			// Proceed if entry selected for details. 
			if( false ) {

				// Get id of selected entry. 
				$tableid = cleanInputForQuerySimple( $selectedviewid );
				$entryid = cleanInputForQuery( $_GET['eid'] );

				// Check if valid entry selected. 
				// $querybase = $databasetables[$tableid]['detaildataquery'];
				// $sql = " $querybase WHERE (p.id=$entryid) ";
				$sql = " SELECT * FROM $tableid WHERE (id=$entryid) ";

				// Send database query. 
				$entryqueryresults = sendDatabaseQuery($sql,1)['queryresults'];
				$gotsomeentrydetails = isset( $entryqueryresults[0] );
			}
		?>

		<?php include('./assets/module/message.php'); ?>

		<?php if( isset( $selectedentry ) ): ?>

			<!-- detailtable -->
			<section class="detailtable">

				<!-- detaillist -->
				<ul class="detaillist">

					<!-- <?php foreach( $entryqueryresults as $tablerow ): ?> -->
					<!-- <?php endforeach; ?> -->

					<?php /* foreach( $selectedtable['entrydata'] as $tablerow ): */ ?>

						<!-- detailitem -->
						<li class="detailitem">

							<!-- detailcard -->
							<div class="detailcard">

								<!-- <?php print json_encode($selectedentry); ?> -->

								<?php foreach($displayfields as $field): ?>

									<?php 
										// Get field id (from detailed query results). 
										$fid = $field['fid'];
										// Get field type. 
										$fieldtype = $field['fieldtype'] ?? 'text';
									?>

									<?php if( $fieldtype=='image' ): ?>

										<!-- picture -->
										<img class="picture" src="./assets/image/<?php print $selectedentry[$fid]; ?>">
										<!-- /picture -->

									<?php else: ?>

										<!-- field -->
										<div class="field">

											<!-- key -->
											<span class="key"><?php print $field['fieldtitle'] ?></span>
											<!-- /key -->

											<!-- caption -->
											<span class="caption"><?php print $selectedentry[$fid]; ?></span>
											<!-- /caption -->

										</div>
										<!-- /field -->

									<?php endif; ?>

								<?php endforeach; ?>

							</div>
							<!-- /detailcard -->

						</li>
						<!-- /detailitem -->

					<?php /* endforeach; */ ?>

				</ul>
				<!-- /detaillist -->

			</section>
			<!-- /detailtable -->

		<?php endif; ?>

		<!-- datatable -->
		<section class="datatable">

			<!-- head -->
			<div class="head f">

				<!-- backbtn -->
				<button class="backbtn btn" onclick="window.location='./?view=home';">

					<!-- icon -->
					<svg class="icon arrowleft" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Back</span>
					<!-- /caption -->

				</button>
				<!-- /backbtn -->

				<!-- head -->
				<h2 class="head">

					<!-- selflink -->
					<a class="selflink" href="<?php print $selfurl; ?>">

						<!-- icon -->
						<svg class="icon <?php print $tableicontag; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<?php print $databasetablesicons[ $tableicontag ]; ?>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption"><?php print $tabletitle; ?></span>
						<!-- /caption -->
						
					</a>
					<!-- /selflink -->

				</h2>
				<!-- /head -->

				<!-- newbtn -->
				<button class="newbtn btn" onclick="toggleEntryComposer()" <?php print $iscurrentuseradmin ? '' : 'disabled'; ?>>

					<!-- icon -->
					<svg class="icon plus" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">New</span>
					<!-- /caption -->

				</button>
				<!-- /newbtn -->

			</div>
			<!-- /head -->

			<!-- scroller -->
			<div class="scroller">

				<!-- table -->
				<table class="table">

					<!-- head -->
					<thead class="head">

						<!-- row -->
						<tr class="row">

							<?php foreach($displayfields as $field): ?>

								<?php if(  isset( $field['tablevisible'] ) && $field['tablevisible']  ): ?>

									<!-- cell -->
									<th class="cell">

										<!-- caption -->
										<span class="caption"><?php print $field['fieldtitle']; ?></span>
										<!-- /caption -->
										
									</th>
									<!-- /cell -->

								<?php endif; ?>

							<?php endforeach; ?>

							<?php if( $iscurrentuseradmin ): ?>

								<!-- cell -->
								<th class="cell">

									<!-- caption -->
									<span class="caption">Admin</span>
									<!-- /caption -->
									
								</th>
								<!-- /cell -->

							<?php endif; ?>

						</tr>
						<!-- /row -->
						
					</thead>
					<!-- /head -->

					<!-- body -->
					<tbody class="body">

						<?php if( empty( $selectedtable['entrydata'] ) ): ?>

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<td class="cell c" colspan="<?php print sizeof($displayfields)+1; ?>">

									<!-- caption -->
									<span class="caption">Nothing to show here</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->
								
							</tr>
							<!-- /row -->

						<?php else: ?>

							<?php foreach( $selectedtable['entrydata'] as $tablerow ): ?>

								<!-- <?php print json_encode($tablerow); ?> -->

								<!-- row -->
								<tr class="row" onclick="window.location='./';">

									<?php foreach($displayfields as $field): ?>

										<?php 

											// Get field id (from detailed query results). 
											$fid = $field['fid'];
											// Get field type. 
											$fieldtype = $field['fieldtype'] ?? 'text';
										?>

										<?php if(  isset( $field['tablevisible'] ) && $field['tablevisible']  ): ?>

											<!-- cell -->
											<td class="cell">

												<!-- <?php print json_encode($fieldtype); ?> -->

												<?php if($fieldtype=='image'): ?>

													<!-- picture -->
													<img class="picture" src="./assets/image/<?php print $tablerow[$fid]; ?>">
													<!-- /picture -->

												<?php else: ?>

													<!-- caption -->
													<span class="caption"><?php print $tablerow[$fid]; ?></span>
													<!-- /caption -->

												<?php endif; ?>
												
											</td>
											<!-- /cell -->

										<?php endif; ?>

									<?php endforeach; ?>

									<?php if( $iscurrentuseradmin ): ?>

										<?php $entryid = $tablerow['id']; ?>

										<!-- cell -->
										<td class="cell">

											<!-- editbtn -->
											<button class="editbtn btn" onclick="toggleEntryEditor(this)" title="<?php print $entryid; ?>" data-entryid="<?php print $entryid; ?>">

												<!-- icon -->
												<svg class="icon penpad" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
													<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
													<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
												</svg>
												<!-- /icon -->

												<!-- caption -->
												<span class="caption">Edit</span>
												<!-- /caption -->

											</button>
											<!-- /editbtn -->

											<section class="editor float" id="id<?php print $entryid; ?>">

												<!-- head -->
												<div class="head f">

													<!-- head -->
													<h2 class="head">

														<!-- caption -->
														<span class="caption">Edit <?php print $singlecaption; ?></span>
														<!-- /caption -->

													</h2>
													<!-- /head -->

													<!-- closebtn -->
													<button class="closebtn btn" onclick="closeEntryEditors()">

														<!-- icon -->
														<svg class="icon xbig" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
															<path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
														</svg>
														<!-- /icon -->

														<!-- caption -->
														<span class="caption">Close</span>
														<!-- /caption -->

													</button>
													<!-- /closebtn -->

												</div>
												<!-- /head -->

												<!-- update -->
												<form class="update crud" method="post" action="<?php print $selfurl; ?>">

													<!-- parameter -->
													<input class="parameter" type="hidden" name="optypeid" value="update">
													<input class="parameter" type="hidden" name="tableid" value="<?php print $selectedviewid; ?>">
													<input class="parameter" type="hidden" name="tablerowid" value="<?php print $tablerow['id']; ?>">
													<!-- /parameter -->

													<!-- fieldlist -->
													<ul class="fieldlist">

														<?php foreach($editorfields as $field): ?>

															<?php /* if( ! $field['editable'] ) continue; */ ?>

															<?php 
																// Get field id. 
																$fid = $field['fid'];
																// Get field type. 
																$fieldtype = $field['type'];
																// Get field value. 
																$fieldvalue = $tablerow[$fid] ?? '';
																// Define field attributes. 
																$fieldattr = ( $field['required'] ? ' required' : '') . ( $field['editable'] ? '' : ' disabled' );
															?>

															<!-- field -->
															<li class="field">

																<?php if($fieldtype=='select'): ?>

																	<?php 
																		// Get id of caption reference table. 
																		$rtid = $field['capref']['tid'];
																		// Get id of field to display from reference table. 
																		$ptfid = $field['capref']['fid'];
																	?>

																	<!-- fieldinput -->
																	<select class="fieldinput" name="<?php print $fid; ?>" <?php print $fieldattr; ?>>

																		<!-- option -->
																		<option value="">Select <?php print $databasetables[$rtid]['singlecaption']; ?></option>
																		<!-- option -->

																		<?php foreach($databasetables[$rtid]['entrydata'] as $rtablerow): ?>

																			<?php $selected = false; ?>
																			<?php $selected = ( $rtablerow['id'] == $tablerow[$fid] ); ?>
																			<?php "selected: $selected"; ?>

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

																	<?php if($fieldtype=='textarea'): ?>
																		
																		<!-- fieldinput -->
																		<textarea class="fieldinput" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" <?php print $fieldattr; ?>><?php print $fieldvalue; ?></textarea>
																		<!-- /fieldinput -->

																	<?php else: ?>

																		<!-- fieldinput -->
																		<input class="fieldinput" type="<?php print $fieldtype; ?>" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" value="<?php print $fieldvalue; ?>" <?php print $fieldattr; ?>>
																		<!-- /fieldinput -->

																	<?php endif; ?>

																<?php endif; ?>

															</li>
															<!-- /field -->

														<?php endforeach; ?>
														
													</ul>
													<!-- /fieldlist -->

													<!-- action -->
													<div class="action">

														<!-- sendbtn -->
														<button class="sendbtn btn" type="submit">

															<!-- caption -->
															<span class="caption">Update <?php print $singlecaption; ?></span>
															<!-- /caption -->

														</button>
														<!-- /sendbtn -->

													</div>
													<!-- /action -->

												</form>
												<!-- /update -->

												<!-- delete -->
												<form class="delete crud" method="post" action="<?php print $selfurl; ?>">

													<!-- parameter -->
													<input class="parameter" type="hidden" name="optypeid" value="delete">
													<input class="parameter" type="hidden" name="tableid" value="<?php print $selectedviewid; ?>">
													<input class="parameter" type="hidden" name="tablerowid" value="<?php print $tablerow['id']; ?>">
													<!-- /parameter -->

													<!-- action -->
													<div class="action">

														<!-- sendbtn -->
														<button class="sendbtn btn" type="submit">

															<!-- caption -->
															<span class="caption">Delete <?php print $singlecaption; ?></span>
															<!-- /caption -->

														</button>
														<!-- /sendbtn -->

													</div>
													<!-- /action -->

												</form>
												<!-- /delete -->
												
											</section>
											
										</td>
										<!-- /cell -->

									<?php endif; ?>
									
								</tr>
								<!-- /row -->

							<?php endforeach; ?>

						<?php endif; ?>

					</tbody>
					<!-- /body -->

				</table>
				<!-- /table -->

			</div>
			<!-- /scroller -->

		</section>
		<!-- /datatable -->

		<?php if( $iscurrentuseradmin ): ?>

			<!-- composer -->
			<section class="composer float">

				<!-- head -->
				<div class="head f">

					<!-- head -->
					<h2 class="head">

						<!-- caption -->
						<span class="caption">New <?php print $singlecaption; ?></span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

					<!-- closebtn -->
					<button class="closebtn btn" onclick="toggleEntryComposer()">

						<!-- icon -->
						<svg class="icon xbig" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
							<path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">Close</span>
						<!-- /caption -->

					</button>
					<!-- /closebtn -->

				</div>
				<!-- /head -->

				<!-- create -->
				<form class="create crud" method="post" action="<?php print $selfurl; ?>">

					<!-- parameter -->
					<input class="parameter" type="hidden" name="optypeid" value="create">
					<input class="parameter" type="hidden" name="tableid" value="<?php print $selectedviewid; ?>">
					<!-- /parameter -->

					<!-- fieldlist -->
					<ul class="fieldlist">

						<?php foreach($editorfields as $field): ?>

							<?php 
								// Get field id. 
								$fid = $field['fid'];
								// Get field type. 
								$fieldtype = $field['type'];
								// Define field attributes. 
								$fieldattr = $field['required']?' required':'';
							?>

							<!-- field -->
							<li class="field">

								<?php if($fieldtype=='select'): ?>

									<?php
										// Get id of caption reference table. 
										$rtid = $field['capref']['tid'];
										// Get id of field to display from reference table. 
										$ptfid = $field['capref']['fid'];
									?>

									<!-- fieldinput -->
									<select class="fieldinput" name="<?php print $fid; ?>" <?php print $fieldattr; ?>>
										<?php print json_encode( $databasetables[$rtid]['entrydata'] );?>

										<!-- option -->
										<option value="">Select <?php print $databasetables[$rtid]['singlecaption']; ?></option>
										<!-- option -->

										<?php foreach($databasetables[$rtid]['entrydata'] as $rtablerow): ?>

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

									<?php if($fieldtype=='textarea'): ?>
										
										<!-- fieldinput -->
										<textarea class="fieldinput" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" <?php print $fieldattr; ?>></textarea>
										<!-- /fieldinput -->

									<?php else: ?>

										<!-- fieldinput -->
										<input class="fieldinput" type="<?php print $fieldtype; ?>" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" value="" <?php print $fieldattr; ?>>
										<!-- /fieldinput -->

									<?php endif; ?>

								<?php endif; ?>

							</li>
							<!-- /field -->

						<?php endforeach; ?>
						
					</ul>
					<!-- /fieldlist -->

					<!-- action -->
					<div class="action">

						<!-- sendbtn -->
						<button class="sendbtn btn" type="submit">

							<!-- caption -->
							<span class="caption">Add <?php print $singlecaption; ?></span>
							<!-- /caption -->

						</button>
						<!-- /sendbtn -->

					</div>
					<!-- /action -->

				</form>
				<!-- /create -->

			</section>
			<!-- /composer -->

		<?php endif; ?>

	</body>

</html>
