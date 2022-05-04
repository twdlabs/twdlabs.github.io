

// Initialize current user id. 
let currentUserId = 0;


/*****/


// Choose user. 
// chooseUser();

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


// Toggle selected user form. 
function toggleUserForm(newuser=false) {
	
	// Show registration form for new user. 
	if(newuser) {

		// Show registration form. 
		document.getElementById('chooseuser').classList.add('newuser');

		// Clear login form. 
		clearLoginForm();
	}

	// Show login form for existing user. 
	else {

		// Show login form. 
		document.getElementById('chooseuser').classList.remove('newuser');

		// Clear registration form. 
		clearSignupForm();
	}
}


// Clear all user forms. 
function clearUserForms() {
	
	// Clear login and registration forms. 
	clearLoginForm();
	clearSignupForm();
}
// Clear login form. 
function clearLoginForm() {

	// Clear input fields. 
	clearInputById('emailaddy');
	clearInputById('password');

	// Clear any messages. 
	setLoginError(null);
	setLoginSuccess(null);
}
// Clear registration form. 
function clearSignupForm() {

	// Clear input fields. 
	clearInputById('fname');
	clearInputById('lname');
	clearInputById('newemailaddy');
	clearInputById('newpassword');
	clearInputById('passwordconfirm');
	// cleared out due to error received when switching pages. 
	// clearInputById('avatarfile');

	// Clear any messages. 
	setSignupError(null);
	setSignupSuccess(null);
}
// Clear input box with given id. 
function clearInputById(inputfieldid) {

	// Get input field with given id. 
	let inputfield = document.getElementById(inputfieldid);

	// Clear input field value. 
	inputfield.value = '';

	// Dispatch input event to show placeholder. 
	inputfield.dispatchEvent( new Event('input') );
}
// Set login error message. 
function setLoginError(msg) {

	// Get error message box. 
	let msgbox = document.getElementById('loginerror');

	// Add message to message box. 
	msgbox.querySelector('span.caption').innerHTML = (msg) ? (msg) : ('');

	// Show message box for valid message. 
	if(msg) msgbox.classList.add('active');
	// Hide message box for empty message. 
	else msgbox.classList.remove('active');

	// // Hide message box for empty message. 
	// if(msg==null || msg=='') {
	// 	msgbox.querySelector('span.caption').innerHTML = '';
	// 	msgbox.classList.remove('active');
	// }
	// // Show message box for valid message. 
	// else {
	// 	msgbox.querySelector('span.caption').innerHTML = msg;
	// 	msgbox.classList.add('active');
	// }
}
// Set signup error message. 
function setSignupError(msg) {

	// Get error message box. 
	let msgbox = document.getElementById('regerror');

	// Add message to message box. 
	msgbox.querySelector('span.caption').innerHTML = (msg) ? (msg) : ('');

	// Show message box for valid message. 
	if(msg) msgbox.classList.add('active');
	// Hide message box for empty message. 
	else msgbox.classList.remove('active');

	// // Hide message box for empty message. 
	// if(msg==null || msg=='') {
	// 	msgbox.querySelector('span.caption').innerHTML = '';
	// 	msgbox.classList.remove('active');
	// }
	// // Show message box for valid message. 
	// else {
	// 	msgbox.querySelector('span.caption').innerHTML = msg;
	// 	msgbox.classList.add('active');
	// }
}
// Set login success message. 
function setLoginSuccess(msg) {

	// Get success message box. 
	let msgbox = document.getElementById('loginsuccess');

	// Add message to message box. 
	msgbox.querySelector('span.caption').innerHTML = (msg) ? (msg) : ('');

	// Show message box for valid message. 
	if(msg) msgbox.classList.add('active');
	// Hide message box for empty message. 
	else msgbox.classList.remove('active');

	// // Hide message box for empty message. 
	// if(msg==null || msg=='') {
	// 	msgbox.querySelector('span.caption').innerHTML = '';
	// 	msgbox.classList.remove('active');
	// }
	// // Show message box for valid message. 
	// else {
	// 	msgbox.querySelector('span.caption').innerHTML = msg;
	// 	msgbox.classList.add('active');
	// }
}
// Set signup success message. 
function setSignupSuccess(msg) {

	// Get success message box. 
	let msgbox = document.getElementById('regsuccess');

	// Add message to message box. 
	msgbox.querySelector('span.caption').innerHTML = (msg) ? (msg) : ('');

	// Show message box for valid message. 
	if(msg) msgbox.classList.add('active');
	// Hide message box for empty message. 
	else msgbox.classList.remove('active');

	// // Hide message box for empty message. 
	// if(msg==null || msg=='') {
	// 	msgbox.querySelector('span.caption').innerHTML = '';
	// 	msgbox.classList.remove('active');
	// }
	// // Show message box for valid message. 
	// else {
	// 	msgbox.querySelector('span.caption').innerHTML = msg;
	// 	msgbox.classList.add('active');
	// }
}


