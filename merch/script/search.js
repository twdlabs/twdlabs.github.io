

// TODO: Search for products related to search query. 
function searchForProduct() {

	// Initialize list of ids for matching products. 
	let matchingProductIds = [];

	// Get search query from search field. 
	let searchfield = document.getElementById('searchquery')
	let query = searchfield.value;

	// Clear search field and remove focus. 
	searchfield.value = '';
	searchfield.blur();
	closeOtherDrawers();

	// Show search query. 
	console.log('Search query: '+query);

	// Get all matching products. 
	for(key in productdata) {

		// Get product data item. 
		p = productdata[key];

		// Add to list of matching products if name or descriptions matches query. 
		if( p.name.includes(query) || p.description.includes(query) ) matchingProductIds.push(key);
	}

	// TODO: Show results popup page with matching products. 
	console.log('All products:',productdata);
	console.log('matchingProductIds',matchingProductIds);
	alert('Search results for: '+query + '\n' + ( matchingProductIds.length ? matchingProductIds : '[none]' ) );
}
