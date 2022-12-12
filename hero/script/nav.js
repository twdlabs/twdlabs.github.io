


// Toggle side navigation bar. 
function toggleSideNav( openAlready = $('div#container').hasClass('navopen') ) {
	// let openAlready = $('div#container').hasClass('navopen');
	console.log('openAlready',openAlready)

	// Close navigation if already open. 
	if(openAlready) {
		// $('div#container').removeClass('navopen');
		document.querySelector('div#container').classList.remove('navopen');
		// $('html,body').removeClass('stuck');
		document.querySelector('html').classList.remove('stuck');
		document.querySelector('body').classList.remove('stuck');
	}
	// Open navigation otherwise. 
	else {
		// $('div#container').addClass('navopen');
		document.querySelector('div#container').classList.add('navopen');
		// $('html,body').addClass('stuck');
		document.querySelector('html').classList.add('stuck');
		document.querySelector('body').classList.add('stuck');
	}
}


// Highlight navbar item. 
function highlightNavbarItem(event) {

	// Get clicked nav link. 
	let item = event.currentTarget;

	// Un-highlight all other nav links. 
	// $('nav ul.navlist li.item a.link').removeClass('active');
	xyz = document.querySelectorAll('nav ul.navlist li.item a.link')
	for(x of xyz) {
		x.classList.remove('active');
	}

	// Highlight clicked nav link. 
	// $(item).addClass('active');
	item.classList.add('active');
}
