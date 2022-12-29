


// Define blog user data. 
const userdata = [

	{
		userid:'xyz',
		lname:'LastName',
		fname:'FirstName',
		username:'UserName',
		avatarurl:'../chat/assets/images/avatar-m.png',
	},

];


/*****/


// Get user by id. 
function getUserById(id) {

	// Go thru all users. 
	for(let user of userdata) {

		// Return user if found. 
		if(user.userid==id) return user;
	}

	// Return nothing if user not found. 
	return null;
}
