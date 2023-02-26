


// Get main container. 
const maincontainer = document.querySelector('div#container');

// Get sidebar. 
const sidebar = document.querySelector('div#container nav.sidebar');

// Get search center. 
const searchcenter = document.querySelector('div#container main.main nav.headbar div.search');

// Get notification center. 
const notifcenter = document.querySelector('div#container main.main nav.headbar div.notifcenter');


/*****/


// Check for popup state change. 
// document.addEventListener('click',checkForPopupStateChange);


/*****/


// Toggle dark mode. 
function toggleDarkMode() {
	// Toggle dark mode. 
	document.body.classList.toggle('dark');
}

// Toggle state of sidebar. 
function toggleSidebarState() {
	console.log('toggleSidebarState');

	// Check initial state of sidebar. 
	let initialStateOn = maincontainer.classList.contains('open');

	// Close if initially open. 
	if(initialStateOn) {
		maincontainer.classList.remove('open');
		// sidebar.classList.remove('active');
		setFreezeState(false);
	}
	
	// Open if not initially open. 
	else {
		// closeAllPopups();
		maincontainer.classList.add('open');
		// sidebar.classList.add('active');
		setFreezeState(true);
	}
}

// Toggle state of notification center. 
function toggleNotificationCenter() {
	console.log('toggleNotificationCenter');

	// Check initial state of notification center. 
	let initialStateOn = notifcenter.classList.contains('active');

	// Close if initially open. 
	if(initialStateOn) {
		notifcenter.classList.remove('active');
		setFreezeState(false);
	}
	
	// Open if not initially open. 
	else {
		// closeAllPopups();
		notifcenter.classList.add('active');
		setFreezeState(true);
	}
}

// Toggle state of search center. 
function toggleSearchCenter() {
	console.log('toggleSearchCenter');

	// Check initial state of search center. 
	let initialStateOn = searchcenter.classList.contains('active');
	// let initialStateOn = maincontainer.classList.contains('search');
	
	// Close if initially open. 
	if(initialStateOn) {
		searchcenter.classList.remove('active');
		// maincontainer.classList.remove('search');
		setFreezeState(false);
	}
	
	// Open if not initially open. 
	else {
		// closeAllPopups();
		searchcenter.classList.add('active');
		// maincontainer.classList.add('search');
		setFreezeState(true);
	}
}

// Close all popup elements. 
function closeAllPopups() {
	console.log('Now closing all..');
	sidebar.classList.remove('active');
	// maincontainer.classList.remove('open');
	notifcenter.classList.remove('active');
	searchcenter.classList.remove('active');
	setFreezeState(false);
}

// Set freeze state. 
function setFreezeState(turnOn) {
	// return;

	// Freeze body scrolling. 
	if(turnOn) {
		(document.body).classList.add('freeze');
	}
	
	// Un-freeze body scrolling. 
	else {
		(document.body).classList.remove('freeze');
	}
}

// Check for popup state change. 
function checkForPopupStateChange(event) {

	// Get selected click target. 
	let clicktarget = event.target;

	// Check if sidebar open. 
	let sidebarOpen = maincontainer.classList.contains('open');
	// Check if clicked within sidebar. 
	let clickedInSidebar = sidebar.contains(clicktarget);
	// Close sidebar if open and clicked outside it. 
	if(sidebarOpen && !clickedInSidebar) toggleSidebarState();
	
	// Check if notification center open. 
	let notifCenterOpen = notifcenter.classList.contains('active');
	// Check if clicked within notification center. 
	let clickedInNotifCenter = notifcenter.contains(clicktarget);
	// Close notification center if open and clicked outside it. 
	if(notifCenterOpen && !clickedInNotifCenter) toggleNotificationCenter();

	// Check if search center open. 
	let searchCenterOpen = searchcenter.classList.contains('active');
	// Check if clicked within search center. 
	let clickedInSearchCenter = searchcenter.contains(clicktarget);
	// Close search center if open and clicked outside it. 
	if(searchCenterOpen && !clickedInSearchCenter) toggleSearchCenter();

	// Check if clicked within popup elements. 
	// let clickedInsideThing = (clickedInSidebar || clickedInNotifCenter || clickedInSearchCenter);
	// Close all popup elements if open and clicked outside. 
	// if(xyzOpen && !clickedInsideThing) closeAllPopups();
}
