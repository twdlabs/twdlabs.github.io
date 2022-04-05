

// Load overview page. 
function loadOverviewPage() {

	// Load income summary. 
	loadIncomeSummary();

	// Load spending summary. 
	loadSpendSummary();

	// Load balance summary. 
	loadBalanceSummary();

	/****/

	// Load income summary: pie chart and legend. 
	function loadIncomeSummary() {

		// Create list of income category totals. 
		let incomecategorytotals = [  ];
		for(let id in incomecategorydata) {

			// Initialize category total. 
			let total = 0;

			// Aggregate given category total. 
			for(let t of transactiondata) {
				if(t.transactionamount>=0 && t.categoryid==id) total += 1*t.transactionamount;
			}
			incomecategorytotals.push(total);
		}
		// console.log('Income category totals:',incomecategorytotals);

		// Get pie chart element. 
		let incomechartbox = document.querySelector('section#overview article#incomesummary div.content figure#incomechart div.chart');
		// Create pie chart from given totals. 
		createPieChart(incomechartbox,incomecategorydata,incomecategorytotals,totalAmountEarned);
			
		// Get element for pie chart legend. 
		let incomelegendbox = document.getElementById('incomelegend');
		// Load legend for income pie chart. 
		createPieChartLegend(incomelegendbox,incomecategorydata,incomecategorytotals,totalAmountEarned);

		// Add total income amount to income pie chart label. 
		let label = document.querySelector('section#overview article#incomesummary div.content figure#incomechart div.chart div.disc');
		label.innerHTML = `
		<!-- full -->
		<span class="full">${ dollar(totalAmountEarned) }</span>
		<!-- /full -->

		<!-- brief -->
		<span class="brief">${ dollarBrief(totalAmountEarned) }</span>
		<!-- /brief -->`;
	}

	// Load spending summary: pie chart and legend. 
	function loadSpendSummary() {

		// Create list of spend category totals. 
		let spendcategorytotals = [  ];
		for(let id in spendcategorydata) {
			// Aggregate total for given category. 
			let categoryTotal = 0;
			for(let t of transactiondata) {
				if(t.transactionamount<=0 && t.categoryid==id) categoryTotal += (-1)*t.transactionamount;
			}
			spendcategorytotals.push(categoryTotal);
		}
		// console.log('Spend category totals:',spendcategorytotals);

		// Get pie chart element. 
		let spendchartbox = document.querySelector('section#overview article#spendsummary div.content figure#spendchart div.chart');
		// Create pie chart from given totals. 
		createPieChart(spendchartbox,spendcategorydata,spendcategorytotals,totalAmountSpent);
			
		// Get element for pie chart legend. 
		let spendlegendbox = document.getElementById('spendlegend');
		// Load legend for spending pie chart. 
		createPieChartLegend(spendlegendbox,spendcategorydata,spendcategorytotals,totalAmountSpent);

		// Add total spend amount to spend pie chart label. 
		let label = document.querySelector('section#overview article#spendsummary div.content figure#spendchart div.chart div.disc');
		label.innerHTML = `
		<!-- full -->
		<span class="full">${ dollar(totalAmountSpent) }</span>
		<!-- /full -->

		<!-- brief -->
		<span class="brief">${ dollarBrief(totalAmountSpent) }</span>
		<!-- /brief -->`;
	}

	// Load balance summary: pie chart and legend. 
	function loadBalanceSummary() {

		// Create list of binary balance category totals: spending & surplus. 
		let balancecategorytotals = [ totalAmountSpent, totalAmountEarned-totalAmountSpent ];
		// console.log('Balance category totals:',balancecategorytotals);

		// Get pie chart element. 
		let balancechartbox = document.querySelector('section#overview article#balancesummary div.content figure#balancechart div.chart');
		// Create pie chart from given totals. 
		createPieChart(balancechartbox,balancecategorydata,balancecategorytotals,totalAmountEarned);
			
		// Get element for pie chart legend. 
		let balancelegendbox = document.getElementById('balancelegend');
		// Load legend for balance pie chart. 
		createPieChartLegend(balancelegendbox,balancecategorydata,balancecategorytotals,totalAmountEarned,/* false */);

		// Add net balance amount to balance header. 
		let balancefigure = document.querySelector('section#overview article#balancesummary div.content figure#balance');
		balancefigure.innerHTML = dollar(totalAmountEarned-totalAmountSpent);
		// Add net balance amount to balance pie chart label. 
		let label = document.querySelector('section#overview article#balancesummary div.content figure#balancechart div.chart div.disc');
		label.innerHTML = `
		<!-- full -->
		<span class="full">${ dollar(totalAmountEarned-totalAmountSpent) }</span>
		<!-- /full -->

		<!-- brief -->
		<span class="brief">${ dollarBrief(totalAmountEarned-totalAmountSpent) }</span>
		<!-- /brief -->`;
	}
}
