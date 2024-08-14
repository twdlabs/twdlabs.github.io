


// Get current url search parameters. 
let urlparams = new URLSearchParams(window.location.search);

// Get id of current club entry. 
let entryid = urlparams.get('entryid');


/*****/


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

	// Get club associated to given id. 
	let clubentry = getClubById(entryid);

	// Update new attributes of given club entry. 
	// clubentry.xyz = xyz;
	
		// Edit club name. 
		// clubentry.clubname = prompt('Enter new club name.',clubentry.clubname);
	
		// Edit club brand. 
		// clubentry.clubbrand = prompt('Enter new club brand.',clubentry.clubid);

	/****/

	// Edit club entry in database (U in CRUD). 
	function editClubEntry(givenclubid) {
	
		// Get club entry associated with given club id. 
		let clubentry = getClubById(givenclubid);
	
		// Edit club name. 
		clubentry.clubname = prompt('Enter new club name.',clubentry.clubname);
	
		// Edit club brand. 
		clubentry.clubbrand = prompt('Enter new club brand.',clubentry.clubid);
	
		// Edit club distance list. 
		clubentry.distancelist = ( prompt('Enter new club distances.',clubentry.distancelist) ).split(',');
		
		// Save data to memory. 
		saveData();
	}
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
