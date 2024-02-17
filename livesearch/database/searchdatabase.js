


// Define post register. 
const postregister = {
	'letter':'letterid',
	'president':'presidentid',
	'university':'universityid',
	'platform':'platformid',
	'month':'monthid',
	'zodiacsign':'zodiacsignid',
	'number':'numberid',
	'planet':'planetid',
	'day':'dayid',
	'season':'seasonid',
};
console.log(`Post register:`,postregister);


// Define default search results, the basis of final search results. 
const defaultResultSet = [

	{
		blockname:'Alphabet',
		archivefolderpath:'../alphabet',
		searchlabel:{
			plural:'letters',
			singular:'letter',
		},
		itemlist: alphabetData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'U.S. Presidents',
		archivefolderpath:'../presidents',
		searchlabel:{
			plural:'presidents',
			singular:'president',
		},
		itemlist: presidentData,
		matchingitemlist: [],
		usevisual:true,
	},
	{
		blockname:'American Universities',
		archivefolderpath:'../universities',
		searchlabel:{
			plural:'universities',
			singular:'university',
		},
		itemlist: universityData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Social Media Platforms',
		archivefolderpath:'../socialmedia',
		searchlabel:{
			plural:'social platforms',
			singular:'social platform',
		},
		itemlist: socialData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Months of the Year',
		archivefolderpath:'../months',
		searchlabel:{
			plural:'months',
			singular:'month',
		},
		itemlist: monthData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Astrological Zodiac',
		archivefolderpath:'../zodiacsigns',
		searchlabel:{
			plural:'zodiac signs',
			singular:'zodiac sign',
		},
		itemlist: zodiacData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Numbers',
		archivefolderpath:'../numbers',
		searchlabel:{
			plural:'numbers',
			singular:'number',
		},
		itemlist: numberData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Planets',
		archivefolderpath:'../planets',
		searchlabel:{
			plural:'planets',
			singular:'planet',
		},
		itemlist: planetData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Days of the Week',
		archivefolderpath:'../weekdays',
		searchlabel:{
			plural:'days',
			singular:'day',
		},
		itemlist: dayData,
		matchingitemlist: [],
		usevisual:false,
	},
	{
		blockname:'Seasons',
		archivefolderpath:'../seasons',
		searchlabel:{
			plural:'seasons',
			singular:'season',
		},
		itemlist: seasonData,
		matchingitemlist: [],
		usevisual:false,
	},

	// {
	// 	blockname:'Xyz Set',
	// 	archivefolderpath:'../xyz',
	// 	searchlabel:{plural:'xyz', singular:'xyz',},
	// 	itemlist: [
	// 		{
	// 			posttype:'xyz',
	// 			title:'XyzResult',
	// 			content:'Hello there world'
	// 		},
	// 		{
	// 			posttype:'xyz',
	// 			title:'XyzResult',
	// 			content:'Hello there world'
	// 		},
	// 		{
	// 			posttype:'xyz',
	// 			title:'XyzResult',
	// 			content:'Hello there world'
	// 		},
	// 	],
	// 	matchingitemlist: [],
	// 	usevisual:false,
	// },
	
];
console.log(`Default result set:`,defaultResultSet);
