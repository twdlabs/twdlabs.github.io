


// Get user input fields. 
let inputfields = {
	// Get input field: principal amount. 
	principalamount: document.querySelector('div#container main.main div.input input#principalamount'),
	// Get input field: annual interest rate. 
	annualinterestrate: document.querySelector('div#container main.main div.input input#annualinterestrate'),
	// Get input field: number of years in term. 
	numtermyears: document.querySelector('div#container main.main div.input input#numtermyears'),
	// Get input field: number of compounding periods per year. 
	numcompoundsperyear: document.querySelector('div#container main.main div.input input#numcompoundsperyear'),
	// Get input field: amount of periodic contribution. 
	contributionamount: document.querySelector('div#container main.main div.input input#contributionamount'),
	// Get input field: number of contribution periods per year. 
	numcontributionsperyear: document.querySelector('div#container main.main div.input input#numcontributionsperyear'),
};

// Get output windows. 
let outputwindows = {
	// Get output window: loan amortization. 
	la: document.querySelector('div#container main.main.la'),
	// Get output window: future growth. 
	fg: document.querySelector('div#container main.main.fg'),
};

// Get output fields for compound interest growth. 
const valuegrowthoutputdestination = {
	// Get output field: simple future value. 
	simplefuturevalue: document.querySelector('div#container main.main section.futuregrowth div.output.simplefuturevalue span.value'),
	// Get output field: compound future value. 
	compoundfuturevalue: document.querySelector('div#container main.main section.futuregrowth div.output.compoundfuturevalue span.value'),
	// Get output field: compounding growth schedule. 
	growthschedule: document.querySelector('div#container main.main section.futuregrowth details.block table.schedule tbody.body'),
};

// Get output fields for loan amortization. 
const loanpaymentoutputdestination = {
	// Get output field: loan payment amount. 
	paymentamount: document.querySelector('div#container main.main section.loanamortization div.output.paymentamount span.value'),
	// Get output field: loan payment schedule. 
	paymentschedule: document.querySelector('div#container main.main section.loanamortization details.block table.schedule tbody.body'),
};


/*****/


// Handle events. 
handleEvents();


/*****/


// Dispatch calculation. 
function dispatchCalculation() {

	// Get selected calculation. 
	let selectedcalculationbox = document.querySelector('div#container main.main section.input div.input input[type=radio]:checked');
	let selectedcalculation = selectedcalculationbox.value;

	// Display loan amortization (if selected). 
	if(selectedcalculation=='la') displayLoan();
	// Display future growth (if selected). 
	if(selectedcalculation=='fg') displayGrowth();

	// Close all output windows. 
	closeAllOutput();
	// Open selected output window. 
	outputwindows[selectedcalculation].classList.remove('gone');

	/****/

	// Close all output windows. 
	function closeAllOutput() {

		// Go thru each output window. 
		for(let key in outputwindows) {

			// Close output window. 
			outputwindows[key].classList.add('gone');
		}
	}
}

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

// Display details of loan amortization. 
function displayLoan() {

	// Get user input values. 
	let userinputvalues = getUserInputValues();
	console.log('User input values:',userinputvalues);
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
	// Display loan payment. 
	loanpaymentoutputdestination['paymentamount'].innerHTML = dollar(paymentamount);

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
		loanpaymentoutputdestination['paymentschedule'].innerHTML = schedulelayout;

		/***/

		// TODO: Create row layout for amortization schedule. 
		function createScheduleRowLayout(pd,balA,diff,balB) {
			let paymentprincipal = balA - balB;
			let paymentinterest = diff - paymentprincipal;

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
					<span class="caption">${ dollar(diff) }</span>
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
					<span class="caption">${ dollar(paymentprincipal) }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
				<!-- cell -->
				<td class="cell v">
		
					<!-- caption -->
					<span class="caption">${ dollar(paymentinterest) }</span>
					<!-- /caption -->
		
				</td>
				<!-- /cell -->
		
			</tr>
			<!-- /row -->`;
		}
	}
}

// Display details of future growth. 
function displayGrowth() {

	// Get user input values. 
	let userinputvalues = getUserInputValues();
	console.log('User input values:',userinputvalues);
	// Get components of future value calculation. 
	let P = userinputvalues['principalamount'] ? userinputvalues['principalamount'] : 0;
	let r = userinputvalues['annualinterestrate'] ? userinputvalues['annualinterestrate'] : 0.00;
	let t = userinputvalues['numtermyears'] ? userinputvalues['numtermyears'] : 1;
	let n = userinputvalues['numcompoundsperyear'] ? userinputvalues['numcompoundsperyear'] : 12;
	let c = userinputvalues['contributionamount'] ? userinputvalues['contributionamount'] : 0;
	let f = userinputvalues['numcontributionsperyear'] ? userinputvalues['numcontributionsperyear'] : 1;
	let C = c * f/n;
	// let C = c * n/f;

	// Display future value. 
	showFutureValue();

	// Display schedule for compounding growth. 
	showGrowthSchedule();

	/****/

	// Display future value. 
	function showFutureValue() {

		// Initialize future value. 
		let result = 0;
	
		// Calculate future value (compounding). 
		let pow = Math.pow( (1+r/n) , (n*t) );
		console.log('Multiplying factor:',pow);
		result += P * pow;
		result += C * [ pow - 1 ] / (r/n);
		console.log('Compound result:',result);
	
		// Display future value (compounding). 
		valuegrowthoutputdestination['compoundfuturevalue'].innerHTML = dollar(result);
		// valuegrowthoutputdestination['compoundfuturevalue'].innerHTML = dollarBrief(result);
	
		// Calculate future value (simple). 
		result = P * (1 + r*t);
		if(result==0) result += (c*f*t) * (1+r);
		console.log('Simple result:',result);
	
		// Display future value (simple). 
		valuegrowthoutputdestination['simplefuturevalue'].innerHTML = dollar(result);
		// valuegrowthoutputdestination['simplefuturevalue'].innerHTML = dollarBrief(result);
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
		valuegrowthoutputdestination['growthschedule'].innerHTML = schedulelayout;

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


// Handle events. 
function handleEvents() {

	// Go thru each input field. 
	for(let key in inputfields) {

		// Get user input field. 
		field = inputfields[key];

		// Activate response to key press on user input field. 
		field.addEventListener('keyup', respondToKey);
	}

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
}
