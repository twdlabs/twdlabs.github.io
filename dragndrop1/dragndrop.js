

// Handle events. 
handleEvents();


/*****/


// Handle events. 
function handleEvents() {

	// Get draggable items. 
	let dragitems = document.getElementsByClassName('dragitem');
	// console.log('Draggable items:',dragitems);

	// Activate draggable items. 
	for(let item of dragitems) {
		item.setAttribute('draggable','true');
		item.addEventListener('dragstart',pickUpItem);
		item.addEventListener('dragend',dropOffItem);
	}

	// Get drag/drop destinations. 
	let dragdestinations = document.getElementsByClassName('dragdestination');
	// console.log('Drag/drop destinations:',dragdestinations);
	
	// Activate drag/drop destinations. 
	for(let destination of dragdestinations) {
		destination.addEventListener('dragenter',enterDropDestination);
		destination.addEventListener('dragover',allowDropping);
		destination.addEventListener('dragleave',leaveDropDestination);
		destination.addEventListener('drop',dropToDestination);
	}
}

// Change highlight state of drag/drop destination element. 
function setHighlight(destination,on=false) {
	// Highlight drag/drop destination. 
	if(on) destination.classList.add('ready');
	// Un-highlight drag/drop destination. 
	else destination.classList.remove('ready');
}

// Pick up draggable element (to be dropped inside another element). 
function pickUpItem(event) {
	// console.log('Picked up item:', event.currentTarget, event);

	// Change appearance of lifted item. 
	event.currentTarget.classList.add('active');

	// Get id of dragged item. 
	let dragitemid = event.currentTarget.id;

	// Save id of dragged item to data transfer list. 
	event.dataTransfer.setData('dragitemid', dragitemid);
}

// Drop dragged element. 
function dropOffItem(event) {
	// console.log('Dropped off item:', event.currentTarget, event);

	// Revert appearance of dropped item. 
	event.currentTarget.classList.remove('active');
}

// Enter drop destination element. 
function enterDropDestination(event) {
	// console.log('Entering drop destination', event.currentTarget, event);

	// Highlight drag/drop destination prior to item being dropped. 
	setHighlight(event.target,true);
}

// Allow for dropping inside destination element. 
function allowDropping(event) {
	// console.log('Allowing drop', event.currentTarget, event);

	// Cancel default drag/drop behavior. 
	event.preventDefault();
}

// Leave drop destination element. 
function leaveDropDestination(event) {
	// console.log('Leaving drop destination', event.currentTarget, event);

	// Un-highlight drag/drop destination if item not dropped inside. 
	setHighlight(event.target,false);
}

// Drop item inside destination element. 
function dropToDestination(event) {
	// console.log('Dropped item:', event.currentTarget, event);

	// Get id of dragged item from data transfer list. 
	let dragitemid = event.dataTransfer.getData('dragitemid');
	
	// Get dragged item. 
	let dragitem = document.getElementById(dragitemid);

	// console.log('\tdragitemid:',dragitemid,dragitem);

	// Add dropped item to drag/drop destination. 
	event.currentTarget.appendChild(dragitem);

	// Un-highlight drag/drop destination after item dropped inside. 
	setHighlight(event.currentTarget,false);

	// Cancel default drag/drop behavior. 
	event.preventDefault();
}
