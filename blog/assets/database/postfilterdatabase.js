


// Define list of post filters, each with list of criteria. 
const postFilterList = [
	// {
	// 	title:'X Authors',
	// 	criteria:[
	// 		'Ace Ventura',
	// 		'Bill Diamond',
	// 		'Christine Brophy',
	// 		'David Doe',
	// 		'Eli Jah',
	// 		'Fred Flinstone',
	// 		'George Doe',
	// 		'Hilary Doe',
	// 		'Ian Robertson',
	// 	],
	// },
	// {
	// 	title:'Y Authors',
	// 	criteria:[
	// 		'Jane Doe',
	// 		'Jay Jenkins',
	// 		'Jenny Joe',
	// 		'Jill Jackson',
	// 		'Jim Doe',
	// 		'Joe Doe',
	// 		'John Luke Smith',
	// 		'Kate Croix',
	// 		'Leah Lloyd',
	// 		'Mike Myers',
	// 	],
	// },
	// {
	// 	title:'Z Authors',
	// 	criteria:[
	// 		'Nina Nash',
	// 		'Oscar DeLaHoya',
	// 		'Peter Pan',
	// 		'Quinten Doe',
	// 		'Rachel Roy',
	// 		'Steve Stephens',
	// 		'Tim Toole',
	// 		'Tori Doe',
	// 		'Ursula Doe',
	// 		'Victor Victorian',
	// 		'Wendy Will',
	// 		'Xavier Toven',
	// 		'Yolanda Yokes',
	// 	],
	// },
];
// console.log('Post filter list:',postFilterList);


/*****/


// Get post filter for author. 
let authorfilter = getPostFilter('authorid','Authors');
console.log('Author filter:',authorfilter);
// Save post filter for author. 
postFilterList.push(authorfilter);

// Get post filter for series tag. 
let tagfilter = getPostTagListFilter('taglist','Series');
console.log('Tag filter:',tagfilter);
// Save post filter for series tag. 
postFilterList.push(tagfilter);

// Get post filter for publish year. 
let yearfilter = getPostTimeFilter('year','Year');
console.log('Year filter:',yearfilter);
// Save post filter for publish year. 
postFilterList.push(yearfilter);

// Get post filter for publish month. 
let monthfilter = getPostTimeFilter('month','Month');
console.log('Month filter:',monthfilter);
// Save post filter for publish year. 
postFilterList.push(monthfilter);


/*****/


// Get post filter for given property. 
function getPostFilter(propertytag,propertytitle) {

	// Initialize result. 
	let result = {
		title:propertytitle,
		criteria:[
			// 'tagtitle',
		],
	};

	// Save distinct values for given tag from blog post data to filtercriteria list. 
	for(let blogpost of blogDataList) {

		// Get value of tag for given post. 
		let value = blogpost[propertytag];

		// Check if already there. 
		let alreadyThere = result['criteria'].includes(value);
		// Save value for given post if not already there. 
		if(!alreadyThere) result['criteria'].push(value);
	}

	// Return result. 
	return result;
}

// Get post filter for given time property. 
function getPostTimeFilter(propertytag,propertytitle) {

	// Initialize result. 
	let result = {
		title:propertytitle,
		criteria:[
			// 'tagtitle',
		],
	};

	// Save distinct values for given tag from blog post data to filtercriteria list. 
	for(let blogpost of blogDataList) {

		// Get value of tag for given post. 
		let value = blogpost.published[propertytag];

		// Check if already there. 
		let alreadyThere = result['criteria'].includes(value);
		// Save value for given post if not already there. 
		if(!alreadyThere) result['criteria'].push(value);
	}

	// Return result. 
	return result;
}

// Get post filter for given tag list. 
function getPostTagListFilter(propertytag,propertytitle) {

	// Initialize result. 
	let result = {
		title:propertytitle,
		criteria:[
			// 'tagtitle',
		],
	};

	// Save distinct values for given tag from blog post data to filtercriteria list. 
	for(let blogpost of blogDataList) {

		// Get tag list for given post. 
		let taglist = blogpost[propertytag];
		// Go thru tag list for given post. 
		for(let tag of taglist) {

			// Check if already there. 
			let alreadyThere = result['criteria'].includes(tag);
			// Save value for given post if not already there. 
			if(!alreadyThere) result['criteria'].push(tag);
		}
	}

	// Return result. 
	return result;
}
