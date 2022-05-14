


// Handle events. 
handleEvents();

// Switch to login form. 
toggleUserForm(newuser=false);

// Clear all user forms. 
clearUserForms();


/*****/


// Handle events. 
function handleEvents() {

	// 
	let vistogs = document.querySelectorAll('.visibilitytoggler.btn');
	for(let toggler of vistogs) {

		// 
		toggler.addEventListener('click',togglePasswordVisibility);
	}
}


// Login existing user. 
function loginUser(
	email = document.getElementById('emailaddy').value, 
	pword = document.getElementById('password').value
) {
	
	// Check if any login credentials missing. 
	if( !email || !pword ) {

		// 
		currentUserId = -1;

		// 
		setLoginSuccess(null);
		setLoginError('All fields required!');

		// 
		return;
	}
	
	// Check for valid login credentials. 
	let isCredentialsValid = checkCredentials(email,pword);

	// Load into function. 
	loadIntoFunction(switchWindows);

	// Show appropriate messages for successful login. 
	if(isCredentialsValid) {

		// Notify user of successful login. 
		setLoginError(null);
		setLoginSuccess('User successfully logged in');
		console.log('Login successful.');
	}

	// Show appropriate messages for unsuccessful login. 
	else {

		// Notify user of invalid credentials. 
		setLoginSuccess(null);
		setLoginError('Invalid user credentials. Email or Password is incorrect!');
	}
		
	// Refresh user data (or clear data for null user). 
	refreshUserData();
	
	/*****/

	// Check for valid login credentials. 
	function checkCredentials(un,pw) {
	
		// Get user id/index if valid username (-1 if not found). 
		currentUserId = getUserIndex(un);
	
		// Check for matching username (case insensitive) and password (case sensitive). 
		return ( (currentUserId >= 0) && (pw==userdata[currentUserId].password) );
	
		/****/
	
		// Get user index for given username. 
		function getUserIndex(username) {
	
			// Initialize result. 
			let nullIndex = -1;
	
			// Skip search and return null index for empty username. 
			if(!username) return nullIndex;
	
			// Search thru users, looking for first matching username. 
			for(let i in userdata) {
	
				// Check for matching username/email (case insensitive). 
				if( username.toUpperCase() == userdata[i].username.toUpperCase() ){
					return i;
				}
			}
	
			// Return null index if no match found. 
			return nullIndex;
		}
	}

	// Switch windows. 
	function switchWindows() {

		// Show appropriate windows for successful login. 
		if(isCredentialsValid) {

			// Hide user chooser. 
			document.getElementById('userchooser').classList.add('gone');
			// Show chat app. 
			document.getElementById('chatlist').classList.remove('gone');
		}

		// Show appropriate windows for unsuccessful login. 
		else {

			// Hide chat app. 
			document.getElementById('chatlist').classList.add('gone');
			// Show user chooser. 
			document.getElementById('userchooser').classList.remove('gone');
		}
	}
}

// Register new user. 
function registerUser(
	fn = document.getElementById('fname').value, 
	ln = document.getElementById('lname').value, 
	un = document.getElementById('newemailaddy').value, 
	pw0 = document.getElementById('newpassword').value, 
	pw1 = document.getElementById('passwordconfirm').value, 
	avurl = document.getElementById('avatarfile').value
) {
	
	// Check if any login credentials missing. 
	if( !fn || !ln || !un || !pw0 || !pw1 || !avurl ) {
		setSignupSuccess(null);
		setSignupError('All fields required!');
		return;
	}
	
	// Check if new username is valid. 
	isUsernameValid = checkNewUsername();
	
	// Check if passwords match. 
	isPasswordValid = checkNewPasswords();

	// 
	if( !isUsernameValid || !isPasswordValid ) return;
	
	// Notify user of successful registeration. 
	setSignupError(null);
	setSignupSuccess('User successfully registered');

	// Create new user. 
	createNewUser(fn,ln,un,pw0,avurl);

	// Login newly created user. 
	loginUser(un,pw0);
	

	/*****/
	

	// Check if new username is valid. 
	function checkNewUsername() {

		// Initialize state of data validity. 
		let isUsernameUnique = false;

		// Ensure username is not already in use (no duplicate usernames). 
		for(let user of userdata) {

			// Invalidate input if duplicate username found. 
			if(un==user.username) {

				// Show corresponding message. 
				setSignupSuccess(null);
				setSignupError(`${un} - Email already exists!`);

				// Return as invalid if duplicate found. 
				return false;
			}
		}

		// Return as valid if no duplicates found. 
		return true;
	}

	// Check if passwords match. 
	function checkNewPasswords() {

		// Check for matching passwords. 
		let isMatching = (pw0==pw1);

		// Notify user of error. 
		if(!isMatching) {
			setSignupSuccess(null);
			setSignupError('Passwords don\'t match');
		}

		// 
		return isMatching;
	}

	// Create new user. 
	function createNewUser(fn,ln,un,pw,avurl) {

		// Add validated user data to list. 
		userdata.push({
			fname:fn,
			lname:ln,
			username:un,
			password:pw,
			avatar:avurl,
		});

		// Create space for new user's messsage data. 
		let newUserOutgoingMsgs = []
		for(let senderid in messageDataMatrix) {

			// Create space for new user's incoming messsage data. 
			messageDataMatrix[senderid].push( [] );

			// Create space for new user's outgoing messsage data. 
			newUserOutgoingMsgs.push( [] );
		}
		messageDataMatrix.push(newUserOutgoingMsgs);
	}
}


// Logout current user. 
function logoutUser() {

	// Clear out user id. 
	currentUserId = -1;

	// Load into function. 
	loadIntoFunction(switchWindows);

	// Clear all user forms. 
	clearUserForms();

	/****/

	// Switch windows. 
	function switchWindows() {

		// Hide chat app. 
		document.getElementById('chatlist').classList.add('gone');
	
		// Show user chooser (in login mode). 
		let userchooserbox = document.getElementById('userchooser');
		userchooserbox.classList.remove('gone');
		userchooserbox.classList.remove('newuser');

		// Notify user of successful login. 
		console.log('Successfully logged out.');
		setLoginSuccess('Successfully logged out.');
		// alert('Successfully logged out.');
	}
}

