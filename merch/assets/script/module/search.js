

/* SEARCH */


// Search for products related to search query. 
function searchForProduct() {

	// Initialize list of ids for matching products. 
	let matchingProductIds = [];

	// Get search query from search field. 
	let searchfield = document.getElementById('searchquery')
	let query = searchfield.value;

	// Clear search field and remove focus. 
	searchfield.value = '';
	searchfield.blur();

	// Close all navbar slide drawers. 
	closeAllDrawersBut();

	// Show search query. 
	console.log('Search query: '+query);

	// Get all matching products. 
	for(index in productdata) {

		// Get product data item at index. 
		product = productdata[index];

		// Check if product name or description matches search query (case insensitive). 
		let n = product.productname.toUpperCase();
		let d = product.description.toUpperCase();
		let q = query.toUpperCase();
		let weGotAMatch = n.includes(q) || d.includes(q);

		// Add to list of matching products if match found. 
		if(weGotAMatch) matchingProductIds.push(index);
	}

	// Show results popup page with matching products. 
	console.log('All products:',productdata);
	console.log(`Search results for: "${query}"`, matchingProductIds);
	passTheToast(   `Search results for: "${query}"<br>`  +  '['+( (matchingProductIds.length) ? (matchingProductIds) : ('none') )+']'   );
}
