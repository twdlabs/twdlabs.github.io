


// Get page container. 
// const container = document.querySelector('div#container');
// console.log('slideshow:',slideshow);

// Initialize Slideshow object. 
let s;


/*****/


// Activate automatic slideshow. 
activateSlideshow();

// Activate slideshow shortcuts. 
activateSlideshowShortcuts();


/*****/


// Activate automatic slideshow. 
function activateSlideshow() {

	// Define slide interval (time per slide). 
	const slideinterval = 1500;

	// Get slideshow container. 
	const slideshow = document.querySelector('div#container main.slideshow');
	// console.log('Slideshow:',slideshow);
	
	// Get slide container. 
	const slidecontainer = document.querySelector('div#container main.slideshow div.inner');
	// console.log('Slide container:',slidecontainer);
	
	// Get slideshow remote. 
	const slideshowremote = document.querySelector('div#container main.slideshow div.remote');
	// console.log('Slideshow remote:',slideshowremote);

	// Get slide counter box. 
	const slidecounter = document.querySelector('div#container aside.panel div.slidecounter');
	// console.log('Slide index counter:',slidecounter);

	// Create new Slideshow object. 
	s = new Slideshow( slideData, slideinterval, slideshow, slidecontainer, slideshowremote, slidecounter, createSlideByIndex );
	// s.createSlideByIndex = createSlideByIndex;
	
	/***/

	// Create image slide by index. 
	function createSlideByIndex(index) {

		// Get slide item data. 
		let slideItem = this.slideData[index]

		// Return formatted slide item. 
		return `
		<!-- slide -->
		<div class="slide" data-slideindex="${index}">

			<!-- slide -->
			<img class="slide" src="${ slideItem.imageurl }" alt="${ slideItem.caption }">
			<!-- /slide -->
			
		</div>
		<!-- /slide -->`;
	}
}

// Activate slideshow shortcuts. 
function activateSlideshowShortcuts() {

	// Check for shortcut key upon key release. 
	document.addEventListener('keyup',checkShortcutKey);

	// Check for shortcut key. 
	function checkShortcutKey(event) {
		console.log(event);

		// Press spacebar: Toggle slideshow play. 
		if(event.keyCode==32 || event.key==' ') s.toggleSlideshow();
		// Press P: Toggle slideshow play. 
		if(event.keyCode==80 || event.key=='P' || event.key=='p') s.toggleSlideshow();

		// Press D: Toggle developer mode. 
		if(event.keyCode==68 || event.key=='D' || event.key=='d') s.toggleDevMode();
	}
}
