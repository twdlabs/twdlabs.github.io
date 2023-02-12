


// Get row of steps. 
const stepsRow = document.querySelector('div#container main.main div.row');

// Get all bubbles. 
let allBubbles = document.querySelectorAll('div#container main.main div.row div.bubble');

// Get progress inner bar. 
const progressinnerbar = document.querySelector('div#container main.main div.row div.progressbar span.bar');

// Get previous button. 
const prevbtn = document.querySelector('div#container main.main div.controller div.btn.prev');
// Get next button. 
const nextbtn = document.querySelector('div#container main.main div.controller div.btn.next');


/*****/


// Define number of steps on progress bar. 
const numberOfSteps = 8;

// Define first step on progress bar. 
const minStep = 1;

// Define initial level of progress bar. 
let currentStep = 1;


/*****/


// Add step bubbles. 
addStepBubbles();

// Update progress display. 
updateProgressDisplay();


/*****/


// Add step bubbles. 
function addStepBubbles() {

	// Remove any previous bubbles. 
	for(let bubble of allBubbles) {
		bubble.remove();
	}

	// Create new bubbles. 
	let result = '';
	for(let i=1 ; i<=numberOfSteps ; i++) {

		// 
		result += `
		<!-- bubble -->
		<div class="bubble" data-step="${ i }">${ i }</div>
		<!-- /bubble -->`;
	}
	stepsRow.insertAdjacentHTML('beforeend',result);

	// Activate new bubbles. 
	activateNewBubbles();

	/****/

	// Activate new bubbles. 
	function activateNewBubbles() {

		// Get all bubbles. 
		allBubbles = document.querySelectorAll('div#container main.main div.row div.bubble');

		// Activate bubble clicks. 
		for(let bubble of allBubbles) {

			// 
			bubble.addEventListener('click',selectBubble);
		}
	}

	// Select bubble. 
	function selectBubble(event) {

		// Get selected bubble. 
		let selectedBubble = event.currentTarget;

		// Get step number of selected bubble
		currentStep = 1 * selectedBubble.getAttribute('data-step');

		// Update progress display. 
		updateProgressDisplay();
	}
}


// Go to previous step. 
function goToPrevStep() {

	// Ensure step number within range. 
	if(currentStep<=minStep) return;

	// Decrement current step. 
	currentStep--;
	console.log('Current step:',currentStep);

	// 
	if(currentStep<=minStep) prevbtn.setAttribute('disabled','');
	else prevbtn.removeAttribute('disabled');

	// Update progress display. 
	updateProgressDisplay();
}

// Go to next step. 
function goToNextStep() {

	// Ensure step number within range. 
	if(currentStep>=numberOfSteps) return;

	// Increment current step. 
	currentStep++;
	console.log('Current step:',currentStep);

	// 
	if(currentStep>=numberOfSteps) nextbtn.setAttribute('disabled','');
	else nextbtn.removeAttribute('disabled');

	// Update progress display. 
	updateProgressDisplay();
}

// Update progress display. 
function updateProgressDisplay() {

	// Calculate progress proportion. 
	let p = (currentStep-1)/(numberOfSteps-1);

	// Show proportion on progress bar. 
	progressinnerbar.style.width = `${100*p}%`;

	// Update step bubbles. 
	for(let bubble of allBubbles) {

		// Get step number. 
		let stepnum = 1 * bubble.getAttribute('data-step');

		// Highlight past steps. 
		if(stepnum<=currentStep) bubble.classList.add('active');

		// Un-highlight follwoing steps. 
		else bubble.classList.remove('active');
	}
}
