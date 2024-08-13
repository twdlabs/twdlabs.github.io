


// Load fields for creating new clubs. 
function loadClubTableAdder() {

	// Get destination for fields of 'add entry' form. 
	let addformfieldsdestination = document.querySelector('div#container section.clubadder div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldlistresult = createFieldsListLayout(clubstable.clubaddfields);

	// Display list of fields in 'add entry' form. 
	addformfieldsdestination.innerHTML = fieldlistresult;
}

// Cancel new club entry. 
function cancelNewClubEntry() {

	// Go directly to previous page (club viewer). 
	window.location.href = '../';
}

// Add new club entry to database (C in CRUD). 
function addNewClubEntry() {

	// Get input fields for receiving new club data. 
	let newclubinputfields = {
		clubid:document.querySelector('div#container section.clubadder div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#newclubid'),
		clubname:document.querySelector('div#container section.clubadder div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#newclubname'),
		distancelist:document.querySelector('div#container section.clubadder div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#newdistancelist'),
		// xyz:xyz,
	}
	// Go thru each property and save input jawn to input object. 
	for(let x of xyz) {

		// TODO: Get given value. 
		let xyzid = 'xyzid';

		// TODO: Create given property. 
		let entryfield = document.querySelector('div#container section.clubadder div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#'+xyzid);
		newclubinputfields[xyzid] = entryfield.value;
	}

	// TODO: Check if club entry already exists. 
	let alreadyclubentry = false && getClubById(clubid);

	// Warn user and abandon new club entry if already exists. 
	if(alreadyclubentry) {
		console.warn(`Club id already exists: '${clubid}'. Please choose another id.`);
		return;
	}
	
	// Create new club entry from newly entered club data. 
	let newclubentry = {
		// Get newly entered club data: club id. 
		clubid:`${newclubinputfields.clubid.value}`,
		// Get newly entered club data: club name. 
		clubname:`${newclubinputfields.clubname.value}`,
		// Get newly entered club data: club distance list. 
		distancelist:`${newclubinputfields.distancelist.value}`.split(','),
	};
	// Go thru each property and save to new object. 
	for(let x of xyz) {

		// TODO: Get given value. 

		// TODO: Create given property. 
	}
	
	// Add newly entered club entry to database. 
	clubstable.tableentries.push(newclubentry);

	// Save data to memory. 
	saveData();

	// Clear input fields for new club data. 
	clearNewClubInputFields();

	/****/

	// Clear input fields for new club data. 
	function clearNewClubInputFields() {

		// Go thru each input field. 
		for(let key in newclubinputfields) {

			// Get input field. 
			let inputfield = newclubinputfields[key];

			// Clear input field. 
			inputfield.value = '';
		}
	}
}
