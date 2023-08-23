


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


// Add post filter for author. 
addNewFilter('authorid','Authors');
// console.log('Author filter:',authorfilter);

// Add post filter for series tag. 
addNewTagListFilter('taglist','Series');
// console.log('Tag filter:',tagfilter);

// Add post filter for publish year. 
addNewTimeFilter('year','Year');
// console.log('Year filter:',yearfilter);

// Add post filter for publish month. 
addNewTimeFilter('month','Month');
// console.log('Month filter:',monthfilter);

// console.log('Post filter list:',postFilterList);


/*****/


// Add post filter for given property. 
function addNewFilter(propertytag,propertytitle) {

	// Initialize result. 
	let result = {
		tags:[],
		title:propertytitle,
		criterionidlist:[
			// 'tagtitle',
		],
		activecriterionindexlist:[],
	};

	// Save distinct values for given tag from blog post data to filtercriteria list. 
	for(let blogpost of blogDataList) {

		// Get value of tag for given post. 
		let value = blogpost[propertytag];

		// Check if already there. 
		let alreadyThere = result['criterionidlist'].includes(value);
		// Save value for given post if not already there. 
		if(!alreadyThere) result['criterionidlist'].push(value);
	}

	// Add filter to post filter list. 
	postFilterList.push(result);
}

// Add post filter for given time property. 
function addNewTimeFilter(propertytag,propertytitle) {

	// Initialize result. 
	let result = {
		tags:[],
		title:propertytitle,
		criterionidlist:[
			// 'tagtitle',
		],
		activecriterionindexlist:[],
	};

	// Save distinct values for given tag from blog post data to filtercriteria list. 
	for(let blogpost of blogDataList) {

		// Get value of tag for given post. 
		let value = blogpost.published[propertytag];

		// Check if already there. 
		let alreadyThere = result['criterionidlist'].includes(value);
		// Save value for given post if not already there. 
		if(!alreadyThere) result['criterionidlist'].push(value);
	}

	// Add filter to post filter list. 
	postFilterList.push(result);
}

// Add post filter for given tag list. 
function addNewTagListFilter(propertytag,propertytitle) {

	// Initialize result. 
	let result = {
		tags:[],
		title:propertytitle,
		criterionidlist:[
			// 'tagtitle',
		],
		activecriterionindexlist:[],
	};

	// Save distinct values for given tag from blog post data to filtercriteria list. 
	for(let blogpost of blogDataList) {

		// Get tag list for given post. 
		let taglist = blogpost[propertytag];
		// Go thru tag list for given post. 
		for(let tag of taglist) {

			// Check if already there. 
			let alreadyThere = result['criterionidlist'].includes(tag);
			// Save value for given post if not already there. 
			if(tag && !alreadyThere) result['criterionidlist'].push(tag);
		}
	}

	// Add filter to post filter list. 
	postFilterList.push(result);
}
