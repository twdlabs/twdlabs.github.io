
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<!-- recent -->
		<section class="recent datatable">

			<!-- head -->
			<div class="head">

				<!-- head -->
				<h2 class="head">

					<!-- selflink -->
					<a class="selflink" href="<?php print $selfurl; ?>">

						<!-- caption -->
						<span class="caption">Recent Activity</span>
						<!-- /caption -->
						
					</a>
					<!-- /selflink -->

				</h2>
				<!-- /head -->

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
								<span class="caption">Edit</span>
								<!-- /caption -->
								
							</th>
							<!-- /cell -->

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
								<tr class="row">

									<?php foreach($displayfields as $field): ?>

										<?php 
											// Get field id (from detailed query results). 
											$fid = $field['fid'];
											// Get field value. 
											$value = $tablerow[$fid];
											// Get field type. 
											$fieldtype = $field['fieldtype'] ?? 'text';
										?>

										<!-- cell -->
										<td class="cell">
											<!-- <?php print json_encode($fieldtype); ?> -->
											<!-- <?php print json_encode($tablerow); ?> -->

											<?php if($fieldtype=='image'): ?>

												<!-- picture -->
												<img class="picture" src="./assets/image/<?php print $value ?>">
												<!-- /picture -->

											<?php else: ?>

												<!-- caption -->
												<span class="caption"><?php print $value ?></span>
												<!-- /caption -->

											<?php endif; ?>
											
										</td>
										<!-- /cell -->

									<?php endforeach; ?>

									<!-- cell -->
									<td class="cell">

										<!-- editbtn -->
										<button class="editbtn btn" onclick="toggleEntryEditor(this)" data-entryid="<?php print $tablerow['id']; ?>">

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

										<section class="editor float" id="id<?php print $tablerow['id']; ?>">

											<!-- head -->
											<div class="head">

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

														<!-- Define field attributes -->
														<?php $fieldattr = ( $field['required'] ? ' required' : '') . ( $field['editable'] ? '' : ' disabled' ); ?>

														<!-- field -->
														<li class="field">

															<?php 
																// Get field id. 
																$fid = $field['fid'];
																// Get field type. 
																$ftype = $field['type'];
																// Get field value. 
																$fieldvalue = $tablerow[$fid] ?? '';
															?>

															<?php if($ftype=='select'): ?>

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

																<?php if($ftype=='textarea'): ?>
																	
																	<!-- fieldinput -->
																	<textarea class="fieldinput" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" <?php print $fieldattr; ?>><?php print $fieldvalue; ?></textarea>
																	<!-- /fieldinput -->

																<?php else: ?>

																	<!-- fieldinput -->
																	<input class="fieldinput" type="<?php print $ftype; ?>" name="<?php print $fid; ?>" placeholder="<?php print $fieldtitle; ?>" value="<?php print $fieldvalue; ?>" <?php print $fieldattr; ?>>
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
		<!-- /recent -->

	</body>

</html>
