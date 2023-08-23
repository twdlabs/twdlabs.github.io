


// Define list of post filters, each with: list of criteria, list of active criteria indexes. 
const postFilterList = [
	// {
	// 	tags:[
	// 		'xyz',
	// 	],
	// 	title:'Title',
	// 	criterionidlist:[
	// 		'xyz',
	// 	],
	// 	activecriterionindexlist:[],
	// },
];
// console.log('Post filter list:',postFilterList);


/*****/


// Add post filter for authors. 
addNewFilter('Authors','authorid', ['authorid']);
// console.log('Author filter:',authorfilter);

// Add post filter for year of publish date. 
addNewFilter('Year','year', ['published','year']);
// console.log('Year filter:',yearfilter);

// Add post filter for year/month of publish date. 
addNewFilter('Month','month', ['published','month']);
// console.log('Month filter:',monthfilter);

// Add post filter for keywords. 
addNewTagListFilter('Keywords','keywords', ['keywordlist']);
// console.log('Tag filter:',tagfilter);

// console.log('Post filter list:',postFilterList);


/*****/


// Add post filter for given property. 
function addNewFilter(propertytitle,propertytag,propertytagsequence) {

	// Initialize filter result. 
	let resultfilter = {
		// propertytags:propertytagsequence,
		title:propertytitle,
		criterionidlist:[
			// 'criterionid',
		],
		activecriterionindexlist:[],
	};

	// Save all distinct values for given property (from blog post list to filter criteria list). 
	for(let blogpost of blogDataList) {

		// Get value of property for given post. 
		let value = getPropertyValue(blogpost);
		// let value = blogpost[propertytag];

		// Check if already saved. 
		let alreadySaved = resultfilter['criterionidlist'].includes(value);
		// Save value for given post if not already saved. 
		if(!alreadySaved) resultfilter['criterionidlist'].push(value);
	}

	// Add filter to post filter list. 
	postFilterList.push(resultfilter);

	/****/

	// Get value of property. 
	function getPropertyValue(initial) {

		// Initialize result. 
		let result = initial;

		// Go thru sequence of property tags. 
		for(let tag of propertytagsequence) {

			// Add next property tag in sequence. 
			result = result[tag];
		}

		// Return result. 
		return result;
	}
}

// Add post filter for given tag list. 
function addNewTagListFilter(propertytitle,propertytag,propertytagsequence) {

	// Initialize filter result. 
	let resultfilter = {
		// propertytags:propertytagsequence,
		title:propertytitle,
		criterionidlist:[
			// 'criterionid',
		],
		activecriterionindexlist:[],
	};

	// Save all distinct values for given property (from blog post list to filter criteria list). 
	for(let blogpost of blogDataList) {

		// Get value of property list for given post. 
		let propertylist = blogpost[propertytag];

		// Go thru values in property list for given post. 
		for(let tag of propertylist) {

			// Check if already saved. 
			let alreadySaved = resultfilter['criterionidlist'].includes(tag);
			// Save value for given post if not already saved. 
			if(tag && !alreadySaved) resultfilter['criterionidlist'].push(tag);
		}
	}

	// Add filter to post filter list. 
	postFilterList.push(resultfilter);
}
