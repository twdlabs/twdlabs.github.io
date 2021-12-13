

// Define navigation data. 
let navdata = [
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	},
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	},
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	},
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	}
];


/*****/


// Load navigation bar from file. 
$(document).ready(function() {

	// Update cart. 
	// updateCart();
	setTimeout(updateCart,100);
});



/*****/


// Load navigation bar from file. 
function loadNav(atRootDirectory) {
	console.log('loadNav()');

	// Get relative url of navbar file. 
	let url = ( (atRootDirectory) ? ('') : ('../') ) + 'navbar.html';
	console.log('Load navbar from:',url);

	// Load navbar. 
	$('#navbar').load(url);
	// $('#navbar').load(url,populateNavList);

	// populateNavList();
}

// Populate navigation list. 
function populateNavList() {

	// Create elements for navigation data items. 
	let result = '';
	for(item of navdata) {
		console.log('item',item);
		result += `
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a href="${item.url}" class="navlink page">${item.name}</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->`;
	}

	// Add result to page. 
	console.log('result',result);
	document.getElementById('navlist').innerHTML = (result);
}


// Toggle navbar slide drawer. 
function toggleDrawer(id) {

	// Close all other drawers. 
	closeOtherDrawers(id);
	
	// Toggle selected drawer. 
	document.getElementById(id).classList.toggle('active');
}

// Open navbar slide drawer. 
function openDrawer(id) {

	// Close all other drawers. 
	closeOtherDrawers(id);
	
	// Open selected drawer. 
	document.getElementById(id).classList.add('active');
}

// Close all other navbar slide drawers. 
function closeOtherDrawers(exceptionId) {

	// Get all nav drawers. 
	let navDrawers = document.querySelectorAll('.navdrawer');
	navDrawers = [...navDrawers];
	// console.log('navDrawers', navDrawers);

	// Get id's for all nav drawers. 
	// let drawerIds = ['navlist','searchbar','likebox','cartbox','accountbox'];
	let drawerIds = navDrawers.map( (node) => (node.id) );
	// console.log('drawerIds', drawerIds);

	// De-activate all other drawers. 
	for(id of drawerIds) {
		// Set drawer as inactive. 
		if(id!=exceptionId) document.getElementById(id).classList.remove('active');
	}
}


/* SEARCH */

// TODO: Search for products related to search query. 
function searchForProduct() {
	// Get search query. 
	let query = document.getElementById('searchquery').value;

	// Show search query. 
	console.log('Search: '+query);
	// alert('Search: '+query);

	// TODO: Search for matching products. 

	// TODO: Show search results page for matching products. 
}


/* LIKES */


/* CART */

// Add selected item to cart. 
function addToCart(element) {
	console.log('Now adding to cart:',element);

	// Get product id of selected item. 
	let id = element.getAttribute('data-productid');

	// Check if item is already in cart. 
	let alreadyInCart = false;
	let cartindex = -1;
	for (i in cartItems) {
		let item = cartItems[i];
		if(id==item.id) {
			alreadyInCart = true;
			cartindex = i;
		}
	}

	// Add id of selected item to cart array. 
	if(alreadyInCart) cartItems[cartindex].qty++;
	else cartItems.push({id:id,qty:1});

	// Show items in cart. 
	console.log('Cart:',cartItems);

	// Update cart items in cart drawer. 
	updateCart();

	// Show cart drawer on page. 
	openDrawer('cartbox');
}

// Update cart items in cart drawer. 
function updateCart() {
	
	// Sort cart items. 
	cartItems.sort(sortNumbers);

	// Add element for each cart item. 
	let result = '';
	for(item of cartItems) {

		// Get product by id. 
		product = productdata[item.id];

		// Create product element. 
		result += `
		<!-- item -->
		<div class="item">

			<!-- photo -->
			<div class="photo">${ (product.photourl) ? (`<img src="${product.photourl}">`) : ('') }</div>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- name -->
				<div class="name">${product.name}</div>
				<!-- /name -->

				<!-- desc -->
				<div class="desc">${product.description}</div>
				<!-- /desc -->

			</div>
			<!-- /content -->

			<!-- quantity -->
			<div class="quantity">
				<span class="delta">&minus;</span>
				<span class="qty">${item.qty}</span>
				<span class="delta">&plus;</span>
			</div>
			<!-- /quantity -->

		</div>
		<!-- /item -->
		`;
	}
	// console.log('result',result);

	// Get inside of cart drawer. 
	let cartbox = document.querySelector('div#cartbox div.inner');
	console.log('cartbox',cartbox);

	// Add elements to cart drawer. 
	cartbox.innerHTML = result;

	/*****/

	// Sort cart items. 
	function sortNumbers(a,b) {
		return (a.id-b.id);
	}

}


/* ACCOUNT */

