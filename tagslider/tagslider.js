


// Initialize dragging state of tag list bin. 
let currentlyDragging = false;

// Get tag list slider. 
const slider = document.querySelector('div#container main.main div.slider');

// Get tag list slider bin. 
const taglist = document.querySelector('div#container main.main div.slider ul.taglist');

// Get root element. 
const root = document.querySelector(':root');


/*****/


// 
taglist.addEventListener('mousedown', ()=> currentlyDragging = true );
taglist.addEventListener('mousemove', draggingMotion );
document.addEventListener('mouseup', ()=> currentlyDragging = false );


/*****/


// 
function draggingMotion(event) {
	if(!currentlyDragging) return;

	// Get horizontal offset. 
	let dx = event.movementX;

	// 
	taglist.scrollLeft -= dx
}

// Slide tags in leftward direction. 
function slideLeft() {

	// Get previous slide percentage. 
	let pct = root.style.getProperyValue('--currentslidepercent');

	// Decrement slide percentage to new value. 
	pct -= 10;

	// Update to new slide percentage. 
	updateSlidePercent(pct);
}

// Slide tags in rightward direction. 
function slideRight() {

	// Get previous slide percentage. 
	let pct = root.style.getProperyValue('--currentslidepercent');

	// Increment slide percentage to new value. 
	pct += 10;

	// Update to new slide percentage. 
	updateSlidePercent(pct);
}

// Update slide percentage (scroll position). 
function updateSlidePercent(pct) {

	// Get max scroll position. 
	let maxscrollposition = slider.scrollLeftMax;

	// Limit slide percentage to values within range. 
	if(pct<0) pct = 0;
	else if(pct>100) pct = 100;

	// Set new slide percentage. 
	root.style.setPropery('--currentslidepercent',pct);

	// Apply slide percentage. 
	let pos = (pct/100) * maxscrollposition;
	taglist.style.transform = `translateX(${pos}px)`;
}

