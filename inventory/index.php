
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
	
	<body>

		<!-- #container -->
		<div id="container">

			<?php 
				$operation = $_POST['operation'];
				$productname = $_POST['productname'];
				$productprice = $_POST['productprice'];
				$productimageurl = $_POST['productimageurl'];
			?>

			<!-- #feedback -->
			<section id="feedback" class="expand <?php if($operation) {echo 'active';} ?>" ondblclick="this.classList.toggle('expand');">

				<!-- output -->
				<div class="output">

					<!-- caption -->
					<span class="caption">Operation: </span>
					<!-- /caption -->

					<!-- value -->
					<span class="value">
						<?php echo $operation; ?>
					</span>
					<!-- /value -->
					
				</div>
				<!-- /output -->

				<!-- output -->
				<div class="output">

					<!-- caption -->
					<span class="caption">Name: </span>
					<!-- /caption -->

					<!-- value -->
					<span class="value">
						<?php echo $productname; ?>
					</span>
					<!-- /value -->

				</div>
				<!-- /output -->

				<!-- output -->
				<div class="output">

					<!-- caption -->
					<span class="caption">Price: </span>
					<!-- /caption -->

					<!-- value -->
					<span class="value">
						<?php echo $productprice; ?>
					</span>
					<!-- /value -->

				</div>
				<!-- /output -->

				<!-- output -->
				<div class="output">

					<!-- caption -->
					<span class="caption">Image: </span>
					<!-- /caption -->

					<!-- value -->
					<span class="value">
						<?php echo $productimageurl; ?>
					</span>
					<!-- /value -->
					
				</div>
				<!-- /output -->

				<!-- btn -->
				<div class="expandbtn btn" onclick="this.parentElement.classList.toggle('expand');">&plus;</div>
				<!-- /btn -->

				<!-- btn -->
				<div class="closebtn btn" onclick="this.parentElement.classList.remove('active');">&times;</div>
				<!-- /btn -->
				
			</section>
			<!-- /#feedback -->

			<!-- #creator -->
			<section id="creator">

				<!-- form -->
				<form class="form" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">

					<!-- title -->
					<h2 class="title">
						<span class="caption">Add A New Product</span>
					</h2>
					<!-- /title -->

					<!-- input -->
					<div class="input">
						<input type="text" id="productname" name="productname" placeholder="Enter product name" autocomplete="off">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="number" id="productprice" name="productprice" placeholder="Enter product price" min="0">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="file" id="productimageurl" name="productimageurl" placeholder="Select product image">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">

						<!-- addbtn -->
						<button class="addbtn btn" name="operation" value="Add Product">

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
				<form class="form" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">

					<h2 class="title">
						<span class="caption">Edit Product</span>
					</h2>

					<!-- input -->
					<div class="input">
						<input type="text" id="productname" name="productname" placeholder="Enter product name">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="number" id="productprice" name="productprice" placeholder="Enter product price">
					</div>
					<!-- /input -->

					<!-- input -->
					<div class="input">
						<input type="file" id="productimageurl" name="productimageurl" placeholder="Enter product price">
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
						<button class="updatebtn btn" name="operation" value="Update Product">

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
								<button class="editbtn btn">

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
								<form class="form" action="index.php" method="post">

									<!-- deletebtn -->
									<button class="deletebtn btn" name="operation" value="Delete Product">

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
