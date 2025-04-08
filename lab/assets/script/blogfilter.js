


// Get components of tag filter panel. 
const tagfilterpanel = {

	// Get container for filter panel. 
	block: document.querySelector('div#container section.blog div.grid div.body div.filterpanel'),

	// Get destination for grouped types of filter items in filter panel. 
	filterlistdestination: document.querySelector('div#container section.blog div.grid div.body div.filterpanel ul.filtergroups'),
};
// console.log('Tag filter panel components:',tagfilterpanel);

// Get components of search filter panel. 
const searchfilterpanel = {

	// Get input field for search query. 
	queryfield: document.querySelector('div#container section.blog div.grid div.head div.modpanel input#filtersearchquery'),

	// Get clear button for search panel. 
	clearbtn: document.querySelector('div#container section.blog div.grid div.head div.modpanel label.searchclearbtn'),
};
// console.log('Search filter panel components:',searchfilterpanel);


/*****/


// Load blog post filtering system. 
loadFilterSystem();


/*****/


// Load blog post filtering system. 
function loadFilterSystem() {

	// Load groups of tag filters. 
	// loadFilterGroups();

	// Activate blog post search filter. 
	activateSearchFilter();

	/****/

	// Activate blog post search filter. 
	function activateSearchFilter() {

		// Check if search panel query field exists. 
		if(!searchfilterpanel['queryfield']) return;

		// Activate input field to filter blog posts by search query. 
		searchfilterpanel['queryfield'].addEventListener('input',searchBlogPosts);
		// searchfilterpanel['queryfield'].addEventListener('keyup',searchBlogPosts);
		// searchfilterpanel['queryfield'].addEventListener('touchend',searchBlogPosts);
		searchfilterpanel['clearbtn'].addEventListener('click',clearSearchFilterQuery);

		// Clear any previous search filter query. 
		clearSearchFilterQuery();

		// Activate filter modifiers in search filter panel. 
		activateSearchFilterMods();

		/***/

		// Show blog posts that match given search query. 
		function searchBlogPosts() {

			// Get search query of post filter. 
			let filtersearchquery = searchfilterpanel['queryfield'].value.toLowerCase();
			// Get list of words in search query. 
			let searchquerywords = filtersearchquery.split(' ');
			// Disregard any empty word at end. 
			if( !searchquerywords[searchquerywords.length - 1] ) searchquerywords.pop();
			console.log('Now searching blog posts...',searchquerywords);

			// Get style of search filter. 
			let dohardfilter = settingspane['strengthswitch']['switchcontroller'].checked;
			console.log(`Searching posts (${dohardfilter?'hard':'soft'})...`, filtersearchquery, searchquerywords);

			// Do hard search filter. 
			if(dohardfilter) doHardSearchFilter();
			// Do soft search filter. 
			else doSoftSearchFilter();

			// TODO: Load new groups of tag filters. 
			loadFilterGroups();

			// Apply selected tag filter items to blog posts. 
			applySelectedTagFilters();

			/**/

			// TODO: Perform hard search filter: Load new layout of posts. 
			function doHardSearchFilter() {

				// Initialize new data for search filter. 
				let searchquerydata = [];

				// Check if any search query present. 
				let hasSearchQueryPresent = filtersearchquery.length > 0;

				// Proceed only if search query present. 
				if(hasSearchQueryPresent) {

					// Get all filter blocks. 
					let filtertypeblocks = tagfilterpane['filterlistdestination'].querySelectorAll('li.filtergroup');

					// Go thru each word in search query. 
					for(let queryword of searchquerywords) {

						// Create new search query item. 
						let queryitem = {
							queryword:queryword,
							filteritemlist:[],
						};

						// Go thru each filter category. 
						// TODO: Include other attributes of project objects (i.e. project id, project name)
						for(let filtertypeblock of filtertypeblocks) {
							// console.log('Filter block:',filtertypeblock);

							// Get id for block of selected filter type. 
							let filtertypeid = filtertypeblock.getAttribute('data-tagfiltertypeid');
							// console.log('Filter type id:',filtertypeid);

							// Create new filter item. 
							let filteritem = {
								typeid:filtertypeid,
								valueid:queryword,
								caption:queryword,
								hovercaption:`${filtertypeid}:${queryword}`,
							};
							// Add filter item to list. 
							queryitem['filteritemlist'].push(filteritem);
						}

						// Add new search query item to list. 
						searchquerydata.push(queryitem);
					}
				}

				// Save new data for selected search filter items. 
				selectedfilterdata['searchfilters'] = searchquerydata;
				console.log('searchquerydata:',searchquerydata);

				// Load matching posts for given search filter criteria. 
				loadBlog();

				// Load layout for list of selected filter tags. 
				loadFilterTagsLayout();
			}

			// Perform soft search filter: Modify current layout of posts. 
			function doSoftSearchFilter() {

				// Access loaded blog post cards. 
				let blogpostcards = document.querySelectorAll('div#container section.blog div.grid div.body div.posts ul.pagelist li.postpage ul.postlist li.postcard');
				// console.log('Blog post cards:',blogpostcards);

				// Initialize number of matching posts. 
				let numMatchingPosts = 0;

				// TODO: There's an easier way to do this. But this way doesn't work yet cuz its not an array; its a collection of nodes. 
				// let matchingPosts = blogpostcards.filter( (card)=>checkForMatch( card.getAttribute('data-projectid').toLowerCase() ) )
				// Set number of matching posts. 
				// let numMatchingPosts = matchingPosts.length;

				// Go thru card for each project post. 
				for(let postcard of blogpostcards) {

					// Set for matching post. 
					let matchFound = false;

					// Get project id for given post. 
					let projectid = postcard.getAttribute('data-projectid');

					// Get project id for given post. 
					let projectitem = getProjectById(projectid);

					// Check for matching post. 
					if(projectitem) matchFound = checkForMatch(projectitem.searchablestring);

					// Increment number of matching posts. 
					if(matchFound) numMatchingPosts++;

					// Update visibility state of post based on match. 
					updatePostState(postcard, matchFound);
				}

				// Set state of results block. 
				setResultState(numMatchingPosts);

				// Load layout for list of selected filter tags. 
				loadFilterTagsLayout();

				/**/

				// Update visibility state of post based on match. 
				function updatePostState(postcard,matchesQuery) {

					// Show matching post. 
					if(matchesQuery) postcard.classList.remove('gone');

					// Hide non-matching post. 
					else postcard.classList.add('gone');
				}
			}

			// Check for matching post (by search string). 
			function checkForMatch(searchablestring) {
				// console.log('checkForMatch',searchablestring);

				// Ensure match check case insensitive. 
				searchablestring = searchablestring.toLowerCase();

				// Check for matching post (by full query). 
				// TODO: You can use these boolean values to rank stuff in order. 
				let matchFullQuery = searchablestring.includes(filtersearchquery);
				// Check for matching post (by each n every word). 
				let matchAllWords = checkForMatchAllWords(searchablestring,searchquerywords);
				// Check for matching post (by any word). 
				let matchAnyWord = checkForMatchAnyWord(searchablestring,searchquerywords);

				// Compile match criteria. 
				return matchAnyWord;

				// Compile match criteria. 
				// return ( matchFullQuery || matchAllWords || matchAnyWord );

				/**/

				// Check for matching post (by all words). 
				function checkForMatchAllWords(propertyvalue,searchquerywords) {

					// Go thru each word in search query. 
					for(let word of searchquerywords) {

						// Check if word found in property value. 
						let wordPresent = propertyvalue.includes(word);

						// Return false if any query word missing. 
						if(!wordPresent) return false;
					}

					// Return true if no query words missing. 
					return true;
				}

				// Check for matching post (by any words). 
				function checkForMatchAnyWord(propertyvalue,searchquerywords) {

					// Go thru each word in search query. 
					for(let word of searchquerywords) {

						// Check if word found in property value. 
						let wordPresent = propertyvalue.includes(word);

						// Return true if any query word found. 
						if(wordPresent) return true;
					}

					// Return false if no query words found. 
					return false;
				}
			}
		}

		// Clear search filter query. 
		function clearSearchFilterQuery() {

			// Clear search query. 
			searchfilterpanel['queryfield'].value = '';

			// Show all blog posts. 
			searchBlogPosts();
		}

		// Activate filter modifiers in search filter panel. 
		function activateSearchFilterMods() {

			// Enable 'soft' label: Set search filter mode to 'soft'. 
			settingspane['strengthswitch']['softbtn'].addEventListener('click', ()=>{
				settingspane['strengthswitch']['switchcontroller'].checked = false;
				searchBlogPosts();
			} );

			// Enable 'hard' label: Set search filter mode to 'hard'. 
			settingspane['strengthswitch']['hardbtn'].addEventListener('click', ()=>{
				settingspane['strengthswitch']['switchcontroller'].checked = true;
				searchBlogPosts();
			} );

			// Enable controller for soft/hard switch. 
			settingspane['strengthswitch']['switchcontroller'].addEventListener('input',searchBlogPosts);
		}
	}

	// Load groups of tag filters (based on search filter query). 
	function loadFilterGroups() {
		// console.log('Loading list of post filter groups');

		// Check if filter pane exists. 
		if(!tagfilterpane['block']) return;

		// Initialize layouts for filter groups. 
		let filtergroupslayout = '';
		let mobilefiltergroupslayout = '';

		// Go thru each filter type group. 
		for(let filtertypegroup of postFilterGroups) {
			// console.log('Filter type group:',filtertypegroup);

			// Skip invisible filter types for layout. 
			if( !filtertypegroup['filtertypevisible'] ) continue;

			// Add filter type to primary layout. 
			filtergroupslayout += `
			<!-- filtergroup -->
			<li class="filtergroup open" data-tagfiltertypeid="${ filtertypegroup['filtertypeid'] }">

				<!-- filterblock -->
				<div class="filterblock">

					<!-- blockhead -->
					<div class="blockhead">

						<!-- filtertypename -->
						<h2 class="filtertypename">

							<!-- caption -->
							<span class="caption">${ filtertypegroup['filtertypename'] }</span>
							<!-- /caption -->

						</h2>
						<!-- /filtertypename -->

						<!-- icon -->
						<svg class="icon arrow up" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
						</svg>
						<!-- /icon -->

						<!-- icon -->
						<svg class="icon arrow dn" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
						</svg>
						<!-- /icon -->

					</div>
					<!-- /blockhead -->

					<!-- blockbody -->
					<div class="blockbody">

						<!-- filterlist -->
						<ul class="filterlist">${ createFilterItemsListLayout(filtertypegroup) }</ul>
						<!-- /filterlist -->

					</div>
					<!-- /blockbody -->

				</div>
				<!-- /filterblock -->

			</li>
			<!-- /filtergroup -->`;

			// Add filter type to mobile layout. 
			mobilefiltergroupslayout += `
			<!-- filtergroup -->
			<li class="filtergroup" data-tagfiltertypeid="${ filtertypegroup['filtertypeid'] }">

				<!-- togglebtn -->
				<div class="togglebtn" onclick="this.parentElement.classList.toggle('open')">

					<!-- caption -->
					<span class="caption">${ filtertypegroup['filtertypename'] }</span>
					<!-- /caption -->

					<!-- icon -->
					<svg class="icon arrow up" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon arrow dn" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
					</svg>
					<!-- /icon -->

				</div>
				<!-- /togglebtn -->

				<!-- blockunderlay -->
				<div class="blockunderlay" onclick="this.parentElement.classList.remove('open')"></div>
				<!-- /blockunderlay -->

				<!-- filterblock -->
				<div class="filterblock">

					<!-- blockhead -->
					<div class="blockhead">

						<!-- filtertypename -->
						<h2 class="filtertypename">

							<!-- caption -->
							<span class="caption">${ filtertypegroup['filtertypename'] }</span>
							<!-- /caption -->

						</h2>
						<!-- /filtertypename -->

						<!-- donebtn -->
						<div class="donebtn" onclick="this.parentElement.parentElement.parentElement.classList.remove('open')">

							<!-- caption -->
							<span class="caption">Done</span>
							<!-- /caption -->

						</div>
						<!-- /donebtn -->

					</div>
					<!-- /blockhead -->

					<!-- blockbody -->
					<div class="blockbody">

						<!-- filterlist -->
						<ul class="filterlist">${ createFilterItemsListLayout(filtertypegroup,true) }</ul>
						<!-- /filterlist -->

					</div>
					<!-- /blockbody -->

				</div>
				<!-- /filterblock -->

			</li>
			<!-- /filtergroup -->`;
		}

		// Display filter groups in filter pane. 
		tagfilterpane['filterlistdestination'].innerHTML = filtergroupslayout;

		// Display filter groups in filter panel. 
		tagfilterpanel['filterlistdestination'].innerHTML = mobilefiltergroupslayout;

		// Activate filter headers in filter pane. 
		activateFilterHeads();

		// Activate filter items in filter pane. 
		activateFilterItems();

		// Activate filter modifiers in filter pane. 
		activateFilterMods();

		/***/

		// Create layout for filter items list. 
		function createFilterItemsListLayout(filtertypegroup,usemobileversion) {

			// Get id for given filter type group. 
			let filtertypeid = filtertypegroup['filtertypeid'];

			// Get list of items for given filter type group. 
			let filtergroupitemslist = filtertypegroup['filteritems'];
			// console.log('Creating layout for filter group items list',filtergroupitemslist);

			// Initialize layout for filter group items list. 
			let filteritemslistlayout = '';

			// Go thru each filter item in list for given group. 
			for(let filteritem of filtergroupitemslist) {
				// console.log('Filter item:',filteritem);

				// Add filter item to layout. 
				filteritemslistlayout += createFilterItemLayout(filteritem);
			}

			// Return layout for criteria list. 
			return filteritemslistlayout;

			/**/

			// Create layout for given filter item. 
			function createFilterItemLayout(filteritem) {

				// Get value of current filter item. 
				let itemvalue = filteritem.value;
				if(!itemvalue) console.log('Filter item value:',itemvalue,filteritem);

				// Get name of current filter item. 
				let itemname = filtertypegroup.filteritemnamer(itemvalue);
				// console.log('Filter item name:',itemname);

				// Create unique id for current filter item. 
				let uniqueitemid = filtertypeid + itemvalue;

				// Compile layout for filter item. 
				if(usemobileversion) return `
				<!-- filteritem -->
				<li class="filteritem" data-tagfilteritemvalueid="${itemvalue}" title="${itemvalue}">

					<!-- filteritemfront -->
					<label class="filteritemfront" for="${uniqueitemid}">

						<!-- caption -->
						<span class="caption">${itemname}</span>
						<!-- /caption -->

					</label>
					<!-- /filteritemfront -->

				</li>
				<!-- /filteritem -->`;

				// Compile layout for filter item. 
				else return `
				<!-- filteritem -->
				<li class="filteritem" data-tagfilteritemvalueid="${itemvalue}" title="${itemvalue}">

					<!-- filteritemcontroller -->
					<input class="filteritemcontroller" type="checkbox" id="${uniqueitemid}">
					<!-- /filteritemcontroller -->

					<!-- filteritemfront -->
					<label class="filteritemfront" for="${uniqueitemid}">

						<!-- icon -->
						<svg class="icon check" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/>
						</svg>
						<!-- /icon -->

						<!-- caption -->
						<span class="caption">${itemname}</span>
						<!-- /caption -->

						<!-- matchcount -->
						<span class="matchcount">${ filteritem.frequency }</span>
						<!-- /matchcount -->

					</label>
					<!-- /filteritemfront -->

				</li>
				<!-- /filteritem -->`;
			}
		}

		// Activate filter type headers in filter pane. 
		function activateFilterHeads() {

			// Get loaded headers in filter pane. 
			let filtergroupheaders = tagfilterpane['filterlistdestination'].querySelectorAll('li.filtergroup div.filterblock div.blockhead');

			// Go thru each header in filter pane. 
			for(let header of filtergroupheaders) {

				// Enable header clicks to toggle group in filter pane. 
				header.addEventListener('click',toggleFilterGroup);
			}

			/**/

			// Toggle group in post filter pane. 
			function toggleFilterGroup(event) {

				// Get header for selected filter group. 
				let filtergrouphead = event.currentTarget;
				console.log('filtergrouphead:',filtergrouphead);

				// Get block for selected filter group. 
				let filtergroupblock = filtergrouphead.parentElement.parentElement;
				console.log('filtergroupblock:',filtergroupblock);

				// Toggle state of selected block. 
				filtergroupblock.classList.toggle('open');
			}
		}

		// Activate filter items in filter pane. 
		function activateFilterItems() {

			// Get current tag filter controllers. 
			tagfilterpane['tagfiltercontrollers'] = tagfilterpane['filterlistdestination'].querySelectorAll('li.filtergroup div.filterblock div.blockbody ul.filterlist li.filteritem input.filteritemcontroller');

			// Go thru each tag filter controller. 
			for(let controller of tagfilterpane['tagfiltercontrollers']) {

				// Enable toggle of tag filter. 
				controller.addEventListener('input',applySelectedTagFilters);
			}

			// Enable apply button in filter pane. 
			tagfilterpane['applybtn'].addEventListener('click',applySelectedTagFilters);

			// Enable clear button in filter pane. 
			tagfilterpane['clearbtn'].addEventListener('click',clearTagFilters);
		}

		// Activate filter modifiers in filter pane. 
		function activateFilterMods() {

			// Enable 'any' label: Set general filter mode to 'any'. 
			settingspane['scopeswitch']['anybtn'].addEventListener('click', ()=>{
				settingspane['scopeswitch']['switchcontroller'].checked = false;
				applySelectedTagFilters();
			} );

			// Enable 'all' label: Set general filter mode to 'all'. 
			settingspane['scopeswitch']['allbtn'].addEventListener('click', ()=>{
				settingspane['scopeswitch']['switchcontroller'].checked = true;
				applySelectedTagFilters();
			} );

			// Enable controller for any/all switch. 
			settingspane['scopeswitch']['switchcontroller'].addEventListener('input',applySelectedTagFilters);
		}
	}
}

