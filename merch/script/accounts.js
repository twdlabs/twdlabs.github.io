

/* ACCOUNT */


// Update user items in account drawer. 
function updateAccounts() {
	console.log('Updating accounts...');

	// Add element for each account item. 
	let result = '';
	for(account of accountData) {

		// Get product by id. 
		// p = productdata[item.productid];

		// Create account element. 
		result += `
		<!-- item -->
		<div class="item" data-userid="0">

			<!-- photo -->
			<div class="photo" style="background-image:url('${account.photourl}');"></div>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- name -->
				<div class="name">${account.fname} ${account.lname}</div>
				<!-- /name -->

				<!-- email -->
				<div class="email">${account.email}</div>
				<!-- /email -->

			</div>
			<!-- /content -->

		</div>
		<!-- /item -->`;
	}
	// console.log('result',result);

	// Get inside of account drawer. 
	let accountbox = document.querySelector('div#accountbox div.inner');
	// console.log('accountbox',accountbox);

	// Add elements to account drawer. 
	accountbox.innerHTML = result;
}

