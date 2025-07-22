<!-- 
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body> -->

		<!-- item -->
		<section class="item table">

			<!-- table -->
			<div class="block table">

				<!-- head -->
				<div class="head">

					<!-- head -->
					<h2 class="head">

						<!-- icon -->
						<svg class="icon <?php print $selecteddatabasetable['tableicontag']; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<?php print $databasetablesicons[ $selecteddatabasetable['tableicontag'] ]; ?>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">
							<?php $tableisuserspecific = isset( $databasetablequery[$currentviewid]['userspecificquery'] ); ?>
							<?=( $currentuserisoperator ? 'Manage' : ($tableisuserspecific ? 'My' : '') )?>
							<?= $selecteddatabasetable['tabletitle'] ?>
						</span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

					<?php if( $selecteddatabasetable['modifytableinapp'] ): ?>

						<!-- btn -->
						<button class="btn new" onclick="toggleEntryComposer(this)" data-tableid="<?php print $selectedtableid; ?>">

							<!-- icon -->
							<svg class="icon plus" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">New</span>
							<!-- /caption -->

						</button>
						<!-- /btn -->

					<?php endif; ?>

				</div>
				<!-- /head -->

				<!-- body -->
				<div class="body">

					<!-- datatable -->
					<table class="datatable">

						<!-- row -->
						<tr class="row">

							<?php foreach( $selecteddatabasetable['displayfields'] as $selectedtabledisplayfield ): ?>

								<?php if( ! $selectedtabledisplayfield['visibleintable'] ) continue; ?>

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">
										<?=$selectedtabledisplayfield['fieldtitle']?>
									</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

							<?php endforeach; ?>

						</tr>
						<!-- /row -->

						<?php $isanyentriesincurrentdatabasetable = count( $selecteddatabasetable['entrydata'] ) > 0; ?>

						<?php if($isanyentriesincurrentdatabasetable): ?>

							<?php foreach( $selecteddatabasetable['entrydata'] as $currentdatarow ): ?>

								<!-- row -->
								<tr class="row">

									<?php foreach( $currentdatarow as $currentdatakey=>$currentdatavalue ): ?>

										<?php
											// Check if on id field. 
											$onidfield = ( $currentdatakey=='id' );
											// Check if on virtual login field. 
											$onvirtualloginfield = ( $selectedtableid=='parents' ) && ( $currentdatakey=='loginas' );
										?>

										<?php if( $onidfield ) continue; ?>

										<?php if( $onvirtualloginfield ): ?>

											<!-- cell -->
											<td class="cell">

												<!-- loginform -->
												<form class="loginform" method="post" action="./loginas.php">
													
													<!-- parameter -->
													<!-- <input class="parameter" type="hidden" name="pid" value="<?=$currentdatavalue?>"> -->
													<!-- /parameter -->

													<!-- btn -->
													<button class="btn loginas" type="submit" name="pid" value="<?=$currentdatavalue?>">

														<!-- caption -->
														<!-- <span class="caption">Go</span> -->
														<!-- /caption -->

														<!-- icon -->
														<svg class="icon up arrowright" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
														</svg>
														<!-- /icon -->

													</button>
													<!-- /btn -->

												</form>
												<!-- /loginform -->

											</td>
											<!-- /cell -->

										<?php else: ?>

											<!-- cell -->
											<td class="cell">

												<!-- caption -->
												<span class="caption">
													<!-- <?php print $currentdatakey; ?> -->
													<!-- => -->
													<?php print $currentdatavalue; ?>
												</span>
												<!-- /caption -->

											</td>
											<!-- /cell -->

										<?php endif; ?>

									<?php endforeach; ?>

								</tr>
								<!-- /row -->

							<?php endforeach; ?>

						<?php else: ?>

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<td class="cell nullcell" colspan="30" rowspan="4">

									<?php $tabletitle = $selecteddatabasetable['tabletitle']; ?>

									<!-- caption -->
									<span class="caption">
										<?=$tabletitle?> you add will appear here
									</span>
									<!-- /caption -->

									<!-- btn -->
									<button class="btn new" onclick="toggleEntryComposer(this)" data-tableid="<?php print $selectedtableid; ?>">

										<!-- caption -->
										<span class="caption">Tap to create</span>
										<!-- /caption -->

									</button>
									<!-- /btn -->

								</td>
								<!-- /cell -->

							</tr>
							<!-- /row -->

						<?php endif; ?>

					</table>
					<!-- /datatable -->

				</div>
				<!-- /body -->

			</div>
			<!-- /table -->

			<?php if( $selecteddatabasetable['modifytableinapp'] ): ?>

				<!-- form -->
				<div class="block form composer" id="<?php print $selectedtableid; ?>composer">

					<!-- head -->
					<h2 class="head">

						<!-- caption -->
						<span class="caption">
							New <?php print $selecteddatabasetable['singlecaption']; ?>
						</span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

					<!-- dataform -->
					<form class="biform dataform" method="post" action="./<?=$selectedtableid?>/createnew.php">

						<!-- parameter -->
						<input class="parameter" type="hidden" name="crudopid" value="create">
						<!-- /parameter -->

						<!-- parameter -->
						<input class="parameter" type="hidden" name="crudtableid" value="<?=$selectedtableid?>">
						<!-- /parameter -->

						<?php foreach( $selecteddatabasetable['editorfields'] as $selectedtableeditorfield ): ?>

							<?php $currentfieldid = $selectedtableeditorfield['fid']; ?>
							<?php $currentfieldtype = $selectedtableeditorfield['type']; ?>
							<?php $currentfieldtitle = $selectedtableeditorfield['fieldtitle']; ?>
							<?php $currentfieldplaceholder = $selectedtableeditorfield['placeholder'] ?? $currentfieldtitle; ?>

							<!-- field -->
							<div class="field">

								<!-- label -->
								<label class="label" for="<?=$currentfieldid?>">

									<!-- caption -->
									<span class="caption"><?=$currentfieldtitle?></span>
									<!-- /caption -->

								</label>
								<!-- /label -->

								<?php $simpleinputfield = ( $currentfieldtype != 'select' ); ?>

								<?php if( $simpleinputfield ): ?>

									<!-- datafield -->
									<input class="datafield" type="<?=$currentfieldtype?>" id="<?=$currentfieldid?>" name="<?=$currentfieldid?>" placeholder="<?=$currentfieldplaceholder?>" required>
									<!-- /datafield -->

								<?php else: ?>

									<?php $selectedtableeditorfieldselectorsource = $selectedtableeditorfield['selectorsource']; ?>
									<?php $selectedtableeditorfieldselectortableid = $selectedtableeditorfieldselectorsource['tid']; ?>
									<?php $selectedtableeditorfieldselectorfieldid = $selectedtableeditorfieldselectorsource['fid']; ?>
									
									<!-- datafield -->
									<select class="datafield" id="<?=$currentfieldid?>" name="<?=$currentfieldid?>" title="<?php print $currentfieldtitle; ?>" required>

										<?php if( ($currentfieldid=='orderedby') || ( !$currentuserisadmin && $currentfieldid=='parentid' ) ): ?>

											<?php $currentuserid = $_SESSION['pid']; ?>
											<?php $currentusersname = $_SESSION['name']; ?>

											<!-- choice -->
											<option class="choice" value="<?=$currentuserid?>"><?=$currentusersname?></option>
											<!-- /choice -->

										<?php else: ?>

											<?php $selectedtableeditorfieldselectortablesinglecaption = $databasetables[ $selectedtableeditorfieldselectortableid ]['singlecaption']; ?>

											<!-- choice -->
											<option class="choice" value="">[Select <?php print $selectedtableeditorfieldselectortablesinglecaption; ?>]</option>
											<!-- /choice -->

											<?php foreach( $databasetables[ $selectedtableeditorfieldselectortableid ]['entrydata'] as $selectedtableeditorfieldselectorrow ): ?>

												<!-- choice -->
												<option class="choice" value="<?php print $selectedtableeditorfieldselectorrow['id']; ?>">
													<?php print $selectedtableeditorfieldselectorrow[ $selectedtableeditorfieldselectorfieldid ]; ?>
												</option>
												<!-- /choice -->

											<?php endforeach; ?>

										<?php endif; ?>

									</select>
									<!-- /datafield -->

								<?php endif; ?>

							</div>
							<!-- /field -->

						<?php endforeach; ?>

						<!-- act -->
						<div class="act">

							<!-- btn -->
							<button class="btn clear" type="reset" onclick="closeEntryComposers()">

								<!-- caption -->
								<span class="caption">Cancel</span>
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
								<span class="caption">Add <?php print $selecteddatabasetable['singlecaption']; ?></span>
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

					</form>
					<!-- /dataform -->

				</div>
				<!-- /form -->

				<!-- backdrop -->
				<div class="backdrop" onclick="closeEntryComposers()"></div>
				<!-- /backdrop -->

			<?php endif; ?>

		</section>
		<!-- /item -->
<!-- 
	</body>

</html> -->
