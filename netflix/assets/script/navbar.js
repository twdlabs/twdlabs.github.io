


// Activate dynamic change of navbar. 
function activateDynamicNavbar() {
	// console.log('Activating dynamic navbar...');

	// Update state of navbar upon user scroll. 
	window.addEventListener('scroll',updateNavbar);
	// document.body.addEventListener('scroll',updateNavbar);
	// document.documentElement.addEventListener('scroll',updateNavbar);
	// document.scrollingElement.addEventListener('scroll',updateNavbar);
	// document.querySelector('html').addEventListener('scroll',updateNavbar);
	// document.querySelector('body').addEventListener('scroll',updateNavbar);

	/****/

	// Update state of navbar. 
	function updateNavbar() {
		// console.log('Updating dynamic navbar...');

		// Check scroll level. 
		let scrolllevel = document.scrollingElement.scrollTop;
		// console.log('Scroll level:',scrolllevel);
		

		// Update state of navbar based on scroll level. 
		if(scrolllevel==0) navbar.classList.remove('scr');
		else navbar.classList.add('scr');
	}
}
