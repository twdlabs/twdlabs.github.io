


// Define search overlay object. 
class LiveSearchOverlay {


	// 1. Describe and create / initiate object. 

	constructor(openbtn,closebtn,searchOverlay,searchQueryField,searchResultsBox) {

		// Get page elements for open/close buttons. 
		this.openbtn = openbtn;
		this.closebtn = closebtn;

		// Get page elements for search overlay. 
		this.searchOverlay = searchOverlay;
		this.searchQueryField = searchQueryField;
		this.searchResultsBox = searchResultsBox;

		// Initialize representation of previously typed query. 
		this.prevQuery = '';

		// Define delay time for search results. 
		this.dt = 500;

		// Handle events. 
		this.handleEvents();

		// Initialize saved state of live search. 
		this.alreadyOpen = false;

		// Set initial state for loading of results. 
		this.currentlyLoadingResults = false;

		// Initialize results timer. 
		this.resultsTimer = undefined;
	}


	// 2. Events: Handle events. 

	handleEvents() {

		// Handle search overlay opening. 
		this.openbtn.addEventListener( 'click', this.openSearchOverlay.bind(this) );

		// Handle search overlay closing. 
		this.closebtn.addEventListener( 'click', this.closeSearchOverlay.bind(this) );

		// Handle results shown upon typing query. 
		this.searchQueryField.addEventListener( 'keyup', this.respondToQueryTyping.bind(this) );

		// Handle keyboard shortcuts. 
		document.documentElement.addEventListener( 'keyup', this.dispatchKeyPress.bind(this) );
	}



	// 3. Actions: Define object methods and functions. 


	// Clear previous search query. 
	clearSearchQuery() {

		// Clear contents of text field. 
		this.searchQueryField.value = '';

		// Remove focus from text field. 
		this.searchQueryField.blur();
	}

