


// Get destination for slide images. 
const slidesdestination = document.querySelector('div#container main.slideshow div.inner');

// Get destination for controls. 
const controllerdestination = document.querySelector('div#container main.slideshow div.controls');


/*****/


// Define automatic time per slide (in ms). 
const dt = 1500;

// Initialize slide index. 
let currentslideindex = 0;


/*****/


// Load slideshow controller. 
loadSlideControls();

// Select initial slide. 
selectSlideByIndex(currentslideindex);

// Start slide motion. 
// startSlideMotion();


/*****/


// Load slideshow controller. 
function loadSlideControls() {
	
	// Initialize result. 
	let controldots = '';

	// Add slides and dot controls. 
	for(i in slideshowdata) {

		controldots += `
		<!-- dot -->
		<span class="dot" onclick="selectSlideByIndex(${i})"></span>
		<!-- /dot -->`;
	}

	// Add result to page. 
	controllerdestination.innerHTML = controldots;
}

// Load data for currently selected slide and both adjacent slides. 
function loadSelectedSlideData() {

	// Initialize result. 
	let slideresults = '';

	// Get index for prev slide. 
	let previndex = getDeltaSlideIndex(-1);
	// Get index for next slide. 
	let nextindex = getDeltaSlideIndex(+1);

	// Create layout for prev slide. 
	slideresults += createSlideLayout(previndex);
	// Create layout for current slide. 
	slideresults += createSlideLayout(currentslideindex);
	// Create layout for next slide. 
	slideresults += createSlideLayout(nextindex);

	// Display results on page. 
	slidesdestination.innerHTML = slideresults;

	/****/

	// Create layout for slide. 
	function createSlideLayout(index) {

		// Get data for current slide. 
		let slidedata = slideshowdata[index];
		// Get image url for current slide. 
		let imgurl = slidedata.imageurl;
		// Get caption for current slide. 
		let caption = slidedata.caption;

		// Compile layout for slide. 
		return `
		<!-- img -->
		<img src="${imgurl}" alt="${caption}" title="${caption}">
		<!-- /img -->`;
	}

	// Get delta slide index. 
	function getDeltaSlideIndex(diff) {

		// Get total number of slides. 
		let totalslidecount = slideshowdata.length;

		// Initialize new index. 
		let newindex = currentslideindex + diff;

		// Check new index. 
		if(newindex<0) newindex += totalslidecount;
		if(newindex>=totalslidecount) newindex -= totalslidecount;

		// Return new index. 
		return newindex;
	}
}

// Select slide by index. 
function selectSlideByIndex(index) {
	// console.log('Opening slide at:',index);
	
	// Show selected slide image. 
	showSlideImage();

	// Highlight selected dot in controller. 
	highlightDot();

	// Load data for selected slide. 
	loadSelectedSlideData();
	
	/****/

	// Show selected slide image. 
	function showSlideImage() {

		// Get horizontal offset using index. 
		let dx = -100*index;

		// Show selected slide by applying horizontal offset to inner slide container. 
		slidesdestination.style.transform = `translateX(${dx}%)`;
	}

	// Highlight selected dot controller. 
	function highlightDot() {

		// Get dot controllers. 
		let dots = document.querySelectorAll('div.controls span.dot');
		// console.log('dots',dots);

		// Highlight selected dot and un-highlight other dots. 
		for(let i=0 ; i<dots.length ; i++) {
			dot = dots[i];
			// console.log('dot',i,dot);
			if(i==index) dot.classList.add('active');
			else dot.classList.remove('active');
		}
	}
}

// Go to adjacent (prev/next) slide. 
function deltaSlide(dn) {

	// Increment current index. 
	currentslideindex += dn;
	normalizeCicrularIndex();

	// Show slide at new index. 
	selectSlideByIndex(currentslideindex);

	// Reset interval timer. 
	clearTimeout(slideSwitcher);
	slideSwitcher = setTimeout(function() {
		deltaSlide(1);
	},dt);

	/****/

	// Correct index when out of bounds. 
	function normalizeCicrularIndex() {
		if(currentslideindex<0) currentslideindex = slideshowdata.length-1;
		if(currentslideindex>=slideshowdata.length) currentslideindex = 0;
	}
}

// Start slide motion: cascade of animated switch to new slide every few seconds. 
function startSlideMotion() {
	let slideSwitcher = setTimeout(function() {
		deltaSlide(1);
	},dt);
}
