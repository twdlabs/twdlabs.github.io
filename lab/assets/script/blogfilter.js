


// Get input field for search query. 
const searchqueryfield = document.querySelector('div#container section.blog div.grid div.head div.modpanel input#searchquery');
// console.log('searchqueryfield:',searchqueryfield);

// Get clear button for search query. 
const searchclearbtn = document.querySelector('div#container section.blog div.grid div.head div.modpanel label.searchclearbtn');
// console.log('searchclearbtn:',searchclearbtn);

// Get label for empty search results. 
const emptysearchlabel = document.querySelector('div#container section.blog div.grid div.body div.posts div.emptylabel');
// console.log('emptysearchlabel:',emptysearchlabel);


// Get destination for list of applied filters. 
const filtertaglistdestination = document.querySelector('div#container section.blog div.grid div.body div.appliedfilters ul.filtertaglist');
// console.log('filtertaglistdestination:',filtertaglistdestination);

// Get filter panel. 
const filterpanel = document.querySelector('div#container section.blog div.grid div.body div.filterpanel');
// console.log('filterpanel:',filterpanel);

// Get destination for filter groups in filter panel. 
const filtergroupsdestination = document.querySelector('div#container section.blog div.grid div.body div.filterpanel div.panelbody ul.filterlist');
// console.log('filtergroupsdestination:',filtergroupsdestination);

// Get group headers in filter panel. 
// const filtergroupheaders = document.querySelectorAll('div#container section.blog div.grid div.body div.filterpanel div.panelbody ul.filterlist li.filtergroup h2.filterhead');
// console.log('filtergroupheaders:',filtergroupheaders);


/*****/


// Activate blog post filtering. 
activateBlogFilters();


/*****/


