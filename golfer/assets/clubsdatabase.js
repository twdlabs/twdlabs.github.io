


// Define data for club table. 
let tabledata = {

	// Define club table headers (per column). 
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

	// Define club table entries (per row). 
	clubslist:
	[
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
	],
};


// Define data for club creation fields. 
let entryfielddata = [
	{
		entryid:'newclubid',
		entrytype:'text',
		entrycaption:'Club ID',
	},
	{
		entryid:'newclubname',
		entrytype:'text',
		entrycaption:'Club Name',
	},
	{
		entryid:'newdistancelist',
		entrytype:'text',
		entrycaption:'Distance List',
	},
	// {
	// 	entryid:'mindistance',
	// 	entrytype:'number',
	// 	entrycaption:'Minimum Distance',
	// },
	// {
	// 	entryid:'avgdistance',
	// 	entrytype:'number',
	// 	entrycaption:'Average Distance',
	// },
	// {
	// 	entryid:'maxdistance',
	// 	entrytype:'number',
	// 	entrycaption:'Maximum Distance',
	// },
	// {
	// 	entryid:'xyz',
	// 	entrytype:'number',
	// 	entrycaption:'xyz',
	// },
];


/*****/


// Find club entry by given id. 
function getClubById(givenclubid) {

	// Go thru each club entry in list. 
	for(let clubentry of tabledata.clubslist) {

		// Check if matching club entry found. 
		let matchFound = clubentry.clubid == givenclubid;

		// Return matching club entry (if found). 
		if(matchFound) return clubentry;
	}

	// Return nothing if no match found. 
	return null;
}
