


// Load club table headers. 
loadClubTableHeaders();

// Load initial club table entries. 
loadClubTableEntries();

// Load fields for new club creation. 
loadNewClubEntry();


/*****/


// Load headers of clubs table. 
function loadClubTableHeaders() {

	// Get destination for table headers. 
	let tableheadersdestination = document.querySelector('div#container main.main div.clubviewer table.clubtable thead.head tr.row');

	// Initialize layout for table headers. 
	let tableheadersresult = '';

	// Compile layout for table headers. 
	for(let header of tabledata.headers) {

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

// TODO: Load club table entries. 
function loadClubTableEntries() {

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
		clubentry.mindistance = clubentry.distancelist.length ? findMinimum(clubentry.distancelist) : 0;
		result += createTableDataBlock( clubentry.mindistance , true );

		// Add average distance for given club. 
		clubentry.avgdistance = clubentry.distancelist.length ? findAverage(clubentry.distancelist) : 0;
		result += createTableDataBlock( clubentry.avgdistance , true );

		// Add maximum distance for given club. 
		clubentry.maxdistance = clubentry.distancelist.length ? findMaximum(clubentry.distancelist) : 0;
		result += createTableDataBlock( clubentry.maxdistance , true );

		// Add new entry field for given club. 
		result += createTableInputBlock(clubentry.clubid);

		// Return result. 
		return result;
		// console.log('Club entry:',clubentry);

		/***/

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

	// Create table input block. 
	function createTableInputBlock(uniqueclubid) {

		// Compile table data block. 
		return `
		<!-- data -->
		<td class="data">

			<!-- newdistance -->
			<input class="newdistance" type="number" id="${uniqueclubid}distanceentry">
			<!-- /newdistance -->

		</td>
		<!-- /data -->`;
	}
}

// Load fields for new club creation. 
function loadNewClubEntry() {

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
