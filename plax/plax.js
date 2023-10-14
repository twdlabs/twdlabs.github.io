


// Get main container. 
const container = document.querySelector('div#container');

// Get all parallax groups. 
const plaxgroups = document.querySelectorAll('div#container div.plaxgroup');


/*****/


// Determine if transformations applied individually. 
let transformWhole = false;

// Initialize value of horizontal left/right offset (aka translateX). 
let dX = 200;

// Initialize value of vertical up/down offset (aka translateY). 
let dY = -2000;

// Initialize value of forward/backward offset (aka translateZ). 
let dZ = -2000;

// Initialize value of x-axis rotation angle (aka rotateX). 
let dTheta = 0;

// Initialize value of y-axis rotation angle (aka rotateY). 
let dPhi = 45;

// Initialize value of z-axis rotation angle (aka rotateZ). 
let dRho = 0;


/*****/


/*****/


// Toggle debugger. 
function toggleDebugger() {

	// Check for debug mode. 
	let alreadyOn = container.classList.contains('debug');

	// Turn off debug mode if already on. 
	if(alreadyOn) closeDebugMode();

	// Turn on debug mode if not already on. 
	else openDebugMode();

	/*****/

	// Reset transform values to default. 
	function resetTransformValues() {
		dX = 200;
		dY = -2000;
		dZ = -2000;
		dPhi = 45;
	}

	// Open debug mode. 
	function openDebugMode() {
		// Update mode. 
		container.classList.add('debug');
		// Apply current transform values. 
		goTransform();
	}

	// Close debug mode. 
	function closeDebugMode() {
		// Update mode. 
		container.classList.remove('debug');
		// Reset transform values to default. 
		resetTransformValues();
		// Apply current transform values. 
		goTransform();
	}
}

// Update value of horizontal left/right offset (translateX). 
function deltaX(amt) {
	dX += amt;
	goTransform();
}
// Update value of vertical up/down offset (translateY). 
function deltaY(amt) {
	dY += amt;
	goTransform();
}
// Update value of forward/backward offset (translateZ). 
function deltaZ(amt) {
	dZ += amt;
	goTransform();
}
// Update value of rotateX angle. 
function deltaTheta(amt) {
	dTheta += amt;
	goTransform();
}
// Update value of rotateY angle. 
function deltaPhi(amt) {
	dPhi += amt;
	goTransform();
}
// Update value of rotateZ angle. 
function deltaRho(amt) {
	dRho += amt;
	goTransform();
}

// Display current 3D transformation. 
function goTransform() {

	// Check for debug mode. 
	let debugOn = container.classList.contains('debug');
	console.log('Debug mode on:',debugOn);

	// Check for valid values. 
	let validTr = (dX || dY || dZ || dPhi);
	console.log('Valid transformation:',validTr);

	// When appropriate, apply custom transform values. 
	if(debugOn && validTr) {

		if(transformWhole) {
			container.style.transform += `translate3d( ${dX}px, ${dY}px, ${dZ}px ) rotateX( ${dTheta}deg ) rotateY( ${dPhi}deg ) rotateZ( ${dRho}deg )`;
			return;
		}

		// Go thru each parallax group. 
		for(let pg of plaxgroups) {
			// Apply transformation. 
			pg.style.transform += `translate3d( ${dX}px, ${dY}px, ${dZ}px ) rotateX( ${dTheta}deg ) rotateY( ${dPhi}deg ) rotateZ( ${dRho}deg )`;
		}
	}

	// Otherwise, revert to default mode. 
	else {

		// Go thru each parallax group. 
		for(let pg of plaxgroups) {
			// Remove transformation. 
			pg.style.transform = '';
		}
	}
}
