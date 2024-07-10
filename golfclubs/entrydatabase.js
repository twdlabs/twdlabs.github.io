


// Define data for club table (R in CRUD). 
let tabledata = {

	headers:
	[
		'Golf Club Name',
		'Minimum Distance',
		'Average Distance',
		'Maximum Distance',
		'Add New Entry',
		// 'xyz',
	],

	initialclubs:
	[
		{
			clubid:'driver',
			clubname:'Driver',
			distancelist:[],
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
		entrycaption:'Club Name',
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
