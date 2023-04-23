


// Get blog destination. 
const blogDestination = document.querySelector('div#container section.blog div.grid ul.postlist');

// Initialize source of blog post cards. 
let blogpostcards;


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
	console.log('Loading blog...');

	// Initialize result. 
	let result = '';
	let n = 0;
	
	// Add project group to result. 
	for(let i in projectNames) {
		if(n>=numPosts) break;
		// console.log(i);

		// 
		let foldername = projectNames[i]

		// Skip infinite recursion. 
		if(foldername=='desktop') continue;

		// Add blog card to result. 
		result += createBlogCard(foldername);
		n++;
	}
	
	// Add result to page. 
	blogDestination.innerHTML = result;
	// blogDestination.insertAdjacentHTML('beforeend',result);

	// Activate preview panels for blog post cards. 
	activatePreviewPanels();

	// Activate preview panels for blog post cards. 
	function activatePreviewPanels() {

		// Get blog post cards. 
		blogpostcards = document.querySelectorAll('div#container section.blog div.grid ul.postlist li.postcard');
		
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

	/****/

	// Create blog card. 
	function createBlogCard(foldername) {

		// 
		if(true) return `
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
		if(true) return `
		<!-- postcard -->
		<li class="postcard" data-foldername="${foldername}">

			<!-- preview -->
			<div class="preview">

				<!-- preview -->
				<iframe class="preview x3" src=""></iframe>
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
