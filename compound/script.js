


// Get user input fields. 
let inputfields = {
	// Get input field: principal amount. 
	principalamount:document.querySelector('div#container main.window div.input input#principalamount'),
	// Get input field: annual interest rate. 
	annualinterestrate:document.querySelector('div#container main.window div.input input#annualinterestrate'),
	// Get input field: number of years in term. 
	numtermyears:document.querySelector('div#container main.window div.input input#numtermyears'),
	// Get input field: number of compounding periods per year. 
	numcompoundsperyear:document.querySelector('div#container main.window div.input input#numcompoundsperyear'),
	// Get input field: amount of periodic contribution. 
	contributionamount:document.querySelector('div#container main.window div.input input#contributionamount'),
	// Get input field: number of contribution periods per year. 
	numcontributionsperyear:document.querySelector('div#container main.window div.input input#numcontributionsperyear'),
};

// Get components of output overlay. 
const outputoverlay = {

	// Get output overlay. 
	overlay:document.querySelector('div#container aside.overlay'),

	// Get output window. 
	window:document.querySelector('div#container aside.overlay main.window'),

	// Get output section: compound interest growth. 
	futuregrowth:{
		// Get section. 
		section:document.querySelector('div#container aside.overlay main.window section#futuregrowth'),
		// Get destination for result list. 
		resultlist:document.querySelector('div#container aside.overlay main.window section#futuregrowth ul.resultlist'),
		// Get destination for body of compounding growth schedule. 
		timeschedulebody:document.querySelector('div#container aside.overlay main.window section#futuregrowth details.block table.schedule tbody.body'),
	},
	// Get output section: loan amortization. 
	loanamortization:{
		// Get section. 
		section:document.querySelector('div#container aside.overlay main.window section#loanamortization'),
		// Get destination for result list. 
		resultlist:document.querySelector('div#container aside.overlay main.window section#loanamortization ul.resultlist'),
		// Get destination for body of loan payment schedule. 
		timeschedulebody:document.querySelector('div#container aside.overlay main.window section#loanamortization details.block table.schedule tbody.body'),
	},


};


/*****/


// Handle events. 
handleEvents();


/*****/


// Dispatch calculation. 
function dispatchCalculation() {

	// Get selected calculation. 
	let selectedcalculationbox = document.querySelector('div#container main.window section.input ul.inputlist li.inputitem div.input input.switchchoice:checked');
	let selectedcalculation = selectedcalculationbox.value;
	console.log('Selected calculation:',selectedcalculation);

	// Get user input values. 
	let userinputvalues = getUserInputValues();
	console.log('User input values:',userinputvalues);

	// Open output overlay window. 
	openOutput(selectedcalculation);

	// Display loan amortization (if selected). 
	if(selectedcalculation=='loanamortization') displayLoan(userinputvalues);
	// Display future growth (if selected). 
	if(selectedcalculation=='futuregrowth') displayGrowth(userinputvalues);

	/****/

	// Receive values from user input fields. 
	function getUserInputValues() {
	
		// Initialize user input values. 
		let result = {
			// Get value from input field: principal amount. 
			principalamount: 1 * inputfields['principalamount'].value,
			// Get value from input field: annual interest rate. 
			annualinterestrate: 1 * inputfields['annualinterestrate'].value / 100,
			// Get value from input field: number of years in term. 
			numtermyears: 1 * inputfields['numtermyears'].value,
			// Get value from input field: number of compounding periods per year. 
			numcompoundsperyear: 1 * inputfields['numcompoundsperyear'].value,
			// Get value from input field: amount of periodic contribution. 
			contributionamount: 1 * inputfields['contributionamount'].value,
			// Get value from input field: frequency per year of periodic contribution. 
			numcontributionsperyear: 1 * inputfields['numcontributionsperyear'].value,
		};
		// console.log('Principal amount:',principalamount);
		// console.log('Annual interest rate:',annualinterestrate);
		// console.log('Number of years:',numtermyears);
		// console.log('Compounding periods per year:',numcompoundsperyear);
		// console.log('Contribution amount:',contributionamount);
		// console.log('Number of contributions per year:',numcontributionsperyear);
	
		// Return user input values. 
		return result;
	}
}

