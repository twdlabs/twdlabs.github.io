


// Get destination for featured post. 
const featuredestination = document.querySelector('div#container section.feature main.grid article.media');

// Get destination for list of posts. 
const bloglistdestination = document.querySelector('div#container section.allposts main.grid ul.postlist');

// Get destination for block of blog contributors. 
const contributorsdestination = document.querySelector('div#container section.contributors main.grid');


/*****/


// Create time calculator. 
const t = new TimeCalculator();


/*****/


// Load featured blog post. 
loadFeaturedPost();

// Load blog posts. 
loadBlogPosts();

// Load list of blog contributors. 
loadBlogContibutors();


/*****/


// Load featured blog post. 
function loadFeaturedPost() {

	// Set if latest post. 
	let isLatestPost = false;
	isLatestPost = true;

	// Default to latest post. 
	let featuredpostindex = 0;
	// Otherwise, choose featured post. 
	if(!isLatestPost) {
		let r = Math.random();
		featuredpostindex = Math.floor(r*blogDataList.length);
	}
	
	// Get data for featured post. 
	let featuredpost = blogDataList[featuredpostindex];
	console.log('Featured post:',featuredpostindex,featuredpost);

	// Get url of video source. 
	let vidsrcurl = './../../video/assets/videos/0000001.mp4';
	vidsrcurl = featuredpost.vidurl;

	// Get url of video image placeholder. 
	let vidplaceholderurl = './../video/assets/images/0000001.png';
	vidplaceholderurl = featuredpost.imgurl;

	// Get title of featured post. 
	let posttitle = 'Title of Featured Post';
	posttitle = featuredpost.title;

	// Get id of featured post. 
	let featuredbpid = '0';
	featuredbpid = featuredpost.postid;

	// Compile result. 
	let result = `
	<!-- vid -->
	<div class="vid">

		<!-- video -->
		<video class="video" src="${ vidsrcurl }" controls autoplay muted loop></video>
		<!-- /video -->

	</div>
	<!-- /vid -->

	<!-- cover -->
	<div class="cover">

		<!-- bgpic -->
		<div class="bgpic" style="background-image:url('${ vidplaceholderurl }');"></div>
		<!-- /bgpic -->
		
		<!-- contents -->
		<div class="contents">

			<!-- tag -->
			<div class="tag">${ isLatestPost ? 'Latest Post' : 'Featured Post' }</div>
			<!-- /tag -->

			<!-- head -->
			<h1 class="head">${ posttitle ? posttitle : '' }</h1>
			<!-- /head -->

			<!-- linkbox -->
			<ul class="linkbox">

				<!-- linkitem -->
				<li class="linkitem">

					<!-- link -->
					<a class="link p" href="./post/?bpid=${featuredbpid}">See Post</a>
					<!-- /link -->

				</li>
				<!-- /linkitem -->

				<!-- linkitem -->
				<li class="linkitem">

					<!-- link -->
					<a class="link s" href="./allposts">View More Posts</a>
					<!-- /link -->

				</li>
				<!-- /linkitem -->

			</ul>
			<!-- /linkbox -->
			
		</div>
		<!-- /contents -->

	</div>
	<!-- /cover -->`;

	// Add result to page. 
	featuredestination.innerHTML = result;
}

// Load list of blog posts. 
function loadBlogPosts() {

	// Initialize result. 
	let result = '';
	
	// Go thru all posts. 
	for(let post of blogDataList) {
		
		// Add layout for given post. 
		result += createBlogPostLayout(post);
	}
	
	// Add result to page. 
	bloglistdestination.innerHTML = result;
}

// Load list of blog contributors. 
function loadBlogContibutors() {
		
	// Initialize list of contributor cards. 
	let cards = '';
	
	// Go thru multiple rows. 
	for(let i=0 ; i<1 ; i++) {
		
		// Create layout for list of contributor cards. 
		for(let item of userDataList.sort(sortRandom) ) {
	
			// Compile individual card. 
			cards += `
			<!-- card -->
			<a class="card" href="${ item.linkurl ? item.linkurl : 'javascript:void(0)' }">
	
				<!-- avatar -->
				<img class="avatar" src="${ `./../user/${item.avatarurl}` }" alt="${ item.userid }">
				<!-- /avatar -->
	
				<!-- username -->
				<span class="username">${ item.fullname }</span>
				<!-- /username -->
	
			</a>
			<!-- /card -->`;
		}
	}
	
	// Compile contents of card slider row. Load to destination. 
	contributorsdestination.innerHTML = `
	<!-- row -->
	<div class="row">${cards}</div>
	<!-- /row -->`;

	// Sort randomly. 
	function sortRandom(/* a,b */) {
		// 
		return ( Math.random() - Math.random() );
	}
}
