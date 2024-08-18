


// Load fields for creating new clubs. 
function loadClubTableAdder() {

	// Get destination for fields of 'add entry' form. 
	let addformfieldsdestination = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldlistresult = createFieldsListLayout(databasetables['clubs'].tableentryfields,true);

	// Display list of fields in 'add entry' form. 
	addformfieldsdestination.innerHTML = fieldlistresult;
}

// Close table editor for new entry. 
function closeNewEntryEditor() {

	// Go directly to previous page (table viewer). 
	window.location.href = '../';
}

// Add new entry to database table (C in CRUD). 
function saveNewTableEntry(tableid) {
	
	// Initialize new entry. 
	let newentry = {};

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
	// let alreadytableentry = false && getTableEntryById(tableid,clubid,'clubid');

	// // Warn user and abandon new club entry if already exists. 
	// if(alreadytableentry) {
	// 	console.warn(`Club id already exists: '${clubid}'. Please choose another id.`);
	// 	return;
	// }
}
