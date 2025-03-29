


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
		else if(event.keyCode==70) toggleTagFilterPane();

		// Respond to 'S' key. 
		else if(event.keyCode==83) setLayoutSizeStyleById(0);

		// Respond to 'B' key. 
		else if(event.keyCode==66) setLayoutSizeStyleById(1);

		// Respond to 'L' key. 
		else if(event.keyCode==76) setLayoutSizeStyleById(2);

		// Respond to 'left arrow' key. 
		else if(event.keyCode==37) goPrevPage();

		// Respond to 'right arrow' key. 
		else if(event.keyCode==39) goNextPage();

		// Respond to 'enter' key. 
		else if(event.keyCode==13) {

			// Check if filter pane open. 
			let filterpaneopen = tagfilterpane['block'].classList.contains('open');

			// Apply selected filter tag items (if filter pane open). 
			if(filterpaneopen) {

				// Apply selected tag filter items. 
				applySelectedTagFilters();

				// Close filter pane. 
				tagfilterpane['block'].classList.remove('open');
			}
		}
	}
}
