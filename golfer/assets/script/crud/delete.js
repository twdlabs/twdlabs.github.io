


// -- D in CRUD -- //
// Delete entry from database table. 
function startDeleteEntry(givenentryid) {

	// Get list of table entries. 
	let tableentrieslist = selectedtable['tableentries'];

	// Go thru each entry in given table. 
	for(let index in tableentrieslist) {

		// Get current table entry. 
		let currententry = tableentrieslist[index];

		// Check if matching table entry found. 
		let matchFound = currententry['id'] == givenentryid;

		// Delete matching table entry (if found). 
		if(matchFound) {

			// Confirm deletion of given table entry. 
			let deletionconfirmed = confirm('Continue with deletion?');

			// Proceed if deletion confirmed. 
			if(deletionconfirmed) {

				// Delete table entry at given index. 
				deleteEntryAtIndex(index);
	
				// Save table entries to memory. 
				saveTableToMemory(displaytableid);

				// Show updated table entries. 
				loadTableBody();
			
				// Return deleted table entry. 
				console.log('Table entry deleted:',currententry);
				return currententry;
			}

			// Note if deletion not confirmed. 
			else {
			
				// Return remaining table entry. 
				console.log('Table entry not deleted:',currententry);
				return currententry;
			}
		}
	}

	// Return nothing if no match found. 
	console.log('No table entry found to delete...',displaytableid,givenentryid);
	return null;

	/****/

	// Delete table entry at given index. 
	function deleteEntryAtIndex(indexofdeletion) {

		// Remove item at given index of deletion. 
		tableentrieslist.splice(indexofdeletion,1);
	}
}

// -- D in CRUD -- //
// Delete all current entries from database table. 
function clearDatabaseTable() {
	console.log('Clearing database table...',displaytableid);

	// Check if any table entries present. 
	let tableentriespresent = selectedtable['tableentries'].length > 0;

	// Confirm deletion if any table entries present. 
	if(tableentriespresent && confirm('Are you sure you want to DELETE ALL current table entries?') ) {

		// Create new empty list for table entries. 
		assignToDatabaseTable( [] );
	}

	// Disregard if table empty or deletion not confirmed. 
	// else console.log('No deletion operation');
}

// -- D in CRUD -- //
// Delete all current entries from database table. Reset to default. 
function resetDatabaseTable() {
	console.log('Resetting database table to default...',displaytableid);

	// Check if table empty. 
	let istableempty = selectedtable['tableentries'].length==0;

	// Confirm replacement unless table already empty. 
	if( istableempty || confirm('Are you sure you want to REPLACE ALL current table entries with default entries?') ) {

		// Reset list of entries to default. 
		assignToDatabaseTable( selectedtable['defaulttableentrylist'] );
	}
}

// Assign given table data to given database table. 
function assignToDatabaseTable(giventableentrylist) {
	
	// Assign new list of entries. 
	selectedtable['tableentries'] = giventableentrylist;
	
	// Save table entries to memory. 
	saveTableToMemory(displaytableid);

	// Show updated table entries. 
	loadTableBody();
}
