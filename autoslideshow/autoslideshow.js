


// Get page container. 
const container = document.querySelector('div#container');
// console.log(slideshow);

// Get slideshow container. 
const slideshow = document.querySelector('div#container main.slideshow');
// console.log(slideshow);

// Get slide container. 
const slidecontainer = document.querySelector('div#container main.slideshow div.inner');
// console.log(slidecontainer);


/*****/


// Define number of slides. 
const numSlides = slideData.length;

// Define slide interval (time per slide). 
const slideInterval = 1000;

// Define current slide index. 
let currentSlideIndex = 0;

// Initialize id for slide movement. 
let slideMovement;


/*****/


// Load initial slide data. 
loadSlideData();

// Start slide movement. 
playSlideshow();


/*****/


// Load initial slide data. 
function loadSlideData() {

	// Initialize result. 
	let result = '';

	// Add slides. 
	for(let i in slideData) {
		// console.log(i);
		result += createSlide(i);
	}

	// Add extra copy of first slide (for smooth transition from last back to first slide). 
	result += createSlide(0);

	// Add resulting slides to page. 
	slidecontainer.innerHTML = result;

	// Add remote controller. 
	addRemote();

	/****/

	// Create image slide. 
	function createSlide(index) {

		// Get slide item data. 
		let slideItem = slideData[index]

		// Return formatted slide item. 
		return `
		<!-- img -->
		<img class="slide" src="${ slideItem.imageurl }" alt="${ slideItem.caption }" data-slideindex="${index}">
		<!-- /img -->`;
	}

	// Add remote controller. 
	function addRemote() {

		// Create remote controller. 
		let remote = createRemote();
		// console.log('remote:',remote);
	
		// Add remote controller to page. 
		slideshow.insertAdjacentHTML('beforeend', remote );

		// Activate remote. 
		activateRemote();

		/***/

		// Create remote controller. 
		function createRemote() {
	
			// Open remote. 
			let result = `
			<!-- remote -->
			<div class="remote">`;
			
			// Add dot selector for each slide. 
			for(let i=0 ; i<numSlides ; i++) {
	
				// Check for matching slide index. 
				let onSelectedSlide = (i==currentSlideIndex);
	
				// Add dot. 
				result += `
				<!-- dot -->
				<span class="dot ${ (onSelectedSlide) ? ('active') : ('') }" data-slideindex="${i}"></span>
				<!-- /dot -->`;
			}
	
			// Close remote. 
			result += `
			</div>
			<!-- /remote -->`;
	
			// Return result. 
			return result;
		}

		// Activate remote. 
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
	
	// Start automated slide changes and save interval id. 
	slideMovement = setInterval(goToNextSlide,slideInterval);

	// Set state of slideshow. 
	slideshow.classList.add('active');

	/****/

	// Go to next slide. 
	function goToNextSlide() {
		console.log('goToNextSlide');

		// Increment slide index. 
		currentSlideIndex += 1;

		// Show current slide. 
		showSelectedSlide();

		// Flip back to origin if on last slide. 
		if(currentSlideIndex==numSlides) {

			// Reset slide position soon after showing last/first slide. 
			setTimeout(resetSlidePosition, (1/4)*(slideInterval) );
		}
	}

	// Reset slide position back to origin. 
	function resetSlidePosition() {

		// Remove smooth transition before position reset. 
		unsmoothIt();

		// Reset slide index. 
		currentSlideIndex = 0;
		// Show current slide. 
		setTimeout(showSelectedSlide, (1/4)*(slideInterval) );

		// Add back smooth transition after position reset. 
		setTimeout(smoothIt, (1/2)*(slideInterval) );

		/***/

		function smoothIt() {
			slidecontainer.classList.add('smooth');
		}

		function unsmoothIt() {
			slidecontainer.classList.remove('smooth');
		}
	}
}
// Pause slide movement. 
function pauseSlideshow() {

	// Clear automated call for slide movement. 
	clearInterval(slideMovement);

	// Set state of slideshow. 
	slideshow.classList.remove('active');
}
// Toggle slideshow movement. 
function toggleSlideshow() {

	// Check if slideshow curently playing. 
	let moving = slideshow.classList.contains('active');

	// Pause if curently playing. 
	if(moving) pauseSlideshow();

	// Play if not curently playing. 
	else playSlideshow();
}

// Select new slide. 
function selectNewSlide(event) {

	// Get selected dot. 
	let selectedDot = event.currentTarget;
	console.log('Selected dot:',selectedDot);
	
	// Get and update selected slide index. 
	currentSlideIndex = 1 * selectedDot.getAttribute('data-slideindex');
	console.log('Selected index:',currentSlideIndex);

	// Show currently selected slide. 
	showSelectedSlide();
}
// Show currently selected slide. 
function showSelectedSlide() {

	// Apply offset to slide container for currently selected slide. 
	applySlideOffset();

	// Update state of remote controller. 
	updateRemote(currentSlideIndex%numSlides);

	// Debug: Show slide index on page. 
	showSlideIndex();

	/****/

	// Apply offset to slide container for current slide index. 
	function applySlideOffset() {
		console.log('applySlideOffset');
	
		// Apply slide offset. 
		slidecontainer.style.transform = `translateX(${ -100 * currentSlideIndex }%)`;
	}
	
	// Update state of remote controller. 
	function updateRemote(slideIndex) {
		console.log('updateRemote');
	
		// Get all remote dots. 
		const remoteDots = document.querySelectorAll('div#container main.slideshow div.remote span.dot');
		// console.log('remoteDots');
	
		// Apply remote offset. 
		for(let dot of remoteDots) {
	
			// Get slide index of current dot. 
			let i = 1 * dot.getAttribute('data-slideindex');
	
			// Check for matching slide index. 
			let onSelectedSlide = (i==slideIndex);
	
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
		console.log('showSlideIndex');

		// Get slide counter box. 
		const slideCounter = document.getElementById('slideCounter');
		
		// Show slide index in slide counter box. 
		slideCounter.innerHTML = (currentSlideIndex % numSlides);
	}
}

