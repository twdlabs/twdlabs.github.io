


// 
document.addEventListener('keydown',checkForShortcutKey)


/*****/


// Check for shortcut key. 
function checkForShortcutKey(event) {
	// console.log('event:',event);

	// Get code for selected key. 
	let keycode = event.keyCode;

	// Check if overlay open. 
	let isOverlayOpen = overlay.classList.contains('active');

	// Handle overlay shortcuts if overlay open. 
	if(isOverlayOpen) {

		// Esc key: Cancel selected entry. Exit overlay. 
		if(keycode==27) {
			closeOverlay();
		}

		// Enter key: Save selected entry. 
		else if(keycode==13) {

			// Check if in creator mode. 
			let inCreatorMode = overlay.classList.contains('create');

			// Xyz if in creator mode. 
			if(inCreatorMode) {
				createItem();
				closeOverlay();
			}

			// Xyz if not in creator mode. 
			else {
				updateItem();
				closeOverlay();
			}
		}
	}

	// Handle table shortcuts if overlay not open. 
	else {

		// TODO: Enter key: Open selected entry. 
		if(keycode==13) {
			editItem(currentlyselectedindex);
		}

		// Up key: Decrement index of selected entry. 
		else if(keycode==38) {
			decrSelectedIndex();
			refreshSelectedEntry();
		}

		// Down key: Increment index of selected entry. 
		else if(keycode==40) {
			incrSelectedIndex();
			refreshSelectedEntry();
		}

		// Delete key: Delete selected entry. 
		else if(keycode==8 || keycode==46) {
			deleteItem(currentlyselectedindex);
		}
	}

	/****/

	// Decrement index of selected entry. 
	function decrSelectedIndex() {

		// Decrement index. 
		currentlyselectedindex--;
		
		// Check for index overflow. 
		let overflow = (currentlyselectedindex < 0);
		// Readjust index if overflowed. 
		if(overflow) currentlyselectedindex = userdata.length-1;
	}

	// Increment index of selected entry. 
	function incrSelectedIndex() {

		// Increment index. 
		currentlyselectedindex++;
		
		// Check for index overflow. 
		let overflow = (currentlyselectedindex >= userdata.length);
		// Readjust index if overflowed. 
		if(overflow) currentlyselectedindex = 0;
	}

	// Refresh selection based on currently selected index. 
	function refreshSelectedEntry() {

		// Get all entry rows. 
		let allentryrows = document.querySelectorAll('table.table tr.row.entry');

		// Go thru all entry rows. 
		for(let entryrow of allentryrows) {

			// Get index of given entry. 
			let index = entryrow.getAttribute('data-index');

			// Select row. 
			if(index==currentlyselectedindex) {
				entryrow.classList.add('active');
			}
			// Unselect row. 
			else {
				entryrow.classList.remove('active');
			}
		}
	}
}
