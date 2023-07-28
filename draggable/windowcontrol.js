


// Activate controls for given desktop window. 
function makeControllable(desktopwindow) {
	// console.log('\tActivating controls:',desktopwindow);

	// Get control dot buttons. 
	let dotbtnred = desktopwindow.querySelector('div#container div.desktop div.window div.headbar div.controls div.dot.r');
	let dotbtnyellow = desktopwindow.querySelector('div#container div.desktop div.window div.headbar div.controls div.dot.y');
	let dotbtngreen = desktopwindow.querySelector('div#container div.desktop div.window div.headbar div.controls div.dot.g');

	// Activate control dot buttons. 
	dotbtnred.addEventListener('click',closeWindow);
	dotbtnyellow.addEventListener('click',toggleMinimize);
	dotbtngreen.addEventListener('click',toggleMaximize);

	/****/

	// Toggle window maximization. 
	function toggleMaximize() {

		// Check if already maximized. 
		let alreadyMaximized = desktopwindow.classList.contains('max');

		// Un-maximize if already maximized. 
		if(alreadyMaximized) {
			// 
			desktopwindow.classList.remove('max');
		}
		// Maximize if not already maximized. 
		else {
			// 
			desktopwindow.classList.add('max');
			// Ensure exclusivity of max/min. 
			desktopwindow.classList.remove('min');
		}
	}

	// Toggle window minimization. 
	function toggleMinimize() {

		// Check if already minimized. 
		let alreadyMinimized = desktopwindow.classList.contains('min');

		// Un-minimize if already minimized. 
		if(alreadyMinimized) {
			// 
			desktopwindow.classList.remove('min');
		}
		// Minimize if not already minimized. 
		else {
			// 
			desktopwindow.classList.add('min');
			// Ensure exclusivity of max/min. 
			desktopwindow.classList.remove('max');
		}
	}

	// Close window. 
	function closeWindow() {
		// Remove element from page. 
		desktopwindow.remove();
	}
}

// Request creation of new desktop window. 
function addNewWindow(windowtype) {

	// Ask user for type of desktop window. 
	// let windowtype = window.prompt('What kind of desktop window ?', 'xyz');

	// Get newly created desktop window. 
	let newdeskwindowlayout = createNewWindow(windowtype);
	// Add new desktop window to page. 
	desktop.insertAdjacentHTML('beforeend',newdeskwindowlayout);

	// Activate new desktop window. 
	activateNewWindow();

	// Increment count of desktop windows. 
	windowcount++;

	/****/

	// Create new desktop window. 
	function createNewWindow(type) {
		console.log('New window type:',type);
	
		// Compile layout for new desktop window. 
		return `
		<!-- window -->
		<div id="window${windowcount}" class="window" style="--i:${ getNewTopLevel() };">
	
			<!-- headbar -->
			<div class="headbar">

				<!-- controls -->
				<div class="controls">${ createControlPanel() }</div>
				<!-- /controls -->
	
				<!-- dotmatrix -->
				<div class="dotmatrix">${ createDotMatrix() }</div>
				<!-- /dotmatrix -->
	
			</div>
			<!-- /headbar -->
	
			<!-- bodycontent -->
			<div class="bodycontent">
			
				<!-- copy -->
				<p class="copy">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nemo incidunt a nam dolorum voluptates nulla perspiciatis adipisci deserunt minima quibusdam, sapiente illo blanditiis magnam deleniti tenetur hic laboriosam expedita! </p>
				<!-- /copy -->
	
			</div>
			<!-- /bodycontent -->
			
		</div>
		<!-- /window -->`;

		/***/
		
		// TODO: Create file folder content for new desktop window. 
		function createFolderContent(url) {
		
			// Return layout. 
			return ``;
		}

		// TODO: Create text content for new desktop window. 
		function createTextContent(url) {
		
			// Return layout. 
			return ``;
		}

		// TODO: Create image content for new desktop window. 
		function createImageContent(url) {
		
			// Return layout. 
			return ``;
		}

		// TODO: Create audio content for new desktop window. 
		function createAudioContent(url) {
		
			// Return layout. 
			return ``;
		}
		
		// TODO: Create video content for new desktop window. 
		function createVideoContent(url) {
		
			// Return layout. 
			return ``;
		}
	}

	// Activate new desktop window. 
	function activateNewWindow() {

		// Get new desktop window. 
		let newdesktopwindow = document.querySelector(`div#container div.desktop div.window#window${windowcount}`);
	
		// Make new desktop window movable. 
		makeMovable(newdesktopwindow,'div.headbar');
		
		// Make new desktop window controllable. 
		makeControllable(newdesktopwindow);

		// Bring new desktop window to top layer. 
		bringWindowToTop(newdesktopwindow);

		/***/

		// Bring selected desktop window to top layer of stack. 
		function bringWindowToTop(desktopwindow) {

			// Get new z-index value. 
			let newtoplevel = getNewTopLevel();
	
			// Set new level for desktop window. 
			desktopwindow.style.setProperty('--i',newtoplevel);

			// Get all current desktop windows. 
			let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');
	
			for(let dw of alldesktopwindows) {
				// Set only current desktop window as active. 
				if(dw==desktopwindow) {
					dw.classList.add('top');
				}
				else {
					dw.classList.remove('top');
				}
			}
		}
	}
}

// Minimize all desktop windows. 
function minimizeAll() {
	console.log('Minimizing all windows...');

	// Get all current desktop windows. 
	let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

	// Go thru all desktop windows. 
	for(let dw of alldesktopwindows) {

		// Minimize desktop window. 
		dw.classList.remove('max');
		dw.classList.add('min');
	}
	console.log('DONE');
}

// Close all desktop windows. 
function closeAll() {
	console.log('Closing all windows...');

	// Get all current desktop windows. 
	let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

	// Go thru all desktop windows. 
	for(let dw of alldesktopwindows) {

		// Close desktop window. 
		dw.remove();
	}
	console.log('DONE');
}
