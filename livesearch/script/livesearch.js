


// Define search overlay object. 
class SearchOverlay {

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
		
		// Get search query. 
		let searchquery = (this.searchField).value;
		console.log(`searchquery: "${searchquery}"`);
		
		// Get list of words in search query. 
		let searchquerylist = searchquery.split(' ');
		console.log('searchquerylist:',searchquerylist);
		// Check for multi-word search query. 
		let multiWordQuery = ( searchquerylist.length > 1 );
		// 
		// if(multiWordQuery) 
		
		// Get initial search results from post database. 
		let initialResultList = defaultResults;
		console.log('Initial result list:',initialResultList);
		
		// Send request for matching search results. 
		// let finalResultList = getSearchResults(initialResultList);
		// console.log('Final result list:',finalResultList);
		
		// Initialize total number of matching search results. 
		let totalNumMatchingResults = 0;
		// Get total number of matching search results. 
		// let totalNumMatchingResults = countTotalResults(finalResultList);
		
		// Create layout for final search results. 
		let finalResultsLayout = '';
		// Add body of results. 
		finalResultsLayout += createResultBody(/* finalResultList */);
		// Add results header. 
		finalResultsLayout += createResultHeader(totalNumMatchingResults);
		// console.log('Results:',finalResultsLayout);
		
		// Display search results on page. 
		(this.resultsBox).innerHTML = finalResultsLayout;
		// console.log('Results box:',this.resultsBox);

		// Hide loader icon. 
		this.setWaitState(false);


		/*****/


		// TODO: Get matching search results. 
		function getSearchResults(initialResultList) {

			// 
			return initialResultList.filter(checkForKeep);

			/****/

			// Check for keeping of current set. 
			function checkForKeep() {
				// 
			}
		}

