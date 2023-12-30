


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
		filtername:'Collection',
		filterid:'collectionid',
		filteritems:[
			'collectiona',
			'collectionb',
			'collectionc',
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

	// {
	// 	filtername:'Started',
	// 	filterid:'datecreated',
	// 	filteritems:[
	// 		{
	// 			value:'authora',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'authorb',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'authorc',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'categorya',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'categoryb',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'categoryc',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'collectiona',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'collectionb',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'collectionc',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'datecreateda',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'datecreatedb',
	// 			matchingpostscount:0,
	// 		},
	// 		{
	// 			value:'datecreatedc',
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

	// Initialize list of filter items. 
	let filteritems = [];

	// TOOD: Go thru each project to collect distinct filter item values. 
	for(let project of projectData) {

		// Get value of filter item from current project. 
		let filteritemvalue = project[filtergroupid];

		// Get filter item associated with value (if exists). 
		let filteritem = getFilterItemByValue(filteritemvalue);

		// Check if current value is distinct. 
		// let gotdistinctvalue = !filteritems.includes(filteritemvalue);
		let gotdistinctvalue = !filteritem;

		// Save new filter item value (if distinct). 
		// if(gotdistinctvalue) filteritems.push(filteritemvalue);
		// Save new filter item (if distinct). 
		if(gotdistinctvalue) filteritems.push( {value:filteritemvalue,frequency:1,} );

		// Increment value frequency (if not distinct). 
		else filteritem.frequency++;
	}
	console.log('Filter items:',filteritems);

	// Save list of filter criterion values. 
	filtergroup.filteritems = filteritems;
	// console.log('Filter criteria list (new):',filtergroup.filteritems);

	/****/

	// TODO: Get filter item by value. 
	function getFilterItemByValue(value) {

		// Go thru each existing filter item. 
		for(let item of filteritems) {

			// Check for matching value. 
			let matchfound = item.value == value;

			// Return matching item if found. 
			if(matchfound) return item;
		}

		// Return nothing if not found. 
		return null;
	}
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
