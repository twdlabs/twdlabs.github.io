

// Define data for balance categories. 
const balancecategorydata = [
	{	// 0
		categoryname:'Spending',
		categorycolor:'#F00A'
	},
	{	// 1
		categoryname:'Surplus',
		categorycolor:'seagreen'
	},
];


// Define data for income categories. 
const incomecategorydata = [
	{	// 0
		categoryname:'Wages',
		categorycolor:'forestgreen',
		clustercolor:'limegreen',
		categoryicon:'cashstack',
		// categoryicon:'cashcoin'
	},
	{	// 1
		categoryname:'Dividends',
		categorycolor:'limegreen',
		clustercolor:'limegreen',
		categoryicon:'cashstack',
		// categoryicon:'cashcoin'
	},
	{	// 2
		categoryname:'Interest',
		categorycolor:'darkseagreen',
		clustercolor:'limegreen',
		categoryicon:'cashstack',
		// categoryicon:'cashcoin'
	},
	// {	// 3
	// 	categoryname:'xyz',
	// 	categorycolor:'forestgreen',
	// 	clustercolor:'limegreen',
	// 	color:'white'
	// },
];


// Define budget data for spending categories. 
const spendcategorydatatemplate = [
	{	// -1
		categoryname:'xyz',
		categorycolor:'white',
		categoryicon:'icon',
		budgetmonthlylimit:[
			1000,1000,1000,
			1000,1000,1000,
			1000,1000,1000,
			1000,1000,1000,
		],
	},
]
const spendcategorydata = [
	{	// 0
		categoryname:'Tithing',
		categorycolor:'dodgerblue',
		categoryicon:'cloud',
		budgetmonthlylimit:1000,
	},
	{	// 1
		categoryname:'Savings',
		categorycolor:'springgreen',
		categoryicon:'piggybank',
		budgetmonthlylimit:1000,
	},
	{	// 2
		categoryname:'Housing',
		categorycolor:'coral',
		categoryicon:'house',
		budgetmonthlylimit:1750,
	},
	{	// 3
		categoryname:'Utilities',
		categorycolor:'gold',
		categoryicon:'tools',
		budgetmonthlylimit:750,
	},
	{	// 4
		categoryname:'Food',
		categorycolor:'mediumblue',
		categoryicon:'recycle',
		budgetmonthlylimit:1000,
	},
	{	// 5
		categoryname:'Clothing',
		categorycolor:'slateblue',
		categoryicon:'bag',
		budgetmonthlylimit:500,
	},
	{	// 6
		categoryname:'Education',
		categorycolor:'powderblue',
		categoryicon:'notebook',
		budgetmonthlylimit:1000,
	},
	{	// 7
		categoryname:'Insurance',
		categorycolor:'crimson',
		categoryicon:'bandage',
		budgetmonthlylimit:250,
	},
	{	// 8
		categoryname:'Transportation',
		categorycolor:'greenyellow',
		categoryicon:'bike',
		budgetmonthlylimit:200,
	},
	{	// 9
		categoryname:'Vacation',
		categorycolor:'mediumturquoise',
		categoryicon:'sun',
		budgetmonthlylimit:850,
	},
	{	// 10
		categoryname:'Entertainment',
		categorycolor:'hotpink',
		categoryicon:'tvscreen',
		budgetmonthlylimit:500,
	},
	{	// 11
		categoryname:'Business',
		categorycolor:'wheat',
		categoryicon:'briefcase',
		budgetmonthlylimit:1400,
	},
	{	// 12
		categoryname:'Child Care',
		categorycolor:'whitesmoke',
		categoryicon:'egg',
		budgetmonthlylimit:1000,
	},
	{	// 13
		categoryname:'Debt Service',
		categorycolor:'brown',
		categoryicon:'creditcard',
		budgetmonthlylimit:1000,
	},
	// {	// 14
	// 	categoryname:'xyz',
	// 	categorycolor:'white',
	// 	categoryicon:'icon',
	// 	budgetmonthlylimit:1000,
	// },
];
