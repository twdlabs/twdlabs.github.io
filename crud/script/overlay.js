


// Open overlay in proper mode. 
function openOverlay(creatorMode=false) {

	// Set creator or editor mode. 
	if(creatorMode) overlay.classList.add('create');
	else overlay.classList.remove('create');

	// Activate overlay. 
	overlay.classList.add('active');
}

// Close overlay. 
function closeOverlay() {

	// De-activate overlay. 
	overlay.classList.remove('active');
}
