


// Define destination for user's name. 
const usernamedestination = document.querySelector('div#container section div.grid div.head h2.header.username');


/*****/


// Display current user. 
displayCurrentUser();


/*****/


// Get name of current user. 
function getUserName() {
	return localStorage.getItem('username');
}

// Save name of current user. 
function saveUserName(un) {
	localStorage.setItem('username',un);
}

// Clear current user. 
function clearCurrentUser() {

	// Remove user data from memory. 
	localStorage.removeItem('username');

	// Display current user. 
	displayCurrentUser();
}

// Change current user. 
function changeCurrentUser() {

	// Check for user's name. 
	let username = getUserName();

	// Get new name for user. 
	let newusername = prompt('Enter new username:', username?username:'');
	if(newusername) saveUserName(newusername);

	// Display current user. 
	displayCurrentUser();
}

// Display current user. 
function displayCurrentUser() {

	// Check for user's name. 
	let username = getUserName();

	// Display information in table head. 
	if(username) usernamedestination.innerHTML = username;
}
