

// Define program data. 
const programData = [

	{
		posttype:'program',
		programid:'XYZ',
		title:'Undecided',
		content:'',
		postedtime:0,
	},

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
		title:'Electrical & Computer Engineering',
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
		title:'Rhetoric & Professional Writing',
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
	
];


/*****/


// Add additional program properties. 
addProgramProperties();


/*****/


// Define additional program properties. 
function addProgramProperties() {

	// Go thru all programs. 
	for(let program of programData) {
		
		// Define event description. 
		if(!program.content) {

			// Get program name. 
			let programname = (program.title).toLowerCase();
	
			// Create program description. 
			program.content = `This is a description for the ${programname} program in our university. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, alias soluta, debitis dolore porro sapiente quae cumque saepe facere quaerat eius, itaque aspernatur eos repellat reprehenderit illo reiciendis tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, alias soluta, debitis dolore porro sapiente quae cumque saepe facere quaerat eius, itaque aspernatur eos repellat reprehenderit illo reiciendis tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, alias soluta, debitis dolore porro sapiente quae cumque saepe facere quaerat eius, itaque aspernatur eos repellat reprehenderit illo reiciendis tempora.`;
		}
		
		// Set searchable program data. 
		program.searchtags = getProgramTags(program);
	}

	/****/
	
	// Define searchable program tags. 
	function getProgramTags(program) {
	
		// Compile searchable components for this post type: program. 
		let tagsources = [ program.programid, program.title, program.content ];
		
		// 
		return tagsources.join(' ').split(' ');
	}
}


// Get program by id. 
function getProgramById(programid) {

	// Ensure capitalization of program id. 
	programid = (`${programid}`).toUpperCase();

	// Go thru all program items. 
	for(let program of programData) {

		// Check for matching program. 
		let matchingProgram = (programid == program.programid);

		// Return matching program if found. 
		if( matchingProgram ) return program;
	}

	// Return nothing if program not found. 
	return null;
}

