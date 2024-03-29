


// Define dimensions of dot matrix (in drag hook). 
const numdotsperrow = 12;
const numrowsperdotmatrix = 3;


/*****/

// Define previous touch. 
var prevTouch;


// Activate movement of given desktop window. 
function makeMovable(desktopwindow,draghookselector='div.headbar') {
	// console.log('\tActivating movement:',desktopwindow);

	// Check if window is currently movable. 
	if( isNotMovable(desktopwindow) ) return;

	// Cancel default dragging functionality. 
	desktopwindow.setAttribute('draggable',false);

	// Get drag hook of desktop window. 
	let draghook = desktopwindow.querySelector(draghookselector) || desktopwindow;

	// Get container for dot matrix in drag hook. 
	let dotmatrix = draghook.querySelector('div.dotmatrix');
	// Create dot matrix for drag hook. 
	if(dotmatrix) dotmatrix.innerHTML = createDotMatrix();

	// Get container for dot matrix in drag hook. 
	let controlpanel = draghook.querySelector('div.controls');
	// Create dot matrix for drag hook. 
	if(controlpanel) controlpanel.innerHTML = createControlPanel();

	// Handle mouse movement events. 
	handleMouseEvents();

	// Handle touch movement events. 
	handleTouchEvents(); 

	/****/

	// Handle mouse movement events. 
	function handleMouseEvents() {

		// Allow start of window movement. 
		draghook.addEventListener('mousedown', hookToPointer );
	
		// Allow finish of window movement. 
		document.addEventListener('mouseup', unHookFromPointer );
		desktop.addEventListener('mouseleave', unHookFromPointer );
		desktopwindow.addEventListener('mouseleave', unHookFromPointer );
	}

	// Handle touch movement events. 
	function handleTouchEvents() {

		// Allow start of window movement. 
		draghook.addEventListener('touchstart', hookToPointer );
		
		// Allow finish of window movement. 
		document.addEventListener('touchcancel', unHookFromPointer );
		document.addEventListener('touchend', unHookFromPointer );
	}

	// Hook desktop window to pointer to begin movement. 
	function hookToPointer(event) {
		// console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);

		// Check if clicked target is within dot button. 
		let onDotBtn = (event.target).closest('div#container div.desktop div.window div.headbar div.controls div.dot');
		// console.log('Clicked in dot button:',!!onDotBtn);
		// Ignore window movement attempts from dot buttons. 
		if(onDotBtn) return;

		// Set as currently moving. 
		desktopwindow.classList.add('moving');
		
		// Start tracking mouse with desktop window (when mouse button pressed). 
		desktopwindow.addEventListener('mousemove',moveToPointer);
		// Start tracking touch with desktop window (when mouse button pressed). 
		// desktopwindow.addEventListener('touchmove',moveToPointer);

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}

	// Move desktop window to position of pointer. 
	function moveToPointer(event) {
		console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);
		
		// Get original position of desktop window. 
		let deskwindowstyle = window.getComputedStyle(desktopwindow);
		let x0 = parseInt(deskwindowstyle.left);
		let y0 = parseInt(deskwindowstyle.top);
		
		// Get movement of pointer. 
		let dx = getMovementX();
		let dy = getMovementY();
		// Get new position of pointer. 
		let x1 = x0 + dx;
		let y1 = y0 + dy;
		
		// Set new position to desktop window. 
		desktopwindow.style.left = `${x1}px`;
		desktopwindow.style.top = `${y1}px`;

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
		console.log('x:',x0,dx,x1);
		console.log('y:',y0,dy,y1);
		
		// Get horizontal movement of pointer. 
		function getMovementX() {

			// 
			return event.movementX;
		}
		
		// Get vertical movement of pointer. 
		function getMovementY() {

			// 
			return event.movementY;
		}
	}

	// Un-hook desktop window from pointer to finish movement. 
	function unHookFromPointer(/* event */) {
		// console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);

		// Set as not currently moving. 
		desktopwindow.classList.remove('moving');
		
		// Stop tracking mouse with desktop window (when mouse button released). 
		desktopwindow.removeEventListener('mousemove',moveToPointer);
		// Stop tracking touch with desktop window (when mouse button released). 
		// desktopwindow.removeEventListener('touchmove',moveToPointer);

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}

	// Check if window is currently movable. 
	function isNotMovable(desktopwindow) {

		// Get class list of desktop window. 
		let cl = desktopwindow.classList;

		// Check if window is either minimized or minimized. 
		return ( cl.contains('min') ) || ( cl.contains('max') );
	}

	// // Cancel default drag/drop behavior. 
	// function cancelDefault(event) {

	// 	// Use default event or window event. 
	// 	event = event || window.event;

	// 	// Cancel default drag/drop behavior. 
	// 	event.preventDefault();
	// }
}

// Create dot matrix for drag hook. 
function createDotMatrix() {

	// Initialize list of dots. 
	let dots = '';

	// Fill list of dots. 
	for(let i=0 ; i<(numrowsperdotmatrix*numdotsperrow) ; i++) {
		dots += `
		<!-- dot -->
		<span class="dot"></span>
		<!-- /dot -->`;
	}

	// Return list of dots. 
	return dots;
}

// Position desktop window by index. 
function positionDesktopWindow(dw) {

	// Define positioning differential. 
	let dx = 32;
	let dy = 48;

	// Get desk level of current window. 
	let index = dw.style.getPropertyValue('--i') * 1;

	// Position desktop window. 
	dw.style.top = `${index*dy}px`;
	dw.style.left = `${index*dx}px`;
}
