


// Define database tables. 
let databasetables = {

	// Define data for clubs table. 
	clubs: {

		// Define title of viewer table. 
		viewertitle:'Golf Clubs',
		// Define title of create editor. 
		editortitlenew:'New Golf Club',
		// Define title of update editor. 
		editortitleexisting:'Edit Golf Club',
	
		// Define current entries (per row). 
		tableentries:[],
	
		// Define column headers (per column). 
		tablecolumns:[
			{
				columnheader:'ID',
				columncenter:true,
			},
			{
				columnheader:'Golf Club',
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
				columnheader:'Num Distances',
				columnheader:'Num',
				columncenter:true,
			},
			{
				columnheader:'New Distance',
				columnheader:'New',
				columncenter:true,
			},
			{
				columnheader:'Action',
				columncenter:true,
			},
		],
	
		// Define fields for each entry. 
		tableentryfields:[
			// {
			// 	fieldid:'id',
			// 	fieldtype:'text',
			// 	fieldtype:'number',
			// 	fieldcaption:'ID',
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
			{
				fieldid:'clubloftdegrees',
				fieldtype:'number',
				fieldcaption:'Club Loft',
			},
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
	
		// Define default entries (per row). 
		defaulttableentrylist:[
			{
				id:'drv',
				clubname:'Driver',
				clubbrand:'Nike',
				clubloftdegrees:10.5,
				numshots:1,
				avgdistance:50,
				mindistance:1,
				maxdistance:95,
			},
			{
				id:'3w',
				clubname:'3+ Wood',
				clubbrand:'Puma',
				clubloftdegrees:13.5,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'3h',
				clubname:'3-Hybrid',
				clubbrand:'Reebok',
				clubloftdegrees:18,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'5h',
				clubname:'5-Hybrid',
				clubbrand:'Adidas',
				clubloftdegrees:0,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'3i',
				clubname:'3-Iron',
				clubbrand:'Lamborghini',
				clubloftdegrees:18.5,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'4i',
				clubname:'4-Iron',
				clubbrand:'Ferrari',
				clubloftdegrees:18.5,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'5i',
				clubname:'5-Iron',
				clubbrand:'Mercedes-Benz',
				clubloftdegrees:21,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'6i',
				clubname:'6-Iron',
				clubbrand:'Lexus',
				clubloftdegrees:24,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'7i',
				clubname:'7-Iron',
				clubbrand:'Toyota',
				clubloftdegrees:27,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'8i',
				clubname:'8-Iron',
				clubbrand:'Honda',
				clubloftdegrees:31.5,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'9i',
				clubname:'9-Iron',
				clubbrand:'Hyundai',
				clubloftdegrees:36,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'pw',
				clubname:'Pitching Wedge',
				clubbrand:'GMC',
				clubloftdegrees:41,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'apw',
				clubname:'Approach Wedge',
				clubbrand:'Ford',
				clubloftdegrees:46,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'gw',
				clubname:'Gap Wedge',
				clubbrand:'Samsung',
				clubloftdegrees:51,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'sw',
				clubname:'Sand Wedge',
				clubbrand:'Apple',
				clubloftdegrees:56,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'lw',
				clubname:'Lob Wedge',
				clubbrand:'Meta',
				clubloftdegrees:60,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			{
				id:'ptr',
				clubname:'Putter',
				clubbrand:'Microsoft',
				clubloftdegrees:60,
				numshots:0,
				avgdistance:60,
				mindistance:10,
				maxdistance:120,
			},
			// {
			// 	id:'xyz',
			// 	clubname:'Xyz',
			// 	clubbrand:'Xyz',
			// 	clubloftdegrees:0,
			// 	numshots:0,
			// 	avgdistance:0,
			// 	mindistance:0,
			// 	maxdistance:0,
			// },
		],

		// Define row layout creator. 
		// rowlayer:createClubEntryRowLayout,
	},

	// Define data for holes table. 
	holes: {

		// Define title of viewer table. 
		viewertitle:'Golf Holes',
		// Define title of create editor. 
		editortitlenew:'New Golf Hole',
		// Define title of update editor. 
		editortitleexisting:'Edit Golf Hole',
	
		// Define current entries (per row). 
		tableentries:[],
	
		// Define column headers (per column). 
		tablecolumns:[
			{
				columnheader:'ID',
				columncenter:true,
			},
			{
				columnheader:'Action',
				columncenter:true,
			},
		],
	
		// Define fields for each entry. 
		tableentryfields:[
			{
				fieldid:'holename',
				fieldtype:'text',
				fieldcaption:'Hole Name',
			},
		],
	
		// Define default entries (per row). 
		defaulttableentrylist:[],

		// Define row layout creator. 
		// rowlayer:createClubEntryRowLayout,
	},

	// Define data for shots table. 
	shots: {

		// Define title of viewer table. 
		viewertitle:'Golf Shots',
		// Define title of create editor. 
		editortitlenew:'New Golf Shots',
		// Define title of update editor. 
		editortitleexisting:'Edit Golf Shots',
	
		// Define current entries (per row). 
		tableentries:[],
	
		// Define column headers (per column). 
		tablecolumns:[
			{
				columnheader:'ID',
				columncenter:true,
			},
			{
				columnheader:'Action',
				columncenter:true,
			},
		],
	
		// Define fields for each entry. 
		tableentryfields:[
			{
				fieldid:'shotname',
				fieldtype:'text',
				fieldcaption:'Shot Name',
			},
			{
				fieldid:'shotdistance',
				fieldtype:'text',
				fieldcaption:'Shot Distance',
			},
			{
				fieldid:'holeid',
				fieldtype:'text',
				fieldcaption:'Hole ID',
			},
			{
				fieldid:'clubid',
				fieldtype:'text',
				fieldcaption:'Club ID',
			},
		],
	
		// Define default entries (per row). 
		defaulttableentrylist:[],

		// Define row layout creator. 
		// rowlayer:createClubEntryRowLayout,
	},
};


/*****/


// Find club entry by id. 
function getClubEntryById(givenentryid) {
	return getTableEntryById('clubs',givenentryid);
}

// Find hole entry by id. 
function getHoleEntryById(givenentryid) {
	return getTableEntryById('holes',givenentryid);
}

// Find shot entry by id. 
function getShotEntryById(givenentryid) {
	return getTableEntryById('shots',givenentryid);
}

// Find table entry by table id and entry id. 
function getTableById(giventableid) {
	return databasetables[giventableid];
}

// Find table entry by table id and entry id. 
function getTableEntryById(giventableid,givenentryid) {
	// console.log('Finding table entry...',giventableid,givenentryid);

	// // Get key for entry id. 
	// let idkey = giventableid.substr(0,giventableid.length-1)+'id';
	// console.log('idkey:',idkey);

	// Get table data for given table id. 
	let giventabledata = databasetables[giventableid];

	// Go thru each table entry in list. 
	for(let currenttableentry of giventabledata.tableentries) {
		// console.log('\tGoing thru table entries...',currenttableentry);

		// Check if matching table entry found. 
		let matchFound = currenttableentry['id'] == givenentryid;

		// Return matching table entry (if found). 
		if(matchFound) return currenttableentry;
	}

	// Return nothing if no match found. 
	return null;
}
