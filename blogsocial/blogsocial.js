


// Get destination for recent posts. 
const recentdestination = document.querySelector('xyz');

// Get destination for story posts. 
const storiesdestination = document.querySelector('div#container main.pagecontent section.stories ul.postlist');


/*****/


// Create time calculator. 
const t = new TimeCalculator();


/*****/


// Load story posts. 
loadStoryPosts();

// Load recent posts. 
loadRecentPosts();


/*****/


// Load story posts. 
function loadStoryPosts() {

	// Initialize result. 
	let result = '';

	// Go thru all post data items. 
	for(let post of storyPostData) {
		result += createStoryPostLayout(post);
	}

	// Add result to page. 
	storiesdestination.innerHTML = result;

	/****/

	// Create layout for story post. 
	function createStoryPostLayout(post) {

		// Get data for author. 
		let author = getUserById(post.authorid);

		// Compile layout for story post. 
		return `
		<!-- postitem -->
		<li class="postitem">

			<!-- postlink -->
			<a class="postlink" href="javascript:void(0)">

				<!-- space -->
				<div class="space"></div>
				<!-- /space -->

				<!-- content -->
				<div class="content">

					<!-- date -->
					<span class="date">${ `${post.createdAt} ${t.formatTimeSince(1*post.createdAt)}` }</span>
					<!-- /date -->

					<!-- title -->
					<span class="title">${ post.title }</span>
					<!-- /title -->

				</div>
				<!-- /content -->

				<!-- author -->
				<div class="author">

					<!-- avatar -->
					<img class="avatar" src="${ `../user/${author.avatarurl}` }">
					<!-- /avatar -->

					<!-- name -->
					<span class="name">${ author.fullname }</span>
					<!-- /name -->

				</div>
				<!-- /author -->

			</a>
			<!-- /postlink -->

		</li>
		<!-- /postitem -->`;
	}
}

// Load recent posts. 
function loadRecentPosts() {

	// 
}
