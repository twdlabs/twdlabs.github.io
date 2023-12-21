


// Define number of items shown per page. 
const numPerPage = 15;


// Define data source. 
const dataSource = {
	raw:defaultUserData,
	paged:paginateData(defaultUserData),
	// xyz:xyz,
};

// Define data source. 
// let dataSource = defaultUserData;
// console.log('Data source:',defaultUserData);

// Get number of data items. 
const numItems = dataSource.length;
console.log('Item count:',numItems);
console.log('Page capacity:',numPerPage);


// Create paginated data. 
const pagedData = paginateData(defaultUserData);
console.log('Pages of data:',pagedData);


// Get number of pages. 
const numPages = Math.ceil(numItems/numPerPage);
console.log('Page count:',numPages);


/*****/


// Create paginated version of data. 
function paginateData(dataSource) {

	// Initialize result. 
	let result = [];
	// Initialize page index. 
	let pageindex = -1;
	
	// Go thru each data point. 
	for(let dataindex in dataSource) {

		// Check if at start of new page. 
		let startNewPage = (dataindex%numPerPage) == 0;
	
		// Shift to next data set if at start of new page. 
		if(startNewPage) {
			// Add data list for new page. 
			result.push( [] );
			// Increment page index. 
			pageindex++;
		}
	
		// Get current data point. 
		let datapoint = dataSource[dataindex];
		// Add data point to list for current page. 
		result[pageindex].push(datapoint);
	}
	// console.log('Last page index:',pageindex);

	// Fill data for last page. 
	while( result[pageindex].length<numPerPage ) result[pageindex].push( {} );

	// Return result. 
	return result;
}
