


// Get destination for list of post items. 
const listdestination = document.querySelector('div#container main#pagecontent section.archive ul.postlist');

// Define character limit for post excerpts. 
const excerptcharlimit = 180;
// const excerptcharlimit = 240;


/*****/


// Load archive list of posts. 
loadArchivePage(archiveData);

// Show current article. 
showArticle();

// Show current list of posts. 
showPostList();
// setTimeout(showPostList,100);


/*****/


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
		result += createPreviewPost(post);
	}

	// Add result to page. 
	listdestination.innerHTML = result;

	// Activate buttons. 
	activateButtons();

	/****/

	// Create preview post item. 
	function createPreviewPost(post) {
		// console.log('post:',post);
	
		// Check for valid post. 
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

		// Get post url. 
		let url = `post/?id=${id}`;
	
		// 
		return `
		<!-- postitem -->
		<li class="postitem">
	
			<!-- post -->
			<article class="post ${ (!postremainder) ? 'active' : '' }">
				
				<!-- title -->
				<h1 class="title">
					<a href="${url}">${title}</a>
				</h1>
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
					<a class="readbtn" href="${url}">Read More</a>
					<!-- /readbtn -->
					
				</p>
				<!-- /content -->
	
			</article>
			<!-- /post -->
	
		</li>
		<!-- /postitem -->`;
	}

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
