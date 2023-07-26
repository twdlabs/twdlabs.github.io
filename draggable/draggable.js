


// Get desktop window container. 
const desktop = document.querySelector('div#container div.desktop');

// Get all pre-existing desktop windows. 
const desktopwindows = document.querySelectorAll('div#container div.desktop div.window');


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


// Make desktop windows movable. 
for(let deskwindow of desktopwindows) {
	
	// Activate movement of desktop window. 
	makeMovable(deskwindow,'div.headbar');
}


/*****/


// Activate movement of given desktop window. 
function makeMovable(deskwindow,draghookselector) {

	// Cancel default dragging functionality. 
	deskwindow.setAttribute('draggable',false);

	// Get drag hook of desktop window. 
	let draghook = deskwindow.querySelector(draghookselector) || deskwindow;

	// Handle mouse movement events. 
	handleMouseEvents();

	// Handle touch movement events. 
	handleTouchEvents();

	// Get container for dot matrix in drag hook. 
	let dotmatrix = draghook.querySelector('div.dotmatrix');
	// Create dot matrix for drag hook. 
	if(dotmatrix) dotmatrix.innerHTML = createDotMatrix();

	/****/

	// Handle mouse movement events. 
	function handleMouseEvents() {

		// Allow initiation of window movement. 
		draghook.addEventListener('mousedown',hookToPointer);
		deskwindow.addEventListener('mousedown',bringWindowToTop);
	
		// Allow ending of window movement. 
		document.addEventListener('mouseup',unHookFromPointer);
		desktop.addEventListener('mouseleave',unHookFromPointer);
		deskwindow.addEventListener('mouseleave',unHookFromPointer);
	}

	// Handle touch movement events. 
	function handleTouchEvents() {
	
		// Allow initiation of window movement. 
		draghook.addEventListener('touchstart',hookToPointer);
		deskwindow.addEventListener('touchstart',bringWindowToTop);
		
		// Allow ending of window movement. 
		document.addEventListener('touchcancel',unHookFromPointer);
		document.addEventListener('touchend',unHookFromPointer);
	}

	// Hook desktop window to pointer to begin movement. 
	function hookToPointer(event) {
		console.log(event,deskwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);

		// Check if clicked target is within dot button. 
		let clickedInDotBtn = (event.target).closest('div#container div.desktop div.window div.headbar div.controls div.dot');
		// console.log('Clicked in dot button:',!!clickedInDotBtn);
		// Ignore move attempts from dot buttons. 
		if(clickedInDotBtn) return;

		// Set as currently moving. 
		deskwindow.classList.add('moving');
		
		// Start tracking mouse with desktop window (when mouse button pressed). 
		deskwindow.addEventListener('mousemove',moveToPointer);
		// Start tracking touch with desktop window (when mouse button pressed). 
		deskwindow.addEventListener('touchmove',moveToPointer);

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}

	// Move desktop window to position of pointer. 
	function moveToPointer(event) {
		// console.log(event,deskwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);
		
		// Get original position of desktop window. 
		let deskwindowstyle = window.getComputedStyle(deskwindow);
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
		deskwindow.style.left = `${x1}px`;
		deskwindow.style.top = `${y1}px`;
		// deskwindow.style.left = `${deskwindow.offsetLeft-dx}px`;
		// deskwindow.style.top = `${deskwindow.offsetTop-dy}px`;

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
		console.log('x:',x0,dx,x1);
		console.log('y:',y0,dy,y1);
	}

	// Un-hook desktop window from pointer to finish movement. 
	function unHookFromPointer(event) {
		// console.log(event,deskwindow);
		// console.log('Target clicked:',event.target);
		// console.log('Target hit:',event.currentTarget);

		// Set as not currently moving. 
		deskwindow.classList.remove('moving');
		
		// Stop tracking mouse with desktop window (when mouse button released). 
		deskwindow.removeEventListener('mousemove',moveToPointer);
		// Stop tracking touch with desktop window (when mouse button released). 
		deskwindow.removeEventListener('touchmove',moveToPointer);

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

	// Bring selected desktop window to top layer of stack. 
	function bringWindowToTop(event) {
		// console.log(this);
		let deskwindow = this;

		// Get new z-index value. 
		let newtoplevel = getNewTopLevel();

		// Set new desk level for desktop window. 
		deskwindow.style.setProperty('--i',newtoplevel);

		// Cancel default drag/drop behavior. 
		// cancelDefault(event);
	}
}

// Activate controls for given desktop window. 
function makeControllable(desktopwindow) {

	// 
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

// Create control panel for window header. 
function createControlPanel() {

	// Return control panel dots. 
	return `
	<!-- dot -->
	<div class="dot r">

		<!-- icon -->
		<span class="icon">&times;</span>
		<!-- /icon -->
		
	</div>
	<!-- /dot -->

	<!-- dot -->
	<div class="dot y">

		<!-- icon -->
		<span class="icon">&minus;</span>
		<!-- /icon -->
		
	</div>
	<!-- /dot -->

	<!-- dot -->
	<div class="dot g">

		<!-- icon -->
		<span class="icon">&plus;</span>
		<!-- /icon -->
		
	</div>
	<!-- /dot -->`;
}

// Get new level above highest desk level. 
function getNewTopLevel() {

	// Initialize max desk level. 
	let maxlevel = 0;

	// Go thru each desktop window. 
	for(let deskwindow of desktopwindows) {

		// Get desk level of current window. 
		let windowlevel = deskwindow.style.getPropertyValue('--i') * 1;

		// Save level as maximum if greater than maximum. 
		if(windowlevel>maxlevel) maxlevel = windowlevel;
	}

	// Get current max z-index. 
	return (maxlevel + 1);
}

// Request creation of new desktop window. 
function requestNewWindow() {

	// Ask user for type of desktop window. 
	let windowtype = window.prompt('What kind of desktop window ?', 'xyz');

	// Get newly created desktop window. 
	let newdeskwindowlayout = createNewWindow(windowtype);
	// Add new desktop window to page. 
	desktop.insertAdjacentHTML('beforeend',newdeskwindowlayout);

	// Get new desktop window. 
	let newdesktopwindow = document.querySelector(`div#container div.desktop div.window#window${windowcount}`);

	// Make new desktop window movable. 
	makeMovable(newdesktopwindow,'div.headbar');
	
	// TODO: Make new desktop window controllable. 
	// makeControllable(newdesktopwindow);

	// Increment count of desktop windows. 
	windowcount++;

	/****/

	// Create new desktop window. 
	function createNewWindow(type) {
		console.log('New window type:',type);
	
		// Compile layout for new desktop window. 
		return `
		<!-- window -->
		<div id="window${windowcount}" class="window" style="--i:${ getNewTopLevel() };">
	
			<!-- headbar -->
			<div class="headbar">

				<!-- controls -->
				<div class="controls">${ createControlPanel() }</div>
				<!-- /controls -->
	
				<!-- dotmatrix -->
				<div class="dotmatrix">${ createDotMatrix() }</div>
				<!-- /dotmatrix -->
	
			</div>
			<!-- /headbar -->
	
			<!-- bodycontent -->
			<div class="bodycontent">
			
				<!-- copy -->
				<p class="copy">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nemo incidunt a nam dolorum voluptates nulla perspiciatis adipisci deserunt minima quibusdam, sapiente illo blanditiis magnam deleniti tenetur hic laboriosam expedita! </p>
				<!-- /copy -->
	
			</div>
			<!-- /bodycontent -->
			
		</div>
		<!-- /window -->`;
	}
}
