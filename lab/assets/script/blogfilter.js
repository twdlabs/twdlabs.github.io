


// Get componenets of tag filter pane. 
const tagfilterpane = {

	// Get container for filter pane. 
	block: document.querySelector('div#container section.blog div.grid div.body div.filterpane'),

	// Get buttons in filter pane. 
	applybtn: document.querySelector('div#container section.blog div.grid div.body div.filterpane div.btnpanel div.applybtn'),
	clearbtn: document.querySelector('div#container section.blog div.grid div.body div.filterpane div.btnpanel div.clearbtn'),

	// Get destination for grouped types of filter items in filter pane. 
	filterlistdestination: document.querySelector('div#container section.blog div.grid div.body div.filterpane ul.filterlist'),
	// Get group headers in filter pane. 
	// groupheaders: document.querySelectorAll('div#container section.blog div.grid div.body div.filterpane ul.filterlist li.filtertype div.filterblock div.blockhead'),
	// Get tag filter controllers. 
	tagfiltercontrollers:undefined,

	// Get switch for filter type (matching any criterion vs matching all criteria). 
	anyallswitch: {
		anybtn: document.querySelector('div#container section.blog div.grid div.body div.filterpane div.switchpanel span.choice.any'),
		allbtn: document.querySelector('div#container section.blog div.grid div.body div.filterpane div.switchpanel span.choice.all'),
		switchcontroller: document.querySelector('div#container section.blog div.grid div.body div.filterpane div.switchpanel label.switch input.switchcontroller'),
	},

	// Get destination for list of applied filters. 
	taglistdestination: document.querySelector('div#container section.blog div.grid div.body div.appliedfilters ul.filtertaglist'),
};
// console.log('Filter pane:',tagfilterpane);


// Get componenets of tag filter panel. 
const tagfilterpanel = {

	// Get container for filter panel. 
	block: document.querySelector('div#container section.blog div.grid div.body div.filterpanel'),

	// Get destination for grouped types of filter items in filter panel. 
	filterlistdestination: document.querySelector('div#container section.blog div.grid div.body div.filterpanel ul.filterlist'),
};
// console.log('Filter panel:',tagfilterpanel);


// Get componenets of search filter panel. 
const searchfilterpanel = {

	// Get input field for search query. 
	queryfield: document.querySelector('div#container section.blog div.grid div.head div.modpanel input#filtersearchquery'),

	// Get clear button for search panel. 
	clearbtn: document.querySelector('div#container section.blog div.grid div.head div.modpanel label.searchclearbtn'),
};
// console.log('Search filter panel:',searchfilterpanel);


/*****/


// Load blog post filtering system. 
loadFilterSystem();


/*****/


