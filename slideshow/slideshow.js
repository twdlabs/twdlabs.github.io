

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


/*****/


// Load initial slide data. 
loadSlideData();

// Open first slide. 
let currentIndex = 0;
openSlide(currentIndex);

// Start animation of switch to new slide every few seconds. 
// let dt = 2000;
// let slideSwitcher = setInterval(nextSlide,dt);


/*****/


// Load initial slide data. 
function loadSlideData() {

	// Initialize result. 
	let resultA = '';
	let resultB = '';

	// Add slides and dot controls. 
	for(i in slideData) {
		
		resultA += `
		<!-- img -->
		<img src="${ slideData[i].imageurl }" alt="${ slideData[i].caption }">
		<!-- /img -->`;

		resultB += `
		<!-- dot -->
		<span class="dot" onclick="openSlide(${i})"></span>
		<!-- /dot -->`;
	}
	
	// Add extra copy of first slide (for smooth transition from last back to first slide). 
	resultA += `
	<!-- img -->
	<img src="${ slideData[0].imageurl }" alt="${ slideData[0].caption }">
	<!-- /img -->`;

	// Add result to page. 
	document.getElementById('slideinner').innerHTML = resultA;
	document.getElementById('controls').innerHTML = resultB;
}

// Go to adjacent (prev/next) slide. 
function deltaSlide(dn) {

	// Increment current index. 
	currentIndex += dn;
	normalizeCicrularIndex();

	// Show slide at new index. 
	openSlide(currentIndex);

	// Reset interval timer. 
	// clearInterval(slideSwitcher);

	/*****/

	// Correct index when out of bounds. 
	function normalizeCicrularIndex() {
		if(currentIndex<0) currentIndex = slideData.length-1;
		if(currentIndex>=slideData.length) currentIndex = 0;
	}
}

// Select a slide by index. 
function openSlide(index) {
	// console.log('Opening slide at:',index);
	
	// Show selected slide image. 
	showSlideImage();

	// Highlight selected dot controller. 
	highlightDot();
	
	/*****/

	// Show selected slide image. 
	function showSlideImage() {
		
		// Get slide holder. 
		let innerslidecontainer = document.querySelector('div#container div.slideshow div.inner');
		// console.log('innerslidecontainer',innerslidecontainer);

		// Get horizontal offset using index. 
		let dx = -100*index;

		// Show selected slide by applying horizontal offset to inner slide container. 
		innerslidecontainer.style.transform = `translateX(${dx}%)`;
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
