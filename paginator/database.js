


// Define number of items shown per page. 
const pagecapacity = 10;
console.log('Page capacity:',pagecapacity);


// Define source of raw data. 
const rawdatasource = defaultUserData.map( x => x.username );
console.log('Raw data:',rawdatasource);

// Create source of paged data. 
const pageddatasource = paginateData(/* rawdatasource */);
console.log('Paged data:',pageddatasource);


// Get total number of data items. 
const dataitemcount = rawdatasource.length;
console.log('Item count:',dataitemcount);

// Get total number of pages. 
const pagecount = Math.ceil(dataitemcount/pagecapacity);
console.log('Page count:',pagecount);


/*****/


// Create paginated version of given data. 
function paginateData(/* rawdatasource */) {

	// Initialize data result. 
	let result = [];

	// Initialize page index below zero as baseline. 
	let pageindex = -1;
	
	// Go thru each data point in given data source. 
	for(let dataindex in rawdatasource) {

		// Check if starting new page. 
		let startNewPage = (dataindex%pagecapacity) == 0;
	
		// Shift to next data set if at start of new page. 
		if(startNewPage) {
			// Add data list for new page. 
			result.push( [] );
			// Increment page index. 
			pageindex++;
		}
	
		// Get current data point. 
		let datapoint = rawdatasource[dataindex];
		// Add data point to list for current page. 
		result[pageindex].push(datapoint);
	}
	// console.log('Last page index:',pageindex);

	// Fill data for last page. 
	while( result[pageindex].length<pagecapacity ) result[pageindex].push( {} );

	// Return result. 
	return result;
}
