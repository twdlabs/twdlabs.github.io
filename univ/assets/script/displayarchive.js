


// Get destination for list of post items. 
const listbox = document.querySelector('div#container main#pagecontent section.archive ul.postlist');

// Get search parameters from current url. 
const urlparams = new URLSearchParams(window.location.search);
// console.log('Url search parameters:',urlparams);

// Define character limit for post excerpts. 
const excerptcharlimit = 180;
// const excerptcharlimit = 240;


/*****/


// Check for page parameter (default to page 1). 
const pagenumber = 1*urlparams.get('p') || 1;
// console.log('Archive page:',pagenumber);

// TODO: Use page number. 
// pagenumber;

// Load archive list of posts. 
loadArchivePage( postregister[currentPostType]['archiveData'] );

// Show current article. 
showArticle();

// Show current list of posts. 
showPostList();
// setTimeout(showPostList,100);


/*****/


// Load page for archive of selected post type. 
function loadArchivePage(postlist) {

	// Initialize result. 
	let result = '';

	// Accumulate post elements to result. 
	for(let post of postlist) {

		// Create post item. 
		result += createPreviewPost(post);
	}

	// Add to page: list of posts. 
	if(postlist) listbox.innerHTML = result;
	else listbox.innerHTML = '';

	/****/

	// Create preview post item. 
	function createPreviewPost(post) {
		// console.log('post:',post);
	
		// Check for valid post. 
		if(!post) {
			console.warn('Invalid post:',post);
			return '';
		}
	
		// Get id of post. 
		let id = post[`${currentPostType}id`];
		// console.log('id:',id);

		// Get post url. 
		let url = `post/?id=${id}`;
	
		// Get title of post. 
		let title = (post.title) ? (post.title) : `[Untitled ${post.posttype}]`;
	
		// Get excerpt of post content. 
		let postexcerpt = (post.content) ? (post.content).slice(0,excerptcharlimit) : '';
	
		// Get remainder of post content. 
		// let postremainder = (post.content) ? (post.content).slice(excerptcharlimit) : '';
	
		
		``;


		// Create blog preview post. 
		if(currentPostType=='post') {
			// 
			return createBlogPostLayout();
		}

		// Create program preview post. 
		else if(currentPostType=='program') {
			// 
			return createProgramPostLayout();
		}

		// Create course preview post. 
		else if(currentPostType=='course') {
			// 
			return createCoursePostLayout();
		}

		// Create event preview post. 
		else if(currentPostType=='event') {
			// 
			return createEventPostLayout();
		}

		// Create faculty preview post. 
		else if(currentPostType=='faculty') {
			// 
			return createFacultyPostLayout();
		}

		// Create student preview post. 
		else if(currentPostType=='student') {
			// 
			return createStudentPostLayout();
		}

		// Create miscellaneous post. 
		else return '[New post type]';

		/***/

		// Create preview layout for blog post. 
		function createBlogPostLayout() {
			return `
			<!-- postitem -->
			<li class="postitem">
		
				<!-- post -->
				<article class="post">
					
					<!-- title -->
					<h2 class="title">
						<a href="${url}">${title}</a>
					</h2>
					<!-- /title -->

					<!-- posted -->
					<p class="posted">${ ( new Date(post.postedtime) ).toDateString() }</p>
					<!-- /posted -->
		
					<!-- content -->
					<p class="content">
		
						<!-- excerpt -->
						<span class="excerpt">${postexcerpt}</span>
						<!-- /excerpt -->
		
						<!-- readbtn -->
						<a class="readbtn" href="${url}">Read More</a>
						<!-- /readbtn -->
						
					</p>
					<!-- /content -->
		
				</article>
				<!-- /post -->
		
			</li>
			<!-- /postitem -->`;
		}

		// Create preview layout for program post. 
		function createProgramPostLayout() {
			// 
			return createDefaultPostLayout();
		}

		// Create preview layout for course post. 
		function createCoursePostLayout() {
			// 
			return createDefaultPostLayout();
		}

		// Create preview layout for event post. 
		function createEventPostLayout() {
	
			// Get post id. 
			let id = post.eventid;

			// Get post url. 
			let url = getRelativeUrl(`events/post/?id=${id}`);

			// Get date of post. 
			let datetime = new Date( post.eventtime );
			// let datetime = (currentPostType=='event') ? new Date( post['eventtime'] ) : new Date( post['postedtime'] );
			// console.log('\tdatetime:',datetime);
			let y = datetime.getFullYear();
			let m = monthNames[ datetime.getMonth() ];
			let d = datetime.getDate();

			// 
			return `
			
			<!-- postitem -->
			<li class="postitem">
		
				<!-- post -->
				<article class="post event">
				
					<!-- postdate -->
					<div class="postdate">
	
						<!-- date -->
						<div class="date">
			
							<!-- year -->
							<span class="year">${y}</span>
							<!-- /year -->
	
							<!-- month -->
							<span class="month">${m}</span>
							<!-- /month -->
	
							<!-- date -->
							<span class="date">${ (d<10) ? `0${d}` : d }</span>
							<!-- /date -->
	
						</div>
						<!-- /date -->
						
					</div>
					<!-- /postdate -->
					
					<!-- postcontent -->
					<div class="postcontent">
					
						<!-- postname -->
						<h4 class="postname">
	
							<!-- readlink -->
							<a class="readlink" href="${url}">${post.title}</a>
							<!-- /readlink -->
							
						</h4>
						<!-- /postname -->
						
						<!-- postexcerpt -->
						<p class="postexcerpt">
							
							<!-- excerpt -->
							<span class="excerpt">${postexcerpt}</span>
							<!-- /excerpt -->
							
							<!-- readlink -->
							<a class="readlink" href="${url}">Learn More</a>
							<!-- /readlink -->
							
						</p>
						<!-- /postexcerpt -->
						
					</div>
					<!-- /postcontent -->
					
				</article>
				<!-- /post -->
		
			</li>
			<!-- /postitem -->`;
		}

		// Create preview layout for faculty post. 
		function createFacultyPostLayout() {
			// 
			return createDefaultPostLayout();
		}

		// Create preview layout for student post. 
		function createStudentPostLayout() {
			// 
			return createDefaultPostLayout();
		}

		// Create default preview layout. 
		function createDefaultPostLayout() {
			return `
			<!-- postitem -->
			<li class="postitem">
		
				<!-- post -->
				<article class="post">
					
					<!-- title -->
					<h2 class="title">
						<a href="${url}">${title}</a>
					</h2>
					<!-- /title -->
		
					<!-- content -->
					<p class="content">
		
						<!-- excerpt -->
						<span class="excerpt">${postexcerpt}</span>
						<!-- /excerpt -->
		
						<!-- readbtn -->
						<a class="readbtn" href="${url}">Read More</a>
						<!-- /readbtn -->
						
					</p>
					<!-- /content -->
		
				</article>
				<!-- /post -->
		
			</li>
			<!-- /postitem -->`;
		}
	}
}
