


// Get all boxes. 
const boxes = document.querySelectorAll('div#container main.main div.box');

// Get image. 
const imageA = document.querySelector('div#container main.main div.box img.image');


/*****/


// Activate boxes. 
activateBoxes();


/*****/


// Activate boxes. 
function activateBoxes() {

	// Go thru all boxes. 
	for(let box of boxes) {
	
		// 
		box.addEventListener('dragover',getReadyToReceive);
	
		// 
		box.addEventListener('drop',receiveIt);
	
		// 
		box.addEventListener('dragleave',passOverReceiving);
	}

	/****/

	// Get ready to receive element. 
	function getReadyToReceive(event) {

		// Prevent default behavior to allow actual drop movement. 
		event.preventDefault();
	
		// 
		let selectedBox = event.currentTarget;

		// 
		selectedBox.classList.add('ready');
	}

	// Receive element. 
	function receiveIt(event) {
	
		// 
		let selectedBox = event.currentTarget;

		// 
		selectedBox.classList.remove('ready');

		// 
		selectedBox.appendChild(imageA);
	}

	// Pass over receiving element. 
	function passOverReceiving(event) {
	
		// 
		let selectedBox = event.currentTarget;

		// 
		selectedBox.classList.remove('ready');
	}
}
