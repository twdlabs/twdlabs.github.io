


// Get open button. 
const openbtn = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchquery label.searchlabel');
// Get close button. 
const closebtn = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchquery label.searchlabel');

// Get search overlay window. 
const searchoverlay = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch');
// Get search query field. 
const searchqueryfield = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchquery input.searchquery');
// Get search query button. 
const searchquerybtn = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchquery a.gobtn');
// Get search results box. 
const searchresultsbox = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchresults');


/*****/


// Activate search bar. 
activateSearchBar();

// Activate live search. 
// activateLiveSearch();


/*****/


// Activate search bar. 
function activateSearchBar() {

	// 
	searchqueryfield.addEventListener('input',updateSearchBtn);

	/****/

	// Update url of search button. 
	function updateSearchBtn() {

		// Get search query. 
		let searchquery = searchqueryfield.value;
		console.log('Search query:',!!searchquery,searchquery);

		// Update url of search button w/ search query. 
		if(searchquery) {

			// Update url of search button. 
			searchquerybtn.href = getRelativeUrl(`./projects/?q=${searchquery}`);

			// Activate search button. 
			searchquerybtn.classList.add('on');
		}
		
		// Remove url from search button w/o search query. 
		else {

			// Remove url from search button. 
			searchquerybtn.href = '';

			// De-activate search button. 
			searchquerybtn.classList.remove('on');
		}
	}
}

// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	const s = new SearchOverlay(openbtn,closebtn,searchoverlay,searchqueryfield,searchresultsbox);
	console.log('Search overlay:',s);
}

// Toggle search results. 
function toggleSearchResults() {
	
	// Toggle search results box. 
	searchresultsbox.classList.toggle('active');
}
