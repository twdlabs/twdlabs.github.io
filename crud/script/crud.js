


// Get navbar. <-- Is this line needed for anything ?
let navbar = document.querySelector('nav.navbar');
// console.log('Navigation bar:',navbar);

// Get overlay for item editor. 
const overlay = document.querySelector('div.overlay');
// console.log('Overlay:',overlay);

// Get elements of item editor. 
const inputname = document.getElementById('name');
const inputemail = document.getElementById('email');
const inputmobilenumber = document.getElementById('mobilenumber');
// Get elements of item creator. 
const inputnewname = document.getElementById('newname');
const inputnewemail = document.getElementById('newemail');
const inputnewmobilenumber = document.getElementById('newmobilenumber');


/*****/


// Initialize database. 
let userdata;


/*****/


// Display all items in database. 
loadAllDataItems();


/*****/


// Read: Display all items in database. 
function loadAllDataItems() {

	// Retrieve database from storage. 
	userdata = getDatabaseFromStorage();

	// Get rows in table body. 
	let tbody = document.querySelector('main#table table.table tbody');
	
	// Initiate result. 
	let result = '';
	
	// Add previous data. 
	for(i in userdata) {
		
		// Get data for user. 
		let user = userdata[i];
		// console.log(i,`User item:`,user);
	
		result += `
		<!-- row -->
		<tr class="row body">
		
			<!-- cell -->
			<td class="cell">

				<!-- data -->
				<span class="data">${i}</span>
				<!-- /data -->

			</td>
			<!-- /cell -->
		
			<!-- cell -->
			<td class="cell">
	
				<!-- data -->
				<span class="data">${user.name}</span>
				<!-- /data -->
	
			</td>
			<!-- /cell -->
	
			<!-- cell -->
			<td class="cell">
	
				<!-- data -->
				<span class="data">${user.email}</span>
				<!-- /data -->
	
			</td>
			<!-- /cell -->
	
			<!-- cell -->
			<td class="cell">
	
				<!-- data -->
				<span class="data">${user.mobilenumber}</span>
				<!-- /data -->
	
			</td>
			<!-- /cell -->
	
			<!-- cell -->
			<td class="cell">

				<!-- panel -->
				<div class="panel compact">
		
					<!-- btn -->
					<div class="btn editbtn" data-index="${i}" title="Edit User">
		
						<!-- icon -->
						<svg class="icon pencil" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
							<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
						</svg>
						<!-- /icon -->
		
						<!-- caption -->
						<span class="caption">Edit</span>
						<!-- /caption -->
		
					</div>
					<!-- /btn -->
		
					<!-- btn -->
					<div class="btn deletebtn" data-index="${i}" title="Delete User">
		
						<!-- icon -->
						<svg class="icon trash" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
						</svg>
						<!-- /icon -->
		
						<!-- caption -->
						<span class="caption">Delete</span>
						<!-- /caption -->
		
					</div>
					<!-- /btn -->
					
				</div>
				<!-- /panel -->
	
			</td>
			<!-- /cell -->
	
		</tr>
		<!-- /row -->`;
	}
	
	// Add new rows to table. 
	tbody.innerHTML = result;

	// Handle button clicks for new items. 
	handleClicks();

	/*****/

	// Handle button clicks for new items. 
	function handleClicks() {

		// Get all edit buttons. 
		let editbtns = document.querySelectorAll('table.table td.cell div.panel div.editbtn');
		for(let btn of editbtns) {
			// 
			btn.addEventListener('click',editHelper);
		}

		// Get all delete buttons. 
		let deletebtns = document.querySelectorAll('table.table td.cell div.panel div.deletebtn');
		for(let btn of deletebtns) {
			// 
			btn.addEventListener('click',deleteDataItem);
		}

		/*****/

		// 
		function editHelper(event) {

			// Get edit button clicked. 
			let editbtn = event.currentTarget;

			// Get index of selected item to edit. 
			let selectedIndex = editbtn.getAttribute('data-index');
			console.log('Editing item at index:',selectedIndex);

			// Get update button in item editor. 
			let updatebtn = document.querySelector('div.overlay main#editor input.updatebtn');

			// Add selected index to attribute of update button. 
			updatebtn.setAttribute('data-selectedindex',selectedIndex);

			// Get previous values. 
			let prevname = ''+userdata[selectedIndex].name;
			let prevemail = ''+userdata[selectedIndex].email;
			let prevmobilenumber = ''+userdata[selectedIndex].mobilenumber;

			// Get editor input boxes. 
			let namebox = inputname;
			let emailbox = inputemail;
			let mobilenumberbox = inputmobilenumber;

			// TODO: Place previous values as input placeholders (if valid). 
			if(prevname.length>0) namebox.placeholder = prevname;
			else namebox.placeholder = namebox.getAttribute('data-default-placeholder');
			if(prevemail.length>0) emailbox.placeholder = prevemail;
			else emailbox.placeholder = emailbox.getAttribute('data-default-placeholder');
			if(prevmobilenumber.length>0) mobilenumberbox.placeholder = prevmobilenumber;
			else mobilenumberbox.placeholder = mobilenumberbox.getAttribute('data-default-placeholder');

			// Open overlay in editor mode. 
			openOverlay();
		}
	}
}

