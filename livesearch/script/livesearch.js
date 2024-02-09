


// Get search overlay window. 
const searchoverlay = document.querySelector('div#container div#searchoverlay');
// console.log('searchoverlay:',searchoverlay);

// Get search query field. 
// const searchqueryfield = document.querySelector('div#container div#searchoverlay section.head div.querybox input#searchquery');
// console.log('searchqueryfield:',searchqueryfield);

// Get search results box. 
// const searchresultsbox = document.querySelector('div#container div#searchoverlay section.body div#searchresults');
// console.log('searchresultsbox:',searchresultsbox);


// Get open button. 
const openbtn = document.querySelector('div#container div.openbtn');
// console.log('openbtn:',openbtn);

// Get close button. 
// const closebtn = document.querySelector('div#container div#searchoverlay section.head div.querybox div.closebtn');
// console.log('closebtn:',closebtn);


/*****/


// Activate live search. 
activateLiveSearch();


/*****/


// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	const lso = new LiveSearchOverlay(searchoverlay,openbtn);
	// const lso = new LiveSearchOverlay(openbtn/* ,closebtn */,searchoverlay/* ,searchqueryfield,searchresultsbox */);

	// Open search overlay. 
	// lso.openSearchOverlay();
}
