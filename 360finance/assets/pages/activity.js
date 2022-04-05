

// Load activity page. 
function loadActivityPage() {

	// Load transaction list. 
	loadTransactions();

	/****/

	// Load transaction list. 
	function loadTransactions() {

		// Get table body. 
		let tbody = document.querySelector('section#activity article#transactions div.content table.table tbody');
		// console.log('Table body:',tbody);

		// Initialize result. 
		let result = '';

		// Collect transactions. 
		// transactiondata.sort(sortByAmount);
		for(let i in transactiondata) {

			// Get transaction. 
			let t = transactiondata[i];
			// console.log(i,'Transaction:',t);

			// Determine category by category id and transaction amount. 
			let category = (t.transactionamount>0) ? incomecategorydata[t.categoryid] : spendcategorydata[t.categoryid];
			// console.log('Spend category:',category,category.categoryname);

			result += `
			<!-- row -->
			<tr class="row">
	
				<!-- cell -->
				<td class="cell icon" style="color:${ (category.clustercolor) ? (category.clustercolor) : (category.categorycolor) };">

					<!-- shell -->
					<div class="shell">

						<!-- icon -->
						<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">${ icondata[category.categoryicon] }</svg>
						<!-- /icon -->

					</div>
					<!-- /shell -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell date">

					<!-- data -->
					<span class="data m">${ monthNames[t.transactiondate.m - 1] }</span>
					<!-- /data -->

					<!-- data -->
					<span class="data d">${ t.transactiondate.d }</span>
					<!-- /data -->

					<!-- data -->
					<span class="data y">${ t.transactiondate.y }</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell description">

					<!-- data -->
					<span class="data">${ t.merchantname }</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell category" style="--dotcolor:${ (category.clustercolor) ? (category.clustercolor) : (category.categorycolor) };">

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