


// Save data to memory. 
function saveToMemory() {
	console.log('Saving data to memory...');

	// Save if any club entries present. 
	if(clubstable.tableentries.length) {

		// Convert current list of clubs (to string form). 
		let strclubslist = JSON.stringify(clubstable.tableentries);
		
		// Save current list of clubs. 
		localStorage.setItem('savedclubslist',strclubslist);
		console.log('\tlocalStorage:',localStorage);
	}

	// Remove from memory if no club entries present. 
	else {

		// Remove any saved list of clubs from memory. 
		localStorage.removeItem('savedclubslist');
		console.log('\tlocalStorage:',localStorage);
	}

	// Show updated table of clubs. 
	let xyz = typeof tablepresent !== typeof undefined;
	if(xyz) loadClubsTableBody();
}

// Restore saved data from memory (if it exists). 
function restoreFromMemory() {
	console.log('Restoring saved data from memory...');

	// Get saved list of clubs (in string form). 
	let strclubslist = localStorage.getItem('savedclubslist');
	console.log('\tlocalStorage:',localStorage);
	
	// Restore saved list of clubs (if exists in memory). 
	if(strclubslist) clubstable.tableentries = JSON.parse(strclubslist);

	// Create empty list of clubs (if not in memory). 
	else clubstable.tableentries = [];
}
