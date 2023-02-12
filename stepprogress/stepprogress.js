


// Get progress inner bar. 
const progressinnerbar = document.querySelector('div#container main.main div.row div.progressbar span.bar');
// log


/*****/


// Define number of steps on progress bar. 
const numberOfSteps = 4;

// Define initial level of progress bar. 
let currentStep = 0;


/*****/


// Go to previous step. 
function goToPrevStep() {

	// Decrement current step. 
	currentStep--;
	console.log('Current step:',currentStep);

	// Update progress display. 
	updateProgressDisplay();
}

// Go to next step. 
function goToNextStep() {

	// Increment current step. 
	currentStep++;
	console.log('Current step:',currentStep);

	// Update progress display. 
	updateProgressDisplay();
}

// Update progress display. 
function updateProgressDisplay() {

	// Calculate progress proportion. 
	let p = currentStep/(numberOfSteps-1);

	// Show proportion on progress bar. 
	progressinnerbar.style.width = `${100*p}%`;
}
