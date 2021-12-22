

/* ACCOUNT */


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

