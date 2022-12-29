


// Get destination for post. 
const postdestination = document.querySelector('div#container main.main article.post');

// Get destination for comments. 
const commentdestination = document.querySelector('div#container main.main section.comments ul.commentlist');

// Initialize selected post id. 
let selectedPostId;


/*****/


// Save id of current post. 
savePostId();

// Load blog post. 
loadBlogPost();

// Load blog post comments. 
loadBlogPostComments();


/*****/


// Save id of current post. 
function savePostId() {

	// Define null post id. 
	const nullPostId = -1;

	// Get search parameters from current url. 
	const urlparams = new URLSearchParams(window.location.search);
	// console.log('Url search parameters:',urlparams);
	
	// Get selected post id. 
	selectedPostId = urlparams.get('id') || nullPostId;
	console.log('Selected post id:',selectedPostId);
}

// Load blog post. 
function loadBlogPost() {
	
	// Get post data for selected post. 
	const selectedPostData = getPostById(selectedPostId);
	console.log('Selected post data:',selectedPostData);

	// Display post on page. 
	postdestination.innerHTML = createPostLayout(selectedPostData);

	/****/

	// Create post layout. 
	function createPostLayout(post) {

		// Compile post layout. 
		return `
		<!-- title -->
		<h1 class="title">${ post.title }</h1>
		<!-- /title -->
		
		<!-- art -->
		<div class="art">
			<!-- art -->
			<img class="art" src="${ getRelativeUrl(post.picurl) }">
			<!-- /art -->
		</div>
		<!-- /art -->

		<!-- content -->
		<div class="content">
			${ (post.content).map(createParagraph).join('') }
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

// Load blog post comments. 
function loadBlogPostComments() {

	// Get list of comments. 
	let commentList = getAllCommentsByPostId(selectedPostId);
	console.log('Selected post:',commentList);

	// Format comments. 
	let commentLayouts = commentList.map(createCommentLayout);

	// Add formatted comments to page. 
	commentdestination.innerHTML = commentLayouts.join('');

	/****/

	// Create comment layout. 
	function createCommentLayout(comment) {

		// Get user data for comment author. 
		let commentauthor = getUserById(comment.authorid);

		// 
		return `
		<!-- commentitem -->
		<li class="commentitem">

			<!-- left -->
			<div class="left">
				
				<!-- avatar -->
				<img class="avatar" src="${ commentauthor ? getRelativeUrl(commentauthor.avatarurl) : '' }">
				<!-- /avatar -->

			</div>
			<!-- /left -->

			<!-- right -->
			<div class="right">

				<!-- top -->
				<div class="top">

					<!-- userlink -->
					<a class="userlink" href="javascript:void(0)">${ commentauthor ? commentauthor.username : '' }</a>
					<!-- /userlink -->

					<!-- comment -->
					<span class="comment">${comment.commentcontent}</span>
					<!-- /comment -->

				</div>
				<!-- /top -->

				<!-- bottom -->
				<div class="bottom">

					<!-- timestamp -->
					<span class="timestamp">Today at 12:30pm</span>
					<!-- /timestamp -->
					
					<!-- dot -->
					<span class="dot">⋅</span>
					<!-- /dot -->

					<!-- likebtn -->
					<a class="likebtn" href="javascript:void(0)">Like</a>
					<!-- /likebtn -->

				</div>
				<!-- /bottom -->

			</div>
			<!-- /right -->

		</li>
		<!-- /commentitem -->`;
	}
}
