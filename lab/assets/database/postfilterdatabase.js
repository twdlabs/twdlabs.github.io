


// Define post filter data. 
const postFilterData = [

	{
		filtername:'Author',
		filtertypeid:'authorid',
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
		filteritemnamer:getAuthorNameById,
	},

	{
		filtername:'Collection',
		filtertypeid:'collectionid',
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
		filtertypeid:'categoryid',
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
		filtertypeid:'createdyear',
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
	// 	filtertypeid:'createdquarter',
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
	// 	filtertypeid:'xyz',
	// 	filteritems:[
	// 	],
	// 	filteritemnamer:(value)=>(value),
	// },
];
// console.log('Post filter data:',postFilterData);


/*****/


// Augment project data. 
augmentProjectData();

// Augment filter data. 
augmentFilterData();

// console.log('Post filter data:',postFilterData);


/*****/


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

	// console.log('Augmented project data:',projectData);
}


// Reset filter data. 
function resetFilterData() {

	// 
}

// Augment filter data. 
function augmentFilterData() {

	// TODO: Do alternative method. 
	for(let filtertype of postFilterData) {

		// 
		// filtertype.filtertypeid;
	}

	// Save item values for filter type: authors. 
	saveFilterItemValues('authorid');
	
	// Save item values for filter type: categories. 
	saveFilterItemValues('categoryid');
	
	// Save item values for filter type: collections. 
	saveFilterItemValues('collectionid');
	
	// Save item values for filter type: creation year. 
	saveFilterItemValues('createdyear');
	
	// Save item values for filter type: creation quarter. 
	// saveFilterItemValues('createdquarter');

	/****/

	// Save item values for given filter type from project data. 
	function saveFilterItemValues(filtertypeid) {
		
		// Get ] by id. 
		let filtertype = getFilterGroupById(filtertypeid);
		// console.log('Filter criteria list (old):',filtertype.filteritems);
		
		// Disregard if not valid filter type. 
		if(!filtertype) {
			console.warn('Invalid filter type:',filtertypeid,filtertype);
			return;
		}
	
		// Initialize list of filter items. 
		let filteritems = [];
	
		// TOOD: Go thru each matching project to collect distinct values for given filter item. 
		for(let project of projectData) {
	
			// Get value of filter item from current project. 
			let filteritemvalue = project[filtertypeid];
	
			// Find filter item associated with current value (if already exists). 
			let filteritem = getFilterItemByValue(filteritemvalue);
	
			// Increment frequency of filter item (if already exists). 
			if(filteritem) filteritem.frequency++;
			// Create new filter item with frequency of 1 (if new value). 
			else filteritems.push( {value:filteritemvalue, frequency:1,} );
		}
		// console.log('Filter items:',filteritems);
	
		// Save sorted list of filter items. 
		filtertype.filteritems = filteritems.sort( (a,b)=>(a.value>b.value) );
		// console.log('Filter criteria list (new):',filtertype.filteritems);
	
		/***/
	
		// Get filter type by id. 
		function getFilterGroupById(filtertypeid) {
		
			// Go thru each filter type. 
			for(let filtertype of postFilterData) {
		
				// Check for match. 
				if(filtertype.filtertypeid==filtertypeid) return filtertype;
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
}
