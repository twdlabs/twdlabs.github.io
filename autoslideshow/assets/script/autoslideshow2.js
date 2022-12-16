


// Get page container. 
const container = document.querySelector('div#container');
// console.log('slideshow:',slideshow);

// Get slideshow container. 
const slideshow = document.querySelector('div#container main.slideshow');
// console.log('slideshow:',slideshow);

// Get slide container. 
const slidecontainer = document.querySelector('div#container main.slideshow div.inner');
// console.log('slidecontainer:',slidecontainer);

// Get slideshow remote. 
const slideshowremote = document.querySelector('div#container main.slideshow div.remote');
// console.log('slideshowremote:',slideshowremote);

// Get slide counter box. 
const slideCounter = document.querySelector('div#container aside.panel div.slidecounter');
// console.log('slideCounter:',slideCounter);


/*****/


// Define number of slides. 
const numSlides = slideData.length;

// Define slide interval (time per slide). 
const dt = 1500;

// Define current slide index. 
let currentSlideIndex = 0;

// Initialize id for slide movement. 
let slideMovement;


/*****/


// Load slide show components. 
loadSlideshow();

// Start slide movement. 
playSlideshow();


/*****/


// Load slide show components. 
function loadSlideshow() {

	// Add resulting slides to page. 
	slidecontainer.innerHTML = createSlides();

	// Load remote controller. 
	loadRemoteController();

	/****/

	// Create slides. 
	function createSlides() {

		// Initialize result. 
		let result = '';
	
		// Add slides. 
		for(let i in slideData) {
			// console.log(i);
			result += createSlideByIndex(i);
		}
	
		// Add extra copy of first slide (for smooth transition from last slide back to first slide). 
		result += createSlideByIndex(0);
	
		// Return result. 
		return result;

		/***/

		// Create image slide by index. 
		function createSlideByIndex(index) {
	
			// Get slide item data. 
			let slideItem = slideData[index]
	
			// Return formatted slide item. 
			return `
			<!-- img -->
			<img class="slide" src="${ slideItem.imageurl }" alt="${ slideItem.caption }" data-slideindex="${index}">
			<!-- /img -->`;
		}
	}

	// Load remote controller. 
	function loadRemoteController() {

		// Create remote controller. 
		let remotedots = createRemoteDots();
		// console.log('remote dots:',remotedots);
	
		// Add remote controller to page. 
		slideshowremote.innerHTML = remotedots;

		// Activate remote. 
		activateRemote();

		/***/

		// Create remote controller. 
		function createRemoteDots() {
	
			// Open remote. 
			let result = '';
			
			// Add dot selector for each slide. 
			for(let i=0 ; i<numSlides ; i++) {
	
				// Check for matching slide index. 
				let onSelectedSlide = i == (currentSlideIndex % numSlides);
	
				// Add dot. 
				result += `
				<!-- dot -->
				<span class="dot ${ (onSelectedSlide) ? ('active') : ('') }" data-slideindex="${i}"></span>
				<!-- /dot -->`;
			}
	
			// Return result. 
			return result;
		}

		// Activate remote controller. 
		function activateRemote() {

			// Get all remote dots. 
			const allDots = document.querySelectorAll('div#container main.slideshow div.remote span.dot');
			// console.log('allDots:',allDots);
			
			// Go thru all remote dots. 
			for(let dot of allDots) {
				// Activate dot clicks. 
				dot.addEventListener('click',selectNewSlide);
			}
		}
	}
}

// Start slide movement. 
function playSlideshow() {
	
	// Start automated slide movement, saving id of movement. 
	slideMovement = setInterval( goToNextSlide, dt );
	console.log('Slide movement id:',slideMovement);

	// Set state of slideshow: playing. 
	slideshow.classList.add('active');

	/****/

	// Go to next slide. 
	function goToNextSlide() {
		// console.log('goToNextSlide');

		// Increment index for current slide. 
		currentSlideIndex += 1;

		// Show current slide. 
		showSelectedSlide();

		// Jump back to origin (if on last slide). 
		if(currentSlideIndex==numSlides) {

			// Reset slide position soon after showing last/first slide. 
			setTimeout(jumpBack, .25*dt );
		}

		/***/

		// Reset slide position back to origin (first slide). 
		function jumpBack() {
	
			// Remove transition for jump back to origin. 
			unsmoothIt();
	
			// Reset slide index. 
			currentSlideIndex = 0;
			
			// Show current slide. 
			setTimeout(showSelectedSlide, .25*dt );
	
			// Add transition after jump back to origin. 
			setTimeout(smoothIt, .5*dt );
	
			/**/
	
			function unsmoothIt() {
				slidecontainer.classList.remove('smooth');
			}
	
			function smoothIt() {
				slidecontainer.classList.add('smooth');
			}
		}
	}
}
// Pause slide movement. 
function pauseSlideshow() {

	// Stop automated slide movement. 
	clearInterval(slideMovement);
	console.log('Slide movement id:',slideMovement);

	// Set state of slideshow: not playing. 
	slideshow.classList.remove('active');
}
// Toggle slideshow movement. 
function toggleSlideshow() {

	// Check if slideshow curently playing. 
	let currentlyPlaying = slideshow.classList.contains('active');

	// Pause if curently playing. 
	if(currentlyPlaying) pauseSlideshow();

	// Play if not curently playing. 
	else playSlideshow();
}

// Select new slide. 
function selectNewSlide(event) {

	// Get selected dot. 
	let selectedDot = event.currentTarget;
	console.log('Selected dot:',selectedDot);
	
	// Update selected slide index. 
	currentSlideIndex = 1 * selectedDot.getAttribute('data-slideindex');
	console.log('Selected index:',currentSlideIndex);

	// Show currently selected slide. 
	showSelectedSlide();
}
// Show currently selected slide. 
function showSelectedSlide() {

	// Update slide position. 
	updateSlidePosition();

	// Update state of remote controller. 
	updateRemoteController();

	// Debug: Show slide index on page. 
	if(slideCounter) showSlideIndex();

	/****/

	// Update slide position (using current slide index). 
	function updateSlidePosition() {
		// console.log('updateSlidePosition');

		// Calculate slide offset. 
		let slideOffset = `${-100 * currentSlideIndex}%`;
	
		// Apply slide offset. 
		slidecontainer.style.transform = `translateX(${slideOffset})`;
	}
	
	// Update state of remote controller. 
	function updateRemoteController() {
		// console.log('updateRemoteController');
	
		// Get all remote dots. 
		const remoteDots = document.querySelectorAll('div#container main.slideshow div.remote span.dot');
		// console.log('remoteDots');
	
		// Apply remote offset. 
		for(let dot of remoteDots) {
	
			// Get slide index of current dot button. 
			let i = 1 * dot.getAttribute('data-slideindex');
	
			// Check for matching slide index. 
			let onSelectedSlide = i == (currentSlideIndex % numSlides);
	
			// Update state for active dot. 
			if(onSelectedSlide) {
				dot.classList.add('active');
			}
			
			// Update state for inactive dot. 
			else {
				dot.classList.remove('active');
			}
		}
	}

	// Debug: Show current slide index on page. 
	function showSlideIndex() {
		// console.log('showSlideIndex');
		
		// Show slide index in slide counter box. 
		slideCounter.innerHTML = (currentSlideIndex/*  % numSlides */);
	}
}

// Debug: Toggle developer mode. 
function toggleDevMode() {

	// 
	container.classList.toggle('devmode');
}