// Create: Add new item to database. 
function addNewDataItem() {

	// Get user input data and create new item. 
	let newitem = {
		name:inputnewname.value,
		email:inputnewemail.value,
		mobilenumber:inputnewmobilenumber.value,
	};
	console.log('New item:',newitem);
	// Clear previous editor input. 
	clearEditorInput();

	// Retrieve database from storage. 
	userdata = getDatabaseFromStorage();

	// Add new item to database. 
	userdata.push(newitem);

	// Save updated database to storage. 
	saveDatabaseToStorage();

	/****/

	// Clear editor input. 
	function clearEditorInput() {
		inputnewname.value = '';
		inputnewemail.value = '';
		inputnewmobilenumber.value = '';
	}
}

// Update: Edit item in database. 
function updateDataItem(indexOfUpdate=-1) {
	console.log('Index to update:',indexOfUpdate);

	// Handle erroneous index of update. 
	if(indexOfUpdate<0) {
		console.error('Invalid index: Index for database item is out of bounds.',indexOfUpdate);
		return;
	}

	// Get data for updated item. 
	let n = inputname.value;
	let e = inputemail.value;
	let m = inputmobilenumber.value;
	// Clear previous editor input. 
	clearEditorInput();

	// Retrieve database from storage. 
	userdata = getDatabaseFromStorage();

	// Update item in database. 
	if(n.length>0) userdata[indexOfUpdate].name = n;
	if(e.length>0) userdata[indexOfUpdate].email = e;
	if(m.length>0) userdata[indexOfUpdate].mobilenumber = m;

	// Save updated database to storage. 
	saveDatabaseToStorage();

	/****/

	// Clear editor input. 
	function clearEditorInput() {
		inputname.value = '';
		inputemail.value = '';
		inputmobilenumber.value = '';
	}
}

// Delete: Remove item from database. 
function deleteDataItem(event) {

	// Get selected delete button. 
	let btn = event.currentTarget;

	// Get index of deletion. 
	let indexOfDeletion = btn.getAttribute('data-index');

	// Confirm deletion. 
	let doDelete = confirm('Are you sure you want to delete this item ?');

	// Remove item from database if confirmed. 
	if(doDelete) {

		// Retrieve database from storage. 
		userdata = getDatabaseFromStorage();
	
		// Remove selected item from database. 
		userdata.splice(indexOfDeletion, 1);
	
		// Save updated database to storage. 
		saveDatabaseToStorage();
	}
}

// Clear: Clear all items from database. 
function clearDatabase() {

	// Confirm deletion. 
	let doDelete = confirm('Reset database ?');

	// Proceed if confirmed once. 
	if(doDelete) {

		// Confirm deletion again. 
		let doDeleteConfirmed = confirm('Are you sure you want to delete all data !?');
	
		// Proceed if confirmed twice. 
		if(doDeleteConfirmed) {

			// Reset original data. 
			userdata = [];
		
			// Save updated database to storage. 
			saveDatabaseToStorage();
		}
	}
}
