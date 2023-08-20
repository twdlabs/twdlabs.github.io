


// Get blog destination. 
const blogDestination = document.querySelector('div#container section.blog div.grid ul.postlist');
const blogArchiveDestination = document.querySelector('div#container section.blog div.grid ul.postlist.archive');

// Initialize source of blog post cards. 
let blogpostcards;

// Get input field for filter query. 
const postfilterfield = document.querySelector('div#container section.blog div.grid div.filter input#postfilter');
const postfilterfieldclearbtn = document.querySelector('div#container section.blog div.grid div.filter label.clearbtn');

// Get label for empty search results. 
const emptysearchlabel = document.querySelector('div#container section.blog div.grid div.emptylabel');


/*****/


// Load blog posts. 
loadBlog();


/*****/


// Load blog posts. 
function loadBlog() {
	// console.log('Loading blog...');

	// Get list of primary posts. 
	let primaryPosts = getPrimaryLinks();
	// Get list of remaining archive posts. 
	let archivePosts = getRemainingLinks();
	// console.log('Primary posts', primaryPosts.length, primaryPosts);
	// console.log('Remaining posts', archivePosts.length, archivePosts);

	// Get layout for primary posts. 
	let primaryLayout = createBlogPostsLayout(primaryPosts);
	// Get layout for archive posts. 
	let archiveLayout = createBlogPostsLayout(archivePosts);
	
	// Add layout to blog section. 
	blogDestination.innerHTML = primaryLayout;
	// blogDestination.insertAdjacentHTML('beforeend',primaryLayout);

	// Add layout to blog archive section. 
	blogArchiveDestination.innerHTML = archiveLayout;
	// blogArchiveDestination.insertAdjacentHTML('beforeend',archiveLayout);


	// Get all blog post cards (after loading). 
	blogpostcards = document.querySelectorAll('div#container section.blog div.grid ul.postlist li.postcard');

	// Activate preview panels for blog post cards. 
	activatePreviewPanels();

	// Activate blog post filter. 
	activateBlogFilter();

	/****/
	
	// Get list of primary links from link matrix. 
	function getPrimaryLinks() {

		// Get original link matrix. 
		// let linkmatrix = projectLinkData.map(   ( groupset ) => (  groupset.map( (group)=>(group.grouplist) )  )   );
		let linkgroups = projectLinkData.map( group => group.grouplist );
		// console.log('linkgroups:',linkgroups);

		// Initialize list of primary links. 
		let linklist = [];

		// Go thru each link group. 
		for(let linkgroup of linkgroups) {

			// Go thru each link in group list. 
			for(let linkitem of linkgroup) {

				// Get folder name from link item. 
				let foldername = linkitem.linkurl.substring(3);
				
				// Add folder name of link to list of primary links. 
				linklist.push( foldername );
			}
		}

		// Return sorted list of primary links. 
		return linklist.sort();
	}
	
	// Get list of remaining links for archive. 
	function getRemainingLinks() {

		// Initialize result list. 
		let result = [];

		// Go thru all project folder names. 
		for(let foldername of projectNames) {

			// Check for primary project. 
			let isPrimaryPost = primaryPosts.includes(foldername);

			// Add non-primary project to result list. 
			if(!isPrimaryPost) result.push(foldername);
		}

		// Return result list. 
		return result;
	}

	// Create layout for blog posts. 
	function createBlogPostsLayout(postlist) {

		// Initialize resulting layout. 
		let result = '';

		// Add project link to layout result. 
		for(let i in postlist) {
	
			// Get folder name for given post. 
			let foldername = postlist[i]
			// Skip current page (no infinite recursion). 
			// if(foldername=='desktop') continue;
	
			// Add blog card to layout result. 
			result += createBlogCard(foldername);
		}

		// Return resulting layout. 
		return result;

		/***/

		// Create blog card. 
		function createBlogCard(foldername,previewIncluded) {
	
			// 
			if(!previewIncluded) return `
			<!-- postcard -->
			<li class="postcard" data-foldername="${foldername}">
	
				<!-- preview -->
				<div class="preview">
	
					<!-- previewlink -->
					<a class="previewlink" href="../${foldername}/index.html" target="_blank"></a>
					<!-- /previewlink -->
	
				</div>
				<!-- /preview -->
	
				<!-- namelink -->
				<a class="namelink" href="../${foldername}/index.html" target="_blank">${foldername}</a>
				<!-- /namelink -->
	
			</li>
			<!-- /postcard -->`;
	
			// 
			return `
			<!-- postcard -->
			<li class="postcard" data-foldername="${foldername}">
	
				<!-- preview -->
				<div class="preview">
	
					<!-- preview -->
					<iframe class="preview x3" src="../${foldername}/index.html"></iframe>
					<!-- /preview -->
	
					<!-- previewlink -->
					<a class="previewlink" href="../${foldername}/index.html" target="_blank"></a>
					<!-- /previewlink -->
	
				</div>
				<!-- /preview -->
	
				<!-- namelink -->
				<a class="namelink" href="../${foldername}/index.html" target="_blank">${foldername}</a>
				<!-- /namelink -->
	
			</li>
			<!-- /postcard -->`;
		}
	}

	// Activate preview panels for blog post cards. 
	function activatePreviewPanels() {
		
		// Go thru blog post cards. 
		for(let card of blogpostcards) {

			// Activate mouse events for given card (w/ no up/down propagation). 
			card.addEventListener('mouseenter',openPreview);
			card.addEventListener('mouseleave',closePreview);

			// Activate mouse events for given card (w/ up/down propagation). 
			// card.addEventListener('mouseover',openPreview);
			// card.addEventListener('mouseout',closePreview);
		}

		// Open preview of blog post. 
		function openPreview(event) {
			// console.log('Opening preview...',event.target);

			// Get post card. 
			let postcard = event.currentTarget;
			// Get folder name of post. 
			let foldername = postcard.getAttribute('data-foldername');

			// Get preview panel. 
			let previewpanel = postcard.querySelector('div.preview');

			// Add preview iframe to preview panel.
			previewpanel.insertAdjacentHTML('afterbegin',`
			<!-- preview -->
			<iframe class="preview x3" src="../${foldername}/index.html"></iframe>
			<!-- /preview -->`);
		}

		// Close preview of blog post. 
		function closePreview(event) {
			// console.log('Closing preview.',event.target);

			// Get post card. 
			let postcard = event.currentTarget;

			// Get iframe in preview panel. 
			let previewpaneliframe = postcard.querySelector('div.preview iframe.preview');

			// Remove preview iframe from preview panel.
			previewpaneliframe.remove();
		}
	}

	// Activate blog post filter. 
	function activateBlogFilter() {

		// Activate input field to filter blog posts. 
		postfilterfield.value = '';
		postfilterfield.addEventListener('input',filterBlogPosts);
		postfilterfieldclearbtn.addEventListener('click',filterBlogPosts);

		/***/

		// Filter blog posts. 
		function filterBlogPosts(event) {

			// Initialize number of matching posts. 
			let numMatchingPosts = 0;

			// Get filter query. 
			let filterquery = (postfilterfield.value).toUpperCase();
			// Get list of filter queries. 
			let filterquerywords = filterquery.split(' ');
			console.log('Filtering...', filterquery, filterquerywords);
		
			// Go thru all blog posts. 
			for(let postcard of blogpostcards) {

				// Get folder name of given post. 
				let foldername = postcard.getAttribute('data-foldername').toUpperCase();

				// Check for matching post (by full query). 
				let matchesFullQuery = checkForMatchFullQuery(foldername,filterquery);
				// Check for matching post (by each word). 
				let matchesEveryWord = checkForMatchEachWord(foldername,filterquerywords);
				// Compile match criteria. 
				let matchCriteriaMet = matchesFullQuery || matchesEveryWord;
				if(matchCriteriaMet) numMatchingPosts++;

				// Update visibility state of post based on match. 
				updatePostState(postcard, matchCriteriaMet);
			}

			// Show label if no search results found. 
			if(numMatchingPosts==0) emptysearchlabel.classList.add('on');
			// Hide label if search results found. 
			else emptysearchlabel.classList.remove('on');

			/**/

			// Check for matching post (by full query). 
			function checkForMatchFullQuery(foldername,filterquery) {

				// 
				return foldername.includes(filterquery)
			}

			// Check for matching post (by each word). 
			function checkForMatchEachWord(foldername,filterquerywords) {
		
				// Go thru all words in filter query. 
				for(let word of filterquerywords) {

					let wordPresent = foldername.includes(word);

					// Return false if any query word is missing. 
					if(!wordPresent) return false;
				}

				// Return true if passed (no query words missing). 
				return true;
			}

			// Update visibility state of post based on match. 
			function updatePostState(postcard,matched) {

				// Show matching post. 
				if(matched) {
					postcard.classList.remove('x');
				}

				// Hide non-matching post. 
				else {
					postcard.classList.add('x');
				}
			}
		}
	}
}

// Toggle section like accordion. 
function toggleLikeAccordion(section) {

	// Check if section already open. 
	let sectionOpen = !section.classList.contains('gone');
	// console.log('Section open:',sectionOpen);

	// Get full height of section. 
	let h = section.scrollHeight;
	// console.log('h:',h);

	// Close if already open
	if(sectionOpen) {
		section.style.maxHeight = 0;
		section.classList.add('gone');
	}
	
	// Open if not already open
	else {
		section.style.maxHeight = `${h}px`;
		section.classList.remove('gone');
	}

	// Check if section already open. 
	sectionOpen = !section.classList.contains('gone');
	// console.log('Section open:',sectionOpen);
}
