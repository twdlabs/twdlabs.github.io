

var userdata;


// Load user data. 
loadAllDataItems();


/*****/


// Get data from storage. 
function getDataFromStorage() {

	// Get string for user data. 
	let str = localStorage.getItem('cruduserdata');

	// Make user data available for use. 
	temp = JSON.parse(str);
	if(temp) userdata = temp;
	else userdata = [];
}

// Save data to storage. 
function saveDataToStorage() {
	console.log('User data:',userdata);

	// Create string for available user data. 
	let str = JSON.stringify(userdata);

	// Save string for user data. 
	localStorage.setItem('cruduserdata',str);

	// Load all data items on page. 
	loadAllDataItems();
}


// Read: Load all data items. 
function loadAllDataItems() {

	// Get original data from storage. 
	getDataFromStorage();

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
			let namebox = document.getElementById('name');
			let emailbox = document.getElementById('email');
			let mobilenumberbox = document.getElementById('mobilenumber');

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

// Create: Add new data item. 
function addNewDataItem() {

	// Get data for new item. 
	let n = document.getElementById('newname').value;
	let e = document.getElementById('newemail').value;
	let m = document.getElementById('newmobilenumber').value;

	// Clear previous input. 
	document.getElementById('newname').value = '';
	document.getElementById('newemail').value = '';
	document.getElementById('newmobilenumber').value = '';

	// Create new item. 
	let newitem = {
		name:n,
		email:e,
		mobilenumber:m
	};
	console.log('New item:',newitem);

	// Get original data from storage. 
	getDataFromStorage();

	// Add new data item to data list. 
	userdata.push(newitem);

	// Save updated data to storage. 
	saveDataToStorage();
}

// Update: Edit data item. 
function updateDataItem(indexOfUpdate=-1) {
	console.log('Index to update:',indexOfUpdate);
	if(indexOfUpdate<0) {
		console.error('Invalid Index Error: Index for userdata array is less than zero.',indexOfUpdate);
		return;
	}

	// Get data for updated item. 
	let n = document.getElementById('name').value;
	let e = document.getElementById('email').value;
	let m = document.getElementById('mobilenumber').value;

	// Clear previous input. 
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('mobilenumber').value = '';

	// Get original data from storage. 
	getDataFromStorage();

	// Create updated item. 
	// let updateditem = {
	// 	name:n,
	// 	email:e,
	// 	mobilenumber:m
	// };
	// console.log('Updated item:',updateditem);

	// Update data item in data list (using index). 
	// userdata[indexOfUpdate] = updateditem;
	if(n.length>0) userdata[indexOfUpdate].name = n;
	if(e.length>0) userdata[indexOfUpdate].email = e;
	if(m.length>0) userdata[indexOfUpdate].mobilenumber = m;

	// Save updated data to storage. 
	saveDataToStorage();
}

// Delete: Remove data item. 
function deleteDataItem(event) {

	// Get delete button clicked. 
	let btn = event.currentTarget;

	// Get index of deletion. 
	let indexOfDeletion = btn.getAttribute('data-index');

	// Confirm deletion. 
	let deleteConfirmed = confirm('Are you sure you want to delete ?');

	// Remove data item if confirmed. 
	if(deleteConfirmed) {

		// Get original data from storage. 
		getDataFromStorage();
	
		// Remove selected data item from data list (using index). 
		userdata.splice(indexOfDeletion, 1);
	
		// Save updated data to storage. 
		saveDataToStorage();
	}
}

// Reset: Remove all user data items. 
function clearAllData() {

	// Confirm deletion. 
	let deleteConfirmed = confirm('Are you sure you want to delete all data !?');

	// Remove data item if confirmed. 
	if(deleteConfirmed) {

		// Reset original data. 
		userdata = [];
	
		// Save updated data to storage. 
		saveDataToStorage();
	}
}


// Open overlay in proper mode. 
function openOverlay(creatorMode=false) {

	// Get overlay. 
	let overlay = document.querySelector('div.overlay');
	// console.log('Overlay:',overlay);

	// Set creator or editor mode. 
	if(creatorMode) overlay.classList.add('create');
	else overlay.classList.remove('create');

	// Activate overlay. 
	overlay.classList.add('active');
}

// Close overlay. 
function closeOverlay() {

	// Get overlay. 
	let overlay = document.querySelector('div.overlay'); 

	// De-activate overlay. 
	overlay.classList.remove('active');
}

