

// Add product items to page. 
addProductItems();


/*****/


// Add product items to page. 
function addProductItems() {

	// Create elements for product items. 
	let result = '';
	// for(p of productdata) {
	for(i in productdata) {

		let p = productdata[i];
		
		// 
		result += `
		<!-- item -->
		<div class="item">

			<!-- photo -->
			<a class="photo" href="${p.producturl}" style="background-image:url('${p.photourl}')"></a>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- productname -->
				<h3 class="productname">
					<a class="name" href="${p.producturl}">${p.name}</a>
				</h3>
				<!-- /productname -->

				<!-- productdescription -->
				<div class="productdescription">${p.description}</div>
				<!-- /productdescription -->

				<!-- productrating -->
				<div class="productrating">

					<!-- rating -->
					<div class="rating">${getRatingStars(p.rating.average)}</div>
					<!-- /rating -->

					<!-- numratings -->
					<div class="numratings">${p.rating.numratings}</div>
					<!-- /numratings -->
					
				</div>
				<!-- /productrating -->

				<!-- productprice -->
				<div class="productprice">

					<!-- price -->
					<a class="price" href="${p.producturl}">${(1*p.price).toFixed(2)}</a>
					<!-- /price -->

					<!-- exprice -->
					<a class="price exprice" href="${p.producturl}">${(1*p.exprice).toFixed(2)}</a>
					<!-- /exprice -->

				</div>
				<!-- /productprice -->

				<!-- ctabtn -->
				<a class="ctabtn" href="javascript:void(0)" onclick="addToCart(this)" data-productid="${i}">Add To Cart</a>
				<!-- /ctabtn -->

			</div>
			<!-- /content -->

		</div>
		<!-- /item -->`;
	}

	// Add elements to page. 
	document.querySelector('section#products div.inner main').innerHTML = result;


	/*****/


	// Get elements for star rating. 
	function getRatingStars(avgrating) {

		// Get counts for each type of star. 
		let numfulls = Math.floor(avgrating);
		let numhalfs = Math.floor((avgrating*2)%2);
		let numempties = 5-(numfulls+numhalfs);

		// Create element for star rating. 
		let result = '';
		for(let i=0;i<numfulls;i++) result += stars.full;
		for(let i=0;i<numhalfs;i++) result += stars.half;
		for(let i=0;i<numempties;i++) result += stars.empty;

		// Return elements for star rating. 
		// console.log(result)
		return result;
	}
}