// Clear all applied tag filters. 
function clearTagFilters() {

	// Get current tag filter controllers. 
	// tagfilterpane['tagfiltercontrollers'] = tagfilterpane['filterlistdestination'].querySelectorAll('li.filtergroup div.filterblock div.blockbody ul.filterlist li.filteritem input.filteritemcontroller');

	// Go thru each tag filter controller. 
	for(let controller of tagfilterpane['tagfiltercontrollers']) {

		// Turn off current tag filter item. 
		controller.checked = false;
	}

	// Apply selected tag filter items to blog posts. 
	applySelectedTagFilters();
}

// Apply selected tag filter items. 
function applySelectedTagFilters() {
	// console.log('Applying selected tag filters...');

	// Initialize new list of selected tag filter items. 
	let selectedtagfilteritems = [];

	// Get current tag filter controllers. 
	// tagfilterpane.tagfiltercontrollers = tagfilterpane.filterlistdestination.querySelectorAll('li.filtergroup div.filterblock div.blockbody ul.filterlist li.filteritem input.filteritemcontroller');

	// Go thru each tag filter controller. 
	for(let controller of tagfilterpane['tagfiltercontrollers']) {

		// Check if current tag filter item is selected. 
		if(controller.checked) {
			// console.log('Tag filter item switch:',controller);

			// Get block for current tag filter item. 
			let tagfilteritemblock = controller.parentElement;
			// console.log('Tag filter item block:',tagfilteritemblock);

			// Get block for current tag filter type. 
			let tagfiltertypeblock = tagfilteritemblock.parentElement.parentElement.parentElement.parentElement;
			// console.log('Tag filter type block:',tagfiltertypeblock);


			// Get id of selected tag filter type. 
			let filtertypeid = tagfiltertypeblock.getAttribute('data-tagfiltertypeid');
			// console.log('Tag filter type id:',filtertypeid);

			// Get id for value of selected tag filter item. 
			let filtervalueid = tagfilteritemblock.getAttribute('data-tagfilteritemvalueid');
			// console.log('Tag filter item value id:',filtervalueid);

			// Get caption for selected tag filter item. 
			let filteritemcaptionblock = tagfilteritemblock.querySelector('span.caption');
			let filteritemcaption = filteritemcaptionblock.textContent;
			// console.log('Tag filter item caption:',filteritemcaption,filteritemcaptionblock);

			// Get unique id for selected tag filter item. 
			// let filteritemuniqueid = controller.id;
			// let filteritemuniqueid = filtertypeid + filtervalueid;
			// console.log('Filter item unique id:',filteritemuniqueid);

			// Save to list: details of selected tag filter item. 
			selectedtagfilteritems.push({
				typeid:filtertypeid,
				valueid:filtervalueid,
				caption:filteritemcaption,
				hovercaption:`${filtertypeid}:${filtervalueid}`,
			});
		}
	}

	// Save new data for selected tag filter items. 
	selectedfilterdata['tagfilters'] = selectedtagfilteritems;

	// Load blog posts associated with selected tag filter items. 
	loadBlog();

	// Close all window panes. 
	// closeWindowPanes();

	// Load layout for list of selected filter tags. 
	loadFilterTagsLayout();

	// Clear search filter query. 
	// searchfilterpanel['queryfield'].value = '';
}