// Activate blog post filtering. 
function activateBlogFilters() {

	// Activate blog post search. 
	if(searchqueryfield) activateBlogSearch();

	// Load groups of post filters. 
	if(filterpanel) loadFilterGroups();

	/****/

	// Activate blog post search. 
	function activateBlogSearch() {

		// Activate input field to search blog posts. 
		searchqueryfield.addEventListener('input',searchBlogPosts);
		searchclearbtn.addEventListener('click',clearSearchQuery);

		// Clear any previous search query. 
		clearSearchQuery();

		/***/

		// Show blog posts that match given search query. 
		function searchBlogPosts() {

			// Access loaded blog post cards. 
			let blogpostcards = document.querySelectorAll('div#container section.blog div.grid div.body div.posts ul.pagelist li.postpage ul.postlist li.postcard');
			// console.log('Blog post cards:',blogpostcards);

			// Initialize number of matching posts. 
			let numMatchingPosts = 0;
		
			// Go thru all blog posts. 
			for(let postcard of blogpostcards) {

				// Get project id for given post. 
				let projectid = postcard.getAttribute('data-projectid').toUpperCase();

				// Check for matching post. 
				let matchFound = checkForMatch(projectid);

				// Increment number of matching posts. 
				if(matchFound) numMatchingPosts++;

				// Update visibility state of post based on match. 
				updatePostState(postcard, matchFound);
			}

			// Show label if no search results found. 
			if(numMatchingPosts==0) emptysearchlabel.classList.add('on');
			// Hide label if any search results found. 
			else emptysearchlabel.classList.remove('on');

			/**/

			// Check for matching post. 
			function checkForMatch(projectid) {

				// Get search query. 
				let searchquery = searchqueryfield.value.toUpperCase();
				// Get list of words in search query. 
				let searchquerywords = searchquery.split(' ');
				// console.log('Searching posts...', searchquery, searchquerywords);

				// Check for matching post (by full query). 
				let matchFullQuery = projectid.includes(searchquery);
				// Check for matching post (by each word). 
				let matchEveryWord = checkForMatchEveryWord(projectid,searchquerywords);

				// Compile match criteria. 
				return (matchFullQuery || matchEveryWord);

				/**/

				// Check for matching post (by each word). 
				function checkForMatchEveryWord(projectid,searchquerywords) {
			
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

		// Clear search query. 
		function clearSearchQuery() {

			// Clear search query. 
			searchqueryfield.value = '';

			// Show all blog posts. 
			searchBlogPosts();
		}
	}
}

// Load list of post filter groups. 
function loadFilterGroups() {
	// console.log('Loading list of post filter groups');

	// Initialize layout for filter groups. 
	let filtergroupslayout = '';

	// Go thru each filter group. 
	for(let filtergroup of postFilterData) {
		// console.log('Filter group:',filtergroup);
		
		// Add filter group to layout. 
		filtergroupslayout += `
		<!-- filtergroup -->
		<li class="filtergroup open" data-filtertypeid="${filtergroup.filtergroupid}">

			<!-- filterhead -->
			<h2 class="filterhead">

				<!-- caption -->
				<span class="caption">${filtergroup.filtername}</span>
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

			</h2>
			<!-- /filterhead -->

			<!-- filterbody -->
			<div class="filterbody">

				<!-- itemslist -->
				<ul class="itemslist">${ createFilterItemsListLayout(filtergroup) }</ul>
				<!-- /itemslist -->
				
			</div>
			<!-- /filterbody -->
			
		</li>
		<!-- /filtergroup -->`;
	}

	// Display filter groups in filter panel. 
	filtergroupsdestination.innerHTML = filtergroupslayout;

	// Activate filter headers in filter panel. 
	activateFilterHeads();

	// Activate filter items in filter panel. 
	activateFilterItems();

	/****/

	// Create layout for filter items list. 
	function createFilterItemsListLayout(filtergroup) {

		// Get filter group id. 
		let filtergroupid = filtergroup.filtergroupid;

		// Get list of filter items. 
		let filteritemslist = filtergroup.filteritems;
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

		/***/

		// Create layout for given filter item. 
		function createFilterItemLayout(filteritem) {

			// Get value of current filter item. 
			let itemvalue = filteritem.value;
			// console.log('Filter item value:',itemvalue);

			// Get name of current filter item. 
			let itemname = filtergroup.filteritemnamer(itemvalue);
			// console.log('Filter item name:',itemname);

			// Create unique id for current filter item. 
			let uniqueitemid = filtergroupid + itemvalue;

			// Compile layout for filter item. 
			return `
			<!-- filteritem -->
			<li class="filteritem" data-filteritemvalueid="${itemvalue}" title="${itemvalue}">
	
				<!-- checkbox -->
				<input class="checkbox" type="checkbox" id="${uniqueitemid}">
				<!-- /checkbox -->
	
				<!-- front -->
				<label class="front" for="${uniqueitemid}">
	
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
				<!-- /front -->
				
			</li>
			<!-- /filteritem -->`;
		}
	}

	// Activate filter group headers in filter panel. 
	function activateFilterHeads() {

		// Get loaded headers in filter panel. 
		let filtergroupheaders = filtergroupsdestination.querySelectorAll('li.filtergroup h2.filterhead');
	
		// Go thru each header in filter panel. 
		for(let header of filtergroupheaders) {
	
			// Enable header clicks to toggle group in filter panel. 
			header.addEventListener('click',toggleFilterGroup);
		}

		/***/

		// Toggle group in post filter panel. 
		function toggleFilterGroup(event) {
		
			// Get filter group header. 
			let filtergroupheader = event.currentTarget;
		
			// Get filter group. 
			let filtergroup = filtergroupheader.parentElement;
		
			// Toggle filter group. 
			filtergroup.classList.toggle('open');
		}
	}

	// Activate filter group items in filter panel. 
	function activateFilterItems() {
	
		// Get loaded items in filter panel. 
		let filterpanelitems = filtergroupsdestination.querySelectorAll('li.filtergroup div.filterbody ul.itemslist li.filteritem input.checkbox');
	
		// Go thru each item in filter panel. 
		for(let checkbox of filterpanelitems) {
	
			// Enable header clicks to toggle group in filter panel. 
			checkbox.addEventListener('input',applySelectedFilters);
		}
	}
}

// Toggle post filter panel. 
function toggleFilterPanel() {

	// Toggle filter panel. 
	filterpanel.classList.toggle('open');
}

// Clear all applied filter items. 
function clearAllAppliedFilters() {

	// Get loaded items in filter panel. 
	let filterpanelcheckboxes = filtergroupsdestination.querySelectorAll('li.filtergroup div.filterbody ul.itemslist li.filteritem input.checkbox');

	// Go thru each item in filter panel. 
	for(let checkbox of filterpanelcheckboxes) {

		// Uncheck checkbox for current filter item. 
		checkbox.checked = false;
	}

	// Apply selected filter items to blog posts. 
	applySelectedFilters();
}

// Apply selected filter items. 
function applySelectedFilters() {

	// Initialize list of selected filter items. 
	let selectedfilteritems = [];

	// Get checkboxes for loaded filter items in filter panel. 
	let filterpanelcheckboxes = filtergroupsdestination.querySelectorAll('li.filtergroup div.filterbody ul.itemslist li.filteritem input.checkbox');

	// Go thru each checkbox in filter panel. 
	for(let checkbox of filterpanelcheckboxes) {

		// Check if filter item selected. 
		if(checkbox.checked) {
			
			// Get box for filter item. 
			let filteritembox = checkbox.parentElement;
			let filtergroupbox = filteritembox.parentElement.parentElement.parentElement;
			// console.log('Filter group box:',filtergroupbox);
			// console.log('Filter item box:',filteritembox);
			console.log('Filter item checkbox:',checkbox);

			// Get ids for selected filter item. 
			let filtertypeid = filtergroupbox.getAttribute('data-filtertypeid');
			let filtervalueid = filteritembox.getAttribute('data-filteritemvalueid');
			console.log('Filter item ids:',filtertypeid,filtervalueid);

			// Get caption for selected filter item. 
			let filteritemcaptionbox = filteritembox.querySelector('span.caption');
			let filteritemcaption = filteritemcaptionbox.textContent;
			console.log('Filter item caption:',filteritemcaption,filteritemcaptionbox);

			// Get unique id for selected filter item. 
			// let filteritemuniqueid = checkbox.id;
			// let filteritemuniqueid = filtertypeid + filtervalueid;
			// console.log('Filter item unique id:',filteritemuniqueid);

			// Save to list: details of selected filter item. 
			selectedfilteritems.push({
				filtertypeid:filtertypeid,
				filtervalueid:filtervalueid,
				caption:filteritemcaption,
			});
			// console.log('filteritemuniqueid:',filteritemuniqueid);
		}
	}

	// Create layout for list of filter tags. 
	let filtertaglistlayout = selectedfilteritems.map(createFilterTagLayout).join('');
	// console.log('filtertaglistlayout:',filtertaglistlayout);

	// Display layout for list of filter tags. 
	filtertaglistdestination.innerHTML = filtertaglistlayout;
	console.log('Selected filter items:',selectedfilteritems);

	// Apply selected filter values to loaded blog posts. 
	loadBlog(selectedfilteritems);

	/****/

	// Create layout for filter tag. 
	function createFilterTagLayout(filteritem) {

		// Get unique id of selected filter item. 
		let filteritemuniqueid = filteritem.filtertypeid + filteritem.filtervalueid;

		// Get caption for selected filter item. 
		let filteritemcaption = filteritem.caption;

		// 
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


/*****/


// // TODO: Remove given filter tag from list of applied filter items. 
// function removeFilterTag(/* filteritemtag */) {
// 	// console.log('filteritemtag:',filteritemtag);

// 	// TODO: Uncheck associated item in fiter panel. 
// 	// selectedfilteritems.remove;

// 	// Apply selected filter items. 
// 	applySelectedFilters();
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
