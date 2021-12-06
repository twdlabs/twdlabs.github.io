


// Toggle dark theme. 
function toggleTheme( darkAlready = $('div#container').hasClass('dark') ) {
	// let darkAlready = $('div#container').hasClass('navopen');
	console.log('darkAlready',darkAlready)

	// Close navigation if already open. 
	if(darkAlready) {
		$('div#container').removeClass('dark');
	}
	// Open navigation otherwise. 
	else {
		$('div#container').addClass('dark');
	}
}
