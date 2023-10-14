
var trX = 200;		// value of translateX distance
var trY = -2000;	// value of translateY distance
var trZ = -2000;	// value of translateZ distance
var trphi = 45;		// value of rotateY angle

// Toggle debugger. 
function toggleDebugger() {
	// Check for debug mode. 
	let debugOn = $('#container').hasClass('debug');

	// Toggle debug mode. 
	// document.getElementById('container').classList.toggle('debug');
	// $('#container').toggleClass('debug');
	if(debugOn) {
		// Turn it off. 
		$('#container').removeClass('debug');

		// Reset transform values to default. 
		resetTransformValues();

		// Apply current transform values. 
		goTransform();
	}
	else {
		// Turn it on. 
		$('#container').addClass('debug');

		// Apply current transform values. 
		goTransform();
	}

	/*****/

	// Reset transform values to default. 
	function resetTransformValues() {
		trX = 200;
		trY = -2000;
		trZ = -2000;
		trphi = 45;
	}
}

// Change value of translateX distance. 
function deltaX(amt) {
	trX += amt;
	goTransform();
}
// Change value of translateY distance. 
function deltaY(amt) {
	trY += amt;
	goTransform();
}
// Change value of translateZ distance. 
function deltaZ(amt) {
	trZ += amt;
	goTransform();
}
// Change value of rotateY angle. 
function deltaPhi(amt) {
	trphi += amt;
	goTransform();
}
// Show the 3D transformation. 
function goTransform() {
	// Check for debug mode. 
	let debugOn = $('#container').hasClass('debug');
	console.log('debugOn',debugOn);

	// Check for valid values. 
	let validTr = (trX || trY || trZ || trphi);
	console.log('validTr',validTr);

	// When appropriate, apply custom transform values. 
	if(debugOn && validTr) {
		$('div#container.debug div.parallax_group')
		.css('transform','translate3d('+trX+'px,'+trY+'px,'+trZ+'px) rotateY('+trphi+'deg)');
	}

	// Otherwise, revert to default mode. 
	else {
		$('div#container div.parallax_group').css('transform','');
	}
}
