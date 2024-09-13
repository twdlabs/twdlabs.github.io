


// -- C in CRUD -- //
// Save new entry to database table. 
function saveNewEntry() {

	// Get list of table entries. 
	let tableentrieslist = selectedtable['currententries'];

	// Initialize new entry (with new id). 
	let newtableentry = {
		id:generateNewEntryId(),
	};

	// Go thru each field. 
	for(let currentfield of selectedtable['tablefields']) {

		// Get id of current field. 
		let fieldid = currentfield['fieldid'];

		// Get input element of current field. 
		let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#new'+fieldid) || document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield select.fieldvalue#new'+fieldid);
		// Get newly entered value for current field. 
		let fieldvalue = fieldinput.value;
		// Check if field value valid. 
		let fieldvaluevalid = checkFieldValue(fieldvalue);
		
		// Save value for current field (if valid). 
		if(fieldvaluevalid) newtableentry[fieldid] = `${fieldvalue}`;
		// Disregard value for current field (if not valid). 
		else console.warn(`Invalid value provided: No value saved for '${fieldid}' field.`);
	}
	
	// Add new entry to database table. 
	tableentrieslist.push(newtableentry);

	// Save table changes. 
	saveTableChanges();

	/****/

	function saveNewDistanceEntry() {

		// Check associated club. 
		let clubentry = checkClub();
		// Ensure valid club entry. 
		if(!clubentry) return;
	
		// Get id of distance field. 
		let fieldid = 'distance';
	
		// Get input element of distance field. 
		let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#new'+fieldid);
		// Get newly entered value for current field. 
		let fieldvalue = fieldinput.value;
		// Check if field value valid. 
		let fieldvaluevalid = checkFieldValue(fieldvalue);
	
		// Ensure valid distance value (disregardimg non-number values). 
		if(!fieldvaluevalid) {
			console.warn(`Invalid value provided: No value saved for '${fieldid}' field.`);
			return;
		}
	
		// Update metrics of associated club. 
		updateClubMetrics(clubentry);

		// Save table changes. 
		saveTableChanges();
	
		/****/

		// Check associated club. 
		function checkClub() {
	
			// Get club entry associated with new distance. 
			let clubentry = getClubEntryById(associatedclubid);
			console.log('Associated club entry:',clubentry);

			// TODO
			if(clubentry) {
	
				// Get id of distance field. 
				let fieldid = 'clubid';
			
				// Get input element of distance field. 
				let fieldinput = document.querySelector('div#container section.editor div.grid form.body ul.fieldlist li.fielditem div.entryfield input.fieldvalue#new'+fieldid);
				fieldinput.setAttribute('disabled','');
			}
			else console.warn('Invalid club selected',clubentry);

			// Return club entry
			return clubentry;
		}
	
		// Update metrics of associated club. 
		function updateClubMetrics(clubentry) {

			// Get value of new club distance. 
			let newdistance = parseFloat(fieldvalue);
	
			// Get extremity metrics of associated club. 
			let min = clubentry.mindistance;
			let max = clubentry.maxdistance;
		
			// Update extremity metrics of associated club (using new distance). 
			if(newdistance<min) clubentry.mindistance = newdistance;
			if(newdistance>max) clubentry.maxdistance = newdistance;
	
			// Get summary metrics of associated club. 
			let distancesum = clubentry.avgdistance * clubentry.numshots;
	
			// Increment number of recorded shots. 
			clubentry.numshots++;
			// Update summary metrics of associated club (using new distance). 
			clubentry.avgdistance = ( distancesum + newdistance ) / clubentry.numshots;
		}
	}

	// Generate unique identification number for new entry. 
	function generateNewEntryId() {

		// Initialize id of new entry. 
		let newentryid = 0;
	
		// Assume default id already taken. 
		let alreadytaken = true;

		// Continue generating new id. 
		while(alreadytaken) {

			// Increment id of new entry. 
			newentryid++
	
			// Check if new id already taken. 
			alreadytaken = checkForTakenEntryId(newentryid);
		}

		// Return id. 
		return newentryid;

		/***/
	
		// Check if new entry identification already taken. 
		function checkForTakenEntryId(givenid) {

			// Go thru each entry in table. 
			for(let currententry of tableentrieslist) {
	
				// Check for matching id. 
				let matchfound = currententry['id'] == givenid;

				// End search, assuming true if match found. 
				if(matchfound) return true;
			}

			// Assume false if match not found. 
			return false;
		}
	
		// TODO: Check for gap from id of last entry. 
	}

	// Create new club entry in database table. 
	function createNewClubEntry(name,brand,loft,min,avg,max,num) {

		// Compile new entry. 
		let newentry = {
			id:generateNewEntryId(),
			clubname:name,
			clubbrand:brand,
			clubloftdegrees:loft,
			mindistance:min,
			avgdistance:avg,
			maxdistance:max,
			numshots:num,
		};

		// Return new entry. 
		return newentry;
	}
	// Create new hole entry in database table. 
	function createNewHoleEntry(name) {

		// Compile new entry. 
		let newentry = {
			id:generateNewEntryId(),
			holename:name,
		};

		// Return new entry. 
		return newentry;
	}
	// Create new shot entry in database table. 
	function createNewShotEntry(cid,hid) {

		// Compile new entry. 
		let newentry = {
			id:generateNewEntryId(),
			clubid:cid,
			holeid:hid,
		};

		// Return new entry. 
		return newentry;
	}
}
