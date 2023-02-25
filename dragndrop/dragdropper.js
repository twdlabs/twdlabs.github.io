


// 
class DragDropper {

	// 
	constructor(dragboxes,dragobj) {

		// Save drag boxes. 
		this.dragboxes = dragboxes;

		// Save drag object. 
		this.dragobj = dragobj;

		// Activate drag boxes. 
		this.activateBoxes();
	}

	// Activate drag destination boxes. 
	activateBoxes() {
	
		// Go thru all boxes. 
		for(let box of this.dragboxes) {
			
			// Handle drag passing. 
			box.addEventListener('dragleave',passOverReceiving);
		
			// Handle prep for drag receipt. 
			box.addEventListener('dragover',getReadyToReceive);
			
			// Handle drag receipt. 
			box.addEventListener('drop',receiveIt.bind(this));
		}
	
		/****/
	
		// Pass over receiving element. 
		function passOverReceiving(event) {
		
			// Get selected box. 
			let selectedBox = event.currentTarget;
	
			// Update ready state. 
			selectedBox.classList.remove('ready');
		}
	
		// Get ready to receive element. 
		function getReadyToReceive(event) {
		
			// Get selected box. 
			let selectedBox = event.currentTarget;
	
			// Prevent default behavior to allow actual drop movement. 
			event.preventDefault();
	
			// Update ready state. 
			selectedBox.classList.add('ready');
		}
	
		// Receive element. 
		function receiveIt(event) {
		
			// Get selected box. 
			let selectedBox = event.currentTarget;
	
			// Add drag object to selected box. 
			selectedBox.appendChild(this.dragobj);
	
			// Update ready state. 
			selectedBox.classList.remove('ready');
		}
	}
}
