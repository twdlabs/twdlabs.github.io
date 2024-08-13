


// Define default entries for clubs table (per row). 
const defaultclubslist = [
	{
		clubid:'driver',
		clubname:'Driver',
		distancelist:[100,74,7],
	},
	{
		clubid:'3hybrid',
		clubname:'3-Hybrid',
		distancelist:[1,2,3],
	},
	{
		clubid:'5hybrid',
		clubname:'5-Hybrid',
		distancelist:[1],
	},
	{
		clubid:'7iron',
		clubname:'7-Iron',
		distancelist:[],
	},
	{
		clubid:'9iron',
		clubname:'9-Iron',
		distancelist:[],
	},
	{
		clubid:'approachwedge',
		clubname:'Approach Wedge',
		distancelist:[],
	},
	{
		clubid:'sandwedge',
		clubname:'Sand Wedge',
		distancelist:[],
	},
	// {
	// 	clubid:'xyz',
	// 	clubname:'Xyz',
	// 	distancelist:[],
	// },
];

// Define data for clubs table. 
let clubstable = {

	// Define headers for clubs table (per column). 
	tableheaders:
	[
		{
			caption:'Golf Club',
			center:false,
		},
		{
			caption:'Minimum Distance',
			caption:'Min',
			center:true,
		},
		{
			caption:'Average Distance',
			caption:'Avg',
			center:true,
		},
		{
			caption:'Maximum Distance',
			caption:'Max',
			center:true,
		},
		{
			caption:'Add New Entry',
			caption:'New Distance',
			caption:'New',
			center:true,
		},
		{
			caption:'Action',
			center:true,
		},
		// {
		// 	caption:'xyz',
		// 	center:false,
		// },
	],

	// Define current entries of clubs table (per row). 
	tableentries:defaultclubslist,

	// Define entry fields for creating new clubs. 
	clubaddfields:[
		// {
		// 	fieldid:'newclubid',
		// 	fieldtype:'text',
		// 	fieldcaption:'Club ID',
		// },
		{
			fieldid:'newclubbrand',
			fieldtype:'text',
			fieldcaption:'Club Brand',
		},
		{
			fieldid:'newclubname',
			fieldtype:'text',
			fieldcaption:'Club Name',
		},
		// {
		// 	fieldid:'newdistancelist',
		// 	fieldtype:'text',
		// 	fieldcaption:'Distance List',
		// },
		{
			fieldid:'newmindistance',
			fieldtype:'number',
			fieldcaption:'Minimum Distance',
			fieldcaption:'Min Distance',
		},
		{
			fieldid:'newavgdistance',
			fieldtype:'number',
			fieldcaption:'Average Distance',
			fieldcaption:'Avg Distance',
		},
		{
			fieldid:'newmaxdistance',
			fieldtype:'number',
			fieldcaption:'Maximum Distance',
			fieldcaption:'Max Distance',
		},
		// {
		// 	fieldid:'xyz',
		// 	fieldtype:'number',
		// 	fieldcaption:'xyz',
		// },
	],

	// Define entry fields for editing existing clubs. 
	clubeditfields:[
		{
			fieldid:'clubbrand',
			fieldtype:'text',
			fieldcaption:'Club Brand',
		},
		{
			fieldid:'clubname',
			fieldtype:'text',
			fieldcaption:'Club Name',
		},
		// {
		// 	fieldid:'newdistancelist',
		// 	fieldtype:'text',
		// 	fieldcaption:'Distance List',
		// },
		{
			fieldid:'mindistance',
			fieldtype:'number',
			fieldcaption:'Minimum Distance',
			fieldcaption:'Min Distance',
		},
		{
			fieldid:'avgdistance',
			fieldtype:'number',
			fieldcaption:'Average Distance',
			fieldcaption:'Avg Distance',
		},
		{
			fieldid:'maxdistance',
			fieldtype:'number',
			fieldcaption:'Maximum Distance',
			fieldcaption:'Max Distance',
		},
		// {
		// 	fieldid:'xyz',
		// 	fieldtype:'number',
		// 	fieldcaption:'xyz',
		// },
	],
};


/*****/


// Find club entry by given id. 
function getClubById(givenclubid) {

	// Go thru each club entry in list. 
	for(let clubentry of clubstable.tableentries) {

		// Check if matching club entry found. 
		let matchFound = clubentry.clubid == givenclubid;

		// Return matching club entry (if found). 
		if(matchFound) return clubentry;
	}

	// Return nothing if no match found. 
	return null;
}
