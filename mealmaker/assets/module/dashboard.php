
<!DOCTYPE html>
<html>

	<head>
	</head>

	<body>

		<?php 
			// Check if current user is admin/operator. 
			$currentuserisadmin = isset($_SESSION['currentuserisadmin']) && $_SESSION['currentuserisadmin'];
			$currentuserisoperator = isset($_SESSION['currentuserisoperator']) && $_SESSION['currentuserisoperator'];
		?>

		<!-- grid -->
		<div class="grid">

			<hr><hr><hr><hr><hr><hr><hr><hr>

			<?php if($currentuserisoperator): ?>

				<!-- item -->
				<div class="item drinks">

					<!-- table -->
					<div class="table">

						<!-- head -->
						<h2 class="head">Manage Drinks</h1>
						<!-- /head -->

						<!-- datatable -->
						<table class="datatable">

							<!-- row -->
							<tr class="row">

								<!-- head -->
								<th class="head x">

									<!-- caption -->
									<span class="caption">ID</span>
									<!-- <span class="caption">id</span> -->
									<!-- <span class="caption">mealid</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Drink</span>
									<!-- <span class="caption">drinkname</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

							</tr>
							<!-- /row -->

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<td class="cell x">

									<!-- caption -->
									<span class="caption">0</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

							</tr>
							<!-- /row -->

						</table>
						<!-- /datatable -->

					</div>
					<!-- /table -->

					<!-- form -->
					<div class="form">

						<!-- head -->
						<h2 class="head">New Drink</h1>
						<!-- /head -->

						<!-- dataform -->
						<form class="biform dataform" method="post" action="./assets/script/createstudent.php">

							<!-- field -->
							<div class="field">

								<!-- label -->
								<label class="label" for="drinkname">Drink Name</label>
								<!-- /label -->

								<!-- datafield -->
								<input class="datafield" type="text" id="drinkname" name="drinkname" placeholder="Water" required>
								<!-- /datafield -->

							</div>
							<!-- /field -->

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
									<span class="caption">Add Drink</span>
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

				</div>
				<!-- /item -->

			<?php endif; ?>

			<?php if($currentuserisoperator): ?>

				<!-- item -->
				<div class="item meals">

					<!-- table -->
					<div class="table">

						<!-- head -->
						<h2 class="head">Manage Menu</h1>
						<!-- /head -->

						<!-- datatable -->
						<table class="datatable">

							<!-- row -->
							<tr class="row">

								<!-- head -->
								<th class="head x">

									<!-- caption -->
									<span class="caption">ID</span>
									<!-- <span class="caption">id</span> -->
									<!-- <span class="caption">mealid</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Main Dish</span>
									<!-- <span class="caption">entree</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Veggie/Fruit</span>
									<!-- <span class="caption">sidedish</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Drink</span>
									<!-- <span class="caption">drinkid</span> -->
									<!-- <span class="caption">drinkname</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

							</tr>
							<!-- /row -->

							<!-- row -->
							<tr class="row">

								<!-- cell -->
								<td class="cell x">

									<!-- caption -->
									<span class="caption">0</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

								<!-- cell -->
								<td class="cell">

									<!-- caption -->
									<span class="caption">[none]</span>
									<!-- /caption -->

								</td>
								<!-- /cell -->

							</tr>
							<!-- /row -->

						</table>
						<!-- /datatable -->

					</div>
					<!-- /table -->

					<!-- form -->
					<div class="form">

						<!-- head -->
						<h2 class="head">New Meal</h1>
						<!-- /head -->

						<!-- dataform -->
						<form class="biform dataform" method="post" action="./assets/script/createstudent.php">

							<!-- field -->
							<div class="field">

								<!-- label -->
								<label class="label" for="entree">Main Dish</label>
								<!-- /label -->

								<!-- datafield -->
								<input class="datafield" type="text" id="entree" name="entree" placeholder="Baked Chicken Nuggets" required>
								<!-- /datafield -->

							</div>
							<!-- /field -->

							<!-- field -->
							<div class="field">

								<!-- label -->
								<label class="label" for="sidedish">Veggie/Fruit</label>
								<!-- /label -->

								<!-- datafield -->
								<input class="datafield" type="text" id="sidedish" name="sidedish" placeholder="Avocado Slices" required>
								<!-- /datafield -->

							</div>
							<!-- /field -->

							<!-- field -->
							<div class="field">

								<!-- label -->
								<label class="label" for="drinkid">Drink</label>
								<!-- /label -->

								<!-- datafield -->
								<!-- <input class="datafield" type="number" id="drinkid" name="drinkid" placeholder="1" required> -->
								<!-- /datafield -->

								<!-- datafield -->
								<select class="datafield" name="drinkid" title="Drink Name" required>


									<?php

										// Display null drink choice. 
										?>
										<!-- choice -->
										<!-- <option class="choice" value="">--</option> -->
										<option class="choice" value="">[Select drink here]</option>
										<!-- /choice -->
										<?php

										// TODO: Go thru data for each drink. 
										foreach($listofdrinks as $xyz) {

											// Display current drink choice. 
											?>
											<!-- choice -->
											<option class="choice" value="parentidgoeshere">[Drink name goes here]</option>
											<!-- /choice -->
											<?php
										}
									?>

								</select>
								<!-- /datafield -->

							</div>
							<!-- /field -->

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
									<span class="caption">Add Meal</span>
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

				</div>
				<!-- /item -->

			<?php endif; ?>

			<!-- item -->
			<div class="item s orders">

				<!-- table -->
				<div class="table">

					<!-- head -->
					<h2 class="head">Manage Orders</h1>
					<!-- /head -->

					<!-- datatable -->
					<table class="datatable">

						<!-- row -->
						<tr class="row">

							<!-- head -->
							<th class="head f x">

								<!-- caption -->
								<span class="caption"></span>
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head f x">

								<!-- caption -->
								<span class="caption"></span>
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head f">

								<!-- caption -->
								<span class="caption"></span>
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head" colspan="2">

								<!-- caption -->
								<span class="caption">Monday</span>
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head" colspan="2">

								<!-- caption -->
								<span class="caption">Tuesday</span>
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head" colspan="2">

								<!-- caption -->
								<span class="caption">Wednesday</span>
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head" colspan="2">

								<!-- caption -->
								<span class="caption">Thursday</span>
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head" colspan="2">

								<!-- caption -->
								<span class="caption">Friday</span>
								<!-- /caption -->

							</th>
							<!-- /head -->

						</tr>
						<!-- /row -->

						<!-- row -->
						<tr class="row">

							<!-- head -->
							<th class="head x">

								<!-- caption -->
								<span class="caption">ID</span>
								<!-- <span class="caption">id</span> -->
								<!-- <span class="caption">orderid</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head x">

								<!-- caption -->
								<span class="caption">Parent</span>
								<!-- <span class="caption">parentname</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Student</span>
								<!-- <span class="caption">studentname</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Breakfast</span>
								<!-- <span class="caption">bf-mon</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Lunch</span>
								<!-- <span class="caption">ln-mon</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Breakfast</span>
								<!-- <span class="caption">bf-tue</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Lunch</span>
								<!-- <span class="caption">ln-tue</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Breakfast</span>
								<!-- <span class="caption">bf-wed</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Lunch</span>
								<!-- <span class="caption">ln-wed</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Breakfast</span>
								<!-- <span class="caption">bf-thu</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Lunch</span>
								<!-- <span class="caption">ln-thu</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Breakfast</span>
								<!-- <span class="caption">bf-fri</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

							<!-- head -->
							<th class="head">

								<!-- caption -->
								<span class="caption">Lunch</span>
								<!-- <span class="caption">ln-fri</span> -->
								<!-- /caption -->

							</th>
							<!-- /head -->

						</tr>
						<!-- /row -->

						<!-- row -->
						<tr class="row">

							<!-- cell -->
							<td class="cell x">

								<!-- caption -->
								<span class="caption">0</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell x">

								<!-- caption -->
								<span class="caption">John Smith</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">Bobby Smith</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- caption -->
								<span class="caption">[none]</span>
								<!-- /caption -->

							</td>
							<!-- /cell -->

						</tr>
						<!-- /row -->

					</table>
					<!-- /datatable -->

				</div>
				<!-- /table -->

				<!-- form -->
				<div class="form">

					<!-- head -->
					<h2 class="head">New Order</h1>
					<!-- /head -->

					<!-- dataform -->
					<form class="order dataform" method="post" action="./assets/script/createorder.php">

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

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Monday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Tuesday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Wednesday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Thursday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

								<!-- head -->
								<th class="head">

									<!-- caption -->
									<span class="caption">Friday</span>
									<!-- /caption -->

								</th>
								<!-- /head -->

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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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
											<option class="choice" value="a">Choice A</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="b">Choice B</option>
											<!-- /choice -->

											<!-- choice -->
											<option class="choice" value="c">Choice C</option>
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

			</div>
			<!-- /item -->

			<hr><hr><hr><hr><hr><hr><hr><hr>

			<?php foreach( $databasetables as $currentdatabasetable ): ?>

				<?php $currentdatabasetablevisible = $currentdatabasetable['parentaccessible'] || $currentuserisadmin ; ?>
				<?php if( !$currentdatabasetablevisible ) continue; ?>

				<!-- item -->
				<div class="item general">

					<!-- table -->
					<div class="table">

						<!-- head -->
						<h2 class="head">
							Manage
							<?php print $currentdatabasetable['tabletitle']; ?>
						</h2>
						<!-- /head -->

						<!-- datatable -->
						<table class="datatable">

							<!-- row -->
							<tr class="row">

								<!-- head -->
								<th class="head x">

									<!-- caption -->
									<span class="caption">ID</span>
									<!-- <span class="caption">id</span> -->
									<!-- <span class="caption">userid</span> -->
									<!-- /caption -->

								</th>
								<!-- /head -->

								<?php foreach( $currentdatabasetable['displayfields'] as $currentdatabasetabledisplayfields ): ?>

									<!-- head -->
									<th class="head">

										<!-- caption -->
										<span class="caption">
											<?php print $currentdatabasetabledisplayfields['fieldtitle']; ?>
										</span>
										<!-- /caption -->

									</th>
									<!-- /head -->

								<?php endforeach; ?>

							</tr>
							<!-- /row -->

							<?php $isanyentries = count( $currentdatabasetable['entrydata'] ) > 0; ?>

							<?php if($isanyentries): ?>

								<!-- row -->
								<tr class="row">

									<!-- cell -->
									<td class="cell x">

										<!-- caption -->
										<span class="caption">0</span>
										<!-- /caption -->

									</td>
									<!-- /cell -->

									<!-- cell -->
									<td class="cell">

										<!-- caption -->
										<span class="caption">[none]</span>
										<!-- /caption -->

									</td>
									<!-- /cell -->

									<!-- cell -->
									<td class="cell">

										<!-- caption -->
										<span class="caption">[none]</span>
										<!-- /caption -->

									</td>
									<!-- /cell -->

								</tr>
								<!-- /row -->

							<?php else: ?>

								<!-- row -->
								<tr class="row">

									<!-- cell -->
									<td class="cell n" colspan="30" rowspan="4">

										<!-- caption -->
										<!-- <span class="caption">[none]</span> -->
										<!-- /caption -->

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

					</div>
					<!-- /table -->

					<!-- form -->
					<div class="form">

						<!-- head -->
						<h2 class="head">New <?php print $currentdatabasetable['singlecaption']; ?></h1>
						<!-- /head -->

						<!-- dataform -->
						<form class="biform dataform" method="post" action="./assets/script/<?php print $currentdatabasetable['creatorscriptname']; ?>.php">

							<?php foreach( $currentdatabasetable['editorfields'] as $currentdatabasetableeditorfield ): ?>

								<?php $currentfieldid = $currentdatabasetableeditorfield['fid']; ?>
								<?php $currentfieldtype = $currentdatabasetableeditorfield['type']; ?>
								<?php $currentfieldtitle = $currentdatabasetableeditorfield['fieldtitle']; ?>
								<?php $currentfieldplaceholder = $currentdatabasetableeditorfield['placeholder'] ?? $currentfieldtitle; ?>

								<!-- field -->
								<div class="field">

									<!-- label -->
									<label class="label" for="<?php print $currentfieldid; ?>">
										<?php print $currentfieldtitle; ?>
									</label>
									<!-- /label -->

									<?php if( $currentfieldtype != 'select' ): ?>

										<!-- datafield -->
										<input class="datafield" type="<?php print $currentfieldtype; ?>" id="<?php print $currentfieldid; ?>" name="<?php print $currentfieldid; ?>" placeholder="<?php print $currentfieldplaceholder; ?>" required>
										<!-- /datafield -->

									<?php else: ?>

										<!-- datafield -->
										<select class="datafield" name="parentid" title="Parent Name" required>

											<?php $currentdatabasetableeditorfieldselectorsource = $currentdatabasetableeditorfield['selectorsource']; ?>
											<?php $currentdatabasetableeditorfieldselectortableid = $currentdatabasetableeditorfield['selectorsource']['tid']; ?>
											<?php $currentdatabasetableeditorfieldselectorfieldid = $currentdatabasetableeditorfield['selectorsource']['fid']; ?>
											<!-- <?php print $currentdatabasetableeditorfieldselectorsource; ?> -->
											<!-- <?php print $currentdatabasetableeditorfieldselectortableid; ?> -->
											<!-- <?php print $currentdatabasetableeditorfieldselectorfieldid; ?> -->


											<?php

												// Proceed if current user is admin/operator.
												if($currentuserisadmin) {

													// Display null parent choice. 
													?>
													<!-- choice -->
													<!-- <option class="choice" value="">--</option> -->
													<option class="choice" value="">[Select <?php print $databasetables[$currentdatabasetableeditorfieldselectortableid]['singlecaption']; ?> Here]</option>
													<!-- /choice -->
													<?php

													// TODO: Go thru data for each parent. 
													foreach($listofparents as $xyz) {

														// Display current parent choice. 
														?>
														<!-- choice -->
														<option class="choice" value="parentidgoeshere">[Parent name goes here]</option>
														<!-- /choice -->
														<?php
													}
												}

												// Proceed if current user is parent (not admin/operator).
												else {

													// Display current parent choice. 
													?>
													<!-- choice -->
													<option class="choice" value="<?php print $_SESSION['pid']; ?>">[Parent name goes here]</option>
													<!-- /choice -->
													<?php
												}
											?>

										</select>
										<!-- /datafield -->

									<?php endif; ?>

								</div>
								<!-- /field -->

							<?php endforeach; ?>

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

				</div>
				<!-- /item -->

			<?php endforeach; ?>

		</div>
		<!-- /grid -->

	</body>

</html>
