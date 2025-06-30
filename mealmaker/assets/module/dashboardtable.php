
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body>

		<!-- table -->
		<div class="table block">

			<!-- head -->
			<h2 class="head">

				<!-- icon -->
				<svg class="icon <?php print $currentdatabasetable['tableicontag']; ?>" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<?php print $databasetablesicons[ $currentdatabasetable['tableicontag'] ]; ?>
				</svg>
				<!-- /icon -->

				<!-- caption -->
				<span class="caption">
					<?php print ( $currentuserisoperator ? 'Manage  ' : 'My ' ) .  $currentdatabasetable['tabletitle']; ?>
				</span>
				<!-- /caption -->

			</h2>
			<!-- /head -->

			<!-- datatable -->
			<table class="datatable">

				<!-- row -->
				<tr class="row">

					<?php foreach( $currentdatabasetable['displayfields'] as $currentdatabasetabledisplayfield ): ?>

						<?php if( !$currentdatabasetabledisplayfield['visibleintable'] ) continue; ?>

						<!-- head -->
						<th class="head">

							<!-- caption -->
							<span class="caption">
								<?php print $currentdatabasetabledisplayfield['fieldtitle']; ?>
							</span>
							<!-- /caption -->

						</th>
						<!-- /head -->

					<?php endforeach; ?>

				</tr>
				<!-- /row -->

				<?php $isanyentries = count( $currentdatabasetable['entrydata'] ) > 0; ?>

				<?php if($isanyentries): ?>

					<?php foreach( $currentdatabasetable['entrydata'] as $currentdatarow ): ?>

						<!-- row -->
						<tr class="row">

							<?php foreach( $currentdatarow as $currentdatakey=>$currentdatavalue ): ?>
								<?php if( $currentdatakey=='id' ) continue; ?>

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

							<?php endforeach; ?>

						</tr>
						<!-- /row -->

					<?php endforeach; ?>

				<?php else: ?>

					<!-- row -->
					<tr class="row">

						<!-- cell -->
						<td class="cell null" colspan="30" rowspan="4">

							<!-- caption -->
							<span class="caption">
								[<?php print $currentdatabasetable['tabletitle']; ?> you add will appear here]
							</span>
							<!-- /caption -->

						</td>
						<!-- /cell -->

					</tr>
					<!-- /row -->

				<?php endif; ?>

			</table>
			<!-- /datatable -->

			<?php if( $currentdatabasetable['modifyinapp'] ): ?>

				<!-- btn -->
				<button class="btn new" onclick="toggleEntryComposer(this)" data-tableid="<?php print $currenttableid; ?>">

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
		<!-- /table -->

	</body>

</html>
