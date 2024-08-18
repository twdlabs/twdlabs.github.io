


// Get current url search parameters. 
let urlparams = new URLSearchParams(window.location.search);

// Get id of current club entry. 
let urlentryid = urlparams.get('entryid');


/*****/


// Load fields for editing existing clubs. 
function loadClubTableEditor() {

	// Get destination for fields of 'edit entry' form. 
	let editformfieldsdestination = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldlistresult = createFieldsListLayout(databasetables['clubs'].tableentryfields,false);

	// Display list of fields in 'edit entry' form. 
	editformfieldsdestination.innerHTML = fieldlistresult;

	// TODO: Fill in current values for selected entry. 
}

// Close table editor for existing entry. 
function closeEntryEditor() {

	// Go directly to previous page (club viewer). 
	window.location.href = '../';
}

// TODO: Save updated entry in database table (U in CRUD). 
function saveUpdatedTableEntry(tableid,tableentryidkey) {

	// Get table entry to be edited (using entry id from url). 
	let tableentry = getTableEntryById(tableid,urlentryid,tableentryidkey);

	// Go thru each property (by field data item). 
	for(let fielddata of databasetables[tableid].tableentryfields) {

		// Get field id for given field data item. 
		let fieldid = fielddata.fieldid;

		// Get actual input field elements. 
		let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#'+fieldid);
		
		// Save newly entered value for club property. 
		if(fieldinput.value) tableentry[fieldid] = `${fieldinput.value}`;
		else console.warn(`Invalid value provided for given property: ${fieldid}.`);
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
	saveTableToMemory(tableid);

	// Close table editor for existing entry. 
	closeEntryEditor();

	/****/

	// Edit entry in database table (U in CRUD). 
	function editTableEntry(givenentryid) {
	
		// Update club name. 
		tableentry.clubname = prompt('Enter new club name.',tableentry.clubname);
	
		// Update club brand. 
		tableentry.clubbrand = prompt('Enter new club brand.',tableentry.clubid);
	
		// Update club distance list. 
		tableentry.distancelist = ( prompt('Enter new club distances.',tableentry.distancelist) ).split(',');
	}
}
