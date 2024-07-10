


// Load club table headers. 
loadClubTableHeaders();

// Load initial club entries. 
loadClubEntries();

// Load club creation fields. 
loadClubCreationFields();


/*****/


// Load headers of clubs table. 
function loadClubTableHeaders() {

	// Get destination for table headers. 
	let tableheadersdestination = document.querySelector('div#container main.main div.clubviewer table.clubtable thead.head tr.row');

	// Initialize layout for table headers. 
	let tableheadersresult = '';

	// Compile layout for table headers. 
	for(let headercaption of tabledata.headers) {

		// 
		tableheadersresult += `
		<!-- head -->
		<th class="head">

			<!-- caption -->
			<span class="caption">${headercaption}</span>
			<!-- /caption -->

		</th>
		<!-- /head -->`;
	}

	// Display table headers. 
	tableheadersdestination.innerHTML = tableheadersresult;
}

// TODO: Load club entries into table. 
function loadClubEntries() {

	// Get destination for list of club entries. 
	let clublistdestination = document.querySelector('div#container main.main div.clubviewer table.clubtable tbody.body');

	// Initialize layout for list of club entries. 
	let clublistresult = '';

	// Go thru each club entry. 
	for(let clubentry of tabledata.initialclubs) {
		
		// Add layout for single club entry. 
		clublistresult += `
		<!-- row -->
		<tr class="row">${ createClubEntry(clubentry) }</tr>
		<!-- /row -->`;
	}

	// Display list of club entries. 
	clublistdestination.innerHTML = clublistresult;

	/****/

	// Create contents of table row for club entry. 
	function createClubEntry(clubentry) {

		// Initialize result. 
		let result = '';

		// Add name of given club. 
		result += createTableDataBlock( clubentry.clubname ? clubentry.clubname : '0' );

		// Add minimum distance for given club. 
		clubentry.mindistance = clubentry.distancelist.length ? Math.min(...clubentry.distancelist) : 0;
		result += createTableDataBlock( clubentry.mindistance , true );

		// Add average distance for given club. 
		clubentry.avgdistance = clubentry.distancelist.length ? Math.avg(...clubentry.distancelist) : 0;
		result += createTableDataBlock( clubentry.avgdistance , true );

		// Add maximum distance for given club. 
		clubentry.maxdistance = clubentry.distancelist.length ? Math.max(...clubentry.distancelist) : 0;
		result += createTableDataBlock( clubentry.maxdistance , true );

		// Add new entry field for given club. 
		// result += createTableDataBlock();

		// Return result. 
		console.log('Club entry:',clubentry);
		return result;
	}

	// Create table data block. 
	function createTableDataBlock(caption,center) {

		// Compile table data block. 
		return `
		<!-- data -->
		<td class="data${ center ? ' c' : '' }">

			<!-- caption -->
			<span class="caption">${caption}</span>
			<!-- /caption -->

		</td>
		<!-- /data -->`;
	}
}

// Load club creation fields. 
function loadClubCreationFields() {

	// Get destination for list of entry fields. 
	let creationfieldsdestination = document.querySelector('div#container main.main div.clubadder ul.entrylist');

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
				<input class="entryvalue" type="${entryfield.entrytype}" id="${entryfield.entryid}">
				<!-- /entryvalue -->

			</div>
			<!-- /entry -->
			
		</li>
		<!-- /entryitem -->`;
	}

	// Display list of entry fields. 
	creationfieldsdestination.innerHTML = entrylistresult;
}