// Toggle password visibility. 
function togglePasswordVisibility(event) {

	// Get password visibility button. 
	let btn = event.currentTarget;

	// Get corresponding password field. 
	let pwField = btn.parentElement.querySelector('input');

	// Get current password visibility state. 
	let visiblePW = (pwField.type=='text');

	// Toggle password visibility to opposite state. 
	if(visiblePW) pwField.type = 'password';
	else pwField.type = 'text';
}

// Select file (clean up later). 
function selectFile() {
	
	// Define acceptable image file types. 
	const acceptedFileTypes = ['image/png','image/jpg','image/jpeg',];
	
	// Get selected file. 
	let selectedFile = event.currentTarget.files[0]; 
	console.log('Selected file:',selectedFile.type,selectedFile);

	// Use selected file. 
	useSelectedFile(selectedFile);

	/****/

	// Use selected file. 
	function useSelectedFile(selectedFile) {
	
		// Check for valid image file. 
		let isValidImageFile = !!(selectedFile) && acceptedFileTypes.includes(selectedFile.type);
		console.log('Valid image ?:',isValidImageFile);
	
		// Use image file if valid. 
		if(isValidImageFile) {
			console.log('Image file successfully loaded:',selectedFile.type);
	
			// Get drop target. 
			let droptarget = document.querySelector('section#registration div.input label.label.avatar');
	
			// Create file reader. 
			let fileReader = new FileReader();
	
			// Load selected image when file reader is loaded.
			fileReader.onload = ()=>{ loadSelectedImage(fileReader,droptarget); }
	
			// Trigger load function above. 
			fileReader.readAsDataURL(selectedFile);
	
			// Put drop target into display mode. 
			droptarget.classList.add('full');
		}
		else {
	
			// 
			console.warn('Invalid image file selected');
			window.alert('Invalid image file selected')
	
			// De-activate drop target. 
			deactivateDropTarget();
		}
	
		/***/
	
		// Load selected image. 
		function loadSelectedImage(fileReader,droptarget) {
	
			// Get url of selected file. 
			let fileUrl = fileReader.result;
			console.log('File url:',fileUrl);
	
			// Show selected image in drop target. 
			droptarget.innerHTML = `<img class="upload" src="${fileUrl}" alt="${selectedFile.name}">`;
		}
	}
}


