


// Get destination for slide images. 
const slidesdestination = document.querySelector('div#container main.slideshow div.grid ul.slidelist');

// Get destination for control dots. 
const controldotsdestination = document.querySelector('div#container main.slideshow div.grid div.controls ul.dotlist');


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
		<li class="dot" data-slideindex="${i}"></li>
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
			let index = dot.getAttribute('data-slideindex');
			
			// Select slide by given index. 
			selectSlideByIndex(index);
		}
	}
}

// Select slide by index. 
function selectSlideByIndex(selectedindex) {
	console.log('Selected slide index:',1*selectedindex);
	
	// Show selected slide position. 
	// showSelectedSlide();
	loadSelectedSlide();

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

	// Show selected slide position. 
	function showSelectedSlide() {

		// TODO: Add prev slide. 

		// TODO: Add selected slide. 

		// TODO: Add next slide. 

		// Get horizontal offset using selected index. 
		let dx = -100*selectedindex;

		// Show selected slide by applying horizontal offset to inner slide container. 
		slidesdestination.style.transform = `translateX(${dx}%)`;
	}

	// Load data for currently selected slide and both adjacent slides. 
	function loadSelectedSlide() {
	
		// Initialize result. 
		let slideresults = '';
	
		// Get index for prev slide. 
		let previndex = getDeltaSlideIndex(-1);
		console.log('previndex:',previndex);
		console.log('currentindex:',currentslideindex);
		// Get index for next slide. 
		let nextindex = getDeltaSlideIndex(+1);
		console.log('nextindex:',nextindex);
	
		// Create layout for prev slide. 
		slideresults += createSlideLayout(previndex,'prev');
		// Create layout for current slide. 
		slideresults += createSlideLayout(currentslideindex,'');
		// Create layout for next slide. 
		slideresults += createSlideLayout(nextindex,'next');
	
		// Display results on page. 
		slidesdestination.innerHTML = slideresults;
	
		/***/
	
		// Create layout for slide at given index. 
		function createSlideLayout(index,note) {
	
			// Get data for current slide. 
			let slidedata = slideshowdata[index];
			// Get image url for current slide. 
			let imgurl = slidedata.imageurl;
			// Get caption for current slide. 
			let caption = slidedata.caption;
	
			// Compile layout for given slide. 
			return `
			<!-- slideitem -->
			<li class="slideitem ${note}" data-slideindex="${index}">
	
				<!-- img -->
				<img class="img" src="${imgurl}" alt="${caption}" title="${caption}">
				<!-- /img -->
	
			</li>
			<!-- /slideitem -->`;
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
