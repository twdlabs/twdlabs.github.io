


// Define destination for table body. 
const tablebodydestination = document.querySelector('div#container section.viewer div.grid table.table tbody.body');

// Define destination for table headers. 
const tableheadersdestination = document.querySelector('div#container section.viewer div.grid table.table thead.head tr.row');


/*****/


// Load layout for given database table. 
function loadTable() {

	// Load head of given database table. 
	loadTableHead();
	
	// Load body of given database table. 
	loadTableBody();

	/****/

	// Load head layout for given table. 
	function loadTableHead() {
	
		// Disregard if no destination present for table head. 
		if(!tableheadersdestination) return;
	
		// Initialize layout for table headers. 
		let tableheadersresult = '';
	
		// Accumulate layout for all table headers. 
		for(let column of selectedtable['tablecolumns']) {
	
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
	
		// Display information in table head. 
		tableheadersdestination.innerHTML = tableheadersresult;
	}
}

// -- R in CRUD -- //
// Load body layout for given table. 
function loadTableBody() {
	console.log('Table entries:',selectedtable.tableentries);
	

	// Get list of table entries. 
	let tableentrieslist = selectedtable['tableentries'];

	// Get list of table columns. 
	let tablecolumnlist = selectedtable['tablecolumns'];

	// Disregard if no destination present for table body. 
	if(!tablebodydestination) return;

	// Initialize layout for list of entries. 
	let tablebodylayout = '';

	// Check if list is empty. 
	let islistempty = tableentrieslist.length == 0;

	// Create placeholder for empty table body. 
	tablebodylayout += `
	<!-- row -->
	<tr class="row">${ islistempty ? createEmptyTableRowLayout() : '' }</tr>
	<!-- /row -->`;

	// Go thru each table entry. 
	for(let entry of tableentrieslist) {
		
		// Add table row layout for single table entry. 
		tablebodylayout += `
		<!-- row -->
		<tr class="row">${ createClubEntryRowLayout(entry) }</tr>
		<!-- /row -->`;
	}

	// Display list of table entries in table body. 
	tablebodydestination.innerHTML = tablebodylayout;

	/****/

	// Create placeholder table row layout for empty table. 
	function createEmptyTableRowLayout() {

		// Compile placeholder table row layout for empty table. 
		return `
		<!-- data -->
		<td class="data null" colspan="${tablecolumnlist.length}">

			<!-- nullicon -->
			<img class="nullicon" src="./../assets/icons/istockphoto-660995292-170667a.jpg">
			<!-- /nullicon -->

			<!-- caption -->
			<span class="caption">Add new ${displaytableid} to view here</span>
			<!-- /caption -->

		</td>
		<!-- /data -->`;
	}

	// Create table row layout for given entry. 
	function createEntryRowLayout(givenentry) {

		// 
	}

	// Create table row layout for given club entry. 
	function createClubEntryRowLayout(clubentry) {

		// Get id of given club entry. 
		let clubentryid = clubentry['id'] ? clubentry['id'] : '--';
		// Get details of given club entry. 
		let clubname = clubentry['clubname'] ? clubentry['clubname'] : '--';
		let clubbrand = clubentry['clubbrand'] ? clubentry['clubbrand'] : '--';
		let clubloftdegrees = clubentry['clubloftdegrees'] ? clubentry['clubloftdegrees'] : 0;
		let clubloftdisplay = formatNumber(clubloftdegrees)+'&deg';

		// Get distance metrics for given club entry. 
		let numshots = clubentry['numshots'] ? clubentry['numshots'] : 0;
		let avgdistance = clubentry['avgdistance'] ? clubentry['avgdistance'] : 0;
		let mindistance = clubentry['mindistance'] ? clubentry['mindistance'] : 0;
		let maxdistance = clubentry['maxdistance'] ? clubentry['maxdistance'] : 0;

		// 
		// if(distancelist) {
		// 	// Get average distance for given club entry. 
		// 	avgdistance = distancelist.length ? findAverage(distancelist) : 0;
		// }

		// Initialize layout for table row. 
		let tablerowlayout = '';
		// Add layout for id of given club entry. 
		tablerowlayout += createTableBlockLayout(clubentryid, 0);
 		// Add layout for club name, brand, and loft of given club entry. 
		tablerowlayout += createTableBlockLayout( `<b>${clubbrand}</b> <i>${clubname}</i> (${clubloftdisplay})` , 1);
		// Add layout for distance metrics of given club entry. 
		tablerowlayout += createTableBlockLayout( mindistance, 2);
		tablerowlayout += createTableBlockLayout( formatNumber(avgdistance), 3);
		tablerowlayout += createTableBlockLayout( maxdistance, 4);
		tablerowlayout += createTableBlockLayout( numshots, 5);
		// Add layout for distance entry field of given club entry. 
		tablerowlayout += createTableInputBlockLayout(6);
		// Add action field for given club entry. 
		tablerowlayout += createTableActionBlockLayout(7);
		// console.log('Club entry table row layout:',tablerowlayout);

		// Return layout for table row. 
		return tablerowlayout;

		/***/

		// Format number. 
		function formatNumber(num) {
			num = 1 * num;
			return ( Number.isInteger(num) ? num : num.toFixed(1) );
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

		// Create table input block. 
		function createTableInputBlockLayout(columnindex) {

			// Check if block is centered. 
			let isblockcentered = tablecolumnlist[columnindex].columncenter;
	
			// Compile table data block. 
			return `
			<!-- data -->
			<td class="data${ isblockcentered ? ' c' : '' }">

				<!-- newdistancebtn -->
				<button class="btn newdistancebtn" title="Add new distance for club: '${clubname}'" onclick="startNewClubDistance('${clubentryid}')">

					<!-- icon -->
					<svg class="icon plus" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon plus" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<!-- <span class="caption">Add</span> -->
					<!-- /caption -->
					
				</button>
				<!-- /newdistancebtn -->
	
			</td>
			<!-- /data -->`;
		}

		// Create layout for given table block. 
		function createTableBlockLayout(caption,columnindex) {

			// Check if block is centered. 
			let isblockcentered = tablecolumnlist[columnindex].columncenter;
	
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

		// Create layout for table action block. 
		function createTableActionBlockLayout(columnindex) {

			// Check if block is centered. 
			let isblockcentered = tablecolumnlist[columnindex].columncenter;

			// Compile table action block. 
			return `
			<!-- data -->
			<td class="data a${ isblockcentered ? ' c' : '' }">

				<!-- editbtn -->
				<button class="btn editbtn" title="Edit entry: '${clubname}'" onclick="startEditEntry('${clubentryid}')">

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
				<button class="btn deletebtn" title="Delete entry: '${clubname}'" onclick="startDeleteEntry('${clubentryid}')">

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
