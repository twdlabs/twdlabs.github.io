


// Initialize horizontal position of pointer. 
var lastPointX;

// const swipeActive = true;


// Initialize total earnings. 
var totalAmountEarned;

// Initialize total spending. 
var totalAmountSpent;
var totalSpendPerMonth = [ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ];	// TODO: Make extendable to budgeting for multiple years. 
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


	// Calculate account metrics. 
	function getAccountMetrics() {

		// Aggregate total earnings. 
		totalAmountEarned = 0;
		for(let t of transactiondata) {
			if(t.transactionamount>=0) totalAmountEarned += t.transactionamount;
		}
		// console.log('Total earnings:', dollar(totalAmountEarned) );

		// Aggregate total spending. 
		// Aggregate total spend per month. 
		totalAmountSpent = 0;
		for(let t of transactiondata) {
			// Check for spend transaction. 
			if(t.transactionamount<=0) {
				let transactionAmount = (-1 * t.transactionamount);
				totalAmountSpent += transactionAmount;

				let monthIndex = t.transactiondate.m-1;
				let alreadyValidAmount = !isNaN( totalSpendPerMonth[monthIndex] );
				if(alreadyValidAmount) totalSpendPerMonth[monthIndex] += transactionAmount;
				else totalSpendPerMonth[monthIndex] = transactionAmount;
			}
		}
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

