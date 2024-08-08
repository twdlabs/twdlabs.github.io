


// Load head of clubs table. 
if(loadItUp) loadClubTableHead();

// Load body of clubs table. 
if(loadItUp) loadClubTableBody();

// Load fields for creation of new club. 
loadClubTableAdder();


/*****/


// Load head layout for clubs table. 
function loadClubTableHead() {

	// Get destination for table headers. 
	let tableheadersdestination = document.querySelector('div#container section.clubsviewer div.grid table.clubstable thead.head tr.row');

	// Initialize layout for table headers. 
	let tableheadersresult = '';

	// Accumulate layout for all table headers. 
	for(let header of clubstable.tableheaders) {

		// Compile layout for single table header. 
		tableheadersresult += `
		<!-- head -->
		<th class="head${ header.center ? ' c' : '' }">

			<!-- caption -->
			<span class="caption">${header.caption}</span>
			<!-- /caption -->

		</th>
		<!-- /head -->`;
	}

	// Display table headers. 
	tableheadersdestination.innerHTML = tableheadersresult;
}

// Load body layout for clubs table (R in CRUD). 
function loadClubTableBody() {

	// Get destination for list of club entries. 
	let clublistdestination = document.querySelector('div#container section.clubsviewer div.grid table.clubstable tbody.body');

	// Initialize layout for list of club entries. 
	let clubtablelayout = '';

	// Restore saved data from memory. 
	restoreSavedData();

	// Check if clubs list is empty. 
	let clubslistempty = clubstable.tableentries.length == 0;

	// Create placeholder for empty table body. 
	clubtablelayout += `
	<!-- row -->
	<tr class="row">${ clubslistempty ? createEmptyTableRowLayout() : '' }</tr>
	<!-- /row -->`;

	// Go thru each club entry. 
	for(let clubentry of clubstable.tableentries) {
		
		// Add table row layout for single club entry. 
		clubtablelayout += `
		<!-- row -->
		<tr class="row">${ createClubEntryRowLayout(clubentry) }</tr>
		<!-- /row -->`;
	}

	// Display list of club entries. 
	clublistdestination.innerHTML = clubtablelayout;

	/****/

	// Create table row layout for given club entry. 
	function createClubEntryRowLayout(clubentry) {

		// Get name of given club. 
		let clubname = clubentry.clubname ? clubentry.clubname : '--';
		// Get minimum distance for given club. 
		let mindistance = clubentry.distancelist.length ? findMinimum(clubentry.distancelist) : 0;
		// Get average distance for given club. 
		let avgdistance = clubentry.distancelist.length ? findAverage(clubentry.distancelist) : 0;
		// Get maximum distance for given club. 
		let maxdistance = clubentry.distancelist.length ? findMaximum(clubentry.distancelist) : 0;

		// Initialize layout for table row. 
		let tablerowlayout = '';
 		// Add layout for name of given club. 
		tablerowlayout += createTableDataBlockLayout( clubname );
		// Add layout for minimum distance of given club. 
		tablerowlayout += createTableDataBlockLayout( formatNumber(mindistance) , true );
		// Add layout for average distance of given club. 
		tablerowlayout += createTableDataBlockLayout( formatNumber(avgdistance) , true );
		// Add layout for maximum distance of given club. 
		tablerowlayout += createTableDataBlockLayout( formatNumber(maxdistance) , true );
		// Add layout for distance entry field of given club. 
		tablerowlayout += createTableInputBlockLayout(clubentry.clubid);
		// Add action field for given club. 
		tablerowlayout += createTableActionBlockLayout();
		// console.log('Club entry table row layout:',tablerowlayout,clubentry);

		// Return layout for table row. 
		return tablerowlayout;

		/***/

		// Format number. 
		function formatNumber(num) {
			num = 1 * num;
			return ( Number.isInteger(num) ? num : num.toFixed(1) );
		}

		// Find minimum of number list. 
		function findMinimum(numberlist) {
			return Math.min(...numberlist);
		}

		// Find maximum of number list. 
		function findMaximum(numberlist) {
			return Math.max(...numberlist);
		}

		// Find average of number list. 
		function findAverage(numberlist) {

			// Initialize sum of numbers. 
			let sum = 0;

			// Go thru each number in number list. 
			for(let num of numberlist) {

				// Add number to running total. 
				sum += 1*num;
			}

			// Return sum of numbers. 
			return (sum / numberlist.length);
		}

		// Create block layout for given table data. 
		function createTableDataBlockLayout(caption,isblockcentered) {
	
			// Compile table data block. 
			return `
			<!-- data -->
			<td class="data${ isblockcentered ? ' c' : '' }">
	
				<!-- caption -->
				<span class="caption">${caption}</span>
				<!-- /caption -->
	
			</td>
			<!-- /data -->`;
		}

		// Create table input block. 
		function createTableInputBlockLayout(uniqueclubid) {
	
			// Compile table data block. 
			return `
			<!-- data -->
			<td class="data">
	
				<!-- newdistance -->
				<input class="newdistance" type="number" id="${uniqueclubid}newdistance" onchange="saveNewClubDistance('${uniqueclubid}')">
				<!-- /newdistance -->
	
			</td>
			<!-- /data -->`;
		}

		// Create table layout for action block. 
		function createTableActionBlockLayout() {

			// Compile table action block. 
			return `
			<!-- data -->
			<td class="data a">

				<!-- editbtn -->
				<button class="btn editbtn" title="Edit club: '${clubentry.clubname}'" onclick="editClubEntry('${clubentry.clubid}')">

					<!-- icon -->
					<svg class="icon pencilsqr" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
						<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Edit</span>
					<!-- /caption -->
					
				</button>
				<!-- /editbtn -->

				<!-- deletebtn -->
				<button class="btn deletebtn" title="Delete club: '${clubentry.clubname}'" onclick="deleteClubEntry('${clubentry.clubid}')">

					<!-- icon -->
					<svg class="icon trashcan" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon trashcan" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Delete</span>
					<!-- /caption -->
					
				</button>
				<!-- /deletebtn -->

			</td>
			<!-- /data -->`;
		}
	}

	// Create placeholder table row layout for empty table. 
	function createEmptyTableRowLayout() {

		// Compile placeholder table row layout for empty table. 
		return `
		<!-- data -->
		<td class="data null" colspan="6">

			<!-- caption -->
			<span class="caption">Add new clubs to view here</span>
			<!-- /caption -->

		</td>
		<!-- /data -->`;
	}
}

