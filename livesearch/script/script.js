


// Get open button. 
const openbtn = document.querySelector('div#container div.openbtn');

// Get search overlay window. 
const searchOverlay = document.querySelector('div#container div#searchoverlay');
// Get close button. 
const closebtn = document.querySelector('div#container div#searchoverlay section.head div.input div.closebtn');
// Get search query field. 
const searchField = document.querySelector('div#container div#searchoverlay section.head div.input input#searchquery');
// Get search results box. 
const resultsBox = document.querySelector('div#container div#searchoverlay section.body div#resultsbox');


/*****/


// Activate live search. 
activateLiveSearch();


/*****/


// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	const s = new SearchOverlay(openbtn,closebtn,searchOverlay,searchField,resultsBox);
}
