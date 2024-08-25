


// Load fields for creating new entry. 
function loadNewEntryEditor() {

	// Check if editing existing entry. 
	let editingexistingentry = !!selectedtableentry;

	// Get destination for fields of editor form. 
	let editorfieldsdestination = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldlistresult = createFieldsListLayout(selectedtable['tableentryfields'],editingexistingentry);

	// Display list of fields in editor form. 
	editorfieldsdestination.innerHTML = fieldlistresult;
}

// -- C in CRUD -- //
// Save new entry to database table. 
function saveNewEntry() {

	// Get list of table entries. 
	let tableentrieslist = selectedtable['tableentries'];

	// Initialize new entry. 
	let newentry = {};

	// Generate id for new entry. 
	newentry['id'] = generateNewEntryId();

	// Go thru each property (using field data item). 
	for(let fielddata of selectedtable['tableentryfields']) {

		// Get field id for given field data item. 
		let fieldid = `new${fielddata.fieldid}`;

		// Get actual input field elements. 
		let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#'+fieldid);
		
		// Save newly entered data for club property. 
		if(fieldinput.value) newentry[fieldid] = `${fieldinput.value}`;
		else console.warn(`Invalid value provided for property of new entry: ${fieldid}.`);
	}
	
	// Add new entry to database. 
	tableentrieslist.push(newentry);

	// Save table entries to memory. 
	saveTableToMemory(selectedtableid);

	// Close table entry editor. 
	closeEntryEditor();

	/****/

	// TODO: Generate unique identification for new entry. 
	function generateNewEntryId() {

		// Initialize id of last entry. 
		let lastentryid = 0;

		// Go thru each entry in table. 
		for(let currententry of tableentrieslist) {

			// Check for gap from id of last entry. 
		}

		// Return id. 
		return -1;
	}
}
