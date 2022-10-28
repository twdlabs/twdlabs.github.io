


// Search Overlay Object
class Search {

	// 1. Describe and create / initiate object. 

	constructor(openbtn,closebtn,searchOverlay,searchField,resultsBox) {

		// Get page elements for open/close buttons. 
		this.openbtn = openbtn;
		this.closebtn = closebtn;

		// Get page elements for search overlay. 
		this.searchOverlay = searchOverlay;
		this.searchField = searchField;
		this.resultsBox = resultsBox;
		this.prevQuery = '';

		// Define search results delay. 
		this.dt = 500;

		// Handle events. 
		this.handleEvents();

		// Set open/close state of overlay. 
		this.alreadyOpen = false;

		// Set initial state for loading of results. 
		this.currentlyLoadingResults = false;

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
		console.log('Typed query...', this.searchField.value);

		// Ignore typing that doesn't change query (non-character keys). 
		let sameQueryAsB4 = (this.searchField.value == this.prevQuery);
		if(sameQueryAsB4) return;

		// Clear timer if still typing. 
		clearTimeout(this.resultsTimer);

		// Start doing stuff (if query present). 
		if(this.searchField.value) {

			// Clear previous search results. 
			this.clearSearchResults();

			// Show loader icon. 
			if(!this.currentlyLoadingResults) this.setWaitState(true);

			// Start timer for new search results. 
			this.resultsTimer = setTimeout(this.displaySearchResults.bind(this), this.dt);
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
	setWaitState(nowWaiting) {

		// Set state for loading of results. 
		this.currentlyLoadingResults = nowWaiting;
		
		// Apply state to loader on page. 
		if(nowWaiting) this.searchOverlay.classList.add('wait');
		else this.searchOverlay.classList.remove('wait');
	}

	// Clear previous search query. 
	clearSearchQuery() {

		// Clear contents of text field. 
		this.searchField.value = '';

		// Remove focus from text field. 
		this.searchField.blur();
	}

	// Clear previous search results. 
	clearSearchResults() {

		// Remove content within search results box. 
		this.resultsBox.innerHTML = '';
	}

	// Show all matching results for given search query. 
	displaySearchResults() {
		// console.log(this.resultsBox);

		// Get search query. 
		let searchquery = this.searchField.value;

		// TODO: Send request for search results. 
		// console.log('Initial result list',defaultResults);
		let resultList = defaultResults/* .map( (xyz)=>(xyz) ) */;
		// console.log('Final result list',resultList);

		// Initialize total number of matching items. 
		let totalMatchingResults = 0;

		// Initialize display for final search results. 
		let finalSearchResults = '';

		// Open result body. 
		finalSearchResults += `
		<!-- resultbody -->
		<div class="resultbody">`;

		// Go thru all sets to find results that match search query. 
		for(let resultSet of resultList) {
			// console.log('resultSet',resultSet);

			// Initialize number of matching items in current set. 
			let numSetResults = 0;

			// Initialize list of matching results for current set. 
			let currentSetSearchResults = '';

			// Go thru all items in current set. 
			for(let resultItem of resultSet.setlist) {
				// console.log('resultItem',resultItem);

				// Initialize match indicator. 
				let matchingResult = false;
				
				// Check for name match with search query (case insensitive). 
				// matchingResult = ( resultItem.name.toUpperCase() ).includes( searchquery.toUpperCase() );
				
				// Check for match with search query (any property, case insensitive). 
				for(let key in resultItem) {
					// console.log(key);

					// Check for any matching value inside result item. 
					let foundMatch = ( resultItem[key].toString().toUpperCase() ).includes( searchquery.toUpperCase() );

					// Stop search and proceed when matching value found. 
					if(foundMatch) {
						matchingResult = true;
						break;
					}
				}
				
				// Include item in final results if matches search query. 
				if(matchingResult) {
					
					// Increment number of matching items in current set. 
					numSetResults += 1;
					
					// Increment total number of matching result items. 
					totalMatchingResults += 1;

					// Intiialize default name for result. 
					let resultname = 'Result';

					// Get post type for current result. 
					let isCourse = !!(resultItem['coursename']);
					let isPerson = !!(resultItem['firstname']);
					let isProgram = !!(resultItem['programname']);
					let isBlogPost = !!(resultItem['posttitle']);
					console.log('Post type: ',isCourse,isPerson,isProgram,isBlogPost);

					// Get name for current result. 
					if(isCourse) resultname = `${resultItem['deptid']} ${resultItem['coursenumber']}`;
					else if(isProgram) resultname = resultItem['programname'];
					else if(isBlogPost) resultname = resultItem['posttitle'];
					else if(isPerson) resultname = `${resultItem['firstname']} ${resultItem['lastname']}`;
					else resultname = resultItem[ 'name'];

					// Add matching item to final search results. 
					currentSetSearchResults += `
					<!-- resultitem -->
					<li class="resultitem">
						
						<!-- resultlink -->
						<a class="resultlink" href="${resultItem.link}">${ resultname }</a>
						<!-- /resultlink -->
						
					</li>
					<!-- /resultitem -->`;
				}
			}

			// Include result set if contains matching result items. 
			if(numSetResults>0) {

				// Open result set. 
				finalSearchResults += `
				
				<!-- resultset -->
				<div class="resultset">
				
					<!-- resulthead -->
					<h3 class="resulthead">${ resultSet.setname } (${ numSetResults })</h3>
					<!-- /resulthead -->
			
					<!-- resultlist -->
					<ul class="resultlist">`;
	
				// Add matching item from current set to final search results. 
				finalSearchResults += currentSetSearchResults;
	
				finalSearchResults += `
					</ul>
					<!-- /resultlist -->
	
				</div>
				<!-- /resultset -->`;
			}
		}

		// Close result body. 
		finalSearchResults += 
		`</div>
		<!-- /resultbody -->`;

		// Add result head. 
		finalSearchResults += `
		<!-- resulthead -->
		<h2 class="resulthead ${ (totalMatchingResults>0)?'':'empty' }">

			<!-- searchquery -->
			<span class="searchquery">"${searchquery}"</span>
			<!-- /searchquery -->

			<!-- resultcount -->
			<span class="resultcount">${totalMatchingResults} results found</span>
			<!-- /resultcount -->

		</h2>
		<!-- /resulthead -->`;

		// Display search results on page. 
		this.resultsBox.innerHTML = finalSearchResults;

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

		// Freeze background page scrolling. 
		document.body.classList.add('freeze');

		// Activate search overlay window. 
		this.searchOverlay.classList.add('active');
		// Bring focus to text field. 
		setTimeout( ()=>{ this.searchField.focus(); }, this.dt );

		// Update overlay state. 
		this.alreadyOpen = true;
	}

	// Close search overlay. 
	closeOverlay() {
		console.log('Closing search overlay...');

		// De-activate search overlay window. 
		this.searchOverlay.classList.remove('active');
		// Clear contents of text field. Remove focus from text field. 
		setTimeout( ()=>{ this.clearSearchQuery(); this.clearSearchResults(); }, this.dt );

		// Un-freeze background page scrolling. 
		document.body.classList.remove('freeze');

		// Update overlay state. 
		this.alreadyOpen = false;
	}

}

