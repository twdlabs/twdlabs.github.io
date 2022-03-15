

// Load overview page. 
function loadOverviewPage() {

	// Load income summary. 
	loadIncomeSummary();

	// Load spending summary. 
	loadSpendSummary();

	// Load balance summary. 
	loadBalanceSummary();

	// Load transaction list. 
	loadTransactions();

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
		let incomechartbox = document.querySelector('section#overview article#incomesummary div.content section#incomechart div.chart');
		// Create pie chart from given totals. 
		createPieChart(incomechartbox,incomecategorydata,incomecategorytotals,totalAmountEarned);
			
		// Get element for pie chart legend. 
		let incomelegendbox = document.getElementById('incomelegend');
		// Load legend for income pie chart. 
		createPieChartLegend(incomelegendbox,incomecategorydata,incomecategorytotals,totalAmountEarned);

		// Add total income amount to income pie chart label. 
		let label = document.querySelector('section#overview article#incomesummary div.content section#incomechart div.chart div.disc');
		label.innerHTML = dollarBrief(totalAmountEarned);
	}

	// Load spending summary: pie chart and legend. 
	function loadSpendSummary() {

		// Create list of spend category totals. 
		let spendcategorytotals = [  ];
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

		// Get pie chart element. 
		let spendchartbox = document.querySelector('section#overview article#spendsummary div.content section#spendchart div.chart');
		// Create pie chart from given totals. 
		createPieChart(spendchartbox,spendcategorydata,spendcategorytotals,totalAmountSpent);
			
		// Get element for pie chart legend. 
		let spendlegendbox = document.getElementById('spendlegend');
		// Load legend for spending pie chart. 
		createPieChartLegend(spendlegendbox,spendcategorydata,spendcategorytotals,totalAmountSpent);

		// Add total spend amount to spend pie chart label. 
		let label = document.querySelector('section#overview article#spendsummary div.content section#spendchart div.chart div.disc');
		label.innerHTML = dollarBrief(totalAmountSpent);
	}

	// Load balance summary: pie chart and legend. 
	function loadBalanceSummary() {

		// Create list of binary balance category totals: spending & surplus. 
		let balancecategorytotals = [ totalAmountSpent, totalAmountEarned-totalAmountSpent ];
		// console.log('Balance category totals:',balancecategorytotals);

		// Get pie chart element. 
		let balancechartbox = document.querySelector('section#overview article#balancesummary div.content section#balancechart div.chart');
		// Create pie chart from given totals. 
		createPieChart(balancechartbox,balancecategorydata,balancecategorytotals,totalAmountEarned);
			
		// Get element for pie chart legend. 
		let balancelegendbox = document.getElementById('balancelegend');
		// Load legend for balance pie chart. 
		createPieChartLegend(balancelegendbox,balancecategorydata,balancecategorytotals,totalAmountEarned,false);

		// Add net balance amount to balance header. 
		let headlabel = document.querySelector('section#overview article#balancesummary h2.head span#balance');
		headlabel.innerHTML = dollar(totalAmountEarned-totalAmountSpent);
		// Add net balance amount to balance pie chart label. 
		let label = document.querySelector('section#overview article#balancesummary div.content section#balancechart div.chart div.disc');
		label.innerHTML = dollarBrief(totalAmountEarned-totalAmountSpent);
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
			let category = (t.transactionamount>0) ? incomecategorydata[t.categoryid] : spendcategorydata[t.categoryid];
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
