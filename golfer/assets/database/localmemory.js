


// Save table entries to memory. 
function saveTableToMemory(giventableid) {
	console.log(`Saving ${giventableid} data to memory...`);

	// Save if any entries present. 
	if(databasetables[giventableid].tableentries.length) {

		// Convert current list of entries (to string form). 
		let stringedentrylist = JSON.stringify(databasetables[giventableid].tableentries);
		
		// Save current list of entries. 
		localStorage.setItem( `saved${giventableid}` ,stringedentrylist);
		// console.log('localStorage:',localStorage);
	}

	// Remove from memory if no entries present. 
	else {

		// Remove any saved list of clubs from memory. 
		localStorage.removeItem( `saved${giventableid}` );
		// console.log('localStorage:',localStorage);
	}
}

// Restore saved table entries from memory (if it exists). 
function restoreTableFromMemory(giventableid) {
	console.log(`Restoring ${giventableid} data from memory...`);

	// Get saved list of entries (in string form). 
	let stringedentrylist = localStorage.getItem( `saved${giventableid}` );
	// console.log('localStorage:',localStorage);
	
	// Restore saved list of entries (if exists in memory). 
	if(stringedentrylist) databasetables[giventableid].tableentries = JSON.parse(stringedentrylist);

	// Create empty list of entries (if not in memory). 
	else databasetables[giventableid].tableentries = [];
}
