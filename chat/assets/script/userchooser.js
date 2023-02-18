

// Set login error message. 
function setLoginError(msg) {

	// Get components of message box for login error. 
	const msgbox = document.getElementById('loginerror');
	const captionbox = msgbox.querySelector('span.caption');

	// Show message box for valid message. 
	if(msg) {
		// Add message to caption box. 
		captionbox.innerHTML = msg;
		// Show message box. 
		msgbox.classList.add('active');
	}
	
	// Hide message box for empty message. 
	else {
		// Clear caption box. 
		captionbox.innerHTML = '';
		// Hide message box. 
		msgbox.classList.remove('active');
	}
}


// Set login success message. 
function setLoginSuccess(msg) {

	// Get components of message box for login success. 
	const msgbox = document.getElementById('loginsuccess');
	const captionbox = msgbox.querySelector('span.caption');

	// Show message box for valid message. 
	if(msg) {
		// Add message to caption box. 
		captionbox.innerHTML = msg;
		// Show message box. 
		msgbox.classList.add('active');
	}
	
	// Hide message box for empty message. 
	else {
		// Clear caption box. 
		captionbox.innerHTML = '';
		// Hide message box. 
		msgbox.classList.remove('active');
	}
}


// Set signup error message. 
function setSignupError(msg) {

	// Get components of message box for signup error. 
	const msgbox = document.getElementById('regerror');
	const captionbox = msgbox.querySelector('span.caption');

	// Show message box for valid message. 
	if(msg) {
		// Add message to caption box. 
		captionbox.innerHTML = msg;
		// Show message box. 
		msgbox.classList.add('active');
	}
	
	// Hide message box for empty message. 
	else {
		// Clear caption box. 
		captionbox.innerHTML = '';
		// Hide message box. 
		msgbox.classList.remove('active');
	}
}


// Set signup success message. 
function setSignupSuccess(msg) {

	// Get components of message box for signup success. 
	const msgbox = document.getElementById('regsuccess');
	const captionbox = msgbox.querySelector('span.caption');

	// Show message box for valid message. 
	if(msg) {
		// Add message to caption box. 
		captionbox.innerHTML = msg;
		// Show message box. 
		msgbox.classList.add('active');
	}
	
	// Hide message box for empty message. 
	else {
		// Clear caption box. 
		captionbox.innerHTML = '';
		// Hide message box. 
		msgbox.classList.remove('active');
	}
}

