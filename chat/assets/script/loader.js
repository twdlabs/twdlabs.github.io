


// Get main container of load spinner. 
let loadspinner = document.querySelector('div#loadspinner');

// Get number of loader dots. 
let numloaderdots = getComputedStyle(document.documentElement).getPropertyValue('--numloaderdots');

// Define load time. 
let loadertime = 750;
loadertime = 2500;


/*****/


// Add loader dots to page. 
addLoaderDots();


/*****/


// Add loader dots to page. 
function addLoaderDots() {

	// Initialize result. 
	result = '';
	
	// Create number of dots. 
	for(let i=0;i<numloaderdots;i++) {
		result += `
		<!-- dot -->
		<span class="dot" style="--i:${i}"></span>
		<!-- /dot -->`;
	}

	// Add dots to page. 
	loadspinner.innerHTML = result;
	// console.log(loadspinner);
}

// Start loading animation. 
function startLoader() {
	loadspinner.classList.add('loading');
	container.classList.add('loading');
}
// End loading animation. 
function endLoader() {
	loadspinner.classList.remove('loading');
	container.classList.remove('loading');
}

// Load into function. 
function loadIntoFunction(fn) {

	// Start loader. 
	startLoader();

	// End loader and run function at end of load time. 
	setTimeout(fn, loadertime);
	setTimeout(endLoader, loadertime);
}
