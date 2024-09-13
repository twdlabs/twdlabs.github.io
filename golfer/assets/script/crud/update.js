


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

	// Save table changes. 
	saveTableChanges();
}
