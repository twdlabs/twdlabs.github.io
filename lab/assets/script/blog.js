


// Get posts section. 
const postssection = document.querySelector('div#container section.blog div.grid div.body div.posts');
// Get destination for featured posts. 
const featuredpostsdestinationA = document.querySelector('div#container section.blog div.grid div.body div.posts ul.postlist.featured.a');
const featuredpostsdestinationB = document.querySelector('div#container section.blog div.grid div.body div.posts ul.postlist.featured.b');
console.log('Featured posts destinations:',featuredpostsdestinationA,featuredpostsdestinationB);

// Get destination for category posts. 
const categoryPostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts ul.postlist.category');
console.log('Category posts destination:',categoryPostsDestination);

// Get destination for collection posts. 
const collectionPostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts ul.postlist.collection');
console.log('Collection posts destination:',collectionPostsDestination);

// Get destination for archive posts. 
const archivePostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts ul.postlist.archive');
console.log('Archive posts destination:',archivePostsDestination);

// Get input field for filter query. 
const filterqueryfield = document.querySelector('div#container section.blog div.grid div.head div.filter input#postfilter');
console.log('filterqueryfield:',filterqueryfield);
const filterqueryclearbtn = document.querySelector('div#container section.blog div.grid div.head div.filter label.clearbtn');
console.log('filterqueryclearbtn:',filterqueryclearbtn);

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

	// Load featured posts. 
	loadFeaturedPosts();
	
	// Load collection posts. 
	loadCollectionPosts();
	
	// Load category posts. 
	loadCategoryPosts();
	
	// Load archive posts. 
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

		// Check if loading featured posts. 
		if(!featuredpostsdestinationA || !featuredpostsdestinationB) {
			console.log('No featured posts...');
			return;
		}
		console.log('Loading featured posts...');
	
		// Get list of featured projects (sorted by project id). 
		let featuredProjectsA = ( featuredProjectIds['a']/* .sort() */ ).map(getProjectById);
		let featuredProjectsB = ( featuredProjectIds['b']/* .sort() */ ).map(getProjectById);
		console.log('Featured projects A:', featuredProjectsA.length, featuredProjectIds['a'], featuredProjectsA);
		console.log('Featured projects B:', featuredProjectsB.length, featuredProjectIds['b'], featuredProjectsB);
		
		// Get layout for featured posts. 
		let featuredLayoutA = createBlogPostsLayout(featuredProjectsA, !blockPreviews);
		let featuredLayoutB = createBlogPostsLayout(featuredProjectsB, !blockPreviews);
		
		// Add featured layout to blog section. 
		featuredpostsdestinationA.innerHTML = featuredLayoutA;
		featuredpostsdestinationB.innerHTML = featuredLayoutB;
	}
	
	// Load collection posts. 
	function loadCollectionPosts() {

		// Check if loading collection posts. 
		if(!collectionPostsDestination) {
			console.log('No collection posts...');
			return;
		}
		console.log('Loading collection posts...');
	
		// Get custom list of projects for current collection. 
		let collectionCategories = ( projectmetagroup.groupitemsidlist ).map(getProjectGroupById);
		console.log('Collection categories:', collectionCategories);
		let collectionProjects3d = collectionCategories.map(x=>x.groupitemsidlist);
		let collectionProjects = ( flatten(collectionProjects3d).sort() ).map(getProjectById);
		console.log('Collection projects:', collectionProjects.length, collectionProjects);
		
		// Get layout for collection posts. 
		let collectionPostsLayout = createBlogPostsLayout(collectionProjects, !blockPreviews);
		
		// Add layout to blog section. 
		collectionPostsDestination.innerHTML = collectionPostsLayout;

		/****/

		// Flatten 3d data matrix into 2d data list. 
		function flatten(datamatrix) {

			// Initialize result. 
			let result = [];

			// Accumulate result. 
			for(let datalist of datamatrix) {
				// result = result.concat(datalist);
				for(let datapoint of datalist) {
					result.push(datapoint);
				}
			}

			// Return result. 
			return result;
		}
	}
	
	// Load category posts. 
	function loadCategoryPosts() {

		// Check if loading category posts. 
		if(!categoryPostsDestination) {
			console.log('No category posts...');
			return;
		}
		console.log('Loading category posts...');
	
		// Get custom list of projects for current category (sorted by project id). 
		let categoryProjects = ( projectgroup.groupitemsidlist.sort() ).map(getProjectById);
		console.log('Category projects:', categoryProjects.length, categoryProjects);
		
		// Get layout for category posts. 
		let categoryPostsLayout = createBlogPostsLayout(categoryProjects, !blockPreviews);
		
		// Add layout to blog section. 
		categoryPostsDestination.innerHTML = categoryPostsLayout;
	}
	
	// Load archive posts. 
	function loadArchivePosts() {

		// Check if loading archive posts. 
		if(!archivePostsDestination) {
			console.log('Bypass archive posts...');
			return;
		}
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

		// Access previously loaded blog post cards. 
		let blogpostcards = document.querySelectorAll('div#container section.blog div.grid div.body div.posts ul.postlist li.postcard');
	
		// Activate previews for loaded blog post cards. 
		activatePostPreviews();
	
		// Activate blog post filter. 
		if(filterqueryfield) activateBlogFilter();

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
		
				// Get iframe in card's preview panel. 
				let previewpaneliframe = selectedcard.querySelector('div.preview iframe.preview');
		
				// Remove iframe from preview panel.
				previewpaneliframe.remove();
			}
		}

		// Activate blog post filter. 
		function activateBlogFilter() {
	
			// Activate input field to filter blog posts. 
			filterqueryfield.addEventListener('input',filterBlogPosts);
			filterqueryclearbtn.addEventListener('click',clearFilterQuery);
	
			// Clear any previous filter query. 
			clearFilterQuery();
	
			/***/
	
			// Filter blog posts. 
			function filterBlogPosts() {
	
				// Initialize number of matching posts. 
				let numMatchingPosts = 0;
	
				// Get filter query. 
				let filterquery = (filterqueryfield.value).toUpperCase();
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
	
			// Clear filter query. 
			function clearFilterQuery() {

				// Clear filter query. 
				filterqueryfield.value = '';
	
				// Filter blog posts. 
				filterBlogPosts();
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

	// Get filter tabs section. 
	const filtertabs = document.querySelector('div#container section.blog div.grid div.body div.filtertabs');

	// Toggle filter tabs section. 
	filtertabs.classList.toggle('active');

	// Toggle state of posts section. 
	// archivePostsDestination.classList.toggle('big');
}

// Toggle section like accordion. 
function toggleLikeAccordion(section,sectionbin) {

	// Check if section already open. 
	let sectionOpen = !section.classList.contains('mini');
	// console.log('Section open:',sectionOpen);

	// Get full height of section bin. 
	let fullheight = sectionbin.scrollHeight;
	// console.log('Full height:',fullheight);

	// Close if already open. 
	if(sectionOpen) {
		section.classList.add('mini');
		sectionbin.style.maxHeight = 0;
	}
	
	// Open if not already open. 
	else {
		section.classList.remove('mini');
		sectionbin.style.maxHeight = `${fullheight}px`;
	}
}


// // Define sort function for post items. 
// function sortPosts(a,b) {
// 	// console.log('Sorting posts...');
// 	// return (a.projectid - b.projectid);

// 	if(a.projectid < b.projectid) return -1;
// 	else if(a.projectid > b.projectid) return 1;
// 	else return 0;
// }
