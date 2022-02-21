

<?php

	// @include 'config.php';

	// Get current operation. 
	$operation = testInput($_POST['operation']);

	// Get product id for next new product added. 
	// $newid = ??;

	// Get product id. 
	$productid = testInput($_POST['productid']);
	if( empty($productid) ) $productid = 0;
	
	// Get product name. 
	$productname = testInput($_POST['productname']);

	// Get product price. 
	$productprice = testInput($_POST['productprice']);

	// Get product image url. 
	$productimageurl = testInput($_POST['productimageurl']);

	// Connect to database. 
	// connectToDatabase();

	/*****/
	
	// Sanitize user input. 
	function testInput($data) {

		// Remove whitespace and other predefined characters. 
		$data = trim($data);

		// Remove 'escape' backslashes. 
		$data = stripslashes($data);

		// Convert html special characters to safe html entities. 
		$data = htmlspecialchars($data);
		return $data;
	}
	
	// Connect to database. 
	function connectToDatabase() {

		// Open connection to database server (using mysqli). 
		$host = 'MySQL-cluster-1-MySQL-master.database.svc.cluster.local:3306';
		$un = 'easydubpeezy-3d1ab3';
		$pw = 'myw-DDxE8Rm-s1ckfzuY';
		$dbname = '573350_e2def2d1826e95877a7c66b2d054abcd';
		$mysqli = new mysqli($host,$un,$pw,$dbname,3306);

		// Check connection. 
		if($mysqli -> connect_errno) {
			echo 'No connection established... ';
			echo $mysqli -> connect_error;
		}
		// Do stuff on database server (if available). 
		else {
			echo 'Connection established.';

			// Perform query. 
			$queryresult = $mysqli -> query('SELECT * from Products');
			if($queryresult) {
				echo 'Returned rows: ' . $queryresult -> num_rows;
			} else {
				echo 'No query results.';
			}

			// Close connection to database server. 
			$mysqli -> close();
		}
	}
?>


