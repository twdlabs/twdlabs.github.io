


// Get destination for recent posts. 
const recentdestination = document.querySelector('xyz');

// Get destination for story posts. 
const storiesdestination = document.querySelector('div#container section.stories ul.postlist');


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
	for(let post of blogDataList) {
		result += createStoryPostLayout(post);
	}

	// Add result to page. 
	storiesdestination.innerHTML = result;

	/****/

	// Create layout for story post. 
	function createStoryPostLayout(post) {

		// Get data for author. 
		let author = getUserById(post.authorid);
	
		// Get post publish date/time. 
		let pdt = post ? post.published : '';
		let dobj = new Date(pdt.year,pdt.month,pdt.date,0,0,0,0);
		let datetime = pdt ? dobj.valueOf() : '';

		// Compile layout for story post. 
		return `
		<!-- postitem -->
		<li class="postitem">

			<!-- postlink -->
			<a class="postlink" href="javascript:void(0)" style="background-image:url('${ post.imgurl }');">

				<!-- meta -->
				<div class="meta">

					<!-- date -->
					<span class="date">${ true ? t.formatDate(1*datetime) : t.formatTimeSince(1*datetime) }</span>
					<!-- /date -->

					<!-- title -->
					<span class="title">${ post.title }</span>
					<!-- /title -->

				</div>
				<!-- /meta -->

				<!-- author -->
				<div class="author">

					<!-- avatar -->
					<img class="avatar" src="${ author ? `../user/${author.avatarurl}` : '' }">
					<!-- /avatar -->

					<!-- name -->
					<span class="name">${ author ? author.fullname : '' }</span>
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
