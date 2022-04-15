
// Handle events. 
handleEvents();

/*****/

// Handle events. 
function handleEvents() {

	// 
	document.addEventListener('touchstart',touchStartMethod);
	// document.addEventListener('mousedown',touchStartMethod);
	// 
	document.addEventListener('touchmove',touchMoveMethod);
	// document.addEventListener('mousemove',touchMoveMethod);
	// 
	document.addEventListener('touchend',touchEndMethod);
	// document.addEventListener('mouseup',touchEndMethod);
}


// TouchStartMethod
function touchStartMethod(event) {
	// event.preventDefault();
	console.log('Start:',event);

	// Get newly started touches. 
	let newTouches = [...event.changedTouches];

	// Add dot for each touch. 
	for(let touch of newTouches) {
		let id = touch.identifier;
		let x = touch.pageX;
		let y = touch.pageY;
		addNewDot(id,x,y);
	}

	/*****/

	// Add new dot to page. 
	function addNewDot(touchId,xPos,yPos) {
		
		// Create new dot
		let dot = `
		<!-- dot -->
		<div id="${touchId}" class="dot" style="--x:${xPos}px; --y:${yPos}px;"></div>
		<!-- /dot -->`;
	
		// Add dot to page. 
		let container = document.getElementById('container');
		container.innerHTML += dot;
	}
}


// TouchMoveMethod
function touchMoveMethod(event) {
	// event.preventDefault();
	console.log('Move:',event);

	// // Check for valid move. 
	// let validMove = event || event.touches.length;
	// if(validMove) console.log('Move:',event);

	// Get newly moved touches. 
	let newTouchMoves = [...event.changedTouches];

	// Add dot for each touch. 
	for(let touchmove of newTouchMoves) {
		let id = touchmove.identifier;
		let x = touchmove.pageX;
		let y = touchmove.pageY;
		updateDot(id,x,y);
	}

	/*****/

	// Update dot on page. 
	function updateDot(touchMoveId,xPos,yPos) {
		
		// Get dot to update. 
		let dot = document.getElementById(touchMoveId);
	
		// Update dot position. 
		dot.style.left = xPos;
		dot.style.top = yPos;
	}
}


// TouchEndMethod
function touchEndMethod(event) {
	// event.preventDefault();
	console.log('End:',event);

	// Get newly ended touches. 
	let newUntouches = [...event.changedTouches];

	// Remove dot for each un-touch. 
	for(let untouch of newUntouches) {
		removeDotById(untouch.identifier);
	}

	/*****/

	// Remove dot from page. 
	function removeDotById(touchEndId) {
		
		// Get dot to remove. 
		let dot = document.getElementById(touchEndId);
	
		// Remove dot. 
		// dot.classList.remove('dot');
		dot.remove();
	}
}
