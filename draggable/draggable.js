


// Get desktop window container. 
const desktop = document.querySelector('div#container div.desktop');

// Get all pre-existing desktop windows. 
const desktopwindows = document.querySelectorAll('div#container div.desktop div.window');


/*****/


// Make desktop windows movable. 
for(let window of desktopwindows) {
	
	// Activate window movement. 
	makeMovable(window,'div.headbar');
}

// Add ability to create new windows. 


/*****/


// Activate window movement. 
function makeMovable(window,draghookselector) {

	// Cancel default dragging functionality. 
	window.setAttribute('draggable',false);

	// Get drag hook of window. 
	let draghook = window.querySelector(draghookselector) || window;

	// Allow for initiation of drag movement. 
	draghook.addEventListener('mousedown',hookToPointer);

	// Allow for ending of drag movement. 
	document.addEventListener('mouseup',unHookFromPointer);
	desktop.addEventListener('mouseleave',unHookFromPointer);
	window.addEventListener('mouseleave',unHookFromPointer);

	// Fill dot matrix in drag hook. 
	fillDotMatrix();

	/****/

	// Fill dot matrix in drag hook. 
	function fillDotMatrix() {

		// Define dimensions of dot matrix (in drag hook). 
		const numdotsperrow = 12;
		const numrowsperdotmatrix = 3;

		// Get dot matrix in drag hook. 
		let dotmatrix = draghook.querySelector('div.dotmatrix');

		// Initialize list of dots. 
		let dots = '';
		// Fill list of dots. 
		for(let i=0 ; i<(numrowsperdotmatrix*numdotsperrow) ; i++) {
			dots += `
			<!-- dot -->
			<span class="dot"></span>
			<!-- /dot -->`;
		}
		// Add list of dots to dot matrix. 
		if(dotmatrix) dotmatrix.innerHTML = dots;
	}

	// Hook window to pointer to begin movement. 
	function hookToPointer(event) {
		console.log(event,window);

		// Set as currently moving. 
		window.classList.add('moving');
		
		// Start tracking mouse with window (when mouse button pressed). 
		window.addEventListener('mousemove',moveToPointer);

		// Reorder layers of movable windows. 
		bringWindowToTop(window);

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}

	// Move window to position of pointer. 
	function moveToPointer(event) {
		console.log(event,window);
		
		// Get original position of window. 
		let getStyle = window.getComputedStyle(window);
		let x0 = parseInt(getStyle.left);
		let y0 = parseInt(getStyle.top);
		console.log('(x0,y0):',x0,y0);

		// Get movement of pointer. 
		let dx = event.movementX;
		let dy = event.movementY;
		console.log('(dx,dy):',dx,dy);
		// Get new position of pointer. 
		let x1 = x0 + dx;
		let y1 = y0 + dy;
		console.log('(x1,y1):',x1,y1);
		
		// Set new position to window. 
		window.style.left = `${x1}px`;
		window.style.top = `${y1}px`;
		// window.style.left = `${window.offsetLeft-dx}px`;
		// window.style.top = `${window.offsetTop-dy}px`;

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}

	// Un-hook window from pointer to finish movement. 
	function unHookFromPointer(event) {
		console.log(event,window);

		// Set as not currently moving. 
		window.classList.remove('moving');
		
		// Stop tracking mouse with window (when mouse button released). 
		window.removeEventListener('mousemove',moveToPointer);

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}

	// Cancel default drag/drop behavior. 
	function cancelDefault(event) {

		// Use default event or window event. 
		event = event || window.event;

		// Cancel default drag/drop behavior. 
		event.preventDefault();
	}

	// Bring selected window above all others. 
	function bringWindowToTop(window) {

		// Set new desk level for each window. 
		for(let window of desktopwindows) {

			// Get new z-index value. 
			let newindex = getNewTopIndex();

			// 
			window.style.setProperty('--i',newindex);
		}

		/***/

		// Get new top desk level. 
		function getNewTopIndex() {
	
			// Initialize max desk level. 
			let maxlevel = 0;

			// Go thru each window. 
			for(let window of desktopwindows) {

				// Get desk level of current window. 
				let windowlevel = window.style.getPropertyValue('--i');

				// Save level as maximum if greater than maximum. 
				if(windowlevel>maxlevel) maxlevel = windowlevel;
			}
	
			// Get current max z-index. 
			return (maxlevel + 1);
		}
	}
}

// Create new desktop window. 
function createNewWindow(type) {
	console.log('New window type:',type);

	// 
}
