

// Get eyeball elements. 
let eyeballs = document.querySelectorAll('.eye');
// console.log('eyeballs:',eyeballs);

// List events to watch for. 
let events = ['mousemove','touchmove'];
// console.log('events:',events);

// Go for each event type. 
for(let e of events) {
	document.body.addEventListener(e, checkPositioning);
}

/*****/

// Check for positioning. 
function checkPositioning(event) {
	// Go for each eyeball. 
	for(let eye of eyeballs) {
		// console.log('eye:',eye);

		// Get bounding rectangle of eyeball (DOM). 
		let rect = eye.getBoundingClientRect();
		let w = eye.clientWidth;
		let h = eye.clientHeight;
		// console.log('rectangle:',rect);
		// console.log('w:',w);
		// console.log('h:',h);

		// Get center position of eyeball. 
		let eyeX = rect.left + w/2;
		let eyeY = rect.top + h/2;
		// console.log('eyeX:',eyeX);
		// console.log('eyeY:',eyeY);

		// Get position of user's cursor (from top-left corner). 
		let x = isTouchDevice() ? (event.touches[0].clientX) : (event.clientX);
		let y = isTouchDevice() ? (event.touches[0].clientY) : (event.clientY);
		// console.log('x:',x);
		// console.log('y:',y);

		// Get position differentials between pointer and eyeball. 
		let dx = x - eyeX;
		let dy = y - eyeY;
		// console.log('dx:',dx);
		// console.log('dy:',dy);

		// Get angle of pointer position (in radians). 
		let radAngle = Math.atan2(dx, dy);

		// Get angle of pointer position (in degrees). 
		let degAngle = radAngle * (180/Math.PI);

		// Get rotation angle. 
		let degRotate = (-1) * degAngle + 180;

		// Rotate iris of eye by rotation angle. 
		eye.style.transform = "rotate("+ degRotate +"deg)";
	}
}

// Check for touch screen. 
function isTouchDevice() {
	try {
		document.createEvent('TouchEvent');
		return true;
	}
	catch(e) {
		return false;
	}
}