// Load layout for list of selected filter tags. 
function loadFilterTagsLayout() {

	// Create layout for list of selected filter tags. 
	let filtertaglistlayoutT = selectedfilterdata['tagfilters'].map(createTagFilterTagLayout).join('');
	let filtertaglistlayoutS = selectedfilterdata['searchfilters'].map(createSearchFilterTagLayout).join('');
	console.log('Selected filter data:',selectedfilterdata/* ['tagfilters'] */);
	// console.log('filtertaglistlayout:',filtertaglistlayout);

	// Display layout for list of filter tags. 
	tagfilterpane.taglistdestination.innerHTML = `${filtertaglistlayoutS}${filtertaglistlayoutT}`;

	/****/

	// Create tag layout for tag filter. 
	function createTagFilterTagLayout(filteritem) {
		// console.log('Creating tag layout', filteritem.typeid, filteritem.valueid);

		// Get unique id of given filter item. 
		let filteritemuniqueid = `${filteritem.typeid}${filteritem.valueid}`;

		// Get caption for given filter item. 
		let filteritemcaption = filteritem.caption;
		let filteritemhovercaption = filteritem.hovercaption;

		// Compile tag layout for given filter item. 
		return `
		<!-- tagitem -->
		<li class="tagitem">

			<!-- removebtn -->
			<label class="removebtn" for="${filteritemuniqueid}" title="${filteritemhovercaption}">

				<!-- caption -->
				<span class="caption">${filteritemcaption}</span>
				<!-- /caption -->

				<!-- icon -->
				<svg class="icon x" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
				</svg>
				<!-- /icon -->

			</label>
			<!-- /removebtn -->

		</li>
		<!-- /tagitem -->`;
	}

	// Create tag layout for search filter. 
	function createSearchFilterTagLayout(queryitem) {
		// console.log('Creating tag layout', queryitem.queryword, queryitem.filteritemlist);

		// Get list of filter items for given query item. 
		let filteritem = queryitem.filteritemlist;

		// Get unique id of given filter item. 
		let filteritemuniqueid = `queryword${filteritem.valueid}`;

		// Get caption for given filter item. 
		let filteritemcaption = queryitem.queryword;
		let filteritemhovercaption = queryitem.queryword;

		// Compile tag layout for given filter item. 
		return `
		<!-- tagitem -->
		<li class="tagitem">

			<!-- removebtn -->
			<label class="removebtn" for="${filteritemuniqueid}" title="${filteritemhovercaption}">

				<!-- caption -->
				<span class="caption">${filteritemcaption}</span>
				<!-- /caption -->

				<!-- icon -->
				<svg class="icon x" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
				</svg>
				<!-- /icon -->

			</label>
			<!-- /removebtn -->

		</li>
		<!-- /tagitem -->`;
	}
}


