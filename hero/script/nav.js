


// Toggle side navigation bar. 
function toggleSideNav( openAlready = $('div#container').hasClass('navopen') ) {
	// let openAlready = $('div#container').hasClass('navopen');
	console.log('openAlready',openAlready)

	// Close navigation if already open. 
	if(openAlready) {
		$('div#container').removeClass('navopen');
		$('html,body').removeClass('stuck');
	}
	// Open navigation otherwise. 
	else {
		$('div#container').addClass('navopen');
		$('html,body').addClass('stuck');
	}
}


// Highlight navbar item. 
function highlightNavbarItem(event) {

	// Get clicked nav link. 
	let item = event.currentTarget;

	// Un-highlight all other nav links. 
	$('nav ul.navlist li.item a.link').removeClass('active');

	// Highlight clicked nav link. 
	$(item).addClass('active');
}
