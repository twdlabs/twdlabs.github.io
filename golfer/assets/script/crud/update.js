


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
			console.log('Field value:',fieldvalue);
	
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

	// Ensure existence of selected entry. 
	if(!selectedtableentry) {
		console.warn(`No valid table entry selected.`,selectedtableentry);
		return;
	}

	// Go thru each field. 
	for(let currentfield of selectedtable['tableentryfields']) {

		// Get id of current field. 
		let fieldid = currentfield.fieldid;

		// Get input element of current field. 
		let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#'+fieldid);
		
		// Get newly entered value for current field. 
		let fieldinputvalue = fieldinput.value;
		
		// Save value for current field (if valid). 
		if( checkFieldValue(fieldinputvalue) ) {
			selectedtableentry[fieldid] = `${fieldinput.value}`;
		}

		// Disregard value for current field (if not valid). 
		else {
			// selectedtableentry[fieldid] = null;
			console.warn(`Invalid value provided: New value disregarded for '${fieldid}' field.`);
		}
	}

	// Save table entries to memory. 
	saveTableToMemory(selectedtableid);

	// Close table entry editor. 
	closeEntryEditor();
}
