
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body>

		<!-- form -->
		<div class="form block composer" id="<?php print $currenttableid; ?>composer">

			<!-- head -->
			<h2 class="head">New <?php print $currentdatabasetable['singlecaption']; ?></h2>
			<!-- /head -->

			<!-- dataform -->
			<form class="dataform">

				<!-- parameter -->
				<!-- <input class="parameter" type="hidden" name="crudopid" value="create"> -->
				<input class="parameter" type="hidden" name="crudopid" value="create">
				<!-- /parameter -->

				<!-- parameter -->
				<!-- <?php print($currenttableid); ?> -->
				<!-- <?php var_dump($currenttableid); ?> -->
				<!-- <input class="parameter" type="hidden" name="crudtableid" value="<?=$currenttableid?>"> -->
				<input class="parameter" type="hidden" name="crudtableid" value="<?=$currenttableid?>">

			</form>
			<!-- /dataform -->

			<!-- dataform -->
			<form class="biform dataform" method="post" action="./<?=$currenttableid?>/createnew.php">
				<!-- /parameter -->

				<?php foreach( $currentdatabasetable['editorfields'] as $currentdatabasetableeditorfield ): ?>

					<?php $currentfieldid = $currentdatabasetableeditorfield['fid']; ?>
					<?php $currentfieldtype = $currentdatabasetableeditorfield['type']; ?>
					<?php $currentfieldtitle = $currentdatabasetableeditorfield['fieldtitle']; ?>
					<?php $currentfieldplaceholder = $currentdatabasetableeditorfield['placeholder'] ?? $currentfieldtitle; ?>
					<?php $onorderedby = $currentfieldid=='orderedby'; ?>

					<!-- field -->
					<div class="field">

						<!-- label -->
						<label class="label" for="<?=$currentfieldid?>">
							<?=$currentfieldtitle?>
						</label>
						<!-- /label -->

						<?php $simpleinputfield = ( $currentfieldtype != 'select' ); ?>

						<?php if( $simpleinputfield ): ?>

							<!-- datafield -->
							<input class="datafield" type="<?=$currentfieldtype?>" id="<?=$currentfieldid?>" name="<?=$currentfieldid?>" placeholder="<?=$currentfieldplaceholder?>" required>
							<!-- /datafield -->

						<?php else: ?>

							<?php $currentdatabasetableeditorfieldselectorsource = $currentdatabasetableeditorfield['selectorsource']; ?>
							<?php $currentdatabasetableeditorfieldselectortableid = $currentdatabasetableeditorfield['selectorsource']['tid']; ?>
							<?php $currentdatabasetableeditorfieldselectorfieldid = $currentdatabasetableeditorfield['selectorsource']['fid']; ?>
							
							<!-- datafield -->
							<select class="datafield" id="<?=$currentfieldid?>" name="<?=$currentfieldid?>" title="<?php print $currentfieldtitle; ?>" required>
								<?php print json_encode( $currentdatabasetableeditorfieldselectorsource ); ?>

								<?php if( $onorderedby && !$currentuserisadmin ): ?>

									<!-- choice -->
									<option class="choice" value="<?php print $_SESSION['pid']; ?>"><?php print $_SESSION['name']; ?></option>
									<!-- /choice -->

								<?php else: ?>

									<?php $currentdatabasetableeditorfieldselectortablesinglecaption = $databasetables[ $currentdatabasetableeditorfieldselectortableid ]['singlecaption']; ?>

									<!-- choice -->
									<option class="choice" value="">[Select <?php print $currentdatabasetableeditorfieldselectortablesinglecaption; ?>]</option>
									<!-- /choice -->

									<?php foreach( $databasetables[ $currentdatabasetableeditorfieldselectortableid ]['entrydata'] as $currentdatabasetableeditorfieldselectorrow ): ?>

										<!-- choice -->
										<option class="choice" value="<?php print $currentdatabasetableeditorfieldselectorrow['id']; ?>">
											<?php print $currentdatabasetableeditorfieldselectorrow[ $currentdatabasetableeditorfieldselectorfieldid ]; ?>
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
						<span class="caption">Add <?php print $currentdatabasetable['singlecaption']; ?></span>
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

	</body>

</html>
