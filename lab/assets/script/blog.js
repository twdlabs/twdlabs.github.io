


// Get posts section. 
const postssection = document.querySelector('div#container section.blog div.grid div.body div.posts');
console.log('postssection:',postssection);


// Get destination for featured posts. 
const featuredpostsdestinationA = document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.postlist.a');
const featuredpostsdestinationB = document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.postlist.b');
console.log('Featured posts destinations:',featuredpostsdestinationA,featuredpostsdestinationB);
// Get destination for category posts. 
const categoryPostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts#category ul.postlist');
console.log('Category posts destination:',categoryPostsDestination);
// Get destination for collection posts. 
const collectionPostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts#collection ul.postlist');
console.log('Collection posts destination:',collectionPostsDestination);
// Get archive section. 
const archiveSection = document.querySelector('div#container section.blog div.grid div.body div.posts#archive');
console.log('Archive section:',archiveSection);
// Get destination for archive post pages. 
const archivePagesDestination = document.querySelector('div#container section.blog div.grid div.body div.posts#archive div.paginator');
console.log('Archive pages destination:',archivePagesDestination);
// Get destination for archive posts. 
const archivePostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts#archive ul.postlist');
console.log('Archive posts destination:',archivePostsDestination);


// Get filter panel. 
const filterpanel = document.querySelector('div#container section.blog div.grid div.body div.filterpanel');
console.log('filterpanel:',filterpanel);
// Get group headers in filter panel. 
const filterpanelheaders = document.querySelectorAll('div#container section.blog div.grid div.body div.filterpanel ul.filterlist li.filtergroup h3.filterhead');
console.log('filterpanelheaders:',filterpanelheaders);


// Get input field for search query. 
const searchqueryfield = document.querySelector('div#container section.blog div.grid div.head div.filter input#searchquery');
console.log('searchqueryfield:',searchqueryfield);
// Get clear button for search query. 
const searchclearbtn = document.querySelector('div#container section.blog div.grid div.head div.filter label.searchclearbtn');
console.log('searchclearbtn:',searchclearbtn);
// Get label for empty search results. 
const emptysearchlabel = document.querySelector('div#container section.blog div.grid div.body div.posts div.emptylabel');
console.log('emptysearchlabel:',emptysearchlabel);


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
	function createBlogPostsLayout(postlist,previewsOn,paginationOn) {
	
		// Initialize resulting layout. 
		let result = '';

		// Define number of posts per page. 
		const postsperpage = 120;

		// 
		if(paginationOn) result += openPage();
	
		// Add project link to layout result. 
		for(let post of postlist) {
	
			// Show message for invalid project. 
			if(!post) {
				console.warn('No project post found for given project');
				continue;
			}
	
			// Add blog card to layout result. 
			result += createBlogCard(post,previewsOn);
		}

		// 
		if(paginationOn) result += closePage();
	
		// Return resulting layout. 
		return result;

		/***/

		// Open page. 
		function openPage() {
			return `
			<!-- postpage -->
			<div class="postpage">

				<!-- postlist -->
				<ul class="postlist">`;
		}

		// Close page. 
		function closePage() {
			return `
				</ul>
				<!-- /postlist -->

			</div>
			<!-- /postpage -->`;
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
		let featuredLayoutA = createBlogPostsLayout(featuredProjectsA, true && !blockPreviews);
		let featuredLayoutB = createBlogPostsLayout(featuredProjectsB, true && !blockPreviews);
		
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
		let collectionPostsLayout = createBlogPostsLayout(collectionProjects, true && !blockPreviews);
		
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
		let categoryPostsLayout = createBlogPostsLayout(categoryProjects, true && !blockPreviews);
		
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
		let archiveLayout = createBlogPostsLayout(archiveProjects, false, true);
		
		// Add archive layout to blog section. 
		archivePagesDestination.innerHTML = archiveLayout;
		// archivePostsDestination.innerHTML = archiveLayout;
	
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
	
		// Activate blog post search. 
		if(searchqueryfield) activateBlogSearch();

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
				// let previewpanel = selectedcard.querySelector('div.preview');
				// Get iframe inside preview panel. 
				let previewpaneliframe = selectedcard.querySelector('div.preview iframe.preview');
		
				// Remove iframe from preview panel.
				// previewpanel.innerHTML = '';
				previewpaneliframe.remove();
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
				// Hide label if search results found. 
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
					if(matchesQuery) {
						postcard.classList.remove('gone');
					}
	
					// Hide non-matching post. 
					else {
						postcard.classList.add('gone');
					}
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
	
	// Create blog card. 
	function createBlogCard(post,previewsOn) {

		// Define whether or not to use id as name. 
		// let useidasname = true;

		// Get project id for given post. 
		let projectid = post.projectid;
		// Get project name for given post. 
		let projectname = post.projectname;
		// Get category name for given post. 
		let categoryname = getCategoryName(projectid);
		// Get author name for given post. 
		let authorname = getAuthorName(post.authorid);

		// Get url of page to be added. 
		let pageurl = getRelativeUrl(`../${projectid}/index.html`);

		// Compile post card. 
		return `
		<!-- postcard -->
		<li class="postcard" data-projectid="${projectid}" title="${projectid}">

			<!-- projectlink -->
			<a class="projectlink" href="${pageurl}" target="_blank">

				<!-- preview -->
				<div class="preview">${ previewsOn ? createPreviewPanel(projectid) : '' }</div>
				<!-- /preview -->

				<!-- caption -->
				<div class="caption">
		
					<!-- id -->
					<span class="id">${ projectid }</span>
					<!-- /id -->

					<!-- name -->
					<span class="name">${ projectname }</span>
					<!-- /name -->
		
					<!-- category -->
					<span class="category">${ categoryname }</span>
					<!-- /category -->
		
					<!-- author -->
					<span class="author">${ authorname }</span>
					<!-- /author -->

				</div>
				<!-- /caption -->

			</a>
			<!-- /projectlink -->

		</li>
		<!-- /postcard -->`;

		/***/

		// Get category name for given project. 
		function getCategoryName(projectid) {

			// Go thru each project category. 
			for(let projectcategory of projectCategoryData) {

				// Check if project found in current category. 
				let projectfound = projectcategory.groupitemsidlist.includes(projectid);

				// Return name of current category if project found. 
				if(projectfound) return projectcategory.groupname;
			}

			// Return nothing if project not found in any category. 
			return '';
		}

		// TODO: Get author name for given project. 
		function getAuthorName(authorid) {
			return authorid;

			// TODO: Create data space for author names. 

			// Go thru each project category. 
			for(let projectauthor of projectAuthorData) {

				// Check if project found in current category. 
				let projectfound = projectauthor.authorid == authorid;

				// Return name of current category if project found. 
				if(projectfound) return projectauthor.authorname;
			}

			// Return nothing if project not found in any category. 
			return '';
		}
	}
}

// Toggle style of posts in archive section. 
function togglePostStyle(togglebtn) {

	// Define style ids. 
	const styleids = ['small','large','listed',];

	// Go thru each style id. 
	for(let id of styleids) {
		
		// Turn off style id. 
		archiveSection.classList.remove(id);
	}
	
	// Get selected style id. 
	let styleid = togglebtn.getAttribute('data-styleid');
	
	// Turn on selected style id. 
	archiveSection.classList.add(styleid);
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


// // Define sort function for post items. 
// function sortPosts(a,b) {
// 	// console.log('Sorting posts...');
// 	// return (a.projectid - b.projectid);

// 	if(a.projectid < b.projectid) return -1;
// 	else if(a.projectid > b.projectid) return 1;
// 	else return 0;
// }
