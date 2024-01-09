


// Get live search overlay window. 
const livesearchoverlay = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch');

// Get open button for live search. 
const livesearchopenbtn = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchquery label.searchlabel');
// Get close button for live search. 
const livesearchclosebtn = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchquery label.searchlabel');

// Get live search go button. 
const livesearchgobtn = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchquery a.gobtn');
// Get live search query field. 
const livesearchqueryfield = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchquery input.searchquery');
// Get live search results box. 
const livesearchresultsbox = document.querySelector('div#container header.navbar div.bin div.sidebar div.livesearch div.searchresults');


/*****/


// Activate search bar. 
activateSearchBar();

// Activate live search. 
// activateLiveSearch();


/*****/


// Activate search bar. 
function activateSearchBar() {

	// Activate search query field. 
	livesearchqueryfield.addEventListener('input',updateSearchBtn);
	livesearchqueryfield.addEventListener('keyup',checkForShortcut);

	/****/

	// Update search button. 
	function updateSearchBtn() {

		// Get search query. 
		let searchquery = livesearchqueryfield.value;
		console.log('Search query:',!!searchquery,searchquery);

		// Update url of search button w/ search query. 
		if(searchquery) {

			// TODO: Update url of search button. 
			livesearchgobtn.href = getRelativeUrl(`./search/?q=${ sanitizeSearchQuery(searchquery) }`);

			// Activate search button. 
			livesearchgobtn.classList.add('on');
		}
		
		// Remove url from search button w/o search query. 
		else {

			// Remove url from search button. 
			livesearchgobtn.href = '';

			// De-activate search button. 
			livesearchgobtn.classList.remove('on');
		}

		/***/

		// Sanitize search query. 
		function sanitizeSearchQuery(searchquery) {

			// Replace spaces with plus signs. 
			return searchquery.split(' ').join('+');
		}
	}

	// Check for shortcut key in search field. 
	function checkForShortcut(event) {
		console.log('Event:',event);

		// Get key code of selected key. 
		let keycode = event.keyCode;
		console.log('Selected key code:',keycode);

		// 
		if(keycode==13) livesearchgobtn.click();
	}
}

// Activate live search. 
function activateLiveSearch() {

	// Create new Search object. 
	const s = new SearchOverlay(livesearchopenbtn,livesearchclosebtn,livesearchoverlay,livesearchqueryfield,livesearchresultsbox);
	console.log('Search overlay:',s);
}

// Toggle search results. 
function toggleSearchResults() {
	
	// Toggle search results box. 
	livesearchresultsbox.classList.toggle('active');
}
