


// Get open button. 
const openbtn = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch div.searchquery label.searchlabel');
// Get close button. 
const closebtn = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch div.searchquery label.searchlabel');

// Get search overlay window. 
const searchOverlay = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch');
// Get search query field. 
const searchField = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch div.searchquery input.searchquery');
// Get search results box. 
const resultsBox = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch div.searchresults');


/*****/


// Activate live search. 
activateLiveSearch();


/*****/


// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	/* const s =  */new SearchOverlay(openbtn,closebtn,searchOverlay,searchField,resultsBox);
}

// Toggle search results. 
function toggleSearchResults() {

	// Get search results box. 
	let searchresultsbox = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch div.searchresults');
	
	// Toggle search results box. 
	searchresultsbox.classList.toggle('active');
}
