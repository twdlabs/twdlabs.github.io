


// Load head of clubs table. 
loadClubTableHead();

// Load body of clubs table. 
loadClubTableBody();

// Load fields for creation of new club. 
loadClubTableAdder();


/*****/


// Load head of clubs table. 
function loadClubTableHead() {

	// Get destination for table headers. 
	let tableheadersdestination = document.querySelector('div#container section.clubviewer div.grid table.clubtable thead.head tr.row');

	// Initialize layout for table headers. 
	let tableheadersresult = '';

	// Compile layout for table headers. 
	for(let header of tabledata.tableheaders) {

		// 
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

// Load body of clubs table (R in CRUD). 
function loadClubTableBody() {

	// Get destination for list of club entries. 
	let clublistdestination = document.querySelector('div#container section.clubviewer div.grid table.clubtable tbody.body');

	// Initialize layout for list of club entries. 
	let clubtablelayout = '';

	// Restore saved data from memory. 
	restoreSavedData();

	// Check if clubs list is empty. 
	let clubslistempty = (tabledata.clubslist.length == 0);

	// Proceed if clubs list empty. 
	if(clubslistempty) {

		// Create placeholder for empty table body. 
		clubtablelayout = createEmptyTableRowLayout();
	}

	// Proceed if clubs list not empty. 
	else {

		// Go thru each club entry. 
		for(let clubentry of tabledata.clubslist) {
			
			// Add table row layout for single club entry. 
			clubtablelayout += `
			<!-- row -->
			<tr class="row">${ createClubEntryRowLayout(clubentry) }</tr>
			<!-- /row -->`;
		}
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
				<button class="btn editbtn" onclick="editClubEntry('${clubentry.clubid}')">

					<!-- caption -->
					<span class="caption">Edit</span>
					<!-- /caption -->
					
				</button>
				<!-- /editbtn -->

				<!-- deletebtn -->
				<button class="btn deletebtn" onclick="deleteClubEntry('${clubentry.clubid}')">

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
		<!-- row -->
		<tr class="row">

			<!-- data -->
			<td class="data empty" colspan="6">

				<!-- caption -->
				<span class="caption">Add a new club to view here</span>
				<!-- /caption -->

			</td>
			<!-- /data -->

		</tr>
		<!-- /row -->`;
	}
}

// Load fields for creation of new club. 
function loadClubTableAdder() {

	// Get destination for list of entry fields. 
	let creationfieldsdestination = document.querySelector('div#container section.clubadder div.grid ul.entrylist');

	// Initialize layout for list of entry fields. 
	let entrylistresult = '';

	// Compile layout for list of entry fields. 
	for(let entryfield of entryfielddata) {

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

	// Check if club entry already exists. 
	let alreadyclubentry = getClubById(clubid);

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
	tabledata.clubslist.push(newclubentry);

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
	for(let index=0 ; index<tabledata.clubslist.length ; index++) {

		// Get current club entry. 
		let clubentry = tabledata.clubslist[index];

		// Check if matching club entry found. 
		let matchFound = clubentry.clubid == givenclubid;

		// Delete matching club entry (if found). 
		if(matchFound) {

			// Confirm deletion. 
			let go = confirm('Continue with deletion?');

			// 
			if(go) {

				// Delete club entry at given index. 
				deleteClubEntryAtIndex(index);
	
				// Save data to memory. 
				saveData();
			
				// Return deleted club entry. 
				console.log('Club entry deleted:',clubentry);
				return clubentry;
			}

			// 
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
		tabledata.clubslist.splice(indexofdeletion,1);
	}
}

// Delete all entries from club database (D in CRUD). 
function clearClubDatabase() {
    console.log('Clearing club database...');

	// Confirm deletion of all current club entries. 
	if( tabledata.clubslist.length>0 && !confirm('Are you sure you want to delete current club entries?') );

    // Create new list of clubs and distances. 
    tabledata.clubslist = [];
	
	// Save data to memory. 
	saveData();

	// Show updated table of clubs. 
	loadClubTableBody();
}

// Reset club database to default. 
function resetClubDatabase() {
    console.log('Resetting club database to default...');

	// Confirm deletion of all current club entries. 
	if( tabledata.clubslist.length>0 && !confirm('Are you sure you want to delete current club entries?') );

    // Delete list of clubs and distances. 
    localStorage.removeItem('savedclubslist');
    console.log('\tlocalStorage:',localStorage);

	// Show updated table of clubs. 
    window.location.reload();
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
