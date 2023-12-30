


// Define collections of categories of projects. 
const projectCollectionData = [

	// {
	// 	groupid:'x',
	// 	groupname:'',
	// 	groupicontag:'copy',
	// 	groupdescription:'',
	// 	groupitemsidlist:[
	// 		'',
	// 	],
	// },

	{
		groupid:'c',
		groupname:'Project Samples',
		groupname:'Compilations',
		groupicontag:'smartphone',
		groupdescription:'Project design outcomes for applications and websites compiled from various components and widgets',
		groupitemsidlist:[
			'cp',
			'ap',
			'ld',
			'dc',
		],
	},

	{
		groupid:'w',
		groupname:'Widgets',
		groupicontag:'motherboard',
		groupdescription:'Reusable sub-components to be used for various dashboards, apps, and websites',
		groupitemsidlist:[
			'sw',
			'gw',
			'mt',
			'mw',
			'nw',
			'cw',
			'tw',
			'wt',
			'aw',
		],
	},

	{
		groupid:'l',
		groupname:'Examples',
		groupicontag:'lightbulb',
		groupdescription:'Basic illustrations of concepts in web development and software development',
		groupitemsidlist:[
			'cl',
			'fl',
			'bl',
			'3d',
			// 'xyz',
		],
	},

];
// console.log('Project collections:',projectCollectionData);


// Define sets of project collections in matrix. 
const projectCollectionMatrixData = [
	{
		setid:'setA',
		setlist:['p',],
	},
	{
		setid:'setC',
		setlist:['l',],
	},
	{
		setid:'setB',
		setlist:['w',],
	},
	// {
	// 	setid:'setX',
	// 	setlist:['x',],
	// },
];
// console.log('Project collection matrix:',projectCollectionMatrixData);


/*****/


// Check sizes of project collections. 
// checkProjectGroupSizes();


/*****/


// Get project collection by id. 
function getProjectCollectionById(collectionid) {

	// Go thru each project collection. 
	for(let projectcollection of projectCollectionData) {

		// Check if project collection matches query id. 
		let matchFound = (projectcollection.groupid == collectionid);

		// Return matching project collection if found. 
		if(matchFound) return projectcollection;
	}

	// Return nothing if project collection not found. 
	return null;
}

// Get name of project collection by id. 
function getProjectCollectionNameById(collectionid) {

	// Get collection. 
	let collection = getProjectCollectionById(collectionid);

	// Return name if project collection found. 
	return collection ? collection.groupname : '[none]';
}

// Check sizes of each project collection. 
function checkProjectGroupSizes() {

	// Go thru each project collection. 
	for(let projectcollection of projectCollectionData) {

		// Get id of project collection. 
		let collectionid = projectcollection.groupid;

		// Initialize size of project collection. 
		let collectionsize = 0;

		// Get list of project category ids in project collection. 
		let projectcollectionitemsidlist = projectcollection.groupitemsidlist;

		// Go thru each project category in collection. 
		for(let categoryid of projectcollectionitemsidlist) {

			// Get size of current project category. 
			let categorysize = getProjectCategoryById(categoryid).groupitemsidlist.length;
			console.log('\t',categoryid,categorysize);

			// Add size of current project category to size of project collection. 
			collectionsize += categorysize;
		}
		console.log(collectionid,collectionsize);
	}
}
