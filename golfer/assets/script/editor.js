


// Restore saved table entries from memory. 
restoreTableFromMemory(selectedtableid);

// Get selected table. 
let selectedtable = databasetables[selectedtableid];
console.log('Selected table:',selectedtable);

// Get selected table entry (if it exists). 
let selectedtableentry = getTableEntryById(selectedtableid,selectedentryid);
console.log('Selected table entry:',selectedtableentry);


/*****/


// Compile layout for given list of fields. 
function createFieldsListLayout(fielddatalist,entryalreadyexists) {

	// Initialize layout for list of fields. 
	let fieldlistresult = '';

	// Compile layout for list of fields. 
	for(let fielddata of fielddatalist) {

		// Get field id. 
		let id = `${ !entryalreadyexists ? 'new' : '' }${ fielddata.fieldid }`;
		// Get field caption. 
		let caption = fielddata.fieldcaption;
		// Get default field value. 
		let defaultvalue = fielddata.fielddefaultvalue!=undefined ? fielddata.fielddefaultvalue : '';
		// Create field input placeholder. 
		let placeholder = checkFieldValue(defaultvalue) ? defaultvalue : '';

		fieldlistresult += `
		<!-- fielditem -->
		<li class="fielditem">

			<!-- entryfield -->
			<div class="entryfield">

				<!-- fieldname -->
				<label class="fieldname" for="${id}">${caption}</label>
				<!-- /fieldname -->

				<!-- fieldvalue -->
				<input class="fieldvalue" type="${fielddata.fieldtype}" id="${id}" name="${id}" placeholder="${placeholder}" value="${defaultvalue}">
				<!-- /fieldvalue -->

			</div>
			<!-- /entryfield -->
			
		</li>
		<!-- /fielditem -->`;
	}

	// Return layout for list of fields. 
	return fieldlistresult;
}
