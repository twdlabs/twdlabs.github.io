


// Get tag list slider. 
const slider = document.querySelector('div#container main.main div.slider');

// Get tag list slider bin. 
const tagbox = document.querySelector('div#container main.main div.slider ul.taglist');

// Get tag list slider bin. 
const tagitems = document.querySelectorAll('div#container main.main div.slider ul.taglist li.tagitem');

// Get slider edges. 
const leftedge = document.querySelector('div#container main.main div.edge.left');
const rightedge = document.querySelector('div#container main.main div.edge.right');

// Get slide buttons. 
// const slidebtns = document.querySelectorAll('div#container main.main div.edge div.slidebtn');
// const leftslidebtn = document.querySelector('div#container main.main div.edge.left div.slidebtn');
// const rightslidebtn = document.querySelector('div#container main.main div.edge.right div.slidebtn');

// Initialize dragging state of tag list bin. 
let isCurrentlyDragging = false;

// Define edge width (in rem). 
let edgewidth = 4*16;


/*****/


// Activate tags. 
activateTags();

// Activate tag slider. 
activateTagSlider();

// Update button visibility. 
updateBtnVisibility();


/*****/


// Activate tags. 
function activateTags() {

	// Activate tags. 
	for(let tag of tagitems) {
		// Select tag. 
		tag.addEventListener('click',selectTag);
	}

	/****/
	
	// Select tag. 
	function selectTag(event) {

		// Un-highlight previously selected tag. 
		tagbox.querySelector('.active').classList.remove('active');

		// Highlight newly selected tag. 
		tag = event.currentTarget;
		tag.classList.add('active');
	}
}

// Activate tag slider. 
function activateTagSlider() {

	// Start dragging. 
	tagbox.addEventListener('mousedown', startDragging );

	// Ccontinue dragging. 
	tagbox.addEventListener('mousemove', continueDragging );

	// Finish dragging. 
	document.addEventListener('mouseup', finishDragging );

	/****/

	// Start dragging. 
	function startDragging(event) {

		// Turn on drag mode. 
		isCurrentlyDragging = true;
	}

	// Ccontinue dragging. 
	function continueDragging(event) {

		// Ignore mouse movement when not in drag mode. 
		if(!isCurrentlyDragging) return;

		// Allow insta-movement of slider. Prevent tag clicks. 
		slider.classList.add('dragmode');
	
		// Get horizontal movement. 
		let dx = event.movementX;
		console.log('dx:',dx);
	
		// Apply horizontal offset. 
		tagbox.scrollLeft += dx;
		console.log('scrollLeft:',tagbox.scrollLeft);
	}

	// Finish dragging. 
	function finishDragging(event) {

		// Turn off drag mode. 
		isCurrentlyDragging = false;
		slider.classList.remove('dragmode');

		// Update button visibility. 
		updateBtnVisibility();
	}
}

// Update button visibility. 
function updateBtnVisibility() {

	// Check current scroll status. 
	let allWayLeft = (slider.scrollLeft == 0);
	// console.log('allWayLeft:',allWayLeft);
	let allWayRight = (slider.scrollLeft == slider.scrollLeftMax);
	// console.log('allWayRight:',allWayRight);

	// Hide left button if all the way left. 
	if(allWayLeft) leftedge.classList.add('gone');
	// Show left button otherwise. 
	else leftedge.classList.remove('gone');

	// Hide right button if all the way right. 
	if(allWayRight) rightedge.classList.add('gone');
	// Show right button otherwise. 
	else rightedge.classList.remove('gone');
}


// Show more tags from leftward direction. 
function slideLeft() {

	// Decrement scroll position. 
	slider.scrollLeft += -(slider.clientWidth-2*edgewidth);

	// Update button visibility. 
	updateBtnVisibility();
}

// Show more tags from rightward direction. 
function slideRight() {

	// Increment scroll position. 
	slider.scrollLeft += (slider.clientWidth-2*edgewidth);

	// Update button visibility. 
	updateBtnVisibility();
}
