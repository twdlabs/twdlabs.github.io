


// Save table data to memory. 
function saveTableToMemory(tableid) {
	console.log(`Saving ${tableid} data to memory...`);

	// Save if any entries present. 
	if(databasetables[tableid].tableentries.length) {

		// Convert current list of entries (to string form). 
		let stringedentrylist = JSON.stringify(databasetables[tableid].tableentries);
		
		// Save current list of entries. 
		localStorage.setItem( `saved${tableid}` ,stringedentrylist);
		// console.log('localStorage:',localStorage);
	}

	// Remove from memory if no entries present. 
	else {

		// Remove any saved list of clubs from memory. 
		localStorage.removeItem( `saved${tableid}` );
		// console.log('localStorage:',localStorage);
	}

	// Show updated table entries. 
	loadTableBody(tableid);
}

// Restore saved table data from memory (if it exists). 
function restoreTableFromMemory(tableid) {
	console.log(`Restoring ${tableid} data from memory...`);

	// Get saved list of entries (in string form). 
	let stringedentrylist = localStorage.getItem( `saved${tableid}` );
	// console.log('localStorage:',localStorage);
	
	// Restore saved list of entries (if exists in memory). 
	if(stringedentrylist) databasetables[tableid].tableentries = JSON.parse(stringedentrylist);

	// Create empty list of entries (if not in memory). 
	else databasetables[tableid].tableentries = [];
}
