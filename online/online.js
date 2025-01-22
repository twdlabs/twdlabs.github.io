


// Get main container. 
const container = document.querySelector('div#container');

// Get toaster items. 
const toasteritems = document.querySelectorAll('div#container ul.toasterbox li.toaster div.toast');


/*****/


// Define interval btwn successive checks. 
const btwndt = 15000;
// Define duration of message display. 
const msgdt = 2500;

// Initialize current state. 
let currentlyOnline = false;


/*****/


// Check for internet connection (initially). 
checkConnection();
// Check for internet connection (periodically n continually). 
setInterval(checkConnection,btwndt);

// Activate toaster close buttons. 
activateToastClosers();


/*****/


// Toggle state. 
function toggleState() {

	// Toggle state. 
	container.classList.toggle('on');

	// Check for internet connection. 
	setTimeout(checkConnection,msgdt);
}

// Check for internet connection. 
function checkConnection() {
	console.log('Checking connection...');

	// Prepare dynamic request for server data. 
	let xhr = new XMLHttpRequest();

	// Connect request with url and request method. 
	let requesturl = '';
	requesturl = 'http://127.0.0.1:5501/';
	requesturl = 'https://jsonplaceholder.typicode.com/posts';
	xhr.open('GET', requesturl, true);
	// xhr.open('POST', requesturl, true);

	// Check status of data request when loaded. 
	xhr.onload = checkRequestStatus/* .bind(xhr) */;
	// Set state as offline for error response. 
	xhr.onerror = setOfflineState;

	// Send data request. 
	xhr.send();

	/****/

	// Check status of data request. 
	function checkRequestStatus() {
		// console.log('xhr?',this);

		// Set state as online for valid response. 
		if(this.status==200) setOnlineState();

		// Set state as offline for invalid response. 
		else setOfflineState();
	}

	// Set state as online. 
	function setOnlineState() {
		console.log('Online');

		// Set currrent state. 
		currentlyOnline = true;

		// Set page state: online. 
		container.classList.remove('off');
		container.classList.add('on');

		// Show toast message. 
		showToast();
	}
	// Set state as offline. 
	function setOfflineState() {
		console.log('Offline');

		// Set currrent state. 
		currentlyOnline = false;

		// Set page state: offline. 
		container.classList.remove('on');
		container.classList.add('off');

		// Show toast message. 
		showToast();
	}
}

// Show toast message. 
function showToast() {

	// Display toaster. 
	container.classList.add('toasted');

	// Clear toast message after message duration. 
	if(currentlyOnline) setTimeout(clearToast,msgdt);
}

// Activate toaster close buttons. 
function activateToastClosers() {

	// Go thru each toaster. 
	for(let toast of toasteritems) {
	
		// Get toaster's close button. 
		let closebtn = toast.querySelector('div.controls div.closebtn');
	
		// Close toaster (when close button clicked). 
		closebtn.addEventListener('click',clearToast);
	
		// Check for internet connection (when toaster clicked). 
		// toast.addEventListener('click',checkConnection);
	}
}

// Clear toast message. 
function clearToast() {

	// Conceal toaster. 
	container.classList.remove('toasted');

	// Maintain toaster display if currently offline. 
	if(!currentlyOnline) container.classList.add('toasted');
}
