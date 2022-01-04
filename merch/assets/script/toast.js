

// Get snackbar element. 
let snackbar = document.getElementById('snackbar');
console.log('snackbar',snackbar);

// Add snackbar if non-existent. 
if(!snackbar) addSnackbar();

// Define default time delay before toast messages. 
const delay = 0;
// Define default time duration of toast messages. 
const dt = 3000;

// Test the toaster. 
// passTheToast('Testing 123');


/*****/


// Close snackbar upon clicking. 
snackbar.addEventListener('click', endTheToast);


/*****/


// Add snackbar. 
function addSnackbar() {
	document.body.innerHTML += `
	<!-- #snackbar -->
	<div id='snackbar'></div>
	<!-- /#snackbar -->`;
	snackbar = document.getElementById('snackbar');
}

// Pass toast message and show it. 
function passTheToast(msg) {

	// Pass toast message. 
	if(msg) snackbar.innerHTML = msg;
	else snackbar.innerHTML = '';

	// Show toast message after time delay. 
	setTimeout( function() { 
		
		snackbar.classList.add('active');

		// Call ender function after time duration.
		setTimeout(endTheToast, dt);

	}, delay );
}


function endTheToast() {
	snackbar.classList.remove('active');
}
