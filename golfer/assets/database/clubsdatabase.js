


// Define data for clubs table. 
let clubstable = {

	// Define current entries of clubs table (per row). 
	tableentries:[],

	// Define column headers for clubs table (per column). 
	tablecolumns:
	[
		{
			columnheader:'ID',
			columncenter:true,
		},
		{
			columnheader:'Golf Club',
			columncenter:false,
		},
		{
			columnheader:'Brand',
			columncenter:false,
		},
		{
			columnheader:'Minimum Distance',
			columnheader:'Min',
			columncenter:true,
		},
		{
			columnheader:'Average Distance',
			columnheader:'Avg',
			columncenter:true,
		},
		{
			columnheader:'Maximum Distance',
			columnheader:'Max',
			columncenter:true,
		},
		{
			columnheader:'Add New Entry',
			columnheader:'New Distance',
			columnheader:'New',
			columncenter:true,
		},
		{
			columnheader:'Action',
			columncenter:true,
		},
	],

	// Define entry fields for clubs. 
	tableentryfields:[
		// {
	// 	fieldid:'clubid',
		// 	fieldtype:'text',
		// 	fieldcaption:'Club ID',
		// },
		{
			fieldid:'clubname',
			fieldtype:'text',
			fieldcaption:'Club Name',
		},
		{
			fieldid:'clubbrand',
			fieldtype:'text',
			fieldcaption:'Club Brand',
		},
		// {
		// 	fieldid:'distancelist',
		// 	fieldtype:'text',
		// 	fieldcaption:'Distance List',
		// 	fieldlistmode:true,
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
		// 	columnheader:'xyz',
		// 	columncenter:false,
		// },
	],

	// Define default entries for clubs table (per row). 
	defaulttableentries: [
		{
			clubid:'drv',
			clubname:'Driver',
			clubbrand:'Nike',
			distancelist:[100,74,7],
		},
		{
			clubid:'3h',
			clubname:'3-Hybrid',
			clubbrand:'Reebok',
			distancelist:[1,2,3],
		},
		{
			clubid:'5h',
			clubname:'5-Hybrid',
			clubbrand:'Adidas',
			distancelist:[1],
		},
		{
			clubid:'7i',
			clubname:'7-Iron',
			clubbrand:'Toyota',
			distancelist:[],
		},
		{
			clubid:'9i',
			clubname:'9-Iron',
			clubbrand:'Honda',
			distancelist:[],
		},
		{
			clubid:'apw',
			clubname:'Approach Wedge',
			clubbrand:'Samsung',
			distancelist:[],
		},
		{
			clubid:'sw',
			clubname:'Sand Wedge',
			clubbrand:'Apple',
			distancelist:[],
		},
		// {
		// 	clubid:'xyz',
		// 	clubname:'Xyz',
		// 	clubbrand:'Xyz',
		// 	distancelist:[],
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
