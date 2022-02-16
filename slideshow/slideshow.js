

// Define slide data. 
let slide = ['a','b','c','d'];
let slidedata = [
	'images/img_5terre.jpg',
	'images/img_mountains.jpg',
	'images/img_snow.jpg',
	'images/img_lights.jpg',
];


/*****/


// Load slides. 
loadSlides();

// Open first slide. 
let currentIndex = 0;
selectSlideAt(currentIndex);

// Start animation of switch to new slide every few seconds. 
// let dt = 2000;
// let slideSwitcher = setInterval(nextSlide,dt);


/*****/


// Load slides onto page. 
function loadSlides() {
	// 
	let resultA = '';
	let resultB = '';
	for(i in slidedata) {
		console.log(i);
		resultA += `
		<!-- img -->
		<img src="${ slidedata[i] }" alt="${ slide[i] }">
		<!-- /img -->`;
		resultB += `
		<!-- dot -->
		<span class="dot" onclick="selectSlideAt(${i})"></span>
		<!-- /dot -->`;
	}
	resultA += `
	<!-- img -->
	<img src="${ slidedata[0] }" alt="${ slide[0] }">
	<!-- /img -->`;

	// 
	document.getElementById('slideinner').innerHTML = resultA;
	document.getElementById('controls').innerHTML = resultB;
}

// Go to previous slide. 
function prevSlide() {
	console.log('prevSlide()');
	
	// Decrement current index. 
	currentIndex--;
	normalizeIndex();

	// Show slide at new index. 
	selectSlideAt(currentIndex);

	// Reset interval timer. 
	// clearInterval(slideSwitcher);
}

// Go to next slide. 
function nextSlide() {
	console.log('nextSlide()');

	// Increment current index. 
	currentIndex++;
	normalizeIndex();

	// Show slide at new index. 
	selectSlideAt(currentIndex);

	// Reset interval timer. 
	// clearInterval(slideSwitcher);
}

// Correct index when out of bounds. 
function normalizeIndex() {
	if(currentIndex<0) currentIndex = slidedata.length-1;
	if(currentIndex>=slidedata.length) currentIndex = 0;
}

// Select a slide by index. 
function selectSlideAt(index) {
	console.log('index',index);
	
	// Show selected slide. 
	showSlide();

	// Highlight selected dot. 
	highlightDot();
	
	/*****/

	// Show selected slide. 
	function showSlide() {
		
		// Get slide holder. 
		let slideholder = document.querySelector('div#container div.slideshow div.inner');
		// console.log('slideholder',slideholder);

		// Get horizontal offset using index. 
		let dx = -100*index;

		// Show selected slide by applying horizontal offset. 
		slideholder.style.transform = `translateX(${dx}%)`;
	}

	// Highlight selected dot. 
	function highlightDot() {

		// Get dots. 
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
