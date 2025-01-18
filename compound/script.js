


// Get input field: principalamount. 
const inputprincipalamount = document.querySelector('div#container main.main div.input input#principalamount');
// Get input field: annualgrowthrate. 
const inputannualgrowthrate = document.querySelector('div#container main.main div.input input#annualgrowthrate');
// Get input field: numberofyears. 
const inputnumberofyears = document.querySelector('div#container main.main div.input input#numberofyears');
// Get input field: compoundingperiodsperyear. 
const inputcompoundingperiodsperyear = document.querySelector('div#container main.main div.input input#compoundingperiodsperyear');
// Get input field: periodiccontribution. 
const inputperiodiccontribution = document.querySelector('div#container main.main div.input input#periodiccontribution');
// Get input field: periodiccontributionfrequencyperyear. 
const inputperiodiccontributionfrequencyperyear = document.querySelector('div#container main.main div.input input#periodiccontributionfrequencyperyear');

// Group all outputs into list. 
let inputBoxList = [inputprincipalamount,inputannualgrowthrate,inputnumberofyears,inputcompoundingperiodsperyear,inputperiodiccontribution,inputperiodiccontributionfrequencyperyear];

// Get output field for future value. 
const outputsimplevalue = document.querySelector('div#container main.main div.output.simple span.value');
const outputcompoundvalue = document.querySelector('div#container main.main div.output.compound span.value');
const scheduledestination = document.querySelector('div#container main.main section.output table.schedule tbody.body');


/*****/


// Handle events. 
handleEvents();


/*****/


// Calculate future value. 
function calculateFutureValue() {

	// Get value from input field: principalamount. 
	let principalamount = 1 * inputprincipalamount.value;
	console.log('principalamount:',principalamount);


	// Get value from input field: annualgrowthrate. 
	let annualgrowthrate = 1 * inputannualgrowthrate.value / 100;
	console.log('annualgrowthrate:',annualgrowthrate);


	// Get value from input field: numberofyears. 
	let numberofyears = 1 * inputnumberofyears.value;
	console.log('numberofyears:',numberofyears);


	// Get value from input field: compoundingperiodsperyear. 
	let compoundingperiodsperyear = 1 * inputcompoundingperiodsperyear.value;
	console.log('compoundingperiodsperyear:',compoundingperiodsperyear);


	// Get value from input field: periodiccontribution. 
	let periodiccontribution = 1 * inputperiodiccontribution.value;
	console.log('periodiccontribution:',periodiccontribution);


	// Get value from input field: periodiccontributionfrequencyperyear. 
	let periodiccontributionfrequencyperyear = 1 * inputperiodiccontributionfrequencyperyear.value;
	console.log('periodiccontributionfrequencyperyear:',periodiccontributionfrequencyperyear);


	// Get components of future value calculation. 
	let P = principalamount ? principalamount : 0;
	let r = annualgrowthrate ? annualgrowthrate : 0.00;
	let t = numberofyears ? numberofyears : 0;
	let n = compoundingperiodsperyear ? compoundingperiodsperyear : 12;
	let c = periodiccontribution ? periodiccontribution : 0;
	let f = periodiccontributionfrequencyperyear ? periodiccontributionfrequencyperyear : 1;
	let C = c * f/n;
	// let C = c * n/f;

	// Calculate future value (compounding). 
	let result = 0;
	let pow = Math.pow( (1+r/n) , (n*t) );
	result += P * pow;
	result += C * [ pow - 1 ] / (r/n);
	console.log('pow:',pow);
	console.log('Compound result:',result);
	// Display future value (compounding). 
	outputcompoundvalue.innerHTML = dollar(result);
	// outputcompoundvalue.innerHTML = dollarBrief(result);

	// Calculate future value (simple). 
	result = P * (1 + r*t);
	if(result==0) result += (c*f*t) * (1+r);
	console.log('Simple result:',result);
	// Display future value (simple). 
	outputsimplevalue.innerHTML = dollar(result);
	// outputsimplevalue.innerHTML = dollarBrief(result);

	// Create compounding schedule. 
	let schedulelayout = '';
	let sumvalue = P;

	// 
	schedulelayout += createScheduleRowLayout( 0 , sumvalue );

	// Go thru each compunding period. 
	for(let i=0 ; i<(n*t) ; i++) {

		// Add compunding interest to sum value. 
		sumvalue *= (1 + r/n);
		// Add contribution to sum value. 
		sumvalue += C;

		// 
		schedulelayout += createScheduleRowLayout( (i+1) , sumvalue );
	}
	// Display compounding schedule. 
	scheduledestination.innerHTML = schedulelayout;

	/****/

	// Create layout for schedule row. 
	function createScheduleRowLayout(pd,fv) {

		// 
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

// Handle events. 
function handleEvents() {

	// 
	for(let inputBox of inputBoxList) {
		inputBox.addEventListener('keyup', respondToKey);
	}

	/****/

	// Respond to key. 
	function respondToKey(event) {
		// console.log('Responding to key',event.keyCode,event.key);

		// Check if enter key pressed. 
		if(event.keyCode==13 || event.key=='Enter') calculateFutureValue();
	}
}

