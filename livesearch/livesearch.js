


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

		// Get initial search results from post database. 
		let resultList = defaultResults;
		// console.log('Initial result list',defaultResults);
		// console.log('Final result list',resultList);

		// Initialize total number of matching items. 
		let totalMatchingResults = 0;

		// Initialize display for final search results. 
		let finalSearchResults = '';

		// TODO: Send request for search results. Potentially add new function for the following code parts. 

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

			// TODO: Go thru all items in current set. 
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
				
				// Include item in results if match for query. 
				if(matchingResult) {
					
					// Increment number of matching items in current set. 
					numSetResults += 1;
					
					// Increment total number of matching result items. 
					totalMatchingResults += 1;

					// Intiialize default name for result. 
					let resultname = 'Result';

					// TODO: Intiialize default link for result. 
					let resultlink = (resultItem.link) || 'javascript:void(0)';

					// Get post type for current result. 
					let isBlogPost = !!(resultItem.posttype=='post');
					let isProgram = !!(resultItem.posttype=='program');
					let isCourse = !!(resultItem.posttype=='course');
					let isEvent = !!(resultItem.posttype=='event');
					let isPerson = !!(resultItem.posttype=='faculty' || resultItem.posttype=='student');
					// console.log('Post type: ',isBlogPost,isProgram,isCourse,isEvent,isPerson);

					// Get search result name for blog post. 
					if(isBlogPost) {

						// Get post title. 
						let posttitle = resultItem['title'];

						// Get author name. 
						let authorid = resultItem['authorid'];
						let authorname = userData[authorid].title;

						// Create result name. 
						resultname = `${posttitle} by ${authorname}`;
						
						// TODO: Get result link. 
						// resultlink = getRelativeLink('blogpost','3');

						// // Get relative link for given post type and post id. 
						// function getRelativeLink(posttype,postid) {
						// 	// 
						// 	return '../.././blog?postid=3';
						// }
					}

					// Get search result name for program. 
					else if(isProgram) resultname = resultItem['title'];

					// Get search result name for course. 
					else if(isCourse) resultname = resultItem['fulltitle'];

					// Get search result name for event. 
					else if(isEvent) resultname = resultItem['title'];

					// Get search result name for person. 
					else if(isPerson) resultname = resultItem['title'];

					// Get miscellaneous search result name. 
					else resultname = resultItem['title'];

					// Add matching item to final search results. 
					currentSetSearchResults += `
					<!-- resultitem -->
					<li class="resultitem">
						
						<!-- resultlink -->
						<a class="resultlink" href="${resultlink}">${resultname}</a>
						<!-- /resultlink -->
						
					</li>
					<!-- /resultitem -->`;
				}

			}

			// Include result set if contains matching result items. 
			if(numSetResults>0) {
				console.log( `\t${numSetResults} results for ${resultSet.setname}` );

				// Open result set. 
				finalSearchResults += `
				<!-- resultset -->
				<div class="resultset">
				
					<!-- resulthead -->
					<h3 class="resulthead">${ resultSet.setname } (${ numSetResults })</h3>
					<!-- /resulthead -->
			
					<!-- resultlist -->
					<ul class="resultlist">`;
	
				// Add matching items from current set to final search results. 
				finalSearchResults += currentSetSearchResults;
	
				// Close result set. 
				finalSearchResults += `
					</ul>
					<!-- /resultlist -->
	
				</div>
				<!-- /resultset -->`;
			}

			// Otherwise show message and archive link (if no matches found). 
			else {

				// Get archive url. 
				let archiveUrl = 'javascript:void(0)';

				// Get plural name of current post type. 
				let postTypePlural = resultSet.posttype.plural;

				// Create empty result set. 
				finalSearchResults += `
				<!-- resultset -->
				<div class="resultset">
				
					<!-- resulthead -->
					<h3 class="resulthead">${resultSet.setname}</h3>
					<!-- /resulthead -->

					<!-- textcopy -->
					<p class="textcopy">

						<!-- caption -->
						<span class="caption">No ${postTypePlural} match that search.</span>
						<!-- /caption -->
						
						<!-- archivelink -->
						<a class="archivelink" href="${archiveUrl}">View all ${postTypePlural}</a>
						<!-- /archivelink -->

					</p>
					<!-- /textcopy -->
					
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
		let key = event.charCode || event.keyCode;

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

