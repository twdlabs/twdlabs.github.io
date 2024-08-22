


// Load fields for editing existing entry. 
function loadEntryEditor() {

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

	// Fill in current field values for selected entry. 
	if(isexistingentry) fillFieldValues();

	/****/

	// Fill in current field values for selected entry. 
	function fillFieldValues() {
		
		// Check if table entry found. 
		if(!tableentry) {
			console.warn('No table entry found...',tableentry);
			return;
		}

		// Go thru each field for current table entry. 
		for(let entryfield of giventabledata.tableentryfields) {
	
			// Get field value. 
			let fieldvalue = tableentry[entryfield.fieldid]
	
			// Get input field. 
			let inputfield = document.querySelector(`div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#${entryfield.fieldid}`);
			
			// Display current value in input field. 
			// Fill in current values for selected entry. 
			inputfield.value = fieldvalue;
			// console.log('input field value:',fieldvalue,inputfield);
		}
	}
}

// Save updated entry in database table (U in CRUD). 
function saveUpdatedEntry(tableid,tableentryidkey) {

	// Get table entry to be edited (using entry id from url). 
	let tableentry = getTableEntryById(tableid,tableentryidkey,entryid);

	// Go thru each property (by field data item). 
	for(let fielddata of databasetables[tableid].tableentryfields) {

		// Get field id for given field data item. 
		let fieldid = fielddata.fieldid;

		// Get actual input field elements. 
		let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#'+fieldid);
		
		// Save newly entered value for club property. 
		if(fieldinput.value) tableentry[fieldid] = `${fieldinput.value}`;
		else console.warn(`Invalid value provided for given property: ${fieldid}.`);
	}

	// Save table data to memory. 
	saveTableToMemory(tableid);

	// Close table editor for existing entry. 
	closeEntryEditor();
}
