

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
		searchlabel:{
			plural:'letters',
			singular:'letter',
		},
		setlist: [
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter A',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter B',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter C',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter D',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter E',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter F',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter G',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter H',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter I',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter J',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter K',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter L',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter M',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter N',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter O',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter P',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter Q',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter R',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter S',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter T',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter U',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter V',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter W',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter X',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter Y',
				content:'Hello there world'
			},
			{
				posttype:'letter',
				letterid:-1,
				title:'Letter Z',
				content:'Hello there world'
			},
		],
	},
	{
		setname:'U.S. Presidents',
		searchlabel:{
			plural:'presidents',
			singular:'president',
		},
		setlist: [
			{
				posttype:'president',
				presidentid:-1,
				title:'George Washington',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'John Adams',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Thomas Jefferson',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Andrew Jackson',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'John Quincy Adams',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'James Monroe',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Abraham Lincoln',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Andrew Johnson',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Calvin Coolidge',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'James A. Garfield',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Grover Cleveland',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Woodrow Wilson',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Harry S. Truman',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'John F. Kennedy',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Lyndon B. Johnson',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Richard M. Nixon',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'James Carter',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Ronald Reagan',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'George H.W. Bush',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Bill Clinton',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'George W. Bush',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Barack Obama',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Donald Trump',
				content:'Hello there world'
			},
			{
				posttype:'president',
				presidentid:-1,
				title:'Joseph Biden',
				content:'Hello there world'
			},
		],
	},
	{
		setname:'American Universities',
		searchlabel:{
			plural:'universities',
			singular:'university',
		},
		setlist: [
			{
				posttype:'university',
				universityid:-1,
				title:'Delta College',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Saginaw Valley State University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'University of Michigan',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Michigan State University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Central Michigan University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'University of Chicago',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'DePaul University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'University of Illinois',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'University of Pittsburgh',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Duquesne University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'University of Pennsylvania',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Pennsylvania State University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'New York University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'University of Southern California',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Rutgers University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Princeton University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Kennesaw University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Cornell University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Tufts University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Georgia State University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Louisiana State University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Florida State University',
				content:'Hello there world'
			},
			{
				posttype:'university',
				universityid:-1,
				title:'Harvard University',
				content:'Hello there world'
			},
		],
	},
	{
		setname:'Social Media Platforms',
		searchlabel:{
			plural:'platforms',
			singular:'platform',
		},
		setlist: [
			{
				posttype:'platform',
				platformid:-1,
				title:'Friendster',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'MySpace',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Black Planet',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Facebook',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Twitter',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Instagram',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Snapchat',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'YouTube',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Meerkat',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Tinder',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Bumble',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Rumble',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'TikTok',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'musically',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Periscope',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'LinkedIn',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'Speakeasy',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'FB Messenger',
				content:'Hello there world'
			},
			{
				posttype:'platform',
				platformid:-1,
				title:'WhatsApp',
				content:'Hello there world'
			},
		],
	},
	{
		setname:'Months of the Year',
		searchlabel:{
			plural:'months',
			singular:'month',
		},
		setlist: [
			{
				posttype:'month',
				monthid:-1,
				title:'January',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'February',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'March',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'April',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'May',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'June',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'July',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'August',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'September',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'October',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'November',
				content:'Hello there world'
			},
			{
				posttype:'month',
				monthid:-1,
				title:'December',
				content:'Hello there world'
			},
		],
	},
	{
		setname:'Astrological Zodiac Signs',
		searchlabel:{
			plural:'zodiac signs',
			singular:'zodiac sign',
		},
		setlist: [
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Capricorn',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Aquarius',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Pisces',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Aries',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Taurus',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Gemini',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Cancer',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Leo',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Virgo',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Libra',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Scorpio',
				content:'Hello there world'
			},
			{
				posttype:'zodiacsign',
				zodiacsignid:-1,
				title:'Saggitarius',
				content:'Hello there world'
			},
		],
	},
	{
		setname:'Numbers',
		searchlabel:{
			plural:'numbers',
			singular:'number',
		},
		setlist: [
			{
				posttype:'number',
				numberid:-1,
				title:'One',
				content:'Hello there world'
			},
			{
				posttype:'number',
				numberid:-1,
				title:'Two',
				content:'Hello there world'
			},
			{
				posttype:'number',
				numberid:-1,
				title:'Three',
				content:'Hello there world'
			},
			{
				posttype:'number',
				numberid:-1,
				title:'Four',
				content:'Hello there world'
			},
			{
				posttype:'number',
				numberid:-1,
				title:'Five',
				content:'Hello there world'
			},
			{
				posttype:'number',
				numberid:-1,
				title:'Six',
				content:'Hello there world'
			},
			{
				posttype:'number',
				numberid:-1,
				title:'Seven',
				content:'Hello there world'
			},
			{
				posttype:'number',
				numberid:-1,
				title:'Eight',
				content:'Hello there world'
			},
			{
				posttype:'number',
				numberid:-1,
				title:'Nine',
				content:'Hello there world'
			},
			{
				posttype:'number',
				numberid:-1,
				title:'Ten',
				content:'Hello there world'
			},
		],
	},
	{
		setname:'Planets',
		searchlabel:{
			plural:'planets',
			singular:'planet',
		},
		setlist: [
			{
				posttype:'planet',
				planetid:-1,
				title:'Mercury',
				content:'Hello there world'
			},
			{
				posttype:'planet',
				planetid:-1,
				title:'Venus',
				content:'Hello there world'
			},
			{
				posttype:'planet',
				planetid:-1,
				title:'Earth',
				content:'Hello there world'
			},
			{
				posttype:'planet',
				planetid:-1,
				title:'Mars',
				content:'Hello there world'
			},
			{
				posttype:'planet',
				planetid:-1,
				title:'Jupiter',
				content:'Hello there world'
			},
			{
				posttype:'planet',
				planetid:-1,
				title:'Saturn',
				content:'Hello there world'
			},
			{
				posttype:'planet',
				planetid:-1,
				title:'Uranus',
				content:'Hello there world'
			},
			{
				posttype:'planet',
				planetid:-1,
				title:'Neptune',
				content:'Hello there world'
			},
			{
				posttype:'planet',
				planetid:-1,
				title:'Pluto',
				content:'Hello there world'
			},
		],
	},
	{
		setname:'Days of the Week',
		searchlabel:{
			plural:'days',
			singular:'day',
		},
		setlist: [
			{
				posttype:'day',
				dayid:-1,
				title:'Monday',
				content:'Hello there world'
			},
			{
				posttype:'day',
				dayid:-1,
				title:'Tuesday',
				content:'Hello there world'
			},
			{
				posttype:'day',
				dayid:-1,
				title:'Wednesday',
				content:'Hello there world'
			},
			{
				posttype:'day',
				dayid:-1,
				title:'Thursday',
				content:'Hello there world'
			},
			{
				posttype:'day',
				dayid:-1,
				title:'Friday',
				content:'Hello there world'
			},
			{
				posttype:'day',
				dayid:-1,
				title:'Saturday',
				content:'Hello there world'
			},
			{
				posttype:'day',
				dayid:-1,
				title:'Sunday',
				content:'Hello there world'
			},
		],
	},
	{
		setname:'Seasons',
		searchlabel:{
			plural:'seasons',
			singular:'season',
		},
		setlist: [
			{
				posttype:'season',
				seasonid:-1,
				title:'Spring',
				content:'Hello there world'
			},
			{
				posttype:'season',
				seasonid:-1,
				title:'Summer',
				content:'Hello there world'
			},
			{
				posttype:'season',
				seasonid:-1,
				title:'Fall',
				content:'Hello there world'
			},
			{
				posttype:'season',
				seasonid:-1,
				title:'Winter',
				content:'Hello there world'
			},
		],
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
