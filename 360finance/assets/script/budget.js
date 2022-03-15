

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
		let result = '';
		for(monthName of monthLabels) {
			let progressbars = createProgressBars(spendcategorydata,spendcategorytotals,monthName+' 2022');
			result += `
			<!-- budgetbox -->
			<section class="budgetbox box">${progressbars}</section>
			<!-- /budgetbox -->`;
			
		}
		
		// Get container for budget summaries. 
		let budgetsbox = document.querySelector('main.main section#budget article#budgetsummary div.content');

		// Add budgets to page. 
		budgetsbox.innerHTML = result;
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
			result += `
			<!-- bucket -->
			<div class="bucket">

				<label class="month">${ (n<10) ? ('0'+n) : (n) }</label>

			</div>
			<!-- /bucket -->`;
		}

		// Add result to page. 
		budgetbuckets.innerHTML = result;
	}
}
