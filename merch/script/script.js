

// Load navigation bar from file. 
$(document).ready(function() {

	setTimeout(startItUp,500);
});


// Start it up. 
function startItUp() {
	console.log('Starting up...');

	// Update accounts. 
	updateAccounts();

	// Update cart. 
	updateCart();

	// Update favorites. 
	updateFavs();

	console.log('Started up...');
}

/*****/


// Load navigation bar from file. 
function loadNav(atRootDirectory) {
	// console.log('loadNav()');

	// Get relative url of navbar file. 
	let url = ( (atRootDirectory) ? ('') : ('../') ) + 'navbar.html';
	// console.log('Load navbar from:',url);

	// Load default navbar. Populate navigation lists. 
	// $('#navbar').load(url);
	$('#navbar').load(url,populateNavList);

	/*****/

	// Populate header navigation list. 
	function populateNavList() {
	
		// Create elements for navigation data items. 
		let result = '';
		for(item of navdata[0]) {
			// console.log('item',item);
			result += `
			<!-- navitem -->
			<li class="navitem">
	
				<!-- navlink -->
				<a class="navlink page" href="${item.url}">${item.name}</a>
				<!-- /navlink -->
	
			</li>
			<!-- /navitem -->`;
		}
		// console.log('result',result);
	
		// Add result to page. 
		document.querySelector('div#navlist ul.navlist').innerHTML = (result);
	}
}


// Load footer bar from file. 
function loadFooter(atRootDirectory) {
	// console.log('loadFooter()');

	// Get relative url of navbar file. 
	let url = ( (atRootDirectory) ? ('') : ('../') ) + 'footer.html';
	// console.log('Load footer from:',url);

	// Load default footer. Populate navigation lists. 
	// $('#footer').load(url);
	$('#footer').load(url,populateFooter);

	/*****/

	// Populate footer navigation list. 
	function populateFooter() {
	
		// Create elements for navigation data items. 
		let resultA = '';
		let resultB = '';
		let resultC = '';

		// for(list of navdata) {
		// }

		for(item of navdata[0]) {
			// console.log('item',item);

			// 
			resultA += `
			<!-- navitem -->
			<li class="navitem">

				<!-- icon -->
				<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
				</svg>
				<!-- /icon -->
	
				<!-- navlink -->
				<a href="${item.url}" class="navlink page">${item.name}</a>
				<!-- /navlink -->
	
			</li>
			<!-- /navitem -->`;
		}
		// console.log('resultA',resultA);

		for(item of navdata[1]) {
			// console.log('item',item);

			// 
			resultB += `
			<!-- navitem -->
			<li class="navitem">

				<!-- icon -->
				<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
				</svg>
				<!-- /icon -->
	
				<!-- navlink -->
				<a href="${item.url}" class="navlink page">${item.name}</a>
				<!-- /navlink -->
	
			</li>
			<!-- /navitem -->`;
		}
		// console.log('resultB',resultB);

		for(item of navdata[2]) {
			// console.log('item',item);

			// 
			resultC += `
			<!-- navitem -->
			<li class="navitem">

				<!-- icon -->
				<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
				</svg>
				<!-- /icon -->
	
				<!-- navlink -->
				<a href="${item.url}" class="navlink page">${item.name}</a>
				<!-- /navlink -->
	
			</li>
			<!-- /navitem -->`;
		}
		// console.log('resultC',resultC);
	   
		// Add result to page. 
		document.querySelector('#footer div.col ul#quicklinks').innerHTML = resultA;
		document.querySelector('#footer div.col ul#morelinks').innerHTML = resultB;
		document.querySelector('#footer div.col ul#contactlinks').innerHTML = resultC;
		// let navlists = document.querySelectorAll('#footer ul.navlist');
		// for(list of navlists) {
		// 	list.innerHTML = result;
		// }
	}
}


/* SEARCH */


/* FAVORITES */

// Update liked items in favorites drawer. 
function updateFavs() {
	console.log('Updating favorites...');

	// Add element for each liked item. 
	let result = '';
	for(id of favIds) {

		// Get product by id. 
		p = productdata[id];

		// Create fav element. 
		result += `
		<!-- item -->
		<div class="item" data-productid="${item.productid}">

			<!-- photo -->
			<div class="photo" style="background-image:url('${p.photourl}');"></div>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- name -->
				<div class="name">${p.name}</div>
				<!-- /name -->

				<!-- desc -->
				<div class="desc">${p.description}</div>
				<!-- /desc -->

				<!-- price -->
				<div class="price">${ (1*p.price).toFixed(2) }</div>
				<!-- /price -->

			</div>
			<!-- /content -->

		</div>
		<!-- /item -->`;
	}
	// console.log('result',result);

	// Get inside of cart drawer. 
	let likebox = document.querySelector('div#likebox div.inner');
	// console.log('likebox',likebox);

	// Add elements to cart drawer. 
	likebox.innerHTML = result;
}


/* CART */

// Update cart items in cart drawer. 
function updateCart() {
	console.log('Updating cart...');
	
	// Sort cart items. 
	// cartItems.sort(sortNumbers);

	// Add element for each cart item. 
	let result = '';
	for(item of cartItems) {

		// Get product by id. 
		p = productdata[item.productid];

		// Create product element. 
		result += `
		<!-- item -->
		<div class="item" data-productid="${item.productid}">

			<!-- photo -->
			<div class="photo" style="background-image:url('${p.photourl}');"></div>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- name -->
				<div class="name">${p.name}</div>
				<!-- /name -->

				<!-- desc -->
				<div class="desc">${p.description}</div>
				<!-- /desc -->
	
				<!-- price -->
				<div class="price">${ (1*p.price).toFixed(2) }</div>
				<!-- /price -->

			</div>
			<!-- /content -->

			<!-- quantity -->
			<div class="quantity">
				<span class="delta" onclick="changeCartQty(${item.productid},-1)">&minus;</span>
				<span class="qty">${item.qty}</span>
				<span class="delta" onclick="changeCartQty(${item.productid},1)">&plus;</span>
			</div>
			<!-- /quantity -->

		</div>
		<!-- /item -->
		`;
	}
	// console.log('result',result);

	// Get inside of cart drawer. 
	let cartbox = document.querySelector('div#cartbox div.inner');
	// console.log('cartbox',cartbox);

	// Add elements to cart drawer. 
	cartbox.innerHTML = result;

	// Scroll to top of cart. 
	cartbox.scrollTop = 0;

	/*****/

	// Sort cart items. 
	function sortNumbers(a,b) {
		return (a.productid - b.productid ) ;
	}

}


/* ACCOUNT */

// Update user items in account drawer. 
function updateAccounts() {
	console.log('Updating accounts...');

	// Add element for each account item. 
	let result = '';
	for(account of accountData) {

		// Get product by id. 
		// p = productdata[item.productid];

		// Create account element. 
		result += `
		<!-- item -->
		<div class="item" data-userid="0">

			<!-- photo -->
			<div class="photo" style="background-image:url('${account.photourl}');"></div>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- name -->
				<div class="name">${account.fname} ${account.lname}</div>
				<!-- /name -->

				<!-- email -->
				<div class="email">${account.email}</div>
				<!-- /email -->

			</div>
			<!-- /content -->

		</div>
		<!-- /item -->`;
	}
	// console.log('result',result);

	// Get inside of account drawer. 
	let accountbox = document.querySelector('div#accountbox div.inner');
	// console.log('accountbox',accountbox);

	// Add elements to account drawer. 
	accountbox.innerHTML = result;
}

