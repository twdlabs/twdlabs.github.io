


// // Define desktop window data. 
// const desktopData = [

// 	// 
// 	{
// 		// windowname:'',
// 		desklevel:0,
// 		domelement:null,
// 	},

// ];


/*****/


// Get highest desk level. 
function getTopLevel() {

	// Initialize result. 
	let result = 0;

	// Go thru all windows. 
	for(let window of desktopData) {

		// Get desk level of current window. 
		let level = 1 * window.desklevel;

		// Compare desk level of current window. 
		if(level > result) {
			// Save desk level of current window (if higher than result). 
			result = level;
		}
	}
	
	// Return result. 
	return result;
}

// Get new level above highest desk level. 
function getNewTopLevel() {
	return getTopLevel() + 1;
}
