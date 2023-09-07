


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


// Set flag memory comfort (for previews being on by default). 
let tooHeavy = true;
// tooHeavy = false;


/*****/


// Load blog posts. 
loadBlog();


/*****/


// Load blog posts. 
function loadBlog() {
	// console.log('Loading blog...');

	// Get list of primary posts. 
	let primaryPosts = getPrimaryPosts();
	console.log('Primary posts', primaryPosts.length, primaryPosts);

	// Get list of secondary posts. 
	let secondaryPosts = getSecondaryPosts();
	console.log('Secondary posts', secondaryPosts.length, secondaryPosts);

	// Get list of remaining archive posts. 
	let archivePosts = getRemainingPosts();
	console.log('Remaining posts', archivePosts.length, archivePosts);

	// Get layout for primary posts. 
	let primaryLayout = createBlogPostsLayout(primaryPosts, true && !tooHeavy);
	// Get layout for secondary posts. 
	let secondaryLayout = createBlogPostsLayout(secondaryPosts, false && !tooHeavy);
	// Get layout for archive posts. 
	let archiveLayout = createBlogPostsLayout(archivePosts, false && !tooHeavy);
	
	// Add primary layout to blog section. 
	if(blogDestination) blogDestination.innerHTML = primaryLayout;
	// blogDestination.insertAdjacentHTML('beforeend',primaryLayout);

	// Add secondary layout to blog archive section. 
	if(blogArchiveDestination) blogArchiveDestination.innerHTML = secondaryLayout;
	// blogArchiveDestination.insertAdjacentHTML('beforeend',secondaryLayout);

	// Add remaining layout to blog archive section. 
	// blogArchiveDestination.innerHTML = archiveLayout;
	// blogArchiveDestination.insertAdjacentHTML('beforeend',archiveLayout);
	// blogDestination.insertAdjacentHTML('beforeend',archiveLayout);


	// Get all blog post cards (after loading). 
	blogpostcards = document.querySelectorAll('div#container section.blog div.grid ul.postlist li.postcard');
	console.log('\n\n\n\n\n\n');

	// Activate previews for blog post cards. 
	activatePostPreviews();

	// Activate blog post filter. 
	if(postfilterfield) activateBlogFilter();

	/****/
	
	// Get primary list of links from link matrix. 
	function getPrimaryPosts() {

		// Sort list of primary project ids. 
		primaryProjectIds.sort();

		// Get group of links. 
		// let linkgrouplist = getLinkGroupById('pp').grouplist;
		let linkgrouplist = primaryProjectIds.map(getProjectLinkById);
		// console.log('linkgrouplist:',linkgrouplist);

		// Initialize list of primary links. 
		let postresultlist = [];

		// Go thru each link in group list. 
		for(let linkitem of linkgrouplist) {
			// console.log('Link item:',linkitem);

			// Get project id of link item. 
			let pid = (linkitem.linkurl).substring(3);
			
			// Create new post item. 
			let newpost = {
				projectid:pid,
				hovercaption:linkitem.linkname,
			};

			// Add project to primary list of posts. 
			postresultlist.push( newpost );
		}

		// Return primary list of links. 
		return postresultlist;
	}
	
	// Get secondary list of links from link matrix. 
	function getSecondaryPosts() {

		// Get original link matrix. 
		// let linkmatrix = projectGroupData.map(   ( groupset ) => (  groupset.map( (group)=>(group.grouplist) )  )   );

		// Get groups of links. 
		let alllinkgroups = projectGroupData.map( group => group.grouplist );
		// console.log('All link groups:',alllinkgroups);

		// Initialize list of secondary links. 
		let postresultlist = [];

		// Go thru each link group. 
		for(let linkgroup of alllinkgroups) {

			// Go thru each link in group list. 
			for(let linkitem of linkgroup) {

				// Get project id of link item. 
				let projectid = (linkitem.linkurl).substring(3);
				
				// Create new post item. 
				let newpost = {
					projectid:projectid,
					hovercaption:linkitem.linkname,
				};

				// Check if project already in primary list. 
				let inPrimaryList = /* false &&  */primaryProjectIds.includes(projectid)

				// Add project to secondary list of posts. 
				if(!inPrimaryList) postresultlist.push( newpost );
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

		// Go thru all project ids. 
		for(let projectid of projectNames) {

			// Check if already in other list. 
			let isAlreadyListed = checkIfAlreadyListed(projectid);
			// primaryPosts.includes(projectid) || secondaryPosts.includes(projectid);

			// Add project to list of remaining (non-primary) links. 
			if(!isAlreadyListed) {

				// Create new post item. 
				let newpost = {
					projectid:projectid,
					hovercaption:projectid,
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
			for(let postitem of primaryPosts) {

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
			// Get description of given post. 
			let hovercaption = post.hovercaption;

			// Get url of page to be added. 
			let pageurl = getRelativeUrl(`../${projectid}/index.html`);
	
			// Compile post card. 
			return `
			<!-- postcard -->
			<li class="postcard" data-projectid="${projectid}" title="${hovercaption}">
	
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
		<!-- /preview -->`
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
