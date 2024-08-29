


// Get selected table. 
let selectedtable = databasetables[selectedtableid];
console.log('Selected table:',selectedtable);

// Get selected table entry (if it exists). 
let selectedtableentry = getTableEntryById(selectedtableid,selectedentryid);
console.log('Selected table entry:',selectedtableentry);

// Restore saved table entries from memory. 
restoreTableFromMemory();


/*****/


// Check for valid field value. 
function checkFieldValue(givenvalue) {
	return !!givenvalue || !isNaN(givenvalue);
}

// Load fields for editing entry. 
function loadEntryEditor() {
	console.log('selectedtable:',selectedtable);
	console.log('selectedtableentry:',selectedtableentry);

	// Check if editing existing entry. 
	let editingexistingentry = !!selectedtableentry;
	console.log('editingexistingentry:',editingexistingentry);

	// Get destination for fields in editor form. 
	let editorfieldsdestination = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldslistlayout = createFieldsListLayout( selectedtable['tableentryfields'], editingexistingentry );

	// Display list of fields in editor form. 
	editorfieldsdestination.innerHTML = fieldslistlayout;

	// Fill in current field values for selected entry. 
	if(editingexistingentry) fillFieldValues();

	/****/

	// Compile layout for given list of fields. 
	function createFieldsListLayout(fieldslist,editingexistingentry) {
	
		// Initialize layout for list of fields. 
		let fieldslistresult = '';
	
		// Go thru each field in given list. 
		for(let currentfield of fieldslist) {
			
			// Get field id. 
			let id = `${ editingexistingentry ? '' : 'new' }${ currentfield['fieldid'] }`;
			// Get field type. 
			let type = currentfield['fieldtype'];
			// Get field caption. 
			let caption = currentfield['fieldcaption'];
			// Get field value. 
			let hasdefaultvalue = currentfield['fielddefaultvalue'] != undefined;
			let fieldvalue = hasdefaultvalue ? currentfield['fielddefaultvalue'] : '';
			// Create field input placeholder. 
			let placeholder = checkFieldValue(fieldvalue) ? fieldvalue : '';
			
			// Compile layout for current field. 
			fieldslistresult += `
			<!-- fielditem -->
			<li class="fielditem">
	
				<!-- entryfield -->
				<div class="entryfield">
	
					<!-- fieldname -->
					<label class="fieldname" for="${id}">${caption}</label>
					<!-- /fieldname -->
	
					<!-- fieldvalue -->
					<input class="fieldvalue" type="${type}" id="${id}" name="${id}" placeholder="${placeholder}" value="${fieldvalue}">
					<!-- /fieldvalue -->
	
				</div>
				<!-- /entryfield -->
				
			</li>
			<!-- /fielditem -->`;
		}
	
		// Return layout for list of fields. 
		return fieldslistresult;
	}

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
