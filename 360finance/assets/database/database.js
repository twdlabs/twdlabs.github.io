


// Define month labels. 
const monthLabels = [ 'J','F','M', 'A','M','J', 'J','A','S', 'O','N','D' ];



// Define data for income categories. 
const incomecategorydata = [
	{	// 0
		categoryname:'Wages',
		categorycolor:'forestgreen',
		clustercolor:'forestgreen',
		categoryicon:'plus'
	},
	{	// 1
		categoryname:'Dividends',
		categorycolor:'limegreen',
		clustercolor:'forestgreen',
		categoryicon:'plus'
	},
	{	// 2
		categoryname:'Interest',
		categorycolor:'darkseagreen',
		clustercolor:'forestgreen',
		categoryicon:'plus'
	},
	// {	// 3
	// 	categoryname:'xyz',
	// 	categorycolor:'forestgreen',
	// 	clustercolor:'forestgreen',
	// 	color:'white'
	// },
];


// Define data for spending categories. 
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
		categoryicon:'cashstack',
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
		categoryicon:'gear',
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
		categoryicon:'dice',
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
		categoryicon:'sunglasses',
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
		budgetmonthlylimit:1600,
	},
	// {	// 12
	// 	categoryname:'xyz',
	// 	categorycolor:'white',
	// 	categoryicon:'icon',
	// 	budgetmonthlylimit:1000,
	// },
];


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


// Define budget data for spending categories. 
const budgetcategorydata = [
	{

	},
];



// Define transaction data. 
const transactiondata = [
	{
		categoryid:0,
		merchantname:'Globadigm Consulting',
		transactiondate:'20220101',
		transactionamount:10000,
	},
	{
		categoryid:1,
 		merchantname:'Berkshire Hathaway',
		transactiondate:'20220101',
		transactionamount:953.05,
	},
	{
		categoryid:2,
 		merchantname:'JPMorgan Chase',
		transactiondate:'20220101',
		transactionamount:45.28,
	},
	{
		categoryid:0,
		merchantname:'Victorious Believers Ministries',
		transactiondate:'20220101',
		transactionamount:-1000,
	},
	{
		categoryid:1,
		merchantname:'Savings Account',
		transactiondate:'20220101',
		transactionamount:-1000,
	},
	{
		categoryid:2,
		merchantname:'RentPay LandlordName',
		transactiondate:'20220101',
		transactionamount:-1750,
	},
	{
		categoryid:3,
		merchantname:'ComEd',
		transactiondate:'20220101',
		transactionamount:-402.45,
	},
	{
		categoryid:3,
		merchantname:'AT&T',
		transactiondate:'20220101',
		transactionamount:-91.74,
	},
	{
		categoryid:3,
		merchantname:'Comcast',
		transactiondate:'20220101',
		transactionamount:-88.20,
	},
	{
		categoryid:3,
		merchantname:'Spire',
		transactiondate:'20220101',
		transactionamount:-43.83,
	},
	{
		categoryid:4,
		merchantname:'Meijer',
		transactiondate:'20220101',
		transactionamount:-250,
	},
	{
		categoryid:4,
		merchantname:'Chipotle',
		transactiondate:'20220101',
		transactionamount:-18,
	},
	{
		categoryid:4,
		merchantname:'McDonald\'s',
		transactiondate:'20220101',
		transactionamount:-4.83,
	},
	{
		categoryid:5,
		merchantname:'Dolce & Gabbana',
		transactiondate:'20220101',
		transactionamount:-238,
	},
	{
		categoryid:5,
		merchantname:'H&M',
		transactiondate:'20220101',
		transactionamount:-24.54,
	},
	{
		categoryid:5,
		merchantname:'Men\'s Wearhouse',
		transactiondate:'20220101',
		transactionamount:-142,
	},
	{
		categoryid:6,
		merchantname:'Audible',
		transactiondate:'20220101',
		transactionamount:-14.95,
	},
	{
		categoryid:6,
		merchantname:'Udemy Courses',
		transactiondate:'20220101',
		transactionamount:-399.97,
	},
	{
		categoryid:7,
		merchantname:'Geico',
		transactiondate:'20220101',
		transactionamount:-103,
	},
	{
		categoryid:8,
		merchantname:'Sunoco',
		transactiondate:'20220101',
		transactionamount:-55.84,
	},
	{
		categoryid:8,
		merchantname:'7-Eleven',
		transactiondate:'20220101',
		transactionamount:-55.84,
	},
	{
		categoryid:9,
		merchantname:'Vacation Resort',
		transactiondate:'20220101',
		transactionamount:-797,
	},
	{
		categoryid:10,
		merchantname:'Movie Theater',
		transactiondate:'20220101',
		transactionamount:-79.96,
	},
	{
		categoryid:10,
		merchantname:'Netflix',
		transactiondate:'20220101',
		transactionamount:-19.99,
	},
	{
		categoryid:10,
		merchantname:'Apple Music',
		transactiondate:'20220101',
		transactionamount:-9.99,
	},
	{
		categoryid:11,
		merchantname:'Best Buy',
		transactiondate:'20220101',
		transactionamount:-1424.58,
	},
];

