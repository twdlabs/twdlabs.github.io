


// -- D in CRUD -- //
// Delete entry from database table. 
function startDeleteEntry(givenentryid) {

	// Get list of table entries. 
	let tableentrieslist = selectedtable['currententries'];

	// Go thru each entry in given table. 
	for(let currentindex in tableentrieslist) {

		// Get current table entry. 
		let currententry = tableentrieslist[currentindex];

		// Check if matching table entry found. 
		let matchFound = currententry['id'] == givenentryid;

		// Proceed if match found. 
		if(matchFound) {

			// Confirm deletion of table entry at current index. 
			confirmDeletion(currentindex);
		}
	}

	// Return nothing if no match found. 
	console.log('No table entry found to delete...',selectedtableid,givenentryid);
	// console.log('No table entry found to delete...',displaytableid,givenentryid);
	return null;

	/****/

	// Confirm deletion of table entry at given index. 
	function confirmDeletion(index) {

		// Confirm deletion of given table entry. 
		let deleteconfirmed = confirm('Continue with deletion?');

		// Proceed if deletion confirmed. 
		if(deleteconfirmed) {

			// TODO: Delete associated entries in other tables. 

			// Get deleted table entry (before its deleted). 
			let deletedentry = tableentrieslist[index];
			console.log(`Deleting table entry (i:${index})`,deletedentry);

			// Delete table entry at given index. 
			deleteEntryAtIndex(index);

			// Save table changes. 
			saveTableChanges();
		}

		// Note if deletion not confirmed. 
		else console.log('Table unchanged (deletion cancelled)',index);

		/***/

		// Delete table entry at given index. 
		function deleteEntryAtIndex(indexofdeletion) {
	
			// Remove item at given index of deletion. 
			tableentrieslist.splice(indexofdeletion,1);
		}
	}
}

// -- D in CRUD -- //
// Delete all current table entries. 
function clearDatabaseTable() {
	console.log('Clearing database table...',displaytableid);

	// Check if any table entries present. 
	let tableentriespresent = selectedtable['currententries'].length > 0;

	// Confirm deletion if any table entries present. 
	if(tableentriespresent && confirm('Are you sure you want to DELETE ALL current table entries?') ) {

		// Create new empty list for table entries. 
		assignToSelectedTable( [] );
	}

	// Disregard if table empty or deletion not confirmed. 
	// else console.log('No deletion operation');
}

// -- D,C in CRUD -- //
// Replace all current table entries with example entries. 
function setExampleDatabaseTable() {
	console.log('Setting example database table...',displaytableid);

	// Check if table empty. 
	let istableempty = selectedtable['currententries'].length==0;

	// Confirm replacement unless table already empty. 
	if( istableempty || confirm('Are you sure you want to REPLACE ALL current table entries with example table entries?') ) {

		// Reset list of entries to default example. 
		assignToSelectedTable( selectedtable['exampleentries'] );
	}
}

// Assign given table entries to selected database table. 
function assignToSelectedTable(giventableentrieslist) {
	
	// Assign new list of entries. 
	selectedtable['currententries'] = giventableentrieslist;

	// Save table changes. 
	saveTableChanges();
}
