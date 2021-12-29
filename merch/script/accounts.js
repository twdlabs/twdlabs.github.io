

/* ACCOUNT */


// Define current user. 
let currentuserid = -1;

// Get saved user id if available. 
if(localStorage.currentuserid) currentuserid = localStorage.currentuserid


/*****/


// Update user items in account drawer. 
function updateAccounts() {
	console.log('Updating accounts...');

	// Add element for each account item. 
	let activeuser = '';
	let resultlist = '';
	for(let i in userdata) {

		// Get user by id. 
		let user = userdata[i];

		// Create special account element for active user. 
		if(i==currentuserid) {
			activeuser = `
			<!-- activeuser -->
			<div class="item activeuser" data-userid="${i}">
	
				<!-- photo -->
				<a class="photo" href="javascript:void(0)" style="background-image:url('${user.photourl}');"></a>
				<!-- /photo -->
	
				<!-- content -->
				<div class="content">
	
					<!-- name -->
					<div class="name">${user.fname} ${user.lname}</div>
					<!-- /name -->
	
					<!-- desc -->
					<div class="desc">${user.email}</div>
					<!-- /desc -->
	
				</div>
				<!-- /content -->
	
			</div>
			<!-- /activeuser -->`;
		}

		// Create account element. 
		else {
			resultlist += `
			<!-- item -->
			<div class="item" data-userid="${i}" onclick="chooseUser(this)">
	
				<!-- photo -->
				<a class="photo" href="javascript:void(0)" style="background-image:url('${user.photourl}');"></a>
				<!-- /photo -->
	
				<!-- content -->
				<div class="content">
	
					<!-- name -->
					<div class="name">${user.fname} ${user.lname}</div>
					<!-- /name -->
	
					<!-- desc -->
					<div class="desc">${user.email}</div>
					<!-- /desc -->
	
				</div>
				<!-- /content -->
	
			</div>
			<!-- /item -->`;
		}
	}
	// console.log('resultlist',resultlist);

	// Get inside of account drawer. 
	let accountbox = document.querySelector('div#accountbox div.inner');
	// console.log('accountbox',accountbox);

	// Add elements to account drawer. 
	accountbox.innerHTML = activeuser + resultlist;
}


// Choose active user. 
function chooseUser(target) {
	console.log(target);

	currentuserid = 1*target.getAttribute('data-userid');

	// Close all navbar slide drawers. 
	closeAllDrawersBut();

	// Start it up. 
	setTimeout(startItUp,500);
}


// TODO: Signup user. 
function userSignup() {
	userdata.push(
		[]
	);
}

// Login user. 
function userLogin() {
	
	// Get user input. 
	let input = document.getElementById('userid').value;
	console.log('input',input);
	
	// Get user id. 
	let id = 1*input;
	console.log('id',id);

	// Check if user id is valid. 
	let userIdValid = (input.length>0) && (id>-1) && (id<userdata.length);
	console.log('userIdValid',userIdValid);

	// Login if user id valid. 
	if(userIdValid) {

		// Save user id. 
		currentuserid = id;

		// Check if user requested to save user id. 
		let saveId = document.getElementById('saveid').checked;

		// Save user id if user requested. 
		if(saveId) localStorage.currentuserid = currentuserid;
		// Otherwise, clear any previously recorded user id. 
		else localStorage.currentuserid = -1;
	}

	// Close all navbar slide drawers. 
	closeAllDrawersBut();

	// Start it up. 
	setTimeout(startItUp,500);
}


// Logout user. 
function userLogout() {

	// Remove current user id. 
	currentuserid = -1;
	localStorage.currentuserid = currentuserid;

	// Close all navbar slide drawers. 
	closeAllDrawersBut();

	// Start it up. 
	setTimeout(startItUp,500);

	passTheToast('You are now logged out.');
}


// Check if user is logged in. 
function isLoggedIn() {
	return ( currentuserid>-1 && currentuserid<userdata.length );
}

