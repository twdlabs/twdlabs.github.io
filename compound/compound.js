


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
// Get output field for future value. 
const outputfuturevalue = document.querySelector('div#container main.main div.output');

// Calculate future value
function calculateFutureValue() {

	// Get value from input field: principalamount. 
	let principalamount = 1 * inputprincipalamount.value;
	console.log('principalamount:',principalamount);
	
	
	// Get value from input field: annualgrowthrate. 
	let annualgrowthrate = 1 * inputannualgrowthrate.value;
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
	
	
	// Calculate future value. 
	let result = 0;
	// result = 
	
	// Display future value. 
	outputfuturevalue.innerHTML = result;
}