		// Create results header. 
		function createResultHeader(numResultsFound) {
			// 
			return `
			<!-- resulthead -->
			<h2 class="resulthead ${ (numResultsFound>0) ? '' : 'empty' }">
	
				<!-- searchquery -->
				<span class="searchquery">"${searchquery}"</span>
				<!-- /searchquery -->
	
				<!-- resultcount -->
				<span class="resultcount">${numResultsFound} results found</span>
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
	
			// Go thru all sets to find matching result sets. 
			for(let key in initialResultList) {
				
				// Get current result set. 
				let currentSet = initialResultList[key]
				console.log(`\tSearching ${ currentSet['searchlabel'].plural }...`);
				// console.log('Result set:',key,currentSet);
	
				// Initialize number of matching items in current set. 
				let numMatchesInCurrentSet = 0;
	
				// Initialize list of matching results for current set. 
				let currentSetResultItems = '';
	
				// Accumulate matching items for current set. 
				for(let currentItem of currentSet.setlist) {
					// console.log('Current result item',currentItem);
					
					// Check for match with search query. 
					let currentItemMatchesQuery = checkForMatch(currentItem);
					
					// Include item in results if match for query. 
					if(currentItemMatchesQuery) {
						
						// Increment number of matching results in current set. 
						numMatchesInCurrentSet += 1;
						
						// Increment total number of matching results. 
						totalNumMatchingResults += 1;
	
						// Add matching result item to current set of search results. 
						currentSetResultItems += createResultItem( currentSet, currentItem );
					}
				}

				// Add current set of results to final body of results. 
				finalResultBody += createResultSet(currentSet,numMatchesInCurrentSet,currentSetResultItems);
	
				// Log number of results found for current post type. 
				console.log( `\t\t${numMatchesInCurrentSet} ${currentSet['searchlabel'].singular} results found` );

				/***/

				// Check for match between current item and current search query (case insensitive).
				function checkForMatch(currentItem) {
				
					// Determine current search mode. 
					let titleSearchOnly = false;
					let carefulSearch = true;

					// Check for simple match (by title) with search query (case insensitive). 
					if(titleSearchOnly) {
						// return ( currentItem.title.toUpperCase() ).includes( searchquery.toUpperCase() );
						return matchesAllQueryWords(currentItem.title);
					}

					// Do search only on selected tags. 
					else if(carefulSearch) {
					
						// Old implementation: before data structure update (search tags of searchable post items). 
						// Get case-insensitive search check components: search tags, search query. 
						// let runontagstring = ( currentItem['searchtags'] ).toUpperCase();
						// Check for match within run-on search tag. 
						// return ( (runontagstring).includes( searchquery.toUpperCase() ) );

						// New implementation: after data structure update (search tags of searchable post items). 
						// Check for match within list of search tags. 
						for(let tag of currentItem.searchtags) {

							// Check for match between search query and current search tag. 
							// let matchOn = ( tag.toUpperCase() ).includes( searchquery.toUpperCase() );
							let matchOn = matchesAllQueryWords(tag);
							// Return true if any match found. 
							if(matchOn) return true;
						}
						// Return false if no match found. 
						return false;
					}
	
					// Otherwise, do all-out search on all properties of given item. 
					else {
					
						// Check for match with search query (any property, case insensitive). 
						for(let key in currentItem) {
							// console.log(key);
		
							// Get case-insensitive search check component. 
							let keyvalue = currentItem[key].toString();
	
							// Check for match in value of current property. 
							// let foundMatch = ( keyvalue.toUpperCase() ).includes( searchquery.toUpperCase() );
							let foundMatch = matchesAllQueryWords(keyvalue);
		
							// End search upon finding match (proceeding to next post item). 
							if(foundMatch) return true;
						}
						
						// Return false if match not found. 
						return false;
					}

					// Check for match with all query words. 
					function matchesAllQueryWords(tag) {

						// 
						if(!multiWordQuery) return ( tag.toUpperCase() ).includes( searchquery.toUpperCase() );
						
						// 
						for(let queryword of searchquerylist) {

							// Check if tag contains query word. 
							let tagContainsQueryWord = ( tag.toUpperCase() ).includes( queryword.toUpperCase() );
							if( !tagContainsQueryWord ) return false;
						}

						// Passed all tests (contins all words in search query). 
						return true;
					}
				}
			}
	
			// Close result body. 
			finalResultBody += 
			`</div>
			<!-- /resultbody -->`;

			// Return final result body. 
			return finalResultBody;

			/****/

			// Create result set. 
			function createResultSet(currentSet,numMatchesInCurrentSet,currentSetResultItems) {
	
				// Get archive url. 
				let archiveUrl = 'javascript:void(0)';

				// Get plural name of current post type. 
				let searchlabel = currentSet['searchlabel'].plural;

				// Initialize current set layout. 
				let currentSetLayout = '';
				
				// Open result set. 
				currentSetLayout += `
				<!-- resultset -->
				<div class="resultset">

					<!-- resulthead -->
					<h3 class="resulthead ${''}">
						
						<!-- caption -->
						<span class="caption">${ currentSet.setname }</span>
						<!-- /caption -->

						<!-- count -->
						<span class="count">${ numMatchesInCurrentSet }</span>
						<!-- /count -->

					</h3>
					<!-- /resulthead -->
			
					<!-- resultlist -->
					<ul class="resultlist ${ (currentSet.visual) ? ('visual') : ('') }">`;
				
				// Create layout for result set that contains matches. 
				if(numMatchesInCurrentSet>0) {
					currentSetLayout += currentSetResultItems;
				}
				// Create layout for empty result set (message and archive page link). 
				else {
					currentSetLayout += createEmptyResultItem();
				}
	
				// Close result set. 
				currentSetLayout += `
					</ul>
					<!-- /resultlist -->
	
				</div>
				<!-- /resultset -->`;

				// Return current set layout. 
				return currentSetLayout;

				/***/

				// Create empty result item. 
				function createEmptyResultItem() {
					// 
					return `
					<!-- resultitem -->
					<li class="resultitem">
	
						<!-- caption -->
						<span class="caption">No ${searchlabel} match that search.</span>
						<!-- /caption -->
						
						<!-- archivelink -->
						<a class="archivelink" href="${archiveUrl}">View all ${searchlabel}</a>
						<!-- /archivelink -->
	
					</li>
					<!-- /resultitem -->`;
				}
			}

			// Create result item. 
			function createResultItem(set,item) {

				// Get folder name for current result set. 
				let foldername = getFolderName(set);
				
				// Get link url for current result. 
				let resulturl = getResultUrl(foldername,item);

				// Get post name for current result. 
				let resultname = getResultName(item);

				// TODO: Create functions for these 3 post types (blog, reg, visual). 

				// Create result for blog post. 
				if(item.posttype=='post') {
				
					// Get link url for author of current result. 
					let authorurl = getAuthorUrl(item);
	
					// Get author name for current result. 
					let authorname = getAuthorName(item);

					// Return result. 
					return `
					<!-- resultitem -->
					<li class="resultitem">
						
						<!-- resultlink -->
						<a class="resultlink" href="${ getRelativeUrl(resulturl) }" target="_blank">${ resultname }</a>
						<!-- /resultlink -->
						
						<!-- caption -->
						<span class="caption">by</span>
						<!-- /caption -->
						
						
						<!-- authorlink -->
						<a class="authorlink" href="${ getRelativeUrl(authorurl) }" target="_blank">${ authorname }</a>
						<!-- /authorlink -->
						
					</li>
					<!-- /resultitem -->`;
				}

				// Create result for visual post. 
				else if(item.visual) {

					// Return result. 
					return `
					<!-- resultitem -->
					<li class="resultitem">
		
						<!-- resultlink -->
						<a class="resultlink" href="${ getRelativeUrl(resulturl) }" target="_blank">

							<!-- photo -->
							<img class="photo" src="${item.photourl}">
							<!-- /photo -->

							<!-- caption -->
							<span class="caption">${resultname}</span>
							<!-- /caption -->
							
						</a>
						<!-- /resultlink -->
						
					</li>
					<!-- /resultitem -->`;
				}

				// Create result for all other posts. 
				else {

					// Return result. 
					return `
					<!-- resultitem -->
					<li class="resultitem">
						
						<!-- resultlink -->
						<a class="resultlink" href="${ getRelativeUrl(resulturl) }" target="_blank">${ resultname }</a>
						<!-- /resultlink -->
						
					</li>
					<!-- /resultitem -->`;
				}

				/***/

				// Get foler name of result set. 
				function getFolderName(set) {
					return set.foldername;
				}
				
				// Get link url for given post (using folder name & post item). 
				function getResultUrl(foldername,item) {

					// Get post id. 
					let id = getPostId(item);
					// console.log('\t\tgetPostId(item):',id);

					// Return general url for given post. 
					// if(foldername && id) return `${foldername}/post/index.html?id=${id}`;
					if(foldername && id) return `${foldername}/post/?id=${id}`;

					// Return empty url if missing any parameter(s). 
					else return 'javascript:void(0)';

					/***/
					
					// Get post id. 
					function getPostId(item) {
						// console.log(`\t\t\tpostregister:`,postregister);
						
						// Get post id from post register. 
						let idname = postregister[item.posttype];
						let id = item[idname];
						// console.log(`\t\t\tid: '${id}'`);
						
						// Handle registered post type. 
						if( id || !isNaN(id) ) return id;
	
						// Handle unregistered post type. 
						else console.warn('\t\t\tPost type not recognized:', item.posttype, id);
					}
				}

				// Get post title for given search result item. 
				function getResultName(item) {
		
					// Get type of post. 
					// let type = item['posttype'];
		
					// Get search result name for given post types: blog posts, programs, courses, events, people. 
					// if(type=='post' || type=='program' || type=='course' || type=='event' || type=='faculty' || type=='student')
					
					// Get result name. 
					return item['title'];
				}

				// Get link url for given author (using author id). 
				function getAuthorUrl(item) {

					// Get author id. 
					let id = item['authorid'];
					// console.log('\t\tAuthor id:',id);

					// 
					if( !isNaN(id) && id>=0 ) return `users/post/?id=${id}`;
					// if( !isNaN(id) && id>=0 ) return `users/post/index.html?id=${id}`;
					// if( !isNaN(id) && id>=0 ) return `authors/post/?id=${id}`;
					// if( !isNaN(id) && id>=0 ) return `authors/post/index.html?id=${id}`;

					// Return empty url if missing any parameter(s). 
					else return 'javascript:void(0)';
				}

				// Get search result name for given item. 
				function getAuthorName(item) {

					// Get author id. 
					let id = item['authorid'];
					// console.log('\t\tAuthor id:',id);

					// Return nothing if invalid id. 
					if(!id && isNaN(id)) return null;

					// Get user item for given user id. 
					let user = userData[id];
					// console.log('\t\tUser:',user);
					
					// Return string of user's first and last name. 
					let authorname = user['title'];
					return authorname;
				}
			}
		}

		// Count number of results in set list. 
		function countTotalResults(resultList) {
			// 
			let total = 0;

			// 
			// for(let i in resultList) {
			// 	let set = resultList[i];
			for(let set of resultList) {
				for(let item of set.setlist) {
					total += 1;
				}
			}

			// 
			return total;
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