<!DOCTYPE html>
<html>
	
	<head>
		<meta charset="UTF-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="../atgicon.ico" rel="icon"/>
		<title>Inventory</title>

		<!-- Main Stylesheet -->
		<link href="inventory.css" rel="stylesheet" type="text/css"/>
		<!-- <style type="text/css"></style> -->
	</head>
	
	<body onload="setTimeout(function(){document.getElementById('feedback').classList.remove('active');},1500);">

		<!-- #header -->
		<nav id="header">
			
			<!-- head -->
			<h1 class="head">
				<span class="caption">Merch Inventory</span>
			</h1>
			<!-- /head -->

			<!-- navlist -->
			<ul class="navlist">

				<!-- navitem -->
				<li class="navitem">

					<!-- navlink -->
					<a class="navlink" href="javascript:void(0)">1</a>
					<!-- /navlink -->

				</li>
				<!-- /navitem -->

				<!-- navitem -->
				<li class="navitem">

					<!-- navlink -->
					<a class="navlink" href="javascript:void(0)">2</a>
					<!-- /navlink -->

				</li>
				<!-- /navitem -->

				<!-- navitem -->
				<li class="navitem">

					<!-- navlink -->
					<a class="navlink" href="javascript:void(0)">3</a>
					<!-- /navlink -->

				</li>
				<!-- /navitem -->

			</ul>
			<!-- /navlist -->

		</nav>
		<!-- /#header -->

		<!-- #container -->
		<div id="container">

			<!-- #feedback -->
			<section id="feedback" class="expand <?php if($operation) {echo 'active';} ?>" ondblclick="this.classList.toggle('expand');">

				<!-- output -->
				<div class="output op">

					<!-- value -->
					<span class="value"><?php echo $operation; ?></span>
					<!-- /value -->
					
				</div>
				<!-- /output -->

				<!-- output -->
				<div class="output">

					<!-- value -->
					<span class="value"><?php echo $productid; ?></span>
					<!-- /value -->

					<!-- caption -->
					<span class="caption">ID</span>
					<!-- /caption -->

				</div>
				<!-- /output -->

				<!-- output -->
				<div class="output">

					<!-- value -->
					<span class="value"><?php echo $productname; ?></span>
					<!-- /value -->

					<!-- caption -->
					<span class="caption">Name</span>
					<!-- /caption -->

				</div>
				<!-- /output -->

				<!-- output -->
				<div class="output">

					<!-- value -->
					<span class="value"><?php echo $productprice; ?></span>
					<!-- /value -->

					<!-- caption -->
					<span class="caption">Price</span>
					<!-- /caption -->

				</div>
				<!-- /output -->

				<!-- output -->
				<div class="output">

					<!-- value -->
					<span class="value"><?php echo $productimageurl; ?></span>
					<!-- /value -->

					<!-- caption -->
					<span class="caption">Image</span>
					<!-- /caption -->
					
				</div>
				<!-- /output -->

				<!-- btn -->
				<div class="closebtn btn" onclick="this.parentElement.classList.remove('active');">&times;</div>
				<!-- /btn -->
				
			</section>
			<!-- /#feedback -->

			<!-- #creator -->
			<section id="creator">

				<!-- btn -->
				<div class="btn" onclick="this.parentElement.classList.toggle('active');">&plus;</div>
				<!-- /btn -->

				<!-- form -->
				<form class="form" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">

					<!-- title -->
					<h2 class="title">
						<span class="caption">Add A New Product</span>
					</h2>
					<!-- /title -->

					<!-- input -->
					<div class="input">
						<input type="hidden" name="productid" value="<?php echo $newid; ?>" placeholder="Enter product id number" disabled>
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="file" class="image" name="productimageurl" placeholder="Select product image">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="text" name="productname" placeholder="Enter product name" autocomplete="off">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="number" name="productprice" placeholder="Enter product price" min="0" step=".01">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">

						<!-- addbtn -->
						<button class="addbtn btn" name="operation" value="Adding Product">

							<!-- caption -->
							<span class="caption">Add Product</span>
							<!-- /caption -->

						</button>
						<!-- /addbtn -->

					</div>
					<!-- /input -->

				</form>
				<!-- /form -->

			</section>
			<!-- /#creator -->

			<!-- #updater -->
			<section id="updater">

				<!-- overlay -->
				<div class="overlay" onclick="closeEditor();"></div>
				<!-- /overlay -->
				
				<!-- form -->
				<form class="form" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">

					<!-- title -->
					<h2 class="title">
						<span class="caption">Edit Product</span>
					</h2>
					<!-- /title -->

					<!-- input -->
					<div class="input">
						<input type="hidden" name="productid" id="productid" value="" placeholder="Enter product id number" disabled>
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="file" class="image" name="productimageurl" id="productimageurl" placeholder="Select product image">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="text" name="productname" id="productname" placeholder="Enter product name" autocomplete="off">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="number" name="productprice" id="productprice" placeholder="Enter product price" min="0" step=".01">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input btnbox">

						<!-- cancelbtn -->
						<button class="cancelbtn btn" name="operation" value="">
							
							<!-- caption -->
							<span class="caption">Cancel</span>
							<!-- /caption -->

						</button>
						<!-- /cancelbtn -->

						<!-- updatebtn -->
						<button class="updatebtn btn" name="operation" value="Updating Product">

							<!-- caption -->
							<span class="caption">Update</span>
							<!-- /caption -->

						</button>
						<!-- /updatebtn -->
						
					</div>
					<!-- /input -->

				</form>
				<!-- /form -->

			</section>
			<!-- /#updater -->

			<!-- #inventory -->
			<section id="inventory">

				<!-- table -->
				<table class="table">

					<!-- thead -->
					<thead>

						<!-- row -->
						<tr class="row">

							<!-- cell -->
							<th class="cell">
								<span class="caption">Product Image</span>
							</th>
							<!-- /cell -->

							<!-- cell -->
							<th class="cell">
								<span class="caption">Product Name</span>
							</th>
							<!-- /cell -->

							<!-- cell -->
							<th class="cell">
								<span class="caption">Product Price</span>
							</th>
							<!-- /cell -->

							<!-- cell -->
							<th class="cell">
								<span class="caption">Action</span>
							</th>
							<!-- /cell -->

						</tr>
						<!-- /row -->

					</thead>
					<!-- /thead -->

					<!-- tbody -->
					<tbody>

						<!-- row -->
						<tr class="row">

							<!-- cell -->
							<td class="cell">
								<img src="">
							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">
								<span class="caption"></span>
							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">
								<span class="caption"></span>
							</td>
							<!-- /cell -->

							<!-- cell -->
							<td class="cell">

								<!-- editbtn -->
								<button class="editbtn btn" data-productid="">

									<!-- icon -->
									<svg class="icon editpad" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
										<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
										<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
									</svg>
									<!-- /icon -->

									<!-- caption -->
									<span class="caption">Edit</span>
									<!-- /caption -->

								</button>
								<!-- /editbtn -->
								
								<!-- form -->
								<form class="form" method="post" action="index.php">

									<!-- input -->
									<div class="input">
										<input type="hidden" name="productid" value="">
									</div>
									<!-- /input -->

									<!-- deletebtn -->
									<button class="deletebtn btn" name="operation" value="Deleting Product">

										<!-- icon -->
										<svg class="icon trashcan" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
											<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
										</svg>
										<!-- /icon -->

										<!-- caption -->
										<span class="caption">Delete</span>
										<!-- /caption -->

									</button>
									<!-- /deletebtn -->
									
								</form>
								<!-- /form -->
								
							</td>
							<!-- /cell -->

						</tr>
						<!-- /row -->

					</tbody>
					<!-- /tbody -->

				</table>
				<!-- /table -->

			</section>
			<!-- /#inventory -->

		</div>
		<!-- /#container -->


		<!-- Database Script -->
		<script src="../merch/assets/database.js" type="text/javascript"></script>

		<!-- Main Script -->
		<script src="inventory.js" type="text/javascript"></script>

	</body>

</html>
