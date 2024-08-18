


// Define database tables. 
let databasetables = {

	// Define data for clubs table. 
	clubs: {

		// Define title of table. 
		tabletitle:'Golf Clubs',
	
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
				columnheader:'Brand',
				columncenter:false,
			},
			{
				columnheader:'Loft (in degrees)',
				columnheader:'Loft',
				columncenter:true,
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
	
		// Define fields for each entry. 
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
			{
				fieldid:'clubloftdegrees',
				fieldtype:'number',
				fieldcaption:'Club Loft',
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
	
		// Define default entries (per row). 
		defaulttableentrylist:[
			{
				clubid:'drv',
				clubname:'Driver',
				clubbrand:'Nike',
				clubloftdegrees:10.5,
				distancelist:[100,74,7],
			},
			{
				clubid:'3w',
				clubname:'3+ Wood',
				clubbrand:'Puma',
				clubloftdegrees:13.5,
				distancelist:[],
			},
			{
				clubid:'3h',
				clubname:'3-Hybrid',
				clubbrand:'Reebok',
				clubloftdegrees:18,
				distancelist:[1,2,3],
			},
			{
				clubid:'5h',
				clubname:'5-Hybrid',
				clubbrand:'Adidas',
				clubloftdegrees:0,
				distancelist:[1],
			},
			{
				clubid:'3i',
				clubname:'3-Iron',
				clubbrand:'Lamborghini',
				clubloftdegrees:18.5,
				distancelist:[],
			},
			{
				clubid:'4i',
				clubname:'4-Iron',
				clubbrand:'Ferrari',
				clubloftdegrees:18.5,
				distancelist:[],
			},
			{
				clubid:'5i',
				clubname:'5-Iron',
				clubbrand:'Mercedes-Benz',
				clubloftdegrees:21,
				distancelist:[],
			},
			{
				clubid:'6i',
				clubname:'6-Iron',
				clubbrand:'Lexus',
				clubloftdegrees:24,
				distancelist:[],
			},
			{
				clubid:'7i',
				clubname:'7-Iron',
				clubbrand:'Toyota',
				clubloftdegrees:27,
				distancelist:[],
			},
			{
				clubid:'8i',
				clubname:'8-Iron',
				clubbrand:'Honda',
				clubloftdegrees:31.5,
				distancelist:[],
			},
			{
				clubid:'9i',
				clubname:'9-Iron',
				clubbrand:'Hyundai',
				clubloftdegrees:36,
				distancelist:[],
			},
			{
				clubid:'pw',
				clubname:'Pitching Wedge',
				clubbrand:'GMC',
				clubloftdegrees:41,
				distancelist:[],
			},
			{
				clubid:'apw',
				clubname:'Approach Wedge',
				clubbrand:'Ford',
				clubloftdegrees:46,
				distancelist:[],
			},
			{
				clubid:'gw',
				clubname:'Gap Wedge',
				clubbrand:'Samsung',
				clubloftdegrees:51,
				distancelist:[],
			},
			{
				clubid:'sw',
				clubname:'Sand Wedge',
				clubbrand:'Apple',
				clubloftdegrees:56,
				distancelist:[],
			},
			{
				clubid:'lw',
				clubname:'Lob Wedge',
				clubbrand:'Meta',
				clubloftdegrees:60,
				distancelist:[],
			},
			{
				clubid:'ptr',
				clubname:'Putter',
				clubbrand:'Microsoft',
				clubloftdegrees:60,
				distancelist:[],
			},
			// {
			// 	clubid:'xyz',
			// 	clubname:'Xyz',
			// 	clubbrand:'Xyz',
			// 	clubloftdegrees:0,
			// 	distancelist:[],
			// },
		],
	
		// Define destination for table title. 
		tabletitledestination:document.querySelector('div#container section div.grid div.head h2.header'),
	
		// Define destination for table body. 
		tablebodydestination:document.querySelector('div#container section.viewer.clubs div.grid table.table tbody.body'),
	
		// Define destination for table headers. 
		tableheadersdestination:document.querySelector('div#container section.viewer.clubs div.grid table.table thead.head tr.row'),

		// Define row layout creator. 
		// rowlayer:createClubEntryRowLayout,
	},

	// Define data for holes table. 
	holes: {

		// Define title of table. 
		tabletitle:'Golf Holes',
	
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
		tableentryfields:[],
	
		// Define default entries (per row). 
		defaulttableentrylist:[],
	
		// Define destination for table title. 
		tabletitledestination:document.querySelector('div#container section div.grid div.head h2.header'),
	
		// Define destination for table body. 
		tablebodydestination:document.querySelector('div#container section.viewer.holes div.grid table.table tbody.body'),
	
		// Define destination for table headers. 
		tableheadersdestination:document.querySelector('div#container section.viewer.holes div.grid table.table thead.head tr.row'),

		// Define row layout creator. 
		// rowlayer:createClubEntryRowLayout,
	},

	// Define data for shots table. 
	shots: {

		// Define title of table. 
		tabletitle:'Golf Shots',
	
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
		tableentryfields:[],
	
		// Define default entries (per row). 
		defaulttableentrylist:[],
	
		// Define destination for table title. 
		tabletitledestination:document.querySelector('div#container section div.grid div.head h2.header'),
	
		// Define destination for table body. 
		tablebodydestination:document.querySelector('div#container section.viewer.shots div.grid table.table tbody.body'),
	
		// Define destination for table headers. 
		tableheadersdestination:document.querySelector('div#container section.viewer.shots div.grid table.table thead.head tr.row'),

		// Define row layout creator. 
		// rowlayer:createClubEntryRowLayout,
	},
};


/*****/


// Find club entry by id. 
function getClubEntryById(givenentryid) {
	return getTableEntryById('clubs','clubid',givenentryid);
}

// Find hole entry by id. 
function getHoleEntryById(givenentryid) {
	return getTableEntryById('holes','holeid',givenentryid);
}

// Find shot entry by id. 
function getShotEntryById(givenentryid) {
	return getTableEntryById('shots','shotid',givenentryid);
}

// Find table entry by table id and entry id. 
function getTableEntryById(tableid,tableentryidkey,givenentryid) {
	console.log('Finding table entry...',tableid,tableentryidkey,givenentryid);

	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];

	// Go thru each table entry in list. 
	for(let tableentry of giventabledata.tableentries) {
		// console.log('\tGoing thru table entries...',tableentry);

		// Check if matching table entry found. 
		let matchFound = tableentry[tableentryidkey] == givenentryid;

		// Return matching table entry (if found). 
		if(matchFound) return tableentry;
	}

	// Return nothing if no match found. 
	return null;
}
