


// Get cube shape. 
const cube = document.querySelector('div.cube');

// Get all radio buttons. 
const radiobtns = document.querySelectorAll('input[type=radio]');


/*****/


// Enable shape movement. 
enableMovement();


/*****/


// Enable shape movement. 
function enableMovement() {

	// Go thru each radio button. 
	for(let btn of radiobtns) {

		// Enable radio button clicks. 
		btn.addEventListener('click',showFace);
		
		// Show face of selected cube side. 
		function showFace(){
			var cls = 'show-' + this.value;
			cube.removeClass();
			cube.addClass('shape cube '+cls)
		}
	}
}
