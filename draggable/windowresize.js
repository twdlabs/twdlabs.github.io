


// Activate resizability of given desktop window. 
function makeResizable(desktopwindow) {
	// console.log('\tActivating resizability:',desktopwindow);

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
	}

	// Update size of desktop window based on position of pointer. 
	function updateWindowSize(event) {
		// console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);
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
	}

	// 
}