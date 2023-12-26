


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


// Define post filter groups. 
const postFilterGroups = [
	{
		filterid:'authorid',
		filtername:'Author',
		filtercriteria:[
			{
				criterionid:'authora',
				criterionname:'Author A',
			},
			{
				criterionid:'authorb',
				criterionname:'Author B',
			},
			{
				criterionid:'authorc',
				criterionname:'Author C',
			},
		],
	},
	{
		filterid:'categoryid',
		filtername:'Category',
		filtercriteria:[
			{
				criterionid:'categorya',
				criterionname:'Category A',
			},
			{
				criterionid:'categoryb',
				criterionname:'Category B',
			},
			{
				criterionid:'categoryc',
				criterionname:'Category C',
			},
		],
	},
	{
		filterid:'collectionid',
		filtername:'Collection',
		filtercriteria:[
			{
				criterionid:'collectiona',
				criterionname:'Collection A',
			},
			{
				criterionid:'collectionb',
				criterionname:'Collection B',
			},
			{
				criterionid:'collectionc',
				criterionname:'Collection C',
			},
		],
	},
	{
		filterid:'datecreated',
		filtername:'Started',
		filtercriteria:[
			{
				criterionid:'datecreateda',
				criterionname:'Started A',
			},
			{
				criterionid:'datecreatedb',
				criterionname:'Started B',
			},
			{
				criterionid:'datecreatedc',
				criterionname:'Started C',
			},
		],
	},
	// {
	// 	filterid:'xyz',
	// 	filtername:'Xyz',
	// 	filtercriteria:[],
	// },
];


/*****/


// Activate blog functionality. 
activateBlog();


/*****/


// Activate blog functionality. 
function activateBlog() {

	// Access previously loaded blog post cards. 
	let blogpostcards = document.querySelectorAll('div#container section.blog div.grid div.body div.posts ul.pagelist li.postpage ul.postlist li.postcard');

	// Activate previews for loaded blog post cards. 
	activatePostPreviews();

	// Activate blog post search. 
	if(searchqueryfield) activateBlogSearch();

	// Load groups of post filters. 
	if(filterpanel) loadFilterGroups();

	// Enable keyboard shortcuts. 
	enableShortcutKeys();

	/****/

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

		/***/

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

		/***/

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

	// Initialize layout for filter groups. 
	let filtergrouplayout = '';

	// Add each filter group to layout. 
	for(let filtergroup of postFilterGroups) {
		
		// Add filter group to layout. 
		filtergrouplayout += `
		<!-- filtergroup -->
		<li class="filtergroup open" data-filterid="${filtergroup.filterid}">

			<!-- filterhead -->
			<h3 class="filterhead" onclick="toggleFilterGroup(this)">

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

				<!-- criterialist -->
				<ul class="criterialist">${ createCriteriaLayout(filtergroup.filtercriteria) }</ul>
				<!-- /criterialist -->
				
			</div>
			<!-- /filterbody -->
			
		</li>
		<!-- /filtergroup -->`;
	}

	// Display filter groups in filter panel. 
	filtergroupsdestination.innerHTML = filtergrouplayout;

	/****/

	// Create layout for criteria list. 
	function createCriteriaLayout(criterialist) {

		// Initialize layout for criteria list. 
		let criterialistlayout = '';

		// Go thru each criterion in given list. 
		for(let criterion of criterialist) {

			// Add criterion to layout. 
			criterialistlayout += `
			<!-- criterion -->
			<li class="criterion" data-criterionid="${criterion.criterionid}">
	
				<!-- checkbox -->
				<input class="checkbox" type="checkbox" id="${criterion.criterionid}">
				<!-- /checkbox -->
	
				<!-- front -->
				<label class="front" for="${criterion.criterionid}">
	
					<!-- icon -->
					<svg class="icon check" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/>
					</svg>
					<!-- /icon -->
	
					<!-- caption -->
					<span class="caption">${criterion.criterionname}</span>
					<!-- /caption -->
	
					<!-- matchcount -->
					<span class="matchcount"></span>
					<!-- /matchcount -->
	
				</label>
				<!-- /front -->
				
			</li>
			<!-- /criterion -->`;
		}

		// Return layout for criteria list. 
		return criterialistlayout;
	}
}

// Toggle post filter panel. 
function toggleFilterPanel() {

	// Toggle filter panel. 
	filterpanel.classList.toggle('open');
}

// Toggle post filter group. 
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

	/****/

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
