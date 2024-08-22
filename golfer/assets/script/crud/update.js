


// Get id of current table entry. 
const entryid = urlparams.get('entryid');
console.log('entryid:',entryid);


/*****/


// Load fields for editing existing entry. 
function loadEntryEditor() {

	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];

	// Get destination for fields of editor form. 
	let editorfieldsdestination = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist');

	// Compile layout for list of fields. 
	let fieldlistresult = createFieldsListLayout(giventabledata.tableentryfields,true);

	// Display list of fields in 'edit entry' form. 
	editorfieldsdestination.innerHTML = fieldlistresult;

	// Get selected table entry. 
	let tableentry = getClubEntryById(entryid);
	// let tableentry = getTableEntryById(tableid,'clubid',entryid);
	console.log('Current table entry:',tableentry);
	
	// Fill in current values for selected entry. 
	if(!tableentry) return;
	for(let entryfield of giventabledata.tableentryfields) {

		// Get field value. 
		let fieldvalue = tableentry[entryfield.fieldid]

		// Get input field. 
		let inputfield = document.querySelector(`div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#${entryfield.fieldid}`);
		
		// Assign current value to input field. 
		inputfield.value = fieldvalue;
		console.log('inputfield:',fieldvalue,inputfield);
	}
}

// TODO: Save updated entry in database table (U in CRUD). 
function saveUpdatedEntry(tableid,tableentryidkey) {

	// Get table entry to be edited (using entry id from url). 
	let tableentry = getTableEntryById(tableid,tableentryidkey,entryid);

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

	// Edit entry in database table. 
	function editTableEntry(givenentryid) {
	
		// Update club name. 
		tableentry.clubname = prompt('Enter new club name.',tableentry.clubname);
	
		// Update club brand. 
		tableentry.clubbrand = prompt('Enter new club brand.',tableentry.clubid);
	
		// Update club distance list. 
		tableentry.distancelist = ( prompt('Enter new club distances.',tableentry.distancelist) ).split(',');
	}
}
