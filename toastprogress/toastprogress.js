

// Create globally accesible space for toast timer. 
var timer;

// Define amount of time taost message remains on screen. 
const dt = 4000;

// Get show button. 
let showbtn = document.querySelector('div.showbtn');

// Get close button. 
let closebtn = document.querySelector('main#toaster div.closebtn');

// Get message toaster. 
let toaster = document.getElementById('toaster');

// Enable show button to show toaster. 
showbtn.addEventListener('click',openToast);
closebtn.addEventListener('click',closeToast);


/*****/


// Open toast message. 
function openToast() {

	// Clear any previous toast timers. 
	clearTimeout(timer);

	// Show toaster. 
	toaster.classList.add('active');

	// Setup toast timer to close toast message after time. 
	timer = setTimeout(closeToast,dt);
}

// Close toast message. 
function closeToast() {

	// Hide toaster. 
	toaster.classList.remove('active');
}
