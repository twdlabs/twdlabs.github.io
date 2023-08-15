


// Retrieve blog database from storage. 
function getBlogDatabaseFromStorage() {

	// Get from storage: string represntation of database. 
	let str = localStorage.getItem('blogdata');

	// Parse data string into array form. 
	temp = JSON.parse(str);

	// Return database. 
	return temp ? temp : [];
}

// Save blog database to storage. 
function saveBlogDatabaseToStorage() {
	console.log('Saving database:',blogDataList);

	// Check for empty database. 
	let isEmptyDatabase = !(blogDataList.length);

	// Handle empty database. 
	if(isEmptyDatabase) {
	
		// Remove database from storage. 
		localStorage.removeItem('blogdata');
	}

	// Handle non-empty database. 
	else {

		// Create string version of database. 
		let str = JSON.stringify(blogDataList);
	
		// Save to storage: string version of database. 
		localStorage.setItem('blogdata',str);
	}
}
