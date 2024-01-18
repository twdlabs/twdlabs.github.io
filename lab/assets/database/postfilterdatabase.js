


// Define post filter data. 
const postFilterData = [

	{
		filtername:'Author',
		filtergroupid:'authorid',
		filteritems:[
			{
				value:'authora',
				frequency:0,
			},
			{
				value:'authorb',
				frequency:0,
			},
			{
				value:'authorc',
				frequency:0,
			},
		],
		filteritemnamer:(authorid)=>( authorData[authorid] ),
	},

	{
		filtername:'Collection',
		filtergroupid:'collectionid',
		filteritems:[
			{
				value:'collectiona',
				frequency:0,
			},
			{
				value:'collectionb',
				frequency:0,
			},
			{
				value:'collectionc',
				frequency:0,
			},
		],
		filteritemnamer:getProjectCollectionNameById,
	},

	{
		filtername:'Category',
		filtergroupid:'categoryid',
		filteritems:[
			{
				value:'categorya',
				frequency:0,
			},
			{
				value:'categoryb',
				frequency:0,
			},
			{
				value:'categoryc',
				frequency:0,
			},
		],
		filteritemnamer:getProjectCategoryNameById,
	},

	{
		filtername:'Created',
		filtername:'Year',
		filtergroupid:'createdyear',
		filteritems:[
			{
				value:2001,
				frequency:0,
			},
			{
				value:2002,
				frequency:0,
			},
			{
				value:2003,
				frequency:0,
			},
		],
		filteritemnamer:(value)=>(value),
	},

	// {
	// 	filtername:'Year Quarter',
	// 	filtergroupid:'createdquarter',
	// 	filteritems:[
	// 		{
	// 			value:'2001 Q1',
	// 			frequency:0,
	// 		},
	// 		{
	// 			value:'2001 Q3',
	// 			frequency:0,
	// 		},
	// 		{
	// 			value:'2001 Q3',
	// 			frequency:0,
	// 		},
	// 		{
	// 			value:'2001 Q4',
	// 			frequency:0,
	// 		},
	// 	],
	// 	filteritemnamer:(value)=>(value),
	// },

	// {
	// 	filtername:'Xyz',
	// 	filtergroupid:'xyz',
	// 	filteritems:[
	// 	],
	// 	filteritemnamer:(value)=>(value),
	// },
];
// console.log('Post filter data:',postFilterData);


/*****/


// Augment project data. 
augmentProjectData();

// Create item values for filter group: authors. 
createFilterValues('authorid');

// Create item values for filter group: categories. 
createFilterValues('categoryid');

// Create item values for filter group: collections. 
createFilterValues('collectionid');

// Create item values for filter group: creation year. 
createFilterValues('createdyear');

// Create item values for filter group: creation quarter. 
// createFilterValues('createdquarter');

// console.log('Post filter data:',postFilterData);


/*****/


// Create item values for given filter group. 
function createFilterValues(filtergroupid) {
	
	// Get filter group by id. 
	let filtergroup = getFilterGroupById(filtergroupid);
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
	// console.log('Filter items:',filteritems);

	// Save sorted list of filter items. 
	filtergroup.filteritems = filteritems.sort( (a,b)=>(a.value>b.value) );
	// console.log('Filter criteria list (new):',filtergroup.filteritems);

	/****/

	// Get filter group by id. 
	function getFilterGroupById(filtergroupid) {
	
		// Go thru each filter group. 
		for(let filtergroup of postFilterData) {
	
			// Check for match. 
			if(filtergroup.filtergroupid==filtergroupid) return filtergroup;
		}
	
		// Return nothing if not found. 
		return null;
	}

	// Get filter item by value. 
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

// Augment project data for easy filtering. 
function augmentProjectData() {

	// Go thru each collection. 
	for(let collection of projectCollectionData) {

		// Go thru each category in collection. 
		for(let categoryid of collection.groupitemsidlist) {

			// Get category by id. 
			let category = getProjectCategoryById(categoryid);

			// Go thru each project in category. 
			for(let projectid of category.groupitemsidlist) {

				// Get project by id. 
				let project = getProjectById(projectid);
		
				// Augment project data. 
				if(project) {
					project.categoryid = category.groupid;
					project.collectionid = collection.groupid;
				}

				// 
				else console.warn('Null project:', project);
			}
		}
	}

	// Go thru each project. 
	for(let project of projectData) {
		
		// Check if project missing project category. 
		if(!project.categoryid || !project.collectionid) {
			console.warn('Project missing category/collection:', project);

			// Add null parameter for missing project category. 
			project.categoryid = '';
			// Add null parameter for missing project collection. 
			project.collectionid = '';
		}
	}

	// Define roman numerals for yearly quarter labels. 
	const roman = ['I','II','III','IV',];

	// Go thru each project year block. 
	for(let yearblock of projectTimeData) {
		// console.log('yearblock:',yearblock);

		// Go thru each quarter in year block. 
		for(let qindex in yearblock.quarterlyidlists) {

			// Create label for current quarter. 
			let qlabel = `${yearblock.year} Q${1*qindex+1}`;
			// let qlabel = `${yearblock.year} Q-${roman[qindex]}`;

			// Get list of ids for current quarter. 
			let quarteridlist = yearblock.quarterlyidlists[qindex];
			// console.log('quarteridlist:',quarteridlist);

			// Go thru each project in quarter block. 
			for(let projectid of quarteridlist) {

				// Get project. 
				let project = getProjectById(projectid);
			
				// Augment project data. 
				if(project) {
					project.createdyear = yearblock.year;
					project.createdquarter = qlabel;
				}
			}
		}
	}

	console.log('Augmented project data:',projectData);
}
