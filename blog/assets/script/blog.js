


function toggleNavbar() {

	// 
	const navbar = document.querySelector('div#container nav.navbar');
	// const navbarlist = document.querySelector('div#container nav.navbar main.grid ul.navlist');
	// console.log(navbarlist.style.height);
	// console.log(navbarlist.scrollHeight);

	// 
	let navAlreadyOpen = navbar.classList.contains('active');

	// Close nav if already open. 
	if(navAlreadyOpen) {
		// Close nav. 
		// navbarlist.style.height = '';
		navbar.classList.remove('active');
	}

	// Open nav if not already open. 
	else {
		// Open nav. 
		// navbarlist.style.height = navbarlist.scrollHeight;
		navbar.classList.add('active');
	}
}
