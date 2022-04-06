

// Make item draggable. 
let itemA = document.getElementById('itemA');
makeItemDraggable(itemA);


/*****/


// Make given item draggable. 
function makeItemDraggable(item) {

	// Define initial cursor position. 
	// var x0 = 0;
	// var y0 = 0;
	// var dx = 0;
	// var dy = 0;

	// Get hook for drag trigger. 
	let draghook = item.querySelector('.draghook');

	// Allow for initiation of drag movement. 
	draghook.addEventListener('mousedown',beginDragProcess);

	// Allow for ending of drag movement. 
	item.addEventListener('mouseleave',endDragProcess);
	document.addEventListener('mouseup',endDragProcess);

	/*****/

	// Begin dragging item. 
	function beginDragProcess(event) {
		console.log(event);

		// Use either the default event or the window's event. 
		// event = event || window.event;

		// Cancel default drag/drop behavior. 
		// event.preventDefault();

		// // Save initial cursor position. 
		// x0 = event.clientX;
		// y0 = event.clientY;
		// console.log('\tx0:',x0);
		// console.log('\ty0:',y0);
		
		// Start tracking mouse with item when mouse button pressed. 
		item.addEventListener('mousemove',dragElement);
	}

	// Drag item to current mouse position. 
	function dragElement(event) {
		console.log(event);

		// Use either the default event or the window's event. 
		// event = event || window.event;

		// Cancel default drag/drop behavior. 
		// event.preventDefault();
		
		let getStyle = window.getComputedStyle(item);
		let x0 = parseInt(getStyle.left);
		let y0 = parseInt(getStyle.top);
		// x0 = event.clientX;
		// y0 = event.clientY;
		console.log('x0:',x0);
		console.log('y0:',y0);

		// Save new cursor position. 
		let dx = event.movementX;
		let dy = event.movementY;
		// dx = x0 - event.clientX;
		// dy = y0 - event.clientY;
		console.log('dx:',dx);
		console.log('dy:',dy);
		
		// Update item position. 
		// item.style.left = `${item.offsetLeft-dx}px`;
		// item.style.top = `${item.offsetTop-dy}px`;
		item.style.left = `${ x0 + dx }px`;
		item.style.top = `${ y0 + dy }px`;
	}

	// End dragging process. 
	function endDragProcess(event) {
		console.log(event);

		// Use either the default event or the window's event. 
		// event = event || window.event;

		// Cancel default drag/drop behavior. 
		// event.preventDefault();
		
		// Stop moving item when mouse button released. 
		// item.removeEventListener('mouseup',endDragProcess);
		item.removeEventListener('mousemove',dragElement);
	}
}
