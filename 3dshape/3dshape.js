


// Get cube shape. 
const cube = document.querySelector('div.cube');

// Get all radio buttons. 
const radiobtns = document.querySelectorAll('input[type=radio]');


/*****/


// Define face ids. 
const cubefaceids = [
	'spin',
	'top',
	'left',
	'front',
	'right',
	'bottom',
	'back',
];


/*****/


// Enable shape movement. 
enableMovement();


/*****/


// Enable movement of cube. 
function enableMovement() {

	// Go thru each radio button. 
	for(let btn of radiobtns) {

		// Enable radio button clicks. 
		btn.addEventListener('click',showCubeFace);
	}

	/****/

	// Clear selection from cube. 
	function clearCubeFaces() {

		// Go thru each cube face id. 
		for(let cfid of cubefaceids) {

			// Remove face id from cube. 
			cube.classList.remove(cfid);
		}
	}
	
	// Show face of selected cube side. 
	function showCubeFace() {
		console.log('this:',this);

		// Get id of selected face. 
		var selectedfaceid = this.value;
	
		// Clear selected cube side. 
		clearCubeFaces();
		cube.classList.add(selectedfaceid)
	}
}
