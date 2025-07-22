<!-- 
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body> -->

		<!-- item -->
		<section class="item welcome">

			Welcome

			<!-- <input type="datetime" name="datetime"> -->
			<!-- <input type="datetime-local" name="datetime-local"> -->

			<!-- dateofwk -->
			<!-- <input class="dateofwk" type="date" name="dateofwk" min="<?=$mindate?>" max="<?=$maxdate?>"> -->
			<!-- /dateofwk -->

		</section>
		<!-- /item -->

		<!-- item -->
		<section class="item table">

			<!-- table -->
			<div class="block table">

				<!-- head -->
				<div class="head">

					<!-- head -->
					<h2 class="head">

						<!-- icon -->
						<svg class="icon calendar" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">Upcoming Orders</span>
						<!-- /caption -->

					</h2>
					<!-- /head -->

					<!-- btn -->
					<button class="btn new" onclick="toggleEntryComposer(this)" data-tableid="bulkmealorder">

						<!-- icon -->
						<svg class="icon pencilsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
							<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">Edit</span>
						<!-- /caption -->

					</button>
					<!-- /btn -->

				</div>
				<!-- /head -->

				<!-- body -->
				<div class="body">

					<!-- datatable -->
					<table class="datatable">

						<!-- tablehead -->
						<thead class="tablehead">

							<!-- row -->
							<tr class="row">

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Day</span>
									<!-- <span class="caption">Student</span> -->
									<!-- <span class="caption">studentname</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head x">

									<!-- caption -->
									<span class="caption">Meal Time</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<?php foreach( $upcomingwk['daylabels'] as $index=>$currentdatelabel ): ?>

									<!-- head -->
									<th class="head" title="<?=$upcomingwk['fulldates'][$index]?>">

										<!-- caption -->
										<span class="caption"><?=$currentdatelabel?></span>
										<!-- /caption -->

									</th>
									<!-- /head -->

								<?php endforeach; ?>

							</tr>
							<!-- /row -->

						</thead>
						<!-- /tablehead -->

						<!-- tablebody -->
						<tbody class="tablebody">

							<?php foreach( $databasetables['students']['entrydata'] as $currentstudent ): ?>

								<?php $sid = $currentstudent['id']; ?>
								<!-- <?=$currentstudent['studentname']?>'s profile: -->
								<!-- <?=json_encode($currentstudent)?> -->

								<!-- row -->
								<tr class="row">

									<!-- head -->
									<th class="head" rowspan="2">

										<!-- caption -->
										<span class="caption"><?=$currentstudent['studentname']?></span>
										<!-- <span class="caption">Bobby Smith</span> -->
										<!-- /caption -->

									</th>
									<!-- /head -->

									<!-- head -->
									<th class="head x">

										<!-- caption -->
										<span class="caption">Breakfast</span>
										<!-- /caption -->

									</th>
									<!-- /head -->

									<?php foreach( $upcomingwk['daylabels'] as $index=>$currentdatelabel ): ?>

										<?php ?>
										<?php 

											// Get current date n meal time. 
											$currentdate = $upcomingwk['fulldates'][$index];
											$currentmealtime = 1;
											// Get order for current student, current date, current meal time. 
											$currentstudentdaymealorder = getStudentDayOrders( $sid , $currentdate , $currentmealtime );
										?>

										<!-- <?=$currentstudent['studentname']?>'s breakfast order [<?=$currentdate?>]: -->
										<!-- <?=json_encode($currentstudentdaymealorder)?> -->

										<!-- cell -->
										<td class="cell">

											<!-- caption -->
											<span class="caption">
												<?= $currentstudentdaymealorder[0]['mealsummary'] ?? '[no meal selected]' ?>
											</span>
											<!-- /caption -->

										</td>
										<!-- /cell -->

									<?php endforeach; ?>

								</tr>
								<!-- /row -->

								<!-- row -->
								<tr class="row">

									<!-- head -->
									<th class="head x">

										<!-- caption -->
										<span class="caption">Lunch</span>
										<!-- /caption -->

									</th>
									<!-- /head -->

									<?php foreach( $upcomingwk['daylabels'] as $index=>$currentdatelabel ): ?>

										<?php ?>
										<?php 

											// Get current date n meal time. 
											$currentdate = $upcomingwk['fulldates'][$index];
											$currentmealtime = 2;
											// Get order for current student, current date, current meal time. 
											$currentstudentdaymealorder = getStudentDayOrders( $sid , $currentdate , $currentmealtime );
										?>

										<!-- <?=$currentstudent['studentname']?>'s lunch order [<?=$currentdate?>]: -->
										<!-- <?=json_encode($currentstudentdaymealorder)?> -->

										<!-- cell -->
										<td class="cell">

											<!-- caption -->
											<span class="caption">
												<?= $currentstudentdaymealorder[0]['mealsummary'] ?? '[no meal selected]' ?>
											</span>
											<!-- /caption -->

										</td>
										<!-- /cell -->

									<?php endforeach; ?>

								</tr>
								<!-- /row -->

							<?php endforeach; ?>

						</tbody>
						<!-- /tablebody -->

					</table>
					<!-- /datatable -->

				</div>
				<!-- /body -->

			</div>
			<!-- /table -->

			<!-- form -->
			<div class="block form composer open" id="bulkmealordercomposer" style="width:auto;">

				<!-- head -->
				<h2 class="head">Change Order</h2>
				<!-- /head -->

				<!-- dataform -->
				<form class="order dataform" method="post" action="./mealorders/create.php">

					<!-- fieldtablescroller -->
					<div class="fieldtablescroller" style="overflow-x:auto;">

						<!-- fieldtable -->
						<table class="fieldtable">

							<!-- tablehead -->
							<thead class="tablehead">

								<!-- row -->
								<tr class="row">

									<!-- head -->
									<th class="head"></th>
									<!-- /head -->

									<!-- head -->
									<th class="head x">

										<!-- caption -->
										<span class="caption">Meal Time</span>
										<!-- /caption -->

									</th>
									<!-- /head -->

									<?php foreach( $upcomingwk['daylabels'] as $index=>$currentdatelabel ): ?>

										<!-- head -->
										<th class="head" title="<?=$upcomingwk['fulldates'][$index]?>">

											<!-- caption -->
											<span class="caption"><?=$currentdatelabel?></span>
											<!-- /caption -->

										</th>
										<!-- /head -->

									<?php endforeach; ?>

								</tr>
								<!-- /row -->

							</thead>
							<!-- /tablehead -->

							<!-- tablebody -->
							<tbody class="tablebody">

								<?php foreach( $databasetables['students']['entrydata'] as $currentstudent ): ?>

									<?php $sid = $currentstudent['id']; ?>

									<!-- row -->
									<tr class="row">

										<!-- head -->
										<th class="head" rowspan="2">

											<!-- caption -->
											<span class="caption"><?=$currentstudent['studentname']?></span>
											<!-- <span class="caption">Bobby Smith</span> -->
											<!-- /caption -->

										</th>
										<!-- /head -->

										<!-- cell -->
										<th class="cell">

											<!-- caption -->
											<span class="caption">Breakfast</span>
											<!-- /caption -->

										</th>
										<!-- /cell -->

										<?php foreach( $upcomingwk['daylabels'] as $currentdatelabel ): ?>

											<!-- cell -->
											<td class="cell">

												<!-- field -->
												<div class="field">

													<!-- datafield -->
													<select class="datafield" name="bfmon" title="Monday Breakfast" required>

														<!-- choice -->
														<option class="choice" value="">[none]</option>
														<!-- /choice -->

														<!-- choice -->
														<option class="choice" value="xyz">Choice X</option>
														<!-- /choice -->

													</select>
													<!-- /datafield -->

												</div>
												<!-- /field -->

											</td>
											<!-- /cell -->

										<?php endforeach; ?>

									</tr>
									<!-- /row -->

									<!-- row -->
									<tr class="row">

										<!-- cell -->
										<th class="cell">

											<!-- caption -->
											<span class="caption">Lunch</span>
											<!-- /caption -->

										</th>
										<!-- /cell -->

										<?php foreach( $upcomingwk['daylabels'] as $currentdatelabel ): ?>

											<!-- cell -->
											<td class="cell">

												<!-- field -->
												<div class="field">

													<!-- datafield -->
													<select class="datafield" name="lnmon" title="Monday Lunch" required>

														<!-- choice -->
														<option class="choice" value="">[none]</option>
														<!-- /choice -->

														<!-- choice -->
														<option class="choice" value="xyz">Choice X</option>
														<!-- /choice -->

													</select>
													<!-- /datafield -->

												</div>
												<!-- /field -->

											</td>
											<!-- /cell -->

										<?php endforeach; ?>

									</tr>
									<!-- /row -->

								<?php endforeach; ?>

							</tbody>
							<!-- /tablebody -->

						</table>
						<!-- /fieldtable -->

					</div>
					<!-- /fieldtablescroller -->

					<!-- act -->
					<div class="act">

						<!-- btn -->
						<button class="btn clear" type="reset" onclick="closeEntryComposers()">

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
							<span class="caption">Place Orders</span>
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

		</section>
		<!-- /item -->
<!-- 
	</body>

</html> -->
