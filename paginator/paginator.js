


// Create paginated version of given data. 
function paginateData(rawdatasource,pagecapacity) {
	// console.log('Page capacity:',pagecapacity);

	// Initialize data matrix. 
	let datamatrix = [];

	// Initialize page index below zero as baseline. 
	let pageindex = -1;
	// Initialize list for current page. 
	let currentpagelist = undefined;
	
	// Go thru each data point in given data source. 
	for(let dataindex in rawdatasource) {

		// Check if current page at capacity. 
		let atpagecapacity = (dataindex%pagecapacity) == 0;
	
		// Start to new page if current page at capacity. 
		if(atpagecapacity) {

			// Add to data matrix: data list for new page. 
			datamatrix.push( [] );

			// Increment page index. 
			pageindex++;

			// Get list for new page. 
			currentpagelist = datamatrix[pageindex];
		}
	
		// Get current data point. 
		let datapoint = rawdatasource[dataindex];

		// Add current data point to list for current page. 
		currentpagelist.push(datapoint);
	}
	// console.log('Last page:',pageindex,currentpagelist);

	// Fill data for last page. 
	while( currentpagelist.length < pagecapacity ) {

		// Add empty data item. 
		currentpagelist.push( '' );
		// currentpagelist.push( {} );
	}
	// console.log('Last page:',pageindex,currentpagelist);

	// Return data matrix. 
	return datamatrix;
}