// Load fields for creation of new club. 
function loadClubTableAdder() {

	// Get destination for new entry fields. 
	let creationfieldsdestination = document.querySelector('div#container section.clubadder div.grid ul.entrylist');

	// Initialize layout for list of entry fields. 
	let entrylistresult = '';

	// Compile layout for list of entry fields. 
	for(let entryfield of clubstable.newclubfields) {

		entrylistresult += `
		<!-- entryitem -->
		<li class="entryitem">

			<!-- entry -->
			<div class="entry">

				<!-- entryname -->
				<label class="entryname" for="${entryfield.entryid}">${entryfield.entrycaption}</label>
				<!-- /entryname -->

				<!-- entryvalue -->
				<input class="entryvalue" type="${entryfield.entrytype}" id="${entryfield.entryid}" placeholder="${entryfield.entryid}">
				<!-- /entryvalue -->

			</div>
			<!-- /entry -->
			
		</li>
		<!-- /entryitem -->`;
	}

	// Display list of entry fields. 
	creationfieldsdestination.innerHTML = entrylistresult;
}

// TODO: Start new club entry. 
function startNewClubEntry() {

	// 
}

// Add newly entered club to database (C in CRUD). 
function addNewClubEntry() {

	// Get input fields for receiving new club data. 
	let newclubinputfields = {
		clubid:document.querySelector('div#container section.clubadder div.grid ul.entrylist li.entryitem div.entry input.entryvalue#newclubid'),
		clubname:document.querySelector('div#container section.clubadder div.grid ul.entrylist li.entryitem div.entry input.entryvalue#newclubname'),
		distancelist:document.querySelector('div#container section.clubadder div.grid ul.entrylist li.entryitem div.entry input.entryvalue#newdistancelist'),
		// xyz:xyz,
	}

	// Get newly entered club data: club id. 
	let clubid = `${newclubinputfields.clubid.value}`;
	// if(clubid.includes(' ')) {
	// 	console.warn(`Club id contains spaces: '${clubid}'. Please choose another id.`);
	// 	return;
	// }

	// Get newly entered club data: club name. 
	let clubname = `${newclubinputfields.clubname.value}`;

	// Get newly entered club data: club distance list. 
	let distancelist = `${newclubinputfields.distancelist.value}`.split(',');

	// TODO: Check if club entry already exists. 
	let alreadyclubentry = false && getClubById(clubid);

	// Warn user and abandon new club entry if already exists. 
	if(alreadyclubentry) {
		console.warn(`Club id already exists: '${clubid}'. Please choose another id.`);
		return;
	}
	
	// Create new club entry. 
	let newclubentry = {
		clubid:clubid,
		clubname:clubname,
		distancelist:distancelist,
	};
	
	// Add newly entered club entry to database. 
	clubstable.tableentries.push(newclubentry);

	// Save data to memory. 
	saveData();

	// Clear input fields for new club data. 
	clearNewClubInputFields();

	/****/

	// Clear input fields for new club data. 
	function clearNewClubInputFields() {

		// Go thru each input field. 
		for(let key in newclubinputfields) {

			// Get input field. 
			let inputfield = newclubinputfields[key];

			// Clear input field. 
			inputfield.value = '';
		}
	}
}

