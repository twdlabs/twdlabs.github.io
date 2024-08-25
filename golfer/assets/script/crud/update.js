


// Load fields for editing existing entry. 
function loadEntryEditor() {

	// Check if editing existing entry. 
	let editingexistingentry = !!selectedtableentry;

	// Get destination for fields of editor form. 
	let editorfieldsdestination = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldlistresult = createFieldsListLayout( selectedtable['tableentryfields'], editingexistingentry );

	// Display list of fields in editor form. 
	editorfieldsdestination.innerHTML = fieldlistresult;

	// Fill in current field values for selected entry. 
	if(editingexistingentry) fillFieldValues();

	/****/

	// Fill in current field values for selected entry. 
	function fillFieldValues() {
		
		// Ensure valid table entry selected before proceeding. 
		if(!selectedtableentry) {
			console.warn('Invalid table entry selected...',selectedtableentry);
			return;
		}

		// Go thru each field in selected table entry. 
		for(let currentfield of selectedtable['tableentryfields']) {
	
			// Get field value. 
			let fieldvalue = selectedtableentry[currentfield.fieldid]
	
			// Get input field. 
			let inputfield = document.querySelector(`div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#${currentfield.fieldid}`);
			
			// Display current value in input field. 
			// Fill in current values for selected entry. 
			inputfield.value = fieldvalue;
			// console.log('input field value:',fieldvalue,inputfield);
		}
	}
}

// -- U in CRUD -- //
// Save updated entry in database table. 
function saveUpdatedEntry() {

	// Go thru each property (by field data item). 
	for(let fielddata of selectedtable['tableentryfields']) {

		// Get field id for given field data item. 
		let fieldid = fielddata.fieldid;

		// Get actual input field elements. 
		let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#'+fieldid);
		
		// Save newly entered value for club property. 
		if(fieldinput.value) selectedtableentry[fieldid] = `${fieldinput.value}`;
		else console.warn(`Invalid value provided for given property: ${fieldid}.`);
	}

	// Save table entries to memory. 
	saveTableToMemory(selectedtableid);

	// Close table entry editor. 
	closeEntryEditor();
}
