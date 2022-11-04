

// Define program data. 
const programData = [

	{
		posttype:'program',
		programid:'ACCT',
		title:'Accounting',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'ART',
		title:'Art',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'BIOL',
		title:'Biology',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'BL',
		title:'Business Leadership',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'CJ',
		title:'Criminal Justice',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'COMM',
		title:'Communications',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'CS',
		title:'Computer Science',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'ECE',
		title:'Electrical &amp; Computer Engineering',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'ENGL',
		title:'English',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'FIN',
		title:'Finance',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'KIN',
		title:'Kinesiology',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'MATH',
		title:'Mathematical Sciences',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'MKT',
		title:'Marketing',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'MUS',
		title:'Music',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'PHIL',
		title:'Philosophy',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'PHYS',
		title:'Physics',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'PS',
		title:'Political Science',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'PSYC',
		title:'Psychology',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'RPW',
		title:'Rhetoric &amp; Professional Writing',
		content:'',
		postedtime:0,
	},
	{
		posttype:'program',
		programid:'RS',
		title:'Religious Studies',
		content:'',
		postedtime:0,
	},

	{
		posttype:'program',
		programid:'XYZ',
		title:'Default Program',
		content:'',
		postedtime:0,
	},
	
];


/*****/


// Get program by id. 
function getProgramById(programid) {

	// Ensure capitalization of program id. 
	programid = programid.toUpperCase();

	// Go thru all program items. 
	for(let program of programData) {

		// Check for matching program. 
		let matchingProgram = programid == program.programid;

		// Return matching program if found. 
		if( matchingProgram ) return program;
	}

	// Return nothing if program not found. 
	return null;
}

