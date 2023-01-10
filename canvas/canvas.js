


// Get chart element. 
const canv = document.getElementById('normalChart');
const canvas = canv.getContext('2d');

// Get all input fields. 
const allInputFields = document.querySelectorAll('div#container section.params div.input input');
// console.log(allInputFields);
// Get input fields: mean. 
const meanboxA = document.querySelector('div#container section.params div.input input#meanA');
const meanboxB = document.querySelector('div#container section.params div.input input#meanB');
// Get input fields: standard deviation. 
const stdevboxA = document.querySelector('div#container section.params div.input input#stdevA');
const stdevboxB = document.querySelector('div#container section.params div.input input#stdevB');


/*****/


// Get chart data analyzer. 
let normalChart;

// Define number of standard deviations to include in graph. 
const N = 4;

// Define data point differential. 
const dx = .5;

// Define status of graph label inclusion. 
const includeLabels = true;


/*****/


// Activate input fields. 
activateInputFields();


/*****/


// Activate input fields. 
function activateInputFields() {

	// 
	for(let inputfield of allInputFields) {
		// inputfield.addEventListener('input',go);
		inputfield.addEventListener('click',selectField);
		inputfield.addEventListener('keyup',checkShortcutKeys);
	}
}

// Select input field. 
function selectField(event) {

	// 
	let inputfield = event.currentTarget;

	// 
	inputfield.select();
}

// Check for shortcut keys. 
function checkShortcutKeys(event) {

	// 
	console.log(event);
	if(event.keyCode==13 || event.key=='Enter') go();
}

function go() {
	// muA,muB,sdA,sdB;

	// Remove any previously charted data. 
	if(normalChart) {

		// Reset any previous data points. 
		chartDetails.data.labels = [];
		chartDetails.data.datasets[0].data = [];
		chartDetails.data.datasets[1].data = [];

		// 
		normalChart.destroy();
		console.log('Chart reset');
	}

	// Get user input: sample mean. 
	const muA = 1 * meanboxA.value;
	const muB = 1 * meanboxB.value;
	console.log('µ', muA, muB );
	// Get user input: sample standard deviation. 
	const sdA = 1 * stdevboxA.value;
	const sdB = 1 * stdevboxB.value;
	console.log('σ', sdA, sdB );

	// Get left-hand graph limits. 
	let xLeftA = muA - N*sdA;
	let xLeftB = muB - N*sdB;
	// Get right-hand graph limits. 
	let xRightA = muA + N*sdA;
	let xRightB = muB + N*sdB;

	// Go thru each data point for graph A.

	// Go thru each data point for graph B.
	for (let x=Math.min(xLeftA,xLeftB) ; x<=Math.max(xRightA,xRightB) ; x+=dx) {

		// Add label (horizontal) for data point. 
		if(includeLabels) chartDetails.data.labels.push(x);

		// Calculate function value for current data point. 
		let yA = pdf(x, muA,sdA);
		// console.log(yA);

		// Calculate function value for current data point. 
		let yB = pdf(x, muB,sdB);
		// console.log(yB);

		// Add vertical value for data point on graph A. 
		(chartDetails.data.datasets[0].data).push(yA);

		// Add vertical value for data point on graph B. 
		(chartDetails.data.datasets[1].data).push(yB);
	}

	// Add chart details to canvas. 
	normalChart = new Chart(canvas,chartDetails);

	/****/

	// Define probability density function for normal distribution. 
	function pdf(x, mu, s) {

		// 
		let result = (1 / (Math.sqrt(2*Math.PI)*s) ) * Math.exp( (x-mu)*(x-mu) / (-2*s*s) );
		// console.log(`pdf(${x},${mu},${s}) =`, result);

		// Return result. 
		return result;
	}

	// 
	function xyz() {

		// 
	}
}
