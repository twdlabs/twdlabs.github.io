


// Create pie chart from given category data. 
function createPieChart(chartElement,categoryData,categoryTotals,totalAmount) {

	// Calculate category proportions, then angular degrees for pie chart segments. 
	let segmentDegrees = categoryTotals.map( (amount) => ( amount/totalAmount*360 ) );
	// console.log('segmentDegrees:',segmentDegrees);

	// Initialize conical gradient parameters. 
	let cgparams = '';
	// Initialize current angle position. 
	let currentAngle = 0;

	// Aggregate gradient parameters. 
	for(let i in segmentDegrees) {
		// console.log(i);

		// Calculate anglular positions for given category segment. 
		let beginAngle = currentAngle;
		let endingAngle = currentAngle + segmentDegrees[i];
		// console.log('beginAngle:',beginAngle);
		// console.log('endingAngle:',endingAngle);

		// Refresh current angle position. 
		currentAngle = endingAngle;

		// Get color for current category segment of pie chart. 
		let color = categoryData[i].categorycolor;
		
		// Append gradient parameters. 
		cgparams += (i>0) ? (', ') : ('');
		cgparams += `${color} ${ (1*beginAngle).toFixed(3) }deg, ${color} ${ (1*endingAngle).toFixed(3) }deg`;

		// Check for superfluous angle (e.g. rounding error). 
		var superfluous = currentAngle>360;
		if(superfluous) {
			var actuallysuperfluous = (1*currentAngle).toFixed(3) > 360;
			if(actuallysuperfluous) console.log('Overflow @ current angle:', `${ (1*currentAngle).toFixed(3) }deg` );
		}
	}

	// Complete gradient parameters filling empty space (if any). 
	if(!actuallysuperfluous) {
		let fillercolor = categoryData[0].categorycolor;
		cgparams += `, ${fillercolor} ${currentAngle}deg, ${fillercolor} 360deg`;
	}

	// console.log('Final gradient:\n'+`conic-gradient(${cgparams})`);

	// Apply conical gradient parameters. 
	chartElement.style.backgroundImage = 'conic-gradient(red, yellow, green, blue, black)';
	chartElement.style.backgroundImage = `conic-gradient(${cgparams})`;
}

// Load category names, numbers, and colors in pie chart legend element. 
function createPieChartLegend(legendElement,categoryData,categoryTotals,totalAmount,includeTotal=true) {

	// Create legend content: category items. 
	let result = '';
	for(i in categoryData) {

		// Get data for given category. 
		let category = categoryData[i];
		// console.log('Category:',category.categoryname);
		
		// Get proportion of total for given category. 
		let proportion = (categoryTotals[i]/totalAmount);
		// console.log('proportion:', (100*proportion).toFixed(1)+'%');

		// Append legend item for given category. 
		result += `
		<!-- item -->
		<div class="item">

			<!-- color -->
			<span class="color" style="background-color:${category.categorycolor};"></span>
			<!-- /color -->

			<!-- caption -->
			<span class="caption name">${category.categoryname}</span>
			<!-- /caption -->

			<!-- caption -->
			<span class="caption proportion">${ `(${ (100*proportion).toFixed(1) }%)` }</span>
			<!-- /caption -->

			<!-- space -->
			<span class="space"></span>
			<!-- /space -->

			<!-- caption -->
			<span class="caption amount">${ dollar(categoryTotals[i]) }</span>
			<!-- /caption -->

		</div>
		<!-- /item -->`;
	}

	// Append legend item for total. 
	if(includeTotal) result += `
	<!-- item -->
	<div class="item total">

		<!-- caption -->
		<span class="caption name">Total</span>
		<!-- /caption -->

		<!-- space -->
		<span class="space"></span>
		<!-- /space -->

		<!-- caption -->
		<span class="caption amount">${ dollar(totalAmount) }</span>
		<!-- /caption -->

	</div>
	<!-- /item -->`;

	// Add legend content to page. 
	legendElement.innerHTML = result;
}


