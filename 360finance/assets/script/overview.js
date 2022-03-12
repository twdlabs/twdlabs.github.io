

// Load overview page. 
function loadOverviewPage() {

	// Load income pie chart. 
	loadIncomeChart();

	// Load spending pie chart. 
	loadSpendChart();

	// Load balance pie chart. 
	loadBalanceChart();

	// Load transaction list. 
	loadTransactions();

	/****/

	// Load income pie chart. 
	function loadIncomeChart() {

		// Create list of income category totals. 
		let categoryTotals = [  ];
		for(let id in incomecategory) {

			// Initialize category total. 
			let total = 0;

			// Aggregate given category total. 
			for(let t of transactiondata) {
				if(t.transactionamount>=0 && t.categoryid==id) total += 1*t.transactionamount;
			}
			categoryTotals.push(total);
		}
		// console.log('categoryTotals:',categoryTotals);

		// Get pie chart element. 
		let incomechartbox = document.querySelector('section#overview article#incomesummary div.content section#incomechart div.chart');
		// Create pie chart from given totala. 
		createPieChart(incomechartbox,incomecategory,categoryTotals,totalAmountEarned);
			
		// Get element for pie chart legend. 
		let incomelegendbox = document.getElementById('incomelegend');
		// Load legend for income pie chart. 
		createPieChartLegend(incomelegendbox,incomecategory,categoryTotals,totalAmountEarned);
	}

	// Load spending pie chart. 
	function loadSpendChart() {

		// Create list of spend category totals. 
		let categoryTotals = [  ];
		for(let id in spendcategory) {

			// Initialize category total. 
			let total = 0;

			// Aggregate given category total. 
			for(let t of transactiondata) {
				if(t.transactionamount<=0 && t.categoryid==id) total += (-1)*t.transactionamount;
			}
			categoryTotals.push(total);
		}
		// console.log('categoryTotals:',categoryTotals);

		// Get pie chart element. 
		let spendchartbox = document.querySelector('section#overview article#spendsummary div.content section#spendchart div.chart');
		// Create pie chart from given totala. 
		createPieChart(spendchartbox,spendcategory,categoryTotals,totalAmountSpent);
			
		// Get element for pie chart legend. 
		let spendlegendbox = document.getElementById('spendlegend');
		// Load legend for spending pie chart. 
		createPieChartLegend(spendlegendbox,spendcategory,categoryTotals,totalAmountSpent);
	}

	// Load balance pie chart. 
	function loadBalanceChart() {

		// Create list of binary balance category totals: spending & surplus. 
		let categoryTotals = [ totalAmountSpent, totalAmountEarned-totalAmountSpent ];
		console.log('categoryTotals:',categoryTotals);

		// Get pie chart element. 
		let balancechartbox = document.querySelector('section#overview article#balancesummary div.content section#balancechart div.chart');
		// Create pie chart from given totala. 
		createPieChart(balancechartbox,balancecategory,categoryTotals,totalAmountEarned);
			
		// Get element for pie chart legend. 
		let balancelegendbox = document.getElementById('balancelegend');
		// Load legend for balance pie chart. 
		createPieChartLegend(balancelegendbox,balancecategory,categoryTotals,totalAmountEarned);
	}

	// Load transaction list. 
	function loadTransactions() {

		// Get table body. 
		let tbody = document.querySelector('section#overview article#transactions div.content table.table tbody');
		// console.log('Table body:',tbody);

		// Initialize result. 
		let result = '';

		// Collect transactions. 
		// transactiondata.sort(sortByAmount);
		for(let i in transactiondata) {
			let t = transactiondata[i];
			let category = (t.transactionamount>0) ? incomecategory[t.categoryid] : spendcategory[t.categoryid];
			// console.log(i,'Transaction:',t);
			// console.log('Spend category:',category,category.categoryname);
			result += `
			<!-- row -->
			<tr class="row">
	
				<!-- cell -->
				<td class="cell icon" style="color:${ (category.clustercolor) ? (category.clustercolor) : (category.categorycolor) };">

					<!-- data -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">${ icondata[category.categoryicon] }</svg>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell date">

					<!-- data -->
					<span class="data">Mar 9, 2022</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell description">

					<!-- data -->
					<span class="data">${t.merchantname}</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell category" style="color:${ (category.clustercolor) ? (category.clustercolor) : (category.categorycolor) };">

					<!-- data -->
					<span class="data">${ category.categoryname }</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell amount">

					<!-- data -->
					<span class="data${ (t.transactionamount>0) ? (' income') : ('') }">${ formatCurrency(t.transactionamount) }</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

			</tr>
			<!-- /row -->`;
		}

		// Add result to page. 
		tbody.innerHTML = result;

		/****/

		// Format currency. 
		function formatCurrency(n) {
			return dollar(n);
		}

		// Sort by amount. 
		function sortByAmount(tA,tB) {
			return tB.transactionamount - tA.transactionamount;
		}
	}
}
