


// Get navbar. 
const navbar = document.querySelector('div#container nav.navbar');
// Get table body. 
const tbody = document.querySelector('div#container main#table table.table tbody');


/*****/


// Initialize database. 
let userdata;

// Initialize index of selected entry row. 
let currentlyselectedindex = -1;


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
	// Add layout for new entry. 
	result += createItemLayout2();
	
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
		<tr class="row entry" data-index="${ i }">
		
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
					<div class="btn editbtn" data-index="${ i }" title="Edit User">
		
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
					<div class="btn deletebtn" data-index="${ i }" title="Delete User">
		
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

	// Create item layout. 
	function createItemLayout2() {

		// 
		return `
		<!-- row -->
		<tr class="row addentry">
	
			<!-- cell -->
			<td class="cell" colspan="6">

				<!-- addbtn -->
				<div class="addbtn" onclick="openOverlay(1)">

					<!-- icon -->
					<svg class="icon plus" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Add Entry</span>
					<!-- /caption -->

				</div>
				<!-- /addbtn -->
	
			</td>
			<!-- /cell -->
	
		</tr>
		<!-- /row -->`;
	}

	// Activate button clicks for new item operations. 
	function activateItemOperations() {

		// Get all data entry rows. 
		let allentryrows = document.querySelectorAll('table.table tr.row.entry');

		// Go thru all data entry rows. 
		for(let entryrow of allentryrows) {
			// Activate button click. 
			entryrow.addEventListener('click',selectItem);
		}

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

			// Edit item in database. 
			editItem(selectedIndex);
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

// Select item. 
function selectItem(event) {

	// Get selected entry row. 
	const selectedentryrow = event.currentTarget;

	// Get all entry rows. 
	let allentryrows = document.querySelectorAll('table.table tr.row.entry');
	// Go thru all entry rows. 
	for(let entryrow of allentryrows) {
		// Unselect row. 
		entryrow.classList.remove('active');
	}

	// Highlight selected row. 
	selectedentryrow.classList.add('active');

	// Bring page focus to selected entry row. 
	selectedentryrow.focus();

	// Save index of selected entry row. 
	currentlyselectedindex = selectedentryrow.getAttribute('data-index') * 1;
}

// Edit: Edit item in database. 
function editItem(indexOfEdit=-1) {

	// Handle erroneous index of edit. 
	if(indexOfEdit<0) {
		console.error('Invalid index: Index for database item is out of bounds.',indexOfEdit);
		return;
	}

	// Get data for selected user entry. 
	let selectedUser = userdata[indexOfEdit];
	// Get previous values of selected item. 
	let prevfname = `${selectedUser.fname}`;
	let prevlname = `${selectedUser.lname}`;
	// console.log('prevname:',prevfname,prevlname);
	let prevemail = `${selectedUser.email}`;
	// console.log('prevemail:',prevemail);
	let prevmobilenumber = `${selectedUser.mobilenumber}`;
	// console.log('prevmobilenumber:',prevmobilenumber);

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
	openOverlay(0);
}

// Update: Update item in database. 
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

	// Reset index for currently selected entry. 
	currentlyselectedindex = -1;
	// Refresh selection based on currently selected index. 
	// refreshSelectedEntry();
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
