


// Define number of items shown per page. 
const numPerPage = 10;


// Define data source. 
let dataSource = [
	
	// [
	// 	// 
	// 	// 
	// 	// 
	// 	// 
	// 	// 
	// ],

	[
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
	],

	[
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
	],

	[
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	],

];

// Reset data source. 
dataSource = defaultUserDataList;
console.log('Data source:',dataSource);


// Split data into pages. 
const pageData = [];
console.log('Page data:',pageData);

// Initialize page index. 
let pageindex = -1;

// Go thru each data point. 
for(dataindex in dataSource) {

	// Check for new page. 
	if(dataindex%numPerPage==0) {
		
		// Increment page index. 
		pageindex++;
		
		// Add new page. 
		pageData[pageindex] = [];
	}

	// Get current data point. 
	let datapoint = dataSource[dataindex];

	// Add data point to current page. 
	pageData[pageindex].push(datapoint);
}
console.log('Page data:',pageData);
