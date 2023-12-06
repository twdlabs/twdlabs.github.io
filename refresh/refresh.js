


// Get screen. 
const screen = document.querySelector('div#screen');

// Get input for rate of refresh. 
const ratebox = document.querySelector('input#rateHz');

// Initialize index. 
let index = 0;

// Define colors. 
const colors = ['#F00', '#0F0', '#00F'];

// Initialize screen timer. 
let screentimer;


/*****/


// Start screen refresh process. 
function start() {
	stop();

	// Get screen refresh rate. 
	var rateHz = 1 * ratebox.value;

	// Apply refresh rate to screen. 
	screentimer = setInterval(switchFrame, 1000/rateHz);

	/****/

	// Switch screen to next color frame. 
	function switchFrame() {

		// Switch to next color frame. 
		screen.style.backgroundColor = colors[index];

		// Increment index. 
		incrementIndex();
		
		/****/

		// Increment index. 
		function incrementIndex() {
			index++;

			// Ensure index within range. 
			if(index>=colors.length) index = 0;
		}
	}
}

// Stop screen refresh process. 
function stop() {
	clearInterval(screentimer);
}