// Login existing user. 
function loginUser(
	un = document.getElementById('emailaddy').value, 
	pw = document.getElementById('password').value
) {
	
	// Check for valid username. 
	let userIndex = getUserIndex(un);
	// Check for matching password. 
	let isSuccessfulLogin = (userIndex>=0) && checkForMatchingPassword(pw,userIndex);
	
	// Check for valid login credentials. 
	// let isSuccessfulLogin = checkForValidLogin();

	// Show appropriate windows for successful login. 
	if(isSuccessfulLogin) {

		// Hide user chooser. 
		document.getElementById('chooseuser').classList.add('gone');

		// Show chat app. 
		document.getElementById('chatlist').classList.remove('gone');
		// Refresh user data. 
		refreshUserData();

		// Notify user of successful login. 
		setLoginError(null);
		setLoginSuccess('User successfully logged in');
		console.log('Login successful.');
		// alert('Login successful.');
	}

	// Show appropriate windows for unsuccessful login. 
	else {

		// Hide chat app. 
		document.getElementById('chatlist').classList.add('gone');
		// Clear user data. 
		clearUserData();

		// Show user chooser. 
		document.getElementById('chooseuser').classList.remove('gone');

		// Notify user of any error. 
		setLoginSuccess(null);
		setLoginError('Invalid user credentials. Email or Password is incorrect!');
		console.warn('Login error: Invalid user credentials. Please try again.');
		// alert('Login error: Invalid user credentials. Please try again.');
	}

	// Return result of credential check. 
	// return isSuccessfulLogin;
	
	/*****/
	
	// Get user index for given username. 
	function getUserIndex(username) {

		// Initialize result. 
		let matchIndex = -1;

		// Skip search for empty username. 
		if(username==null || username=='') {

			// TODO: Show corresponding error message. 
			let msg = 'Hello';
			setLoginError(msg);

			// Skip search for empty username. 
			return matchIndex;
		}

		// Search thru user items, looking for first match. 
		for(let i in userdata) {

			// Check for matching item. 
			if(username == userdata[i].username){
				matchIndex = i;
				break;
			}
		}

		// Return result. 
		return matchIndex;
	}
	
	// Check if matching password for selected user. 
	function checkForMatchingPassword(pw,userIndex) {
		if(userIndex<0) return false;

		// Return result. 
		return (pw==userdata[userIndex].password)
	}

	// Check for valid login credentials. 
	function checkForValidLogin() {
		// 
	}

	// TODO: Check for valid login credentials. 
	function checkForValidLogin0() {

		// Initialize result. 
		let matchFound = false;

		// Go thru each user item, checking for match. 
		for(let i in userdata) {
 
			// Check for matching username (case insensitive). 
			let matchingUsername = (un == userdata[i].username);

			// Check for matching password (case sensitive). 
			let matchingPassword = (pw == userdata[i].password);

			// Check for all matching user credentials to initiate login.
			let matchFound = matchingUsername && matchingPassword;

			// End search upon finding match. 
			if(matchFound) break;
		}

		// Return result. 
		return matchFound;
	}

	// Clear user data. 
	function clearUserData() {
		
		// Invalidate user id. 
		currentUserId = -1;

		// Refresh data for null user. 
		refreshUserData();
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
	
	// Check if new user input data is valid. 
	isValidNewUserData = checkNewUserInput();

	// Notify user of any error. 
	if(!isValidNewUserData) {
		// setSignupError('Registration error: Invalid user data. Please try again.');
		// alert('Registration error: Invalid user data. Please try again.');
		return;
	}

	// Remove any pevious messages. 
	setSignupError(null);
	setSignupSuccess(null);

	// Create new user. 
	createNewUser();

	// Login for newly created user. 
	let isSuccessfulLogin = loginUser(un,pw);
	if(!isSuccessfulLogin) {
		alert('Error logging in new user.');
		console.error('Error logging in new user.');
	}
	
	/*****/
	
	// Check if new user input data is valid. 
	function checkNewUserInput() {

		// Initialize state of data validity. 
		let dataIsValid = true;

		// Ensure no fields are left empty. 
		let emptyfn = checkForEmptyValue(fn);
		let emptyln = checkForEmptyValue(ln);
		let emptyun = checkForEmptyValue(un);
		let emptypw0 = checkForEmptyValue(pw0);
		let emptypw1 = checkForEmptyValue(pw1);
		let emptyavurl = checkForEmptyValue(avurl);
		if(emptyfn||emptyln||emptyun||emptypw0||emptypw1||emptyavurl) {
			setSignupError('All fields required!');
			dataIsValid = false;
			return dataIsValid;
		}

		// Ensure username is not already in use (no duplicate usernames). 
		for(let user of userdata) {

			// Invalidate if same username found. 
			if(un==user.username) {
				setSignupError(`${un} - Email already exists!`);
				dataIsValid = false;
				break;
			}
		}

		// Return resulting state of data validity. 
		return dataIsValid;

		/****/

		// Check for empty value. 
		function checkForEmptyValue(value) {
			return (value==null || value==undefined || value.length==0);
		}
	}

	// Create new user. 
	function createNewUser() {

		// Add valid user data to list. 
		userdata.push({
			fname:fn,
			lname:ln,
			username:un,
			password:pw0,
			avatar:avurl,
		});
	}
}


// Logout current user. 
function logoutUser() {

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
		let userchooser = document.getElementById('chooseuser');
		userchooser.classList.remove('gone');
		userchooser.classList.remove('newuser');

		// Notify user of successful login. 
		console.log('Successfully logged out.');
		setLoginSuccess('Successfully logged out.');
		// alert('Successfully logged out.');
	}
}