// Create progress bars from given category data. 
// Create progress bars based on spend category data: budget spend limits and actual spend totals. 
function createProgressBars(categoryData,categoryTotals,monthIndex) {
	// console.log('Category Data:', categoryData);
	// console.log('Category Totals:', categoryTotals);

	// Initialize total monthly budget amount. 
	let totalMonthlyBudgetAmount = 0;

	// Create progress bars: category items. 
	let result = '';
	for(i in categoryData) {

		// Get data for given category. 
		let category = categoryData[i];
		// console.log('\nCategory:',category.categoryname);
		// console.log('Categorical Limit:', category.budgetmonthlylimit);
		// console.log('Categorical Spending:', categoryTotals[i]);
		
		// Get proportion of budget limit spent for given category. 
		let proportion = (categoryTotals[i]/category.budgetmonthlylimit);
		// console.log('Spend Proportion:', proportion);

		// Create displayable percentage using calculated proportion. 
		let pct = (100*proportion).toFixed(1);
		// console.log('Spend Percentage:', pct+'%');

		// Append progress bar for given category. 
		result += `
		<!-- progressbar -->
		<div class="progressbar ${ getSpendStatus(pct) }">

			<!-- label -->
			<div class="label">
				
				<!-- name -->
				<span class="name">${category.categoryname}</span>
				<!-- /name -->

				<!-- remainder -->
				<span class="remainder">
					<span class="num">${ dollar0(category.budgetmonthlylimit - categoryTotals[i]) }</span>
					<span class="suffix">${ (pct>100) ? ('Over') : ('Left') }</span>
				</span>
				<!-- /remainder -->
				
			</div>
			<!-- /label -->

			<!-- bar -->
			<div class="bar" style="background:${category.categorycolor} linear-gradient(90deg, transparent ${pct}% , var(--white) ${pct}% );">
				<span class="caption">${ dollar0(categoryTotals[i]) } of ${ dollar0(category.budgetmonthlylimit) }</span>
			</div>
			<!-- /bar -->
			
		</div>
		<!-- /progressbar -->`;

		// Add to total monthly budget amount. 
		totalMonthlyBudgetAmount += category.budgetmonthlylimit;
	}

	// Get proportion of budget limit for entire budget. 
	// let totalSpendThisMonth = totalAmountSpent;
	let totalSpendThisMonth = totalSpendPerMonth[monthIndex];
	let proportion = (totalSpendThisMonth/totalMonthlyBudgetAmount);
	let pct = (100*proportion).toFixed(1);
	// console.log('Total Monthly Budget proportion:', pct+'%');

	// Append progress bar for entire budget. 
	result += `
	<!-- progressbar -->
	<div class="progressbar total ${ getSpendStatus(pct) }">

		<!-- label -->
		<div class="label">
			
			<!-- name -->
			<span class="name">Total Monthly Budget</span>
			<!-- /name -->

			<!-- remainder -->
			<span class="remainder">
				<span class="num">${ dollar0(totalMonthlyBudgetAmount - totalSpendThisMonth) }</span>
				<span class="suffix">${ (pct>100) ? ('Over') : ('Left') }</span>
			</span>
			<!-- /remainder -->
			
		</div>
		<!-- /label -->

		<!-- bar -->
		<div class="bar" style="background:grey linear-gradient(90deg, transparent ${pct}% , var(--white) ${pct}% );">
			<span class="caption">${ dollar0(totalSpendThisMonth) } of ${ dollar0(totalMonthlyBudgetAmount) }</span>
		</div>
		<!-- /bar -->
		
	</div>
	<!-- /progressbar -->`;

	// Return progress bars. 
	return result;

	// Get spend status for budget category. 
	function getSpendStatus(pct) {
		// console.log('\tPercent:', pct);

		let result = '';
		if(pct<80) result = 'good';
		else {
			if(pct<100) result = 'slow';
			else if(pct==100) result = '';
			else if(pct>100) result = 'over';
		}

		// console.log('\tType:', result);
		return result;
		// return (pct>80)  ?  ( (pct>100) ? ('over') : ('slow') )  :  ('good');
	}
}
