


// Define memory key. 
const tablememorykey = `saved${selectedtableid}`;


/*****/


// Show contents of memory (local storage). 
function showMemory() {

	// Show contents of local storage. 
	console.log('Local storage:',localStorage);

	// Notify user. 
	// alert('View storage log in console...');
}

// Save current table and table state history to memory. 
function saveTableToMemory() {
	console.log(`Saving table data to memory...`,selectedtableid);

	// Save current table state to memory. 
	saveCurrentTableToMemory();

	// Save current table's state history to memory. 
	saveTableHistoryToMemory();

	/****/

	// Save current table state to memory. 
	function saveCurrentTableToMemory() {

		// Save to memory if current table has contents. 
		if( selectedtable['currententries'].length ) {

			// Get current table state (in string form). 
			let currenttablestatestring = JSON.stringify( selectedtable['currententries'] );
	
			// Save current table state to memory. 
			localStorage.setItem( tablememorykey, currenttablestatestring);
		}

		// Remove from memory if current table empty. 
		else localStorage.removeItem(tablememorykey);
	}

	// Save current table's state history to memory. 
	function saveTableHistoryToMemory() {

		// Save to memory if any prev tables. 
		if( selectedtable['bcktablestack'].length ) {

			// Get table state history (in string form). 
			let prevtablestatesstring = JSON.stringify( selectedtable['bcktablestack'] );
	
			// Save table state history to memory. 
			localStorage.setItem( `${tablememorykey}prev`, prevtablestatesstring );
		}

		// Remove from memory if no prev tables. 
		else localStorage.removeItem(`${tablememorykey}prev`);

		// Save to memory if any next tables. 
		if( selectedtable['fwdtablestack'].length ) {

			// Get table state history (in string form). 
			let nexttablestatesstring = JSON.stringify( selectedtable['fwdtablestack'] );
	
			// Save table state history to memory. 
			localStorage.setItem( `${tablememorykey}next`, nexttablestatesstring );
		}

		// Remove from memory if no next tables. 
		else localStorage.removeItem(`${tablememorykey}next`);
	}
}

// Restore current table from memory (if exists). 
function restoreTableFromMemory() {
	console.log(`Restoring table data from memory...`,selectedtableid);

	// Restore current table state from memory. 
	restoreCurrentTableFromMemory();

	// Restore current table's state history from memory. 
	restoreTableHistoryFromMemory();

	/****/

	// Restore current table state from memory. 
	function restoreCurrentTableFromMemory() {

		// Get current table state (in string form) from memory. 
		let currenttablestatestring = localStorage.getItem(tablememorykey);
		// Restore current table state (if exists). 
		if(currenttablestatestring) selectedtable['currententries'] = JSON.parse(currenttablestatestring);
		else console.log('No current table state');
	}

	// Restore current table's state history from memory. 
	function restoreTableHistoryFromMemory() {

		// Get prev table states (in string form) from memory. 
		let prevtablestatesstring = localStorage.getItem(`${tablememorykey}prev`);
		// Restore prev table states (if exists). 
		if(prevtablestatesstring) selectedtable['bcktablestack'] = JSON.parse(prevtablestatesstring);
		// Disregard prev table states (if not). 
		// else console.log('No previous table state history');

		// Get next table states (in string form) from memory. 
		let nexttablestatesstring = localStorage.getItem(`${tablememorykey}next`);
		// Restore next table states (if exists). 
		if(nexttablestatesstring) selectedtable['fwdtablestack'] = JSON.parse(nexttablestatesstring);
		// Disregard next table states (if not). 
		// else console.log('No following table state history');
	}
}
