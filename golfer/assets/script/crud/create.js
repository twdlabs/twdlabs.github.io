


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
	let newtableentry = {};

	// Generate id for new entry. 
	newtableentry['id'] = generateNewEntryId();

	// Go thru each field. 
	for(let currentfield of selectedtable['tableentryfields']) {

		// Get id of current field. 
		let fieldid = currentfield.fieldid;

		// Get input element of current field. 
		let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#new'+fieldid);
		
		// Get newly entered value for current field. 
		let fieldinputvalue = fieldinput.value;
		
		// Save value for current field (if valid). 
		if( checkFieldValue(fieldinputvalue) ) {
			newtableentry[fieldid] = `${fieldinput.value}`;
		}

		// Disregard value for current field (if not valid). 
		else {
			newtableentry[fieldid] = null;
			console.warn(`Invalid value provided: Null value saved for '${fieldid}' field.`);
		}
	}
	
	// Add new entry to database table. 
	tableentrieslist.push(newtableentry);

	// Save table entries to memory. 
	saveTableToMemory(selectedtableid);

	// Close table entry editor. 
	closeEntryEditor();

	/****/

	// Generate unique identification number for new entry. 
	function generateNewEntryId() {

		// Initialize id of new entry. 
		let newentryid = 0;
	
		// Assume default id already taken. 
		let alreadytaken = true;

		// Continue generating new id. 
		while(alreadytaken) {

			// Increment id of new entry. 
			newentryid++
	
			// Check if new id already taken. 
			alreadytaken = checkIfEntryIdTaken(newentryid);
		}

		// Return id. 
		return newentryid;
	
		// Check for gap from id of last entry. 

		/***/
	
		// Check if new entry identification already taken. 
		function checkIfEntryIdTaken(givenid) {

			// Go thru each entry in table. 
			for(let currententry of tableentrieslist) {
	
				// Check for matching id. 
				let matchfound = currententry['id'] == givenid;

				// End search, assuming true if match found. 
				if(matchfound) return true;
			}

			// Assume false if match not found. 
			return false;
		}
	}
}
