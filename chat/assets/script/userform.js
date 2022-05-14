

// Toggle selected user form. 
function toggleUserForm(newuser=false) {
	
	// Show registration form for new user. 
	if(newuser) {

		// Show registration form. 
		document.getElementById('userchooser').classList.add('newuser');

		// Clear login form. 
		clearLoginForm();
	}

	// Show login form for existing user. 
	else {

		// Show login form. 
		document.getElementById('userchooser').classList.remove('newuser');

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
