

// Get search parameters from url. 
const params = new URLSearchParams(window.location.search);
console.log('window.location.search', window.location.search);
// console.log('params', params);

// Show product details on page. 
showProductDetails();

// Show featured products on page. 
showFeaturedProducts();


/*****/


// Show product details on page. 
function showProductDetails() {

	// Get query value from search parameters. 
	let productid = params.get('pid');
	if(!productid) productid = '';
	console.log('Product ID:', productid);

	// Get product details. 
	let product = productdata[productid];
	let photourl = product ? getRelativeUrl(product.photourl) : '';

	// Show product details. 
	document.getElementById('productpic').style.backgroundImage = `url('${photourl}')`;
	document.getElementById('name').innerHTML = product ? product.productname : '';
	document.getElementById('rating').innerHTML = product ? getRatingStars(product.rating.average) : '';
	document.getElementById('retailprice').innerHTML = product ? (1*product.exprice).toFixed(2) : '';
	document.getElementById('dealprice').innerHTML = product ? (1*product.price).toFixed(2) : '';
	document.getElementById('savedamount').innerHTML = product ? (1*product.exprice - 1*product.price).toFixed(2) : '';
	// document.getElementById('quantity').innerHTML = xyzabcxyz;
	document.getElementById('description').innerHTML = product ? product.description : '';
	// document.getElementById('xyzabcxyz').innerHTML = xyzabcxyz;
	// document.getElementById('xyzabcxyz').innerHTML = xyzabcxyz;

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
		return result;
		// console.log(result)
	}
}

// Show featured products on page. 
function showFeaturedProducts() {
	let result = '';
	for(let item of productdata) {
		result += `
		<!-- item -->
		<div class="item">
			
			<!-- pic -->
			<div class="pic"></div>
			<!-- /pic -->
			
			<!-- textcopy -->
			<div class="textcopy">
			
				<!-- name -->
				<div class="name">${item.productname}</div>
				<!-- /name -->
				
				<!-- rating -->
				<div class="rating">
					<svg class="star" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
					</svg>
					<svg class="star" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
					</svg>
					<svg class="star" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
					</svg>
					<svg class="star" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
					</svg>
					<svg class="star" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
					</svg>
				</div>
				<!-- /rating -->
				
				<!-- dealprice -->
				<div class="dealprice">${item.price}</div>
				<!-- /dealprice -->
				
				<!-- actionbtns -->
				<div class="actionbtns">
					
					<!-- addcartbtn -->
					<button class="addcartbtn">Add to Cart</button>
					<!-- /addcartbtn -->
					
				</div>
				<!-- /actionbtns -->

			</div>
			<!-- /textcopy -->
			
		</div>
		<!-- /item -->`;
	}
	document.getElementById('suggestions').innerHTML = result;
}


// Set initial quantity. 
let quantity = 1;
document.getElementById('quantity').innerHTML = quantity;

function changeQty(dx) {
	// Change quantity by given differential. 
	quantity += dx;

	// Undo change if it goes below one. 
	if(quantity<1) quantity -= dx;

	// Uodate quantity displayed on page. 
	document.getElementById('quantity').innerHTML = quantity;
}
