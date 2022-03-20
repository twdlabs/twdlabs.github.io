

// Load budget page. 
function loadBudgetPage() {

	// Load annual budget summary. 
	loadAnnualSummary();

	// Load monthly budget summaries. 
	loadMonthlySummaries();

	/****/

	// Load annual budget summary. 
	function loadAnnualSummary() {

		// Get budget container. 
		let budgetbuckets = document.querySelector('section#budget article#annualsummary div.content article.buckets');
		// console.log('budgetbuckets:',budgetbuckets);

		// Create series of buckets. 
		let result = '';
		for(let i in monthInitials) {
			let n = 1*i + 1;
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

	// Load monthly budget summaries: enhanced progress bars. 
	function loadMonthlySummaries() {
		// console.log('spendcategorydata:',spendcategorydata);

		// Create progress bars based on spend category data for each month: budget spend limits and actual spend totals. 
		// Add data for each month. 
		let result = '';
		for(let monthIndex in monthFullNames) {

			// Get month name for given month. 
			let monthName = monthFullNames[monthIndex];

			// Create list of spend category totals for given month. 
			let spendcategorytotals = [  ];
			for(let id in spendcategorydata) {
				// Initialize category total. 
				let total = 0;
				// Aggregate given category total. 
				for(let t of transactiondata) {
	
					// Check for spend transaction. 
					let isSpendTransaction = (t.transactionamount<=0);
					// Check for matching category. 
					let matchingCategory = (t.categoryid==id);
					// Check for matching month. 
					let matchingMonth = (t.transactiondate.m-1==monthIndex);
	
					// Include amount in total if matches all criteria. 
					if(isSpendTransaction && matchingCategory && matchingMonth) {
						total += (-1)*t.transactionamount;
					}
				}
				spendcategorytotals.push(total);
			}
			// console.log(`Spend category totals (${monthName}):`,spendcategorytotals);
			
			// Create category progress bars for spending in given month. 
			let progressbars = createProgressBars(spendcategorydata,spendcategorytotals,monthIndex,`${monthName} 2022`);

			// Put category progress bars in budget box and add to result. 
			result += `
			<!-- budgetbox -->
			<section class="budgetbox box">${progressbars}</section>
			<!-- /budgetbox -->`;
		}
		
		// Get container for budget summaries. 
		let budgetsbox = document.querySelector('main.main section#budget article#monthlysummary div.content');

		// Add budgets to page. 
		budgetsbox.innerHTML = result;
	}
}
