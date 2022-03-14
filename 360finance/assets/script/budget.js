

// TODO: Load budget page. 
function loadBudgetPage() {

	// Load budget summary. 
	loadBudgetSummaries();

	// Load budget. 
	loadOldBudget();

	/****/

	// Load budget summaries: enhanced progress bars. 
	function loadBudgetSummaries() {
		// console.log('spendcategorydata:',spendcategorydata);

		// Create list of spend category totals. 
		let spendcategorytotals = [  ];
		// console.log('spendcategorytotals:',spendcategorytotals);
		
		// Add to list of spend category totals. 
		for(let id in spendcategorydata) {

			// Initialize category total. 
			let total = 0;

			// Aggregate given category total. 
			for(let t of transactiondata) {
				if(t.transactionamount<=0 && t.categoryid==id) total += (-1)*t.transactionamount;
			}
			spendcategorytotals.push(total);
		}
		// console.log('Spend category totals:',spendcategorytotals);

		// Create progress bars based on spend category data for each month: budget spend limits and actual spend totals. 
		// TODO: Add data for each month. 
		let progressbars = '';
		// for() {
			progressbars += createProgressBars(spendcategorydata,spendcategorytotals);
			
		// }
		
		// Get container for budget summaries. 
		let budgetsbox = document.querySelector('main.main section#budget article#budgetsummary div.content');

		// Add progress bars to page. 
		budgetsbox.innerHTML = `
		<!-- budgetbox -->
		<section class="budgetbox box">${progressbars}</section>
		<!-- /budgetbox -->`;

		// Activate show mode toggle on all budget boxes. 
		activateShowModeToggle();

		/*****/

		// Activate show mode toggle on all budget boxes. 
		function activateShowModeToggle() {

			// Get all budget boxes. 
			let budgetboxes = document.querySelectorAll('main.main section#budget article#budgetsummary div.content section.budgetbox');

			// Go thru all budget boxes. 
			for(let box of budgetboxes) {
				box.addEventListener('click', function(event) {
					// console.log(this);
					this.classList.toggle('showmode');
					// console.log(this);
				});
			}
		}
	}

	// Load budget on budget page. 
	function loadOldBudget() {

		// Get budget container. 
		let budgetbuckets = document.querySelector('section#budget article.buckets');
		// console.log('budgetbuckets:',budgetbuckets);

		// Initialize result. 
		let result = '';

		for(let i in monthLabels) {
			let n = i*1 + 1;
			let ml = monthLabels[i];
			result += `
			<!-- bucket -->
			<div class="bucket">

				<label class="month">${ (false) ? (ml) : ( (n<10) ? ('0'+n) : (n) ) }</label>

			</div>
			<!-- /bucket -->`;
		}

		// Add result to page. 
		budgetbuckets.innerHTML = result;
	}
}
