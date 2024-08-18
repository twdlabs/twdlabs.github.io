


// Delete entry from database table (D in CRUD). 
function deleteTableEntry(tableid,entryid) {

	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];

	// Go thru each entry in given table. 
	for(let index in giventabledata.tableentries) {

		// Get current table entry. 
		let currententry = giventabledata.tableentries[index];

		// Check if matching table entry found. 
		let matchFound = currententry.clubid == entryid;

		// Delete matching table entry (if found). 
		if(matchFound) {

			// Confirm deletion of given table entry. 
			let deletionconfirmed = confirm('Continue with deletion?');

			// Proceed if deletion confirmed. 
			if(deletionconfirmed) {

				// Delete table entry at given index. 
				deleteTableEntryAtIndex(index);
	
				// Save table data to memory. 
				saveTableToMemory(tableid);
			
				// Return deleted table entry. 
				console.log('Club entry deleted:',currententry);
				return currententry;
			}

			// Note if deletion not confirmed. 
			else {
			
				// Return remaining table entry. 
				console.log('Club entry not deleted:',currententry);
				return currententry;
			}
		}
	}

	// Return nothing if no match found. 
	console.log('No table entry found to delete...',tableid,entryid);
	return null;

	/****/

	// Delete table entry at given index. 
	function deleteTableEntryAtIndex(indexofdeletion) {

		// Remove item at given index of deletion. 
		giventabledata.tableentries.splice(indexofdeletion,1);
	}
}

// Delete all entries from database table (D in CRUD). 
function clearDatabaseTable(tableid) {
	console.log('Clearing database table...',tableid);

	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];

	// Check if any table entries present. 
	let tableentriespresent = giventabledata.tableentries.length > 0;

	// Confirm deletion if any table entries present. 
	if(tableentriespresent && confirm('Are you sure you want to DELETE ALL current club entries?') ) {

		// Create new empty list for table entries. 
		assignToDatabaseTable( tableid , [] );
	}

	// Disregard if table empty or deletion not confirmed. 
	else console.log('No deletion operation');
}

// Reset database table to default. 
function resetDatabaseTable(tableid) {
	console.log('Resetting database table to default...',tableid);

	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];

	// Check if table empty. 
	let istableempty = giventabledata.tableentries.length==0;

	// Confirm replacement unless table already empty. 
	if( istableempty || confirm('Are you sure you want to REPLACE ALL current club entries with default club entries?') ) {

		// Reset list of clubs to default. 
		assignToDatabaseTable( tableid , giventabledata.defaulttableentrylist );
	}
}

// Assign given table data to given database table. 
function assignToDatabaseTable(giventableentrylist) {

	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];
	
	// Assign new list of clubs. 
	giventabledata.tableentries = giventableentrylist;
	
	// Save table data to memory. 
	saveTableToMemory(tableid);

	// Show updated table of clubs. 
	loadTableBody(tableid);
}
