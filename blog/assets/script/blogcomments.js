


// Get destination for comments in comment section. 
const commentdestination = document.querySelector('div#container section.comments ul.commentlist');

// Get new comment editor in comment section. 
const newcommenteditor = document.querySelector('div#container section.comments div.newcommentbox textarea#editor');

// Get destination for comment count. 
const commentcountdestination = document.querySelector('div#container section.comments h1.head span.commentcount');


/*****/


// Load blog post comments. 
loadBlogPostComments();


/*****/


// Load blog post comments. 
function loadBlogPostComments() {

	// Get list of comments. 
	let commentDataList = getAllCommentsByPostId(selectedPostId);
	// console.log('Selected post comments:',commentDataList);

	commentcountdestination.innerHTML = commentDataList.length;

	// Format comments. 
	let commentLayoutList = commentDataList.map(createCommentLayout);

	// Add formatted comments to page. 
	commentdestination.innerHTML = commentLayoutList.join('');
}

// Create comment layout. 
function createCommentLayout(commentdata) {

	// Get user data for comment author. 
	let commentauthor = getUserById(commentdata.authorid);

	// Get avatar url for comment author. 
	let avatarurl = commentauthor ? commentauthor.avatarurl : '';

	// Get contents of comment. 
	let commentcontent = commentdata.commentcontent;

	// Get time since comment. 
	let timesincecomment = t.formatTimeSince( 1 * commentdata.timeposted );

	// TODO: Get number of comment likes. 
	let commentlikecount = 0;

	// Compile comment layout. 
	return `
	<!-- commentitem -->
	<li class="commentitem">

		<!-- left -->
		<div class="left">
			
			<!-- avatar -->
			<img class="avatar" src="${ (`../../user/${avatarurl}`) }">
			<!-- /avatar -->

		</div>
		<!-- /left -->

		<!-- right -->
		<div class="right">

			<!-- top -->
			<div class="top">

				<!-- userlink -->
				<a class="userlink" href="javascript:void(0)">${ commentauthor ? commentauthor.fullname : '' }</a>
				<!-- /userlink -->

				<!-- comment -->
				<span class="comment">${ commentcontent }</span>
				<!-- /comment -->

			</div>
			<!-- /top -->

			<!-- bottom -->
			<div class="bottom">

				<!-- timestamp -->
				<span class="timestamp">${ timesincecomment }</span>
				<!-- /timestamp -->
				
				<!-- dot -->
				<span class="dot">⋅</span>
				<!-- /dot -->

				<!-- likebtn -->
				<a class="likebtn" href="javascript:void(0)">Like</a>
				<!-- /likebtn -->

				<!-- dot -->
				<span class="dot ${ (commentlikecount<=0) ? 'gone' : '' }">⋅</span>
				<!-- /dot -->

				<!-- likecounter -->
				<div class="likecounter ${ (commentlikecount<=0) ? 'gone' : '' }">

					<!-- icon -->
					<svg class="icon thumbup" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
					</svg>
					<!-- /icon -->

					<!-- count -->
					<span class="count">${ commentlikecount }</span>
					<!-- /count -->
					
				</div>
				<!-- /likecounter -->

			</div>
			<!-- /bottom -->

		</div>
		<!-- /right -->

	</li>
	<!-- /commentitem -->`;
}

// TODO: Add new comment. 
function addNewComment() {

	// Get contents of new comment. 
	newcommentcontent = newcommenteditor.value;

	// Clear contents of box for new comment. 
	newcommenteditor.value = '';

	// TODO: Define data for new comment. 
	let newcommentdata = {
		postid:selectedPostId,
		authorid:'xyz',
		commentcontent:newcommentcontent,
	}

	// Save data for new comment to list of comments. 
	blogCommentDataList.push(newcommentdata);

	// Create layout for new comment. 
	let newcommentlayout = createCommentLayout(newcommentdata);
	// Add new comment layout to page. 
	commentdestination.insertAdjacentHTML('beforeend',newcommentlayout);
}
