


// Check for shortcut key upon key press. 
document.addEventListener('keydown',checkForShortcutKey)


/*****/


// Check for shortcut key. 
function checkForShortcutKey(event) {
	// console.log('Key event:',event);

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
			let inEditorMode = overlay.classList.contains('edit');

			// Create entry if in creator mode. 
			if(!inEditorMode) {
				createEntry();
				closeOverlay();
			}

			// Update entry if in editor mode. 
			else {
				updateEntry();
				closeOverlay();
			}
		}
	}

	// Handle table shortcuts if overlay not open. 
	else {

		// Enter key: Open selected entry. 
		if(keycode==13) {
			editEntry(currentrowindex);
		}

		// 'N' key: Create new entry. 
		if(keycode==78) {
			openOverlay(0);
		}

		// Up key: Decrement index of selected entry. 
		else if(keycode==38) {
			decrSelectedIndex();
			refreshSelectedEntry();

			// Stop scroll behavior when cycling thru data items. 
			event.preventDefault();
		}

		// Down key: Increment index of selected entry. 
		else if(keycode==40) {
			incrSelectedIndex();
			refreshSelectedEntry();

			// Stop scroll behavior when cycling thru data items. 
			event.preventDefault();
		}

		// Delete key: Delete selected entry. 
		else if(keycode==8 || keycode==46) {
			deleteEntry(currentrowindex);
		}
	}

	/****/

	// Decrement index of selected entry. 
	function decrSelectedIndex() {

		// Decrement index. 
		currentrowindex--;
		
		// Check for index overflow. 
		let overflow = (currentrowindex < 0);
		// Readjust index if overflowed. 
		if(overflow) currentrowindex = crudDataList.length-1;
	}

	// Increment index of selected entry. 
	function incrSelectedIndex() {

		// Increment index. 
		currentrowindex++;
		
		// Check for index overflow. 
		let overflow = (currentrowindex >= crudDataList.length);
		// Readjust index if overflowed. 
		if(overflow) currentrowindex = 0;
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
			if(index==currentrowindex) {
				entryrow.classList.add('active');
			}
			// Unselect row. 
			else {
				entryrow.classList.remove('active');
			}
		}
	}
}
