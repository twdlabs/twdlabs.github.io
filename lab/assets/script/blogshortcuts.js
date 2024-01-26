


// Enable keyboard shortcuts. 
enableShortcutKeys();


/*****/


// Enable keyboard shortcuts. 
function enableShortcutKeys() {

	// Enable respons to keys pressed on page. 
	document.addEventListener('keyup',checkKeys);

	/****/

	// Check keys. 
	function checkKeys(event) {
		console.log(event);

		// Get focal point of event. 
		let eventlocation = event.target;
		// Check if typing in text field. 
		let istypingtext = eventlocation.tagName.toLowerCase()=='input';
		// Disregard when typing in text field. 
		if(istypingtext) return;

		// Respond to 'F' key. 
		else if(event.keyCode==70) toggleFilterPanel();

		// Respond to 'S' key. 
		else if(event.keyCode==83) setLayoutStyleById(0);

		// Respond to 'B' key. 
		else if(event.keyCode==66) setLayoutStyleById(1);

		// Respond to 'L' key. 
		else if(event.keyCode==76) setLayoutStyleById(2);

		// Respond to 'left arrow' key. 
		else if(event.keyCode==37) goPrevPage();

		// Respond to 'right arrow' key. 
		else if(event.keyCode==39) goNextPage();

		// Respond to 'enter' key. 
		else if(event.keyCode==13) {

			// Check if filter panel open. 
			let filterpanelopen = filterpanel.box.classList.contains('open');

			// Apply selected filter items if filter panel open. 
			if(filterpanelopen) {

				// Apply selected filter items
				applySelectedFilters();

				// Close filter panel. 
				filterpanel.box.classList.remove('open');
			}
		}
	}
}
