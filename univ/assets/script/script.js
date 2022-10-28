


// Get open button. 
const openbtn = document.querySelector('div#container header#header nav.navmenu.b ul.navlist li.navitem a.navlink.search');
// Get close button. 
const closebtn = document.querySelector('div#container div#searchoverlay section.top div.input div.closebtn');

// Get search overlay window. 
const searchOverlay = document.querySelector('div#container div#searchoverlay');
// Get search query field. 
const searchField = document.querySelector('div#container div#searchoverlay section.top div.input input#searchquery');
// Get search results box. 
const resultsBox = document.querySelector('div#container div#searchoverlay section.bottom div#resultsbox');


/*****/


// Activate live search. 
activateLiveSearch();


/*****/


// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	const s = new Search(openbtn,closebtn,searchOverlay,searchField,resultsBox);
}
