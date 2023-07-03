


// Get main container. 
const container = document.querySelector('div#container');

// Get toast items. 
const toastitems = document.querySelectorAll('div#container ul.toasterlist li.toastitem div.toast');


/*****/


// Define interval btwn successive connection checks. 
const dt = 5000;
const longdt = 15000;

// Initialize current state. 
let currentlyOnline = false;


/*****/


// Check for internet connection (when page loads). 
checkConnection();

// Check for internet connection (continuously). 
// setInterval(checkConnection,longdt);

// Check for internet connection (when toaster clicked). 
for(let toast of toastitems) {
	let closebtn = toast.querySelector('div.controls div.closebtn')
	// toast.addEventListener('click',checkConnection);
	closebtn.addEventListener('click',clearToast)
}


/*****/


// Toggle state. 
function toggleState() {
	// Toggle state. 
	container.classList.toggle('on');

	// Check for internet connection. 
	setTimeout(checkConnection,500);
}

// Check for internet connection. 
function checkConnection() {
	console.log('Checking connection...');

	// Prepare dynamic request for server data. 
	let xhr = new XMLHttpRequest();

	// Connect request with url and request method. 
	let requesturl = 'http://127.0.0.1:5501/';
	requesturl = 'https://jsonplaceholder.typicode.com/posts';
	xhr.open('GET', requesturl, true);

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
		
		// Update page state. 
		updatePageState();
	}
	// Set state as offline. 
	function setOfflineState() {
		console.log('Offline');

		// Set currrent state. 
		currentlyOnline = false;
		
		// Update page state. 
		updatePageState();
	}
	// Update page state. 
	function updatePageState() {

		// Set page state: online. 
		if(currentlyOnline) {
			container.classList.remove('off');
			container.classList.add('on');
		}

		// Set page state: offline. 
		else {
			container.classList.remove('on');
			container.classList.add('off');
		}
		
		// Show toast message. 
		showToast();
	}
}

// Show toast message. 
function showToast() {
	container.classList.add('toast');

	// Clear toast message in due time. 
	if(currentlyOnline) setTimeout(clearToast,dt/2);
}
// Clear toast message. 
function clearToast() {
	container.classList.remove('toast');
	if(!currentlyOnline) container.classList.add('toast');
}
