


// Define event types to watch for. 
const eventtypes = ['mousemove','touchmove','mousedown','touchstart',];
// console.log('Event types:',eventtypes);

// Get picture frame. 
const picframe = document.querySelector('div#container main.main div.frame');


/*****/


// Activate positioning of picture frame. 
activatePicFrame();


/*****/


// Activate positioning of picture frame. 
function activatePicFrame() {

	// Go for each event type. 
	for(let event of eventtypes) {
		document.body.addEventListener(event, updatePosition);
	}
	
	/****/

	// Update position of picture frame. 
	function updatePosition(event) {
	
		// Get position of pointer. 
		let ppos = getPointerPosition();
	
		// Set rotation angles for frame. 
		setRotationAngles(picframe);

		// 
	
		/***/
	
		// Get position of pointer. 
		function getPointerPosition() {
	
			// Check for touch screen device. 
			let useTouch = isTouchDevice();
	
			// Get position of user's pointer (from top-left corner). 
			let x = useTouch ? (event.touches[0].clientX) : (event.clientX);
			let y = useTouch ? (event.touches[0].clientY) : (event.clientY);
			// console.log('pointer (x,y):', x,y);
	
			// Return position. 
			return {x:x,y:y};
	
			/**/
	
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
	
		// Get position of frame. 
		function getFramePosition(frame) {
	
			// Get size of frame. 
			let w = frame.clientWidth;
			let h = frame.clientHeight;
			// console.log('w:',w);
			// console.log('h:',h);
	
			// Get position of frame (relative to page?). 
			let rect = frame.getBoundingClientRect();
			// console.log('rectangle:',rect);
	
			// Get center position of frame. 
			let x = rect.left + w/2;
			let y = rect.top + h/2;
			// console.log('frame (x,y):', x,y);
	
			// Return position. 
			return {x:x,y:y};
		}
	
		// Set rotation angles for frame. 
		function setRotationAngles(frame) {
	
			// Get position of frame. 
			let fpos = getFramePosition(frame);
	
			// Get positional differential between pointer and frame. 
			let dx = ppos.x - fpos.x;
			let dy = ppos.y - fpos.y;
			console.log('(dx,dy):', dx,dy);

			// Define scale factor. 
			let sf = 1/50;
	
			// Rotate frame by given angles. 
			frame.style.transform = `rotateX(${ -1*sf*dy }deg) rotateY(${ sf*dx }deg)`;
		}
	}
}
