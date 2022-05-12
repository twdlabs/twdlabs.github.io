

// Save time of last touch. 
var lastTouchTime;
// var timeout;

// Get context menu element. 
let contextMenu = document.getElementById('contextmenu');

// Define events. 
let events = ['dblclick','contextmenu','touchstart'];

// Respond to mouse/touch events with event handler. 
for(e of events) {
	document.addEventListener(e, function(event) {
		// console.log();

		// Prevent default behavior. 
		event.preventDefault();
	
		// Get position of mouse cursor. 
		let x = event.clientX || event.touches[0].clientX;
		let y = event.clientY || event.touches[0].clientY;
		// console.log(event.type,'@', x, y);
	
		// Open custom context menu. 
		openContextMenuAt(x, y);
	});
}

// Respond to mouse click with event handler. 
document.addEventListener('click', function(event) {
	// // console.log(event.target);
	// console.log(contextMenu);

	// Check if clicked item is menu or item inside menu. 
	let clickedMenuItem = contextMenu.contains(event.target);

	// Show clicked menu item. 
	if(clickedMenuItem) {

		// Show contents of clicked menu item. 
		console.log('Menu item selected:', event.target.innerText);

		// Close context menu. 
		closeContextMenu();
	}

	// Close context menu. 
	else {

		// Close context menu. 
		closeContextMenu();
	}
});
// Respond to touch event with event handler. 
document.addEventListener('touchend', function(event) {
	console.log('lastTouchTime', lastTouchTime);

	// Check the time since last touch event. 
	let nowTime = new Date().getTime();
	console.log('nowTime', nowTime);
	let dtTouch = nowTime - lastTouchTime
	console.log('dtTouch', dtTouch);

	// Check if last touch within 500 ms. 
	let quickTap = (dtTouch > 0) && (dtTouch < 500);

	// 
	if(quickTap) {
		// Close context menu. 
		closeContextMenu();
		
		// Prevent default touch behavior. 
		event.preventDefault();
	}

	// Update time of last touch event. 
	lastTouchTime = nowTime;

});


/*****/


// Open custom context menu. 
function openContextMenuAt(pointX, pointY) {
	// console.log('openContextMenu @', pointX, pointY);

	// Get size of menu. 
	let rect = contextMenu.getBoundingClientRect();
	let menuWidth = rect.width;
	let menuHeight = rect.height;
	// console.log('menuWidth',menuWidth, 'menuHeight',menuHeight);

	// Get size of screen. 
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;
	// console.log('window', window);
	// console.log('windowWidth',windowWidth, 'windowHeight',windowHeight);

	// Get horizontal distance from right edge. 
	let dxRightEdge = windowWidth - pointX;
	// Get vertical distance from bottom edge. 
	let dyBottomEdge = windowHeight - pointY;


	// Position context menu. 

	// Horizontal position: close to right edge
	if( dxRightEdge < 200 ) {

		// Vertical position: close to bottom edge
		if( dyBottomEdge < 200 ) {

			// Update position. 
			contextMenu.style.top = `${ (pointY - menuHeight) }px`;
			contextMenu.style.left = `${ (pointX - menuWidth) }px`;
			
			// Square bottom right corner. 
			contextMenu.style.borderRadius = '8px 8px 3px 8px';
		}

		// Vertical position: normal
		else {

			// Update position. 
			contextMenu.style.top = `${ (pointY) }px`;
			contextMenu.style.left = `${ (pointX - menuWidth) }px`;
			
			// Square top right corner. 
			contextMenu.style.borderRadius = '8px 3px 8px 8px';
		}
	}

	// Horizontal position: normal
	else {

		// Vertical position: close to bottom edge
		if( dyBottomEdge < 200 ) {

			// Update position. 
			contextMenu.style.top = `${ (pointY - menuHeight) }px`;
			contextMenu.style.left = `${ (pointX) }px`;
			
			// Square bottom left corner. 
			contextMenu.style.borderRadius = '8px 8px 8px 3px';
		}

		// Vertical position: normal
		else {

			// Update position. 
			contextMenu.style.top = `${ (pointY) }px`;
			contextMenu.style.left = `${ (pointX) }px`;
			
			// Square top left corner. 
			contextMenu.style.borderRadius = '3px 8px 8px 8px';
		}
	}


	// Make context menu visible. 
	contextMenu.classList.add('active');
}


// Close custom context menu. 
function closeContextMenu() {

	// Make context menu invisible. 
	contextMenu.classList.remove('active');
}


// // Handle menu item click. 
// function name(params) {
	
// }
