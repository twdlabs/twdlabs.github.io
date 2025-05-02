;

// Get canvas box. 
const canvasbox = document.querySelector('div.canvas');

// Get color picker. 
const colorpicker = document.querySelector('div#container main.main input#selectedColor');

// Define initial size of canvas. 
let canvassize = 16;

// Define initial color value. 
let selectedColor = 'transparent';

// Get selected color. 
getSelectedColor();

// Define state of press. 
let pressedDown = false;

// Activate canvas. 
activateCanvas();

// Activate color picker. 
activateColorPicker();

/*****/

// Activate canvas. 
function activateCanvas() {

	// Fill matrix of pixels into canvas. 
	fillCanvasPixels();

	// Fill matrix of pixels into canvas. 
	function fillCanvasPixels() {

		// Initialize canvas layout. 
		let canvaslayout = '';
	
		// Go thru each xyz. 
		for( let i=0 ; i < (canvassize*canvassize) ; i++ ) {
			canvaslayout += `
			<!-- pixel -->
			<div class="pixel" draggable="false"></div>
			<!-- /pixel -->`;
		}
	
		// Insert pixels into canvas. 
		canvasbox.innerHTML = canvaslayout;

		// Set size of canvas on page. 
		canvasbox.style.gridTemplateColumns = `repeat(${canvassize},1fr)`;
	}

	// Activate pixel clicks. 
	let allPixels = document.querySelectorAll('div.canvas div.pixel');

	// Go thru each pixel. 
	for(let pixel of allPixels) {
		pixel.addEventListener('mousedown',pixelHit);
		pixel.addEventListener('mouseenter',pixelRoll);
	}

// 
document.addEventListener('mouseup',pixelLift);
}

// Activate color picker. 
function activateColorPicker() {

	// Activate color picker. 
	colorpicker.addEventListener('input',getSelectedColor);
}

// Define pixel reaction. 
function pixelHit(event) {

	// Change press state. 
	pressedDown = true;

	// Fill current selected pixel. 
	let selectedpixel = event.currentTarget;
	fillPixel(selectedpixel);
}

// Define pixel reaction. 
function pixelRoll(event) {

	// Fill selected pixel. 
	let selectedpixel = event.currentTarget;
	fillPixel(selectedpixel);
}

// Define pixel reaction. 
function pixelLift(/* event */) {

	// Change press state. 
	pressedDown = false;
}

// Color in the selected pixel. 
function fillPixel(pixel) {

	// 
	if(pressedDown) pixel.style.backgroundColor = selectedColor;
}

// Get selected color. 
function getSelectedColor() {

	// Get selected color. 
	let selectedcolor = colorpicker.value;

	// Return selected color or default. 
	selectedColor = selectedcolor || 'black';
	console.log('Selected color:',selectedColor);
}