	// Handle what's being shown upon typing query. 
	respondToQueryTyping() {
		console.log('Typed query...', this.searchQueryField.value);

		// Ignore typing that doesn't change query (non-character keys). 
		let sameQueryAsB4 = (this.searchQueryField.value == this.prevQuery);
		if(sameQueryAsB4) return;

		// Clear timer if still typing. 
		clearTimeout(this.resultsTimer);

		// Start doing stuff (if query present). 
		if(this.searchQueryField.value) {

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
		this.prevQuery = this.searchQueryField.value;
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
		this.searchResultsBox.innerHTML = '';
	}

	// Show all matching results for given search query. 
	displaySearchResults() {
		
		// Get search query. 
		let searchquery = (this.searchQueryField).value;
		console.log(`searchquery: "${searchquery}"`);
		
		// Get list of words in search query. 
		let searchquerywordlist = searchquery.split(' ');
		console.log('searchquerywordlist:',searchquerywordlist);
		// Check for multi-word search query. 
		let isMultiWordQuery = ( searchquerywordlist.length > 1 );
		
		// Get initial search results from post database. 
		let initialResultMatrix = defaultResultSet;
		console.log('Initial result list:',initialResultMatrix);
		
		// Send request for matrix of matching search results. 
		// let finalResultList = getSearchResults(initialResultMatrix);
		// console.log('Final result list:',finalResultList);
		
		// Initialize total number of matching search results. 
		let matchingresultscount = 0;
		// Get total number of matching search results. 
		// let matchingresultscount = countTotalResults(finalResultList);
		
		// Initialize layout for search results. 
		let fullsearchresultslayout = '';

		// Add layout for search results body. 
		fullsearchresultslayout += createResultsBodyLayout(/* finalResultList */);

		// Add layout for search results header. 
		fullsearchresultslayout += createResultsHeaderLayout();
		
		// Display layout for search results on page. 
		(this.searchResultsBox).innerHTML = fullsearchresultslayout;
		// console.log('Search results layout:',fullsearchresultslayout);
		// console.log('Search results destination:',this.searchResultsBox);

		// Hide loader icon. 
		this.setWaitState(false);


		/*****/


		// TODO: Get matrix of matching search results. 
		function getSearchResults(initialResultMatrix) {

			// Start with initial set of results. 
			return initialResultMatrix.filter(checkForKeep);

			/****/

			// Check for keeping of current set. 
			function checkForKeep() {
				// 
			}
		}

		// Create layout for search results body. 
		function createResultsBodyLayout() {

			// Initialize final result body. 
			let finalResultBody = '';

			// Open result body. 
			finalResultBody += `
			<!-- resultbody -->
			<div class="resultbody">`;
	
			// Go thru each result block to find matching result sets. 
			for(let key in initialResultMatrix) {

				// Get current result block. 
				let currentresultblock = initialResultMatrix[key]
				console.log(`\tSearching ${ currentresultblock['searchlabel'].plural }...`);
				// console.log('Result set:',key,currentresultblock);
	
				// Initialize number of matching items in current result block. 
				let currentresultblockmatchcount = 0;
	
				// Initialize layout for list of matching items in current result block. 
				let currentresultblockitemslayout = '';
	
				// Accumulate matching items for current set. 
				for(let currentresultitem of currentresultblock.itemlist) {
					// console.log('Current result item',currentresultitem);
					
					// Check for match with search query. 
					let currentItemMatchesQuery = checkForMatch(currentresultitem);
					
					// Include item in results if match for query. 
					if(currentItemMatchesQuery) {
						
						// Increment number of matching results in current set. 
						currentresultblockmatchcount += 1;
						
						// Increment total number of matching results. 
						matchingresultscount += 1;
	
						// Add matching result item to current set of search results. 
						currentresultblockitemslayout += createResultItemLayout( currentresultblock, currentresultitem );
					}
				}

				// Add current result block to layout for results body. 
				finalResultBody += createResultBlockLayout(currentresultblock,currentresultblockmatchcount,currentresultblockitemslayout);
	
				// Log number of results found for current post type. 
				console.log( `\t\t${currentresultblockmatchcount} ${currentresultblock['searchlabel'].singular} results found` );

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
						if(!isMultiWordQuery) return ( tag.toUpperCase() ).includes( searchquery.toUpperCase() );
						
						// 
						for(let queryword of searchquerywordlist) {

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

			// Create layout for given result block. 
			function createResultBlockLayout(resultblock,resultblockmatchcount,resultblockitemslayout) {
	
				// Get archive url. 
				let archiveUrl = 'javascript:void(0)';

				// Get plural name of current post type. 
				let searchlabel = resultblock['searchlabel'].plural;

				// Compile layout for result block. 
				let resultblocklayout = `
				<!-- resultset -->
				<div class="resultset">

					<!-- resulthead -->
					<h2 class="resulthead ${''}">
						
						<!-- caption -->
						<span class="caption">${ resultblock.blockname }</span>
						<!-- /caption -->

						<!-- count -->
						<span class="count">${ resultblockmatchcount }</span>
						<!-- /count -->

					</h2>
					<!-- /resulthead -->
			
					<!-- resultlist -->
					<ul class="resultlist ${ (resultblock.visual) ? ('visual') : ('') }">
						${ (resultblockmatchcount>0) ? resultblockitemslayout : createEmptyResultListLayout() }
					</ul>
					<!-- /resultlist -->
	
				</div>
				<!-- /resultset -->`;

				// Return layout for current result block. 
				return resultblocklayout;

				/***/

				// Create layout for empty result block (message and archive page link). 
				function createEmptyResultListLayout() {
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

			// Create layout for result item. 
			function createResultItemLayout(resultblock,resultitem) {
				
				// Get link url for current result. 
				let resulturl = getResultUrl(resultblock,resultitem);

				// Get post name for current result. 
				let resultname = getResultName(resultitem);

				// TODO: Create functions for these 3 post types (blog, reg, visual). 

				// Create result for blog post. 
				if(resultitem.posttype=='post') {
				
					// Get link url for author of current result. 
					let authorurl = getAuthorUrl(resultitem);
	
					// Get author name for current result. 
					let authorname = getAuthorName(resultitem);

					// Return result. 
					return `
					<!-- resultitem -->
					<li class="resultitem">
						
						<!-- resultlink -->
						<a class="resultlink" href="${ resulturl ? getRelativeUrl(resulturl) : 'javascript:void(0)' }" target="_blank">${ resultname }</a>
						<!-- /resultlink -->
						
						<!-- caption -->
						<span class="caption">by</span>
						<!-- /caption -->
						
						
						<!-- authorlink -->
						<a class="authorlink" href="${ authorurl ? getRelativeUrl(authorurl) : 'javascript:void(0)' }" target="_blank">${ authorname }</a>
						<!-- /authorlink -->
						
					</li>
					<!-- /resultitem -->`;
				}

				// Create result for visual post. 
				else if(resultitem.visual) {

					// Return result. 
					return `
					<!-- resultitem -->
					<li class="resultitem">
		
						<!-- resultlink -->
						<a class="resultlink" href="${ resulturl ? getRelativeUrl(resulturl) : 'javascript:void(0)' }" target="_blank">

							<!-- photo -->
							<img class="photo" src="${resultitem.photourl}">
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
						<a class="resultlink" href="${ resulturl ? getRelativeUrl(resulturl) : 'javascript:void(0)' }" target="_blank">${ resultname }</a>
						<!-- /resultlink -->
						
					</li>
					<!-- /resultitem -->`;
				}

				/***/
				
				// Get url for given post (using folder name & post item). 
				function getResultUrl(resultblock,resultitem) {

					// Get folder path for result block. 
					let folderpath = getFolderPath(resultblock);

					// Get post id for result item. 
					let postid = getPostId(resultitem);
					console.log('\t\tPost id(item):',postid);

					// Return general url for given post. 
					if(folderpath && postid) {
						return `${folderpath}/post/?pid=${postid}`;
						return `${folderpath}/post/index.html?pid=${postid}`;
					}

					// Return empty url if missing any parameter(s). 
					else return '';

					/***/
					
					// Get post id. 
					function getPostId(item) {
						// console.log(`\t\t\tpostregister:`,postregister);
						
						// Get post id from post register. 
						let idkey = postregister[item.posttype];
						let postid = item[idkey];
						// console.log(`\t\t\tid: '${id}'`);
						
						// Handle registered post type. 
						if( postid || !isNaN(postid) ) return postid;
	
						// Handle unregistered post type. 
						else console.warn('\t\t\tPost type not recognized:', item.posttype, postid);
					}

					// Get folder path for given result block. 
					function getFolderPath(resultblock) {
						console.log('Getting folder path for result block:',resultblock)
						return resultblock.folderpath;
					}
				}

				// Get name of given result item. 
				function getResultName(item) {
		
					// Get type of post. 
					// let type = item['posttype'];
		
					// Get search result name for given post types: blog posts, programs, courses, events, people. 
					// if(type=='post' || type=='program' || type=='course' || type=='event' || type=='faculty' || type=='student')
					
					// Get result name. 
					return item['title'];
				}

				// Get url for given author (using author id). 
				function getAuthorUrl(item) {

					// Get author id. 
					let authorid = item['authorid'];
					// console.log('\t\tAuthor id:',authorid);

					// Return url if author id valid. 
					if( !isNaN(authorid) && authorid>=0 ) {
						return `./users/post/?id=${authorid}`;
						return `./users/post/index.html?id=${authorid}`;
						return `./authors/post/?id=${authorid}`;
						return `./authors/post/index.html?id=${authorid}`;
					}

					// Return empty url if author id invalid. 
					else return '';
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

		// Create layout for search results header. 
		function createResultsHeaderLayout() {
			return `
			<!-- resulthead -->
			<h1 class="resulthead ${ (matchingresultscount>0) ? '' : 'none' }">
	
				<!-- searchquery -->
				<span class="searchquery">${searchquery}</span>
				<!-- /searchquery -->
	
				<!-- resultcount -->
				<span class="resultcount">${matchingresultscount}</span>
				<!-- /resultcount -->
	
			</h1>
			<!-- /resulthead -->`;
		}

		// Count total number of result items in result matrix. 
		function countTotalResults(resultmatrix) {

			// Initialize total number of result items. 
			let totalresultcount = 0;

			// Go thru each block in result matrix. 
			for(let resultblock of resultmatrix) {

				// Increment total number of result items. 
				totalresultcount += resultblock.itemlist.length;

				// // Go thru each item in result list of result block. 
				// for(let item of resultblock.itemlist) {

				// 	// Increment total number of result items. 
				// 	totalresultcount += 1;
				// }
			}

			// Return total number of results items. 
			return totalresultcount;
		}
	}


	// Open search overlay. 
	openSearchOverlay() {
		console.log('Opening live search overlay...');

		// Freeze background page scrolling. 
		this.setBodyFreeze(true);

		// Activate search overlay window. 
		this.setOverlayState(true);

		// Open search query field. 
		setTimeout( openSearchQuery.bind(this), this.dt );

		// Update saved state of live search. 
		this.alreadyOpen = true;

		/*****/

		// Open search query field. 
		function openSearchQuery() {

			// Bring focus to text field. 
			this.searchQueryField.focus();
		}
	}

	// Close search overlay. 
	closeSearchOverlay() {
		console.log('Closing live search overlay...');

		// De-activate search overlay window. 
		this.setOverlayState(false);

		// Un-freeze background page scrolling. 
		this.setBodyFreeze(false);

		// Close search query field. 
		setTimeout( closeSearchQuery.bind(this), this.dt );

		// Update saved state of live search. 
		this.alreadyOpen = false;

		/*****/

		// Close search query field. 
		function closeSearchQuery() {

			// Clear contents of text field. 
			this.clearSearchQuery();

			// Remove focus from text field. 
			this.clearSearchResults();
		}
	}

	// Set state of search overlay window. 
	setOverlayState(showOverlay) {

		// Open search overlay window. 
		if(showOverlay) this.searchOverlay.classList.add('active');
		
		// Close search overlay window. 
		else this.searchOverlay.classList.remove('active');
	}

	// Set state of background page scrolling/freezing. 
	setBodyFreeze(doFreeze) {

		// Freeze background page scrolling. 
		if(doFreeze) document.body.classList.add('freeze');
		
		// Un-freeze background page scrolling. 
		else document.body.classList.remove('freeze');
	}

	// Handle keyboard shortcuts. 
	dispatchKeyPress(event) {

		// Get selected key. 
		let key = event.charCode || event.keyCode;

		// Check if user is typing in a text field. 
		let typingTextField = false;

		// Get all text fields. 
		const allTextFields = document.querySelectorAll('textarea,input');

		// Go thru each text field. 
		for(let textfield of allTextFields) {

			// Check if text field active. 
			if(document.activeElement==textfield) {

				// Assume typing if at least one text field active. 
				typingTextField = true;
				return;
			}
		}

		// Handle open shortcut (Key: S). 
		if(!this.alreadyOpen && (key==83 || key==115) && !typingTextField ) {
			this.openSearchOverlay();
		}

		// Handle close shortcut (Key: ESC). 
		if(this.alreadyOpen && key==27) {
			this.closeSearchOverlay();
		}
	}

}
