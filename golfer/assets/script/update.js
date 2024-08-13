


// Load fields for editing existing clubs. 
function loadClubTableEditor() {

	// Get destination for fields of 'edit entry' form. 
	let editformfieldsdestination = document.querySelector('div#container section.clubeditor div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldlistresult = createFieldsListLayout(clubstable.clubeditfields);

	// Display list of fields in 'edit entry' form. 
	editformfieldsdestination.innerHTML = fieldlistresult;
}

// Cancel edit club entry. 
function cancelEditClubEntry() {

	// Go directly to previous page (club viewer). 
	window.location.href = '../';
}

// TODO: Save edited club entry to database (U in CRUD). 
function saveEditedClubEntry() {

	// 
}

// Save newly entered club distance. 
function saveNewClubDistance(givenclubid) {

	// Get selected input field. 
	let inputfield = event.currentTarget;
	// console.log();

	// Get club entry associated with given club id. 
	let clubentry = getClubById(givenclubid);

	// Proceed if club entry exists. 
	if(clubentry) {

		// Get value of new distance entry. 
		let newdistancevalue = parseFloat(inputfield.value);

		// Disregard any non-number values. 
		if( isNaN(newdistancevalue) ) return;

		// Save if valid number value. 
		else clubentry.distancelist.push(newdistancevalue);
	}

	// Save data to memory. 
	saveData();
}
