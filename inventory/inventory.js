
// Get product data. 
productdata;
console.log(productdata);

// Fill table. 
setTheTable();


/*****/


// Fill table (read component). 
function setTheTable() {

	// Get body of inventory table. 
	let tbody = document.querySelector('section#inventory table.table tbody');
	console.log('tbody',tbody);
	
	// Populate table with product data. 
	let result = '';
	for(let index in productdata) {

		// Get product item. 
		let productitem = productdata[index];

		// Append to result. 
		result += `
		<!-- row -->
		<tr class="row">
	
			<!-- cell -->
			<td class="cell">
				<img src="../merch/${productitem.photourl}">
			</td>
			<!-- /cell -->
	
			<!-- cell -->
			<td class="cell">
				<span class="caption">${productitem.name}</span>
			</td>
			<!-- /cell -->
	
			<!-- cell -->
			<td class="cell">
				<span class="caption">${productitem.price}</span>
			</td>
			<!-- /cell -->
	
			<!-- cell -->
			<td class="cell">

				<!-- editbtn -->
				<button class="editbtn btn" data-productid="${index}">

					<!-- icon -->
					<svg class="icon editpad" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
						<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Edit</span>
					<!-- /caption -->

				</button>
				<!-- /editbtn -->
				
				<!-- form -->
				<form class="form" action="index.php" method="post">

					<!-- input -->
					<div class="input">
						<input type="hidden" name="productid" value="${index}">
					</div>
					<!-- /input -->

					<!-- deletebtn -->
					<button class="deletebtn btn" name="operation" value="Deleting Product">

						<!-- icon -->
						<svg class="icon trashcan" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">Delete</span>
						<!-- /caption -->

					</button>
					<!-- /deletebtn -->
					
				</form>
				<!-- /form -->
	
			</td>
			<!-- /cell -->
	
		</tr>
		<!-- /row -->`;
	}
	tbody.innerHTML = result;
	
	// Activate buttons in inventory table. 
	activateBtns();
	
	/*****/

	// Activate buttons (with edit and delete functions). 
	function activateBtns() {

		// Get edit buttons in inventory table. 
		let editBtns = document.querySelectorAll('section#inventory table.table td.cell button.editbtn');

		// Activate edit buttons. 
		for(let btn of editBtns) {
			// Add click fucntion to button. 
			btn.addEventListener('click',editItem);
		}

		// Get delete buttons in inventory table. 
		let deleteBtns = document.querySelectorAll('section#inventory table.table td.cell button.deletebtn');

		// Activate delete buttons. 
		for(let btn of deleteBtns) {
			// Add click fucntion to button. 
			btn.addEventListener('click',deleteItem);
		}

		// Get table headers. 
		let th = document.querySelectorAll('section#inventory table.table th.cell');

		// Activate table headers. 
		for(let btn of th) {
			// Add click fucntion to button. 
			btn.addEventListener('click',sortTableByColumn);
		}
	}
}


// TODO: Edit item. 
function editItem(event) {

	// Get cliked edit button. 
	let editbtn = event.currentTarget;

	// Get product metadata. 
	let productid = 1 * editbtn.getAttribute('data-productid');
	let productname = productdata[productid].name;
	let productprice = productdata[productid].price;
	let productimageurl = productdata[productid].photourl;

	// Add metadata to updater's overlay popup. 
	document.getElementById('productid').value = productid;
	document.getElementById('productname').value = productname;
	document.getElementById('productprice').value = productprice;
	// document.getElementById('productimageurl').value = productimageurl;

	// Show updater overlay popup. 
	openEditor();
}

// Open popup editor. 
function openEditor() {
	document.getElementById('updater').classList.add('active');
}

// Close popup editor. 
function closeEditor() {
	document.getElementById('updater').classList.remove('active');
}


// TODO: Create item. 
function createItem() {

	// 
}

// TODO: Update item. 
function updateItem() {

	// 
}

// TODO: Delete item. 
function deleteItem() {

	// 
}

// Sort table by selected column. 
function sortTableByColumn(event) {

	// Get index of selected column. 
	let selected_th = event.currentTarget;
	let siblings = selected_th.parentElement.children;
	let colindex = -1;
	for(let i in siblings) {
		let s = siblings[i];
		if(s==selected_th) {
			colindex = i;
			break;
		}
	}
	console.log('colindex:',colindex);

	// Get all table headers. 
	let tableheaders = document.querySelectorAll('section#inventory table.table th.cell');

	// De-activate other table headers. 
	for(let th of tableheaders) {
		// Add click fucntion to button. 
		th.classList.remove('sortsrc');
	}

	// Activate selected table header. 
	let selected = event.currentTarget;
	selected.classList.add('sortsrc');

	// Put table rows in order. 
	putRowsInOrder();

	/*****/

	// Put table rows in order. 
	function putRowsInOrder() {

		// Initialize index outside loop. 
		let i = -1;

		// Set initial sorting state. 
		let stillswitching = true;
		let switchRows = false;

		// Get inventory table. 
		let table = document.querySelector('section#inventory table.table');

		// Continue switching until sorted properly. 
		do {

			// Set initial sorting state. 
			stillswitching = false;

			// Get all table rows. 
			let allrows = table.rows;

			// Go thru all table rows (except first 2 -- table header row & first data row) until switch found. 
			for(i=2 ; i<allrows.length ; i++) {
				switchRows = false;

				// Get two rows to compare. 
				let rowA = allrows[i-1];
				let rowB = allrows[i];

				// Get two cell values to compare. 
				let a = rowA.getElementsByTagName('td')[colindex].innerHTML.toLowerCase();
				let b = rowB.getElementsByTagName('td')[colindex].innerHTML.toLowerCase();

				// Check if rows should switch. 
				switchRows = (a > b);
				if(switchRows) break;
			}

			// Switch rows. 
			if(switchRows) {
				let tbodyNode = allrows[i].parentNode;
				tbodyNode.insertBefore(allrows[i], allrows[i-1]);
				stillswitching = true;
			}
		} while(stillswitching);
	}
}
