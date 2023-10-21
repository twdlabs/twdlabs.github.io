


// Get container for user chooser. 
const userchooserbox = document.querySelector('div#container main#userchooser');
// Get container for chat list. 
const chatlistbox = document.querySelector('div#container main#chatlist');

// Get avatar file input. 
const avatarfileinput = document.querySelector('div#container main#userchooser section#registration form.form div.input #avatarfile');

// Get components of message box for login error. 
const loginerrorbox = document.querySelector('div#container main#userchooser section.page form.form div.input.msg span#loginerror');
const loginerrormsgbox = document.querySelector('div#container main#userchooser section.page form.form div.input.msg span#loginerror span.caption');

// Get components of message box for login success. 
const loginsuccessbox = document.querySelector('div#container main#userchooser section.page form.form div.input.msg span#loginsuccess');
const loginsuccessmsgbox = document.querySelector('div#container main#userchooser section.page form.form div.input.msg span#loginsuccess span.caption');

// Get components of message box for signup error. 
const regerrorbox = document.querySelector('div#container main#userchooser section.page form.form div.input.msg span#regerror');
const regerrormsgbox = document.querySelector('div#container main#userchooser section.page form.form div.input.msg span#regerror span.caption');

// Get components of message box for signup success. 
const regsuccessbox = document.querySelector('div#container main#userchooser section.page form.form div.input.msg span#regsuccess');
const regsuccessmsgbox = document.querySelector('div#container main#userchooser section.page form.form div.input.msg span#regsuccess span.caption');


/*****/


// Prepare user forms. 
prepareUserForms();


/*****/


// Prepare user forms. 
function prepareUserForms() {

	// Get all visibility togglers. 
	let visibilitytogglers = document.querySelectorAll('.btn.visibilitytoggler');

	// Go thru all visibility togglers. 
	for(let toggler of visibilitytogglers) {
		toggler.addEventListener('click',togglePasswordVisibility);
	}

	// Clear all user forms. 
	clearUserForms();

	// Switch to login form. 
	toggleUserForm(newuser=false);

	// Activate avatar file input. 
	avatarfileinput.addEventListener('input',selectFile);

	/****/

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
	function selectFile(event) {
		
		// Define acceptable image file types. 
		const acceptedFileTypes = ['image/png','image/jpg','image/jpeg',];
		
		// Get selected file. 
		let selectedFile = event.currentTarget.files[0]; 
		let filetype = selectedFile ? selectedFile.type : '[none]';
		console.log('Selected file:', filetype, selectedFile);
	
		// Use selected file. 
		if(selectedFile) useSelectedFile(selectedFile);
	
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
				// window.alert('Invalid image file selected');
		
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
}

// Toggle selected user form. 
function toggleUserForm(newuser=false) {
	
	// Show registration form for new user. 
	if(newuser) {
		// Show registration form. 
		userchooserbox.classList.add('newuser');
	}

	// Show login form for existing user. 
	else {
		// Show login form. 
		userchooserbox.classList.remove('newuser');
	}

	// Clear all user forms. 
	clearUserForms();
}

// Clear all user forms. 
function clearUserForms() {
	
	// Clear login form. 
	clearLoginForm();

	// Clear registration form. 
	clearSignupForm();

	/****/

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
		clearInputById('newfname');
		clearInputById('newlname');
		clearInputById('newemailaddy');
		clearInputById('newpassword');
		clearInputById('passwordconfirm');
		clearInputById('avatarfile');	// (error received when switching pages)
	
		// Clear any messages. 
		setSignupError(null);
		setSignupSuccess(null);
	}

	// Clear input box with given id. 
	function clearInputById(inputfieldid) {
	
		// Get input field with given id. 
		let inputfield = document.querySelector(`#${inputfieldid}`);
	
		// Clear input field value. 
		inputfield.value = '';
	
		// Dispatch input event to show placeholder. 
		inputfield.dispatchEvent( new Event('input') );
	}
}

// Set login error message. 
function setLoginError(msg) {

	// Show message box for valid message. 
	if(msg) {
		// Add message to caption box. 
		loginerrormsgbox.innerHTML = msg;
		// Show message box. 
		loginerrorbox.classList.add('active');
	}
	
	// Hide message box for empty message. 
	else {
		// Clear caption box. 
		loginerrormsgbox.innerHTML = '';
		// Hide message box. 
		loginerrorbox.classList.remove('active');
	}
}
// Set login success message. 
function setLoginSuccess(msg) {

	// Show message box for valid message. 
	if(msg) {
		// Add message to caption box. 
		loginsuccessmsgbox.innerHTML = msg;
		// Show message box. 
		loginsuccessbox.classList.add('active');
	}
	
	// Hide message box for empty message. 
	else {
		// Clear caption box. 
		loginsuccessmsgbox.innerHTML = '';
		// Hide message box. 
		loginsuccessbox.classList.remove('active');
	}
}
// Set signup error message. 
function setSignupError(msg) {

	// Show message box for valid message. 
	if(msg) {
		// Add message to caption box. 
		regerrormsgbox.innerHTML = msg;
		// Show message box. 
		regerrorbox.classList.add('active');
	}
	
	// Hide message box for empty message. 
	else {
		// Clear caption box. 
		regerrormsgbox.innerHTML = '';
		// Hide message box. 
		regerrorbox.classList.remove('active');
	}
}
// Set signup success message. 
function setSignupSuccess(msg) {

	// Show message box for valid message. 
	if(msg) {
		// Add message to caption box. 
		regsuccessmsgbox.innerHTML = msg;
		// Show message box. 
		regsuccessbox.classList.add('active');
	}
	
	// Hide message box for empty message. 
	else {
		// Clear caption box. 
		regsuccessmsgbox.innerHTML = '';
		// Hide message box. 
		regsuccessbox.classList.remove('active');
	}
}
