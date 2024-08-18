


// Load layout for clubs table. 
function loadClubsTable() {

	// Load head of clubs table. 
	loadTableHead('clubs');
	
	// Load body of clubs table. 
	loadTableBody('clubs');
}

// Load layout for holes table. 
function loadHolesTable() {

	// Load head of holes table. 
	loadTableHead('holes');
	
	// Load body of holes table. 
	loadTableBody('holes');
}

// Load layout for shots table. 
function loadShotsTable() {

	// Load head of shots table. 
	loadTableHead('shots');
	
	// Load body of shots table. 
	loadTableBody('shots');
}


// Load head layout for given table. 
function loadTableHead(tableid) {

	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];

	// Disregard if no destination present for table head. 
	if(!giventabledata.tabletitledestination || !giventabledata.tableheadersdestination) return;

	// Initialize layout for table headers. 
	let tableheadersresult = '';

	// Accumulate layout for all table headers. 
	for(let column of giventabledata.tablecolumns) {

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

	// Display table head. 
	giventabledata.tableheadersdestination.innerHTML = tableheadersresult;
	giventabledata.tabletitledestination.innerHTML = giventabledata.tabletitle;
}

// Load body layout for given table (R in CRUD). 
function loadTableBody(tableid) {

	// Get table data for given table id. 
	let giventabledata = databasetables[tableid];

	// Disregard if no destination present for table body. 
	if(!giventabledata.tablebodydestination) return;

	// Initialize layout for list of entries. 
	let tablebodylayout = '';

	// Restore saved table data from memory. 
	restoreTableFromMemory(tableid);

	// Check if list is empty. 
	let islistempty = giventabledata.tableentries.length == 0;

	// Create placeholder for empty table body. 
	tablebodylayout += `
	<!-- row -->
	<tr class="row">${ islistempty ? createEmptyTableRowLayout() : '' }</tr>
	<!-- /row -->`;

	// Go thru each table entry. 
	for(let entry of giventabledata.tableentries) {
		
		// Add table row layout for single table entry. 
		tablebodylayout += `
		<!-- row -->
		<tr class="row">${ createClubEntryRowLayout(entry) }</tr>
		<!-- /row -->`;
	}

	// Display list of table entries in table body. 
	giventabledata.tablebodydestination.innerHTML = tablebodylayout;

	/****/

	// Create placeholder table row layout for empty table. 
	function createEmptyTableRowLayout() {

		// Compile placeholder table row layout for empty table. 
		return `
		<!-- data -->
		<td class="data null" colspan="${giventabledata.tablecolumns.length}">

			<!-- caption -->
			<span class="caption">Add new ${tableid} to view here</span>
			<!-- /caption -->

		</td>
		<!-- /data -->`;
	}

	// Create table row layout for given club entry. 
	function createClubEntryRowLayout(clubentry) {

		// Get name of given club. 
		let clubid = clubentry.clubid ? clubentry.clubid : '--';
		// Get name of given club. 
		let clubname = clubentry.clubname ? clubentry.clubname : '--';
		// Get brand of given club. 
		let clubbrand = clubentry.clubbrand ? clubentry.clubbrand : '--';
		// Get loft of given club. 
		let clubloftdegrees = clubentry.clubloftdegrees ? clubentry.clubloftdegrees : 0;

		// Get list of distances for given club. 
		let distancelist = clubentry.distancelist;

		// Initialize distance metrics for given club. 
		let mindistance = 0; let avgdistance = 0; let maxdistance = 0;

		// 
		if(distancelist) {
			// Get minimum distance for given club. 
			mindistance = distancelist.length ? findMinimum(distancelist) : 0;
			// Get average distance for given club. 
			avgdistance = distancelist.length ? findAverage(distancelist) : 0;
			// Get maximum distance for given club. 
			maxdistance = distancelist.length ? findMaximum(distancelist) : 0;
		}

		// Initialize layout for table row. 
		let tablerowlayout = '';
		// Add layout for id of given club. 
		tablerowlayout += createTableBlockLayout(clubid, 0);
 		// Add layout for name of given club. 
		tablerowlayout += createTableBlockLayout(clubname, 1);
 		// Add layout for brand of given club. 
		tablerowlayout += createTableBlockLayout(clubbrand, 2);
 		// Add layout for loft of given club. 
		tablerowlayout += createTableBlockLayout( `${formatNumber(clubloftdegrees)}&deg;`, 3);
		// Add layout for minimum distance of given club. 
		tablerowlayout += createTableBlockLayout( formatNumber(mindistance), 4);
		// Add layout for average distance of given club. 
		tablerowlayout += createTableBlockLayout( formatNumber(avgdistance), 5);
		// Add layout for maximum distance of given club. 
		tablerowlayout += createTableBlockLayout( formatNumber(maxdistance), 6);
		// Add layout for distance entry field of given club. 
		tablerowlayout += createTableInputBlockLayout();
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
			let isblockcentered = giventabledata.tablecolumns[blockindex].columncenter;
	
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
		function createTableInputBlockLayout() {
	
			// Compile table data block. 
			return `
			<!-- data -->
			<td class="data">
	
				<!-- newdistance -->
				<input class="newdistance" type="number" id="${clubid}newdistance" onchange="saveNewClubDistance('${clubid}')">
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
				<button class="btn deletebtn" title="Delete club: '${clubentry.clubname}'" onclick="deleteTableEntry('clubs','${clubentry.clubid}')">

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
}
