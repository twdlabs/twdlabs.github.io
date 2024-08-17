


// Save table data to memory. 
function saveToMemory(tablekey) {
	console.log(`Saving ${tablekey} data to memory...`);

	// Save if any entries present. 
	if(tabledata[tablekey].tableentries.length) {

		// Convert current list of entries (to string form). 
		let stringedentrylist = JSON.stringify(tabledata[tablekey].tableentries);
		
		// Save current list of entries. 
		localStorage.setItem( `saved${tablekey}` ,stringedentrylist);
		// console.log('localStorage:',localStorage);
	}

	// Remove from memory if no entries present. 
	else {

		// Remove any saved list of clubs from memory. 
		localStorage.removeItem( `saved${tablekey}` );
		// console.log('localStorage:',localStorage);
	}

	// Show updated table entries. 
	loadTableBody(tablekey);
}

// Restore saved data from memory (if it exists). 
function restoreFromMemory(tablekey) {
	console.log(`Restoring ${tablekey} data from memory...`);

	// Get saved list of entries (in string form). 
	let stringedentrylist = localStorage.getItem( `saved${tablekey}` );
	// console.log('localStorage:',localStorage);
	
	// Restore saved list of entries (if exists in memory). 
	if(stringedentrylist) tabledata[tablekey].tableentries = JSON.parse(stringedentrylist);

	// Create empty list of entries (if not in memory). 
	else tabledata[tablekey].tableentries = [];
}
