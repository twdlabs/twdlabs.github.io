


// Initialize horizontal position of pointer. 
var lastPointX;

// const swipeActive = true;


// Initialize total earnings. 
var totalAmountEarned;

// Initialize total spending. 
var totalAmountSpent;

// Initialize total spending per month. 
var monthlySpendTotals = {
	// 2022:[ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ],
};
var totalSpendPerMonth = [ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ];	// TODO: Make extendable to budgeting for multiple years. (this is now cancellable)

// Initialize total spending per category. 
// var totalSpendPerCategory = [];


/*****/


// Get the app started. 
startItUp();


/*****/


// Get the app started. 
function startItUp() {


	// Calculate account metrics. 
	getAccountMetrics();


	// Load navigation bar. 
	loadNavigation();
	
	// Reset user data to default. 
	setDefaultUserData();
	// Load user data. 
	loadUserData(true);
	
	// Load page content. 
	loadPageContent();
	

	// Handle events. 
	handleEvents();


	// Open initially selected page. 
	openSelectedPage();


	/*****/


	// Calculate account metrics.  <------ Extend to multiple years. This is where it's at !!!!!
	function getAccountMetrics() {

		// Aggregate total earnings, total spending, and total spend per month. 
		totalAmountEarned = 0;
		totalAmountSpent = 0;
		monthlySpendTotals = {};
		for(let t of transactiondata) {

			// Check for income transaction. 
			if(t.transactionamount>0) {

				// Add transaction amount to total income amount. 
				totalAmountEarned += t.transactionamount;
			}

			// Check for spend transaction. 
			/* if(t.transactionamount<=0) */
			else {

				// Add transaction amount to total spend amount. 
				let transactionAmount = (-1 * t.transactionamount);
				totalAmountSpent += transactionAmount;

				// Get month and year. 
				let monthIndex = t.transactiondate.m-1;
				let yearOfTransaction = t.transactiondate.y;

				// Check if year is already represented in data. 
				let yearNotFound = !( monthlySpendTotals[yearOfTransaction] );

				// Add year to object list if non-existent. 
				if(yearNotFound) monthlySpendTotals[yearOfTransaction] = [ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ];
				// Add transaction amount to corresponding monthly spend amount. 
				monthlySpendTotals[yearOfTransaction][monthIndex] += transactionAmount;

				// Add transaction amount to corresponding monthly spend amount. <--- (cancellable)
				// let alreadyValidAmount = !isNaN( totalSpendPerMonth[monthIndex] );
				// if(alreadyValidAmount) totalSpendPerMonth[monthIndex] += transactionAmount;
				// else totalSpendPerMonth[monthIndex] = transactionAmount;
			}
		}
		// console.log('Total earnings:', dollar(totalAmountEarned) );
		// console.log('Total spending:', dollar(totalAmountSpent) );
		// console.log('Spending per month:', totalSpendPerMonth.map(dollar) );

		// Aggregate net balance. 
		// netBalance = 0;
		// for(let t of transactiondata) {
		// 	netBalance += t.transactionamount;
		// }
		// console.log('Net balance:', dollar(totalAmountEarned-totalAmountSpent) );
		// console.log('Net balance:', dollar(netBalance) );
	}

	// Load page content. 
	function loadPageContent() {
	
		// Load overview page. 
		loadOverviewPage();
		
		// Load activity page. 
		loadActivityPage();
		
		// Load budget page. 
		loadBudgetPage();
	
		// Load taxes page. 
		loadTaxesPage();
		
		// Load investing page. 
		loadInvestingPage();
		
		// Load insurance page. 
		loadInsurancePage();
		
	}
}

