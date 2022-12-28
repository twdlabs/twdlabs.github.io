


// Get destination for post. 
const postdestination = document.querySelector('div#container main.main article.post');

// Get search parameters from current url. 
const urlparams = new URLSearchParams(window.location.search);
// console.log('Url search parameters:',urlparams);


/*****/


// Load blog post. 
loadBlogPost();


/*****/


// Load blog post. 
function loadBlogPost() {
	
	// Get selected post id. 
	const nullPostId = -1;
	const selectedPostId = urlparams.get('id') || nullPostId;
	console.log('Selected post id:',selectedPostId);
	
	// Get post data. 
	const postdata = getPostById(selectedPostId);
	console.log('Selected post:',postdata);

	// Display post on page. 
	postdestination.innerHTML = createPostLayout();

	/****/

	// Create post layout. 
	function createPostLayout() {

		// 
		return `

		<!-- title -->
		<h1 class="title">${ postdata.title }</h1>
		<!-- /title -->
		
		<!-- art -->
		<div class="art">

			<!-- art -->
			<img class="art" src="${ getRelativeUrl(postdata.picurl) }">
			<!-- /art -->

		</div>
		<!-- /art -->

		<!-- content -->
		<div class="content">

			${ (postdata.content).map(createParagraph).join('') }

		</div>
		<!-- /content -->`;

		/***/

		// Create paragraph. 
		function createParagraph(paragraphtext) {
			// Compile paragraph. 
			return `
			<!-- textcopy -->
			<p class="textcopy">${paragraphtext}</p>
			<!-- /textcopy -->`
		}
	}
}

