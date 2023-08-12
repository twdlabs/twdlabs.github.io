


// Define character limit for post excerpts. 
const excerptcharlimit = 150;

// Define maximum amount of more posts. 
const maxmoreposts = 4;


/*****/


// Create blog post layout. 
function createBlogPostLayout(post) {

	// Choose whether or not to use full layout. 
	let useFullLayout = false;

	// Get author of post. 
	let author = getUserById(post.authorid);
	// console.log('Author:',post.authorid,author,post);
	// if(!author) return '';

	// Get list of matching comments. 
	let commentlist = getAllCommentsByPostId(post.postid);

	// Define current user id. 
	let currentUserId = 'aventura';
	// let currentUserId = 'bdiamond';

	// Get data for current user. 
	let currentUser = getUserById(currentUserId);

	// Compile layout for given post. 
	if(useFullLayout) return compileFullPostLayout();
	else return compilePostLayout();

	/***/

	// Compile layout for given post. 
	function compilePostLayout() {

		// 
		return `
		<!-- postcard -->
		<li class="postcard">

			<!-- preview -->
			<div class="preview">

				<!-- artlink -->
				<a class="artlink" href="${ getRelativeUrl(`./post/?bpid=${post.postid}`) }" target="_blank">

					<!-- preview -->
					<img class="preview" src="${ getRelativeUrl(post.imgurl) }">
					<!-- /preview -->

				</a>
				<!-- /artlink -->

			</div>
			<!-- /preview -->

			<!-- content -->
			<div class="content">

				<!-- textlink -->
				<a class="textlink" href="${ getRelativeUrl(`./post/?bpid=${post.postid}`) }" target="_blank">

					<!-- title -->
					<h1 class="title">${ post.title }</h1>
					<!-- /title -->

					<!-- username -->
					<h2 class="username">${ author ? author.fullname : '' }</h2>
					<!-- /username -->

				</a>
				<!-- /textlink -->
				
			</div>
			<!-- /content -->

		</li>
		<!-- /postcard -->`;
	}

	// Compile full layout for given post. 
	function compileFullPostLayout() {

		// 
		return `
		<!-- postcard -->
		<li class="postcard full ${ currentUser ? (currentUser.admin ? 'controls' : '') : '' }">
	
			<!-- preview -->
			<div class="preview">
	
				<!-- artlink -->
				<a class="artlink" href="${ getRelativeUrl(`./post/?bpid=${post.postid}`) }" target="_blank">
		
					<!-- preview -->
					<img class="preview" src="${ getRelativeUrl(post.imgurl) }">
					<!-- /preview -->
		
				</a>
				<!-- /artlink -->
	
				<!-- adminpanel -->
				<div class="adminpanel">
		
					<!-- editbtn -->
					<a class="btn editbtn" href="./editor?id=0" target="_blank">
		
						<!-- icon -->
						<svg class="icon pencilsquare" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
							<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
						</svg>
						<!-- /icon -->
						
					</a>
					<!-- /editbtn -->
		
					<!-- deletebtn -->
					<a class="btn deletebtn" href="javascript:void(0)">
		
						<!-- icon -->
						<svg class="icon trashbin" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
						</svg>
						<!-- /icon -->
						
					</a>
					<!-- /deletebtn -->
		
				</div>
				<!-- /adminpanel -->
	
			</div>
			<!-- /preview -->
	
			<!-- content -->
			<div class="content">
	
				<!-- bar -->
				<div class="bar">
		
					<!-- titlelink -->
					<a class="titlelink" href="${ getRelativeUrl(`./post/?bpid=${post.postid}`) }" target="_blank">

						<!-- title -->
						<h1 class="title">${ post.title }</h1>
						<!-- /title -->

					</a>
					<!-- /titlelink -->
	
					<!-- commentcount -->
					<a class="commentcount" href="${ getRelativeUrl(`./post/?bpid=${post.postid}`) }#comments" target="_blank">
	
						<!-- icon -->
						<svg class="icon commentbubble" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
							<path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
						</svg>
						<!-- /icon -->
	
						<!-- count -->
						<span class="count">${ commentlist.length }</span>
						<!-- /count -->
	
					</a>
					<!-- /commentcount -->
	
				</div>
				<!-- /bar -->
	
				<!-- bar -->
				<div class="bar">
	
					<!-- userbadge -->
					<a class="userbadge ${ author ? (author.admin ? 'admin' : '') : '' }" href="${ getRelativeUrl(`../user/?id=${ author ? author.userid : '' }`) }" target="_blank">
	
						<!-- avatar -->
						<img class="avatar" src="${ author ? getRelativeUrl(`../user/${author.avatarurl}`) : '' }" title="${ author ? author.userid : '' }">
						<!-- /avatar -->
	
						<!-- username -->
						<span class="username">${ author ? author.fullname : '' }</span>
						<!-- /username -->
	
					</a>
					<!-- /userbadge -->
	
					<!-- timestamp -->
					<span class="timestamp">${ t.formatTimeSince(post.timeposted) }</span>
					<!-- /timestamp -->
	
				</div>
				<!-- /bar -->
	
				<!-- textcopy -->
				<p class="textcopy">${ getExcerpt(post.content) }</p>
				<!-- /textcopy -->
	
				<!-- ctabox -->
				<div class="ctabox">
	
					<!-- readbtn -->
					<a class="readbtn" href="${ getRelativeUrl(`./post/?bpid=${post.postid}`) }" target="_blank">
	
						<!-- caption -->
						<span class="caption">Read More</span>
						<!-- /caption -->
	
					</a>
					<!-- /readbtn -->
	
				</div>
				<!-- /ctabox -->
				
			</div>
			<!-- /content -->
	
		</li>
		<!-- /postcard -->`;

		/**/

		// Get excerpt of post content. 
		function getExcerpt(paragraphList) {
	
			// Get combined content. 
			let postcontent = paragraphList.join(' ');
	
			// Handle short post content. 
			if(postcontent.length<excerptcharlimit) return postcontent;
	
			// Handle long post content. 
			else return postcontent.substr(0,excerptcharlimit) + '...';
		}
	}
}
