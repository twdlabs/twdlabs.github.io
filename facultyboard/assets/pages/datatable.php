
<!DOCTYPE html>
<html>
	
	<head>
	</head>
	
	<body>

		<?php

			// Define table entry accessibility. 
			$tableentrieseditable = $iscurrentuseradmin || $selectedtable['tableentrieseditable'];
			$tableentriescomposable = $iscurrentuseradmin || $selectedtable['tableentriescomposable'];
		?>

		<!-- datatable -->
		<section class="datatable">

			<!-- head -->
			<div class="headbar spbtw">

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
				<h2 class="headline">

					<!-- selflink -->
					<a class="selflink" href="<?php print $selfurl; ?>">

						<!-- icon -->
						<svg class="icon <?php print $selectedtableicontag; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<?php print $databasetablesicons[ $selectedtableicontag ]; ?>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption"><?php print $selectedtabletitle; ?></span>
						<!-- /caption -->
						
					</a>
					<!-- /selflink -->

				</h2>
				<!-- /head -->

				<!-- newbtn -->
				<button class="newbtn btn" onclick="toggleEntryComposer()" <?php print ( $tableentriescomposable ? '' : 'disabled' ); ?>>

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

							<?php foreach($selectedtabledisplayfields as $field): ?>

								<?php if(  isset( $field['visibleintable'] ) && $field['visibleintable']  ): ?>

									<!-- cell -->
									<th class="cell">

										<!-- caption -->
										<span class="caption"><?php print $field['fieldtitle']; ?></span>
										<!-- /caption -->
										
									</th>
									<!-- /cell -->

								<?php endif; ?>

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

						<?php if( empty( $selectedtable['entrydata'] ) ): ?>

							<?php $numcolumns = sizeof($selectedtabledisplayfields) + 1; ?>

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<td class="cell c" colspan="<?php print $numcolumns; ?>">

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

									<?php foreach($selectedtabledisplayfields as $field): ?>

										<?php 

											// Get field id (from detailed query results). 
											$fid = $field['fid'];
											// Get field type. 
											$fieldtype = $field['fieldtype'] ?? 'text';
										?>

										<?php if(  isset( $field['visibleintable'] ) && $field['visibleintable']  ): ?>

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

									<?php $entryid = $tablerow['id']; ?>

									<!-- cell -->
									<td class="cell">

										<!-- actionbox -->
										<div class="actionbox">

											<!-- viewbtn -->
											<button class="viewbtn btn" onclick="toggleEntryViewer(this)" data-entryid="<?php print $entryid; ?>">

												<!-- icon -->
												<svg class="icon eye" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
													<path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
													<path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
												</svg>
												<!-- /icon -->

												<!-- caption -->
												<span class="caption">View</span>
												<!-- /caption -->

											</button>
											<!-- /viewbtn -->

											<?php if( $tableentrieseditable ): ?>

												<!-- editbtn -->
												<button class="editbtn btn" onclick="toggleEntryEditor(this)" data-entryid="<?php print $entryid; ?>">

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

											<?php endif; ?>

										</div>
										<!-- /actionbox -->

										<!-- viewer -->
										<section class="viewer crud float" id="viewer<?php print $entryid; ?>">

											<!-- head -->
											<div class="headbar spbtw">

												<!-- head -->
												<h2 class="headline">

													<!-- caption -->
													<span class="caption">View <?php print $selectedtablesinglecaption; ?></span>
													<!-- /caption -->

												</h2>
												<!-- /head -->

												<!-- closebtn -->
												<button class="closebtn btn" onclick="closeEntryViewers()">

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

											<!-- viewcard -->
											<div class="viewcard">

												<!-- fieldlist -->
												<ul class="fieldlist">

													<?php foreach($selectedtabledisplayfields as $field): ?>

														<?php 
															// Get field id (from detailed query results). 
															$fid = $field['fid'];
															// Get field type. 
															$fieldtype = $field['fieldtype'] ?? 'text';
														?>

														<!-- field -->
														<li class="field">

															<!-- key -->
															<span class="key"><?php print $field['fieldtitle'] ?></span>
															<!-- /key -->

															<?php if( $fieldtype=='image' ): ?>

																<!-- picture -->
																<img class="picture" src="./assets/image/<?php print $tablerow[$fid]; ?>">
																<!-- /picture -->

															<?php else: ?>

																<!-- caption -->
																<span class="caption"><?php print $tablerow[$fid]; ?></span>
																<!-- /caption -->

															<?php endif; ?>

														</li>
														<!-- /field -->

													<?php endforeach; ?>

												</ul>
												<!-- /fieldlist -->

											</div>
											<!-- /viewcard -->

										</section>
										<!-- /viewer -->

										<?php if( $tableentrieseditable ): ?>

											<!-- editor -->
											<section class="editor crud float" id="editor<?php print $entryid; ?>">

												<!-- head -->
												<div class="headbar spbtw">

													<!-- head -->
													<h2 class="headline">

														<!-- caption -->
														<span class="caption">Edit <?php print $selectedtablesinglecaption; ?></span>
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
												<form class="update crudform" method="post" action="<?php print $selfurl; ?>">

													<!-- parameter -->
													<input class="parameter" type="hidden" name="crudopid" value="update">
													<input class="parameter" type="hidden" name="crudtableid" value="<?php print $selectedviewid; ?>">
													<input class="parameter" type="hidden" name="tablerowid" value="<?php print $tablerow['id']; ?>">
													<!-- /parameter -->

													<!-- fieldlist -->
													<ul class="fieldlist">

														<?php foreach($selectedtableeditorfields as $field): ?>

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
															<span class="caption">Update <?php print $selectedtablesinglecaption; ?></span>
															<!-- /caption -->

														</button>
														<!-- /sendbtn -->

													</div>
													<!-- /action -->

												</form>
												<!-- /update -->

												<!-- delete -->
												<form class="delete crudform" method="post" action="<?php print $selfurl; ?>">

													<!-- parameter -->
													<input class="parameter" type="hidden" name="crudopid" value="delete">
													<input class="parameter" type="hidden" name="crudtableid" value="<?php print $selectedviewid; ?>">
													<input class="parameter" type="hidden" name="tablerowid" value="<?php print $tablerow['id']; ?>">
													<!-- /parameter -->

													<!-- action -->
													<div class="action">

														<!-- sendbtn -->
														<button class="sendbtn btn" type="submit">

															<!-- caption -->
															<span class="caption">Delete <?php print $selectedtablesinglecaption; ?></span>
															<!-- /caption -->

														</button>
														<!-- /sendbtn -->

													</div>
													<!-- /action -->

												</form>
												<!-- /delete -->
												
											</section>
											<!-- /editor -->

										<?php endif; ?>
										
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
		<!-- /datatable -->

		<?php if( $tableentriescomposable ): ?>

			<!-- composer -->
			<section class="composer crud float">

				<!-- head -->
				<div class="headbar spbtw">

					<!-- head -->
					<h2 class="headline">

						<!-- caption -->
						<span class="caption">New <?php print $selectedtablesinglecaption; ?></span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

					<!-- closebtn -->
					<button class="closebtn btn" onclick="closeEntryComposer()">

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
				<form class="create crudform" method="post" action="<?php print $selfurl; ?>">

					<!-- parameter -->
					<input class="parameter" type="hidden" name="crudopid" value="create">
					<input class="parameter" type="hidden" name="crudtableid" value="<?php print $selectedviewid; ?>">
					<!-- /parameter -->

					<!-- fieldlist -->
					<ul class="fieldlist">

						<?php foreach($selectedtableeditorfields as $field): ?>

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
							<span class="caption">Add <?php print $selectedtablesinglecaption; ?></span>
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
