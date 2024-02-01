

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


// Define default search results, the basis of final search results. 
const defaultResultSet = [

	{
		setname:'Alphabet',
		folderpath:'./alphabet',
		searchlabel:{
			plural:'letters',
			singular:'letter',
		},
		itemlist: alphabetData,
		visual:false,
	},
	{
		setname:'U.S. Presidents',
		folderpath:'./presidents',
		searchlabel:{
			plural:'presidents',
			singular:'president',
		},
		itemlist: presidentData,
		visual:true,
	},
	{
		setname:'American Universities',
		folderpath:'./universities',
		searchlabel:{
			plural:'universities',
			singular:'university',
		},
		itemlist: universityData,
		visual:false,
	},
	{
		setname:'Social Media Platforms',
		folderpath:'./socialmedia',
		searchlabel:{
			plural:'social platforms',
			singular:'social platform',
		},
		itemlist: socialData,
		visual:false,
	},
	{
		setname:'Months of the Year',
		folderpath:'./months',
		searchlabel:{
			plural:'months',
			singular:'month',
		},
		itemlist: monthData,
		visual:false,
	},
	{
		setname:'Astrological Zodiac Signs',
		folderpath:'./zodiacsigns',
		searchlabel:{
			plural:'zodiac signs',
			singular:'zodiac sign',
		},
		itemlist: zodiacData,
		visual:false,
	},
	{
		setname:'Numbers',
		folderpath:'./numbers',
		searchlabel:{
			plural:'numbers',
			singular:'number',
		},
		itemlist: numberData,
		visual:false,
	},
	{
		setname:'Planets',
		folderpath:'./planets',
		searchlabel:{
			plural:'planets',
			singular:'planet',
		},
		itemlist: planetData,
		visual:false,
	},
	{
		setname:'Days of the Week',
		folderpath:'./weekdays',
		searchlabel:{
			plural:'days',
			singular:'day',
		},
		itemlist: dayData,
		visual:false,
	},
	{
		setname:'Seasons',
		folderpath:'./seasons',
		searchlabel:{
			plural:'seasons',
			singular:'season',
		},
		itemlist: seasonData,
		visual:false,
	},

	// {
	// 	setname:'Xyz Set',
	// 	folderpath:'./xyz',
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
	// 	visual:false,
	// },
	
];


/*****/


// Add additional result properties. 
addResultProperties();
// console.log(defaultResultSet);


/*****/


// Define additional result properties for search functionality. 
function addResultProperties() {

	// Go thru each result block. 
	for(let resultblock of defaultResultSet) {

		// Go thru each result item in current block. 
		for(let resultitem of resultblock.itemlist) {
			
			// Get searchable result data. 
			resultitem.searchtags = getResultTags(resultitem);
		}
	}

	/****/
	
	// Define searchable result tags. 
	function getResultTags(resultitem) {
	
		// Compile searchable components for this post type: general result. 
		let tagsources = [ resultitem.title, resultitem.content ];
		
		// Return list of tags split by word. 
		return tagsources.join(' ').split(' ');
	}
}
