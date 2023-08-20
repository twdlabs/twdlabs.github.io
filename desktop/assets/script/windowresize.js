


// Activate resizability of given desktop window. 
function makeResizable(desktopwindow) {
	// console.log('\tActivating resizability:',desktopwindow);

	// Check if window is currently resizable. 
	if( isNotResizable(desktopwindow) ) return;

	// Get resizer handle. 
	let resizer = desktopwindow.querySelector('div#container div.desktop div.window div.resizer');

	// Allow start of window resizing. 
	resizer.addEventListener('mousedown',hookToPointer);

	// Allow finish of window resizing. 
	document.addEventListener('mouseup',unHookFromPointer);
	desktop.addEventListener('mouseleave',unHookFromPointer);
	desktopwindow.addEventListener('mouseleave',unHookFromPointer);

	// Hook desktop window to pointer to begin resizing. 
	function hookToPointer(event) {
		// console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);

		// Set as currently resizing. 
		desktopwindow.classList.add('resizing');
		
		// Start tracking mouse with desktop window (when mouse button pressed). 
		desktopwindow.addEventListener('mousemove',updateWindowSize);
		// Start tracking touch with desktop window (when mouse button pressed). 
		// desktopwindow.addEventListener('touchmove',updateWindowSize);

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}

	// Update size of desktop window based on position of pointer. 
	function updateWindowSize(event) {
		// console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);
		
		// Get original position of desktop window. 
		let deskwindowstyle = window.getComputedStyle(desktopwindow);
		let w0 = parseInt(deskwindowstyle.width);
		let h0 = parseInt(deskwindowstyle.height);
		
		// Get movement of pointer. 
		let dw = event.movementX;
		let dh = event.movementY;
		// Get new position of pointer. 
		let w1 = w0 + dw;
		let h1 = h0 + dh;
		
		// Set new position to desktop window. 
		desktopwindow.style.width = `${w1}px`;
		desktopwindow.style.height = `${h1}px`;

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
		console.log('w:',w0,dw,w1);
		console.log('h:',h0,dh,h1);
	}

	// Un-hook desktop window from pointer to finish resizing. 
	function unHookFromPointer(event) {
		// console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);

		// Set as not currently resizing. 
		desktopwindow.classList.remove('resizing');
		
		// Start tracking mouse with desktop window (when mouse button pressed). 
		desktopwindow.removeEventListener('mousemove',updateWindowSize);
		// Start tracking touch with desktop window (when mouse button pressed). 
		// desktopwindow.removeEventListener('touchmove',updateWindowSize);

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}

	// Check if window is currently resizable. 
	function isNotResizable(desktopwindow) {

		// Get class list of desktop window. 
		let cl = desktopwindow.classList;

		// Check if window is either minimized or minimized. 
		return ( cl.contains('min') ) || ( cl.contains('max') );
	}
}