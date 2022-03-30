

// Get main container of loader. 
let main = document.querySelector('div#container main.main');

// Get perceived number of dots. 
let numdots = getComputedStyle(document.documentElement).getPropertyValue('--numdots');

// Add appropriate number of dots ot page. 
addDots(numdots);

// Handle events. 
handleEvents();

/*****/

// Add dots to page. 
function addDots(n) {

	// Create dots. 
	result = '';
	for(let i=0;i<n;i++) {
		result += `
		<!-- dot -->
		<span class="dot" style="--i:${i}"></span>
		<!-- /dot -->`;
	}

	// Add to page. 
	main.innerHTML = result;
}

// Handle events. 
function handleEvents() {

	// Activate load button. 
	let loadbtn = document.querySelector('div#container div.btn.load');
	loadbtn.addEventListener('click',startLoading);

	// Activate done button. 
	let donebtn = document.querySelector('div#container div.btn.done');
	donebtn.addEventListener('click',finishLoading);
}

// Start loading. 
function startLoading() {
	// 
	main.classList.add('loading');
}
// Finish loading. 
function finishLoading() {
	// 
	main.classList.remove('loading');
}

