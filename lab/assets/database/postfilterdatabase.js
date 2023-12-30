


// Define post filter data. 
const postFilterData = [

	{
		filtername:'Author',
		filterid:'authorid',
		filteritems:[
			'authora',
			'authorb',
			'authorc',
		],
	},

	{
		filtername:'Category',
		filterid:'categoryid',
		filteritems:[
			'categorya',
			'categoryb',
			'categoryc',
		],
	},

	{
		filtername:'Collection',
		filterid:'collectionid',
		filteritems:[
			'collectiona',
			'collectionb',
			'collectionc',
		],
	},

	// {
	// 	filtername:'Started',
	// 	filterid:'datecreated',
	// 	filteritems:[
	// 		{
	// 			criterionid:'authora',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'authorb',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'authorc',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'categorya',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'categoryb',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'categoryc',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'collectiona',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'collectionb',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			criterionid:'collectionc',
	// 			matchingpostscount:0,
	// 		},
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
	// 	filteritems:[],
	// },
];
// console.log('Post filter data:',postFilterData);


/*****/


// Augment project data. 
augmentProjectData();

// Load values for filter: authors. 
loadFilter('authorid');

// Load values for filter: categories. 
loadFilter('categoryid');

// Load values for filter: collections. 
loadFilter('collectionid');

// Load values for filter: start date. 
// loadFilter('datecreated');

// console.log('Post filter data:',postFilterData);


/*****/


// Load values for given filter group. 
function loadFilter(filtergroupid) {
	
	// Get filter group by id. 
	let filtergroup = getFilterById(filtergroupid);
	// console.log('Filter criteria list (old):',filtergroup.filteritems);
	
	// Disregard if not valid filter group. 
	if(!filtergroup) {
		console.warn('Invalid filter group:',filtergroupid,filtergroup);
		return;
	}

	// Initialize list of values for filter criterion. 
	let filteritems = [];

	// TOOD: Go thru each project to collect distinct criterion values. 
	for(let project of projectData) {

		// Get value of filter item from current project. 
		let filteritemvalue = project[filtergroupid];

		// Check if distinct criterion value. 
		// let alreadysaved = filteritems.includes(filteritemvalue);

		// TOOD: Increment count of matching posts (if already saved). 
		// if(alreadysaved) ;
		// TODO: Save new criterion value (if not already saved). 
		// else ;

		// Save new value (if valid). 
		if(filteritemvalue) filteritems.push(filteritemvalue);
	}
	console.log('Filter items:',filteritems);

	// Save list of filter criterion values. 
	filtergroup.filteritems = filteritems;
	// console.log('Filter criteria list (new):',filtergroup.filteritems);

	/****/

	// Get filter item by xyz. 
	// function getFilterItemByXyz(xyz) {

	// 	// 
	// }
}

// Get filter group by id. 
function getFilterById(filterid) {

	// Go thru each filter group. 
	for(let filtergroup of postFilterData) {

		// Check for match. 
		if(filtergroup.filterid==filterid) return filtergroup;
	}

	// Return nothing if not found. 
	return null;
}

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
	// console.log('Augmented projects:',projectData);
}
