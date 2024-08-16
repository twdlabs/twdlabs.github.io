


// Load fields for creating new clubs. 
function loadClubTableAdder() {

	// Get destination for fields of 'add entry' form. 
	let addformfieldsdestination = document.querySelector('div#container section.clubadder div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldlistresult = createFieldsListLayout(clubstable.tableentryfields,true);

	// Display list of fields in 'add entry' form. 
	addformfieldsdestination.innerHTML = fieldlistresult;
}

// Close new club entry editor. 
function closeNewClubEntry() {

	// Go directly to previous page (club viewer). 
	window.location.href = '../';
}

// Add new club entry to database (C in CRUD). 
function saveNewClubEntry() {
	
	// Initialize new club entry. 
	let newclubentry = {};

	// Go thru each club property (by field data item). 
	for(let fielddata of clubstable.tableentryfields) {

		// Get field id for given field data item. 
		let fieldid = 'new' + fielddata.fieldid;

		// Get actual input field elements. 
		let fieldinput = document.querySelector('div#container section.clubadder div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#'+fieldid);
		
		// Save newly entered data for club property. 
		if(fieldinput.value) newclubentry[fieldid] = `${fieldinput.value}`;
		else console.warn(`Invalid value provided for club property: ${fieldid}.`);
	}
	
	// Add newly entered club entry to database. 
	clubstable.tableentries.push(newclubentry);

	// Save data to memory. 
	saveToMemory();

	// Close new club entry editor. 
	closeNewClubEntry();

	/****/

	// // Check if club entry already exists. 
	// let alreadyclubentry = false && getClubById(clubid);

	// // Warn user and abandon new club entry if already exists. 
	// if(alreadyclubentry) {
	// 	console.warn(`Club id already exists: '${clubid}'. Please choose another id.`);
	// 	return;
	// }
}
