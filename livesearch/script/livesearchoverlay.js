


// Define overlay for live search. 
class LiveSearchOverlay {


	// 1. Describe and create / initiate object. 

	// constructor(openbtn/* ,closebtn */,searchoverlay/* ,searchqueryfield,searchresultsdestination */) {
	constructor(searchoverlay,openbtn) {

		// Import overlay. 
		if(!searchoverlay) {
			this.importOverlay();
			searchoverlay = document.querySelector('div#container div#searchoverlay');
		}

		// Get page elements for search overlay. 
		this.searchoverlay = searchoverlay;
		// this.searchqueryfield = searchqueryfield;
		this.searchqueryfield = searchoverlay.querySelector('section.head div.querybox input#searchquery');
		// this.searchresultsdestination = searchresultsdestination;
		this.searchresultsdestination = searchoverlay.querySelector('section.body div#searchresults');

		// Get page elements for open/close buttons. 
		this.openbtn = openbtn;
		// this.closebtn = closebtn;
		this.closebtn = searchoverlay.querySelector('section.head div.querybox div.closebtn');

		// Initialize representation of previously typed query. 
		this.prevquery = '';

		// Define delay time for search results. 
		this.dt = 250;

		// Handle events. 
		this.handleEvents();

		// Initialize open/close state of live search. 
		this.overlaycurrentlyopen = false;

		// Set initial state of results loading. 
		this.currentlyloadingresults = false;

		// Initialize results timer. 
		this.searchresultstimer = undefined;
	}

	// Import overlay for live search. 
	importOverlay() {

		// Get main container. 
		let container = document.querySelector('div#container');

		// Add overlay to container. 
		container.insertAdjacentHTML('beforeend', createOverlay() );

		/*****/

		// Create overlay for live search. 
		function createOverlay() {
			return `
			<!-- #searchoverlay -->
			<div id="searchoverlay" class="">
				
				<!-- head -->
				<section class="head">

					<!-- grid -->
					<div class="grid">
					
						<!-- querybox -->
						<div class="querybox">
							
							<!-- searchlabel -->
							<label class="searchlabel" for="searchquery">
								
								<!-- icon -->
								<svg class="icon search" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
								</svg>
								<!-- /icon -->
								
							</label>
							<!-- /searchlabel -->
							
							
							<!-- #searchquery -->
							<input id="searchquery" type="text" placeholder="What are you looking for ?" autocomplete="off" />
							<!-- /#searchquery -->
							
							<!-- closebtn -->
							<div id="closebtn" class="closebtn btn">
								
								<!-- icon -->
								<span class="icon">&times;</span>
								<!-- /icon -->
								
							</div>
							<!-- /closebtn -->
							
						</div>
						<!-- /querybox -->

					</div>
					<!-- /grid -->
					
				</section>
				<!-- /head -->
				
				<!-- body -->
				<section class="body">

					<!-- grid -->
					<div class="grid">
					
						<!-- #searchresults -->
						<div id="searchresults">
	
							<!-- resultshead -->
							<h1 class="resultshead" style="display:none;">
	
								<!-- searchquery -->
								<span class="searchquery">"searchquerygoeshere"</span>
								<!-- /searchquery -->
	
								<!-- resultcount -->
								<span class="resultcount">0</span>
								<!-- /resultcount -->
	
							</h1>
							<!-- /resultshead -->
	
							<!-- resultsbody -->
							<div class="resultsbody">
	
								<!-- resultblock -->
								<div class="resultblock" style="display:none;">
		
									<!-- blockhead -->
									<h2 class="blockhead">
										
										<!-- caption -->
										<span class="caption">Result Head</span>
										<!-- /caption -->
	
										<!-- count -->
										<span class="count">0</span>
										<!-- /count -->
	
									</h2>
									<!-- /blockhead -->
			
									<!-- resultlist -->
									<ul class="resultlist visual">
			
										<!-- resultitem -->
										<li class="resultitem">
			
											<!-- resultlink -->
											<a class="resultlink" href="javascript:void(0)" target="_blank">
	
												<!-- photo -->
												<img class="photo" src="" alt="Name" title="Name">
												<!-- /photo -->
	
												<!-- caption -->
												<span class="caption">Name</span>
												<!-- /caption -->
												
											</a>
											<!-- /resultlink -->
			
										</li>
										<!-- /resultitem -->
			
									</ul>
									<!-- /resultlist -->
			
									<!-- resultlist -->
									<ul class="resultlist">
			
										<!-- resultitem -->
										<li class="resultitem">
			
											<!-- resultlink -->
											<a class="resultlink" href="javascript:void(0)" target="_blank">Result Link</a>
											<!-- /resultlink -->
	
											<!-- caption -->
											<span class="caption">by</span>
											<!-- /caption -->
			
											<!-- authorlink -->
											<a class="authorlink" href="javascript:void(0)" target="_blank">Author Link</a>
											<!-- /authorlink -->
			
										</li>
										<!-- /resultitem -->
			
										<!-- resultitem -->
										<li class="resultitem">
	
											<!-- caption -->
											<span class="caption">No xyzposts match that search.</span>
											<!-- /caption -->
											
											<!-- archivelink -->
											<a class="archivelink" href="javascript:void(0)" target="_blank">View all xyzposts</a>
											<!-- /archivelink -->
			
										</li>
										<!-- /resultitem -->
			
									</ul>
									<!-- /resultlist -->
		
								</div>
								<!-- /resultblock -->
	
							</div>
							<!-- /resultsbody -->
							
						</div>
						<!-- /#searchresults -->
						
					</div>
					<!-- /grid -->
					
				</section>
				<!-- /body -->
				
			</div>
			<!-- /#searchoverlay -->`;
		}
	}


