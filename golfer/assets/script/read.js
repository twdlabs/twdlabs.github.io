


// Load head layout for clubs table. 
function loadClubsTableHead() {

	// Get destination for table headers. 
	let tableheadersdestination = document.querySelector('div#container section.clubsviewer div.grid table.clubstable thead.head tr.row');

	// Initialize layout for table headers. 
	let tableheadersresult = '';

	// Accumulate layout for all table headers. 
	for(let column of clubstable.tablecolumns) {

		// Compile layout for single table header. 
		tableheadersresult += `
		<!-- head -->
		<th class="head${ column.columncenter ? ' c' : '' }">

			<!-- caption -->
			<span class="caption">${column.columnheader}</span>
			<!-- /caption -->

		</th>
		<!-- /head -->`;
	}

	// Display table headers. 
	tableheadersdestination.innerHTML = tableheadersresult;
}

// Load body layout for clubs table (R in CRUD). 
function loadClubsTableBody() {

	// Get destination for list of club entries. 
	let clublistdestination = document.querySelector('div#container section.clubsviewer div.grid table.clubstable tbody.body');

	// Initialize layout for list of club entries. 
	let clubtablelayout = '';

	// Restore saved data from memory. 
	restoreFromMemory();

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
		<tr class="row" title="id:${clubentry.clubid}">${ createEntryRowLayout(clubentry) }</tr>
		<!-- /row -->`;
	}

	// Display list of club entries. 
	clublistdestination.innerHTML = clubtablelayout;

	/****/

	// Create table row layout for given club entry. 
	function createEntryRowLayout(clubentry) {

		// Get name of given club. 
		let clubid = clubentry.clubid ? clubentry.clubid : '--';
		// Get name of given club. 
		let clubname = clubentry.clubname ? clubentry.clubname : '--';
		// Get brand of given club. 
		let clubbrand = clubentry.clubbrand ? clubentry.clubbrand : '--';
		// Get minimum distance for given club. 
		let mindistance = clubentry.distancelist.length ? findMinimum(clubentry.distancelist) : 0;
		// Get average distance for given club. 
		let avgdistance = clubentry.distancelist.length ? findAverage(clubentry.distancelist) : 0;
		// Get maximum distance for given club. 
		let maxdistance = clubentry.distancelist.length ? findMaximum(clubentry.distancelist) : 0;

		// Initialize layout for table row. 
		let tablerowlayout = '';
		// Add layout for id of given club. 
	   tablerowlayout += createTableBlockLayout(clubid, 0);
 		// Add layout for name of given club. 
		tablerowlayout += createTableBlockLayout(clubname, 1);
 		// Add layout for brand of given club. 
		tablerowlayout += createTableBlockLayout(clubbrand, 2);
		// Add layout for minimum distance of given club. 
		tablerowlayout += createTableBlockLayout( formatNumber(mindistance), 3);
		// Add layout for average distance of given club. 
		tablerowlayout += createTableBlockLayout( formatNumber(avgdistance), 4);
		// Add layout for maximum distance of given club. 
		tablerowlayout += createTableBlockLayout( formatNumber(maxdistance), 5);
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
		function createTableBlockLayout(caption,blockindex) {

			// Check if block is centered. 
			let isblockcentered = clubstable.tablecolumns[blockindex].columncenter;
	
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
				<button class="btn editbtn" title="Edit club: '${clubentry.clubname}'" onclick="startEditEntry('${clubentry.clubid}')">

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
