


// Define site title. 
const sitetitle = 'TWDLabs';

// Toggle state of navbar. 
function toggleNavbar() {

	// Get navbar. 
	const navbar = document.querySelector('div#container nav.navbar');

	// Get navbar list. 
	const navbarlist = document.querySelector('div#container nav.navbar main.grid ul.navlist');
	// console.log(navbarlist.style.height);
	// console.log(navbarlist.scrollHeight);

	// Check if navigation already open. 
	let navAlreadyOpen = navbar.classList.contains('active');

	// Close nav if already open. 
	if(navAlreadyOpen) {

		// Close nav. 
		navbar.classList.remove('active');

		// Set max height. 
		navbarlist.style.maxHeight = '';
	}

	// Open nav if not already open. 
	else {
		console.log('Nav height:', navbarlist.scrollHeight);

		// Open nav. 
		navbar.classList.add('active');

		// Set max height. 
		navbarlist.style.maxHeight = `${navbarlist.scrollHeight}px`;
		// navbarlist.style.maxHeight = '100vh';
	}
}
