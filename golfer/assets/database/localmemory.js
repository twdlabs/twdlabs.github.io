


// Get history restore buttons. 
const undobtn = document.querySelector('div#container section.viewer div.grid div.head div.btnpanel button.undobtn');
const redobtn = document.querySelector('div#container section.viewer div.grid div.head div.btnpanel button.redobtn');


/*****/


// Define memory key. 
const entrylistmemorykey = `saved${selectedtableid}entries`;


/*****/


// Show contents of memory (local storage). 
function showMemory() {

	// Show contents of local storage. 
	console.log('Local storage:',localStorage);

	// Notify user. 
	// alert('View storage log in console...');
}

// Save current table to memory. 
function saveTableToMemory() {
	console.log(`Saving table data to memory...`,selectedtableid);

	// Get new current list of entries (in string form). 
	let currententriesliststring = JSON.stringify( selectedtable['currententries'] );

	// Save new list of entries as current. 
	localStorage.setItem( entrylistmemorykey, currententriesliststring);
}
// Restore current table from memory (if exists). 
function restoreTableFromMemory() {
	console.log(`Restoring table data from memory...`,selectedtableid);

	// Initialize empty list of table entries. 
	let currententrieslist = [];

	// Get saved list of entries (in string form). 
	let currententriesliststring = localStorage.getItem(entrylistmemorykey);
	// Restore saved list of entries (if exists). 
	if(currententriesliststring) currententrieslist = JSON.parse(currententriesliststring);

	// // Get history restore stack from memory. 
	// let entrieslisthistorystring = localStorage.getItem(`saved${selectedtableid}entrieshistory`);
	// // Restore saved list of entries (if exists). 
	// if(entrieslisthistorystring) selectedtable['entrieshistory'] = JSON.parse(entrieslisthistorystring);
	// // Notify if unavailable. 
	// else console.warn(`No saved entries available in memory for ${selectedtableid}`);

	// Restore entries to currently selected table. 
	selectedtable['currententries'] = currententrieslist;
}

// Check if adjacent table available in history matrix. 
function checkForAdjTable(diff) {

	// Get adjacent index. 
	let adjindex = selectedtable['currenthistoryindex'] + diff;

	// Check if list exists at adjacent index. 
	return !!( selectedtable['entrieshistory'][adjindex] );
}
// Check if previous table available in history matrix. 
function checkForPrevTable() {

	// Check if adjacent table available. 
	return checkForAdjTable(-1);
}
// Check if following table available in history matrix. 
function checkForNextTable() {

	// Check if adjacent table available. 
	return checkForAdjTable(+1);
}

// Save current table to history matrix. 
function saveTableToHistory() {
	console.log(`Saving table data to history matrix...`,selectedtableid);

	// Add current entries list to history matrix. 
	selectedtable['entrieshistory'].push( selectedtable['currententries'] );

	// Update history index (for current entries list). 
	selectedtable['currenthistoryindex']++;

	// Update history restore buttons. 
	updateHistoryBtns();

	// // Ensure existence of history restore stack for selected table. 
	// ensureTableHistory();

	// // Save current table state to history restore stack. 
	// selectedtable['entrieshistory'].push( selectedtable['currententries'] );

	// // Update index for current table state to last index. 
	// selectedtable['currenthistoryindex'] = selectedtable['entrieshistory'].length - 1;
	// console.log(`Restore stack (${selectedtableid}):`,selectedtable['entrieshistory']);
	
	// // Save history restore stack to memory. 
	// let stringedentrieshistory = JSON.stringify( selectedtable['entrieshistory'] );
	// localStorage.setItem( `${selectedtableid}entrieshistory`, stringedentrieshistory );
	// localStorage.setItem( `${selectedtableid}currenthistoryindex`, selectedtable['currenthistoryindex'] );

	/****/

	// Ensure existence of history restore stack for selected table. 
	function ensureTableHistory() {

		// Check for existing history restore stack. 
		let nohistorystack = !selectedtable['entrieshistory'] || selectedtable['currenthistoryindex'] == -1;
	
		// Create new history restore stack (if needed). 
		if(nohistorystack) {
			selectedtable['entrieshistory'] = [];
			selectedtable['currenthistoryindex'] = -1;
		}
	}
}
// Restore adjacent table from history matrix. 
function restoreTableFromHistory(diff) {

	// Check if adjacent table available. 
	let adjtableavailable = checkForAdjTable(diff);

	// Ensure adjacent table available. 
	if(!adjtableavailable) {
		console.warn(`Adjacent table unavailable (diff:${diff})`,diff);
		return;
	}

	// Update history index (if possible). 
	selectedtable['currenthistoryindex'] += diff;
	
	// Restore table entries at new history index. 
	selectedtable['currententries'] = selectedtable['entrieshistory'][ selectedtable['currenthistoryindex'] ];
}
// Restore and display previous table from history matrix (if exists). 
function undoAction() {
	console.log(`Restoring previous table data from memory...`,selectedtableid);

	// Restore previous table from history matrix. 
	restoreTableFromHistory(-1);

	// Display newly restored table. 
	displayTableBody();
}
// Restore and display following table from history matrix (if exists). 
function redoAction() {
	console.log(`Restoring following table data from memory...`,selectedtableid);

	// Restore following table from history matrix. 
	restoreTableFromHistory(+1);

	// Display newly restored table. 
	displayTableBody();
}

// Update history restore buttons. 
function updateHistoryBtns() {

	// Ensure user on viewer page (with both history buttons). 
	if( !undobtn || !redobtn ) return;

	// Check if previous table exists. 
	let prevexists = checkForPrevTable();
	// Check if following table exists. 
	let nextexists = checkForNextTable();

	// Enable undo button if previous table exists. 
	if(prevexists) undobtn.removeAttribute('disabled');
	// Disable undo button if no previous table exists. 
	else undobtn.setAttribute('disabled','');
	
	// Enable redo button if following table exists. 
	if(nextexists) redobtn.removeAttribute('disabled');
	// Disable redo button if no following table exists. 
	else redobtn.setAttribute('disabled','');
}

// Save table changes. 
function saveTableChanges() {

	// Save current table to memory. 
	saveTableToMemory();

	// Save current table to history matrix. 
	saveTableToHistory();
}
