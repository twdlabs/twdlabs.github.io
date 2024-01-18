


// Get main container. 
const container = document.querySelector('div#container');
// console.log('container:',container);

// Get slideshow stage. 
const slideshowstage = document.querySelector('div#container main.slideshow div.grid div.stage');
// console.log('Slideshow stage:',slideshowstage);

// Get destination for slide set. 
let slidesetdestination = document.querySelector('div#container main.slideshow div.grid div.stage ul.slideset');
// console.log('Slide set destination:',slidesetdestination);

// Get destination for control dots. 
const controldotsdestination = document.querySelector('div#container main.slideshow div.grid div.controls ul.dotlist');
// console.log('Control dots destination:',controldotsdestination);


/*****/


// Define automatic time per slide (in ms). 
const dt = 8000;

// Define slide transition time. 
const ddt = 500;

// Initialize slide index. 
let currentslideindex = -1;

// Set state of slide movement. 
let currentlyMoving = false;

// Initialize automatic slide shifter. 
let autoSlideShifter;

// 
let goingfwd = true;


/*****/


// Check for slideshow stage. 
if(slideshowstage) {

	// Select initial slide. 
	selectSlideByIndex(0,true);
	
	// Start automatic slide shifter. 
	startAutoSlide();

	// Load slideshow controller. 
	if(controldotsdestination) loadSlideControls();
	else console.warn('Missing slideshow controller');

	// Activate slideshow shortcuts. 
	activateSlideshowShortcuts();
}
else console.warn('Missing slideshow stage');


/*****/


// Load slideshow controller. 
function loadSlideControls() {
	
	// Initialize result. 
	let controldots = '';

	// Add slides and dot controls. 
	for(i in slideshowdata) {

		controldots += `
		<!-- dot -->
		<li class="dot${ i==currentslideindex ? ' active' : ''}" data-slideindex="${i}"></li>
		<!-- /dot -->`;
	}

	// Add result to page. 
	controldotsdestination.innerHTML = controldots;

	// Activate slideshow controller. 
	activateSlideControls();

	/****/

	// Activate slideshow controller. 
	function activateSlideControls() {

		// Get all control dots. 
		const controldots = document.querySelectorAll('div#container main.slideshow div.grid div.controls ul.dotlist li.dot');
		// console.log('Control dots:',controldots);

		// Go thru each control dot. 
		for(let dot of controldots) {

			// Activate control dot. 
			dot.addEventListener('click',selectDot);
		}

		/***/

		// Select dot. 
		function selectDot(event) {
			// console.log('Selecting dot...');

			// Get selected dot. 
			let dot = event.currentTarget;
			
			// Get index of selected dot. 
			let index = dot.getAttribute('data-slideindex') * 1;
			
			// Select slide by given index. 
			selectSlideByIndex(index);
		}
	}
}

// Go to adjacent (prev/next) slide. 
function displaceSlide(diff) {

	// Get index for newly selected slide. 
	let newindextemp = 1*currentslideindex + 1*diff;
	// console.log('New index:',newindextemp);
	// Check validity of index for newly selected slide. 
	let newindex = checkNewIndex(newindextemp);
	// console.log('New index:',newindex);

	// Show newly selected slide. 
	selectSlideByIndex(newindex);

	// Reset automatic slide shifter. 
	clearTimeout(autoSlideShifter);
	startAutoSlide();
}

