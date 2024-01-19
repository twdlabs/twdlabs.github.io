


// Define slide data. 
const slideData = [

	{
		imageurl:'./../resources/images/univ/bus.jpg',
		header:'Free Transportation',
		textcopy:'All students have free unlimited bus fare.',
		btncaption:'Learn More',
		btnurl:'javascript:void(0)',
	},

	{
		imageurl:'./../resources/images/univ/apples.jpg',
		header:'An Apple a Day',
		textcopy:'Our dentistry program recommends eating apples.',
		btncaption:'Learn More',
		btnurl:'./programs/',
	},

	{
		imageurl:'./../resources/images/univ/bread.jpg',
		header:'Free Food',
		textcopy:'True University offers lunch plans for those in need.',
		btncaption:'Learn More',
		btnurl:'javascript:void(0)',
	},

];
// console.log('Slide data:',slideData);


/*****/


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
	const slideinterval = 3000;

	// Get slideshow container. 
	const slideshow = document.querySelector('div#container section.carousel div.slideshow');
	// console.log('Slideshow:',slideshow);
	
	// Get slide container. 
	const slidecontainer = document.querySelector('div#container section.carousel div.slideshow div.inner');
	// console.log('Slide container:',slidecontainer);
	
	// Get slideshow remote. 
	const slideshowremote = document.querySelector('div#container section.carousel div.slideshow div.remote');
	// console.log('Slideshow remote:',slideshowremote);

	// Get slide counter box. 
	// const slidecounter = document.getElementById('slidecounter');
	// const slidecounter = document.querySelector('div#container section.carousel div.slideshow div.slidecounter');
	// console.log('Slide index counter:',slidecounter);
	
	// Activate automatic slideshow: Create new Slideshow object. 
	s = new Slideshow( slideData, slideinterval, slideshow, slidecontainer, slideshowremote, null/* slidecounter */, createSlideByIndex );
	
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
			<img class="slide" src="${ slideItem.imageurl }">
			<!-- /slide -->
			
			<!-- bubble -->
			<div class="bubble">
				
				<!-- headline -->
				<h2 class="head">${ slideItem.header }</h2>
				<!-- /headline -->
				
				<!-- textcopy -->
				<p class="textcopy">${ slideItem.textcopy }</p>
				<!-- /textcopy -->

				<!-- learnbtn -->
				<a class="learnbtn" href="${ slideItem.btnurl }">${ slideItem.btncaption }</a>
				<!-- /learnbtn -->
				
			</div>
			<!-- /bubble -->
			
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
