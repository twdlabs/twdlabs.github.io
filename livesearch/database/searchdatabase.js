

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
const defaultResults = [

	{
		setname:'Alphabet',
		foldername:'xyz',
		searchlabel:{
			plural:'letters',
			singular:'letter',
		},
		setlist: alphabetData,
		visual:false,
	},
	{
		setname:'U.S. Presidents',
		foldername:'xyz',
		searchlabel:{
			plural:'presidents',
			singular:'president',
		},
		setlist: presidentData,
		visual:true,
	},
	{
		setname:'American Universities',
		foldername:'xyz',
		searchlabel:{
			plural:'universities',
			singular:'university',
		},
		setlist: universityData,
		visual:false,
	},
	{
		setname:'Social Media Platforms',
		foldername:'xyz',
		searchlabel:{
			plural:'social platforms',
			singular:'social platform',
		},
		setlist: socialData,
		visual:false,
	},
	{
		setname:'Months of the Year',
		foldername:'xyz',
		searchlabel:{
			plural:'months',
			singular:'month',
		},
		setlist: monthData,
		visual:false,
	},
	{
		setname:'Astrological Zodiac Signs',
		foldername:'xyz',
		searchlabel:{
			plural:'zodiac signs',
			singular:'zodiac sign',
		},
		setlist: zodiacData,
		visual:false,
	},
	{
		setname:'Numbers',
		foldername:'xyz',
		searchlabel:{
			plural:'numbers',
			singular:'number',
		},
		setlist: numberData,
		visual:false,
	},
	{
		setname:'Planets',
		foldername:'xyz',
		searchlabel:{
			plural:'planets',
			singular:'planet',
		},
		setlist: planetData,
		visual:false,
	},
	{
		setname:'Days of the Week',
		foldername:'xyz',
		searchlabel:{
			plural:'days',
			singular:'day',
		},
		setlist: dayData,
		visual:false,
	},
	{
		setname:'Seasons',
		foldername:'xyz',
		searchlabel:{
			plural:'seasons',
			singular:'season',
		},
		setlist: seasonData,
		visual:false,
	},

	// {
	// 	setname:'Set Name',
	// 	setlist: [
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
	// 	]
	// },
	
];


/*****/


// Add additional result properties. 
addResultProperties();
// console.log(defaultResults);


/*****/


// Define additional result properties. 
function addResultProperties() {

	// Go thru all result sets. 
	for(let resultSet of defaultResults) {

		// Go thru all result items in current set. 
		for(let resultitem of resultSet.setlist) {
			
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
