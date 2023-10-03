


// Get destination for featured posts. 
const featuredPostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts ul.postlist.featured');
console.log('featuredPostsDestination:',featuredPostsDestination);
// Get destination for category posts. 
const categoryPostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts ul.postlist.category');
console.log('categoryPostsDestination:',categoryPostsDestination);
// Get destination for archive posts. 
const archivePostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts ul.postlist.archive');
console.log('archivePostsDestination:',archivePostsDestination);

// Initialize source of blog post cards. 
let blogpostcards;

// Get input field for filter query. 
const postfilterfield = document.querySelector('div#container section.blog div.grid div.head div.filter input#postfilter');
const postfilterfieldclearbtn = document.querySelector('div#container section.blog div.grid div.head div.filter label.clearbtn');

// Get label for empty search results. 
const emptysearchlabel = document.querySelector('div#container section.blog div.grid div.body div.posts div.emptylabel');


/*****/


// Set flag for memory load (previews on by default). 
let blockPreviews = false;


/*****/


// Load blog posts. 
loadBlog();


/*****/


// Load blog posts. 
function loadBlog() {
	console.log('Loading blog...');

	// Load featured posts (if on home page). 
	loadFeaturedPosts();
	// Load category posts. 
	loadCategoryPosts();
	// Load archive posts (if not on home page). 
	loadArchivePosts();

	// Activate blog functionality. 
	activateBlog();

	/****/

	// Create layout for blog posts. 
	function createBlogPostsLayout(postlist,previewsOn) {
	
		// Initialize resulting layout. 
		let result = '';
	
		// Add project link to layout result. 
		for(let post of postlist) {
	
			// Show message for invalid project. 
			if(!post) {
				console.warn('No project post found for given project');
				continue;
			}
	
			// Add blog card to layout result. 
			result += createBlogCard(post);
		}
	
		// Return resulting layout. 
		return result;
	
		/***/
	
		// Create blog card. 
		function createBlogCard(post) {
	
			// Get project id of given post. 
			let projectid = post.projectid;
			// Get project name of given post. 
			let projectname = post.projectname;
	
			// Get url of page to be added. 
			let pageurl = getRelativeUrl(`../${projectid}/index.html`);
	
			// Compile post card. 
			return `
			<!-- postcard -->
			<li class="postcard" data-projectid="${projectid}" title="${projectname}">
	
				<!-- projectlink -->
				<a class="projectlink" href="${pageurl}" target="_blank">
	
					<!-- preview -->
					<div class="preview">${ previewsOn ? createPreviewPanel(projectid) : '' }</div>
					<!-- /preview -->
	
					<!-- caption -->
					<div class="caption">
	
						<!-- name -->
						<span class="name">${projectid}</span>
						<!-- /name -->
	
					</div>
					<!-- /caption -->
	
				</a>
				<!-- /projectlink -->
	
			</li>
			<!-- /postcard -->`;
		}
	}

	// Load featured posts. 
	function loadFeaturedPosts() {
		if(!featuredPostsDestination) return;
		console.log('Loading featured posts...');
	
		// Get list of featured projects (sorted by project id). 
		let featuredProjects = ( featuredProjectIdList.sort() ).map(getProjectById);
		console.log('Featured projects:', featuredProjects.length, featuredProjectIdList, featuredProjects);
		
		// Get layout for featured posts. 
		let featuredLayout = createBlogPostsLayout(featuredProjects, !blockPreviews);
		
		// Add featured layout to blog section. 
		featuredPostsDestination.innerHTML = featuredLayout;
	}
	
	// Load category posts. 
	function loadCategoryPosts() {
		if(!categoryPostsDestination) return;
		console.log('Loading category posts...');
	
		// Get custom list of projects for current category (sorted by project id). 
		let categoryProjects = ( projectgroup.grouplist.sort() ).map(getProjectById);
		console.log('Category projects:', categoryProjects.length, categoryProjects);
		
		// Get layout for category posts. 
		let categoryPostsLayout = createBlogPostsLayout(categoryProjects, !blockPreviews);
		
		// Add layout to blog section. 
		categoryPostsDestination.innerHTML = categoryPostsLayout;
	}
	
	// Load archive posts. 
	function loadArchivePosts() {
		if(!archivePostsDestination) return;
		console.log('Loading archive posts...');
	
		// Get list of archive projects (sorted by project id). 
		let archiveProjects = projectData.sort(sortByProjectId);
		console.log('Archive projects:', archiveProjects.length, archiveProjects);
		
		// Get layout for archive posts. 
		let archiveLayout = createBlogPostsLayout(archiveProjects, false);
		
		// Add archive layout to blog section. 
		archivePostsDestination.innerHTML = archiveLayout;
	
		/****/
	
		// Sort projects by project id. 
		function sortByProjectId(a,b) {
			if(a.projectid == b.projectid) return 0;
			else if(a.projectid < b.projectid) return -1;
			else if(a.projectid > b.projectid) return 1;
			else {
				console.warn('Questionable comparison', a.projectid,b.projectid, a,b);
				return 0;
			}
		}
	}

	// Activate blog functionality. 
	function activateBlog() {

		// Get access to all previously loaded blog post cards. 
		blogpostcards = document.querySelectorAll('div#container section.blog div.grid div.body div.posts ul.postlist li.postcard');
	
		// Activate previews for loaded blog post cards. 
		activatePostPreviews();
	
		// Activate blog post filter. 
		if(postfilterfield) activateBlogFilter();

		// Activate blog post filter. 
		function activateBlogFilter() {
	
			// Activate input field to filter blog posts. 
			postfilterfield.addEventListener('input',filterBlogPosts);
			postfilterfieldclearbtn.addEventListener('click',filterBlogPosts);
			postfilterfieldclearbtn.addEventListener('click',clearFilterQuery);
	
			// Clear any previous filter query. 
			clearFilterQuery();
	
			/***/
	
			// Filter blog posts. 
			function filterBlogPosts() {
	
				// Initialize number of matching posts. 
				let numMatchingPosts = 0;
	
				// Get filter query. 
				let filterquery = (postfilterfield.value).toUpperCase();
				// Get list of filter queries. 
				let filterquerywords = filterquery.split(' ');
				console.log('Filtering...', filterquery, filterquerywords);
			
				// Go thru all blog posts. 
				for(let postcard of blogpostcards) {
	
					// Get project id of given post. 
					let projectid = postcard.getAttribute('data-projectid').toUpperCase();
	
					// Check for matching post (by full query). 
					let matchesFullQuery = checkForMatchFullQuery(projectid,filterquery);
					// Check for matching post (by each word). 
					let matchesEveryWord = checkForMatchEachWord(projectid,filterquerywords);
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
				function checkForMatchFullQuery(projectid,filterquery) {
					return projectid.includes(filterquery)
				}
	
				// Check for matching post (by each word). 
				function checkForMatchEachWord(projectid,filterquerywords) {
			
					// Go thru all words in filter query. 
					for(let word of filterquerywords) {
	
						let wordPresent = projectid.includes(word);
	
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
						postcard.classList.remove('gone');
					}
	
					// Hide non-matching post. 
					else {
						postcard.classList.add('gone');
					}
				}
			}
	
			// Clear filter query. 
			function clearFilterQuery() {
				postfilterfield.value = '';
			}
		}

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
		
			// Open preview of blog post. 
			function openPreview(event) {
				// console.log('Opening preview...',event.target);
		
				// Get selected card. 
				let selectedCard = event.currentTarget;
				// Get project id of selected post. 
				let projectid = selectedCard.getAttribute('data-projectid');
		
				// Get preview panel. 
				let previewpanel = selectedCard.querySelector('div.preview');
		
				// Add preview iframe to preview panel.
				previewpanel.insertAdjacentHTML('afterbegin', createPreviewPanel(projectid) );
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
	}

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
}

// Toggle filter fields. 
function toggleFilterFields() {

	// 
	let filtertabs = document.querySelector('div#container section.blog div.grid div.body div.filtertabs')
	filtertabs.classList.toggle('active');
	archivePostsDestination.classList.toggle('big');
}


// // Toggle section like accordion. 
// function toggleLikeAccordion(section) {

// 	// Check if section already open. 
// 	let sectionOpen = !section.classList.contains('gone');
// 	// console.log('Section open:',sectionOpen);

// 	// Get full height of section. 
// 	let fullheight = section.scrollHeight;
// 	// console.log('Full height:',fullheight);

// 	// Close if already open
// 	if(sectionOpen) {
// 		section.style.maxHeight = 0;
// 		section.classList.add('gone');
// 	}
	
// 	// Open if not already open
// 	else {
// 		section.style.maxHeight = `${fullheight}px`;
// 		section.classList.remove('gone');
// 	}

// 	// Check if section already open. 
// 	sectionOpen = !section.classList.contains('gone');
// 	// console.log('Section open:',sectionOpen);
// }

// // Define sort function for post items. 
// function sortPosts(a,b) {
// 	// console.log('Sorting posts...');
// 	// return (a.projectid - b.projectid);

// 	if(a.projectid < b.projectid) return -1;
// 	else if(a.projectid > b.projectid) return 1;
// 	else return 0;
// }
