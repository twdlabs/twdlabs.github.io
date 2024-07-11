


// Define data for club table (R in CRUD). 
let tabledata = {

	// Define table headers (per column). 
	headers:
	[
		{
			caption:'Golf Club',
			center:false,
		},
		{
			caption:'Min<br>Distance',
			caption:'Minimum Distance',
			caption:'Min',
			center:true,
		},
		{
			caption:'Avg<br>Distance',
			caption:'Average Distance',
			caption:'Avg',
			center:true,
		},
		{
			caption:'Max<br>Distance',
			caption:'Maximum Distance',
			caption:'Max',
			center:true,
		},
		{
			caption:'Add New Entry',
			caption:'New Distance',
			center:true,
		},
		// {
		// 	caption:'xyz',
		// 	center:false,
		// },
	],

	// Define table entries (per row). 
	initialclubs:
	[
		{
			clubid:'driver',
			clubname:'Driver',
			distancelist:[997,7],
		},
		{
			clubid:'3hybrid',
			clubname:'3-Hybrid',
			distancelist:[],
		},
		{
			clubid:'5hybrid',
			clubname:'5-Hybrid',
			distancelist:[],
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
		{
			clubid:'xyz',
			clubname:'Xyz',
			distancelist:[],
		},
	],
};


// Define data for club creation fields (C in CRUD). 
let entryfielddata = [
	{
		entryid:'clubname',
		entrytype:'text',
		entrycaption:'New Golf Club',
	},
	{
		entryid:'mindistance',
		entrytype:'number',
		entrycaption:'Minimum Distance',
	},
	{
		entryid:'avgdistance',
		entrytype:'number',
		entrycaption:'Average Distance',
	},
	{
		entryid:'maxdistance',
		entrytype:'number',
		entrycaption:'Maximum Distance',
	},
	// {
	// 	entryid:'xyz',
	// 	entrycaption:'xyz',
	// },
];
