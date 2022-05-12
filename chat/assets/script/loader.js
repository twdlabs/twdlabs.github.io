

// Get main container of load spinner. 
// let loadspinner = document.querySelector('div#loadspinner');
let loadspinner = document.getElementById('loadspinner');

// Get number of loader dots. 
let numloaderdots = getComputedStyle(document.documentElement).getPropertyValue('--numloaderdots');

// Add loader dots to page. 
addLoaderDots(numloaderdots);

// Handle events. 
// handleEvents();

/*****/

// Add number of loader dots to page. 
function addLoaderDots(n) {

	// Create dots. 
	result = '';
	for(let i=0;i<n;i++) {
		result += `
		<!-- dot -->
		<span class="dot" style="--i:${i}"></span>
		<!-- /dot -->`;
	}

	// Add dots to page. 
	loadspinner.innerHTML = result;
	// console.log(loadspinner);
}

// Start loading. 
function startLoading() {
	loadspinner.classList.add('loading');
	container.classList.add('loading');
}
// Finish loading. 
function finishLoading() {
	loadspinner.classList.remove('loading');
	container.classList.remove('loading');
}

// Load into function. 
function loadIntoFunction(fn) {

	// Define load time. 
	let dt = 750;

	// Start loading. 
	startLoading();

	// Run function at end of load time. 
	setTimeout(finishLoading, dt);
	setTimeout(fn, dt);
}
