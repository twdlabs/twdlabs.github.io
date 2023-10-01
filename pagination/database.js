


// Define number of items shown per page. 
const numPerPage = 10;


// Define data source. 
let dataSource = defaultUserData;
console.log('Data source:',dataSource);


// Create paginated data. 
const pagedData = paginateData();
console.log('Pages of data:',pagedData);


/*****/


// Create paginated version of data. 
function paginateData() {

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

	// Return result. 
	return result;
}
