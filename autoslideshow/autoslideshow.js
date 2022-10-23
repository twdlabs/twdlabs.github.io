

// Get slideshow container. 
const slideshow = document.querySelector('main.slideshow');
// console.log(slideshow);

// Get slide container. 
const slidecontainer = document.querySelector('main.slideshow div.inner');
// console.log(slidecontainer);


/*****/


// Define slide data. 
const slideData = [
	{
		caption:'a',
		imageurl:'images/img_5terre.jpg'
	},
	{
		caption:'b',
		imageurl:'images/img_mountains.jpg'
	},
	{
		caption:'c',
		imageurl:'images/img_snow.jpg'
	},
	{
		caption:'d',
		imageurl:'images/img_lights.jpg'
	},
];

// Define number of slides. 
const numSlides = slideData.length;

// Define current slide index. 
let currentSlideIndex = 0;

// Define slide interval (time per slide). 
const slideInterval = 3000;

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

		/***/

		// Create remote controller. 
		function createRemote() {
	
			// Open remote. 
			let result = `
			<!-- remote -->
			<div class="remote">`;
			
			// Add dot selector for each slide. 
			for(let i=0 ; i<numSlides ; i++) {
	
				// Find if on currently selected slide. 
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
	}
}

// Toggle slide movement. 
function toggleSlideshowMotion() {

	// Check if slideshow curently playing. 
	let currentlyPlaying = slideshow.classList.contains('active');

	// Pause if curently playing. 
	if(currentlyPlaying) pauseSlideshow();

	// Play if not curently playing. 
	else playSlideshow();
}

// Start slide movement. 
function playSlideshow() {
	
	// Set interval for slide change. 
	slideMovement = setInterval(goToNextSlide,slideInterval);

	// Set state of slideshow. 
	slideshow.classList.add('active');

	/****/

	// Go to next slide. 
	function goToNextSlide() {
		console.log('goToNextSlide');

		// Increment slide index. 
		currentSlideIndex += 1;
		showSlideIndex();

		// Apply offset to slide container for new slide. 
		applyOffset(currentSlideIndex);

		// Update state of remote controller. 
		updateRemote(currentSlideIndex%numSlides);

		// Flip back to origin if on last slide. 
		if(currentSlideIndex==numSlides) {

			// Define flip time. 
			let flipTime = 500;
			// let flipTime = (slideInterval/numSlides);

			// Do xyz in short flip time. 
			setTimeout(flipSlideBox, flipTime );
		}
	}

	// Move slide holder back to beginning. 
	function flipSlideBox() {

		// Remove smooth transition before flip. 
		slidecontainer.classList.remove('smooth');

		// Reset to first slide;
		currentSlideIndex = 0;
		showSlideIndex();

		// Apply offset to slide container for first slide. 
		applyOffset(currentSlideIndex);

		// Add back smooth transition after flip. 
		slidecontainer.classList.add('smooth');
	}

	// Show current slide index. 
	function showSlideIndex() {
		document.getElementById('slideCounter').innerHTML = currentSlideIndex;
	}

	// Apply offset to slide container for given slide index. 
	function applyOffset(slideIndex) {
		console.log('applyOffset',slideIndex);

		// Apply slide offset. 
		slidecontainer.style.transform = `translateX(${ -100 * slideIndex }%)`;
	}

	// Update state of remote controller. 
	function updateRemote(slideIndex) {

		// Get all remote dots. 
		const remoteDots = document.querySelectorAll('div#container main.slideshow div.remote span.dot');

		// Apply remote offset. 
		for(let dot of remoteDots) {
			console.log('remoteDots');

			// Get slide index of current dot. 
			let i = 1 * dot.getAttribute('data-slideindex');

			// Find if on currently selected slide. 
			let onSelectedSlide = (i==slideIndex);

			// 
			if(onSelectedSlide) {
				dot.classList.add('active');
			}
			else {
				dot.classList.remove('active');
			}
		}
	}
}

// Pause slide movement. 
function pauseSlideshow() {

	// 
	clearInterval(slideMovement);

	// Set state of slideshow. 
	slideshow.classList.remove('active');
}

