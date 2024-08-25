


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
		let fieldid = `${ !entryalreadyexists ? 'new' : '' }${ fielddata.fieldid }`;
		// Get field captions. 
		let fieldcaption = fielddata.fieldcaption;

		fieldlistresult += `
		<!-- fielditem -->
		<li class="fielditem">

			<!-- entryfield -->
			<div class="entryfield">

				<!-- fieldname -->
				<label class="fieldname" for="${fieldid}">${fieldcaption}</label>
				<!-- /fieldname -->

				<!-- fieldvalue -->
				<input class="fieldvalue" type="${fielddata.fieldtype}" id="${fieldid}" name="${fieldid}" placeholder="${fieldcaption}">
				<!-- /fieldvalue -->

			</div>
			<!-- /entryfield -->
			
		</li>
		<!-- /fielditem -->`;
	}

	// Return layout for list of fields. 
	return fieldlistresult;
}
