


// Define automa slideshow. 
class Slideshow {


	// 1. Describe and create object components. 
	constructor(slideData,dt,slideshow,slidecontainer,slideshowremote,slidecounter,createSlideByIndex) {

		// Check for missing element. 
		let missingElement = ( !slideData || !slideshow || !slidecontainer || !slideshowremote /* || !slidecounter */ );
		
		// Notify if missing element. 
		if(missingElement) {
			console.warn('Missing element');
			return;
		}

		// Define slide show. 
		this.slideshow = slideshow;
		// Define slide container. 
		this.slidecontainer = slidecontainer;
		// Define slide show remote controller. 
		this.remotecontroller = slideshowremote;
		// Define slide counter. 
		this.slidecounter = slidecounter;

		// Define source of slide data. 
		this.slideData = slideData;
		// Define number of slides. 
		this.numSlides = slideData.length;

		// Define time interval per slide. 
		this.dt = dt;

		// Define current slide index. 
		this.currentSlideIndex = 0;

		// Initialize id for slide movement. 
		this.slidemovement;
		
		// Initialize list of remote dots. 
		this.remotedots;

		// 
		this.createSlideByIndex = createSlideByIndex;

		// Load slide show components. 
		this.loadSlideshow();

		// Activate remote controller buttons. 
		this.activateRemoteControl();
		
		// Start slide movement. 
		this.playSlideshow();
	}

