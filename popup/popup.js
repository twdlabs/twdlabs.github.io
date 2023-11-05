


// Get overlay popup. 
const overlaypopup = document.getElementById('overlay');


/*****/


// Open popup in due time. 
setTimeout(openPopup,15000);


/*****/


// Open popup. 
function openPopup(){

	// Show overlay popup. 
	overlaypopup.classList.add('active');

	// Freeze body scrolling. 
	document.body.classList.add('freeze');
}

// Close popup. 
function closePopup(){

	// Hide overlay popup. 
	overlaypopup.classList.remove('active');

	// Un-freeze body scrolling. 
	document.body.classList.remove('freeze');
}
