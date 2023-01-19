


// Retrieve database from storage. 
function getDatabaseFromStorage() {

	// Get from storage: string represntation of database. 
	let str = localStorage.getItem('cruduserdata');

	// Parse data string into array form. 
	temp = JSON.parse(str);

	// Return database. 
	return temp ? temp : [];
}

// Save database to storage. 
function saveDatabaseToStorage() {
	console.log('Saving database:',userdata);

	// Check for empty database. 
	let isEmptyDatabase = !(userdata.length);

	// Handle empty database. 
	if(isEmptyDatabase) {
	
		// Remove database from storage. 
		localStorage.removeItem('cruduserdata');
	}

	// Handle non-empty database. 
	else {

		// Create string version of database. 
		let str = JSON.stringify(userdata);
	
		// Save to storage: string version of database. 
		localStorage.setItem('cruduserdata',str);
	}
	
	// Display all items in database. 
	displayDatabase();
}
