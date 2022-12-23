


// Get input box for archive filter. 
const filterquerybox = document.querySelector('div#container main#pagecontent section.archive div.filter input#archivefilter');

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
console.log('Archive page number:',pagenumber);

// TODO: Use page number. 
// pagenumber;

// Get source of archive data. 
let archiveData = postregister[currentPostType]['archiveData']

// Load archive of posts. 
loadArchivePage( archiveData );

// Reveal current article. 
showArticle();

// Reveal current list of posts. 
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

	// Activate input box for archive filter. 
	filterquerybox.value = '';
	filterquerybox.addEventListener('keyup',filterArchivePosts);

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

		// Get date of post. 
		// let datetime = (currentPostType=='event') ? getDateComponents( post['eventtime'] ) : getDateComponents( post['postedtime'] );
	
		// Get title of post. 
		let title = (post.title) ? (post.title) : `[Untitled ${post.posttype}]`;
	
		// Get excerpt of post content. 
		let postexcerpt = (post.content) ? (post.content).slice(0,excerptcharlimit) : '';
	
		// Get remainder of post content. 
		// let postremainder = (post.content) ? (post.content).slice(excerptcharlimit) : '';

		// Create blog preview post. 
		if(currentPostType=='post') return createBlogPostLayout();
		// Create program preview post. 
		else if(currentPostType=='program') return createProgramPostLayout();
		// Create course preview post. 
		else if(currentPostType=='course') return createCoursePostLayout();
		// Create event preview post. 
		else if(currentPostType=='event') return createEventPostLayout();
		// Create faculty preview post. 
		else if(currentPostType=='faculty') return createFacultyPostLayout();
		// Create student preview post. 
		else if(currentPostType=='student') return createStudentPostLayout();
		// Create miscellaneous post for unregistered post type. 
		else return '[Unregistered post type]';

		/***/

		// Get date components. 
		function getDateComponents(numms) {

			// Create date object. 
			let datetime = new Date(numms);
			
			// Get date components from date object. 
			let y = datetime.getFullYear();
			let m = monthNames[ datetime.getMonth() ];
			let d = datetime.getDate();
			let str = datetime.toDateString();

			// Return date components in simplified form. 
			return { y:y, m:m, d:d, str:str, };
		}

		// Create preview layout for blog post. 
		function createBlogPostLayout() {
	
			// Get post id. 
			let id = post.postid;

			// Get post url. 
			let url = getRelativeUrl(`blog/post/?id=${id}`);
			
			// Get date components. 
			let datetime = getDateComponents(post.postedtime);
			// console.log('\tdatetime:',datetime);

			// 
			return `
			<!-- postitem -->
			<li class="postitem">
		
				<!-- post -->
				<article class="post dated blog" data-id="${id}">
				
					<!-- postdate -->
					<div class="postdate">
	
						<!-- date -->
						<div class="date">
			
							<!-- year -->
							<span class="year">${datetime.y}</span>
							<!-- /year -->
	
							<!-- month -->
							<span class="month">${datetime.m}</span>
							<!-- /month -->
	
							<!-- date -->
							<span class="date">${ (datetime.d<10) ? `0${datetime.d}` : datetime.d }</span>
							<!-- /date -->
	
						</div>
						<!-- /date -->
						
					</div>
					<!-- /postdate -->
					
					<!-- postcontent -->
					<div class="postcontent">
					
						<!-- postname -->
						<h2 class="postname">
	
							<!-- readlink -->
							<a class="readlink" href="${url}">${title}</a>
							<!-- /readlink -->
							
						</h2>
						<!-- /postname -->
						
						<!-- postexcerpt -->
						<p class="postexcerpt">
							
							<!-- excerpt -->
							<span class="excerpt">${postexcerpt}</span>
							<!-- /excerpt -->
							
							<!-- readlink -->
							<a class="readlink" href="${url}">Read More</a>
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

		// Create preview layout for program post. 
		function createProgramPostLayout() {
			// 
			return createDefaultPostLayout('program');
		}

		// Create preview layout for course post. 
		function createCoursePostLayout() {
			// 
			return createDefaultPostLayout('course');
		}

		// Create preview layout for event post. 
		function createEventPostLayout() {
	
			// Get post id. 
			let id = post.eventid;

			// Get post url. 
			let url = getRelativeUrl(`events/post/?id=${id}`);
			
			// Get date components. 
			let datetime = getDateComponents(post.eventtime);
			// console.log('\tdatetime:',datetime);

			// 
			return `
			<!-- postitem -->
			<li class="postitem">
		
				<!-- post -->
				<article class="post dated event" data-id="${id}">
				
					<!-- postdate -->
					<div class="postdate">
	
						<!-- date -->
						<div class="date">
			
							<!-- year -->
							<span class="year">${datetime.y}</span>
							<!-- /year -->
	
							<!-- month -->
							<span class="month">${datetime.m}</span>
							<!-- /month -->
	
							<!-- date -->
							<span class="date">${ (datetime.d<10) ? `0${datetime.d}` : datetime.d }</span>
							<!-- /date -->
	
						</div>
						<!-- /date -->
						
					</div>
					<!-- /postdate -->
					
					<!-- postcontent -->
					<div class="postcontent">
					
						<!-- postname -->
						<h2 class="postname">
	
							<!-- readlink -->
							<a class="readlink" href="${url}">${title}</a>
							<!-- /readlink -->
							
						</h2>
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
			return createDefaultPersonLayout('faculty');
		}

		// Create preview layout for student post. 
		function createStudentPostLayout() {
			// 
			return createDefaultPersonLayout('student');
		}

		// Create default person layout. 
		function createDefaultPersonLayout(posttype) {
			// console.log('posttype',posttype );
			// console.log('id', post[`${posttype}id`],post );

			// Get post id. 
			let id = post[`${posttype}id`];

			// 
			return `
			<!-- postitem -->
			<li class="postitem">
		
				<!-- post -->
				<article class="post ${posttype}" data-id="${id}">

					<!-- avatar -->
					<img class="avatar" src="${getRelativeUrl(post.avatarurl)}">
					<!-- /avatar -->
					
					<!-- title -->
					<h2 class="title">
						<a href="${url}">${title}</a>
					</h2>
					<!-- /title -->
		
				</article>
				<!-- /post -->
		
			</li>
			<!-- /postitem -->`;
		}

		// Create default preview layout. 
		function createDefaultPostLayout(posttype) {
			// console.log('posttype',posttype );
			// console.log('id', post[`${posttype}id`],post );

			// Get post id. 
			let id = post[`${posttype}id`];

			// 
			return `
			<!-- postitem -->
			<li class="postitem">
		
				<!-- post -->
				<article class="post ${posttype}" data-id="${id}">
					
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

	// Filter posts shown in archive. 
	function filterArchivePosts(event) {
		
		// Get current filter query. 
		let filterquery = filterquerybox.value;
		console.log('Now filtering archive posts:',filterquery);

		// Get all archive posts. 
		let allPosts = document.querySelectorAll('div#container main#pagecontent section.archive ul.postlist li.postitem article.post');

		// Show posts that match query. 
		for(let post of allPosts) {

			// Get id of current post. 
			let postid = post.getAttribute('data-id');
			// Get post data item. 
			let postDataItem = getPostDataItem(currentPostType,postid);
			// Check if matches filter query. 
			let matchesFilterQuery = checkForFilterMatch(postDataItem);

			// Get list item. 
			let listitem = post.parentElement;

			// Show matching post. 
			if(matchesFilterQuery) listitem.classList.remove('gone');
			// Hide non-matching post. 
			else listitem.classList.add('gone');
		}

		/***/

		// Get post data item. 
		function getPostDataItem(type,id) {

			// Get archive for current post type. 
			let archiveData = postregister[currentPostType].archiveData;

			// Go thru post items in archive. 
			for(let postItem of archiveData) {
				// Check for match. 
				let matchFound = (postItem[`${type}id`]==id);
				// Return matching post item. 
				if(matchFound) return postItem;
			}

			// Return nothing if no match found. 
			return null;
		}

		// Check for filter match. 
		function checkForFilterMatch(postDataItem) {
			// console.log(postDataItem.searchtags);
			
			// Go thru search tags. 
			for(let tag of postDataItem.searchtags) {
				// console.log(tag);

				// Return true if match found. 
				if( ( tag.toUpperCase() ).includes( filterquery.toUpperCase() ) ) return true;
			}
			
			// Return false if no match found. 
			return false;
		}
	}
}
