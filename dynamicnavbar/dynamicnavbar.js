


// Get navbar. 
const navbar = document.querySelector('div#container nav.navbar');

// Initialize value of last scroll level. 
let lastScrollLevel = 0;


/*****/


// Adjust navbar mode upon scroll. 
window.addEventListener('scroll',adjustNavbar);


/*****/


// Adjust navbar mode. 
function adjustNavbar() {

	// Get value of current scroll level. 
	let nowScrollLevel = (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
	// Check if currently scrolling downward. 
	let scrollingDownward = (nowScrollLevel > lastScrollLevel);

	// Set to icon mode when scrolling downward. 
	if(scrollingDownward) navbar.classList.add('iconmode');
	// Revert to original mode when not scrolling downward. 
	else navbar.classList.remove('iconmode');

	// Update value of last scroll level. 
	lastScrollLevel = nowScrollLevel;
}
