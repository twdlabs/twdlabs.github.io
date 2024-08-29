


// Save to memory: entries of currently selected table. 
function saveTableToMemory() {
	console.log(`Saving table data to memory...`,selectedtableid);

	// Get memory key. 
	let memorykey = `saved${selectedtableid}`;

	// Get entries of currently selected table. 
	let selectedtableentries = selectedtable['tableentries'];
	console.log('Selected table entries:',selectedtableentries);

	// Save if any table entries present. 
	if(selectedtableentries.length) {

		// Get currently saved list of entries. 
		let prevstringedentrylist = localStorage.getItem( memorykey);
		// Save as previous version of list of entries. 
		localStorage.setItem( `${memorykey}prev` , prevstringedentrylist);

		// Convert current list of entries (to string form). 
		let stringedentrylist = JSON.stringify(selectedtableentries);

		// Save new list of entries as current version. 
		localStorage.setItem( memorykey , stringedentrylist);
		// console.log('localStorage:',localStorage);
	}

	// Remove from memory if no entries present. 
	else {

		// Remove any saved list of clubs from memory. 
		localStorage.removeItem( memorykey );
		// console.log('localStorage:',localStorage);
	}

	/****/

	// TODO: Save current table as previous table. 
}

// Restore saved table entries from memory (if it exists). 
function restoreTableFromMemory() {
	console.log(`Restoring table data from memory...`,selectedtableid);

	// Get memory key. 
	let memorykey = `saved${selectedtableid}`;

	// Get entries of currently selected table. 
	let selectedtableentries = selectedtable['tableentries'];
	console.log('Selected table entries:',selectedtableentries);

	// Get saved list of entries (in string form). 
	let stringedentrylist = localStorage.getItem( memorykey );
	// console.log('localStorage:',localStorage);
	
	// Restore saved list of entries (if exists in memory). 
	if(stringedentrylist) selectedtableentries = JSON.parse(stringedentrylist);

	// Create empty list of entries (if not in memory). 
	else selectedtableentries = [];
}

// Restore previous version of currently selected table. 
function undoLastTableAction() {

	// Get previous version of list of entries for currently selected table. 
	let prevstringedentrylist = localStorage.getItem( `${memorykey}prev` );

	// Save previous version into spot for current version. 
	let prevversion = 

	// Restore saved table entries from memory (if it exists). 
	restoreTableFromMemory();
}
