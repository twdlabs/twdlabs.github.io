


// Activate levels of desktop window. 
function makeLevelable(desktopwindow) {

	// Bring window to front when clicked. 
	desktopwindow.addEventListener('mousedown', bringToTop );
	desktopwindow.addEventListener('touchstart', bringToTop );

	/****/

	// Bring selected desktop window to front. 
	function bringToTop(/* event */) {
		
		// Check if selected desktop window already on top. 
		let alreadyOnTop = desktopwindow.classList.contains('top');
		if(alreadyOnTop) {
			console.log('Already on top!',desktopwindow);
			return;
		}

		bringWindowToTop(desktopwindow);
	}
}

// Get new level above highest desk level. 
function getNewTopLevel() {

	// Initialize max desk level. 
	let maxlevel = 0;

	// Get all current desktop windows. 
	let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

	// Go thru each desktop window. 
	for(let dw of alldesktopwindows) {

		// Get desk level of current window. 
		let windowlevel = dw.style.getPropertyValue('--i') * 1;

		// Save level as maximum if greater than maximum. 
		if(windowlevel>maxlevel) maxlevel = windowlevel;
	}

	// Get current max z-index. 
	return (maxlevel + 1);
}

// Bring selected desktop window to front of desktop. 
function bringWindowToTop(desktopwindow) {

	// Get new z-index value. 
	let newtoplevel = getNewTopLevel();
	// Set new level for desktop window. 
	desktopwindow.style.setProperty('--i',newtoplevel);

	// Get all current desktop windows. 
	let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

	for(let dw of alldesktopwindows) {

		// Set current desktop window as active. 
		if(dw==desktopwindow) {
			dw.classList.add('top');
		}
		
		// Set other desktop windows as not active. 
		else {
			dw.classList.remove('top');
		}
	}
}
