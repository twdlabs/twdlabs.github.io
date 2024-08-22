


// Load fields for creating new entry. 
function loadNewEntryEditor() {

	// Check if editing existing entry. 
	let isexistingentry = !!tableentry;

	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];

	// Get destination for fields of editor form. 
	let editorfieldsdestination = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldlistresult = createFieldsListLayout(giventabledata.tableentryfields,isexistingentry);

	// Display list of fields in editor form. 
	editorfieldsdestination.innerHTML = fieldlistresult;
}

// Save new entry to database table (C in CRUD). 
function saveNewEntry(tableid) {

	// Get key for entry id. 
	let idkey = tableid.substr(0,tableid.length-1)+'id';
	console.log('idkey:',idkey);

	// Initialize new entry. 
	let newentry = {};

	// TODO: Add id to new entry.
	newentry[idkey] = -1;

	// Go thru each property (by field data item). 
	for(let fielddata of databasetables[tableid].tableentryfields) {

		// Get field id for given field data item. 
		let fieldid = `new${fielddata.fieldid}`;

		// Get actual input field elements. 
		let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#'+fieldid);
		
		// Save newly entered data for club property. 
		if(fieldinput.value) newentry[fieldid] = `${fieldinput.value}`;
		else console.warn(`Invalid value provided for property of new entry: ${fieldid}.`);
	}
	
	// Add new entry to database. 
	databasetables[tableid].tableentries.push(newentry);

	// Save table data to memory. 
	saveTableToMemory(tableid);

	// Close table editor for new entry. 
	closeNewEntryEditor();

	/****/

	// // Check if table entry already exists. 
	// let alreadytableentry = false && getTableEntryById(tableid,'clubid',clubid);

	// // Warn user and abandon new club entry if already exists. 
	// if(alreadytableentry) {
	// 	console.warn(`Club id already exists: '${clubid}'. Please choose another id.`);
	// 	return;
	// }
}
