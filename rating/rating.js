


// Get all star elements. 
const starbar = document.querySelector('div#container main.main div.bar');
const allstars = document.querySelectorAll('div#container main.main div.bar span.star');

// Get all star elements. 
const ratingbox = document.querySelector('div#container main.main div.num span.rating');

// Set initial rating level. 
let currentRatingLevel = 0;


/*****/


// Handle events. 
starbar.addEventListener('click', updateRating);
for(let star of allstars) {
	star.addEventListener('click', updateRating);
}


/*****/


// Update rating on page. 
function updateRating(event) {
	event.stopPropagation();

	// Get selected star. 
	let selectedStar = event.currentTarget;

	// Update saved rating lavel. 
	currentRatingLevel = 1*selectedStar.getAttribute('data-rating');

	// Display rating. 
	for(let star of allstars) {

		// Get position of current star. 
		let i = 1*star.getAttribute('data-rating');
		// console.log(i,star);

		// Highlight stars up to current star. 
		if(i<=currentRatingLevel) star.classList.add('active');

		// Un-highlight all other stars after current star. 
		else star.classList.remove('active');
	}

	// 
	ratingbox.innerHTML = currentRatingLevel;
}
