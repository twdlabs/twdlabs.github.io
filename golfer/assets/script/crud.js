


// Define table section. 
const tablesection = document.querySelector('div#container section');

// Define destination for table title. 
const tabletitledestination = document.querySelector('div#container section div.grid div.head h2.header.tabletitle');


/*****/


// Display title of current table. 
displayTableTitle();


/*****/


// Display title of current table. 
function displayTableTitle() {

	// Disregard if no destination for title. 
	if(!tabletitledestination) return;

	// Initialize title to display. 
	let selectedtitle = '';

	// Handle viewer table. 
	// if( !selectedtableid && !selectedentryid ) {
	if( typeof displaytableid != 'undefined' ) {

		// Set viewer title. 
		selectedtitle = selectedtable['titles']['viewertitle'];
	}

	// Handle editor table in create mode. 
	else if( selectedtableid && !selectedentryid ) {

		// Set editor mode: create. 
		tablesection.classList.add('c');

		// Set editor title. 
		selectedtitle = selectedtable['titles']['editortitlenew'];
	}

	// Handle editor table in update mode. 
	else if( selectedtableid && selectedentryid ) {

		// Set editor mode: update. 
		tablesection.classList.add('u');

		// Set editor title. 
		selectedtitle = selectedtable['titles']['editortitleexisting'];
	}

	// Display information in table head. 
	tabletitledestination.innerHTML = selectedtitle;
}

// Start creating new entry. 
function startNewEntry() {

	// Go directly to editor page for new entry. 
	// window.location.href = `../add/?tid=${displaytableid}`;
	window.location.href = `../editor/?tid=${displaytableid}`;
}
// Start creating new distance entry. 
function startNewDistanceEntry(givenclubid) {

	// Define id of destination table. 
	let destinationtableid = 'shots';

	// Go directly to editor page for new club distances. 
	window.location.href = `../editor/?tid=${destinationtableid}&cid=${givenclubid}`;
}

// Start editing existing entry. 
function startEditEntry(givenentryid) {

	// Go directly to editor page for existing entry. 
	// window.location.href = `../edit/?tid=${displaytableid}&eid=${givenentryid}`;
	window.location.href = `../editor/?tid=${displaytableid}&eid=${givenentryid}`;
}

// Close table entry editor. 
function closeEntryEditor() {

	// Go directly to table viewer page. 
	if(selectedtableid) window.location.href = `../${selectedtableid}`;
	else console.warn('No table id provided...',selectedtableid);
}

// Save table changes. 
function saveTableChanges() {

	// Update table history. 
	updateTableHistory();

	// Save new current table in memory (replacing old current table). 
	saveTableToMemory();

	// Go to updated table. 
	goToUpdatedTable();

	/****/

	// Update table history. 
	function updateTableHistory() {

		// Get old current table. 
		let oldcurrenttable = JSON.parse( localStorage.getItem(tablememorykey) );

		// Shift old current table backward in history. 
		selectedtable['bcktablestack'].push(oldcurrenttable);

		// Clear out forward history. 
		selectedtable['fwdtablestack'] = [];
	}
}

// Go to updated table after operation. 
function goToUpdatedTable() {

	// Check if on editor page. 
	let oneditorpage = (typeof displaytableid == 'undefined');
	console.log('Editor page?',oneditorpage);

	// Close entry editor (editor page). 
	if(oneditorpage) closeEntryEditor();

	// Display updated table section (viewer page). 
	else {
		// Display updated table. 
		displayTableBody();
		// Update table history navigation buttons. 
		updateHistoryBtns();
	}
}
