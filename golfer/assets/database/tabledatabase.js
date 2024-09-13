


// Define database tables. 
let databasetables = {

	// Define data for golf clubs table. 
	clubs: {

		// Define table titles. 
		titles:{
			// Define title of viewer table. 
			viewertitle:'Golf Clubs',
			// Define title of create editor. 
			editortitlec:'New Golf Club',
			// Define title of update editor. 
			editortitleu:'Edit Golf Club',
		},
		// Define column headers (by column). 
		tablecolumns:[
			{
				columnheader:'ID',
				columncenter:true,
				columnoptional:true,
			},
			{
				columnheader:'Golf Club',
				columncenter:false,
				columnoptional:false,
			},
			{
				columnheader:'Minimum Distance',
				columnheader:'Min',
				columncenter:true,
				columnoptional:true,
			},
			{
				columnheader:'Average Distance',
				columnheader:'Avg',
				columncenter:true,
				columnoptional:true,
			},
			{
				columnheader:'Maximum Distance',
				columnheader:'Max',
				columncenter:true,
				columnoptional:true,
			},
			{
				columnheader:'Num Distances',
				columnheader:'Num',
				columncenter:true,
				columnoptional:true,
			},
			{
				columnheader:'New Distance',
				columnheader:'New',
				columncenter:true,
				columnoptional:true,
			},
			{
				columnheader:'Action',
				columncenter:true,
				columnoptional:false,
			},
		],
		// Define attribute fields (by column). 
		tableentryfields:[
			// {
			// 	fieldid:'id',
			// 	fieldtype:'number',
			// 	fieldcaption:'ID',
			// 	fielddefaultvalue:0,
			// },
			{
				fieldid:'clubname',
				fieldtype:'text',
				fieldcaption:'Club Name',
				fielddefaultvalue:'',
			},
			{
				fieldid:'clubbrand',
				fieldtype:'text',
				fieldcaption:'Club Brand',
				fielddefaultvalue:'',
			},
			{
				fieldid:'clubloftdegrees',
				fieldtype:'number',
				fieldcaption:'Club Loft (&deg;)',
				fielddefaultvalue:0,
			},
			{
				fieldid:'mindistance',
				fieldtype:'number',
				fieldcaption:'Minimum Distance',
				fieldcaption:'Min Distance',
				fielddefaultvalue:0,
			},
			{
				fieldid:'avgdistance',
				fieldtype:'number',
				fieldcaption:'Average Distance',
				fieldcaption:'Avg Distance',
				fielddefaultvalue:0,
			},
			{
				fieldid:'maxdistance',
				fieldtype:'number',
				fieldcaption:'Maximum Distance',
				fieldcaption:'Max Distance',
				fielddefaultvalue:0,
			},
			{
				fieldid:'numshots',
				fieldtype:'number',
				fieldcaption:'Number of Shots',
				fieldcaption:'Num Shots',
				fielddefaultvalue:0,
			},
		],
	
		// Define example table entries (by row). 
		exampleentries:[
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
		// Define current table state (entries by row). 
		currententries:[],
		// Define backward state history for list of table entries. 
		bcktablestack:[],
		// Define forward state history for list of table entries. 
		fwdtablestack:[],

		// Define row layout creator. 
		// rowlayer:createClubEntryRowLayout,
	},

	// Define data for golf holes table. 
	holes: {

		// Define table titles. 
		titles:{
			// Define title of viewer table. 
			viewertitle:'Golf Holes',
			// Define title of create editor. 
			editortitlec:'New Golf Hole',
			// Define title of update editor. 
			editortitleu:'Edit Golf Hole',
		},
		// Define column headers (by column). 
		tablecolumns:[
			{
				columnheader:'ID',
				columncenter:true,
				columnoptional:true,
			},
			{
				columnheader:'Hole Name',
				columncenter:false,
				columnoptional:false,
			},
			{
				columnheader:'Action',
				columncenter:true,
				columnoptional:false,
			},
		],
		// Define attribute fields (by column). 
		tableentryfields:[
			// {
			// 	fieldid:'id',
			// 	fieldtype:'number',
			// 	fieldcaption:'ID',
			// 	fielddefaultvalue:0,
			// },
			{
				fieldid:'holename',
				fieldtype:'text',
				fieldcaption:'Hole Name',
				fielddefaultvalue:'',
			},
		],
	
		// Define example table entries (by row). 
		exampleentries:[
			{
				id:'a',
				holename:'Alpha',
			},
			{
				id:'b',
				holename:'Beta',
			},
			{
				id:'d',
				holename:'Delta',
			},
			{
				id:'e',
				holename:'Epsilon',
			},
			{
				id:'g',
				holename:'Gamma',
			},
		],
		// Define current table state (entries by row). 
		currententries:[],
		// Define backward state history for list of table entries. 
		bcktablestack:[],
		// Define forward state history for list of table entries. 
		fwdtablestack:[],

		// Define row layout creator. 
		// rowlayer:createHoleEntryRowLayout,
	},

	// Define data for golf shots table. 
	shots: {

		// Define table titles. 
		titles:{
			// Define title of viewer table. 
			viewertitle:'Golf Distances',
			// Define title of create editor. 
			editortitlec:'New Golf Distance',
			// Define title of update editor. 
			editortitleu:'Edit Golf Distance',
		},
		// Define column headers (by column). 
		tablecolumns:[
			{
				columnheader:'ID',
				columncenter:true,
				columnoptional:true,
			},
			{
				columnheader:'Club',
				columncenter:false,
				columnoptional:false,
			},
			{
				columnheader:'Hole',
				columncenter:false,
				columnoptional:false,
			},
			{
				columnheader:'Distance',
				columncenter:true,
				columnoptional:false,
			},
			{
				columnheader:'Action',
				columncenter:true,
				columnoptional:false,
			},
		],
		// Define attribute fields (by column). 
		tableentryfields:[
			// {
			// 	fieldid:'id',
			// 	fieldtype:'number',
			// 	fieldcaption:'ID',
			// 	fielddefaultvalue:0,
			// },
			{
				fieldid:'clubid',
				fieldtype:'number',
				fieldcaption:'Club ID',
				fielddefaultvalue:0,
			},
			{
				fieldid:'holeid',
				fieldtype:'number',
				fieldcaption:'Hole ID',
				fielddefaultvalue:0,
			},
			{
				fieldid:'distance',
				fieldtype:'number',
				fieldcaption:'Distance',
				fielddefaultvalue:0,
			},
		],
	
		// Define example table entries (by row). 
		exampleentries:[
			{
				id:'x',
				clubid:'drv',
				holeid:'a',
				distance:'300',
			},
			{
				id:'y',
				clubid:'drv',
				holeid:'a',
				distance:'250',
			},
		],
		// Define current table state (entries by row). 
		currententries:[],
		// Define backward state history for list of table entries. 
		bcktablestack:[],
		// Define forward state history for list of table entries. 
		fwdtablestack:[],

		// Define row layout creator. 
		// rowlayer:createShotEntryRowLayout,
	},
};


/*****/


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
	for(let currenttableentry of giventabledata['currententries']) {
		// console.log('\tGoing thru table entries...',currenttableentry);

		// Check if matching table entry found. 
		let matchFound = currenttableentry['id'] == givenentryid;

		// Return matching table entry (if found). 
		if(matchFound) return currenttableentry;
	}

	// Return nothing if no match found. 
	return null;
}

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
