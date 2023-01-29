


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
	let r = annualgrowthrate ? annualgrowthrate : 0.01;
	let t = numberofyears ? numberofyears : 0;
	let n = compoundingperiodsperyear ? compoundingperiodsperyear : 1;
	let c = periodiccontribution ? periodiccontribution : 0;
	let f = periodiccontributionfrequencyperyear ? periodiccontributionfrequencyperyear : 0;
	let C = c * f/n /* * n/f */;
	
	// Calculate future value. 
	let result = 0;
	let pow = Math.pow((1+r/n),(n*t));
	result += P * pow;
	result += C * [ pow - 1 ] / (r/n);
	// console.log('pow:',pow);
	console.log('result:',result);
	
	// Display future value. 
	outputfuturevalue.innerHTML = dollar(result);
	// outputfuturevalue.innerHTML = dollarBrief(result);
}