	// 2. Events: Handle events. 

	handleEvents() {

		// Handle search overlay opening. 
		this.openbtn.addEventListener( 'click', this.openSearchOverlay.bind(this) );

		// Handle search overlay closing. 
		this.closebtn.addEventListener( 'click', this.closeSearchOverlay.bind(this) );

		// Handle results shown upon typing query. 
		this.searchqueryfield.addEventListener( 'keyup', this.respondToQueryTyping.bind(this) );

		// Handle keyboard shortcuts. 
		document.documentElement.addEventListener( 'keydown', this.dispatchKeyPress.bind(this) );
	}



	// 3. Actions: Define object methods and functions. 


	// Clear previous search query. 
	clearSearchQuery() {

		// Clear contents of text field. 
		this.searchqueryfield.value = '';

		// Remove focus from text field. 
		this.searchqueryfield.blur();
	}

	// Handle what's being shown upon typing query. 
	respondToQueryTyping() {
		console.log('Received search query', this.searchqueryfield.value);

		// Disregard if query unchanged (i.e. for non-character key press). 
		if(this.searchqueryfield.value == this.prevquery) return;

		// Clear timer for previous results (still typing). 
		clearTimeout(this.searchresultstimer);

		// Clear previous search results. 
		this.clearSearchResults();

		// Load new search results (if query present). 
		if(this.searchqueryfield.value) {

			// Turn on results loader. 
			if(!this.currentlyloadingresults) this.updateResultsLoader(true);

			// Start timer for new search results. 
			this.searchresultstimer = setTimeout(this.displaySearchResults.bind(this), this.dt);
		}

		// Stop loading (if no query present). 
		else {

			// Turn off results loader. 
			this.updateResultsLoader(false);
		}

		// Save current query for comparison with future query. 
		this.prevquery = this.searchqueryfield.value;
	}


	// Apply newly selected state to results loader. 
	updateResultsLoader(newstate) {

		// Update loading state for search results. 
		this.currentlyloadingresults = newstate;
		

		// Turn on results loader. 
		if(this.currentlyloadingresults) {
			this.searchoverlay.classList.add('load');
		}
		// Turn off results loader. 
		else {
			this.searchoverlay.classList.remove('load');
		}
	}

	// Clear previous search results. 
	clearSearchResults() {

		// Remove content within search results box. 
		this.searchresultsdestination.innerHTML = '';
	}

