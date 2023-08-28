


// Define list of post filters, each with: list of criteria, list of active criteria indexes. 
const postFilterList = [
	// {
	// 	filtertitle:'Filter Title',
	// 	propertytags:[
	// 		'xyz',
	// 	],
	// 	criterialist:[
	// 		{
	// 			criterionid:'xyz',
	// 			criteriontitle:'xyz',
	// 		},
	// 	],
	// 	criterionindexactivelist:[],
	// },
];
// console.log('Post filter list:',postFilterList);


/*****/


// Add post filter for authors. 
addNewFilter('Authors', ['authorid'] );
// console.log('Author filter:',authorfilter);

// Add post filter for year of publish date. 
addNewFilter('Year', ['published','year'] );
// console.log('Year filter:',yearfilter);

// Add post filter for year/month of publish date. 
// addNewFilter('Month', ['published','month'] );
// console.log('Month filter:',monthfilter);

// Add post filter for keywords. 
addNewTagListFilter('Keywords', ['keywords'] );
// console.log('Tag filter:',tagfilter);

console.log('Post filter list:',postFilterList);


/*****/


// Add post filter for given property. 
function addNewFilter(propertytitle,propertytagsequence,propertylabel) {

	// Initialize filter result. 
	let resultfilter = {
		filtertitle:propertytitle,
		// propertytag:propertytag,
		// propertytags:propertytagsequence,
		criterialist:[
			// {
			// 	criterionid:'xyz',
			// 	criteriontitle:'xyz',
			// 	filtertagsequence:[
			// 		'xyz',
			// 	],
			// },
		],
		criterionindexactivelist:[],
	};

	// Save all distinct values for given property (from blog post list to filter criteria list). 
	for(let blogpost of blogDataList) {

		// Get id for given post and filter criterion. 
		let criterionid = getPropertyValueByTagSequence(blogpost,propertytagsequence);
		// console.log('id:',criterionid);

		// Check if criterion already saved. 
		let criterionAlreadySaved = false;
		// criterionAlreadySaved = resultfilter['criterialist'].includes(criterionid);
		criterionAlreadySaved = checkIfCriterionAlreadySaved(resultfilter,criterionid);

		// Create new criterion item. 
		let newcriterionitem = 
		{
			criterionid:criterionid,
			criteriontitle:getCriterionTitle(criterionid),
			filtertagsequence:propertytagsequence,
		};
		// Save value for given post and filter criterion (if not already saved). 
		if(!criterionAlreadySaved) resultfilter['criterialist'].push(newcriterionitem);
	}

	// Add filter to post filter list. 
	postFilterList.push(resultfilter);

	/****/

	// TODO: Get criterion title by criterion id. 
	function getCriterionTitle(criterionid) {

		// 
		return criterionid;
		return `criterion: ${criterionid}`;
	}
}

// Add post filter for given tag list. 
function addNewTagListFilter(propertytitle,propertytagsequence,propertylabel) {

	// Initialize filter result. 
	let resultfilter = {
		filtertitle:propertytitle,
		// propertytag:propertytag,
		// propertytags:propertytagsequence,
		criterialist:[
			// {
			// 	criterionid:'xyz',
			// 	criteriontitle:'xyz',
			// 	filtertagsequence:[
			// 		'xyz',
			// 	],
			// },
		],
		criterionindexactivelist:[],
	};

	// Save all distinct values for given property (from blog post list to filter criteria list). 
	for(let blogpost of blogDataList) {

		// Get list of ids for given post and filter criterion. 
		let criterionidslist = getPropertyValueByTagSequence(blogpost,propertytagsequence);

		// Go thru values in property list for given post. 
		for(let criterionid of criterionidslist) {

			// Check if criterion already saved. 
			let criterionAlreadySaved = false;
			// criterionAlreadySaved = resultfilter['criterialist'].includes(criterionid);
			criterionAlreadySaved = checkIfCriterionAlreadySaved(resultfilter,criterionid);

			// Create new criterion item. 
			let newcriterionitem = 
			{
				criterionid:criterionid,
				criteriontitle:getCriterionTitle(criterionid),
				filtertagsequence:propertytagsequence,
			};
			// Save value for given post and filter criterion (if not already saved). 
			if(criterionid && !criterionAlreadySaved) resultfilter['criterialist'].push(newcriterionitem);
		}
	}

	// Add filter to post filter list. 
	postFilterList.push(resultfilter);

	/****/

	// TODO: Get criterion title by criterion id. 
	function getCriterionTitle(criterionid) {

		// 
		return criterionid;
		return `criterion: ${criterionid}`;
	}
}

// Get value of property by tag sequence. 
function getPropertyValueByTagSequence(initial,propertytags) {
	// console.log('initial:',initial);
	// console.log('propertytags:',propertytags);

	// Initialize result. 
	let result = initial;

	// Go thru sequence of property tags. 
	for(let tag of propertytags) {

		// Add next property tag in sequence. 
		result = result[tag];
	}

	// Return result. 
	return result;
}

// Check if criterion already saved. 
function checkIfCriterionAlreadySaved(filter,querycriterionid) {

	// GO thru result filter. 
	for(let criterion of filter.criterialist) {

		// Check if found. 
		let matchFound = (criterion.criterionid==querycriterionid);

		// Assume true if found. 
		if(matchFound) return true;
	}

	// Assume false if not found. 
	return false;
}
