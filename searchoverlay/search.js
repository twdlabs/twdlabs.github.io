

// Search Overlay Object
class Search {

	// 1. Describe and create / initiate object. 

	constructor() {

		// Get page elements for open/close buttons. 
		this.openbtn = document.getElementById('openbtn');
		this.closebtn = document.getElementById('closebtn');

		// Get page elements for search overlay. 
		this.searchOverlay = document.getElementById('searchoverlay');
		this.searchField = document.getElementById('searchquery');
		this.loadSpinner = document.getElementById('loader');
		this.resultsBox = document.getElementById('resultsbox');
		this.prevQuery = '';

		// Handle events. 
		this.handleEvents();

		// Set initial overlay state. 
		this.alreadyOpen = false;

		// Set initial state of loader. 
		this.loadingResults = false;

		// Initialize results timer. 
		this.resultsTimer = undefined;
	}


	// 2. Events: Handle events. 

	handleEvents() {

		// Handle search overlay opening. 
		this.openbtn.addEventListener( 'click', this.openOverlay.bind(this) );

		// Handle search overlay closing. 
		this.closebtn.addEventListener( 'click', this.closeOverlay.bind(this) );

		// Handle keyboard shortcuts. 
		document.documentElement.addEventListener( 'keyup', this.dispatchKeyPress.bind(this) );

		// Handle results shown upon typing query. 
		this.searchField.addEventListener( 'keyup', this.respondToQueryTyping.bind(this) );

	}


	// 3. Actions: Define object methods and functions. 

	// Handle what's being shown upon typing query. 
	respondToQueryTyping() {
		console.log('Typing query...', this.searchField.value);

		// Ignore typing that doesn't change query (non-character keys). 
		let sameQueryAsB4 = this.searchField.value == this.prevQuery;
		if(sameQueryAsB4) return;

		// Set timer length. 
		let dt = 1500;

		// Clear timer if still typing. 
		clearTimeout(this.resultsTimer);

		// Start doing stuff (if query present). 
		if(this.searchField.value) {

			// Clear previous search results. 
			this.clearSearchResults();

			// Show loader icon. 
			this.setWaitState(true);

			// Start timer for new search results. 
			this.resultsTimer = setTimeout(this.getSearchResults.bind(this), dt);
		}
		// Stop everything (if no query present). 
		else {

			// Clear previous search results. 
			this.clearSearchResults();

			// Hide loader icon. 
			this.setWaitState(false);
		}

		// Save query for comparison with next query. 
		this.prevQuery = this.searchField.value;
	}

	// TODO: Set state of loader (when waiting for results). 
	setWaitState(loading) {
		if(loading /* && !this.loadingResults */) {
			this.loadSpinner.classList.add('active');
			this.loadingResults = true;
		}
		else {
			this.loadSpinner.classList.remove('active');
			this.loadingResults = false;
		}
	}

	// Clear previous search results. 
	clearSearchResults() {

		// Remove content within search results box. 
		this.resultsBox.innerHTML = '';
	}

	// TODO: Get results of search query. 
	getSearchResults() {
		// console.log(this.resultsBox);

		// Get search query. 
		let query = this.searchField.value;

		// TODO: Send request for search results. 
		let resultList = [];

		// Show search results. 
	// 	this.showSearchResults(resultList);
	// }
	// // TODO: Show results of search query. 
	// showSearchResults(resultList) {
		console.log(this.resultsBox);

		// Initialize display for search results. 
		let searchResults = '';

		// TODO: Get results of search query. 
		searchResults += `These are your search results for... "${query}": `+resultList;

		// Display search results on page. 
		this.resultsBox.innerHTML = searchResults;

		// Hide loader icon. 
		this.setWaitState(false);
	}

	// Handle keyboard shortcuts. 
	dispatchKeyPress(event) {

		// Get selected key. 
		let key = event.charCode || event.keyCode

		// Handle open shortcut (Key: S). 
		if(!this.alreadyOpen && (key==83 || key==115) ) {
			this.openOverlay();
		}

		// Handle close shortcut (Key: ESC). 
		if(this.alreadyOpen && key==27) {
			this.closeOverlay();
		}
	}

	// Open search overlay. 
	openOverlay() {
		console.log('Opening search overlay...');

		// Add active class. 
		this.searchOverlay.classList.add('active');

		// Freeze page scrolling. 
		document.body.classList.add('freeze');

		// Update overlay state. 
		this.alreadyOpen = true;
	}

	// Close search overlay. 
	closeOverlay() {
		console.log('Closing search overlay...');

		// Remove active class. 
		this.searchOverlay.classList.remove('active');

		// Un-freeze page scrolling. 
		document.body.classList.remove('freeze');

		// Update overlay state. 
		this.alreadyOpen = false;
	}

}

// Instantiate new Search object. 
const s = new Search();

