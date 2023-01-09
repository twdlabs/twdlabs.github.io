


// Define character limit for post excerpts. 
const excerptcharlimit = 150;

// Define maximum amount of more posts. 
let maxmoreposts = 6;


/*****/


// Create blog post layout. 
function createBlogPostLayout(post) {

	// Get author of post. 
	let author = getUserById(post.authorid);
	// console.log(post.authorid,author,userDataList);

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

			<!-- bar -->
			<div class="bar">

				<!-- userbadge -->
				<a class="userbadge ${ author.admin ? 'admin' : '' }" href="../user/" target="_blank">

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
	console.log('post title:',title);
	// Get data for post author. 
	let author = getUserById(post.authorid);
	// Get name of post author. 
	let authorname = post ? author.fullname : '';
	console.log('author name:',authorname);
	// Get post date/time. 
	let datetime = post ? post.timeposted : '';
	console.log('datetime:',datetime);
	// Get url for post art. 
	let arturl = post ? getRelativeUrl(post.picurl) : '';
	console.log('art url:',arturl);

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
