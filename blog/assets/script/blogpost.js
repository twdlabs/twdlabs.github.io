


// Get hero section. 
const herosection = document.querySelector('div#container section.hero');

// Get destination for post head. 
const postherodestination = document.querySelector('div#container section.hero main.grid');

// Get destination for post body. 
const postbodydestination = document.querySelector('div#container section.body main.grid');

// Get destination for author bio. 
const authorbiodestination = document.querySelector('div#container section.author main.grid');

// Get destination for list of other posts. 
const otherpostsdestination = document.querySelector('div#container section.otherposts main.grid ul.postlist');


/*****/


// Create time calculator. 
const t = new TimeCalculator();

// Define site title. 
const sitetitle = 'TWDLabs';


/*****/


// Load contents of blog post. 
loadBlogPostContent();

// Load author of blog post. 
loadBlogPostAuthor();

// Load other blog posts. 
loadOtherBlogPosts();


/*****/


// Load contents of blog post. 
function loadBlogPostContent() {

	// Load metadata for selected post. 
	loadPostMeta(selectedPostData);

	// Display full layout for selected post. 
	loadPostLayout(selectedPostData);

	/****/

	// Load metadata for given post into hero header. 
	function loadPostMeta(post) {

		// Get post title. 
		let title = post ? post.title : '';
	
		// Get data for post author. 
		let author = post ? getUserById(post.authorid) : null;
		// Get name of post author. 
		let authorname = author ? author.fullname : '';

		// Display in post hero section: title, author, art. 
		postherodestination.innerHTML = `
		<!-- title -->
		<h1 class="head title">${ title }</h1>
		<!-- /title -->
	
		<!-- author -->
		<h2 class="head author ${ (author&&author.admin) ? 'admin' : '' }">
	
			<!-- caption -->
			<span class="caption">${ authorname }</span>
			<!-- /caption -->
	
			<!-- icon -->
			<svg class="icon admincheck" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
			</svg>
			<!-- /icon -->
	
		</h2>
		<!-- /author -->`;

		// Get url for post art. 
		let arturl = post ? getRelativeUrl(post.imgurl) : '';
		// Display post art behind hero section. 
		herosection.style.backgroundImage = `url('${arturl}')`;
	}

	// Load full layout for given post. 
	function loadPostLayout(post) {
		// console.log('Current post data:',post);
	
		// Get post publish date/time. 
		let datetime = post ? post.timeposted : '';
	
		// Compile post layout: date, media, article content. Display in post body section. 
		postbodydestination.innerHTML = `
		${ createHeadLayout() }
		${ createMediaLayout() }
		${ createArticleLayout() }
		${ createNavigatorLayout() }
		`;
	
		/***/

		// Create layout for post head. 
		function createHeadLayout() {

			// 
			return ``;
		}

		// Create layout for post media. 
		function createMediaLayout() {
		
			// Get url for post video. 
			let vidurl = post ? getRelativeUrl(post.vidurl) : '';

			// Sort list of blog posts chronologically. 
			// console.log('Blog post list (unsorted):', blogDataList.map(x=>x.postid) );
			blogDataList.sort( (a,b) => b.timeposted-a.timeposted );
			// console.log('Blog post list (sorted by time):', blogDataList.map(x=>x.postid) );
		
			// Get content of playlist. 
			let playlistcontent = createPlayListLayout(blogDataList);

			// 
			return `
			<!-- media -->
			<article class="media full">
	
				<!-- vid -->
				<div class="vid">
	
					<!-- video -->
					<video class="video" src="${ vidurl }" controls autoplay muted loop></video>
					<!-- /video -->
	
				</div>
				<!-- /vid -->
	
				<!-- playlist -->
				<div class="playlist">
	
					<!-- listhead -->
					<div class="listhead">
	
						<!-- listtitle -->
						<h1 class="listtitle">${ sitetitle }</h1>
						<!-- /listtitle -->
	
						<!-- listcount -->
						<h2 class="listcount">
	
							<!-- count -->
							<span class="count">${ blogDataList.length }</span>
							<!-- /count -->
	
							<!-- caption -->
							<span class="caption">Posts</span>
							<!-- /caption -->
	
						</h2>
						<!-- /listcount -->
	
					</div>
					<!-- /listhead -->
	
					<!-- postlist -->
					<ul class="postlist">
	
						${ playlistcontent }
	
					</ul>
					<!-- /postlist -->

					<!-- listfoot -->
					<div class="listfoot">

						<!-- navlink -->
						<a class="navlink" href="javascript:void(0)">Next Category</a>
						<!-- /navlink -->

					</div>
					<!-- /listfoot -->
	
				</div>
				<!-- /playlist -->
	
			</article>
			<!-- /media -->`;
	
			/**/

			// Create layout for playlist. 
			function createPlayListLayout(playlistdata) {
				// console.log('playlistdata:',playlistdata);
	
				// Initialize result. 
				let result = '';
	
				// 
				for(let i in playlistdata) {
					// 
					let playlistitem = playlistdata[i];
					result += createPlayItemLayout( i , playlistitem )
				}
	
				// Return result. 
				return result;
	
				/**/
	
				// Create layout for playlist item. 
				function createPlayItemLayout(i,playlistitem) {
					
					// 
					return `
					<!-- postitem -->
					<li class="postitem ${ (i==selectedPostIndex)?'on':'' } ${ (playlistitem.completed)?'done':'' }">
	
						<!-- link -->
						<a class="link" href="../post/?bpid=${ playlistitem.postid }">
	
							<!-- icon -->
							<svg class="icon play" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
							</svg>
							<!-- /icon -->
	
							<!-- index -->
							<span class="index">${ (i*1+1) }</span>
							<!-- /index -->
	
							<!-- preview -->
							<img class="preview" src="${ getRelativeUrl(playlistitem.imgurl) }">
							<!-- /preview -->
	
							<!-- caption -->
							<span class="caption">${ playlistitem.title }</span>
							<!-- /caption -->
	
							<!-- completion -->
							<span class="completion">
	
								<!-- icon -->
								<svg class="icon check" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
									<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
								</svg>
								<!-- /icon -->
								
							</span>
							<!-- /completion -->
							
						</a>
						<!-- /link -->
	
					</li>
					<!-- /postitem -->`;
				}
			}
		}

		// Create layout for post article. 
		function createArticleLayout() {
	
			// Get url for post image. 
			let arturl = post ? getRelativeUrl(post.imgurl) : '';
		
			// Get post content. 
			let textcontent = post ? (post.content).map(createParagraphLayout).join('') : '';
			// console.log( post ? (post.content) : '' );

			// Get author data. 
			let authordata = post ? getUserById(post.authorid) : null;

			// 
			return `
			<!-- post -->
			<article class="post">
			
				<!-- transcript -->
				<div class="transcript">
	
					<!-- title -->
					<h1 class="head title">${ post.title }</h1>
					<!-- /title -->

					<!-- meta -->
					<aside class="meta">
			
						<!-- caption -->
						<span class="caption">Published</span>
						<!-- /caption -->
			
						<!-- date -->
						<span class="date">${ datetime ? t.formatDate(datetime) : '' }</span>
						<!-- /date -->
			
					</aside>
					<!-- /meta -->
	
					<!-- art -->
					<div class="art">
						<!-- art -->
						<img class="art" src="${ arturl }">
						<!-- /art -->
					</div>
					<!-- /art -->
	
					${ textcontent ? textcontent : '' }
				
				</div>
				<!-- /transcript -->
	
				<!-- authorbio -->
				<div class="authorbio">

					<!-- head -->
					<h1 class="head">Author</h1>
					<!-- /head -->

					<!-- userbadge -->
					<div class="userbadge">

						<!-- avatar -->
						<img class="avatar" src="${ authordata ? getRelativeUrl(`../user/${authordata.avatarurl}`) : '' }">
						<!-- /avatar -->

						<!-- caption -->
						<span class="caption">

							<!-- name -->
							<span class="name">${ authordata ? authordata.fullname : '' }</span>
							<!-- /name -->
	
							<!-- position -->
							<span class="position">${ authordata ? authordata.position : '' }</span>
							<!-- /position -->

						</span>
						<!-- /caption -->

					</div>
					<!-- /userbadge -->
	
					<!-- briefbio -->
					<p class="briefbio">
						${ authordata ? authordata.bio : '' }
					</p>
					<!-- /briefbio -->
	
					<!-- avatar -->
					<img class="avatar float" src="${ authordata ? getRelativeUrl(`../user/${authordata.avatarurl}`) : '' }">
					<!-- /avatar -->
	
				</div>
				<!-- /authorbio -->
				
			</article>
			<!-- /post -->`;
	
			/**/
	
			// Create layout for paragraph. 
			function createParagraphLayout(paragraphtext) {
				// Compile paragraph. 
				return `
				<!-- textcopy -->
				<p class="textcopy">${ paragraphtext }</p>
				<!-- /textcopy -->`
			}
		}

		// Create layout for post navigator. 
		function createNavigatorLayout() {

			// Get url of previous post. 
			let prevposturl = getPrevPostUrl();

			// Get number of current post. 
			let postnum = (selectedPostIndex*1) + 1;

			// Get total number of posts. 
			let postcount = blogDataList.length;

			// Get url of following post. 
			let nextposturl = getNextPostUrl();

			// 
			return `
			<!-- navigator -->
			<div class="navigator">

				<!-- navlink -->
				<a class="navlink ${ prevposturl ? '' : 'x' }" href="${ prevposturl }">

					<!-- icon -->
					<svg class="icon arrowleft" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
					</svg>
					<!-- /icon -->

					<!-- caption -->
					<span class="caption">Back</span>
					<!-- /caption -->
					
				</a>
				<!-- /navlink -->

				<!-- position -->
				<div class="position">

					<!-- caption -->
					<span class="caption">Post<br></span>
					<!-- /caption -->

					<!-- caption -->
					<div class="caption">

						<!-- num -->
						<span class="num">${ postnum }</span>
						<!-- /num -->
	
						<!-- caption -->
						<span class="caption">of</span>
						<!-- /caption -->
	
						<!-- num -->
						<span class="num">${ postcount }</span>
						<!-- /num -->
						
					</div>
					<!-- /caption -->
					
				</div>
				<!-- /position -->

				<!-- navlink -->
				<a class="navlink ${ nextposturl ? '' : 'x' }" href="${ nextposturl }">

					<!-- caption -->
					<span class="caption">Next</span>
					<!-- /caption -->

					<!-- icon -->
					<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
					</svg>
					<!-- /icon -->
					
				</a>
				<!-- /navlink -->

			</div>
			<!-- /navigator -->`;
	
			/**/

			// TODO: Get url of given post. 
			function getPostUrl() {

				// 
			}

			// Get url of previous post. 
			function getPrevPostUrl() {

				// Get id of previous post. 
				let postid = getPrevPostId();

				// Return url if post id valid, otherwise return nothing. 
				return ( postid ? `../post/?bpid=${ postid }` : '' );

				// Get id of previous post. 
				function getPrevPostId() {
					// console.log('Blog post ids:', blogDataList.map(x=>x.postid) );
					return ( selectedPostId && blogDataList[selectedPostIndex*1-1] ) ? blogDataList[selectedPostIndex*1-1].postid : '';
				}
			}

			// Get url of following post. 
			function getNextPostUrl() {

				// Get id of following post. 
				let postid = getNextPostId();

				// Return url if post id valid, otherwise return nothing. 
				return ( postid ? `../post/?bpid=${ postid }` : '' );

				// Get id of following post. 
				function getNextPostId() {
					// console.log('Blog post ids:', blogDataList.map(x=>x.postid) );
					return ( selectedPostId && blogDataList[selectedPostIndex*1+1] ) ? blogDataList[selectedPostIndex*1+1].postid : '';
				}
			}
		}
	}
}

