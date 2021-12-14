

// Load navigation bar from file. 
$(document).ready(function() {

	// Update cart. 
	console.log('Started up...');
	// updateCart();
	setTimeout(updateCart,500);
});


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

/* CART */

/* ACCOUNT */

