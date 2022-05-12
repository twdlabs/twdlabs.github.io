

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
}
