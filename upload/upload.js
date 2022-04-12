

// Get file drop target. 
const droptarget = document.querySelector('main.droptarget');

// Get file input field. 
const fileinput = document.querySelector('input#browsefile');

// Define acceptable file types. 
const acceptedFileTypes = ['image/png','image/jpg','image/jpeg',];

// Initialize data for selected file. 
let selectedFile = undefined;


/*****/


// Handle user events. 
handleEvents();


/*****/


// Handle user events. 
function handleEvents() {

	// Enable activity on drop target. 
	// droptarget.addEventListener('dragenter',activateDropTarget);
	droptarget.addEventListener('dragover',activateDropTarget);
	droptarget.addEventListener('dragleave',deactivateDropTarget);
	droptarget.addEventListener('drop',dropItem);
	
	// Enable activity on file input field. 
	fileinput.addEventListener('input',selectFile);
}

// Activate drop target. 
function activateDropTarget(event) {

	// Prevent browser default handling (drop blockage). 
	event.preventDefault();

	// 
	droptarget.classList.add('active');
}

// De-activate drop target. 
function deactivateDropTarget(/* event */) {

	// 
	droptarget.classList.remove('active');
}

// Drop item in target. 
function dropItem(event) {

	// Prevent browser default handling (opening as link). 
	event.preventDefault();
	
	// Show data transfer. 
	console.log('Drag data transfer:',event.dataTransfer);

	// Get user selected file. 
	selectedFile = event.dataTransfer.files[0];
	console.log('Selected file:',selectedFile);

	// Check for image file. 
	let validImageFile = !!(selectedFile) && acceptedFileTypes.includes(selectedFile.type);
	console.log('Valid image file:',validImageFile);

	// Use image file if valid. 
	if(validImageFile) {
		console.log('We got a valid image file!',selectedFile.type);

		// Create file reader. 
		let fileReader = new FileReader();

		// Load selected image when file reader is loaded.
		fileReader.onload = ()=>{loadSelectedImage(fileReader);}

		// Trigger load function above. 
		fileReader.readAsDataURL(selectedFile);

		// Put drop target into display mode. 
		droptarget.classList.add('display');
	}
	else {
		console.log('No image found');

		// 
		window.alert('Invalid image file selected')

		// De-activate drop target. 
		deactivateDropTarget();
	}

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

// Select file for input. 
function selectFile(event) {

	// Get selected file. 
	selectedFile = event.currentTarget.files[0];
	console.log('Selected file:',selectedFile);

	// Check for image file. 
}
