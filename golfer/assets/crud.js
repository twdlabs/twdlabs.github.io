


// Start creating new entry (C in CRUD). 
function startNewEntry() {

	// Go directly to editor page for new entry. 
	window.location.href = './add/';
}

// Start editing entry (U in CRUD). 
function startEditEntry(givenentryid) {

	// Go directly to editor page for existing entry. 
	window.location.href = './edit/?entryid='+givenentryid;
}

// Compile layout for given list of fields. 
function createFieldsListLayout(fieldslistdata) {

	// Initialize layout for list of fields. 
	let fieldlistresult = '';

	// Compile layout for list of fields. 
	for(let fielddata of fieldslistdata) {

		fieldlistresult += `
		<!-- fielditem -->
		<li class="fielditem">

			<!-- entryfield -->
			<div class="entryfield">

				<!-- fieldname -->
				<label class="fieldname" for="${fielddata.fieldid}">${fielddata.fieldcaption}</label>
				<!-- /fieldname -->

				<!-- fieldvalue -->
				<input class="fieldvalue" type="${fielddata.fieldtype}" id="${fielddata.fieldid}" name="${fielddata.fieldid}" placeholder="${fielddata.fieldid}">
				<!-- /fieldvalue -->

			</div>
			<!-- /entryfield -->
			
		</li>
		<!-- /fielditem -->`;
	}

	// 
	return fieldlistresult;
}
