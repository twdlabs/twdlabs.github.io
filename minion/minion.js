


// Get eyeball elements. 
let eyeballs = document.querySelectorAll('.eye');
// console.log('eyeballs:',eyeballs);

// List event types to watch for. 
let events = ['mousemove','touchmove'];
// console.log('events:',events);


/*****/


// Go for each event type. 
for(let e of events) {
	document.body.addEventListener(e, checkPositioning);
}


/*****/


// Check for positioning of pointer. 
function checkPositioning(event) {
	
	// Go for each eyeball. 
	for(let eye of eyeballs) {
		// console.log('eye:',eye);

		// Get position of eye. 
		let epos = getEyePosition(eye);

		// Get position of pointer. 
		let ppos = getPointerPosition();

		// Get positional differential between pointer and eyeball. 
		let dx = ppos.x - epos.x;
		let dy = ppos.y - epos.y;
		// console.log('(dx,dy):', dx,dy);

		// Set rotation angle for eyeball. 
		setRotationAngle(eye, dx,dy);
	}

	/****/

	// Get position of eye. 
	function getEyePosition(eye) {

		// Get size of eyeball. 
		let w = eye.clientWidth;
		let h = eye.clientHeight;
		// console.log('w:',w);
		// console.log('h:',h);

		// Get position of eyeball (relative to page?). 
		let rect = eye.getBoundingClientRect();
		// console.log('rectangle:',rect);

		// Get center position of eyeball. 
		let x = rect.left + w/2;
		let y = rect.top + h/2;
		// console.log('eye (x,y):', x,y);

		// Return position. 
		return {x:x,y:y};
	}

	// Get position of pointer. 
	function getPointerPosition() {

		// Check for touch screen device. 
		let useTouch = isTouchDevice();

		// Get position of user's pointer (from top-left corner). 
		let x = useTouch ? (event.touches[0].clientX) : (event.clientX);
		let y = useTouch ? (event.touches[0].clientY) : (event.clientY);
		console.log('pointer (x,y):', x,y);

		// Return position. 
		return {x:x,y:y};

		/***/

		// Check for touch screen device. 
		function isTouchDevice() {
			try {
				document.createEvent('TouchEvent');
				return true;
			}
			catch(e) {
				return false;
			}
		}
	}

	// Set rotation angle for eyeball. 
	function setRotationAngle(eye, dx,dy) {

		// Get angle of pointer position (from radians to degrees). 
		let radAngle = Math.atan2(dx, dy);
		let degAngle = radAngle * (180/Math.PI);
		// console.log('Angle (pointer to eyeball):', radAngle,degAngle);

		// Get rotation angle for current eyeball. 
		let degRotate = (-1) * degAngle + 180;

		// Rotate iris of current eyeball by given rotation angle. 
		eye.style.transform = `rotate(${degRotate}deg)`;
	}
}
