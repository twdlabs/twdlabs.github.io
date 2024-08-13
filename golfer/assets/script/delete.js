


// Delete club entry from database (D in CRUD). 
function deleteClubEntry(givenclubid) {

	// Go thru each club entry in list. 
	for(let index=0 ; index<clubstable.tableentries.length ; index++) {

		// Get current club entry. 
		let clubentry = clubstable.tableentries[index];

		// Check if matching club entry found. 
		let matchFound = clubentry.clubid == givenclubid;

		// Delete matching club entry (if found). 
		if(matchFound) {

			// Confirm deletion of given club entry. 
			let deletionconfirmed = confirm('Continue with deletion?');

			// Proceed if deletion confirmed. 
			if(deletionconfirmed) {

				// Delete club entry at given index. 
				deleteClubEntryAtIndex(index);
	
				// Save data to memory. 
				saveData();
			
				// Return deleted club entry. 
				console.log('Club entry deleted:',clubentry);
				return clubentry;
			}

			// Note if deletion not confirmed. 
			else {
			
				// Return remaining club entry. 
				console.log('Club entry not deleted:',clubentry);
				return clubentry;
			}
		}
	}

	// Return nothing if no match found. 
	console.log('No club entry found to delete...',clubentry);
	return null;

	/****/

	// Delete club entry at given index. 
	function deleteClubEntryAtIndex(indexofdeletion) {

		// Remove item at given index of deletion. 
		clubstable.tableentries.splice(indexofdeletion,1);
	}
}

// Delete all entries from clubs database (D in CRUD). 
function clearClubsDatabase() {
	console.log('Clearing clubs database...');

	// Proceed if any club entries present. 
	if( clubstable.tableentries.length>0 ) {
		
		// Confirm deletion of all current club entries. 
		if( confirm('Are you sure you want to DELETE ALL current club entries?') ) {

			// Create new list of clubs. 
			assignToClubsDatabase( [] );
		}
	}

	// Disregard if no club entries present. 
	else alert('No club entries currently present.');
}

// Reset clubs database to default. 
function resetClubsDatabase() {
	console.log('Resetting clubs database to default...');

	// Simplify if no club entries present. 
	if( clubstable.tableentries.length==0 ) {

		// Reset list of clubs. 
		assignToClubsDatabase( defaultclubslist );
        return;
	}

	// Proceed if any club entries present. 
    // Confirm replacement of all current club entries. 
    if( confirm('Are you sure you want to REPLACE ALL current club entries with default club entries?') ) {

        // Reset list of clubs to default. 
        assignToClubsDatabase( defaultclubslist );
    }
}

// Assign given data as clubs database. 
function assignToClubsDatabase(givendata) {
	
	// Assign new list of clubs. 
	clubstable.tableentries = givendata;
	
	// Save data to memory. 
	saveData();

	// Show updated table of clubs. 
	loadClubsTableBody();
}
