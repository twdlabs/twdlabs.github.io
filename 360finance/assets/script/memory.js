


// Reset user data both in app & in memory. 
function resetUserData() {
	console.log('Resetting current user data...');
	
	// Reset user data in memory. 
	localStorage.removeItem('360FinanceUser');

	// Reset user data to default (in app). 
	setDefaultUserData();
}

// Reset user data to default. 
function setDefaultUserData() {
	console.log('Setting default user data...');

	// Set as component of user data. 
	// currentUserData.incomeCategoryData = [...incomecategorydata];
	currentUserData.incomeCategoryData = incomecategorydata.map(e=>e);

	// Set as component of user data. 
	// currentUserData.spendCategoryData = [...spendcategorydata];
	currentUserData.spendCategoryData = spendcategorydata.map(e=>e);

	// Set as component of user data. 
	// currentUserData.transactionData = [...transactiondata];
	currentUserData.transactionData = transactiondata.map(e=>e);

	// Set as component of user data. 
	currentUserData.settingsData = {...settingsdata};
	// currentUserData.settingsData = settingsdata.map(e=>e);	// nobueno for objects, only for arrays
}


// Load user data from memory to app. 
function loadUserData(proceedToLoad) {
	console.log('Loading previous user data...');

	// Check for previously saved user data. 
	let prevUserData = localStorage.getItem('360FinanceUser');

	// Proceed if user data exists to load. 
	if(prevUserData) {

		// Confirm loading procedure. 
		if(!proceedToLoad) proceedToLoad = confirm('Load data ?');

		// 
		if(proceedToLoad) {

			// Load previously saved user data into app. 
			let currentUserData = JSON.parse(prevUserData);
			console.log( 'User data successfully loaded:', currentUserData );
		}
	}
	// Keep default user data if prev user data non-existent. 
	else {
		console.log( 'No previous data found... Default user data:', currentUserData );
	}
}


// Save user data from app to memory. 
function saveUserData() {
	console.log('Saving current user data...');

	// Confirm saving procedure. 
	let proceedToSave = confirm('Save data ?');
	if(proceedToSave) {
		
		// Stringify user data. 
		let strData = JSON.stringify(currentUserData);
	
		// Save user data in string form. 
		localStorage.setItem( '360FinanceUser', strData );
		console.log( 'User data successfully saved:', currentUserData );
	}
}



// Check if user wants to save before exiting app. 
function checkForSaveB4Close(event) {
	console.log('Checking for save before exit...'/* ,event */);
	
	// Set thing for xyz ???????????
	event.returnValue = 'Save before exit ?';

	// Check if last changes already saved. 
	// let sameAbc = isSameData(abcArray, currentUserData.abcArray);
	// let sameDef = isSameData(defArray, currentUserData.defArray);
	// let sameGhi = isSameData(ghiArray, currentUserData.ghiArray);
	// let sameXyz = isSameData(xyzArray, currentUserData.xyzArray);
	// let allChangesSaved = (sameAbc) && (sameDef) && (sameGhi) && (sameXyz);

	// Check if user wants to save before exit. 
	let saveB4Close = confirm('Save before exit ?');

	// Ensure user data is saved. 
	if(saveB4Close) {
		if(!allChangesSaved) saveUserData();
		else console.log('User data already saved');
	}
	// else console.log('User data already saved');

	// Check for same data among two arrays. 
	function isSameData(data1,data2) {
		// return true;
		return false;
	}
}

