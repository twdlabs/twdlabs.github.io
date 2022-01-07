

// Get search parameters from url. 
const params = new URLSearchParams(window.location.search);
console.log('window.location.search', window.location.search);
// console.log('params', params);

// Show product items on page. 
showProducts();


/*****/


// Show product items on page. 
function showProducts() {

	// Get query value from search parameters. 
	let filter = params.get('q');
	if(!filter) filter = '';
	console.log('Filter:', filter);

	// Get destination for product elements. 
	let destination = document.querySelector('section#listings main');

	// Create set of elements representing all matching product items. 
	let result = '';
	for(i in productdata) {
		
		// Initialize product matches filter query. 
		let weGotAMatch = false;
		// TODO: Check if product matches filter query. 
		if(filter.length==0) weGotAMatch = true;
		else {
			for(tag of productdata[i].taglist) {
				let yup = tag.includes(filter);
				if(yup) weGotAMatch = true;
			}
		}

		// Add product element if product matches filter query. 
		if(weGotAMatch) result += createProductElement(i);
	}

	// Add elements to page. 
	destination.innerHTML = result;
}

// Create product element. 
function createProductElement(productid) {

	// Get product data item. 
	let product = productdata[productid];

	// Get product urls. 
	let atHome = atRootDir;
	let url = `${ (atHome) ? ('') : ('../') }${product.producturl}`;
	let photourl = `${ (atHome) ? ('') : ('../') }${product.photourl}`;

	return `
	<!-- item -->
	<div class="item ${ inFavsList(productid)?('liked'):('') }" data-productid="${productid}">

		<!-- top -->
		<div class="top">

			<!-- photo -->
			<a class="photo" href="${ url }" style="background-image:url('${ photourl }')"></a>
			<!-- /photo -->

			<!-- panel -->
			<div class="panel">

				<!-- ctabtn -->
				<a class="ctabtn search active" href="javascript:void(0)">

					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
					</svg>
					<!-- /icon -->
					
				</a>
				<!-- /ctabtn -->

				<!-- ctabtn -->
				<a class="ctabtn favs active" href="javascript:void(0)">

					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
					</svg>
					<!-- /icon -->
					
				</a>
				<!-- /ctabtn -->

				<!-- ctabtn -->
				<a class="ctabtn watch active" href="javascript:void(0)">

					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
						<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
					</svg>
					<!-- /icon -->
					
				</a>
				<!-- /ctabtn -->

			</div>
			<!-- /panel -->

		</div>
		<!-- /top -->

		<!-- content -->
		<div class="content">

			<!-- productname -->
			<h3 class="productname">
				<a class="name" href="${ url }">${ product.name }</a>
			</h3>
			<!-- /productname -->

			<!-- productdescription -->
			<div class="productdescription">${ product.description }</div>
			<!-- /productdescription -->

			<!-- productrating -->
			<div class="productrating">

				<!-- rating -->
				<div class="rating">${ getRatingStars(product.rating.average) }</div>
				<!-- /rating -->

				<!-- numratings -->
				<div class="numratings">${ product.rating.numratings }</div>
				<!-- /numratings -->
				
			</div>
			<!-- /productrating -->

			<!-- productprice -->
			<div class="productprice">

				<!-- price -->
				<a class="price" href="${ url }">${ (1*product.price).toFixed(2) }</a>
				<!-- /price -->

				<!-- exprice -->
				<a class="price exprice" href="${ url }">${ (1*product.exprice).toFixed(2) }</a>
				<!-- /exprice -->

			</div>
			<!-- /productprice -->

			<!-- productcta -->
			<div class="productcta">

				<!-- ctabtn -->
				<a class="ctabtn cart" href="javascript:void(0)" onclick="addToCart(this.parentElement.parentElement.parentElement)">

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
				<a class="ctabtn favs" href="javascript:void(0)" title="Add To Favs" onclick="toggleFav(this.parentElement.parentElement.parentElement)">
						
					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
					</svg>
					<!-- /icon -->
					
				</a>
				<!-- /ctabtn -->

			</div>
			<!-- /productcta -->

		</div>
		<!-- /content -->

	</div>
	<!-- /item -->`;

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

	// Check if product in favorites list. 
	function inFavsList(queryId) {

		// Get user's favs data. 
		let favsidlist = ( isLoggedIn() ) ? ( userdata[currentuserid].favIds ) : ( [] );

		// Check liked items until match found. 
		for(id of favsidlist) {
			// Yes if matching id found in array. 
			if(id==queryId) return true;
		}

		// No if not found. 
		return false;
	}
}
