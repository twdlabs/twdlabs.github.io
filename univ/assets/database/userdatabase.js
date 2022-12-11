

// Define default users and post authors. 
const userData = [
	{
		userid:'000001',
		usertype:'student',
		studentid:'00000000000000',
		registrationtime:1577854800000,	// 2020-01-01 0:00:00
		lastname:'Smith',
		firstname:'John',
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
		studentid:'00000000000000',
		registrationtime:1577854800000,	// 2020-01-01 0:00:00
		lastname:'Smith',
		firstname:'Jane',
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
		studentid:'00000000000000',
		registrationtime:1577854800000,	// 2020-01-01 0:00:00
		lastname:'Smith',
		firstname:'Joe',
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
		studentid:'00000000000000',
		registrationtime:1577854800000,	// 2020-01-01 0:00:00
		lastname:'Smith',
		firstname:'Bill',
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


// Add additional user properties. 
addUserProperties();


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
	
		// Get first name of user. 
		let fname = user.firstname;
	
		// Get last name of user. 
		let lname = user.lastname;
	
		// Get user id. 
		let id = user.userid;
	
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

