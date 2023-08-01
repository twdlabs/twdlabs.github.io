


// Get desktop window container. 
const desktop = document.querySelector('div#container div.desktop');
// Get desktop link grid. 
const desktoplinkgrid = document.querySelector('div#container div.desktop div.linkgrid');


/*****/

// Initialize count of desktop windows. 
let windowcount = 0;
console.log('Window count:',windowcount);

// Increment count of desktop windows. 
windowcount+=5;
console.log('Window count:',windowcount);


/*****/


// Activate desktop. 
activateDesktop();

// Close all previous desktop windows. 
// closeAll();


/*****/


// Activate initial desktop windows. 
function activateDesktop() {

	// Get all current desktop windows. 
	let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

	// Go thru all desktop windows. 
	for(let dw of alldesktopwindows) {
		// Activate desktop window. 
		activateDesktopWindow(dw);
	}
}

// Activate desktop window. 
function activateDesktopWindow(dw) {
	console.log('Now activating:',dw);

	// Activate movement of desktop window. 
	makeMovable(dw/* ,'div.headbar' */);

	// Activate controls of desktop window. 
	makeControllable(dw);

	// Activate levels of desktop window. 
	makeLevelable(dw);

	// Activate resizability of desktop window. 
	makeResizable(dw);

	// Position desktop window. 
	positionDesktopWindow(dw);
}