/*****/


// // TODO: Remove given filter tag from list of applied filter items. 
// function removeFilterTag(/* filteritemtag */) {
// 	// console.log('filteritemtag:',filteritemtag);

// 	// TODO: Uncheck associated item in fiter panel. 
// 	// selectedtagfilteritems.remove(xyz);

// 	// Apply selected tag filter items. 
// 	applySelectedTagFilters();
// }

// // Check post filter item. 
// function checkFilterItem(event) {

// 	// Get input checkbox. 
// 	let checkbox = event.currentTarget;

// 	// Check if checkbox is on. 
// 	let checkboxOn = checkbox.checked;
// 	console.log('Checkbox on:',checkboxOn,checkbox);

// 	// Apply filter item (if checkbox on). 
// 	if(checkboxOn) applyFilterItem();

// 	// Un-apply filter item (if checkbox not on). 
// 	else unapplyFilterItem();

// 	/**/

// 	// TODO: Apply filter item to blog posts. 
// 	function applyFilterItem() {

// 		// Get value of filter item. 

// 		// Update blog posts. 

// 		// Update filter items. 
// 	}

// 	// TODO: Un-apply filter item to blog posts. 
// 	function unapplyFilterItem(filteritem) {

// 		// Get value of filter item. 

// 		// Update blog posts. 

// 		// Update filter items. 
// 	}
// }
