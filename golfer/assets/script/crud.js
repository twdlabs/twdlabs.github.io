


// Define destination for table title. 
const tabletitledestination = document.querySelector('div#container section div.grid div.head h2.header');


/*****/


// Load title of given table. 
loadTableTitle();


/*****/


// Load title of given table. 
function loadTableTitle() {
	
	// Disregard if no destination present. 
	if(!tabletitledestination) return;
	
	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];

	// Choose title to display (based on current page). 
	let selectedtitle = giventabledata.viewertitle;
	if(xyz) selectedtitle = giventabledata.editortitle;
	if(xyz) selectedtitle = giventabledata.editortitlenew;

	// Display information in table head. 
	tabletitledestination.innerHTML = selectedtitle;
}

// Start creating new entry. 
function startNewEntry(tableid) {

	// Save id of last open table. 
	localStorage.setItem('lasttableid',tableid);

	// Go directly to editor page for new entry. 
	// window.location.href = './add/';
	window.location.href = `../add/?tableid=${tableid}`;
	// window.location.href = `../editor/?tableid=${tableid}`;
}

// Close table editor for new entry. 
function closeNewEntryEditor() {

	// Get id of last open table. 
	let tableid = localStorage.getItem('lasttableid');
	console.log('tableid:',tableid);

	// Go directly to previous page (table viewer). 
	// window.location.href = '../';
	if(tableid) window.location.href = `../${tableid}`;
	else console.warn('No table id provided...',tableid);
}

// Start editing entry. 
function startEditEntry(tableid,entryid) {

	// Save id of last open table. 
	localStorage.setItem('lasttableid',tableid);

	// Go directly to editor page for existing entry. 
	// window.location.href = './edit/?entryid='+entryid;
	window.location.href = `../edit/?tableid=${tableid}&entryid=${entryid}`;
	// window.location.href = `../editor/?tableid=${tableid}&entryid=${entryid}`;
}

// Close table editor for existing entry. 
function closeEntryEditor() {

	// Get id of last open table. 
	let tableid = localStorage.getItem('lasttableid');
	console.log('tableid:',tableid);

	// Go directly to previous page (table viewer). 
	// window.location.href = '../';
	if(tableid) window.location.href = `../${tableid}`;
	else console.warn('No table id provided...',tableid);
}


// Start entry of new club distance. 
function startNewClubDistance(givenclubid) {

	// Go directly to distance editor page. 
	window.location.href = './newdistance/?clubid='+givenclubid;
}

// Close entry of new club distance. 
function closeNewClubDistance() {

	// 
}

// Save newly entered club distance. 
function saveNewClubDistance(givenclubid) {

	// Get selected input field. 
	let inputfield = event.currentTarget;
	// console.log();

	// Get club entry associated with given club id. 
	let clubentry = getClubEntryById(givenclubid);

	// Proceed if club entry exists. 
	if(clubentry) {

		// Get value of new distance entry. 
		let newdistancevalue = parseFloat(inputfield.value);

		// Disregard any non-number values. 
		if( isNaN(newdistancevalue) ) return;

		// Save if valid number value. 
		else clubentry.distancelist.push(newdistancevalue);
	}

	// Save table data to memory. 
	saveTableToMemory('clubs');

	// Show updated table entries. 
	loadTableBody(tableid);
}
