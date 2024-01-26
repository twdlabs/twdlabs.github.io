


// Get live search overlay window. 
const livesearchoverlay = document.querySelector('div#container header.navbar div.bin div.drawer div.livesearch');
// console.log('livesearchoverlay:',livesearchoverlay);

// Get open button for live search. 
const livesearchopenbtn = document.querySelector('div#container header.navbar div.bin div.drawer div.livesearch div.searchquery label.searchlabel');
// console.log('livesearchopenbtn:',livesearchopenbtn);
// Get close button for live search. 
const livesearchclosebtn = document.querySelector('div#container header.navbar div.bin div.drawer div.livesearch div.searchquery label.searchlabel');
// console.log('livesearchclosebtn:',livesearchclosebtn);

// Get live search go button. 
const livesearchgobtn = document.querySelector('div#container header.navbar div.bin div.drawer div.livesearch div.searchquery a.gobtn');
// console.log('livesearchgobtn:',livesearchgobtn);
// Get live search query field. 
const livesearchqueryfield = document.querySelector('div#container header.navbar div.bin div.drawer div.livesearch div.searchquery input.searchquery');
// console.log('livesearchqueryfield:',livesearchqueryfield);
// Get live search results box. 
const livesearchresultsbox = document.querySelector('div#container header.navbar div.bin div.drawer div.livesearch div.searchresults');
// console.log('livesearchresultsbox:',livesearchresultsbox);


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

		// Sanitize search query to be acceptable for use in filtering process. 
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

		// Submit search upon enter key press. 
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
