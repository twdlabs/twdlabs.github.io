


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
function createFieldsListLayout(fieldslistdata,newmode) {

	// Initialize layout for list of fields. 
	let fieldlistresult = '';

	// Compile layout for list of fields. 
	for(let fielddata of fieldslistdata) {

		// Get field id. 
		let fieldid = `${ newmode ? 'new' : '' }${ fielddata.fieldid }`;

		fieldlistresult += `
		<!-- fielditem -->
		<li class="fielditem">

			<!-- entryfield -->
			<div class="entryfield">

				<!-- fieldname -->
				<label class="fieldname" for="${fieldid}">${fielddata.fieldcaption}</label>
				<!-- /fieldname -->

				<!-- fieldvalue -->
				<input class="fieldvalue" type="${fielddata.fieldtype}" id="${fieldid}" name="${fieldid}" placeholder="${fieldid}">
				<!-- /fieldvalue -->

			</div>
			<!-- /entryfield -->
			
		</li>
		<!-- /fielditem -->`;
	}

	// 
	return fieldlistresult;
}
