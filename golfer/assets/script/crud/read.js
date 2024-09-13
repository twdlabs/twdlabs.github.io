


// Define destination for table body. 
const tablebodydestination = document.querySelector('div#container section.viewer div.grid table.table tbody.body');

// Define destination for table headers. 
const tableheadersdestination = document.querySelector('div#container section.viewer div.grid table.table thead.head tr.row');


/*****/


// -- R in CRUD -- //
// Display layout for given database table. 
function displayTable() {

	// Display head of current table. 
	displayTableHead();
	
	// Display body of current table. 
	displayTableBody();

	// Update table history navigation buttons. 
	updateHistoryBtns();

	/****/

	// Display head layout for current database table. 
	function displayTableHead() {
	
		// Disregard if no destination present for table head. 
		if(!tableheadersdestination) return;
	
		// Initialize layout for table headers. 
		let tableheadersresult = '';
	
		// Accumulate layout for all table headers. 
		for(let column of selectedtable['tablecolumns']) {
	
			// Compile layout for single table header. 
			tableheadersresult += `
			<!-- head -->
			<th class="head${ column.columncenter ? ' c' : '' }${ column.columnoptional ? ' o' : '' }">
	
				<!-- caption -->
				<span class="caption">${column.columnheader}</span>
				<!-- /caption -->
	
			</th>
			<!-- /head -->`;
		}
	
		// Display information in table head. 
		tableheadersdestination.innerHTML = tableheadersresult;
	}

	// Display body layout for current database table. 
	function displayTableBody() {
		// console.log('Table entries:',selectedtable['currententries']);

		// Get list of table entries. 
		let tableentrieslist = selectedtable['currententries'];
	
		// Get list of table columns. 
		let tablecolumnslist = selectedtable['tablecolumns'];
	
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
			<tr class="row">${ createEntryRowLayout(entry) }</tr>
			<!-- /row -->`;
		}
	
		// Display list of table entries in table body. 
		tablebodydestination.innerHTML = tablebodylayout;
	
		/***/
	
		// Create placeholder table row layout for empty table. 
		function createEmptyTableRowLayout() {
	
			// Compile placeholder table row layout for empty table. 
			return `
			<!-- data -->
			<td class="data null" colspan="${tablecolumnslist.length}">
	
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

			// Get id of given entry. 
			let entryid = givenentry['id'] ? givenentry['id'] : '--';
			// console.log('Entry id:',entryid);

			// Define row layer functions. 
			let rowlayer = {
				clubs:createClubEntryRowLayout,
				holes:createHoleEntryRowLayout,
				shots:createDistanceEntryRowLayout,
			};
	
			// Select row layer function and return result. 
			return rowlayer[displaytableid](givenentry);
	
			/**/
	
			// Create table row layout for given club entry. 
			function createClubEntryRowLayout(clubentry) {
		
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
		
				// if(distancelist) {
				// 	// Get average distance for given club entry. 
				// 	avgdistance = distancelist.length ? findAverage(distancelist) : 0;
				// }

				// Define row template for club entry. 
				let rowtemplate = [
					// Define caption for club id. 
					entryid,
					// Define caption for brand name, club name, and loft. 
					`<b>${clubbrand}</b> <i>${clubname}</i> (${clubloftdisplay})`,
					// Define captions for distance metrics. 
					mindistance,
					formatNumber(avgdistance),
					maxdistance,
					numshots,
				];

				// Create table row layout using row template. 
				return createRowLayout(rowtemplate,true);
		
				/**/
		
				// Format number. 
				function formatNumber(num) {
	
					// Ensure number form. 
					num = 1 * num;
	
					// Return as integer or 1-place decimal number. 
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
			}
		
			// Create table row layout for given hole entry. 
			function createHoleEntryRowLayout(holeentry) {
		
				// Get details of given hole entry. 
				let holename = holeentry['holename'] ? holeentry['holename'] : '--';

				// Define row template for hole entry. 
				let rowtemplate = [
					// Define caption for hole id. 
					entryid,
					// Define caption for hole name. 
					holename,
				];

				// Create table row layout using row template. 
				return createRowLayout(rowtemplate);
			}
		
			// Create table row layout for given distance entry. 
			function createDistanceEntryRowLayout(shotentry) {
		
				// Get details of given distance entry. 
				let distance = shotentry['distance'];
				let clubid = shotentry['clubid'];
				let holeid = shotentry['holeid'];
				let clubentry = getClubEntryById(clubid);
				let holeentry = getHoleEntryById(holeid);
				// console.log('Associated club entry:',clubid,clubentry);
				// console.log('Associated hole entry:',holeid,holeentry);
				
				// Get details of given club entry. 
				let clubname = clubentry ? clubentry['clubname'] : '--';
				// console.log('Club name:',clubname);
				let holename = holeentry ? holeentry['holename'] : '--';
				// console.log('Hole name:',holename);

				// Define row template for distance entry. 
				let rowtemplate = [
					// Define caption for shot id. 
					entryid,
					// Define caption for club name. 
					clubentry?`${clubname} (${clubid})`:clubname,
					// Define caption for hole name. 
					holeentry?`${holename} (${holeid})`:holename,
					// Define caption for distance. 
					distance,
				];

				// Create table row layout using row template. 
				return createRowLayout(rowtemplate);
			}
		
			// Create table row layout for given row template. 
			function createRowLayout(rowtemplate,includeshot) {

				// Initialize layout for table row. 
				let tablerowlayout = '';

				// Go thru each data point in row template. 
				for(let index in rowtemplate) {

					// Add layout for data point in given entry. 
					tablerowlayout += createTableBlockLayout( rowtemplate[index] , index);
				}

				// TODO: Include field for new shot. 
				if(includeshot) {

					// Add layout for distance entry field of given club entry. 
					tablerowlayout += createTableInputBlockLayout(rowtemplate.length);
	
					// Add action field layout for given entry. 
					tablerowlayout += createTableActionBlockLayout(entryid,rowtemplate.length+1);
				}

				// TODO: Disregard field for new shot. 
				else {
	
					// Add action field layout for given entry. 
					tablerowlayout += createTableActionBlockLayout(entryid,rowtemplate.length);
				}

				// Return layout for table row. 
				return tablerowlayout;

				/**/

				// Create layout for given table block. 
				function createTableBlockLayout(caption,columnindex) {
					// console.log('Creating table block layout...',columnindex);
		
					// Check if block is centered. 
					let centerblock = tablecolumnslist[columnindex]['columncenter'];
					// Check if block is optional. 
					let optionalblock = tablecolumnslist[columnindex]['columnoptional'];
			
					// Compile table data block. 
					return `
					<!-- data -->
					<td class="data${ centerblock ? ' c' : '' }${ optionalblock ? ' o' : '' }">
			
						<!-- caption -->
						<span class="caption">${caption}</span>
						<!-- /caption -->
			
					</td>
					<!-- /data -->`;
				}
			
				// Create table input block. 
				function createTableInputBlockLayout(columnindex) {
		
					// Check if block is centered. 
					let centerblock = tablecolumnslist[columnindex]['columncenter'];
					// Check if block is optional. 
					let optionalblock = tablecolumnslist[columnindex]['columnoptional'];
			
					// Compile table data block. 
					return `
					<!-- data -->
					<td class="data a${ centerblock ? ' c' : '' }${ optionalblock ? ' o' : '' }">
		
						<!-- btnpanel -->
						<div class="btnpanel">
		
							<!-- newdistancebtn -->
							<button class="btn newdistancebtn" title="Add new distance for club (${entryid})" onclick="startNewDistanceEntry('${entryid}')">
		
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
							
						</div>
						<!-- /btnpanel -->
		
					</td>
					<!-- /data -->`;
				}
			
				// Create layout for table action block. 
				function createTableActionBlockLayout(entryid,columnindex) {
		
					// TODO: Check if block is centered. 
					let centerblock = true || tablecolumnslist[columnindex]['columncenter'];
					// Check if block is optional. 
					let optionalblock = tablecolumnslist[columnindex]['columnoptional'];
		
					// Compile table action block. 
					return `
					<!-- data -->
					<td class="data a${ centerblock ? ' c' : '' }${ optionalblock ? ' o' : '' }">
		
						<!-- btnpanel -->
						<div class="btnpanel">
		
							<!-- editbtn -->
							<button class="btn editbtn" title="Edit entry (${entryid})" onclick="startEditEntry('${entryid}')">
		
								<!-- icon -->
								<svg class="icon pencilsqr" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
									<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
								</svg>
								<!-- /icon -->
		
								<!-- icon -->
								<svg class="icon pencil" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
								</svg>
								<!-- /icon -->
		
								<!-- icon -->
								<svg class="icon pencil" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
								</svg>
								<!-- /icon -->
		
								<!-- caption -->
								<span class="caption">Edit</span>
								<!-- /caption -->
								
							</button>
							<!-- /editbtn -->
		
							<!-- deletebtn -->
							<button class="btn deletebtn" title="Delete entry (${entryid})" onclick="startDeleteEntry('${entryid}')">
		
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
							
						</div>
						<!-- /btnpanel -->
		
					</td>
					<!-- /data -->`;
				}
			}
		}
	}
}
