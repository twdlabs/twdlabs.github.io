


// Start creating new entry. 
function startNewEntry(tableid) {

	// Save id of last open table. 
	localStorage.setItem('lasttableid',tableid);

	// Go directly to editor page for new entry. 
	// window.location.href = './add/';
	window.location.href = `../add/?tableid=${tableid}`;
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


// Compile layout for given list of fields. 
function createFieldsListLayout(fielddatalist,entryalreadyexists) {

	// Initialize layout for list of fields. 
	let fieldlistresult = '';

	// Compile layout for list of fields. 
	for(let fielddata of fielddatalist) {

		// Get field id. 
		let fieldid = `${ !entryalreadyexists ? 'new' : '' }${ fielddata.fieldid }`;
		// Get field captions. 
		let fieldcaption = fielddata.fieldcaption;

		fieldlistresult += `
		<!-- fielditem -->
		<li class="fielditem">

			<!-- entryfield -->
			<div class="entryfield">

				<!-- fieldname -->
				<label class="fieldname" for="${fieldid}">${fieldcaption}</label>
				<!-- /fieldname -->

				<!-- fieldvalue -->
				<input class="fieldvalue" type="${fielddata.fieldtype}" id="${fieldid}" name="${fieldid}" placeholder="${fieldcaption}">
				<!-- /fieldvalue -->

			</div>
			<!-- /entryfield -->
			
		</li>
		<!-- /fielditem -->`;
	}

	// Return layout for list of fields. 
	return fieldlistresult;
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
