


// Get destination for list of post items. 
const destination = document.querySelector('div#container main#pagecontent section.archive ul.postlist');


// Define character limit for post excerpts. 
const excerptcharlimit = 240;


/*****/


// Choose page type. 
choosePageType();


/*****/


// Choose page type. 
function choosePageType() {

	// Get search parameters from url. 
	const params = new URLSearchParams(window.location.search);
	console.log('params:',params);

	// Check for id parameter. 
	let postId = 1 * params.get('id');
	let weGotId = !!postId;		// Denies id=0 👎🏾. Denies id='' 👍. 
	// console.log('weGotId:',weGotId,postId);
	// let weGotId = !!postId || !isNaN(postId);	// Allows id=0 👍. Allows id='' 👎🏾. 

	// Load page for single post. 
	if(weGotId) loadPostPage(postId);

	// Load archive list of posts. 
	else loadArchivePage(archiveSource);

	/****/

	// Load page for single post. 
	function loadPostPage(id) {
	
		// Get post item. 
		let post = getPostById(id);
		console.log('post:',post);
	
		// Add post item to page. 
		if(post) destination.innerHTML = createPostItem(post);
		else loadArchivePage(archiveSource);

		/***/

		// Get post by id. 
		function getPostById(id) {
		
			// Get post type. 
			let type = currentPostType;
			// console.log('type:',type,`${type}id`);
			// console.log('Archive source:',archiveSource);
		
			// 
			for(let post of archiveSource) {
				// 
				let postid = post[`${type}id`];
				if(postid==id) return post;
			}

			// Return nothing if post not found. 
			return null;
		}
	}
	
	// Load page for archive of selected post type. 
	function loadArchivePage(postlist) {
	
		// Get set name for page title. 
		// const pagetitle = defaultResults[pagekey].setname;
	
		// Get set list for list of posts. 
		// const postlist = defaultResults[pagekey].setlist;
	
		// Initialize result. 
		let result = '';
	
		// Accumulate post elements to result. 
		for(let post of postlist) {
	
			// Create post item. 
			result += createPostItem(post);
		}
	
		// Add result to page. 
		destination.innerHTML = result;
	
		// Activate buttons. 
		activateButtons();
	
		/****/
	
		// Activate buttons. 
		function activateButtons() {
		
			// Get all read buttons. 
			const readbtns = document.querySelectorAll('main#pagecontent section.archive ul.postlist li.postitem article.post p.content button.readbtn');
			// console.log('readbtns:',readbtns);
		
			// Add event handlers. 
			for(let btn of readbtns) {
				btn.addEventListener('click', togglePostContent);
			}
		
			/****/
		
			// Toggle post excerpt mode. 
			function togglePostContent(event) {
		
				// Get post. 
				let post = (event.currentTarget).parentElement.parentElement;
		
				// Toggle post. 
				post.classList.toggle('active');
			}
		}
	}

	// Create post item. 
	function createPostItem(post) {
	
		// 
		if(!post) {
			console.warn('Invalid post:',post);
			return '';
		}
	
		// Get excerpt of post content. 
		let postexcerpt = (post.content) ? (post.content).slice(0,excerptcharlimit) : '';
	
		// Get remainder of post content. 
		let postremainder = (post.content) ? (post.content).slice(excerptcharlimit) : '';
	
		// 
		return `
		<!-- postitem -->
		<li class="postitem">
	
			<!-- post -->
			<article class="post ${ (!postremainder) ? 'active' : '' }">
				
				<!-- title -->
				<h1 class="title">${post.title}</h1>
				<!-- /title -->
	
				<!-- content -->
				<p class="content">
	
					<!-- excerpt -->
					<span class="excerpt">${postexcerpt}</span>
					<!-- /excerpt -->
	
					<!-- remainder -->
					<span class="remainder">${postremainder}</span>
					<!-- /remainder -->
	
					<!-- readbtn -->
					<button class="readbtn ${ (!postremainder) ? 'gone' : '' }">
	
						<!-- expand -->
						<span class="expand">Read More</span>
						<!-- /expand -->
	
						<!-- collapse -->
						<span class="collapse">Read Less</span>
						<!-- /collapse -->
	
					</button>
					<!-- /readbtn -->
					
				</p>
				<!-- /content -->
	
			</article>
			<!-- /post -->
	
		</li>
		<!-- /postitem -->`;
	}
}

