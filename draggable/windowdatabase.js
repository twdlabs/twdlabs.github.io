


// // Define types of desktop windows. 
// const windowTypeData = [

// 	// 
// 	{
// 		id:'video',
// 		markup:'',
// 	},

// ];


/*****/


// TODO: Create new desktop window for text. 
function createTextWindow(url) {

	// Return layout. 
	return ``;
}

// TODO: Create new desktop window for video. 
function createVideoWindow(url) {

	// Return layout. 
	return ``;
}

// TODO: Create new desktop window for file folder. 
function createFolderWindow(url) {

	// Return layout. 
	return ``;
}

// Create dot matrix for drag hook. 
function createDotMatrix() {

	// Initialize list of dots. 
	let dots = '';

	// Fill list of dots. 
	for(let i=0 ; i<(numrowsperdotmatrix*numdotsperrow) ; i++) {
		dots += `
		<!-- dot -->
		<span class="dot"></span>
		<!-- /dot -->`;
	}

	// Return list of dots. 
	return dots;
}

// Create control panel for window header. 
function createControlPanel() {

	// Return control panel dots. 
	return `
	<!-- dot -->
	<div class="dot r">

		<!-- icon -->
		<span class="icon">&times;</span>
		<!-- /icon -->
		
	</div>
	<!-- /dot -->

	<!-- dot -->
	<div class="dot y">

		<!-- icon -->
		<span class="icon">&minus;</span>
		<!-- /icon -->
		
	</div>
	<!-- /dot -->

	<!-- dot -->
	<div class="dot g">

		<!-- icon -->
		<span class="icon">&plus;</span>
		<!-- /icon -->
		
	</div>
	<!-- /dot -->`;
}

// Request creation of new desktop window. 
function requestNewWindow() {

	// Ask user for type of desktop window. 
	let windowtype = window.prompt('What kind of desktop window ?', 'xyz');

	// Get newly created desktop window. 
	let newdeskwindowlayout = createNewWindow(windowtype);
	// Add new desktop window to page. 
	desktop.insertAdjacentHTML('beforeend',newdeskwindowlayout);

	// Get new desktop window. 
	let newdesktopwindow = document.querySelector(`div#container div.desktop div.window#window${windowcount}`);

	// Make new desktop window movable. 
	makeMovable(newdesktopwindow,'div.headbar');
	
	// Make new desktop window controllable. 
	makeControllable(newdesktopwindow);

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
	}
}
