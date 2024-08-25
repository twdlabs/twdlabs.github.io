

		
// Save new distance. 
saveNewDistance();


/*****/


// Save newly entered distance. 
function saveNewDistance() {

	// Get selected club entry. 
	let selectedentry = getClubEntryById(selectedentryid);
	// Ensure valid club entry. 
	if( !selectedentry ) {
		console.warn('Invalid club entry selected');
		return;
	}

	// Get value of new club distance. 
	let newdistance = prompt('Please enter new club distance',0);
	let newvalue = parseFloat(newdistance);
	// Ensure valid distance entry (disregardimg non-number values). 
	if( isNaN(newvalue) ) {
		console.warn('Invalid distance entered. Please try again.');
		return;
	}

	// Update club metrics. 
	updateClubMetrics();

	// Save table entries to memory. 
	saveTableToMemory(selectedtableid);

	// Close entry of new club distance. 
	closeNewClubDistance();

	/****/

	// Update club metrics. 
	function updateClubMetrics() {

		// Get previous metrics of selected club. 
		let min = selectedentry.mindistance;
		let max = selectedentry.maxdistance;
		let sum = selectedentry.avgdistance * selectedentry.numshots;
	
		// Use new distance to update extremity metrics. 
		if(newvalue<min) selectedentry.mindistance = newvalue;
		if(newvalue>max) selectedentry.maxdistance = newvalue;

		// Increment number of recorded shots. 
		selectedentry.numshots++;

		// Use new distance to update average. 
		selectedentry.avgdistance = (sum + newvalue) / selectedentry.numshots;
	}
}
