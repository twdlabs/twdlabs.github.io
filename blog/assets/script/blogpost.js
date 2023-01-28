


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

	// Display article layout for selected post. 
	loadFullArticleLayout(selectedPostData);

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
		<h2 class="head postauthor ${ author.admin ? 'admin' : '' }">
	
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
		let arturl = post ? getRelativeUrl(post.picurl) : '';
		// Display post art behind hero section. 
		herosection.style.backgroundImage = `url('${arturl}')`;
	}

	// Load full article layout for given post. 
	function loadFullArticleLayout(post) {
	
		// Get post publish date/time. 
		let datetime = post ? post.timeposted : '';
	
		// Get url for post art. 
		let arturl = post ? getRelativeUrl(post.picurl) : '';
		
		// Get post content. 
		let content = post ? (post.content).map(createParagraph).join('') : '';
	
		// Compile post layout. 
		// Display in post body section: date, art, content. 
		postbodydestination.innerHTML = `
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

		<!-- post -->
		<article class="post">

			<!-- art -->
			<div class="art">
				<!-- art -->
				<img class="art" src="${ arturl }">
				<!-- /art -->
			</div>
			<!-- /art -->
		
			<!-- content -->
			<div class="content">${ content }</div>
			<!-- /content -->
			
		</article>
		<!-- /post -->`;
	
		/***/
	
		// Create paragraph. 
		function createParagraph(paragraphtext) {
			// Compile paragraph. 
			return `
			<!-- textcopy -->
			<p class="textcopy">${ paragraphtext }</p>
			<!-- /textcopy -->`
		}
	}
}

// Load blog author. 
function loadBlogAuthor() {
	
	// Get user data for author of selected post. 
	const postauthor = getUserById(selectedPostData.authorid);
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
		<h1 class="name">${ user.fullname }</h1>
		<!-- /name -->

		<!-- briefbio -->
		<p class="briefbio">${ user.bio }</p>
		<!-- /briefbio -->

		<!-- avatar -->
		<img class="avatar" src="${ `../../user/${user.avatarurl}` }">
		<!-- /avatar -->`;
	}
}

// Load other blog posts. 
function loadOtherBlogPosts() {

	// Intialize result. 
	let result = '';

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
