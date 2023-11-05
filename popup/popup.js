

// window.onload = openPopup;

// Open popup. 
function openPopup(){

	// Show popup element. 
	document.getElementById('overlay').classList.add('active');
	// $('#overlay').fadeIn(500).addClass('active');

	// Freeze body scrolling. 
	document.body.classList.add('freeze');
	// $('body').addClass('freeze');
	// $('body').css('overflow','hidden');
}

// Close popup. 
function closePopup(){

	// Hide popup element. 
	document.getElementById('overlay').classList.remove('active');
	// $('#overlay').fadeOut(500).removeClass('active');

	// Un-freeze body scrolling. 
	document.body.classList.remove('freeze');
	// $('body').removeClass('freeze');
	// $('body').css('overflow','');
}
