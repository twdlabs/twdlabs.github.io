


// Get desktop window container. 
const desktop = document.querySelector('div#container div.desktop');


/*****/


// Define dimensions of dot matrix (in drag hook). 
const numdotsperrow = 12;
const numrowsperdotmatrix = 3;

// Initialize count of desktop windows. 
let windowcount = 0;
console.log('Window count:',windowcount);

// Increment count of desktop windows. 
windowcount++;
windowcount++;
windowcount++;
console.log('Window count:',windowcount);


/*****/


// Activate desktop. 
activateDesktop();


/*****/


// Activate desktop. 
function activateDesktop() {

	// Get all current desktop windows. 
	let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

	// Go thru all desktop windows. 
	for(let dw of alldesktopwindows) {
		// Activate desktop window. 
		activateDesktopWindow(dw);

		// Position desktop window. 
		positionDesktopWindow(dw);
	}

	/****/

	// Activate desktop window. 
	function activateDesktopWindow(dw) {
		console.log('Now activating:',dw);
			
		// Activate movement of desktop window. 
		makeMovable(dw,'div.headbar');
			
		// Activate controls of desktop window. 
		makeControllable(dw);

	}

	// Position desktop window. 
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
}

// Activate movement of given desktop window. 
function makeMovable(desktopwindow,draghookselector) {
	// console.log('\tActivating movement:',desktopwindow);

	// Cancel default dragging functionality. 
	desktopwindow.setAttribute('draggable',false);

	// Get drag hook of desktop window. 
	let draghook = desktopwindow.querySelector(draghookselector) || desktopwindow;

	// Get container for dot matrix in drag hook. 
	let dotmatrix = draghook.querySelector('div.dotmatrix');
	// Create dot matrix for drag hook. 
	if(dotmatrix) dotmatrix.innerHTML = createDotMatrix();

	// Handle mouse movement events. 
	handleMouseEvents();

	// Handle touch movement events. 
	handleTouchEvents();

	/****/

	// Handle mouse movement events. 
	function handleMouseEvents() {

		// Allow initiation of window movement. 
		draghook.addEventListener('mousedown', hookToPointer );
		desktopwindow.addEventListener('mousedown', bringWindowToTop );
	
		// Allow ending of window movement. 
		document.addEventListener('mouseup', unHookFromPointer );
		desktop.addEventListener('mouseleave', unHookFromPointer );
		desktopwindow.addEventListener('mouseleave', unHookFromPointer );
	}

	// Handle touch movement events. 
	function handleTouchEvents() {
	
		// Allow initiation of window movement. 
		draghook.addEventListener('touchstart', hookToPointer );
		desktopwindow.addEventListener('touchstart', bringWindowToTop );
		
		// Allow ending of window movement. 
		document.addEventListener('touchcancel', unHookFromPointer );
		document.addEventListener('touchend', unHookFromPointer );
	}

	// Hook desktop window to pointer to begin movement. 
	function hookToPointer(event) {
		// console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);

		// Check if clicked target is within dot button. 
		let clickedInDotBtn = (event.target).closest('div#container div.desktop div.window div.headbar div.controls div.dot');
		// console.log('Clicked in dot button:',!!clickedInDotBtn);
		// Ignore move attempts from dot buttons. 
		if(clickedInDotBtn) return;

		// Set as currently moving. 
		desktopwindow.classList.add('moving');
		
		// Start tracking mouse with desktop window (when mouse button pressed). 
		desktopwindow.addEventListener('mousemove',moveToPointer);
		// Start tracking touch with desktop window (when mouse button pressed). 
		desktopwindow.addEventListener('touchmove',moveToPointer);

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}

	// Move desktop window to position of pointer. 
	function moveToPointer(event) {
		// console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);
		
		// Get original position of desktop window. 
		let deskwindowstyle = window.getComputedStyle(desktopwindow);
		let x0 = parseInt(deskwindowstyle.left);
		let y0 = parseInt(deskwindowstyle.top);
		// console.log('(x0,y0):',x0,y0);
		
		// Get movement of pointer. 
		let dx = event.movementX;
		let dy = event.movementY;
		// Get new position of pointer. 
		let x1 = x0 + dx;
		let y1 = y0 + dy;
		// console.log('(dx,dy):',dx,dy);
		// console.log('(x1,y1):',x1,y1);
		
		// Set new position to desktop window. 
		desktopwindow.style.left = `${x1}px`;
		desktopwindow.style.top = `${y1}px`;
		// desktopwindow.style.left = `${desktopwindow.offsetLeft-dx}px`;
		// desktopwindow.style.top = `${desktopwindow.offsetTop-dy}px`;

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
		console.log('x:',x0,dx,x1);
		console.log('y:',y0,dy,y1);
	}

	// Un-hook desktop window from pointer to finish movement. 
	function unHookFromPointer(event) {
		// console.log(event,desktopwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);

		// Set as not currently moving. 
		desktopwindow.classList.remove('moving');
		
		// Stop tracking mouse with desktop window (when mouse button released). 
		desktopwindow.removeEventListener('mousemove',moveToPointer);
		// Stop tracking touch with desktop window (when mouse button released). 
		desktopwindow.removeEventListener('touchmove',moveToPointer);

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

	// Bring selected desktop window to top layer. 
	function bringWindowToTop(event) {
		
		// Check if selected desktop window already on top. 
		let alreadyOnTop = desktopwindow.classList.contains('top');
		if(alreadyOnTop) {
			console.log('Already on top!',desktopwindow);
			return;
		}

		// Get new z-index value. 
		let newtoplevel = getNewTopLevel();

		// Set new level for desktop window. 
		desktopwindow.style.setProperty('--i',newtoplevel);

		// Get all current desktop windows. 
		let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

		// Go thru all desktop windows. 
		for(let dw of alldesktopwindows) {
			// Set only current desktop window as active. 
			if(dw==desktopwindow) {
				dw.classList.add('top');
			}
			else {
				dw.classList.remove('top');
			}
		}

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}
}

// Activate controls for given desktop window. 
function makeControllable(desktopwindow) {
	// console.log('\tActivating controls:',desktopwindow);

	// Get control dot buttons. 
	let dotbtnred = desktopwindow.querySelector('div#container div.desktop div.window div.headbar div.controls div.dot.r');
	let dotbtnyellow = desktopwindow.querySelector('div#container div.desktop div.window div.headbar div.controls div.dot.y');
	let dotbtngreen = desktopwindow.querySelector('div#container div.desktop div.window div.headbar div.controls div.dot.g');

	// Activate control dot buttons. 
	dotbtnred.addEventListener('click',closeWindow);
	dotbtnyellow.addEventListener('click',toggleMinimize);
	dotbtngreen.addEventListener('click',toggleMaximize);

	/****/

	// Toggle window minimization. 
	function toggleMinimize() {

		// Check if already minimized. 
		let alreadyMinimized = desktopwindow.classList.contains('min');

		// Un-minimize if already minimized. 
		if(alreadyMinimized) {
			// 
			desktopwindow.classList.remove('min');
		}
		// Minimize if not already minimized. 
		else {
			// 
			desktopwindow.classList.add('min');
			// Ensure exclusivity of max/min. 
			desktopwindow.classList.remove('max');
		}
	}

	// Toggle window maximization. 
	function toggleMaximize() {

		// Check if already maximized. 
		let alreadyMaximized = desktopwindow.classList.contains('max');

		// Un-maximize if already maximized. 
		if(alreadyMaximized) {
			// 
			desktopwindow.classList.remove('max');
		}
		// Maximize if not already maximized. 
		else {
			// 
			desktopwindow.classList.add('max');
			// Ensure exclusivity of max/min. 
			desktopwindow.classList.remove('min');
		}
	}

	// Close window. 
	function closeWindow() {
		// Remove element from page. 
		desktopwindow.remove();
	}
}

// Get new level above highest desk level. 
function getNewTopLevel() {

	// Initialize max desk level. 
	let maxlevel = 0;

	// Get all current desktop windows. 
	let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

	// Go thru each desktop window. 
	for(let dw of alldesktopwindows) {

		// Get desk level of current window. 
		let windowlevel = dw.style.getPropertyValue('--i') * 1;

		// Save level as maximum if greater than maximum. 
		if(windowlevel>maxlevel) maxlevel = windowlevel;
	}

	// Get current max z-index. 
	return (maxlevel + 1);
}
