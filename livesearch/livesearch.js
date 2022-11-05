


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

		// Handle results shown upon typing query. 
		this.searchField.addEventListener( 'keyup', this.respondToQueryTyping.bind(this) );

		// Handle keyboard shortcuts. 
		document.documentElement.addEventListener( 'keyup', this.dispatchKeyPress.bind(this) );

	}



	// 3. Actions: Define object methods and functions. 


	// Clear previous search query. 
	clearSearchQuery() {

		// Clear contents of text field. 
		this.searchField.value = '';

		// Remove focus from text field. 
		this.searchField.blur();
	}

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
		// finalSearchResults += requestSearchResults();

		// Add body of results. 
		finalSearchResults += createResultBody();

		// Add results header. 
		finalSearchResults += createResultHeader();

		// Display search results on page. 
		this.resultsBox.innerHTML = finalSearchResults;

		// Hide loader icon. 
		this.setWaitState(false);

		/*****/

		// Create results header. 
		function createResultHeader() {
			// 
			return `
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
		}

		// Create body of results. 
		function createResultBody() {

			// Initialize final result body. 
			let finalResultBody = '';

			// Open result body. 
			finalResultBody += `
			<!-- resultbody -->
			<div class="resultbody">`;
	
			// Go thru all sets to find results that match search query. 
			for(let key in resultList) {
				// console.log('key:',key);
				
				// Get current result set. 
				let resultSet = resultList[key]
				console.log(`\tSearching ${resultSet.posttype.plural}...`);
				// console.log('Result set:',resultSet);
	
				// Initialize number of matching items in current set. 
				let numResultsInSet = 0;
	
				// Initialize list of matching results for current set. 
				let currentResultSet = '';
	
				// Go thru all items in current set. 
				for(let currentResultItem of resultSet.setlist) {
					// console.log('currentResultItem',currentResultItem);
	
					// Initialize match indicator. 
					let matchingResult = false;
					
					// Check for name match with search query (case insensitive). 
					// matchingResult = ( (currentResultItem.name).toUpperCase() ).includes( searchquery.toUpperCase() );
	
					// Determine current search mode. 
					let thoroughSearchMode = false;
	
					// Do search only on selected tags. 
					if(!thoroughSearchMode) {
	
						// Check for match with search query (case insensitive). 
					
						// Get case-insensitive search check components: search tags, search query. 
						let tagstring = (currentResultItem.searchtags).toUpperCase();
						let querystring = searchquery.toUpperCase();
						// Check for match within search tags. 
						matchingResult = ( tagstring ).includes( querystring );
					}
	
					// Otherwise, do all-out thorough search everywhere (on all item properties). 
					else {
					
						// Check for match with search query (any property, case insensitive). 
						for(let key in currentResultItem) {
							// console.log(key);
		
							// Get case-insensitive search check components. 
							let keyvalue = ( currentResultItem[key].toString() ).toUpperCase()
							let querystring = searchquery.toUpperCase();
	
							// Check for any matching value inside result item. 
							let foundMatch = ( keyvalue ).includes( querystring );
		
							// Proceed to next search item when matching value found. 
							if(foundMatch) {
		
								// Indicate that this result item is a match for the search. 
								matchingResult = true;
		
								// End search for match on current item. 
								break;
							}
						}
					}
					
					// Include item in results if match for query. 
					if(matchingResult) {
						
						// Increment number of matching items in current set. 
						numResultsInSet += 1;
						
						// Increment total number of matching result items. 
						totalMatchingResults += 1;
	
						// Add matching result item to current set of search results. 
						let item = currentResultItem;
						let set = resultSet;
						currentResultSet += createResultItem(set,item);
					}
				}
	
				// Log number of results found for current post type. 
				console.log( `\t\t${numResultsInSet} ${resultSet.posttype.singular} results found` );

				// Include result set if contains at least one matching result. 
				if(numResultsInSet>0) {
	
					// Open result set. 
					finalResultBody += `
					<!-- resultset -->
					<div class="resultset">
					
						<!-- resulthead -->
						<h3 class="resulthead">${ resultSet.setname } (${ numResultsInSet })</h3>
						<!-- /resulthead -->
				
						<!-- resultlist -->
						<ul class="resultlist">`;
		
					// Add matching items from current result set to final body of search results. 
					finalResultBody += currentResultSet;
		
					// Close result set. 
					finalResultBody += `
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
					finalResultBody += `
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
			finalResultBody += 
			`</div>
			<!-- /resultbody -->`;

			// Return final result body. 
			return finalResultBody;

			/****/

			// Create result item. 
			function createResultItem(set,item) {

				// Get name for current result. 
				let resultname = getResultName(item);

				// Get folder name for current result set. 
				let foldername = getFolderName(set);
				
				// Get post id for current result. 
				let postid = getPostId(item);
				
				// Get link url for current result. 
				let resulturl = getPostUrl(foldername, postid);

				// Return result. 
				return `
				<!-- resultitem -->
				<li class="resultitem">
					
					<!-- resultlink -->
					<a class="resultlink" href="${getRelativeUrl(resulturl)}">${resultname}</a>
					<!-- /resultlink -->
					
				</li>
				<!-- /resultitem -->`;

				/***/

				// Get search result name for given item. 
				function getResultName(item) {
		
					// Get type of post. 
					let type = item.posttype;
		
					// Get search result name for blog post. 
					if(type=='post') {
		
						// Get post title. 
						let title = item['title'];
		
						// Get author name. 
						let authorid = item['authorid'];
						let authorname = userData[authorid].title;
		
						// Create result name. 
						return `${title} by ${authorname}`;
					}
		
					// Get search result name for courses. 
					else if(type=='course') return item['fulltitle'];
		
					// Get search result name for programs, events, people. 
					// else if(type=='program' || type=='event' || type=='faculty' || type=='student')
					
					// Use default name for miscellaneous results. 
					else {
		
						// Get result name. 
						return item['title'];
					}
				}

				// Get foler name of result set. 
				function getFolderName(set) {
					return set.foldername;
				}
				// Get post id. 
				function getPostId(item) {

					// Get id for blog post. 
					if(item.posttype=='post') return item.postid;

					// Get id for program. 
					else if(item.posttype=='program') return item.programid;

					// Get id for course. 
					else if(item.posttype=='course') return `${item.programid}${item.coursenumber}`;

					// Get id for event. 
					else if(item.posttype=='event') return item.eventid;

					// Get id for faculty. 
					else if(item.posttype=='faculty') return item.facultyid;

					// Get id for student. 
					else if(item.posttype=='student') return item.studentid;

					// Handle error case. 
					else {
						console.error('No post type recognized')
						return null;
					}
				}
				// Get link url for given folder name and post id. 
				function getPostUrl(foldername,id) {

					// Return general url for given post. 
					if( id && foldername) return `${foldername}/index.html?id=${id}`;
					// if( id && foldername) return `${foldername}?id=${id}`;

					// Return null url if missing parameter(s). 
					else return ('javascript:void(0)');
				}
			}
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

}

