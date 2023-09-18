


// Get blog destination. 
const blogDestination = document.querySelector('div#container section.blog div.grid ul.postlist');

// Initialize source of blog post cards. 
let blogpostcards;

// Get input field for filter query. 
const postfilterfield = document.querySelector('div#container section.blog div.grid div.filter input#postfilter');
const postfilterfieldclearbtn = document.querySelector('div#container section.blog div.grid div.filter label.clearbtn');

// Get label for empty search results. 
const emptysearchlabel = document.querySelector('div#container section.blog div.grid div.emptylabel');


/*****/


// Set flag for memory comfort (for previews being on by default). 
let tooHeavy = true;
// tooHeavy = false;


/*****/


// Load blog posts. 
loadBlog();


/*****/


// Load blog posts. 
function loadBlog() {
	console.log('Loading blog...');

	// Check if at home. 
	let atHome = (currentPageLevel <= 0);

	// Load mini blog if at home. 
	if(atHome) loadMiniBlog();
	
	// Load full blog if not at home. 
	else loadArchiveBlog();
}

// Load featured blog posts. 
function loadMiniBlog() {
	console.log('Loading featured blog...');

	// Get list of featured projects. 
	let featuredProjects = getFeaturedProjects();
	console.log('Featured projects:', featuredProjects.length, featuredProjects);
	
	// Get layout for featured posts. 
	// tooHeavy = false;
	let featuredLayout = createBlogPostsLayout(featuredProjects, true && !tooHeavy);
	
	// Add featured layout to blog section. 
	if(blogDestination) blogDestination.innerHTML = featuredLayout;

	// Get all blog post cards loaded. 
	blogpostcards = document.querySelectorAll('div#container section.blog div.grid ul.postlist li.postcard');

	// Activate previews for loaded blog post cards. 
	activatePostPreviews();

	/****/
	
	// Get list of featured projects. 
	function getFeaturedProjects() {

		// Sort list of featured project ids. 
		featuredProjectIdList.sort();

		// Get list of all featured projects. 
		let allfeaturedprojects = featuredProjectIdList.map(getProjectById);
		console.log('Featured projects:',allfeaturedprojects);

		// Initialize list of featured project links. 
		let postresultlist = [];

		// Go thru each link in group list. 
		for(let index in allfeaturedprojects) {

			// Get project id. 
			let pid = featuredProjectIdList[index]
			// Get project item. 
			let project = allfeaturedprojects[index]
			// console.log('Project:',pid,project);

			// Show message for invalid project. 
			if(!project) {
				console.warn('No project found for given project id: ',pid);
				continue;
			}
			
			// Create new post item. 
			let newpost = {
				projectid:project.projectid,
				projectname:project.projectname,
			};
			// Show message for valid project. 
			// console.log('Project for id:',pid,project);

			// Add project to list of featured project links. 
			postresultlist.push( newpost );
		}

		// Return list of featured project links. 
		return postresultlist;
	}
}

// Load archive blog posts. 
function loadArchiveBlog() {
	console.log('Loading archive blog...');

	// Get list of archive projects. 
	let archiveProjects = projectData;
	console.log('Archive projects:', archiveProjects.length, archiveProjects);
	
	// Get layout for archive posts. 
	// tooHeavy = true;
	let archiveLayout = createBlogPostsLayout(archiveProjects, true && !tooHeavy);
	
	// Add archive layout to blog section. 
	if(blogDestination) blogDestination.innerHTML = archiveLayout;

	// 

	// Get all blog post cards loaded. 
	blogpostcards = document.querySelectorAll('div#container section.blog div.grid ul.postlist li.postcard');

	// Activate previews for loaded blog post cards. 
	activatePostPreviews();

	// Activate blog post filter. 
	if(postfilterfield) activateBlogFilter();

	/****/

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
}

