

// Add product items to page. 
// addProductItems();


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

				<!-- productaction -->
				<div class="productaction">

					<!-- ctabtn -->
					<a class="ctabtn cart" href="javascript:void(0)" onclick="addToCart(this)" data-productid="${i}">

						<!-- icon -->
						<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
							<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">Add To Cart</span>
						<!-- /caption -->
					
					</a>
					<!-- /ctabtn -->

					<!-- ctabtn -->
					<a class="ctabtn favs ${ inFavsList(i) ? ('active') : ('') }" href="javascript:void(0)" onclick="toggleFav(this)" data-productid="${i}" title="Add To Favs">
							
						<!-- icon -->
						<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
							<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
						</svg>
						<!-- /icon -->
						
					</a>
					<!-- /ctabtn -->

				</div>
				<!-- /productaction -->

			</div>
			<!-- /content -->

		</div>
		<!-- /item -->`;
	}

	// Add elements to page. 
	document.querySelector('section#featured div.inner main').innerHTML = result;


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


	// Check if product in favorites list. 
	function inFavsList(queryId) {

		// Check liked items until match found. 
		for(id of userdata[currentuserid].favIds) {
			// Yes if matching id found in array. 
			if(id==queryId) return true;
		}

		// No if not found. 
		return false;
	}
}
