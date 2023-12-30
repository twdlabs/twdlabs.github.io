


// Get input field for search query. 
const searchqueryfield = document.querySelector('div#container section.blog div.grid div.head div.modpanel input#searchquery');
// console.log('searchqueryfield:',searchqueryfield);

// Get clear button for search query. 
const searchclearbtn = document.querySelector('div#container section.blog div.grid div.head div.modpanel label.searchclearbtn');
// console.log('searchclearbtn:',searchclearbtn);

// Get label for empty search results. 
const emptysearchlabel = document.querySelector('div#container section.blog div.grid div.body div.posts div.emptylabel');
// console.log('emptysearchlabel:',emptysearchlabel);


// Get filter panel. 
const filterpanel = document.querySelector('div#container section.blog div.grid div.body div.filterpanel');
// console.log('filterpanel:',filterpanel);

// Get destination for filter groups in filter panel. 
const filtergroupsdestination = document.querySelector('div#container section.blog div.grid div.body div.filterpanel ul.filterlist');
// console.log('filtergroupsdestination:',filtergroupsdestination);

// Get group headers in filter panel. 
// const filterpanelheaders = document.querySelectorAll('div#container section.blog div.grid div.body div.filterpanel ul.filterlist li.filtergroup h3.filterhead');
// console.log('filterpanelheaders:',filterpanelheaders);


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

	// Enable keyboard shortcuts. 
	enableShortcutKeys();

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

	// Enable keyboard shortcuts. 
	function enableShortcutKeys() {
	
		// Enable respons to keys pressed on page. 
		document.addEventListener('keyup',checkKeys);
	
		/***/
	
		// Check keys. 
		function checkKeys(event) {
			console.log(event);

			// Get focal point of event. 
			let eventlocation = event.target;
			// Check if typing in text field. 
			let istypingtext = eventlocation.tagName.toLowerCase()=='input';
			// Disregard when typing in text field. 
			if(istypingtext) return;
	
			// Respond to 'S' key. 
			else if(event.keyCode==83) setLayoutStyleById(0);
	
			// Respond to 'B' key. 
			else if(event.keyCode==66) setLayoutStyleById(1);
	
			// Respond to 'L' key. 
			else if(event.keyCode==76) setLayoutStyleById(2);
	
			// Respond to left arrow key. 
			else if(event.keyCode==37) goPrevPage();
	
			// Respond to right arrow key. 
			else if(event.keyCode==39) goNextPage();
		}
	}
}

// Load list of post filter groups. 
function loadFilterGroups() {
	// console.log('Loading list of post filter groups');

	// Initialize layout for filter groups. 
	let filtergrouplayout = '';

	// Go thru each filter group. 
	for(let filtergroup of postFilterData) {
		// console.log('Filter group:',filtergroup);
		
		// Add filter group to layout. 
		filtergrouplayout += `
		<!-- filtergroup -->
		<li class="filtergroup open" data-filterid="${filtergroup.filterid}">

			<!-- filterhead -->
			<h3 class="filterhead">

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

			</h3>
			<!-- /filterhead -->

			<!-- filterbody -->
			<div class="filterbody">

				<!-- itemslist -->
				<ul class="itemslist">${ createCriteriaListLayout(filtergroup.filteritems) }</ul>
				<!-- /itemslist -->
				
			</div>
			<!-- /filterbody -->
			
		</li>
		<!-- /filtergroup -->`;
	}

	// Display filter groups in filter panel. 
	filtergroupsdestination.innerHTML = filtergrouplayout;

	// Activate filter group headers in filter panel. 
	activateFilterHeads();

	// Activate filter group items in filter panel. 
	activateFilterItems();

	/****/

	// Activate filter group headers in filter panel. 
	function activateFilterHeads() {

		// Get loaded headers in filter panel. 
		let filterpanelheaders = filtergroupsdestination.querySelectorAll('li.filtergroup h3.filterhead');
	
		// Go thru each header in filter panel. 
		for(let header of filterpanelheaders) {
	
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
		for(let inputitems of filterpanelitems) {
	
			// Enable header clicks to toggle group in filter panel. 
			inputitems.addEventListener('input',checkFilterItem);
		}

		/***/

		// Check post filter item. 
		function checkFilterItem(event) {

			// Get input checkbox. 
			let checkbox = event.currentTarget;

			// Check if checkbox is on. 
			let checkboxOn = checkbox.checked;
			console.log('Checkbox on:',checkboxOn,checkbox);

			// Apply filter item (if checkbox on). 
			if(checkboxOn) applyFilterItem();

			// Un-apply filter item (if checkbox not on). 
			else unapplyFilterItem();

			/**/

			// TODO: Apply filter item to blog posts. 
			function applyFilterItem() {

				// TODO: Get value of filter item. 
			
				// TODO: Update blog posts. 
			
				// TODO: Update filter items. 
			}
			
			// TODO: Un-apply filter item to blog posts. 
			function unapplyFilterItem(filteritem) {
			
				// TODO: Update blog posts. 
			
				// TODO: Update filter items. 
			}
		}
	}

	// Create layout for filter items list. 
	function createCriteriaListLayout(filteritemslist/* ,getNameById */) {
		// console.log('Creating layout for filter items list',filteritemslist);

		// Initialize layout for filter items list. 
		let filteritemslistlayout = '';

		// Go thru each filter item in given list. 
		for(let filteritem of filteritemslist) {
			// console.log('Filter item:',filteritem);

			// Get value of current filter item. 
			let itemvalue = filteritem.value;
			// console.log('Filter item value:',itemvalue);

			// Add filter item to layout. 
			filteritemslistlayout += `
			<!-- filteritem -->
			<li class="filteritem" data-value="${itemvalue}">
	
				<!-- checkbox -->
				<input class="checkbox" type="checkbox" id="${itemvalue}">
				<!-- /checkbox -->
	
				<!-- front -->
				<label class="front" for="${itemvalue}">
	
					<!-- icon -->
					<svg class="icon check" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/>
					</svg>
					<!-- /icon -->
	
					<!-- caption -->
					<span class="caption">${itemvalue}</span>
					<!-- /caption -->
	
					<!-- matchcount -->
					<span class="matchcount">${ filteritem.frequency}</span>
					<!-- /matchcount -->
	
				</label>
				<!-- /front -->
				
			</li>
			<!-- /filteritem -->`;
		}

		// Return layout for criteria list. 
		return filteritemslistlayout;
	}
}

// Toggle post filter panel. 
function toggleFilterPanel() {

	// Toggle filter panel. 
	filterpanel.classList.toggle('open');
}
