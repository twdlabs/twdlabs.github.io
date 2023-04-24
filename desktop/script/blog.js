


// Get blog destination. 
const blogDestination = document.querySelector('div#container section.blog div.grid ul.postlist');

// Initialize source of blog post cards. 
let blogpostcards;

// Get input field for filter query. 
const postfilterfield = document.querySelector('div#container section.blog div.grid div.filter input#postfilter');


/*****/


// Define number of posts. 
let numPosts = 60;
// numPosts = 25;
numPosts = 240;
numPosts = 480;


/*****/


// Load blog posts. 
loadBlog();


/*****/


// Load blog posts. 
function loadBlog() {
	// console.log('Loading blog...');

	// Initialize result. 
	let result = '';
	
	// Initialize number of posts added. 
	let n = 0;
	
	// Add project group to result. 
	for(let i in projectNames) {

		// Limit number of posts. 
		if(n>=numPosts) break;
		// console.log(i);

		// Get folder name for given post. 
		let foldername = projectNames[i]
		// Skip current page (no infinite recursion). 
		// if(foldername=='desktop') continue;

		// Add blog card to result. 
		result += createBlogCard(foldername);

		// Increment number of posts added. 
		n++;
	}
	
	// Add result to page. 
	blogDestination.innerHTML = result;
	// blogDestination.insertAdjacentHTML('beforeend',result);

	// Get blog post cards. 
	blogpostcards = document.querySelectorAll('div#container section.blog div.grid ul.postlist li.postcard');

	// Activate preview panels for blog post cards. 
	activatePreviewPanels();

	// Activate blog post filter. 
	activateBlogFilter();

	/****/

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
		postfilterfield.addEventListener('keyup',filterBlogPosts);

		/***/

		// Filter blog posts. 
		function filterBlogPosts(event) {

			// Get filter query. 
			let filterquery = (postfilterfield.value).toUpperCase();
			
			// Get list of filter queries. 
			let filterquerywords = filterquery.split(' ')
			console.log('Filtering...', filterquery, filterquerywords);
		
			// Go thru all blog posts. 
			for(let postcard of blogpostcards) {

				// Get folder name of given post. 
				let foldername = postcard.getAttribute('data-foldername').toUpperCase();

				// Check for matching post (by full query). 
				let matchesFullQuery = checkForMatchFullQuery(foldername,filterquery);

				// Check for matching post (by each word). 
				let matchesEveryWord = checkForMatchEachWord(foldername,filterquerywords);

				// Show matching post. 
				if(matchesFullQuery || matchesEveryWord) {
					postcard.classList.remove('x');
				}
				// Hide non-matching post. 
				else {
					postcard.classList.add('x');
				}
			}

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
		}
	}
}
