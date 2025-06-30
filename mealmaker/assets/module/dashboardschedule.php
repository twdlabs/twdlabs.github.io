
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body>

		<?php

			// Define list of days. 
			$daysofwk = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ];

			// Check if today is Sunday. 
			$dayoftoday = date('w');
			$istodaysunday = ( $dayoftoday == 0 );
			// Get date of most recent Sunday. 
			$dateofsunday = ( $istodaysunday ) ? date('Y-m-d') : date( 'Y-m-d' , strtotime('last sunday') ) ;
			// print "Recent Sunday: $dateofsunday<br>";

			// Initialize list of dates. 
			$upcomingwkdates = [];
			// Save dates for upcoming week. 
			for( $dx=1 ; $dx<=sizeof($daysofwk) ; $dx++ ) {
				// Add current date to list. 
				$upcomingwkdates[] = ( $istodaysunday ) ? date('Y-m-d', strtotime("today + $dx day") ) : date('Y-m-d', strtotime("last sunday + $dx day") );
			}

			// Display dates for each day of current week. 
			// print 'Upcoming wk: ';
			// print json_encode( $upcomingwkdates );
		?>

		<!-- table -->
		<div class="table block">

			<!-- head -->
			<h2 class="head">

				<!-- icon -->
				<svg class="icon calendar" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
				</svg>
				<!-- /icon -->

				<!-- caption -->
				<span class="caption">Meal Schedule</span>
				<!-- /caption -->

			</h2>
			<!-- /head -->

			<!-- datatable -->
			<table class="datatable">

				<!-- row -->
				<tr class="row">

					<!-- head -->
					<th class="head">

						<!-- caption -->
						<span class="caption">Student</span>
						<!-- <span class="caption">studentname</span> -->
						<!-- /caption -->

					</th>
					<!-- /head -->

					<?php foreach( $daysofwk as $index=>$dayname ): ?>

						<?php $dayname = $daysofwk[$index]; ?>
						<?php $daydate = $upcomingwkdates[$index]; ?>

						<!-- head -->
						<th class="head">

							<!-- caption -->
							<span class="caption"><?=$dayname?></span>
							<!-- /caption -->

							<!-- caption -->
							<span class="caption"><?=$daydate?></span>
							<!-- /caption -->

						</th>
						<!-- /head -->

					<?php endforeach; ?>

					<!-- head -->
					<th class="head x">

						<!-- caption -->
						<span class="caption">Meal Time</span>
						<!-- <span class="caption">mealtime</span> -->
						<!-- /caption -->

					</th>
					<!-- /head -->

				</tr>
				<!-- /row -->

				<!-- row -->
				<tr class="row">

					<!-- head -->
					<th class="head" rowspan="2">

						<!-- caption -->
						<span class="caption">Bobby Smith</span>
						<!-- /caption -->

					</th>
					<!-- /head -->

					<?php foreach( $upcomingwkdates as $currentdate ): ?>

						<!-- cell -->
						<td class="cell">

							<!-- caption -->
							<span class="caption">[None Selected]</span>
							<!-- /caption -->

						</td>
						<!-- /cell -->

					<?php endforeach; ?>

					<!-- head -->
					<th class="head x">

						<!-- caption -->
						<span class="caption">Breakfast</span>
						<!-- /caption -->

					</th>
					<!-- /head -->

				</tr>
				<!-- /row -->

				<!-- row -->
				<tr class="row">

					<?php foreach( $upcomingwkdates as $currentdate ): ?>

						<!-- cell -->
						<td class="cell">

							<!-- caption -->
							<span class="caption">[None Selected]</span>
							<!-- /caption -->

						</td>
						<!-- /cell -->

					<?php endforeach; ?>

					<!-- head -->
					<th class="head x">

						<!-- caption -->
						<span class="caption">Lunch</span>
						<!-- /caption -->

					</th>
					<!-- /head -->

				</tr>
				<!-- /row -->

			</table>
			<!-- /datatable -->

		</div>
		<!-- /table -->

		<!-- form -->
		<div class="form block show">

			<!-- head -->
			<h2 class="head">New Bulk Order</h2>
			<!-- /head -->

			<!-- dataform -->
			<form class="order dataform" method="post" action="./mealorders/create.php">

				<!-- fieldtable -->
				<table class="fieldtable">

					<!-- row -->
					<tr class="row">

						<!-- head -->
						<th class="head">

							<!-- caption -->
							<span class="caption"></span>
							<!-- /caption -->

						</th>
						<!-- /head -->

						<?php foreach( $daysofwk as $index=>$dayname ): ?>

							<?php $dayname = $daysofwk[$index]; ?>
							<?php $daydate = $upcomingwkdates[$index]; ?>

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption"><?=$dayname?></span>
								<!-- /caption -->

								<!-- caption -->
								<span class="caption"><?=$daydate?></span>
								<!-- /caption -->

							</th>
							<!-- /head -->

						<?php endforeach; ?>

					</tr>
					<!-- /row -->

					<!-- row -->
					<tr class="row">

						<!-- cell -->
						<th class="cell">

							<!-- caption -->
							<span class="caption">Breakfast</span>
							<!-- /caption -->

						</th>
						<!-- /cell -->

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

						<!-- cell -->
						<td class="cell">

							<!-- field -->
							<div class="field">

								<!-- datafield -->
								<select class="datafield" name="bftue" title="Tuesday Breakfast" required>

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

						<!-- cell -->
						<td class="cell">

							<!-- field -->
							<div class="field">

								<!-- datafield -->
								<select class="datafield" name="bfwed" title="Wednesday Breakfast" required>

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

						<!-- cell -->
						<td class="cell">

							<!-- field -->
							<div class="field">

								<!-- datafield -->
								<select class="datafield" name="bfthu" title="Thursday Breakfast" required>

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

						<!-- cell -->
						<td class="cell">

							<!-- field -->
							<div class="field">

								<!-- datafield -->
								<select class="datafield" name="bffri" title="Friday Breakfast" required>

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

						<!-- cell -->
						<td class="cell">

							<!-- field -->
							<div class="field">

								<!-- datafield -->
								<select class="datafield" name="lntue" title="Tuesday Lunch" required>

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

						<!-- cell -->
						<td class="cell">

							<!-- field -->
							<div class="field">

								<!-- datafield -->
								<select class="datafield" name="lnwed" title="Wednesday Lunch" required>

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

						<!-- cell -->
						<td class="cell">

							<!-- field -->
							<div class="field">

								<!-- datafield -->
								<select class="datafield" name="lnthu" title="Thursday Lunch" required>

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

						<!-- cell -->
						<td class="cell">

							<!-- field -->
							<div class="field">

								<!-- datafield -->
								<select class="datafield" name="lnfri" title="Friday Lunch" required>

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

					</tr>
					<!-- /row -->

				</table>
				<!-- /fieldtable -->

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
						<span class="caption">Place Order</span>
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