// Edit club entry in database (U in CRUD). 
function editClubEntry(givenclubid) {

	// Get club entry associated with given club id. 
	let clubentry = getClubById(givenclubid);

	// Edit club id. 
	clubentry.clubid = prompt('Enter new club id.',clubentry.clubid);

	// Edit club name. 
	clubentry.clubname = prompt('Enter new club name.',clubentry.clubname);

	// Edit club distance list. 
	clubentry.distancelist = ( prompt('Enter new club distances.',clubentry.distancelist) ).split(',');
	
	// Save data to memory. 
	saveData();
}

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

// Assign given data as clubs database. 
function assignToClubsDatabase(givendata) {
	
	// Assign new list of clubs. 
	clubstable.tableentries = givendata;
	
	// Save data to memory. 
	saveData();

	// Show updated table of clubs. 
	loadClubTableBody();
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

	// Proceed if any club entries present. 
	if( clubstable.tableentries.length>0 ) {

		// Confirm replacement of all current club entries. 
		if( confirm('Are you sure you want to REPLACE ALL current club entries with default club entries?') ) {

			// Reset list of clubs to default. 
			assignToClubsDatabase( defaultclubslist );
		}
	}

	// Disregard if no club entries present. 
	else {

		// Reset list of clubs. 
		assignToClubsDatabase( defaultclubslist );
	}
}

// Save newly entered club distance. 
function saveNewClubDistance(givenclubid) {

	// Get selected input field. 
	let inputfield = event.currentTarget;
	// console.log();

	// Get club entry associated with given club id. 
	let clubentry = getClubById(givenclubid);

	// Proceed if club entry exists. 
	if(clubentry) {

		// Get value of new distance entry. 
		let newdistancevalue = parseFloat(inputfield.value);

		// Disregard any non-number values. 
		if( isNaN(newdistancevalue) ) return;

		// Save if valid number value. 
		else clubentry.distancelist.push(newdistancevalue);
	}

	// Save data to memory. 
	saveData();
}
