


// Get open button. 
const openbtn = document.getElementById('openbtn');
// Get close button. 
const closebtn = document.getElementById('closebtn');

// Get search overlay window. 
const searchOverlay = document.getElementById('searchoverlay');
// Get search query field. 
const searchField = document.getElementById('searchquery');
// Get search results box. 
const resultsBox = document.getElementById('resultsbox');


/*****/


// Activate live search. 
activateLiveSearch();


/*****/


// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	const s = new Search(openbtn,closebtn,searchOverlay,searchField,resultsBox);
}
