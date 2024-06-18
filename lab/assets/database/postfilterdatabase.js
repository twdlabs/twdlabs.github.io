


// Define post filter data. 
const postFilterData = [

	{
		filtertypeid:'authorid',
		filtertypename:'Author',
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
		filtertypeid:'collectionid',
		filtertypename:'Collection',
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
		filtertypeid:'categoryid',
		filtertypename:'Category',
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
		filtertypeid:'creationyear',
		filtertypename:'Year',
		filtertypename:'Year Created',
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

	{
		filtertypeid:'creationquarter',
		filtertypename:'Year Quarter',
		filtertypename:'Quarter Created',
		filteritems:[
			{
				value:'2001 Q1',
				frequency:0,
			},
			{
				value:'2001 Q2',
				frequency:0,
			},
			{
				value:'2001 Q3',
				frequency:0,
			},
			{
				value:'2001 Q4',
				frequency:0,
			},
		],
		filteritemnamer:(value)=>(value),
	},

	{
		filtertypeid:'projectid',
		filtertypename:'Project',
		filteritems:[
			{
				value:'projecta',
				frequency:0,
			},
			{
				value:'projectb',
				frequency:0,
			},
			{
				value:'projectc',
				frequency:0,
			},
		],
		filteritemnamer:(prjid)=>( getProjectById(prjid).projectname ),
	},

	// {
	// 	filtertypeid:'xyz',
	// 	filtertypename:'Xyz',
	// 	filteritems:[
	// 	],
	// 	filteritemnamer:(value)=>(value),
	// },
];
// console.log('Post filter data:',postFilterData);


/*****/


// Augment project data. 
augmentProjectData();

// Save filter data. 
saveFilterData();

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

		// Add searchable string to project. 
		project.searchablestring = `${project.projectid} ${project.projectname} `;
		project.searchablestring += `${getAuthorNameById(project.authorid)} `;
		project.searchablestring += `${getProjectCategoryNameById(project.categoryid)} `;
		project.searchablestring += `${getProjectCollectionNameById(project.collectionid)} `;
		
		// Fill in if project missing category id. 
		if( !project.categoryid ) {
			console.warn('Project missing category id:', project);

			// Add empty value for missing category id. 
			project.categoryid = '';
		}
		
		// Fill in if project missing collection id. 
		if( !project.collectionid ) {
			console.warn('Project missing collection id:', project);

			// Add empty value for missing collection id. 
			project.collectionid = '';
		}
	}

	// Define roman numerals for yearly quarter labels. 
	// const roman = ['I','II','III','IV',];

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
					project.creationyear = yearblock.year;
					project.creationquarter = qlabel;
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

// Save filter data. 
function saveFilterData() {

	// TODO: Do alternative method. 
	for(let filtertypegroup of postFilterData) {

		// 
		// filtertypegroup.filtertypeid;
	}

	// Save item values for filter type: authors. 
	saveFilterItemValues('authorid');
	
	// Save item values for filter type: categories. 
	saveFilterItemValues('categoryid');
	
	// Save item values for filter type: collections. 
	saveFilterItemValues('collectionid');
	
	// Save item values for filter type: creation year. 
	saveFilterItemValues('creationyear');
	
	// Save item values for filter type: creation quarter. 
	saveFilterItemValues('creationquarter');

	// Save item values for filter type: project. 
	saveFilterItemValues('projectid');

	/****/

	// Save item values for given filter type from project data. 
	function saveFilterItemValues(filtertypeid) {
		
		// Get filter type group using given filter type id. 
		let filtertypegroup = getFilterTypeGroupById(filtertypeid);
		// console.log('Filter criteria list (old):',filtertypegroup.filteritems);
		
		// Disregard if not valid filter type group. 
		if(!filtertypegroup) {
			console.warn('Invalid filter type group:',filtertypeid,filtertypegroup);
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
		filtertypegroup.filteritems = filteritems.sort( (a,b)=>(a.value>b.value) );
		// console.log('Filter criteria list (new):',filtertypegroup.filteritems);
	
		/***/
	
		// Get filter type group by id. 
		function getFilterTypeGroupById(filtertypeid) {
		
			// Go thru each filter type group. 
			for(let filtertypegroup of postFilterData) {
		
				// Check for matching filter type group. 
				if(filtertypegroup.filtertypeid==filtertypeid) return filtertypegroup;
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
