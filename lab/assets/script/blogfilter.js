


// Activate blog functionality. 
activateBlog();


/*****/


// Activate blog functionality. 
function activateBlog() {

	// Access previously loaded blog post cards. 
	let blogpostcards = document.querySelectorAll('div#container section.blog div.grid div.body div.posts ul.postlist li.postcard');

	// Activate previews for loaded blog post cards. 
	activatePostPreviews();

	// Activate blog post search. 
	if(searchqueryfield) activateBlogSearch();

	// Activate keyboard shortcuts. 
	activateShortcuts();

	/***/

	// Activate previews for blog post cards. 
	function activatePostPreviews() {
		
		// Go thru blog post cards. 
		for(let card of blogpostcards) {
	
			// Activate mouse events for given card (without up/down propagation). 
			card.addEventListener('mouseenter',openPreview);
			card.addEventListener('mouseleave',closePreview);
	
			// Activate mouse events for given card (with up/down propagation). 
			// card.addEventListener('mouseover',openPreview);
			// card.addEventListener('mouseout',closePreview);
		}

		/**/

		// Create preview panel for blog post card. 
		function createPreviewPanel(projectid) {
		
			// Get url of page to be previewed. 
			let pageurl = getRelativeUrl(`../${projectid}/index.html`);
		
			// Compile preview panel. 
			return `
			<!-- preview -->
			<iframe class="preview" src="${pageurl}"></iframe>
			<!-- /preview -->`;
		}
	
		// Open preview of blog post. 
		function openPreview(event) {
			// console.log('Opening preview...',event.target);
	
			// Get card for selected post. 
			let selectedcard = event.currentTarget;
			// Get project id of selected post. 
			let projectid = selectedcard.getAttribute('data-projectid');
	
			// Get card's preview panel. 
			let previewpanel = selectedcard.querySelector('div.preview');
	
			// Add preview iframe to preview panel.
			previewpanel.insertAdjacentHTML('afterbegin', createPreviewPanel(projectid) );

			/**/
		}
	
		// Close preview of blog post. 
		function closePreview(event) {
			// console.log('Closing preview.',event.target);
	
			// Get card for selected post. 
			let selectedcard = event.currentTarget;
	
			// Get preview panel of selected card. 
			let previewpanel = selectedcard.querySelector('div.preview');
			// console.log('previewpanel:',previewpanel);
			// Get iframe inside preview panel. 
			let previewpaneliframe = previewpanel.querySelector('iframe.preview');
			// console.log('previewpaneliframe:',previewpaneliframe);
	
			// Remove iframe from preview panel.
			previewpanel.innerHTML = '';
			// previewpaneliframe.remove();
		}
	}

	// Activate blog post search. 
	function activateBlogSearch() {

		// Activate input field to search blog posts. 
		searchqueryfield.addEventListener('input',searchBlogPosts);
		searchclearbtn.addEventListener('click',clearSearchQuery);

		// Clear any previous search query. 
		clearSearchQuery();

		/**/

		// Show blog posts that match given search query. 
		function searchBlogPosts() {

			// Initialize number of matching posts. 
			let numMatchingPosts = 0;

			// Get search query. 
			let searchquery = searchqueryfield.value.toUpperCase();
			// Get list of words in search query. 
			let searchquerywords = searchquery.split(' ');
			console.log('Searching posts...', searchquery, searchquerywords);
		
			// Go thru all blog posts. 
			for(let postcard of blogpostcards) {

				// Get project id for given post. 
				let projectid = postcard.getAttribute('data-projectid').toUpperCase();

				// Check for matching post (by full query). 
				let matchesFullQuery = checkForMatchByFullQuery(projectid,searchquery);
				// Check for matching post (by each word). 
				let matchesEveryWord = checkForMatchByEachWord(projectid,searchquerywords);
				// Compile match criteria. 
				let matchCriteriaMet = matchesFullQuery || matchesEveryWord;
				if(matchCriteriaMet) numMatchingPosts++;

				// Update visibility state of post based on match. 
				updatePostState(postcard, matchCriteriaMet);
			}

			// Show label if no search results found. 
			if(numMatchingPosts==0) emptysearchlabel.classList.add('on');
			// Hide label if any search results found. 
			else emptysearchlabel.classList.remove('on');

			/**/

			// Check for matching post (by full query). 
			function checkForMatchByFullQuery(projectid,searchquery) {
				return projectid.includes(searchquery)
			}

			// Check for matching post (by each word). 
			function checkForMatchByEachWord(projectid,searchquerywords) {
		
				// Go thru all words in search query. 
				for(let word of searchquerywords) {

					let wordPresent = projectid.includes(word);

					// Return false if any query word is missing. 
					if(!wordPresent) return false;
				}

				// Return true if passed (no query words missing). 
				return true;
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

	// Activate keyboard shortcuts. 
	function activateShortcuts() {
	
		// Enable respons to keys pressed on page. 
		document.addEventListener('keyup',checkKeys);
	
		/**/
	
		// Check keys. 
		function checkKeys(event) {
			console.log(event);

			// Get focal point of event. 
			let eventlocation = event.target;
	
			// Disregard when typing in text field. 
			if(eventlocation.tagName.toLowerCase()=='input') return;
	
			// Respond to 'S' key. 
			else if(event.keyCode==83) togglePostStyleById('small');
	
			// Respond to 'B' key. 
			else if(event.keyCode==66) togglePostStyleById('large');
	
			// Respond to 'L' key. 
			else if(event.keyCode==76) togglePostStyleById('listed');
	
			// Respond to left arrow key. 
			else if(event.keyCode==37) goPrevPage();
	
			// Respond to right arrow key. 
			else if(event.keyCode==39) goNextPage();
		}
	}
}

// Toggle filter panel. 
function toggleFilterPanel() {

	// Toggle filter panel. 
	filterpanel.classList.toggle('open');
}

// TODO: Add filter groups. 
function addFilterGroups() {

	// 
}

// Toggle filter group. 
function toggleFilterGroup(header) {

	// Get filter group. 
	let filtergroup = header.parentElement;

	// Toggle filter group. 
	filtergroup.classList.toggle('open');
}

// Toggle section like accordion. 
function toggleLikeAccordion(section,sectionbin) {

	// Check if section already folded. 
	let sectionfolded = section.classList.contains('folded');
	// console.log('Section folded:',sectionfolded);

	// Get full height of section bin. 
	let fullheight = sectionbin.scrollHeight;
	// console.log('Full height:',fullheight);
	
	// Open if already folded. 
	if(sectionfolded) {
		section.classList.remove('folded');
		sectionbin.style.maxHeight = `${fullheight}px`;
	}

	// Close if not already folded. 
	else {
		section.classList.add('folded');
		sectionbin.style.maxHeight = 0;
	}
}

// TODO: Apply filter. 
function addFilter() {

	// Update blog posts. 

	// Update filter items. 
}

// TODO: Un-apply filter. 
function removeFilter(filteritem) {

	// Update blog posts. 

	// Update filter items. 
}

// TODO: Show blog posts that match given filter query. 
function filterBlogPosts() {

	// 

	/**/

	// Update visibility state of post based on match. 
	function updatePostState(postcard,matchesQuery) {

		// Show matching post. 
		if(matchesQuery) {
			postcard.classList.remove('gone');
		}

		// Hide non-matching post. 
		else {
			postcard.classList.add('gone');
		}
	}
}
