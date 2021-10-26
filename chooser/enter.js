

// Click On Enter

$(document).ready( function() {
	// Get input box. 
	var inputBox = document.getElementById('pageName');

	// Get button to click on enter press. 
	let enterBtn = document.getElementById('submitBtn');

	// Take action when key is pressed inside input box. 
	// inputBox.addEventListener('keyup', function(event) {
	$('input.myQuery').on('keyup', function(event) {
		// console.log(event, event.target);
		// Prevent default behavior of button press. 
		event.preventDefault();

		// Click button if enter is the key being pressed. 
		if (event.keyCode === 13) {
			enterBtn.click();
		}
	});
} );
