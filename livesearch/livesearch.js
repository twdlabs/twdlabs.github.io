


// Search Overlay Object
class Search {

	// 1. Describe and create / initiate object. 

	constructor(openbtn,closebtn,searchOverlay,searchField,resultsBox,loadSpinner) {

		// Get page elements for open/close buttons. 
		this.openbtn = openbtn;
		this.closebtn = closebtn;

		// Get page elements for search overlay. 
		this.searchOverlay = searchOverlay;
		this.searchField = searchField;
		this.resultsBox = resultsBox;
		this.loadSpinner = loadSpinner;
		this.prevQuery = '';

		// Define search results delay. 
		this.dt = 250;

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

		// Clear timer if still typing. 
		clearTimeout(this.resultsTimer);

		// Start doing stuff (if query present). 
		if(this.searchField.value) {

			// Clear previous search results. 
			this.clearSearchResults();

			// Show loader icon. 
			if(!this.loadingResults) this.setWaitState(true);

			// Start timer for new search results. 
			this.resultsTimer = setTimeout(this.getSearchResults.bind(this), this.dt);
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

	// Set appropriate state for loader. 
	setWaitState(currentlyWaiting) {
		if(currentlyWaiting) {
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
		console.log(this.resultsBox);

		// Get search query. 
		let query = this.searchField.value;

		// TODO: Send request for search results. 
		let resultList = [];
		resultList = testResults;

		// Show search results. 
	// 	this.showSearchResults(resultList);
	// }
	// // TODO: Show results of search query. 
	// showSearchResults(resultList) {
		console.log('resultList',resultList);

		// Initialize display for search results. 
		let searchResults = '';

		// Add label for search results of search query. 
		searchResults += `
		<!-- resulthead -->
		<h2 class="resulthead">Here are your search results for... "${query}": </h2>
		<!-- /resulthead -->`;

		// TODO: Get results of search query. 
		for(let resultSet of resultList) {
			console.log('resultSet',resultSet);

			searchResults += `
			<!-- resultset -->
			<div class="resultset">`;

			searchResults += `
			<!-- resulthead -->
			<h3 class="resulthead">
				Result Head
			</h3>
			<!-- /resulthead -->
	
			<!-- resultlist -->
			<ul class="resultlist">`;

			for(let resultItem of resultSet.setlist) {
				console.log('resultItem',resultItem);
				searchResults += `
				<!-- resultitem -->
				<li class="resultitem">

					<!-- resultlink -->
					<a class="resultlink" href="${resultItem.link}">
						${resultItem.name}
					</a>
					<!-- /resultlink -->

				</li>
				<!-- /resultitem -->`;
			}

			searchResults += `
			</ul>
			<!-- /resultlist -->

			</div>
			<!-- /resultset -->`;
		}

		// Display search results on page. 
		this.resultsBox.innerHTML = searchResults;

		// Hide loader icon. 
		this.setWaitState(false);
	}

	// Handle keyboard shortcuts. 
	dispatchKeyPress(event) {

		// Get selected key. 
		let key = event.charCode || event.keyCode

		// Check if user is typing in a text field. 
		let typingInTextField = false;
		let allTextFields = document.querySelectorAll('textarea,input');
		for(let tf of allTextFields) {
			if(document.activeElement==tf) typingInTextField = true;
		}

		// Handle open shortcut (Key: S). 
		if(!this.alreadyOpen && (key==83 || key==115) && (!typingInTextField) ) {
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

		// Focus on text field. 
		this.searchField.focus();
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

