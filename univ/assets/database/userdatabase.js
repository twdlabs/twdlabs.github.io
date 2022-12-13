

// Define default users and post authors. 
const userData = [
	{
		userid:'000001',
		usertype:'student',
		studentid:'016',
		registrationtime:1577854800000,	// 2020-01-01 0:00:00
		username:'jsmith1',
		userbio:'Lorem ipsum dolor imet',
		avatarurl:'./assets/media/avatar-m.png',
		likedposts:{
			blog:[],
			program:[],
			course:[],
			event:[],
			faculty:[],
			student:[],
		},
	},
	{
		userid:'000002',
		usertype:'student',
		studentid:'010',
		registrationtime:1577854800000,	// 2020-01-01 0:00:00
		username:'jsmith2',
		userbio:'Lorem ipsum dolor imet',
		avatarurl:'./assets/media/avatar-f.png',
		likedposts:{
			blog:[],
			program:[],
			course:[],
			event:[],
			faculty:[],
			student:[],
		},
	},
	{
		userid:'000003',
		usertype:'student',
		studentid:'015',
		registrationtime:1577854800000,	// 2020-01-01 0:00:00
		username:'jsmith3',
		userbio:'Lorem ipsum dolor imet',
		avatarurl:'./assets/media/avatar-m.png',
		likedposts:{
			blog:[],
			program:[],
			course:[],
			event:[],
			faculty:[],
			student:[],
		},
	},
	{
		userid:'000004',
		usertype:'student',
		studentid:'002',
		registrationtime:1577854800000,	// 2020-01-01 0:00:00
		username:'bsmith',
		userbio:'Lorem ipsum dolor imet',
		avatarurl:'./assets/media/avatar-m.png',
		likedposts:{
			blog:[],
			program:[],
			course:[],
			event:[],
			faculty:[],
			student:[],
		},
	},
];


/*****/


// Define additional user properties. 
function addUserProperties() {

	// Go thru all users. 
	for(let user of userData) {
	
		// Set full name as title. 
		user.title = getFullName(user);
		
		// Set searchable user data. 
		user.searchtags = getUserTags(user);
	}

	/****/

	// Define full name of given user. 
	function getFullName(user) {

		// Get user type. 
		let type = user.usertype;
	
		// Get user id. 
		let id = user[`${type}id`];

		// Get person file for user. 
		let person = null;
		if(type=='student') person = getStudentById(id);
		else if(type=='faculty') person = getFacultyById(id);
	
		// Get last name of user. 
		let lname = person.lastname;
	
		// Get first name of user. 
		let fname = person.firstname;
	
		// Compile components of full name. 
		return `${fname} ${lname}`;
		// return `${fname} ${lname} [${id}]`;
	}
	
	// Define searchable user tags. 
	function getUserTags(user) {
	
		// Compile searchable components for this post type: user. 
		let tagsources = [ user.username, user.lastname, user.firstname, user.userbio ];
		
		// Return string of tags. 
		return tagsources.join(' ').split(' ');
	}
}

