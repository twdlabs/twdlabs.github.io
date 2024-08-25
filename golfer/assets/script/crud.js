


// Define destination for table title. 
const tablesection = document.querySelector('div#container section');

// Define destination for table title. 
const tabletitledestination = document.querySelector('div#container section div.grid div.head h2.header');


/*****/


// Load title of current table. 
loadTableTitle();


/*****/


// Load title of current table. 
function loadTableTitle() {
	console.log('Selected table:',selectedtable);

	// Disregard if no destination for title. 
	if(!tabletitledestination) return;

	// Initialize title to display. 
	let selectedtitle = ''

	// Handle viewer table. 
	if( !selectedtableid && !selectedentryid ) {

		// Set viewer title. 
		selectedtitle = selectedtable['viewertitle'];
	}

	// Handle editor table in create mode. 
	if( selectedtableid && !selectedentryid ) {

		// Set editor mode: create. 
		tablesection.classList.add('c');

		// Set editor title. 
		selectedtitle = selectedtable['editortitlenew'];
	}

	// Handle editor table in update mode. 
	if( selectedtableid && selectedentryid ) {

		// Set editor mode: update. 
		tablesection.classList.add('u');

		// Set editor title. 
		selectedtitle = selectedtable['editortitleexisting'];
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

// Start editing existing entry. 
function startEditEntry(givenentryid) {

	// Go directly to editor page for existing entry. 
	// window.location.href = `../edit/?tid=${displaytableid}&eid=${givenentryid}`;
	window.location.href = `../editor/?tid=${displaytableid}&eid=${givenentryid}`;
}

// Start entering new club distance. 
function startNewClubDistance(givenentryid) {

	// Go directly to editor page for new club distances. 
	window.location.href = './newdistance/?eid='+givenentryid;
}

// Close table entry editor. 
function closeEntryEditor() {

	// Go directly to previous page (table viewer). 
	if(selectedtableid) window.location.href = `../${selectedtableid}`;
	else console.warn('No table id provided...',selectedtableid);
}

// Close entry of new club distance. 
function closeNewClubDistance() {

	// Go directly to previous page (table viewer). 
	window.location.href = '../';
}
