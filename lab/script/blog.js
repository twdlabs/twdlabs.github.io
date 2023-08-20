


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
	let primaryPosts = getPrimaryPosts();
	// console.log('Primary posts', primaryPosts.length, primaryPosts);

	// Get list of secondary posts. 
	let secondaryPosts = getSecondaryPosts();
	// console.log('Secondary posts', secondaryPosts.length, secondaryPosts);

	// Get list of remaining archive posts. 
	let archivePosts = getRemainingPosts();
	// console.log('Remaining posts', archivePosts.length, archivePosts);

	// Get layout for primary posts. 
	let primaryLayout = createBlogPostsLayout(primaryPosts);
	// Get layout for secondary posts. 
	let secondaryLayout = createBlogPostsLayout(secondaryPosts);
	// Get layout for archive posts. 
	let archiveLayout = createBlogPostsLayout(archivePosts);
	
	// Add primary layout to blog section. 
	blogDestination.innerHTML = primaryLayout;
	// blogDestination.insertAdjacentHTML('beforeend',primaryLayout);

	// Add secondary layout to blog archive section. 
	blogArchiveDestination.innerHTML = secondaryLayout;
	// blogArchiveDestination.insertAdjacentHTML('beforeend',secondaryLayout);

	// Add remaining layout to blog archive section. 
	// blogArchiveDestination.innerHTML = archiveLayout;
	// blogArchiveDestination.insertAdjacentHTML('beforeend',archiveLayout);


	// Get all blog post cards (after loading). 
	blogpostcards = document.querySelectorAll('div#container section.blog div.grid ul.postlist li.postcard');

	// Activate preview panels for blog post cards. 
	activatePreviewPanels();

	// Activate blog post filter. 
	activateBlogFilter();

	/****/
	
	// Get list of primary links from link matrix. 
	function getPrimaryPosts() {

		// Get group of links. 
		// let linkgrouplist = getLinkGroupById('pp').grouplist;
		let linkgrouplist = ( primaryProjectIds.sort() ).map(getProjectLinkById);

		// Initialize list of primary links. 
		let postresultlist = [];

		// Go thru each link in group list. 
		for(let linkitem of linkgrouplist) {

			// Get project id of link item. 
			let projectid = (linkitem.linkurl).substring(3);

			// Get link description from link item. 
			let linkdescription = linkitem.linkname;
			
			// Create post item. 
			let post = {
				projectid:projectid,
				hovercaption:linkdescription,
			};

			// Add project to list of primary posts. 
			postresultlist.push( post );
		}

		// Return list of primary links. 
		return postresultlist;
	}
	
	// Get list of primary links from link matrix. 
	function getSecondaryPosts() {

		// Get original link matrix. 
		// let linkmatrix = projectLinkData.map(   ( groupset ) => (  groupset.map( (group)=>(group.grouplist) )  )   );

		// Get groups of links. 
		let linkgroups = projectLinkData.map( group => group.grouplist );
		// console.log('linkgroups:',linkgroups);

		// Initialize list of primary links. 
		let postresultlist = [];

		// Go thru each link group. 
		for(let linkgroup of linkgroups) {

			// Go thru each link in group list. 
			for(let linkitem of linkgroup) {

				// Get project id of link item. 
				let projectid = (linkitem.linkurl).substring(3);

				// Get link description from link item. 
				let linkdescription = linkitem.linkname;
				
				// Create post item. 
				let post = {
					projectid:projectid,
					hovercaption:linkdescription,
				};

				// Check if project already in primary list. 
				let inPrimaryList = /* false &&  */primaryProjectIds.includes(projectid)

				// Add project to list of primary posts. 
				if(!inPrimaryList) postresultlist.push( post );
			}
		}

		// Sort list of primary links. 
		postresultlist.sort(sortPosts);

		// Return sorted list of primary links. 
		console.log(postresultlist);
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
	
	// Get list of remaining links for archive. 
	function getRemainingPosts() {

		// Initialize list of remaining links. 
		let postresultlist = [];

		// Go thru all project ids. 
		for(let projectid of projectNames) {

			// Check for primary project. 
			let isPrimaryPost = primaryPosts.includes(projectid);

			// Add project to list of remaining (non-primary) links. 
			if(!isPrimaryPost) {

				// Create post item. 
				let post = {
					projectid:projectid,
					hovercaption:projectid,
				};

				// Add project to list of remaining (non-primary) links. 
				postresultlist.push( post );
			}
		}

		// Return pre-sorted list of remaining links. 
		return postresultlist;
	}

	// Create layout for blog posts. 
	function createBlogPostsLayout(postlist) {

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
		function createBlogCard(post,previewIncluded) {
	
			// Get project id of given post. 
			let projectid = post.projectid;
			// Get description of given post. 
			let hovercaption = post.hovercaption;
	
			// 
			if(!previewIncluded) return `
			<!-- postcard -->
			<li class="postcard" data-projectid="${ projectid }" title="${ hovercaption }">
	
				<!-- preview -->
				<div class="preview">
	
					<!-- previewlink -->
					<a class="previewlink" href="../${projectid}/index.html" target="_blank"></a>
					<!-- /previewlink -->
	
				</div>
				<!-- /preview -->
	
				<!-- namelink -->
				<a class="namelink" href="../${projectid}/index.html" target="_blank">${ projectid }</a>
				<!-- /namelink -->
	
			</li>
			<!-- /postcard -->`;
	
			// 
			return `
			<!-- postcard -->
			<li class="postcard" data-projectid="${ projectid }" title="${ hovercaption }">
	
				<!-- preview -->
				<div class="preview">
	
					<!-- preview -->
					<iframe class="preview x3" src="../${projectid}/index.html"></iframe>
					<!-- /preview -->
	
					<!-- previewlink -->
					<a class="previewlink" href="../${projectid}/index.html" target="_blank"></a>
					<!-- /previewlink -->
	
				</div>
				<!-- /preview -->
	
				<!-- namelink -->
				<a class="namelink" href="../${projectid}/index.html" target="_blank">${ projectid }</a>
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

			// Get selected card. 
			let selectedCard = event.currentTarget;
			// Get project id of selected post. 
			let projectid = selectedCard.getAttribute('data-projectid');

			// Get preview panel. 
			let previewpanel = selectedCard.querySelector('div.preview');

			// Add preview iframe to preview panel.
			previewpanel.insertAdjacentHTML('afterbegin',`
			<!-- preview -->
			<iframe class="preview x3" src="../${projectid}/index.html"></iframe>
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

				// 
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
