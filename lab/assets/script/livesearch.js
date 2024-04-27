


// Get live search overlay window. 
const livesearchoverlay = document.querySelector('div#container div#searchoverlay');
// console.log('livesearchoverlay:',livesearchoverlay);

// Get open button for live search. 
const livesearchopenbtn = document.querySelector('div#container header.navbar div.bin div.cornerpanel div.livesearchbtn');
// console.log('livesearchopenbtn:',livesearchopenbtn);


// Activate live search. 
activateLiveSearch();


/*****/


// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	const lso = new LiveSearchOverlay(livesearchoverlay,livesearchopenbtn);
	// const lso = new LiveSearchOverlay(livesearchopenbtn,livesearchclosebtn,livesearchoverlay,livesearchqueryfield,livesearchresultsbox);
	// console.log('Live search overlay:',lso);
}
