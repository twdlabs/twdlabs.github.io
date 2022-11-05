


// Set initial state text fields. 
setTextFieldsInitially();

// Activate text input field. 
activateTextFields();

// Activate password visibility togglers. 
activateVisibilityTogglers();


/*****/


// Set initial state text fields. 
function setTextFieldsInitially() {

	// Get all input fields. 
	let inputfieldboxes = document.getElementsByClassName('input');
	
	// Handle state checks on focus in and out. 
	for(fieldbox of inputfieldboxes) {
		
		// Get text input field. 
		let textinput = fieldbox.children[0];
		// console.log('textinput', textinput, textinput.value);

		// Check if text input field is empty. 
		let fieldIsEmpty = (textinput.value == '');
		// console.log('fieldIsEmpty:',fieldIsEmpty);

		// Set appropriate class for text input field. 
		if(!fieldIsEmpty) fieldbox.classList.add('holdsvalue');
		else fieldbox.classList.remove('holdsvalue');
	}
}

// Activate text input field. 
function activateTextFields() {

	// Get all input fields. 
	let inputfieldboxes = document.getElementsByClassName('input');
	
	// Handle state checks on focus in and out. 
	for(fieldbox of inputfieldboxes) {
		// fieldbox.addEventListener('focusin',checkFieldValue);
		fieldbox.addEventListener('focusout',checkFieldValue);
	}

	/*****/

	// Check state of text input field. 
	function checkFieldValue(event) {
	
		// Get text input field. 
		let fieldbox = event.currentTarget;
		// console.log('field box', event.currentTarget);
		let textinput = fieldbox.children[0];
		// console.log('textinput', textinput, textinput.value);
	
		// Check if text input field is empty. 
		let fieldIsEmpty = (textinput.value == '');
		// console.log('fieldIsEmpty:',fieldIsEmpty);
	
		// Set appropriate class for text input field. 
		if(!fieldIsEmpty) fieldbox.classList.add('holdsvalue');
		else fieldbox.classList.remove('holdsvalue');
	}
}

// Activate password visibility togglers. 
function activateVisibilityTogglers() {

	// Get all visibility togglers. 
	let visibilitytogglers = document.getElementsByClassName('visibilitytoggler');
	// console.log('visibilitytogglers',visibilitytogglers);
	
	// 
	for(toggler of visibilitytogglers) {
		toggler.addEventListener('click',togglePasswordVisibility);
	}

	/*****/

	// 
	function togglePasswordVisibility(event) {
		// console.log('togglePasswordVisibility');
		
		// Get password text field. 
		let fieldbox = event.currentTarget.parentElement;
		let textfield = fieldbox.children[0];

		// Check current password visibility state. 
		let isInvisible = textfield.type=='password';
		// console.log('textfield:',textfield);
		// console.log('type:',textfield.type);


		// Make password visible. 
		if(isInvisible) {
			textfield.type = 'text';
			fieldbox.classList.remove('hiddenpw');
		}
		// Make password invisible. 
		else {
			textfield.type = 'password';
			fieldbox.classList.add('hiddenpw');
		}
	}
}

// Toggle new user mode (signup vs login). 
function toggleNewUserMode(newuser) {

	// Get container. 
	let container = document.getElementById('container');
	
	// Set corresponding mode. 
	if(newuser) container.classList.add('newuser');
	else container.classList.remove('newuser');
}
