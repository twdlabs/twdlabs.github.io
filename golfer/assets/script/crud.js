


// Define table section. 
const tablesection = document.querySelector('div#container section');

// Define destination for table title. 
const tabletitledestination = document.querySelector('div#container section div.grid div.head h2.header.tabletitle');


/*****/


// Display title for current table. 
function displayTableTitle() {

	// Disregard if no destination for title. 
	if(!tabletitledestination) return;

	// Initialize page mode. 
	let pagemode = '';
	// Initialize title to display. 
	let selectedtitle = '';

	// Handle viewer table. 
	// if( !selectedtableid && !selectedentryid ) {
	if( typeof displaytableid != 'undefined' ) {

		// Set page mode: read viewer. 
		pagemode = 'r';
		// Set viewer title. 
		selectedtitle = selectedtable['titles']['viewertitle'];
	}

	// Handle editor table in create mode. 
	else if( selectedtableid && !selectedentryid ) {

		// Set page mode: create editor. 
		pagemode = 'c';
		// Set editor title. 
		selectedtitle = selectedtable['titles']['editortitlec'];
	}

	// Handle editor table in update mode. 
	else if( selectedtableid && selectedentryid ) {

		// Set page mode: update editor. 
		pagemode = 'u';
		// Set editor title. 
		selectedtitle = selectedtable['titles']['editortitleu'];
	}

	// Assign page mode to table. 
	tablesection.classList.add(pagemode);
	// Display title in table head. 
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
	alert('Hi');
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
		let oldcurrenttable = JSON.parse( localStorage.getItem(selectedtablememorykey) );

		// Shift old current table backward in history. 
		selectedtable['bcktablestack'].push( oldcurrenttable ? oldcurrenttable : [] );

		// Clear out forward history. 
		selectedtable['fwdtablestack'] = [];
	}
}

// Go to updated table after operation. 
function goToUpdatedTable() {

	// Check if on editor page. 
	let oneditorpage = (typeof displaytableid == 'undefined');
	// console.log('Editor page?',oneditorpage);

	// Close entry editor (editor page). 
	if(oneditorpage) closeEntryEditor();
	// Display updated table (viewer page). 
	else displayTable();
}
