


// Retrieve database from storage. 
function getDatabaseFromStorage() {

	// Get string represntation of database. 
	let str = localStorage.getItem('cruduserdata');

	// Parse data string into array form. 
	temp = JSON.parse(str);

	// Return database. 
	return temp ? temp : [];
}

// Save database to storage. 
function saveDatabaseToStorage() {
	console.log('User data:',userdata);

	// Create string version of database. 
	let str = JSON.stringify(userdata);

	// Save string version of database. 
	localStorage.setItem('cruduserdata',str);

	// Load saved database items onto page. 
	loadAllDataItems();
}