// Display details of loan amortization. 
function displayLoan(userinputvalues) {

	// Get components of future value calculation. 
	let P = userinputvalues['principalamount'] ? userinputvalues['principalamount'] : 0;
	let r = userinputvalues['annualinterestrate'] ? userinputvalues['annualinterestrate'] : 0.00;
	let t = userinputvalues['numtermyears'] ? userinputvalues['numtermyears'] : 1;
	let n = userinputvalues['numcompoundsperyear'] ? userinputvalues['numcompoundsperyear'] : 12;
	let c = userinputvalues['contributionamount'] ? userinputvalues['contributionamount'] : 0;
	let f = userinputvalues['numcontributionsperyear'] ? userinputvalues['numcontributionsperyear'] : 1;
	let C = c * f/n;
	// let C = c * n/f;

	// Get amount of loan payment. 
	let paymentamount = getLoanPayment();
	console.log('Payment amount:',paymentamount);

	// Display results of loan amortization. 
	showLoanResults();

	// Display schedule for loan amortization. 
	showAmortizationSchedule();

	/****/

	// Get amount of loan payment. 
	function getLoanPayment() {
		if(r==0) return P/(n*t);

		// Calculate payment amount. 
		let pow = Math.pow( (1+r/n) , (n*t) );
		// console.log('Multiplying factor:',pow);
		let result = P*(r/n) / ( 1 - 1/pow );
	
		// Return resulting amount for loan payment. 
		return result;
	}

	// Display results of loan amortization. 
	function showLoanResults() {

		// Define results. 
		let resultitems = [
			{
				name:'Principal amount',
				value:P,
			},
			{
				name:'Annual rate (APY)',
				value:r,
			},
			{
				name:'Term',
				value:t,
			},
			{
				name:'Compoundings per yr',
				value:n,
			},
			// {
			// 	name:'xyz',
			// 	value:xyz,
			// },
			// {
			// 	name:'xyz',
			// 	value:xyz,
			// },
			{
				name:'Payment amount',
				value:dollar(paymentamount),
			},
		];

		// Display loan payment. 
		outputoverlay['loanamortization']['resultlist'].innerHTML = createResultsLayout(resultitems);
	}

	// Display schedule for loan amortization. 
	function showAmortizationSchedule() {

		// Initialize layout for schedule. 
		let schedulelayout = '';

		// Initialize loan balance. 
		let loanbalance = P;
		// Save initial row to schedule layout. 
		schedulelayout += createScheduleRowLayout( 0 , 0 , -P , loanbalance );

		// Go thru each compounding period. 
		for(let index=1 ; index<=(n*t) ; index++) {
			let prepaymentloanbalance = loanbalance;

			// Compound interest into sum value. 
			loanbalance *= (1 + r/n);
			loanbalance -= paymentamount;
			// TODO: Subtract periodic payment from loan balance. 
			// loanbalance -= C;

			// Save current row to schedule layout. 
			schedulelayout += createScheduleRowLayout( index , prepaymentloanbalance , /* -1* */paymentamount , loanbalance );
		}
	
		// Display layout for schedule. 
		outputoverlay['loanamortization']['timeschedulebody'].innerHTML = schedulelayout;

		/***/

		// TODO: Create row layout for amortization schedule. 
		function createScheduleRowLayout(pd,balA,totalpaid,balB) {
			let paidprincipal = balA - balB;
			let paidinterest = totalpaid - paidprincipal;

			// Compile row layout. 
			return `
			<!-- row -->
			<tr class="row">
		
				<!-- cell -->
				<td class="cell p">
		
					<!-- caption -->
					<span class="caption">${ pd }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
				<!-- cell -->
				<td class="cell v">
		
					<!-- caption -->
					<span class="caption">${ dollar(balA) }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
				<!-- cell -->
				<td class="cell v">
		
					<!-- caption -->
					<span class="caption">${ dollar(totalpaid) }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
				<!-- cell -->
				<td class="cell v">
		
					<!-- caption -->
					<span class="caption">${ dollar(balB) }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
				<!-- cell -->
				<td class="cell v">
		
					<!-- caption -->
					<span class="caption">${ dollar(paidprincipal) }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
				<!-- cell -->
				<td class="cell v">
		
					<!-- caption -->
					<span class="caption">${ dollar(paidinterest) }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
			</tr>
			<!-- /row -->`;
		}
	}
}

