


// Delete club entry from database (D in CRUD). 
function deleteClubEntry(givenclubid) {

	// Go thru each club entry in list. 
	for(let index=0 ; index<tabledata['clubs'].tableentries.length ; index++) {

		// Get current club entry. 
		let clubentry = tabledata['clubs'].tableentries[index];

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
	
				// Save table data to memory. 
				saveToMemory('clubs');
			
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
		tabledata['clubs'].tableentries.splice(indexofdeletion,1);
	}
}

// Delete all entries from clubs database (D in CRUD). 
function clearClubsDatabase() {
	console.log('Clearing clubs database...');

	// Proceed if any club entries present. 
	if( tabledata['clubs'].tableentries.length>0 ) {
		
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

	// Proceed if no club entries present or if replacement confirmed. 
	let proceed = tabledata['clubs'].tableentries.length==0 || confirm('Are you sure you want to REPLACE ALL current club entries with default club entries?');
	if(proceed) {
		// Reset list of clubs to default. 
		assignToClubsDatabase( tabledata['clubs'].defaulttableentries );
	}
}

// Assign given data as clubs database. 
function assignToClubsDatabase(givendata) {
	
	// Assign new list of clubs. 
	tabledata['clubs'].tableentries = givendata;
	
	// Save table data to memory. 
	saveToMemory('clubs');

	// Show updated table of clubs. 
	loadClubsTableBody();
}
