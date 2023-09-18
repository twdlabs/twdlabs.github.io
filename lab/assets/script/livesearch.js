


// Get open button. 
const openbtn = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch div.searchquery label.searchlabel');
// Get close button. 
const closebtn = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch div.searchquery label.searchlabel');

// Get search overlay window. 
const searchoverlay = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch');
// Get search query field. 
const searchfield = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch div.searchquery input.searchquery');
// Get search results box. 
const searchresultsbox = document.querySelector('div#container nav.navbar div.bin div.navmenu div.livesearch div.searchresults');


/*****/


// Activate live search. 
activateLiveSearch();


/*****/


// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	const s = new SearchOverlay(openbtn,closebtn,searchoverlay,searchfield,searchresultsbox);
	// console.log('Search overlay:',s);
}

// Toggle search results. 
function toggleSearchResults() {
	
	// Toggle search results box. 
	searchresultsbox.classList.toggle('active');
}