// Select slide by index. 
function selectSlideByIndex(selectedindex,justStarted) {
	if(currentlyMoving) {
		console.log('Still moving from last operation...');
		return;
	}
	console.log('Selected slide index:',selectedindex);

	// Check if staying put (selected slide already in place). 
	if(selectedindex == currentslideindex) return;

	// Show selected direction. 
	let selecteddirection = (goingfwd ? 'Forward' : 'Back');
	console.log( 'Selected direction:', selecteddirection );

	// Save index of newly selected slide. 
	currentslideindex = 1*selectedindex;

	// Load instantly if just started. 
	if(justStarted) {

		// Load newly selected slide. 
		loadSelectedSlide();
	}

	// Load smoothly if not just started. 
	else {

		// Glide smoothly to newly selected slide. 
		glideToNewSlide();

		// Reload selected slide. 
		setTimeout(loadSelectedSlide,ddt);
	}

	// Highlight selected dot in controller. 
	highlightSelectedDot();

	/****/

	// Highlight selected dot in controller. 
	function highlightSelectedDot() {
		// console.log('Highlighting selected dot...');

		// Get all control dots. 
		const controldots = document.querySelectorAll('div#container main.slideshow div.grid div.controls ul.dotlist li.dot');
		// console.log('Control dots:',controldots);

		// Go thru each control dot. 
		for(let dot of controldots) {
			// console.log('dot',i,dot);

			// Get index of current dot. 
			let index = dot.getAttribute('data-slideindex');

			// Highlight selected dot. 
			if(index==selectedindex) dot.classList.add('active');

			// Un-highlight non-selected dot. 
			else dot.classList.remove('active');
		}
	}

	// Glide smoothly to new slide. 
	function glideToNewSlide() {

		// Set state of slide movement. 
		currentlyMoving = true;

		// Get index for newly selected slide. 
		let newslideindex = currentslideindex;

		// TODO: 

		// Create layout for new slide. 
		let newslidelayout = createSlideLayout(newslideindex, goingfwd?'next':'prev');

		// Load new slide adjacent to current slide. 
		slidesetdestination.insertAdjacentHTML('beforeend',newslidelayout);

		// Get horizontal offset for slide set. 
		let xfactor = goingfwd ? +1 : -1;
		let dx = -100 * xfactor;

		// Glide smoothly to adjacent slide. 
		slidesetdestination.style.transform = `translateX(${dx}%)`;
	}

	// Load currently selected slide. 
	function loadSelectedSlide() {
		// console.log('Selected slide index:',currentslideindex);

		// Load new slide set (resetting position to center slide). 
		loadNewSlideSet();

		// Refresh destination for slide list items. 
		refreshSlideSetDestination();

		// Set state of slide movement. 
		currentlyMoving = false;

		/***/

		// Load new slide set (resetting position to center slide). 
		function loadNewSlideSet() {

			// Display new slide set. 
			slideshowstage.innerHTML = `
			<!-- slideset -->
			<ul class="slideset">${ createSlideSet() }</ul>
			<!-- /slideset -->`;
	
			// Display new slide set. 
			// slidesetdestination.innerHTML = createSlideSet();
	
			// Reset position to center slide. 
			// slidesetdestination.style.transform = '';

			/**/

			// Create set of slides. 
			function createSlideSet() {
		
				// Initialize set of slides. 
				let slideset = '';
			
				// Get index for prev slide. 
				let previndex = checkNewIndex(currentslideindex - 1);
				// console.log('previndex:',previndex);
				// Add to slide set: layout for prev slide. 
				slideset += createSlideLayout(previndex,'prev');
			
				// Add to slide set: layout for current slide. 
				slideset += createSlideLayout(currentslideindex,'');
		
				// Get index for next slide. 
				let nextindex = checkNewIndex(currentslideindex + 1);
				// console.log('nextindex:',nextindex);
				// Add to slide set: layout for next slide. 
				slideset += createSlideLayout(nextindex,'next');
		
				// console.log('Slides:',previndex,currentslideindex,nextindex);
	
				// Return set of slides. 
				return slideset;
			}
		}

		// Refresh destination for slide set. 
		function refreshSlideSetDestination() {
			slidesetdestination = document.querySelector('div#container main.slideshow div.grid div.stage ul.slideset');
		}
	}
	
	// Create layout for slide at given index. 
	function createSlideLayout(index,slideposition) {

		// Get data for current slide. 
		let slidedata = slideshowdata[index];
		// Get image url for current slide. 
		let imgurl = slidedata.imageurl;
		// Get caption for current slide. 
		let caption = slidedata.caption;

		// Compile layout for given slide. 
		return `
		<!-- slideitem -->
		<li class="slideitem ${slideposition}" data-slideindex="${index}">

			<!-- img -->
			<img class="background" src="${imgurl}">
			<!-- /img -->

			<!-- caption -->
			<span class="caption">${caption}</span>
			<!-- /caption -->

		</li>
		<!-- /slideitem -->`;
	}
}

// Check validity of new index (and adjust as needed). 
function checkNewIndex(newindex) {

	// Check if going backward. 
	if(newindex < currentslideindex) goingfwd = false;
	// Check if going forward. 
	if(newindex > currentslideindex) goingfwd = true;
	
	// Get total number of slides. 
	let totalslidecount = slideshowdata.length;
	// console.log('totalslidecount:',totalslidecount);

	// Handle index underflow. 
	if(newindex<0) {
		// console.log('Underflow');
		newindex += totalslidecount;
	}

	// Handle index overflow. 
	if(newindex>=totalslidecount) {
		// console.log('Overflow');
		newindex -= totalslidecount;
	}

	// Return new index. 
	return newindex;
}


/*****/


// Start automatic slide shifter. 
function startAutoSlide() {
	// Start slide motion: cascade of animated switch to new slide every few seconds. 
	autoSlideShifter = setTimeout( ()=>{ displaceSlide(+1) } ,dt);
}

// Activate slideshow shortcuts. 
function activateSlideshowShortcuts() {

	// Check for shortcut key upon key release. 
	document.addEventListener('keyup',checkShortcutKey);

	/****/

	// Check for shortcut key. 
	function checkShortcutKey(event) {
		// console.log(event);

		// Press spacebar: Toggle zoomed out dev mode. 
		if(event.keyCode==32 || event.key==' ') toggleZoom();
		// Press left arrow: Toggle slideshow play. 
		if(event.keyCode==37) displaceSlide(-1);
		// Press right arrow: Toggle developer mode. 
		if(event.keyCode==39) displaceSlide(+1);
	}
}

// Toggle zoomed out mode. 
function toggleZoom() {
	container.classList.toggle('zoom');
}
