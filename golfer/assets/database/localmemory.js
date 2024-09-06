


// Define restore stacks. 
let restorestack = {

	// Define undo restore stack. 
	undo:[
		// 
	],

	// Define redo restore stack. 
	redo:[
		// 
	],
};


/*****/


// Save to memory: entries of currently selected table. 
function saveTableToMemory() {
	console.log(`Saving table data to memory...`,selectedtableid);

	// Get memory key. 
	let memorykey = `saved${selectedtableid}`;

	// Save current table entries as previous table entries. 
	saveCurrentAsPrev();

	// Save new table entries as current table entries. 
	saveNewAsCurrent();

	/****/

	// Save current table entries as previous table entries. 
	function saveCurrentAsPrev() {

		// Get currently saved list of entries. 
		let currententryliststring = localStorage.getItem(memorykey);

		// Save current list as previous list. 
		localStorage.setItem( `${memorykey}prev` , currententryliststring);
	}

	// Save new table entries as current table entries. 
	function saveNewAsCurrent() {

		// Get entries of currently selected table. 
		let newentrylist = selectedtable['tableentries'];
		console.log('New table entries:',newentrylist);
	
		// Convert new list of entries (to string form). 
		let newentryliststring = JSON.stringify(newentrylist);
	
		// Save new list of entries as current. 
		localStorage.setItem( memorykey , newentryliststring);
	}
}

// Restore saved table entries from memory (if it exists). 
function restoreTableFromMemory() {
	console.log(`Restoring table data from memory...`,selectedtableid);

	// Get memory key. 
	let memorykey = `saved${selectedtableid}`;

	// Initialize empty list of entries. 
	let entrylist = [];

	// Get saved list of entries (in string form). 
	let entryliststring = localStorage.getItem(memorykey);
	
	// Restore saved list of entries (if exists). 
	if(entryliststring) {
		entrylist = JSON.parse(entryliststring);
	}
	// 
	else {
		console.warn(`No saved entries available in memory for ${selectedtableid}`);
	}

	// Restore entries to currently selected table. 
	selectedtable['tableentries'] = entrylist;
}

// Restore previous table entries from memory (if it exists). 
function restorePrevMemoryTable() {
	console.log(`Restoring previous table data from memory...`,selectedtableid);

	// Get memory key. 
	let memorykey = `saved${selectedtableid}`;

	// Initialize empty list of entries. 
	let preventrylist = [];

	// Get previous list of entries (in string form). 
	let preventryliststring = localStorage.getItem(`${memorykey}prev`);
	localStorage.removeItem(`${memorykey}prev`);
	
	// Restore previous list of entries (if exists). 
	if(preventryliststring) {
		preventrylist = JSON.parse(preventryliststring);
	}
	// 
	else {
		preventrylist = selectedtable['tableentries'];
		console.warn(`No previous entries available in memory for ${selectedtableid}`);
	}

	// Restore previous entries to currently selected table. 
	selectedtable['tableentries'] = preventrylist;
}

// TODO: Restore next table entries from memory (if it exists). 
function restoreNextMemoryTable() {
	console.log(`Restoring recalled table data from memory...`,selectedtableid);

	// Get memory key. 
	let memorykey = `saved${selectedtableid}`;

	// Initialize empty list of entries. 
	let preventrylist = [];

	// 
}
