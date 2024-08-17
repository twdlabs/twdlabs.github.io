


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
	let fieldlistresult = createFieldsListLayout(tabledata['clubs'].tableentryfields,false);

	// Display list of fields in 'edit entry' form. 
	editformfieldsdestination.innerHTML = fieldlistresult;
}

// Close club entry editor. 
function closeEditClubEntry() {

	// Go directly to previous page (club viewer). 
	window.location.href = '../';
}

// TODO: Save updated club entry in database (U in CRUD). 
function saveUpdatedClubEntry() {

	// Get club entry to be edited (by given club id in url). 
	let clubentry = getClubById(entryid);

	// Go thru each club property (by field data item). 
	for(let fielddata of tabledata['clubs'].tableentryfields) {

		// Get field id for given field data item. 
		let fieldid = fielddata.fieldid;

		// Get actual input field elements. 
		let fieldinput = document.querySelector('div#container section.clubeditor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#'+fieldid);
		
		// Save newly entered data for club property. 
		if(fieldinput.value) clubentry[fieldid] = `${fieldinput.value}`;
		else console.warn(`Invalid value provided for club property: ${fieldid}.`);
	}
	
	// // Get new club name. 
	// let newclubname = document.querySelector('input#clubname').value;
	// // Get new club brand. 
	// let newclubbrand = document.querySelector('input#clubbrand').value;
	
	// // Update name attribute of given club entry. 
	// if(newclubname) clubentry.clubname = newclubname;
	// // Update brand attribute of given club entry. 
	// if(newclubbrand) clubentry.clubbrand = newclubbrand;
	// // Update new attribute of given club entry. 
	// // clubentry.xyz = xyz;

	// Save table data to memory. 
	saveToMemory('clubs');

	// Close club entry editor. 
	closeEditClubEntry();

	/****/

	// Edit club entry in database (U in CRUD). 
	function editClubEntry(givenclubid) {
	
		// Update club name. 
		clubentry.clubname = prompt('Enter new club name.',clubentry.clubname);
	
		// Update club brand. 
		clubentry.clubbrand = prompt('Enter new club brand.',clubentry.clubid);
	
		// Update club distance list. 
		clubentry.distancelist = ( prompt('Enter new club distances.',clubentry.distancelist) ).split(',');
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

	// Save table data to memory. 
	saveToMemory('clubs');
}
