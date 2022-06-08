


// Check if overlay is already present. 
let alreadyHasOverlay = document.querySelectorAll('#overlay').length > 0;

// Add overlay if not present. 
if(!alreadyHasOverlay) {
	// let overlay = '<div id="overlay" onclick="closeSideNav(); closeLibraryList(); closeSettings(); closeFeedbackForm();"></div>';
	let overlay = '<div id="overlay" onclick="closeAllPopups();"></div>';
	document.body.innerHTML += overlay;
}


/*****/


// Add overlay effect. 
function addOverlay() {
	console.log('Adding overlay effect');

	// Show overlay background. 
	document.querySelector('#overlay').fadeIn();

	// Remove scrollability from rest of page. 
	document.body.classList.add('fixed');
	document.body.style.overflow = 'hidden';
}

// Remove overlay effect. 
function removeOverlay() {
	console.log('Removing overlay effect');

	// Hide overlay background. 
	document.querySelector('#overlay').fadeOut();

	// Add scrollability back to rest of page. 
	document.body.classList.remove('fixed');
	document.body.style.overflow = '';
}

// Close all popups. 
function closeAllPopups() {
	console.log('Closing all popups from dashboard/overlay.js');

	// Remove popups from page. 
	document.querySelector('div.popup').remove();

	// Remove overlay. 
	removeOverlay();
}
