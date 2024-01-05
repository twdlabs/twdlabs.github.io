


// Get destination for slide images. 
const container = document.querySelector('div#container');
console.log('container:',container);

// Get box for slides. 
const slidebox = document.querySelector('div#container main.slideshow div.grid div.slides');
console.log('slidebox:',slidebox);

// Get destination for slide images. 
let slidelistdestination = document.querySelector('div#container main.slideshow div.grid div.slides ul.slidelist');
console.log('slidelistdestination:',slidelistdestination);

// Get destination for control dots. 
const controldotsdestination = document.querySelector('div#container main.slideshow div.grid div.controls ul.dotlist');
console.log('controldotsdestination:',controldotsdestination);


/*****/


// Define automatic time per slide (in ms). 
const dt = 12000;

// Define slide transition time. 
const ddt = 1000;

// Initialize slide index. 
let currentslideindex = -1;


/*****/


// Load slideshow controller. 
loadSlideControls();

// Select initial slide. 
selectSlideByIndex(0,true);

// Start auto-slide mode. 
// startAutoSlide();

// Activate slideshow shortcuts. 
activateSlideshowShortcuts();


/*****/


// Toggle zoomed out mode. 
function toggleZoom() {
	container.classList.toggle('zoom');
}

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

// Go to adjacent (prev/next) slide. 
function displaceSlide(diff) {

	// Initialize new index. 
	let newindex = currentslideindex + diff;
	// console.log('New index:',newindex);

	// Check new index. 
	newindex = checkIndex(newindex);
	// console.log('New index:',newindex);

	// Show slide at new index. 
	selectSlideByIndex(newindex);

	/****/

	// Reset interval timer. 
	// clearTimeout(slideSwitcher);
	// slideSwitcher = setTimeout(function() {
	// 	displaceSlide(1);
	// },dt);
}

// Check index. 
function checkIndex(newindex) {
	
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

// Select slide by index. 
function selectSlideByIndex(selectedindex,justStarted) {
	console.log('Selected slide index:',selectedindex);

	// 
	let goingfwd = true;
	let xfactor = +1;

	// // Check if going backward. 
	// if(selectedindex < currentslideindex) {
	// 	goingfwd = false;
	// 	xfactor = -1;
	// 	// console.log('Back');
	// }
	// // Check if going forward. 
	// if(selectedindex > currentslideindex) {
	// 	goingfwd = true;
	// 	xfactor = +1;
	// 	// console.log('Forward');
	// }

	// Save index of newly selected slide. 
	currentslideindex = 1*selectedindex;

	// Load instantly if just started. 
	if(justStarted) {

		// Load newly selected slide. 
		loadSelectedSlide();
	}

	// Load smoothly if not just started. 
	else {

		// Move smoothly to newly selected slide. 
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

	// Glide to new slide. 
	function glideToNewSlide() {

		// Get index for newly selected slide. 
		let newslideindex = currentslideindex;

		// Create layout for new slide. 
		let newslidelayout = createSlideLayout(newslideindex, goingfwd?'next':'prev');

		// Load adjacent slide. 
		slidelistdestination.insertAdjacentHTML('beforeend',newslidelayout);

		// Move smoothly to adjacent slide. 
		slidelistdestination.style.transform = `translateX(${-100*xfactor}%)`;
	}

	// Load currently selected slide. 
	function loadSelectedSlide() {
		console.log('Selected slide index:',currentslideindex);
	
		// Initialize result. 
		let slideresults = '';
	
		// Get index for prev slide. 
		// let previndex = getDeltaSlideIndex(-1);
		// console.log('previndex:',previndex);
		// Create layout for prev slide. 
		// slideresults += createSlideLayout(previndex,'prev');
	
		// Create layout for current slide. 
		slideresults += createSlideLayout(currentslideindex,'');

		// Get index for next slide. 
		// let nextindex = getDeltaSlideIndex(+1);
		// console.log('nextindex:',nextindex);
		// Create layout for next slide. 
		// slideresults += createSlideLayout(nextindex,'next');

		// console.log('Slides:',previndex,currentslideindex,nextindex);

		// Load new version of slide list. 
		loadNewSlideList();

		// Save new destination for slide list. 
		saveNewSlideList();

		/***/

		// Load new version of slide list. 
		function loadNewSlideList() {

			// Reset position to center slide. 
			slidebox.innerHTML = `
			<!-- slidelist -->
			<ul class="slidelist">${slideresults}</ul>
			<!-- /slidelist -->`;
	
			// Display results on page. 
			// slidelistdestination.innerHTML = slideresults;
	
			// Reset position to center slide. 
			// slidelistdestination.style.transform = '';
		}

		// Save new destination for slide list. 
		function saveNewSlideList() {
			// Refresh destination for slide images. 
			slidelistdestination = document.querySelector('div#container main.slideshow div.grid div.slides ul.slidelist');
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
			<img class="img" src="${imgurl}" alt="${caption}" title="${caption}">
			<!-- /img -->

			<!-- caption -->
			<span class="caption">${caption}</span>
			<!-- /caption -->

		</li>
		<!-- /slideitem -->`;
	}
}




/*****/





// Select slide by index. 
function selectSlideByIndex000(selectedindex,justStarted) {
	
	// Show selected slide position. 
	// showSelectedSlide();
	
	/****/

	// Load currently selected slide. 
	function loadSelectedSlide() {

		// 
	
		/***/
	
		// // Get index of adjacent slide. 
		// function getDeltaSlideIndex(diff) {
	
		// 	// Initialize new index. 
		// 	let newindex = currentslideindex + diff;
		// 	// console.log('New index:',newindex);

		// 	// Check new index. 
		// 	newindex = checkIndex(newindex);
		// 	// console.log('New index:',newindex);
	
		// 	// Return new index. 
		// 	return newindex;
		// }
	}
}



// // Start slide motion: cascade of animated switch to new slide every few seconds. 
// function startAutoSlide() {
// 	let slideSwitcher = setTimeout(function() {
// 		displaceSlide(1);
// 	},dt);
// }

// // Show selected slide position. 
// function showSelectedSlide() {

// 	// TODO: Add prev slide. 

// 	// TODO: Add selected slide. 

// 	// TODO: Add next slide. 

// 	// Get horizontal offset using selected index. 
// 	let dx = -100*selectedindex;

// 	// Show selected slide by applying horizontal offset to inner slide container. 
// 	slidelistdestination.style.transform = `translateX(${dx}%)`;
// }
