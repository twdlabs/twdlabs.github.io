


// Get navbar. <-- Is this line needed for anything ?
let navbar = document.querySelector('div#container nav.navbar');
// Get table body. 
const tbody = document.querySelector('div#container main#table table.table tbody');

// Get overlay for item editor. 
const overlay = document.querySelector('div#container div.overlay');
// Get elements of item editor. 
const inputfname = document.querySelector('input#fname');
const inputlname = document.querySelector('input#lname');
const inputemail = document.querySelector('input#email');
const inputmobilenumber = document.querySelector('input#mobilenumber');
// Get elements of item creator. 
const inputnewfname = document.querySelector('input#newfname');
const inputnewlname = document.querySelector('input#newlname');
const inputnewemail = document.querySelector('input#newemail');
const inputnewmobilenumber = document.querySelector('input#newmobilenumber');
// Get update button in item editor. 
const editorupdatebtn = document.querySelector('div#container div.overlay main#editor input.updatebtn');


/*****/


// Initialize database. 
let userdata;


/*****/


// Display database on page. 
displayDatabase();


/*****/


// Read: Display all items in database. 
function displayDatabase() {

	// Retrieve database from storage. 
	userdata = getDatabaseFromStorage();
	
	// Initiate result. 
	let result = '';
	
	// Go thru all items in database. 
	for(i in userdata) {
		// Add layout for given item. 
		result += createItemLayout(i);
	}
	
	// Add resulting layouts to table. 
	tbody.innerHTML = result;

	// Activate button clicks for new item operations. 
	activateItemOperations();

	/****/

	// Create item layout. 
	function createItemLayout(i) {
		
		// Get data for user. 
		let user = userdata[i];
		// console.log(i,`User item:`,user);

		// 
		return `
		<!-- row -->
		<tr class="row body">
		
			<!-- cell -->
			<td class="cell">

				<!-- data -->
				<span class="data">${ i }</span>
				<!-- /data -->

			</td>
			<!-- /cell -->
		
			<!-- cell -->
			<td class="cell">

				<!-- data -->
				<span class="data">${ user.userid || '' }</span>
				<!-- /data -->

			</td>
			<!-- /cell -->
		
			<!-- cell -->
			<td class="cell">
	
				<!-- data -->
				<span class="data">${ `${user.fname} ${user.lname}` || '' }</span>
				<!-- /data -->
	
			</td>
			<!-- /cell -->
	
			<!-- cell -->
			<td class="cell">
	
				<!-- data -->
				<span class="data">${ user.email || '' }</span>
				<!-- /data -->
	
			</td>
			<!-- /cell -->
	
			<!-- cell -->
			<td class="cell">
	
				<!-- data -->
				<span class="data">${ user.mobilenumber || '' }</span>
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

	// Activate button clicks for new item operations. 
	function activateItemOperations() {

		// Get all edit buttons. 
		let editbtns = document.querySelectorAll('table.table td.cell div.panel div.editbtn');

		// Go thru all edit buttons. 
		for(let btn of editbtns) {
			// Activate button click. 
			btn.addEventListener('click',startEditingItem);
		}

		// Get all delete buttons. 
		let deletebtns = document.querySelectorAll('table.table td.cell div.panel div.deletebtn');

		// Go thru all delete buttons. 
		for(let btn of deletebtns) {
			// Activate button click. 
			btn.addEventListener('click',startDeletingItem);
		}

		/***/

		// Start editing selected item. 
		function startEditingItem(event) {

			// Get selected edit button. 
			let editbtn = event.currentTarget;

			// Get index of selected item to edit. 
			let selectedIndex = editbtn.getAttribute('data-index');
			console.log('Editing item at index:',selectedIndex);

			// Attach selected index to update button in item editor. 
			editorupdatebtn.setAttribute('data-selectedindex',selectedIndex);

			// Get data for selected user. 
			let selectedUser = userdata[selectedIndex];
			// Get previous values of selected item. 
			let prevfname = `${selectedUser.fname}`;
			let prevlname = `${selectedUser.lname}`;
			console.log('prevname:',prevfname,prevlname);
			let prevemail = `${selectedUser.email}`;
			console.log('prevemail:',prevemail);
			let prevmobilenumber = `${selectedUser.mobilenumber}`;
			console.log('prevmobilenumber:',prevmobilenumber);

			// Place previous name values as input placeholders (if valid). 
			if(prevfname.length>0) inputfname.placeholder = prevfname;
			else inputfname.placeholder = inputfname.getAttribute('data-default-placeholder');
			if(prevlname.length>0) inputlname.placeholder = prevlname;
			else inputlname.placeholder = inputlname.getAttribute('data-default-placeholder');
			// Place previous email value as input placeholder (if valid). 
			if(prevemail.length>0) inputemail.placeholder = prevemail;
			else inputemail.placeholder = inputemail.getAttribute('data-default-placeholder');
			// Place previous mobilenumber value as input placeholder (if valid). 
			if(prevmobilenumber.length>0) inputmobilenumber.placeholder = prevmobilenumber;
			else inputmobilenumber.placeholder = inputmobilenumber.getAttribute('data-default-placeholder');

			// Open overlay in editor mode. 
			openOverlay(false);
		}

		// Start deleting selected item. 
		function startDeletingItem(event) {

			// Get selected delete button. 
			let deletebtn = event.currentTarget;

			// Get index of selected item to delete. 
			let selectedIndex = deletebtn.getAttribute('data-index');
			console.log('Deleting item at index:',selectedIndex);

			// 
			deleteItem(selectedIndex);
		}
	}
}

// Create: Add new item to database. 
function createItem() {

	// Get user input data and create new item. 
	let newitem = {
		fname:inputnewfname.value,
		lname:inputnewlname.value,
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
		inputnewfname.value = '';
		inputnewlname.value = '';
		inputnewemail.value = '';
		inputnewmobilenumber.value = '';
	}
}

// Update: Edit item in database. 
function updateItem() {

	// Get index of update. 
	let indexOfUpdate = editorupdatebtn.getAttribute('data-selectedindex');
	console.log('Index to update:',indexOfUpdate);

	// Handle erroneous index of update. 
	if(indexOfUpdate<0) {
		console.error('Invalid index: Index for database item is out of bounds.',indexOfUpdate);
		return;
	}

	// Get data for updated item. 
	let fn = inputfname.value;
	let ln = inputlname.value;
	let eml = inputemail.value;
	let mn = inputmobilenumber.value;
	// Clear previous editor input. 
	clearEditorInput();

	// Retrieve database from storage. 
	userdata = getDatabaseFromStorage();

	// Update item in database. 
	if(fn.length>0) userdata[indexOfUpdate].fname = fn;
	if(ln.length>0) userdata[indexOfUpdate].lname = ln;
	if(eml.length>0) userdata[indexOfUpdate].email = eml;
	if(mn.length>0) userdata[indexOfUpdate].mobilenumber = mn;

	// Save updated database to storage. 
	saveDatabaseToStorage();

	/****/

	// Clear editor input. 
	function clearEditorInput() {
		inputfname.value = '';
		inputlname.value = '';
		inputemail.value = '';
		inputmobilenumber.value = '';
	}
}

// Delete: Remove item from database. 
function deleteItem(indexOfDeletion=-1) {
	console.log('Index to delete:',indexOfDeletion);

	// Handle erroneous index of deletion. 
	if(indexOfDeletion<0) {
		console.error('Invalid index: Index for database item is out of bounds.',indexOfDeletion);
		return;
	}

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

// Clear: Delete all items from database. 
function clearDatabase() {

	// Confirm deletion. 
	let doClear = confirm('Clear database ?');

	// Proceed if confirmed once. 
	if(doClear) {

		// Confirm deletion again. 
		let doClearConfirmed = confirm('Are you sure you want to delete all data !?');
	
		// Proceed if confirmed twice. 
		if(doClearConfirmed) {

			// Reset original data. 
			userdata = [];
		
			// Save updated database to storage. 
			saveDatabaseToStorage();
		}
	}
}

// Reset database to default. 
function resetDatabase() {

	// Confirm deletion. 
	let doReset = confirm('Reset database to default ?');

	// Reset database if confirmed. 
	if(doReset) {

		// 
		userdata = userDataList.map(x=>x);
		console.log(userdata);
		
		// Save updated database to storage. 
		saveDatabaseToStorage();
	}
}