	// Show all matching results for given search query. 
	displaySearchResults() {
		
		// Get search query. 
		let searchquery = (this.searchqueryfield).value;
		
		// Get list of words in search query. 
		let searchquerywordlist = searchquery.split(' ');
		console.log(`Processing search query: \'${searchquery}\'`,searchquerywordlist);
		
		// Get from post database: origin of search results matrix. 
		let originalResultsMatrix = defaultResultSet;
		console.log('Results matrix:',originalResultsMatrix);
		
		// Generate matching search results. 
		getMatchingResults();
		
		// Initialize layout for search results. 
		let fullsearchresultslayout = '';

		// Add layout for search results body. 
		fullsearchresultslayout += createResultsBodyLayout();

		// Add layout for search results header. 
		fullsearchresultslayout += createResultsHeaderLayout();
		
		// Display layout for search results on page. 
		(this.searchresultsdestination).innerHTML = fullsearchresultslayout;
		// console.log('Search results layout:',fullsearchresultslayout);
		// console.log('Search results destination:',this.searchresultsdestination);

		// Turn off results loader. 
		this.updateResultsLoader(false);


		/*****/


		// Generate matching search results. 
		function getMatchingResults() {
	
			// Go thru each result block. 
			for(let currentresultblock of originalResultsMatrix) {
				console.log(`\tSearching ${ currentresultblock['searchlabel'].plural }...`,currentresultblock,currentresultblock.itemlist,currentresultblock.matchingitemlist);

				// Save list of matching items for current result block. 
				currentresultblock.matchingitemlist = currentresultblock.itemlist.filter(checkQueryMatch);
	
				// Share number of results found for current result block. 
				console.log( `\t\t${currentresultblock.matchingitemlist.length} result(s) found` );
			}

			/****/

			// Check match between result item and current search query (case insensitive).
			function checkQueryMatch(resultitem) {
			
				// Define parameters of current search. 
				let doTitleSearch = false;
				let doSelectiveSearch = true;
	
				// Check for simple match (by title) with search query (case insensitive). 
				if(doTitleSearch) {
	
					// Get title for given result item. 
					let resultitemtitle = resultitem['title'];
	
					// Check for matching title. 
					// return ( resultitemtitle.toUpperCase() ).includes( searchquery.toUpperCase() );
					return checkQueryMatchAllWords(resultitemtitle);
				}
	
				// Perform search only on selected tags. 
				else if(doSelectiveSearch) {
				
					// Old implementation: before data structure update (search tags of searchable post items). 
					// Get case-insensitive search check components: search tags, search query. 
					// let runontagstring = ( resultitem['searchtags'] ).toUpperCase();
					// Check for match within run-on search tag. 
					// return ( (runontagstring).includes( searchquery.toUpperCase() ) );
	
					// New implementation: after data structure update (search tags of searchable post items). 
					// Check for match within list of search tags. 
					for(let tag of resultitem.searchtags) {
	
						// Check for match between search query and current search tag. 
						// let matchOn = ( tag.toUpperCase() ).includes( searchquery.toUpperCase() );
						let matchOn = checkQueryMatchAllWords(tag);
						// Return true if any match found. 
						if(matchOn) return true;
						else continue;
					}
	
					// Return false if no match found. 
					return false;
				}
	
				// Otherwise, do all-out search on all properties of given item. 
				else {
				
					// Check for match with search query (any property, case insensitive). 
					for(let key in resultitem) {
						// console.log(key);
	
						// Get case-insensitive search check component. 
						let keyvalue = resultitem[key].toString();
	
						// Check for match in value of current property. 
						// let foundMatch = ( keyvalue.toUpperCase() ).includes( searchquery.toUpperCase() );
						let foundMatch = checkQueryMatchAllWords(keyvalue);
	
						// End search upon finding match (proceeding to next post item). 
						if(foundMatch) return true;
					}
					
					// Return false if match not found. 
					return false;
				}
	
				/***/
	
				// Check given string for match with all words in search query. 
				function checkQueryMatchAllWords(string) {
	
					// Check for multiple words in search query. 
					let querymultiplewords = ( searchquerywordlist.length > 1 );
	
					// Check for match with single-word query. 
					if(!querymultiplewords) {
						return ( string.toUpperCase() ).includes( searchquery.toUpperCase() );
					}
	
					// Check for match with multiple-word query. 
					for(let searchqueryword of searchquerywordlist) {
	
						// Check if given string contains current query word. 
						let searchquerywordfound = ( string.toUpperCase() ).includes( searchqueryword.toUpperCase() );
	
						// Assume false if any search query word not found in given string. 
						if( !searchquerywordfound ) return false;
					}
	
					// Assume true if all search query words found in given string. 
					return true;
				}
	
				// Check given string for match with any word in search query. 
				function checkQueryMatchAnyWord(string) {
	
					// Check for multiple words in search query. 
					let querymultiplewords = ( searchquerywordlist.length > 1 );
	
					// Check for match with single-word query. 
					if(!querymultiplewords) {
						return ( string.toUpperCase() ).includes( searchquery.toUpperCase() );
					}
	
					// Check for match with multiple-word query. 
					for(let searchqueryword of searchquerywordlist) {
	
						// Check if given string contains current query word. 
						let searchquerywordfound = ( string.toUpperCase() ).includes( searchqueryword.toUpperCase() );
	
						// Assume true if any search query word found in given string. 
						if( searchquerywordfound ) return true;
					}
					
					// Assume false if all search query words not found in given string. 
					return false;
				}
			}
		}

		// Create layout for search results body. 
		function createResultsBodyLayout() {

			// Compile final result body. 
			return `
			<!-- resultsbody -->
			<div class="resultsbody">
				${ originalResultsMatrix.map( (resultblock) => createResultBlockLayout(resultblock) ).join('') }
			</div>
			<!-- /resultsbody -->`;

			/****/

			// Create layout for given result block. 
			function createResultBlockLayout(resultblock) {

				let resultblockmatchcount = resultblock.matchingitemlist.length;

				// Compile layout for result block. 
				let resultblocklayout = `
				<!-- resultblock -->
				<div class="resultblock">

					<!-- blockhead -->
					<h2 class="blockhead ${''}">
						
						<!-- caption -->
						<span class="caption">${ resultblock.blockname }</span>
						<!-- /caption -->

						<!-- count -->
						<span class="count">${ resultblockmatchcount }</span>
						<!-- /count -->

					</h2>
					<!-- /blockhead -->
			
					<!-- resultlist -->
					<ul class="resultlist${ (resultblock.visual) ? (' visual') : ('') }">
						${ (resultblockmatchcount>0) ? createResultListLayout() : createNullResultListLayout() }
					</ul>
					<!-- /resultlist -->
	
				</div>
				<!-- /resultblock -->`;

				// Return layout for current result block. 
				return resultblocklayout;

				/***/

				// Create list layout for block with matching results. 
				function createResultListLayout() {
					return resultblock.matchingitemlist.map( (resultitem) => createResultItemLayout(resultitem,resultblock.archivefolderpath) ).join('');
				}

				// Create list layout for block with no matching results. 
				function createNullResultListLayout() {
	
					// Get plural name of current post type. 
					let resultnameplural = resultblock['searchlabel'].plural;

					// Get caption for null label. 
					let nullresultcaption = `No ${resultnameplural} match that search.`;

					// Get caption for archive link. 
					let archivelinkcaption = `View all ${resultnameplural}`;
	
					// Get archive url for post type of given result block. 
					let archiveurl = resultblock.archivefolderpath;

					// Compile layout. 
					return `
					<!-- resultitem -->
					<li class="resultitem">
	
						<!-- caption -->
						<span class="caption">${nullresultcaption}</span>
						<!-- /caption -->
						
						<!-- archivelink -->
						<a class="archivelink" href="${ archiveurl ? getRelativeUrl(archiveurl) : 'javascript:void(0)'}" target="_blank">${archivelinkcaption}</a>
						<!-- /archivelink -->
	
					</li>
					<!-- /resultitem -->`;
				}
			}

			// Create layout for result item. 
			function createResultItemLayout(resultitem,archivefolderpath) {
				
				// Get link url for current result. 
				let resulturl = getResultUrl(resultitem);

				// Get post name for current result. 
				let resultname = getResultName(resultitem);

				// Return layout for blog post. 
				if(resultitem.posttype=='post') return createBlogPostResultItemLayout();

				// Return layout for visual post. 
				else if(resultitem.visual) return createVisualResultItemLayout();

				// Return layout for regular post. 
				else return createRegResultItem();

				/***/

				// Create layout for regular result item. 
				function createRegResultItem() {
					return `
					<!-- resultitem -->
					<li class="resultitem">
						
						<!-- resultlink -->
						<a class="resultlink" href="${ resulturl ? getRelativeUrl(resulturl) : 'javascript:void(0)' }" target="_blank">${ resultname }</a>
						<!-- /resultlink -->
						
					</li>
					<!-- /resultitem -->`;
				}

				// Create layout for visual result item. 
				function createVisualResultItemLayout() {
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

				// Create layout for blog post result item. 
				function createBlogPostResultItemLayout() {
				
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

				// Get url for given post (using folder name & post item). 
				function getResultUrl(resultitem) {

					// Get post id for result item. 
					let postid = getPostId(resultitem);
					// console.log('\t\t\tPost id(item):',postid);

					// Return general url for given post. 
					if(archivefolderpath && postid) {
						return `${archivefolderpath}/post/?pid=${postid}`;
						return `${archivefolderpath}/post/index.html?pid=${postid}`;
					}

					// Return empty url if missing any parameter(s). 
					else return '';

					/**/
					
					// Get post id. 
					function getPostId(resultitem) {
						
						// Get from post register: key for post id. 
						let idkey = postregister[resultitem.posttype];
						
						// Get post id. 
						let postid = resultitem[idkey];
						console.log(`\t\t\tPost id (${resultitem.posttype}): '${postid}'`);
						
						// Handle registered post type (valid string or number). 
						if( postid || !isNaN(postid) ) return postid;
						// Handle unregistered post type. 
						else console.warn('\t\t\tPost type not yet recognized. Please add to post register: ', resultitem.posttype, postid);
					}
				}

				// Get name of given result item. 
				function getResultName(resultitem) {
		
					// Get type of post. 
					// let type = resultitem['posttype'];
		
					// Get search result name for given post types: blog posts, programs, courses, events, people. 
					// if(type=='post' || type=='program' || type=='course' || type=='event' || type=='faculty' || type=='student')
					
					// Return name of result item. 
					return resultitem['title'];
				}

				// Get url for given author (using author id). 
				function getAuthorUrl(resultitem) {

					// Get author id. 
					let authorid = resultitem['authorid'];
					// console.log('\t\tAuthor id:',authorid);

					// Return url if author id valid. 
					if( !isNaN(authorid) && authorid>=0 ) {
						return `./users/post/?id=${authorid}`;
						// return `./users/post/index.html?id=${authorid}`;
						// return `./authors/post/?id=${authorid}`;
						// return `./authors/post/index.html?id=${authorid}`;
					}

					// Return empty url if author id invalid. 
					else return '';
				}

				// Get search author name for given result item. 
				function getAuthorName(resultitem) {

					// Get author id. 
					let id = resultitem['authorid'];
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
		
			// // Get total number of search result items. 
			// let resultscount = countTotalResults('itemlist');
			// console.log('All result items:',resultscount);

			// Get total number of matching search result items. 
			let matchingresultscount = countTotalResults('matchingitemlist');
			console.log('Matching result items:',matchingresultscount);

			// Compile layout for search results header. 
			return `
			<!-- resultshead -->
			<h1 class="resultshead${ (matchingresultscount>0) ? '' : ' none' }">
	
				<!-- searchquery -->
				<span class="searchquery">${searchquery}</span>
				<!-- /searchquery -->
	
				<!-- resultcount -->
				<span class="resultcount">${matchingresultscount}</span>
				<!-- /resultcount -->
	
			</h1>
			<!-- /resultshead -->`;

			/****/

			// Count total number of result items in result matrix. 
			function countTotalResults(listkey) {
	
				// Initialize total number of result items. 
				let totalresultcount = 0;
	
				// Go thru each block in result matrix. 
				for(let resultblock of originalResultsMatrix) {
	
					// Increment total number of result items. 
					totalresultcount += resultblock[listkey].length;
	
					// // Go thru each item in result list of result block. 
					// for(let resultitem of resultblockitemlist) {
					// }
				}
	
				// Return total number of result items in selected list. 
				return totalresultcount;
			}
		}
	}


	// Open search overlay. 
	openSearchOverlay() {
		console.log('Opening live search overlay...');

		// Freeze background page scrolling. 
		this.setBodyFreeze(true);

		// Activate search overlay window. 
		this.setOverlayState(true);

		// Prepare to search. 
		setTimeout( prepareToSearch.bind(this), this.dt );

		// Update open/close state of live search. 
		this.overlaycurrentlyopen = true;

		/*****/

		// Prepare to search. 
		function prepareToSearch() {

			// Bring focus to text field. 
			this.searchqueryfield.focus();
		}
	}

	// Close search overlay. 
	closeSearchOverlay() {
		console.log('Closing live search overlay...');

		// De-activate search overlay window. 
		this.setOverlayState(false);

		// Un-freeze background page scrolling. 
		this.setBodyFreeze(false);

		// Clear search query and results. 
		setTimeout( clearOutSearch.bind(this), this.dt );

		// Update open/close state of live search. 
		this.overlaycurrentlyopen = false;

		/*****/

		// Clear search query and results. 
		function clearOutSearch() {

			// Clear contents of text field. 
			this.clearSearchQuery();

			// Remove focus from text field. 
			this.clearSearchResults();
		}
	}

	// Set state of search overlay window. 
	setOverlayState(showOverlay) {

		// Open search overlay window. 
		if(showOverlay) this.searchoverlay.classList.add('active');
		
		// Close search overlay window. 
		else this.searchoverlay.classList.remove('active');
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

		// Get code of selected key. 
		let keycode = event.keyCode || event.charCode;
	
		// Check if user typing text. 
		let typingText = checkTypingText();

		// Handle shortcut: Open overlay (Key: S). 
		if(!this.overlaycurrentlyopen && (keycode==83 || keycode==115) && !typingText ) {
			this.openSearchOverlay();
		}

		// Handle shortcut: Close overlay (Key: ESC). 
		if(this.overlaycurrentlyopen && keycode==27) {
			this.closeSearchOverlay();
		}

		/*****/

		// Check if user typing in text field. 
		function checkTypingText() {

			// Get all text input fields. 
			const allTextFields = document.querySelectorAll('textarea,input');

			// Go thru each text field. 
			for(let textfield of allTextFields) {
	
				// Check if text field active. 
				if(document.activeElement==textfield) {
	
					// Assume typing in text field if any text field active. 
					return true;
				}
			}

			// Assume not typing in text field if no text fields active. 
			return false;
		}
	}

}


/*****/


// Add additional result properties. 
addResultProperties();
// console.log(defaultResultSet);


/*****/


// Define additional result properties for search functionality. 
function addResultProperties() {

	// Go thru each result block. 
	for(let resultblock of defaultResultSet) {

		// Go thru each result item in current block. 
		for(let resultitem of resultblock.itemlist) {
			
			// Get searchable result data. 
			resultitem.searchtags = getResultTags(resultitem);
		}
	}

	/****/
	
	// Define searchable result tags. 
	function getResultTags(resultitem) {
	
		// Compile searchable components for this post type: general result. 
		let tagsources = [ resultitem.title, resultitem.content ];
		
		// Return list of tags split by word. 
		return tagsources.join(' ').split(' ');
	}
}
