


// Get destination for list of post items. 
const listdestination = document.querySelector('div#container main#pagecontent section.archive ul.postlist');
const postdestination = document.querySelector('div#container main#pagecontent');


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
	// console.log('parameters:',params);

	// Check for id parameter. 
	let postId = params.get('id');
	let weGotId = !!postId;							// Denies id=0 👎🏾. Denies id='' 👍. 
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
		// console.log('post:',post);
	
		// Add post item to page. 
		if(post) postdestination.innerHTML = createFullPost(post);
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
			result += createPostPreview(post);
		}
	
		// Add result to page. 
		listdestination.innerHTML = result;
	
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

	// Create full post item. 
	function createFullPost(post) {
	
		// 
		if(!post) {
			console.warn('Invalid post:',post);
			return '';
		}
	
		// Get title of post. 
		let title = (post.title) ? (post.title) : `[Untitled ${post.posttype}]`;
	
		// Get content of post. 
		let content = (post.content) ? (post.content) : `[Empty ${post.posttype} content]`;
	
		// 
		return `

		<!-- story -->
		<section class="story">
	
			<!-- story -->
			<article class="story">
				
				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->
	
				<!-- content -->
				<p class="content">${content}</p>
				<!-- /content -->
	
			</article>
			<!-- /story -->
					
		</section>
		<!-- /story -->`;
	}

	// Create preview of post item. 
	function createPostPreview(post) {
		// console.log('post:',post);
	
		// 
		if(!post) {
			console.warn('Invalid post:',post);
			return '';
		}
	
		// Get title of post. 
		let title = (post.title) ? (post.title) : `[Untitled ${post.posttype}]`;
	
		// Get excerpt of post content. 
		let postexcerpt = (post.content) ? (post.content).slice(0,excerptcharlimit) : '';
	
		// Get remainder of post content. 
		let postremainder = (post.content) ? (post.content).slice(excerptcharlimit) : '';
	
		// Get id of post. 
		let type = post.posttype;
		let id = post[type+'id'];
		// console.log('id:',id);
	
		// 
		return `
		<!-- postitem -->
		<li class="postitem">
	
			<!-- post -->
			<article class="post ${ (!postremainder) ? 'active' : '' }">
				
				<!-- title -->
				<h1 class="title">${title}</h1>
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
					<a class="readbtn" href="?id=${ id }">Read More</a>
					<!-- /readbtn -->
					
				</p>
				<!-- /content -->
	
			</article>
			<!-- /post -->
	
		</li>
		<!-- /postitem -->`;
	}
}

