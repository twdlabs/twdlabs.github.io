


// Define groups of groups of projects. 
const projectMetaGroupData = [

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
		groupid:'p',
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
// console.log('Project collections:',projectMetaGroupData);


// Define sets of project meta-groups in matrix. 
const projectMetaGroupMatrixData = [
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
// console.log('Project meta-group sets:',projectMetaGroupMatrixData);


/*****/



/*****/


// Get project meta group by id. 
function getProjectMetaGroupById(pmgid) {

	// Go thru each project groups. 
	for(let projectmetagroup of projectMetaGroupData) {

		// Check if project group matches query id. 
		let matchFound = (projectmetagroup.groupid == pmgid);

		// Return matching project group if found. 
		if(matchFound) return projectmetagroup;
	}

	// Return nothing if project group not found. 
	return null;
}
