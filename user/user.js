

// Activate text input field. 
activateTextField();

/*****/

// Activate text input field. 
function activateTextField() {

	// Get all input fields. 
	let inputfields = document.getElementsByClassName('input');
	
	// Handle state checks on focus in and out. 
	for(field of inputfields) {
		// field.addEventListener('focusin',checkFieldValue);
		field.addEventListener('focusout',checkFieldValue);
	}
}

// Check state of text input field. 
function checkFieldValue(event) {

	// Get text input field. 
	let fieldbox = event.currentTarget;
	console.log('field box', event.currentTarget);
	let textfield = event.currentTarget.children[0];
	console.log('textfield', textfield, textfield.value);

	// Check if text input field is empty. 
	let emptyField = (textfield.value == '');
	console.log('emptyField:',emptyField);

	// Set appropriate class for text input field. 
	if(!emptyField) fieldbox.classList.add('holdsvalue');
	else fieldbox.classList.remove('holdsvalue');
}

// Toggle mode. 
function toggleNewUserMode(newuser) {

	// Get container. 
	let container = document.getElementById('container');
	
	// Set corresponding mode. 
	if(newuser) container.classList.add('newuser');
	else container.classList.remove('newuser');
}
