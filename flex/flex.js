


// Get flex container. 
const flexbox = document.querySelector('div#container div.flex');

// Get items of flex container. 
const flexitems = document.querySelector('div#container div.flex div.item');

// Get width setter. 
let widthSetter = document.querySelector('div#container div.controller div.panel input#widthSetter');

// Get all panel buttons. 
const panelbtns = document.querySelectorAll('div#container div.controller div.panel button');

// Get default panel buttons. 
const defaultpanelbtns = document.querySelectorAll('div#container div.controller div.panel button.default');


/*****/


// 
start();


/*****/


// 
function start() {

	// Reset range slider input to full. 
	widthSetter.value = 100;

	// Go thru panel buttons. 
	for(let btn of panelbtns) {
		// Enable panel button. 
		btn.addEventListener('click',clickBtn);
	}

	// Go thru default panel buttons. 
	for(let btn of defaultpanelbtns) {
		// Activate default button. 
		btn.classList.add('active');
	}
}


// 
function clickBtn(event) {

	// Get selected button. 
	let selectedbtn = event.target;

	// Get panel for selected button. 
	let selectedpanel = selectedbtn.parentElement;

	// Get all buttons within selected panel. 
	let siblingbtns = selectedpanel.querySelectorAll('button');

	// Go thru buttons in selected panel. 
	for(let btn of siblingbtns) {
		// De-activate button. 
		btn.classList.remove('active');
	}

	// Activate selected button. 
	selectedbtn.classList.add('active');
}


// Set flex container width.
function adjustWidth(value) {
	console.log('value',value);
	flexbox.style.width = `${value}%`;
}

// Flex Direction: Set flex direction.
function setFlexDirection(value) {
	flexbox.style.flexDirection = value;
}

// Main Axis: Set flex justification (main axis).
function setJustification(value) {
	flexbox.style.justifyContent = value;
}

// Cross Axis: Set flex alignment (cross axis).
function setAlignment(value) {
	flexbox.style.alignItems = value;
}

// Wrap Status: Set flex wrap status.
function setWrapStatus(value) {
	flexbox.style.flexWrap = value;
}

// Cross Axis: Set flex overflow alignment (cross axis).
function setOverflowAlignment(value) {
	flexbox.style.alignContent = value;
}

// 
function setGrowth(value) {

	// Go thru each item. 
	for(let item of flexitems) {
		item.style.flexGrow = value;
	}
}

// 
function setShrinkth(value) {

	// Go thru each item. 
	for(let item of flexitems) {
		item.style.flexShrink = value;
	}
}