// Create layout for blog posts. 
function createBlogPostsLayout(postlist,previewsOn) {

	// Initialize resulting layout. 
	let result = '';

	// Add project link to layout result. 
	for(let post of postlist) {

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



/*****/



// Load blog posts. 
function loadBlogXyz() {
	
	// Get list of secondary posts. 
	let secondaryPosts = getSecondaryPosts();
	console.log('Secondary posts:', secondaryPosts.length, secondaryPosts);
	// Get list of remaining archive posts. 
	let archivePosts = getRemainingPosts();
	console.log('Remaining posts:', archivePosts.length, archivePosts);

	/****/
	
	// Get secondary list of links from link matrix. 
	function getSecondaryPosts() {

		// Get original link matrix. 
		// let linkmatrix = projectGroupData.map(   ( groupset ) => (  groupset.map( (group)=>(group.grouplist) )  )   );

		// Get group list for each project group. 
		let allprojectgrouplists = projectGroupData.map( group => group.grouplist );
		console.log('All project groups:',allprojectgrouplists);

		// Initialize list of secondary links. 
		let postresultlist = [];

		// Go thru each project group. 
		for(let projectgrouplist of allprojectgrouplists) {
			// console.log('projectgrouplist:',projectgrouplist);

			// Go thru each project id in project group list. 
			for(let projectid of projectgrouplist) {
				
				// Get project item. 
				let project = getProjectById(projectid);

				// Check if project already in featured list. 
				let isFeaturedProject = /* false &&  */featuredProjectIdList.includes(project.projectid);

				// Add project if not in featured list. 
				if(!isFeaturedProject) {
				
					// Create new post for current project. 
					let newpost = {
						projectid:project.projectid,
						projectname:project.projectname,
					};

					// Add project to secondary list of posts. 
					postresultlist.push( newpost );
				}
			}
		}

		// Sort secondary list of links. 
		postresultlist.sort(sortPosts);

		// Return secondary list of links. 
		// console.log(postresultlist);
		return postresultlist;

		/***/

		// Define sort function for post items. 
		function sortPosts(a,b) {
			// console.log('Sorting posts...');
			// return (a.projectid - b.projectid);

			if(a.projectid < b.projectid) return -1;
			else if(a.projectid > b.projectid) return 1;
			else return 0;
		}
	}
	
	// Get list of remaining links leftover for archive. 
	function getRemainingPosts() {

		// Initialize list of remaining links. 
		let postresultlist = [];

		// Go thru each id in project archive. 
		for(let projectid of projectNames) {

			// Check if project already in other list. 
			let isAlreadyListed = checkIfAlreadyListed(projectid);
			// featuredProjects.includes(projectid) || secondaryPosts.includes(projectid);

			// Add project if not already in other list. 
			if(!isAlreadyListed) {

				// Create new post item for current project. 
				let newpost = {
					projectid:projectid,
					projectname:projectid,
				};

				// Add project to list of remaining (non-primary) links. 
				postresultlist.push( newpost );
			}
		}

		// Return pre-sorted list of remaining links. 
		return postresultlist;

		/***/

		// Check if already in other list. 
		function checkIfAlreadyListed(projectid) {

			// Go thru primary posts. 
			for(let postitem of featuredProjects) {

				// Check for match. 
				let matchFound = postitem.projectid==projectid;

				// Assume listed if found. 
				if(matchFound) return true;
			}

			// Go thru secondary posts. 
			for(let postitem of secondaryPosts) {

				// Check for match. 
				let matchFound = postitem.projectid==projectid;

				// Assume listed if found. 
				if(matchFound) return true;
			}

			// Assume not listed if not found. 
			return false;
		}
	}
}

// Toggle section like accordion. 
function toggleLikeAccordion(section) {

	// Check if section already open. 
	let sectionOpen = !section.classList.contains('gone');
	// console.log('Section open:',sectionOpen);

	// Get full height of section. 
	let fullheight = section.scrollHeight;
	// console.log('Full height:',fullheight);

	// Close if already open
	if(sectionOpen) {
		section.style.maxHeight = 0;
		section.classList.add('gone');
	}
	
	// Open if not already open
	else {
		section.style.maxHeight = `${fullheight}px`;
		section.classList.remove('gone');
	}

	// Check if section already open. 
	sectionOpen = !section.classList.contains('gone');
	// console.log('Section open:',sectionOpen);
}
