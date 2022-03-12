

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
			console.log('Overflow @ current angle:', `${ (1*currentAngle).toFixed(3) }deg` );
		}
	}

	// Complete gradient parameters filling empty space (if any). 
	if(!superfluous) {
		let fillercolor = categoryData[0].categorycolor;
		cgparams += `, ${fillercolor} ${currentAngle}deg, ${fillercolor} 360deg`;
	}

	console.log('Final gradient:\n'+`conic-gradient(${cgparams})`);

	// Apply conical gradient parameters. 
	chartElement.style.backgroundImage = 'conic-gradient(red, yellow, green, blue, black)';
	chartElement.style.backgroundImage = `conic-gradient(${cgparams})`;
}


// Load category names, numbers, and colors in pie chart legend element. 
function createPieChartLegend(legendElement,categoryData,categoryTotals,totalAmount) {

	// Create legend content: category items. 
	let result = '';
	for(i in categoryData) {

		// Get data for given category. 
		let category = categoryData[i];
		// console.log('category:',category);
		
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

	// Add legend content to page. 
	legendElement.innerHTML = result;
}
