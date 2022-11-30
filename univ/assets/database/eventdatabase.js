

// Define event data. 
const eventData = [

	{
		posttype:'event',
		eventid:'001',
		programid:'ACCT',
		title: 'Accounting Presentation: Balance Sheet',
		location:'President\'s Court',
		eventtime:1672938000000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'002',
		programid:'MATH',
		title: 'Actuarial Mathematics Competition',
		location:'President\'s Court',
		eventtime:1675616400000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'003',
		programid:'BIOL',
		title: 'Biology Presentation: ATP',
		location:'President\'s Court',
		eventtime:1678035600000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'004',
		programid:'PHYS',
		title: 'Physics Expo: Kinematics',
		location:'President\'s Court',
		eventtime:1680710400000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'005',
		programid:'CS',
		title: 'Computer Programming Competition',
		location:'Computer Lab',
		eventtime:1680710400000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'006',
		programid:'PHIL',
		title: 'Grand Philosophy Conference',
		location:'Main Conference Room',
		eventtime:1680710400000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'007',
		programid:'ACCT',
		title: 'Accounting Club Meeting',
		location:'Local Residence Hall',
		eventtime:1672938000000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'008',
		programid:'CS',
		title: 'Software Engineering Seminar',
		location:'Multi-Purpose Activity Room',
		eventtime:1680710400000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'009',
		programid:'ACCT',
		title: 'Accounting Presentation: Income Statement',
		location:'President\'s Court',
		eventtime:1672938000000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'010',
		programid:'ACCT',
		title: 'Accounting Presentation: Cashflow Statement',
		location:'President\'s Court',
		eventtime:1672938000000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'011',
		programid:'PHYS',
		title: 'Physics Expo: Electromagnetism',
		location:'President\'s Court',
		eventtime:1680710400000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'012',
		programid:'BIOL',
		title: 'Biology Presentation: Meiosis',
		location:'President\'s Court',
		eventtime:1678035600000,
		postedtime:0,
		content: '',
	},
	{
		posttype:'event',
		eventid:'013',
		programid:'BIOL',
		title: 'Biology Presentation: Mitosis',
		location:'President\'s Court',
		eventtime:1678035600000,
		postedtime:0,
		content: '',
	},
	
];


/*****/


// Add additional event properties. 
addEventProperties();


/*****/


// Define additional event properties. 
function addEventProperties() {

	// Go thru all events. 
	for(let event of eventData) {
		
		// Define event description. 
		if(!event.content) {

			// Get event name. 
			let eventname = (event.title).toLowerCase();

			// Get program name. 
			let program = getProgramById(event.programid);
			let programname = (program.title).toLowerCase();

			// Create event description. 
			event.content = `This event is called ${eventname} and it is associated with our ${programname} program. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus enim pariatur eius corrupti suscipit! Blanditiis nostrum esse, illo in harum quisquam tempora dignissimos omnis nihil beatae voluptatibus, enim labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quis eum distinctio blanditiis excepturi aliquid quos vero dolores laborum nulla, vitae, soluta quasi deserunt! Illum officiis voluptates veniam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore qui. Ipsum impedit, molestiae ea debitis, quasi hic ratione modi beatae minima quaerat dolorem, voluptates expedita eius labore? Necessitatibus, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus optio neque quaerat! Nihil velit minus et necessitatibus, porro beatae neque illum qui numquam quidem ad quam hic officia. Culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptates, at voluptatem ex voluptatum a, eligendi quibusdam optio illum ipsum possimus adipisci asperiores autem quia delectus temporibus dolorum repellat aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam debitis sint nulla fugiat, ut eligendi quam repellat commodi possimus maxime blanditiis nihil expedita ullam sapiente, ea perferendis placeat cum.`;
		}
		
		// Set searchable event data. 
		event.searchtags = getEventTags(event);
	}

	/****/
	
	// Define searchable event tags. 
	function getEventTags(event) {
	
		// Compile searchable components for this post type: event. 
		let tagsources = [ event.title, event.location, event.content ];
		
		// 
		return tagsources.join(' ').split(' ');
	}
}

// Get events by program. 
function getEventsByProgram(programid) {
	// 
	let result = [];
	// 
	for(let event of eventData) {
		if(event.programid==programid) result.push(event);
	}

	// 
	return result;
}

