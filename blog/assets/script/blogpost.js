


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


/*****/


// Load blog post. 
loadBlogPost();

// Load blog author. 
loadBlogAuthor();

// Load other blog posts. 
loadOtherBlogPosts();


/*****/


// Load blog post. 
function loadBlogPost() {

	// Load metadata for selected post. 
	loadPostMetadata(selectedPostData);

	// Display full layout for selected post. 
	loadFullPostLayout(selectedPostData);

	/****/

	// Load metadata for given post. 
	function loadPostMetadata(post) {

		// Get post title. 
		let title = post ? post.title : '';
	
		// Get data for post author. 
		let author = post ? getUserById(post.authorid) : null;
		// Get name of post author. 
		let authorname = author ? author.fullname : '';

		// Display in post hero section: title, author, art. 
		postherodestination.innerHTML = `
		<!-- posttitle -->
		<h1 class="head posttitle">
	
			<!-- caption -->
			<span class="caption">${ title }</span>
			<!-- /caption -->
	
		</h1>
		<!-- /posttitle -->
	
		<!-- postauthor -->
		<h2 class="head postauthor ${ (author&&author.admin) ? 'admin' : '' }">
	
			<!-- caption -->
			<span class="caption">${ authorname }</span>
			<!-- /caption -->
	
			<!-- icon -->
			<svg class="icon admincheck" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
			</svg>
			<!-- /icon -->
	
		</h2>
		<!-- /postauthor -->`;

		// Get url for post art. 
		let arturl = post ? getRelativeUrl(post.imgurl) : '';
		// Display post art behind hero section. 
		herosection.style.backgroundImage = `url('${arturl}')`;
	}

	// Load full layout for given post. 
	function loadFullPostLayout(post) {
		console.log('post:',post);
	
		// Get post publish date/time. 
		let datetime = post ? post.timeposted : '';
	
		// Compile post layout: date, media, article content. Display in post body section. 
		postbodydestination.innerHTML = `
		${ createHeadLayout() }
		${ createMediaLayout() }
		${ createArticleLayout() }
		`;
	
		/***/

		// Create layout for post head. 
		function createHeadLayout() {

			// 
			return `
			<!-- meta -->
			<aside class="meta">
	
				<!-- caption -->
				<span class="caption">Published</span>
				<!-- /caption -->
	
				<!-- date -->
				<span class="date">${ datetime ? t.formatDate(datetime) : '' }</span>
				<!-- /date -->
	
			</aside>
			<!-- /meta -->`;
		}

		// Create layout for post media. 
		function createMediaLayout() {
		
			// Get url for post video. 
			let vidurl = post ? getRelativeUrl(post.vidurl) : '';

			// Sort list of blog posts chronologically. 
			console.log('blog data list:', blogdata.map(x=>x.postid) );
			blogdata.sort( (a,b) => b.timeposted-a.timeposted );
			console.log('blog data list:', blogdata.map(x=>x.postid) );
		
			// Get content of playlist. 
			let playlistcontent = createPlayListLayout(blogdata);

			// 
			return `
			<!-- media -->
			<article class="media">
	
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
						<h1 class="listtitle">TWDLabs</h1>
						<!-- /listtitle -->
	
						<!-- listcount -->
						<h2 class="listcount">
	
							<!-- count -->
							<span class="count">${ blogdata.length }</span>
							<!-- /count -->
	
							<!-- caption -->
							<span class="caption">Lessons</span>
							<!-- /caption -->
	
						</h2>
						<!-- /listcount -->
	
					</div>
					<!-- /listhead -->
	
					<!-- list -->
					<ul class="list">
	
						${ playlistcontent }
	
					</ul>
					<!-- /list -->

					<!-- listfoot -->
					<div class="listfoot">

						<!-- navlink -->
						<a class="navlink" href="javascript:void(0)">Next Category</a>
						<!-- /navlink -->

					</div>
					<!-- /listfoot -->
	
				</div>
				<!-- /playlist -->
	
				<!-- navigator -->
				<div class="navigator">
	
					<!-- navlink -->
					<a class="navlink" href="${ getPrevPostUrl() }">
	
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
					<span class="position">
	
						<!-- caption -->
						<span class="caption">Lesson</span>
						<!-- /caption -->
	
						<!-- num -->
						<span class="num">${ (selectedPostIndex*1+1) }</span>
						<!-- /num -->
	
						<!-- caption -->
						<span class="caption">of</span>
						<!-- /caption -->
	
						<!-- num -->
						<span class="num">${ blogdata.length }</span>
						<!-- /num -->
						
					</span>
					<!-- /position -->
	
					<!-- navlink -->
					<a class="navlink" href="${ getNextPostUrl() }">
	
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
				<!-- /navigator -->
	
			</article>
			<!-- /media -->`;
	
			/**/

			// Create layout for playlist. 
			function createPlayListLayout(playlistdata) {
				console.log('playlistdata:',playlistdata);
	
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
					<!-- item -->
					<li class="item ${ (i==selectedPostIndex)?'on':'' } ${ (playlistitem.completed)?'done':'' }">
	
						<!-- link -->
						<a class="link" href="../post/?id=${ playlistitem.postid }">
	
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
					<!-- /item -->`;
				}
			}

			// TODO: Get url of given post. 
			function getPostUrl() {

				// 
			}

			// TODO: Get url of previous post. 
			function getPrevPostUrl() {

				// Get id of previous post. 
				let postid = getPrevPostId();

				// Return empty link url if no valid post id. 
				if(!postid) return 'javascript:void(0)';

				// Return compiled result with valid post id. 
				return `../post/?id=${ postid }`;

				// Get id of previous post. 
				function getPrevPostId() {
					console.log('blogdata:',blogdata.map(x=>x.postid) );
					return ( selectedPostId && blogdata[selectedPostIndex*1-1] ) ? blogdata[selectedPostIndex*1-1].postid : '';
				}
			}

			// TODO: Get url of following post. 
			function getNextPostUrl() {

				// Get id of following post. 
				let postid = getNextPostId();

				// Return empty link url if no valid post id. 
				if(!postid) return 'javascript:void(0)';

				// Return compiled result with valid post id. 
				return `../post/?id=${ postid }`;

				// Get id of following post. 
				function getNextPostId() {
					console.log('blogdata:',blogdata.map(x=>x.postid) );
					return ( selectedPostId && blogdata[selectedPostIndex*1+1] ) ? blogdata[selectedPostIndex*1+1].postid : '';
				}
			}
		}

		// Create layout for post article. 
		function createArticleLayout() {
	
			// Get url for post image. 
			let arturl = post ? getRelativeUrl(post.imgurl) : '';
		
			// Get post content. 
			let content = post ? (post.content).map(createParagraphLayout).join('') : '';

			// Get author data. 
			let authordata = post ? getUserById(post.authorid) : null;

			// 
			return `
			<!-- post -->
			<article class="post">
			
				<!-- content -->
				<div class="content">
	
					<!-- art -->
					<div class="art">
						<!-- art -->
						<img class="art" src="${ arturl }">
						<!-- /art -->
					</div>
					<!-- /art -->
	
					${ content }
				
				</div>
				<!-- /content -->
	
				<!-- sidepanel -->
				<div class="sidepanel">
	
					<!-- avatar -->
					<img class="avatar float" src="${ authordata ? getRelativeUrl(`../user/${authordata.avatarurl}`) : '' }">
					<!-- /avatar -->

					<!-- head -->
					<h1 class="head">Instructor</h1>
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
	
				</div>
				<!-- /sidepanel -->
				
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
	}
}

// Load blog author. 
function loadBlogAuthor() {
	
	// Get user data for author of selected post. 
	const postauthor = selectedPostData ? getUserById(selectedPostData.authorid) : null;
	// console.log('Selected post author:',postauthor);

	// Display author post on page. 
	authorbiodestination.innerHTML = createAuthorLayout(postauthor);

	/****/

	// Create layout for author of selected post. 
	function createAuthorLayout(user) {
		// console.log('Author:',user);

		// 
		return `
		<!-- name -->
		<h1 class="name">${ user ? user.fullname : '' }</h1>
		<!-- /name -->

		<!-- briefbio -->
		<p class="briefbio">${ user ? user.bio : '' }</p>
		<!-- /briefbio -->

		<!-- avatar -->
		<img class="avatar" src="${ user ? `../../user/${user.avatarurl}` : '' }">
		<!-- /avatar -->`;
	}
}

// Load other blog posts. 
function loadOtherBlogPosts() {

	// Intialize result. 
	let result = '';

	// Sort list of blog posts chronologically. 
	console.log('blog data list:', blogdata.map(x=>x.postid) );
	blogdata.sort( (a,b) => b.timeposted-a.timeposted );
	console.log('blog data list:', blogdata.map(x=>x.postid) );

	// Intialize number of posts loaded. 
	let postcount = 0;
	// Go thru all posts. 
	for(let post of blogdata) {

		// Add layout for given post. 
		result += createBlogPostLayout(post);

		// Increment number of posts loaded. 
		postcount ++;
		// Limit number of posts to predefined amount. 
		if(postcount>=maxmoreposts) break;
	}

	// Add result to page. 
	otherpostsdestination.innerHTML = result;
}