// Display details of future growth. 
function displayGrowth(userinputvalues) {

	// Get components of future value calculation. 
	let P = userinputvalues['principalamount'] ? userinputvalues['principalamount'] : 0;
	let r = userinputvalues['annualinterestrate'] ? userinputvalues['annualinterestrate'] : 0.00;
	let t = userinputvalues['numtermyears'] ? userinputvalues['numtermyears'] : 1;
	let n = userinputvalues['numcompoundsperyear'] ? userinputvalues['numcompoundsperyear'] : 12;
	let c = userinputvalues['contributionamount'] ? userinputvalues['contributionamount'] : 0;
	let f = userinputvalues['numcontributionsperyear'] ? userinputvalues['numcontributionsperyear'] : 1;
	let C = c * f/n;
	// let C = c * n/f;

	// Display results of compounding growth. 
	showGrowthResults();

	// Display schedule for compounding growth. 
	showGrowthSchedule();

	/****/

	// Display results of compounding growth. 
	function showGrowthResults() {

		// Initialize future value. 
		let result = 0;
	
		// Calculate future value (compounding). 
		let pow = Math.pow( (1+r/n) , (n*t) );
		console.log('Multiplying factor:',pow);
		result += P * pow;
		result += C * [ pow - 1 ] / (r/n);
		console.log('Compound result:',result);
		let compoundfuturevalue = result;
	
		// Calculate future value (simple). 
		result = P * (1 + r*t);
		if(result==0) result += (c*f*t) * (1+r);
		console.log('Simple result:',result);
		let simplefuturevalue = result;

		// Define results. 
		let resultitems = [
			{
				name:'Principal amount',
				value:P,
			},
			{
				name:'Annual rate (APY)',
				value:r,
			},
			{
				name:'Term',
				value:t,
			},
			{
				name:'Compoundings per yr',
				value:n,
			},
			// {
			// 	name:'xyz',
			// 	value:xyz,
			// },
			// {
			// 	name:'xyz',
			// 	value:xyz,
			// },
			{
				name:'Simple',
				value:dollar(simplefuturevalue),
				// value:dollarBrief(simplefuturevalue),
			},
			{
				name:'Compound',
				value:dollar(compoundfuturevalue),
				// value:dollarBrief(compoundfuturevalue),
			},
		];

		// Display results of future growth. 
		outputoverlay['futuregrowth']['resultlist'].innerHTML = createResultsLayout(resultitems);
	}

	// Display schedule for compounding growth. 
	function showGrowthSchedule() {

		// Initialize layout for schedule. 
		let schedulelayout = '';

		// Initialize sum value. 
		let sumvalue = P;
		// Save initial row to schedule layout. 
		schedulelayout += createScheduleRowLayout( 0 , sumvalue );

		// Go thru each compounding period. 
		for(let index=1 ; index<=(n*t) ; index++) {

			// Compound interest into sum value. 
			sumvalue *= (1 + r/n);
			// Add periodic contribution to sum value. 
			sumvalue += C;

			// Save current row to schedule layout. 
			schedulelayout += createScheduleRowLayout( index , sumvalue );
		}

		// Display layout for schedule. 
		outputoverlay['futuregrowth']['timeschedulebody'].innerHTML = schedulelayout;

		/***/

		// Create row layout for growth schedule. 
		function createScheduleRowLayout(pd,fv) {
	
			// Compile row layout. 
			return `
			<!-- row -->
			<tr class="row">
		
				<!-- cell -->
				<td class="cell p">
		
					<!-- caption -->
					<span class="caption">${ pd }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
				<!-- cell -->
				<td class="cell v">
		
					<!-- caption -->
					<span class="caption">${ dollar(fv) }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
			</tr>
			<!-- /row -->`;
		}
	}
}

// Create layout for output results. 
function createResultsLayout(resultitems) {

	// Initialize result layout. 
	let resultlayout = '';

	// Go thru each result item. 
	for(let item of resultitems) {

		// Compile layout for result item. 
		resultlayout += `
		<!-- resultitem -->
		<li class="resultitem">

			<!-- result -->
			<div class="result">

				<!-- caption -->
				<span class="caption">${ item['name'] }</span>
				<!-- /caption -->

				<!-- value -->
				<span class="value">${ item['value'] }</span>
				<!-- /value -->

			</div>
			<!-- /result -->

		</li>
		<!-- /resultitem -->`;
	}

	// Return resulting layout. 
	return resultlayout;
}

// Open output overlay window. 
function openOutput(selectedcalculation) {
	// console.log('selectedcalculation:',selectedcalculation);

	// TODO: Display selected output section. 
	if(selectedcalculation=='futuregrowth') {
		outputoverlay['futuregrowth']['section'].classList.remove('gone');
		outputoverlay['loanamortization']['section'].classList.add('gone');
	}
	if(selectedcalculation=='loanamortization') {
		outputoverlay['futuregrowth']['section'].classList.add('gone');
		outputoverlay['loanamortization']['section'].classList.remove('gone');
	}

	// Hide overlay. 
	outputoverlay['overlay'].classList.remove('gone');
}
// Close output overlay window. 
function closeOutput() {

	// Hide overlay. 
	outputoverlay['overlay'].classList.add('gone');
}


// Handle events. 
function handleEvents() {

	// Go thru each input field. 
	for(let key in inputfields) {

		// Get user input field. 
		let inputfield = inputfields[key];

		// Enable response to key press in input field. 
		inputfield.addEventListener('keyup', respondToKey);
	}

	// Enable toggling of output overlay. 
	outputoverlay['overlay'].addEventListener('click',respondToClick);

	/****/

	// Respond to key. 
	function respondToKey(event) {
		// console.log('Responding to key',event.keyCode,event.key);

		// Check if enter key pressed. 
		if(event.keyCode==13 || event.key=='Enter') {

			// Dispatch calculation. 
			dispatchCalculation();
		}
	}

	// Respond to click. 
	function respondToClick(event) {
	
		// Get clicked element. 
		let clickedelement = event.target;
		// event.currentTarget;
		// Get window element. 
		let overlaywindow = outputoverlay['window'];
	
		// Check if clicked inside window. 
		let clickedinsidewindow = overlaywindow.contains(clickedelement);
		// Check if clicked outside window. 
		let clickedoutsidewindow = !clickedinsidewindow;
		// console.log('Clicked outside window:',clickedoutsidewindow);
	
		// Close output overlay if clicked outside window. 
		if(clickedoutsidewindow) closeOutput();
	}
}
