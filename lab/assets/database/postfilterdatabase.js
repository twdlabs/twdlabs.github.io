


// Define post filter data. 
const postFilterData = [
	{
		filtername:'Author',
		filterid:'authorid',
		filtercriterionvalues:[
			{
				criterionid:'authora',
				matchingpostscount:0,
			},
			{
				criterionid:'authorb',
				matchingpostscount:0,
			},
			{
				criterionid:'authorc',
				matchingpostscount:0,
			},
		],
	},
	{
		filtername:'Category',
		filterid:'categoryid',
		filtercriterionvalues:[
			{
				criterionid:'categorya',
				matchingpostscount:0,
			},
			{
				criterionid:'categoryb',
				matchingpostscount:0,
			},
			{
				criterionid:'categoryc',
				matchingpostscount:0,
			},
		],
	},
	{
		filtername:'Collection',
		filterid:'collectionid',
		filtercriterionvalues:[
			{
				criterionid:'collectiona',
				matchingpostscount:0,
			},
			{
				criterionid:'collectionb',
				matchingpostscount:0,
			},
			{
				criterionid:'collectionc',
				matchingpostscount:0,
			},
		],
	},
	// {
	// 	filtername:'Started',
	// 	filterid:'datecreated',
	// 	filtercriterionvalues:[
	// 		{
	// 			criterionid:'datecreateda',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'datecreatedb',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'datecreatedc',
	// 			matchingpostscount:0,
	// 		},
	// 	],
	// },
	// {
	// 	filtername:'Xyz',
	// 	filterid:'xyz',
	// 	filtercriterionvalues:[],
	// },
];

console.log('Post filter data:',postFilterData);


/*****/


// Augment project data. 
augmentProjectData();

// Load values for filter: authors. 
loadFilterValues('authorid');

// Load values for filter: categories. 
loadFilterValues('categoryid');

// Load values for filter: collections. 
loadFilterValues('collectionid');

// Load values for filter: creation date. 
// loadFilterValues('datecreated');

console.log('Post filter data:',postFilterData);


/*****/


// Augment project data for easy filtering. 
function augmentProjectData() {

	// Go thru each project collection. 
	for(let projectcollection of projectCollectionData) {

		// Go thru each category in collection. 
		for(let categoryid of projectcollection.groupitemsidlist) {

			// Get category by id. 
			let category = getProjectCategoryById(categoryid);

			// Go thru each project in category. 
			for(let projectid of category.groupitemsidlist) {

				// Get project by id. 
				let project = getProjectById(projectid);
		
				// Augment project data. 
				project.categoryid = category.groupid;
				project.collectionid = projectcollection.groupid;
			}
		}
	}
	console.log('Augmented projects:',projectData);
}

// TODO: Load values for given filter group. 
function loadFilterValues(filtergroupid) {
	// console.log('Filter criteria list (old):',filtergroup.filtercriterionvalues);

	// Get filter group by id. 
	let filtergroup = getFilterGroupById(filtergroupid);
	// Disregard if not valid filter group. 
	if(!filtergroup) {
		console.warn('Invalid filter group:',filtergroupid,filtergroup);
		return;
	}

	// Initialize list of values for filter criterion. 
	let filtercriterionvalues = [];

	// Go thru each project to collect distinct criterion values. 
	for(let project of projectData) {

		// Get value of given criterion from project. 
		let criterionvalue = project[filtergroupid];

		// Check if distinct criterion value. 
		let alreadysaved = filtercriterionvalues.includes(criterionvalue);

		// TOOD: Increment count of matching posts (if already saved). 
		if(alreadysaved) {

			// 
			getCriterionById()
		}

		// TODO: Save new criterion value (if not already saved). 
		else ;
	}

	// Save list of filter criterion values. 
	// filtergroup.filtercriterionvalues = filtercriterionvalues;
	console.log('Filter criteria list (new):',filtergroup.filtercriterionvalues);

	/****/

	// Get filter criterion value by id. 
	function getCriterionById(filtercriterionvalueid) {

		// Go thru each filter criterion value. 
		for(let criterionvalue of filtercriterionvalues) {

			// Check for match. 
			if(criterionvalue.criterionid==filtercriterionvalueid) return criterionvalue;
		}

		// Return nothing if not found. 
		return null;
	}
}

// Get filter group by id. 
function getFilterGroupById(filtercriterionid) {

	// Go thru each filter group. 
	for(let filtergroup of postFilterData) {

		// Check for match. 
		if(filtergroup.filterid==filtercriterionid) return filtergroup;
	}

	// Return nothing if not found. 
	return null;
}
