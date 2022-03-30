
let mainbox = document.querySelector('main.main');
document.documentElement.addEventListener('keydown',showNewKeyPress);

// Show new key press. 
function showNewKeyPress(event) {
	console.log('Event:',event);

	// Activate main box. 
	mainbox.classList.remove('pre');

	// Get key details. 
	keycode = event.keyCode;
	keyname = (keycode==32) ? (event.code) : (event.key);

	// Show key details. 
	document.getElementById('keyname').innerHTML = keyname;
	document.getElementById('keycode').innerHTML = keycode;
	document.getElementById('keyname2').innerHTML = keyname;
	document.getElementById('keycode2').innerHTML = keycode;
}