// Load author of blog post. 
function loadBlogPostAuthor() {
	
	// Get user data for author of selected post. 
	const postauthor = selectedPostData ? getUserById(selectedPostData.authorid) : null;
	// console.log('Selected post author:',postauthor);

	// Display author post on page. 
	if(postauthor) authorbiodestination.innerHTML = createAuthorLayout(postauthor);

	/****/

	// Create layout for author of selected post. 
	function createAuthorLayout(user) {
		// console.log('Author data:',user);

		// 
		return user ? `
		<!-- name -->
		<h1 class="name">${ user.fullname }</h1>
		<!-- /name -->

		<!-- briefbio -->
		<p class="briefbio">${ user.bio }</p>
		<!-- /briefbio -->

		<!-- avatar -->
		<img class="avatar float" src="${ `../../user/${user.avatarurl}` }">
		<!-- /avatar -->` : '';
	}
}

// Load list of other blog posts. 
function loadOtherBlogPosts() {

	// Intialize result. 
	let result = '';

	// Sort list of blog posts chronologically. 
	// console.log('Blog post list:', blogDataList.map(x=>x.postid) );
	blogDataList.sort( (a,b) => b.timeposted-a.timeposted );
	// console.log('Blog post list:', blogDataList.map(x=>x.postid) );

	// Intialize number of posts loaded. 
	let postcount = 0;
	// Go thru all posts. 
	for(let post of blogDataList) {

		// Check if other post is same post. 
		let onSamePost = post.postid == selectedPostId;

		// Add layout for given post. 
		if(onSamePost) continue;
		else result += createBlogPostLayout(post);

		// Increment number of posts loaded. 
		postcount ++;
		// Limit number of posts to predefined amount. 
		if(postcount>=maxmoreposts) break;
	}

	// Add result to page. 
	otherpostsdestination.innerHTML = result;
}