/*****/
/*****/
// Check for valid username. 
function checkForValidUsername(un) {

	// Initialize result. 
	let matchFound = false;

	// Go thru each user item, checking for match. 
	for(let i in userdata) {

		// Check for matching username (case insensitive). 
		let matchingUsername = (un == userdata[i].username);

		// Check for all matching user credentials to initiate login.
		let matchFound = matchingUsername && matchingPassword;

		// End search upon finding match. 
		if(matchFound) break;
	}

	// Return result. 
	return matchFound;
}
// Check for valid matching password. 
function isValidPasswordAt(pw,index) {

	// Initialize result. 
	let matchFound = false;

	// Check for matching password (case sensitive). 
	let matchingPassword = (pw == userdata[i].password);

	// 

	// Return result. 
	return matchFound;
}
/*****/
/*****/





// // Choose user: Start user functionality. 
// function chooseUser() {

// 	// Prompt user for login or registration. 
// 	let haveValidResponse = false;
// 	let alreadyMember = false;

// 	// Continue till valid response received. 
// 	while(!haveValidResponse) {

// 		// Get user response. 
// 		let r = prompt('Are you already a member? (Y or N)');
// 		let response = (r) ? r.toUpperCase() : ('');

// 		// Check user response. 
// 		haveValidResponse = response=='Y' || response=='YES' || response=='N' || response=='NO';
// 		alreadyMember = response=='Y' || response=='YES';
// 	}

// 	// Prompt user for login. 
// 	if(alreadyMember) {
// 		// goLoginUser();
// 	}
// 	// Prompt user for registration. 
// 	else {
// 		// goRegisterUser();
// 	}
// }

// // Prompt user for login. 
// function goLoginUser() {

// 	// Initialize state of username input. 
// 	let haveValidUsername = false;
// 	// Initialize decision to cancel input. 
// 	let cancelInput = false;

// 	// Continue trying for input until valid input accepted or input process cancelled. 
// 	while(!haveValidUsername && !cancelInput) {

// 		// Get input username. 
// 		let un = prompt('Please enter your username');

// 		// Check if input is valid username. 
// 		haveValidUsername = checkForValidUsername(un);
// 		if(haveValidUsername) console.log('Username validated');

// 		// Check for input cancellation. 
// 		cancelInput = (un==null || un=='');
// 		if(cancelInput) console.log('Username input cancelled');
// 	}
	
// 	// Go for password only if username validated. 
// 	if(haveValidUsername) {

// 		// Initialize state of password match. 
// 		let haveMatchingPassword = false;

// 		// Initialize number of password attempts. 
// 		let numPasswordAttempts = 0;

// 		// Initialize decision to cancel input. 
// 		cancelInput = false;

// 		// Continue trying for input until valid input accepted or input process cancelled. 
// 		while(!haveMatchingPassword && !cancelInput) {

// 			// Get input password. 
// 			let pw = prompt('Please enter your password');

// 			// Check for matching password. 
// 			haveMatchingPassword = (pw==userdata[selectedUserIndex].password);

// 			// Increment number of password attempts. 
// 			numPasswordAttempts++;

// 			// Allow for only up to 3 failed password attempts. 
// 			cancelInput = (numPasswordAttempts>=3)
// 			if(cancelInput) break;
// 		}
// 	}
// }

// // Prompt user for registration. 
// function goRegisterUser() {

// 	// 
// 	let un = prompt('Please enter your new username');
// 	let pw0 = prompt('Please enter your new password');
// 	let pw1 = prompt('Please confirm your password');
// 	// let avurl = prompt('Please enter your avatar url');
// }

