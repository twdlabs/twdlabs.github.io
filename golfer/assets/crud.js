


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

// Start new general entry. 
function startNewEntry() {

	// Go directly to editor page for new entry. 
	window.location.href = './add/';
}

// Edit general entry in database (U in CRUD). 
function startEditEntry(givenentryid) {

	// Go directly to editor page for existing entry. 
	window.location.href = './edit/?entryid='+givenentryid;
}

// Edit club entry in database (U in CRUD). 
function editClubEntrySimple(givenclubid) {
	startEditEntry(givenclubid);

	// Get club entry associated with given club id. 
	let clubentry = getClubById(givenclubid);

	// Edit club id. 
	clubentry.clubid = prompt('Enter new club id.',clubentry.clubid);

	// Edit club name. 
	clubentry.clubname = prompt('Enter new club name.',clubentry.clubname);

	// Edit club distance list. 
	clubentry.distancelist = ( prompt('Enter new club distances.',clubentry.distancelist) ).split(',');
	
	// Save data to memory. 
	saveData();
}
