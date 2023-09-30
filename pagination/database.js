


// Define number of items shown per page. 
const numPerPage = 10;


// Define data source. 
let dataSource = defaultUserData;
console.log('Data source:',dataSource);


// Create page data. 
const pagesData = createPagesData();
console.log('Page data:',pagesData);


/*****/


// Create data for pages by splitting data from source. 
function createPagesData() {

	// Initialize result. 
	const result = [];
	
	// Initialize page index. 
	let pageindex = -1;
	
	// Go thru each data point. 
	for(let dataindex in dataSource) {
	
		// Check for new page. 
		if(dataindex%numPerPage==0) {
			
			// Increment page index. 
			pageindex++;
			
			// Add new page. 
			result[pageindex] = [];
		}
	
		// Get current data point. 
		let datapoint = dataSource[dataindex];
	
		// Add data point to current page. 
		result[pageindex].push(datapoint);
	}

	// Return result. 
	return result;
}
