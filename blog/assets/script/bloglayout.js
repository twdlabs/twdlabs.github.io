


// Define character limit for post excerpts. 
const excerptcharlimit = 150;

// Define maximum amount of more posts. 
let maxmoreposts = 6;


/*****/


// Create blog post layout. 
function createBlogPostLayout(post) {

	// Get author of post. 
	let author = getUserById(post.authorid);
	// console.log('Author:',post.authorid,author);
	// if(!author) return '';

	// Get list of matching comments. 
	let commentlist = getAllCommentsByPostId(post.postid);

	// Compile layout for given post. 
	return `
	<!-- item -->
	<div class="item">

		<!-- artlink -->
		<a class="artlink" href="${ getRelativeUrl(`./post/?id=${post.postid}`) }" target="_blank">

			<!-- preview -->
			<img class="preview" src="${ getRelativeUrl(post.picurl) }">
			<!-- /preview -->

		</a>
		<!-- /artlink -->

		<!-- content -->
		<div class="content">

			<!-- bar -->
			<div class="bar">

				<!-- title -->
				<h1 class="title">
	
					<!-- titlelink -->
					<a class="titlelink" href="${ getRelativeUrl(`./post/?id=${post.postid}`) }" target="_blank">
	
						<!-- caption -->
						<span class="caption">${ post.title }</span>
						<!-- /caption -->
	
					</a>
					<!-- /titlelink -->
	
				</h1>
				<!-- /title -->

				<!-- commentcount -->
				<a class="commentcount" href="${ getRelativeUrl(`./post/?id=${post.postid}`) }#comments" target="_blank">

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
				<a class="userbadge ${ author ? (author.admin ? 'admin' : '') : '' }" href="${ getRelativeUrl(`../user/?id=${ author.userid }`) }" target="_blank">

					<!-- avatar -->
					<img class="avatar" src="${ author ? getRelativeUrl(`../user/${author.avatarurl}`) : '' }" title="${ author ? author.userid : '' }">
					<!-- /avatar -->

					<!-- username -->
					<span class="username">${ author ? author.fullname : '' }</span>
					<!-- /username -->

				</a>
				<!-- /userbadge -->

				<!-- timestamp -->
				<div class="timestamp">${ t.formatTimeSince(post.timeposted) }</div>
				<!-- /timestamp -->

			</div>
			<!-- /bar -->

			<!-- textcopy -->
			<p class="textcopy">${ getExcerpt(post.content) }</p>
			<!-- /textcopy -->

			<!-- ctabox -->
			<div class="ctabox">

				<!-- readbtn -->
				<a class="readbtn" href="${ getRelativeUrl(`./post/?id=${post.postid}`) }" target="_blank">

					<!-- caption -->
					<span class="caption">Read More</span>
					<!-- /caption -->

				</a>
				<!-- /readbtn -->

			</div>
			<!-- /ctabox -->
			
		</div>
		<!-- /content -->

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
	<!-- /item -->`;

	/***/

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

// Create full layout for given post. 
function createFullPostLayout(post) {

	// Get post title. 
	let title = post ? post.title : '';
	// console.log('post title:',title);

	// Get data for post author. 
	let author = getUserById(post.authorid);

	// Get name of post author. 
	let authorname = post ? author.fullname : '';
	// console.log('author name:',authorname);

	// Get post date/time. 
	let datetime = post ? post.timeposted : '';
	// console.log('datetime:',datetime);

	// Get url for post art. 
	let arturl = post ? getRelativeUrl(post.picurl) : '';
	// console.log('art url:',arturl);

	// Display post art behind hero section. 
	herosection.style.backgroundImage = `url('${arturl}')`;

	// Display in hero section: title, author. 
	// herosectiongrid.innerHTML = ``;
	// Display title in hero section. 
	titledestination.innerHTML = title;
	// Display author in hero section. 
	authornamedestination.innerHTML = authorname ? authorname : '';

	// 
	if(author.admin) {
		// 
		authordestination.classList.add('admin');
	}
	// 
	else {
		// 
		authordestination.classList.remove('admin');
	}

	// Display publish date under hero section. 
	datedestination.innerHTML = datetime ? t.formatDate(datetime) : '';
	
	// Get post content. 
	let content = post ? (post.content).map(createParagraph).join('') : '';

	// Compile post layout. 
	return `
	<!-- title -->
	<h1 class="title">${ title }</h1>
	<!-- /title -->
	
	<!-- art -->
	<div class="art">
		<!-- art -->
		<img class="art" src="${ arturl }">
		<!-- /art -->
	</div>
	<!-- /art -->

	<!-- content -->
	<div class="content">${ content }</div>
	<!-- /content -->`;

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
