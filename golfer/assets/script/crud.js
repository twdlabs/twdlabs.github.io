


// Define table section. 
const tablesection = document.querySelector('div#container section');

// Define destination for table title. 
const tabletitledestination = document.querySelector('div#container section div.grid div.head h2.header.tabletitle');


/*****/


// Display title of current table. 
if(typeof manualtitle=='undefined') displayTableTitle();


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

/*****/

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

// Close table entry editor. 
function closeEntryEditor() {

	// Go directly to previous page (table viewer). 
	if(selectedtableid) window.location.href = `../${selectedtableid}`;
	else console.warn('No table id provided...',selectedtableid);
}

// Start entering new club distance. 
function startNewClubDistance(givenentryid) {

	// Go directly to editor page for new club distances. 
	window.location.href = `./newdistance/?tid=${displaytableid}&eid=${givenentryid}`;
}

// Close entry of new club distance. 
function closeNewClubDistance() {

	// Go directly to previous page (table viewer). 
	window.location.href = '../';
}
