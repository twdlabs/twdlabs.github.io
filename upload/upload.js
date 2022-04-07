

// Get drop target. 
let droptarget = document.querySelector('main.droptarget');

// Initialize data for selected file. 
let selectedFile = undefined;

// Define acceptable file types. 
acceptedFileTypes = ['image/png','image/jpg','image/jpeg',];


/*****/


// Enable activity on drop target. 
droptarget.addEventListener('dragenter',activateDropTarget);
droptarget.addEventListener('dragover',activateDropTarget);
droptarget.addEventListener('dragleave',deactivateDropTarget);
droptarget.addEventListener('drop',dropItem);


/*****/


// Activate drop target. 
function activateDropTarget(event) {

	// Prevent browser default handling (drop blockage). 
	event.preventDefault();
	droptarget.classList.add('active');
}

// De-activate drop target. 
function deactivateDropTarget(event) {
	droptarget.classList.remove('active');
}

// Drop item in target. 
function dropItem(event) {

	// Prevent browser default handling (opening as link). 
	event.preventDefault();

	// Get user selected file. 
	selectedFile = event.dataTransfer.files[0];
	
	// Show data transfer. 
	console.log('Drag data transfer:',event.dataTransfer);

	// Check for image file. 
	let isImageFile = acceptedFileTypes.includes(selectedFile.type);

	// Use image file if valid. 
	if(isImageFile) {
		console.log('We got an image!',selectedFile.type);

		// Create file reader. 
		let fileReader = new FileReader();

		// Load selected image when file reader is loaded.
		fileReader.onload = ()=>{loadSelectedImage(fileReader);}

		// Trigger load function above. 
		fileReader.readAsDataURL(selectedFile);
	}
	else {
		console.log('No image found');

		// De-activate drop target. 
		deactivateDropTarget();
	}

	droptarget.classList.add('full');

	/*****/

	// Load selected image. 
	function loadSelectedImage(fileReader) {

		// Get url of selected file. 
		let fileUrl = fileReader.result;
		console.log('File url:',fileUrl);

		// Show selected image in drop target. 
		droptarget.innerHTML = `<img class="upload" src="${fileUrl}" alt="${selectedFile.name}">`;
	}
}