// Load blog post filtering system. 
function loadFilterSystem() {

	// Load groups of tag filters. 
	loadFilterGroups();

	// Activate blog post search filter. 
	activateSearchFilter();

	/****/

	// Activate blog post search filter. 
	function activateSearchFilter() {

		// Check if search panel query field exists. 
		if(!searchfilterpanel.queryfield) return;

		// Activate input field to filter blog posts by search query. 
		searchfilterpanel.queryfield.addEventListener('input',searchBlogPosts);
		searchfilterpanel.clearbtn.addEventListener('click',clearSearchFilterQuery);

		// Clear any previous search filter query. 
		clearSearchFilterQuery();

		/***/

		// Show blog posts that match given search query. 
		function searchBlogPosts() {

			// Set filter style. 
			let dohardfilter = true;
			dohardfilter = false;
	
			// Get search query of post filter. 
			let filtersearchquery = searchfilterpanel.queryfield.value.toUpperCase();
			// Get list of words in search query. 
			let searchquerywords = filtersearchquery.split(' ');
			// console.log('Searching posts...', filtersearchquery, searchquerywords);

			// Do hard filter: Reload full layout of posts. 
			if(dohardfilter) doHardFilter();
			// Do soft filter: Modify pre-loaded posts. 
			else doSoftFilter();

			/**/

			// TODO: Do hard filter. 
			function doHardFilter() {

				// Get all filter blocks. 
				let filtertypeblocks = tagfilterpane.filterlistdestination.querySelectorAll('li.filtertype');

				// Go thru each filter type. 
				for(let filtertypeblock of filtertypeblocks) {
					// console.log('Filter block:',filtertypeblock);

					// Get id for block of selected filter type. 
					let filtertypeid = filtertypeblock.getAttribute('data-tagfiltertypeid');
					// console.log('Filter type id:',filtertypeid);

					// Go thru each word in search query. 
					for(let queryword of searchquerywords) {
	
						// Add filter item to list. 
						selectedtagfilteritems.push({
							typeid:filtertypeid,
							valueid:queryword,
							// caption:xyz,
						});
					}
				}

				// Load matching posts for given search filter criteria. 
				loadBlog(selectedtagfilteritems);
			}

			// Do soft filter. 
			function doSoftFilter() {

				// Access loaded blog post cards. 
				let blogpostcards = document.querySelectorAll('div#container section.blog div.grid div.body div.posts ul.pagelist li.postpage ul.postlist li.postcard');
				// console.log('Blog post cards:',blogpostcards);
	
				// Initialize number of matching posts. 
				let numMatchingPosts = 0;
	
				// TODO: There's an easier way to do this. But this way doesn't work yet cuz its not an array; ts a collection of nodes. 
				// let matchingPosts = blogpostcards.filter( (card)=>checkForMatch( card.getAttribute('data-projectid').toUpperCase() ) )
				// Set number of matching posts. 
				// let numMatchingPosts = matchingPosts.length;
			
				// Go thru each blog post. 
				for(let postcard of blogpostcards) {
	
					// Get project id for given post. 
					let projectid = postcard.getAttribute('data-projectid');
	
					// Check for matching post. 
					let matchFound = checkForMatch(projectid);
	
					// Increment number of matching posts. 
					if(matchFound) numMatchingPosts++;
	
					// Update visibility state of post based on match. 
					updatePostState(postcard, matchFound);
				}
	
				// Set state of results block. 
				setResultState(!!numMatchingPosts);

				/**/

				// Check for matching post. 
				function checkForMatch(projectid) {
	
					// Capitalize project id. 
					projectid = projectid.toUpperCase();
	
					// Check for matching post (by full query). 
					let matchFullQuery = projectid.includes(filtersearchquery);
					// Check for matching post (by each word). 
					let matchEveryWord = checkForMatchAllWords(projectid,searchquerywords);
	
					// Compile match criteria. 
					return (matchFullQuery || matchEveryWord);
	
					/**/
	
					// Check for matching post (by all words). 
					function checkForMatchAllWords(projectid,searchquerywords) {
				
						// Go thru each word in search query. 
						for(let word of searchquerywords) {
		
							let wordPresent = projectid.includes(word);
		
							// Return false if any query word is missing. 
							if(!wordPresent) return false;
						}
		
						// Return true if passed (no query words missing). 
						return true;
					}
	
					// Check for matching post (by any words). 
					function checkForMatchAnyWord(projectid,searchquerywords) {
				
						// Go thru each word in search query. 
						for(let word of searchquerywords) {
		
							let wordPresent = projectid.includes(word);
		
							// Return false if any query word is missing. 
							if(!wordPresent) return false;
						}
		
						// Return true if passed (no query words missing). 
						return true;
					}
				}
	
				// Update visibility state of post based on match. 
				function updatePostState(postcard,matchesQuery) {
	
					// Show matching post. 
					if(matchesQuery) postcard.classList.remove('gone');
	
					// Hide non-matching post. 
					else postcard.classList.add('gone');
				}
			}
		}

		// Clear search filter query. 
		function clearSearchFilterQuery() {

			// Clear search query. 
			searchfilterpanel.queryfield.value = '';

			// Show all blog posts. 
			searchBlogPosts();
		}
	}

	// Load groups of tag filters. 
	function loadFilterGroups() {
		// console.log('Loading list of post filter groups');

		// Check if filter pane exists. 
		if(!tagfilterpane.block) return;
	
		// Initialize layouts for filter groups. 
		let filtergroupslayout = '';
		let mobilefiltergroupslayout = '';
	
		// Go thru each filter type. 
		for(let filtertype of postFilterData) {
			// console.log('Filter group:',filtertype);
			
			// Add filter type to primary layout. 
			filtergroupslayout += `
			<!-- filtertype -->
			<li class="filtertype open" data-tagfiltertypeid="${filtertype.filtertypeid}">

				<!-- filterblock -->
				<div class="filterblock">
	
					<!-- blockhead -->
					<div class="blockhead">

						<!-- filtertypename -->
						<h2 class="filtertypename">
		
							<!-- caption -->
							<span class="caption">${filtertype.filtername}</span>
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
		
						<!-- filteritemslist -->
						<ul class="filteritemslist">${ createFilterItemsListLayout(filtertype) }</ul>
						<!-- /filteritemslist -->
						
					</div>
					<!-- /blockbody -->
				
				</div>
				<!-- /filterblock -->
				
			</li>
			<!-- /filtertype -->`;
			
			// Add filter type to mobile layout. 
			mobilefiltergroupslayout += `
			<!-- filtertype -->
			<li class="filtertype" data-tagfiltertypeid="${filtertype.filtertypeid}">

				<!-- togglebtn -->
				<div class="togglebtn" onclick="this.parentElement.classList.toggle('open')">

					<!-- caption -->
					<span class="caption">${filtertype.filtername}</span>
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
							<span class="caption">${filtertype.filtername}</span>
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

						<!-- filteritemslist -->
						<ul class="filteritemslist">${ createFilterItemsListLayout(filtertype,true) }</ul>
						<!-- /filteritemslist -->
						
					</div>
					<!-- /blockbody -->
					
				</div>
				<!-- /filterblock -->
				
			</li>
			<!-- /filtertype -->`;
		}
	
		// Display filter groups in filter pane. 
		tagfilterpane.filterlistdestination.innerHTML = filtergroupslayout;
	
		// Display filter groups in filter panel. 
		tagfilterpanel.filterlistdestination.innerHTML = mobilefiltergroupslayout;
	
		// Activate filter headers in filter pane. 
		activateFilterHeads();
	
		// Activate filter items in filter pane. 
		activateFilterItems();
	
		/***/
	
		// Create layout for filter items list. 
		function createFilterItemsListLayout(filtertype,usemobileversion) {
	
			// Get id for given filter type. 
			let filtertypeid = filtertype.filtertypeid;
	
			// Get list of items for given filter type. 
			let filteritemslist = filtertype.filteritems;
			// console.log('Creating layout for filter items list',filteritemslist);
	
			// Initialize layout for filter items list. 
			let filteritemslistlayout = '';
	
			// Go thru each filter item in given list. 
			for(let filteritem of filteritemslist) {
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
				let itemname = filtertype.filteritemnamer(itemvalue);
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
						<span class="matchcount">${ filteritem.frequency}</span>
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
			let filtergroupheaders = tagfilterpane.filterlistdestination.querySelectorAll('li.filtertype div.filterblock div.blockhead');
		
			// Go thru each header in filter pane. 
			for(let header of filtergroupheaders) {
		
				// Enable header clicks to toggle group in filter pane. 
				header.addEventListener('click',toggleFilterGroup);
			}
	
			/**/
	
			// Toggle group in post filter pane. 
			function toggleFilterGroup(event) {
			
				// Get header for filter type. 
				let filtergroupheader = event.currentTarget;
			
				// Get block for filter type. 
				let filtertype = filtergroupheader.parentElement.parentElement;
			
				// Toggle block for filter type. 
				filtertype.classList.toggle('open');
			}
		}
	
		// Activate filter items in filter pane. 
		function activateFilterItems() {
		
			// Get current tag filter controllers. 
			tagfilterpane.tagfiltercontrollers = tagfilterpane.filterlistdestination.querySelectorAll('li.filtertype div.filterblock div.blockbody ul.filteritemslist li.filteritem input.filteritemcontroller');
		
			// Go thru each tag filter controller. 
			for(let controller of tagfilterpane.tagfiltercontrollers) {
		
				// Enable toggle of tag filter. 
				controller.addEventListener('input',applySelectedTagFilters);
			}
	
			// Enable apply button in filter pane. 
			tagfilterpane.applybtn.addEventListener('click',applySelectedTagFilters);
	
			// Enable clear button in filter pane. 
			tagfilterpane.clearbtn.addEventListener('click',clearTagFilters);
	
			// Enable 'any' label: Set filter mode to 'any'. 
			tagfilterpane.anyallswitch.anybtn.addEventListener('click', ()=>{ tagfilterpane.anyallswitch.switchcontroller.checked = false; applySelectedTagFilters(); } );
			// Enable 'all' label: Set filter mode to 'all'. 
			tagfilterpane.anyallswitch.allbtn.addEventListener('click', ()=>{ tagfilterpane.anyallswitch.switchcontroller.checked = true; applySelectedTagFilters(); } );
			// Enable controller for any/all switch. 
			tagfilterpane.anyallswitch.switchcontroller.addEventListener('input',applySelectedTagFilters);
		}
	}
}

// Close tag filter pane. 
function closeTagFilterPane() {

	// Close tag filter pane. 
	tagfilterpane.block.classList.remove('open');
}

// Toggle tag filter pane. 
function toggleTagFilterPane() {

	// Toggle tag filter pane. 
	tagfilterpane.block.classList.toggle('open');
}

// Clear all applied tag filters. 
function clearTagFilters() {

	// Get current tag filter controllers. 
	// tagfilterpane.tagfiltercontrollers = tagfilterpane.filterlistdestination.querySelectorAll('li.filtertype div.filterblock div.blockbody ul.filteritemslist li.filteritem input.filteritemcontroller');

	// Go thru each tag filter controller. 
	for(let controller of tagfilterpane.tagfiltercontrollers) {

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
	// tagfilterpane.tagfiltercontrollers = tagfilterpane.filterlistdestination.querySelectorAll('li.filtertype div.filterblock div.blockbody ul.filteritemslist li.filteritem input.filteritemcontroller');

	// Go thru each tag filter controller. 
	for(let controller of tagfilterpane.tagfiltercontrollers) {

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
			});
		}
	}

	// Load layout for list of filter tags. 
	loadFilterTagsLayout();

	// Load blog posts associated with selected tag filter items. 
	loadBlog(selectedtagfilteritems);

	// Close tag filter pane. 
	closeTagFilterPane();

	// Clear search filter query. 
	searchfilterpanel.queryfield.value = '';

	/****/

	// Load layout for list of filter tags. 
	function loadFilterTagsLayout() {

		// Create layout for list of filter tags. 
		let filtertaglistlayout = selectedtagfilteritems.map(createFilterTagLayout).join('');
		// console.log('filtertaglistlayout:',filtertaglistlayout);
	
		// Display layout for list of filter tags. 
		tagfilterpane.taglistdestination.innerHTML = filtertaglistlayout;

		/***/

		// Create layout for filter tag. 
		function createFilterTagLayout(filteritem) {
			// console.log('Creating filter tag layout', filteritem.typeid, filteritem.valueid);
	
			// Get unique id of selected filter item. 
			let filteritemuniqueid = filteritem.typeid + filteritem.valueid;
	
			// Get caption for selected filter item. 
			let filteritemcaption = filteritem.caption;
			
			// Compile layout for filter tag. 
			return `
			<!-- filtertag -->
			<li class="filtertag">
	
				<!-- removebtn -->
				<label class="removebtn" for="${filteritemuniqueid}">
	
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
			<!-- /filtertag -->`;
		}
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