	// Load slide show components. 
	loadSlideshow() {
	
		// Add slides to page. 
		(this.slidecontainer).innerHTML = createSlides.bind(this)(this.slideData);
	
		// Add remote controller buttons to page. 
		(this.remotecontroller).innerHTML = createRemoteDots(this.numSlides, this.currentSlideIndex);
		
		// Get all remote dots. 
		// this.remotedots = document.querySelectorAll('div#container main.slideshow div.remote'+' span.dot');
		this.remotedots = (this.remotecontroller).querySelectorAll('span.dot');
		// console.log('Remote dots:',this.remotedots);
	
		/****/
	
		// Create slides. 
		function createSlides(slideData) {
	
			// Initialize result. 
			let result = '';
			// Initialize extra copy of first slide. 
			let extrafslide = '';
		
			// Add slides. 
			for(let i in slideData) {
				console.log(i);

				// Add current slide. 
				result += this.createSlideByIndex.bind(this)(i);

				// Add clone of first slide. 
				if(i==0) extrafslide = this.createSlideByIndex.bind(this)(i)
			}
		
			// Add extra copy of first slide (for smooth transition from last slide back to first slide). 
			result += extrafslide;
		
			// Return result. 
			return result;
	
			/***/
	
			// // Create image slide by index. 
			// function createSlideByIndex(index) {
		
			// 	// Get slide item data. 
			// 	let slideItem = slideData[index]
		
			// 	// Return formatted slide item. 
			// 	return `
			// 	<!-- slide -->
			// 	<div class="slide" data-slideindex="${index}">

			// 		<!-- slide -->
			// 		<img class="slide" src="${ slideItem.imageurl }" alt="${ slideItem.caption }">
			// 		<!-- /slide -->
					
			// 	</div>
			// 	<!-- /slide -->`;
			// }
		}
	
		// Create remote controller. 
		function createRemoteDots(numSlides,currentSlideIndex) {
	
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
	}


	// 2. Events: Handle events. 

	// Activate remote controller buttons. 
	activateRemoteControl() {
		
		// Go thru all remote dots. 
		for(let dot of this.remotedots) {
			// Activate dot clicks. 
			dot.addEventListener('click', this.selectNewSlide.bind(this) );
		}
	}


	// 3. Actions: Define object methods and functions. 
	
	// Show currently selected slide. 
	showSelectedSlide() {
	
		// Update slide position. 
		updateSlidePosition(this.slidecontainer, this.currentSlideIndex);
	
		// Update state of remote controller. 
		updateRemoteController(this.numSlides, this.currentSlideIndex, this.remotedots);
	
		// Debug: Show slide index on page. 
		if(this.slidecounter) this.showSlideIndex();
	
		/****/
	
		// Update slide position (using current slide index). 
		function updateSlidePosition(slidecontainer,currentSlideIndex) {
			// console.log('Updating slide position...');
	
			// Calculate slide offset. 
			let slideOffset = `${-100 * currentSlideIndex}%`;
		
			// Apply slide offset. 
			slidecontainer.style.transform = `translateX(${slideOffset})`;
		}
		
		// Update state of remote controller. 
		function updateRemoteController(numSlides,currentSlideIndex,remoteDots) {
			// console.log('Updating remote controller...');
		
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
	}

	// Start slide movement. 
	playSlideshow() {
		
		// Start automated slide movement, saving id of movement. 
		this.slidemovement = setInterval( this.goToNextSlide.bind(this), this.dt );
		// console.log('Slide movement id:',this.slidemovement);
	
		// Set state of slideshow: playing. 
		(this.slideshow).classList.add('active');
	}
	// Pause slide movement. 
	pauseSlideshow() {
	
		// Stop automated slide movement. 
		clearInterval(this.slidemovement);
		// console.log('Slide movement id:',this.slidemovement);
	
		// Set state of slideshow: not playing. 
		(this.slideshow).classList.remove('active');
	}
	// Toggle slideshow movement. 
	toggleSlideshow() {
	
		// Check if slideshow curently playing. 
		let currentlyPlaying = (this.slideshow).classList.contains('active');
	
		// Pause if curently playing. 
		if(currentlyPlaying) this.pauseSlideshow();
	
		// Play if not curently playing. 
		else this.playSlideshow();
	}
	
	// Go to next slide. 
	goToNextSlide() {
		// console.log('goToNextSlide');

		// Increment index for current slide. 
		this.currentSlideIndex += 1;

		// Show current slide. 
		this.showSelectedSlide();

		// Jump back to origin (if on last slide). 
		if(this.currentSlideIndex==this.numSlides) {

			// Reset slide position soon after showing last/first slide. 
			setTimeout(this.jumpBack.bind(this), .25*this.dt );
		}
	}

	// Reset slide position back to origin (first slide). 
	jumpBack() {
		// console.log('Jumping back');

		// Remove transition for jump back to origin. 
		unsmoothIt.bind(this)();

		// Reset slide index. 
		this.currentSlideIndex = 0;
		
		// Show current slide. 
		setTimeout( this.showSelectedSlide.bind(this), .25*this.dt );

		// Add transition after jump back to origin. 
		setTimeout(smoothIt.bind(this), .5*this.dt );

		/***/

		function unsmoothIt() {
			// console.log('unsmoothIt',this);
			(this.slidecontainer).classList.remove('smooth');
		}

		function smoothIt() {
			// console.log('smoothIt',this);
			(this.slidecontainer).classList.add('smooth');
		}
	}

	// Select new slide. 
	selectNewSlide(event) {
		console.log('Selecting new slide...');
	
		// Get selected dot. 
		let selectedDot = event.currentTarget;
		// console.log('Selected dot:',selectedDot);
		
		// Update selected slide index. 
		this.currentSlideIndex = 1 * selectedDot.getAttribute('data-slideindex');
		// console.log('Selected index:',this.currentSlideIndex);
	
		// Show currently selected slide. 
		this.showSelectedSlide();
	}

	// Debug: Show current slide index on page. 
	showSlideIndex() {
		// console.log('showSlideIndex');

		// Determine if using strict index. 
		let useStrictIndex = false;

		// Calculate index to display. 
		let displayedIndex = this.currentSlideIndex;
		// Convert to strict index if chosen. 
		if(useStrictIndex) displayedIndex %= this.numSlides;
		
		// Show slide index in slide counter box. 
		(this.slidecounter).innerHTML = displayedIndex;
	}

	// Debug: Toggle developer mode. 
	toggleDevMode() {
	
		// 
		(this.slideshow).classList.toggle('devmode');
	}
	
}
