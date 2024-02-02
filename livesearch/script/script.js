


// Get open button. 
const openbtn = document.querySelector('div#container div.openbtn');

// Get search overlay window. 
const searchoverlay = document.querySelector('div#container div#searchoverlay');
// Get close button. 
const closebtn = document.querySelector('div#container div#searchoverlay section.head div.querybox div.closebtn');
// Get search query field. 
const searchqueryfield = document.querySelector('div#container div#searchoverlay section.head div.querybox input#searchquery');
// Get search results box. 
const searchresultsbox = document.querySelector('div#container div#searchoverlay section.body div#resultsbox');


/*****/


// Activate live search. 
activateLiveSearch();


/*****/


// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	const lso = new LiveSearchOverlay(openbtn,closebtn,searchoverlay,searchqueryfield,searchresultsbox);
}
