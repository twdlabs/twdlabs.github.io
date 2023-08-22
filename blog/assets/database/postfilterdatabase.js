


// Define list of post filters, each with list of criteria. 
const postFilterList = [
	// {
	// 	title:'X Authors',
	// 	criterionidlist:[
	// 		'AVentura',
	// 		'BDiamond',
	// 		'CBrophy',
	// 		'DDoe',
	// 		'EJah',
	// 		'FFlinstone',
	// 		'GDoe',
	// 		'HDoe',
	// 		'IRobertson',
	// 	],
	// },
	// {
	// 	title:'Y Authors',
	// 	criterionidlist:[
	// 		'JDoe',
	// 		'JJenkins',
	// 		'JJoe',
	// 		'JJackson',
	// 		'JDoe',
	// 		'JDoe',
	// 		'JSmith',
	// 		'KCroix',
	// 		'LLloyd',
	// 		'MMyers',
	// 	],
	// },
	// {
	// 	title:'Z Authors',
	// 	criterionidlist:[
	// 		'NNash',
	// 		'ODeLaHoya',
	// 		'PPan',
	// 		'QDoe',
	// 		'RRoy',
	// 		'SStephens',
	// 		'TToole',
	// 		'TDoe',
	// 		'UDoe',
	// 		'VVictorian',
	// 		'WWill',
	// 		'XToven',
	// 		'YYokes',
	// 	],
	// },
];
// console.log('Post filter list:',postFilterList);

// Define list of active post filters for adjacent post list. 
const activePostFilterList = [];
// console.log('Active post filter list:',activePostFilterList);


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
// console.log('Active post filter list:',activePostFilterList);


/*****/


// Add post filter for given property. 
function addNewFilter(propertytag,propertytitle) {

	// Initialize result. 
	let result = {
		title:propertytitle,
		criterionidlist:[
			// 'tagtitle',
		],
	};

	// Create empty result. 
	let emptyresult = {
		title:propertytitle,
		criterionindexlist:[],
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

	// Add full filter to main list. 
	postFilterList.push(result);

	// Add empty filter to active list. 
	activePostFilterList.push(emptyresult);
}

// Add post filter for given time property. 
function addNewTimeFilter(propertytag,propertytitle) {

	// Initialize result. 
	let result = {
		title:propertytitle,
		criterionidlist:[
			// 'tagtitle',
		],
	};

	// Create empty result. 
	let emptyresult = {
		title:propertytitle,
		criterionindexlist:[],
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

	// Add full filter to main list. 
	postFilterList.push(result);

	// Add empty filter to active list. 
	activePostFilterList.push(emptyresult);
}

// Add post filter for given tag list. 
function addNewTagListFilter(propertytag,propertytitle) {

	// Initialize result. 
	let result = {
		title:propertytitle,
		criterionidlist:[
			// 'tagtitle',
		],
	};

	// Create empty result. 
	let emptyresult = {
		title:propertytitle,
		criterionindexlist:[],
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

	// Add full filter to main list. 
	postFilterList.push(result);

	// Add empty filter to active list. 
	activePostFilterList.push(emptyresult);
}
