


// Get home button. 
const headbar = document.querySelector('div#container header.headbar')
const homebtn = document.querySelector('div#container footer.footbar')
console.log('homebtn',homebtn);

// Get all app screens. 
const applaunchers = document.querySelectorAll('div#container main.screen div.home div.grid div.item div.applauncher');
console.log('applaunchers',applaunchers);

// Get all app launchers. 
const allApplayouts = document.querySelectorAll('div#container main.screen div.applayout');
console.log('allApplayouts',allApplayouts);


/*****/


// Activate home button clicks. 
headbar.addEventListener('click',minimizeApps);
homebtn.addEventListener('click',minimizeApps);

// Activate app launcher clicks. 
for(let launcher of applaunchers) {
	launcher.addEventListener('click',launchApp);
}


/*****/


// Launch app associated with selected app launcher icon. 
function launchApp(event) {
	console.log('launchApp');

	// Get selected app launcher. 
	const applauncher = event.currentTarget;

	// Get app keyname from selected app launcher. 
	const appkeyname = applauncher.getAttribute('data-appkeyname');

	// Show app name. 
	console.log('App selected:',appkeyname,applauncher);
	
	// Minimize app layout(s) to show home screen. 
	minimizeApps(event);
	
	// Get selected app layout. 
	const selectedapplayout = document.querySelector('main.screen div.applayout.'+appkeyname);

	// Show selected app layout. 
	if(selectedapplayout) {
		selectedapplayout.classList.add('active');
	}
	else {
		console.log('App not found:', appkeyname);
		showMessage('App not found:'+appkeyname);
	}
}

// Minimize app layout(s) to show home screen. 
function minimizeApps(event) {
	// console.log('minimizeApps');
	
	// Minimize all apps. 
	for(let applayout of allApplayouts) {
		applayout.classList.remove('active');
	}
}
