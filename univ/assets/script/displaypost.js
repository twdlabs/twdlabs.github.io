


// Get destination for post content. 
const postbox = document.querySelector('div#container main#pagecontent section.story article.story');
// const titlebox = document.querySelector('div#container main#pagecontent section.story article.story div.head h1.title');
// const contentbox = document.querySelector('div#container main#pagecontent section.story article.story p.content');

// Get button for prev post. 
const prevpostbtn = document.querySelector('div#container main#pagecontent section.pagination div.bar a.postnavbtn.prev');
// Get button for next post. 
const nextpostbtn = document.querySelector('div#container main#pagecontent section.pagination div.bar a.postnavbtn.next');

// Get search parameters from current url. 
const urlparams = new URLSearchParams(window.location.search);
// console.log('Url search parameters:',urlparams);

// Set excerpt word count. 
const excerptWordLimit = 24;
// const excerptWordLimit = 55;	// default excerpt length in WordPress


/*****/


// Check for id parameter. 
let currentPostId = urlparams.get('id');
// console.log('id:',currentPostId);

// Check for valid id parameter ( allows id=0 👍 / allows id=null 👎🏾 / allows id='' 👎🏾 ). 
// let isValidId = !!currentPostId || !isNaN(currentPostId);
// Check for valid id parameter ( denies id=0 👎🏾 / denies id=null 👍 / denies id='' 👍 ). 
let isValidId = !!currentPostId;
// console.log('Valid id:', isValidId, currentPostId);

// Load page for single post. 
loadPostPage(currentPostId);

// Reveal current article. 
showArticle();


/*****/


// Load page for single post. 
function loadPostPage(id) {

	// Get post item. 
	let post = getPostById(id);
	// console.log('post:',post);

	// Get folder name for url. 
	let foldername = postregister[currentPostType]['foldername'];

	// Add post item to page. 
	if(post) postbox.innerHTML = createFullPostLayout(post);
	else postbox.innerHTML = '';

	// Setup post navigation. 
	setupPostNav();

	// Activate like button. 
	activateLikeBtn();

	/****/

	// Create full post layout. 
	function createFullPostLayout(post) {
	
		// 
		if(!post) {
			console.warn('Invalid post:',post);
			return '';
		}
		
		// Get type of post. 
		let type = post.posttype;
		
		// Get title of post. 
		let title = (post.title) ? (post.title) : `[Untitled ${type}]`;
	
		// Get content of post. 
		let content = (post.content) ? (post.content) : `[Empty ${type} content]`;

		// Get content of post. 
		let likecount = post.likecount || 0;
	
		// Create full blog post. 
		if(type=='post') return createBlogPostLayout();
		// Create full program post. 
		else if(type=='program') return createProgramPostLayout();
		// Create full course post. 
		else if(type=='course') return createCoursePostLayout();
		// Create full event post. 
		else if(type=='event') return createEventPostLayout();
		// Create full faculty post. 
		else if(type=='faculty') return createFacultyPostLayout();
		// Create full student post. 
		else if(type=='student') return createStudentPostLayout();
		// Create miscellaneous post. 
		else return '[New post type]';

		/***/

		// Create full layout for blog post. 
		function createBlogPostLayout() {

			// 
			return `
			<!-- head -->
			<div class="head">

				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->

				<!-- likebtn -->
				<div class="likebtn">

					<!-- icon -->
					<svg class="icon heart" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
						<!-- <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> -->
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon heart fill" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
						<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
					</svg>
					<!-- /icon -->

					<!-- count -->
					<span class="count">${ likecount }</span>
					<!-- /count -->
					
				</div>
				<!-- /likebtn -->

			</div>
			<!-- /head -->

			<!-- content -->
			<div class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Author</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${ userData[post.authorid].title }</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Posted</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${ new Date(post.postedtime).toDateString() }</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label"></span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${content}</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</div>
			<!-- /content -->`;
		}

		// Create full layout for program post. 
		function createProgramPostLayout() {

			// Get related courses. 
			let relatedCourses = getCoursesByProgram(post.programid);
			// console.log('relatedCourses:',relatedCourses);

			// 
			let onUndecidedProgram = post.programid && post.programid=='XYZ';

			// Return compiled post for undecided program. 
			if( onUndecidedProgram ) return `
			<!-- head -->
			<div class="head">

				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->

				<!-- likebtn -->
				<div class="likebtn">

					<!-- icon -->
					<svg class="icon heart" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
						<!-- <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> -->
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon heart fill" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
						<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
					</svg>
					<!-- /icon -->

					<!-- count -->
					<span class="count">${ likecount }</span>
					<!-- /count -->
					
				</div>
				<!-- /likebtn -->

			</div>
			<!-- /head -->

			<!-- content -->
			<div class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Program Description</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">
						${content}
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">${post.title} Students</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">
						${ getStudentsByProgram(post.programid).map(createStudentLink).join('') }
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</div>
			<!-- /content -->`;

			// Return compiled post. 
			return `
			<!-- head -->
			<div class="head">

				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->

				<!-- likebtn -->
				<div class="likebtn">

					<!-- icon -->
					<svg class="icon heart" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
						<!-- <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> -->
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon heart fill" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
						<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
					</svg>
					<!-- /icon -->

					<!-- count -->
					<span class="count">${ likecount }</span>
					<!-- /count -->
					
				</div>
				<!-- /likebtn -->

			</div>
			<!-- /head -->

			<!-- content -->
			<div class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Program Description</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">
						${content}
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Related Courses</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">
						${ relatedCourses.map( createCourseLink ).join('') }
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">${post.title} Faculty</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">
						${ getFacultyByProgram(post.programid).map(createFacultyLink).join('') }
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">${post.title} Students</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">
						${ getStudentsByProgram(post.programid).map(createStudentLink).join('') }
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label full">Upcoming ${post.title} Events</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">
						${ getEventsByProgram(post.programid).map( createEventPreviewPost ).join('') }
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</div>
			<!-- /content -->`;

			/**/

			// Create post link for related course. 
			function createCourseLink(c) {

				// Define link url. 
				let url = getRelativeUrl(`./courses/post/?id=${c.courseid}`);

				// Define link caption. 
				let caption = c.title;

				// Define post link. 
				return `
				<!-- postlink -->
				<a class="postlink" href="${url}">${caption}</a>
				<!-- /postlink -->`;
			}

			// Create post link for related faculty. 
			function createFacultyLink(p) {

				// Get post typw. 
				let type = p.posttype;

				// Get post typw. 
				let id = p[`${type}id`];

				// Define link url. 
				let url = getRelativeUrl(`./faculty/post/?id=${id}`);

				// Define link caption. 
				let caption = `${p.title}`;
				let avatarurl = `${p.avatarurl}`;

				// Define post link. 
				return `
				<!-- postlink -->
				<a class="postlink person" href="${url}">

					<!-- avatar -->
					<img class="avatar" src="${ getRelativeUrl(avatarurl) }" alt="${'Faculty Name'}">
					<!-- /avatar -->

					<!-- caption -->
					<span class="caption">${caption}</span>
					<!-- /caption -->
					
				</a>
				<!-- /postlink -->`;
			}

			// Create post link for related student. 
			function createStudentLink(p) {

				// Get post typw. 
				let type = p.posttype;

				// Get post typw. 
				let id = p[`${type}id`];

				// Define link url. 
				let url = getRelativeUrl(`./students/post/?id=${id}`);

				// Define link caption. 
				let caption = `${p.title}`;
				let avatarurl = `${p.avatarurl}`;

				// Define post link. 
				return `
				<!-- postlink -->
				<a class="postlink person" href="${url}">

					<!-- avatar -->
					<img class="avatar" src="${ getRelativeUrl(avatarurl) }" alt="${'Student Name'}">
					<!-- /avatar -->

					<!-- caption -->
					<span class="caption">${caption}</span>
					<!-- /caption -->
					
				</a>
				<!-- /postlink -->`;
			}

			// Create post link for related event. 
			function createEventPreviewPost(e) {
	
				// Get post id. 
				let id = e.eventid;

				// Get post url. 
				let url = getRelativeUrl(`events/post/?id=${id}`);

				// Get date of post. 
				let datetime = new Date( e.eventtime );
				// let datetime = (type=='event') ? new Date( post['eventtime'] ) : new Date( post['postedtime'] );
				// console.log('\tdatetime:',datetime);
				let y = datetime.getFullYear();
				let m = monthNames[ datetime.getMonth() ];
				let d = datetime.getDate();

				// Get excerpt from post content. 
				let postexcerpt = getExcerpt(e.content);

				// 
				return `
				<!-- post -->
				<article class="post">
				
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
						<h2 class="postname">
	
							<!-- readlink -->
							<a class="readlink" href="${url}">${e.title}</a>
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
				<!-- /post -->`;

				/***/
		
				// Get excerpt from post content. 
				function getExcerpt(content) {
		
					// Define word limit for current excerpt. 
					let currentWordLimit = excerptWordLimit
			
					// Get individual words of post content. 
					let wordsFromPostContent = content.split(' ');
					// Get number of words in post content. 
					let numWordsInContent = wordsFromPostContent.length;
			
					// Check for post content overflow. 
					let postContentOverflow = false;
					if(numWordsInContent<currentWordLimit) {
						// Use all content if less words than excerpt limit. 
						currentWordLimit = numWordsInContent;
						postContentOverflow = false;
					}
					else {
						postContentOverflow = true;
					}
			
					// Create post content excerpt. 
					let excerpt = '';
					for (let j=0 ; j<currentWordLimit ; j++) {
						// 
						excerpt += wordsFromPostContent[j] + ' ';
					}
					// Add ellipsis if some content is ommitted. 
					if(postContentOverflow) excerpt += '...';
			
					// 
					return excerpt;
				}
			}
		}

		// Create full layout for course post. 
		function createCoursePostLayout() {

			// Get course prereqs. 
			let prereqidlist = post.courseprereqs;

			// 
			return `
			<!-- head -->
			<div class="head">

				<!-- title -->
				<h1 class="title">${post.fulltitle}</h1>
				<!-- /title -->

				<!-- likebtn -->
				<div class="likebtn">

					<!-- icon -->
					<svg class="icon heart" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
						<!-- <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> -->
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon heart fill" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
						<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
					</svg>
					<!-- /icon -->

					<!-- count -->
					<span class="count">${ likecount }</span>
					<!-- /count -->
					
				</div>
				<!-- /likebtn -->

			</div>
			<!-- /head -->

			<!-- content -->
			<div class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Credits</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${post.numcredits}</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Course Description</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${post.coursedescription}</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Prerequisites</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${ prereqidlist.map(createCourseLink).join('') }</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</div>
			<!-- /content -->`;

			/**/

			// Create post link for prerequisite course. 
			function createCourseLink(id) {

				// Get course by id. 
				let c = getCourseById(id);
				// console.log('Current course:',id,c);

				// Define link url. 
				let url = getRelativeUrl(`./courses/post/?id=${id}`);

				// Define link caption. 
				let caption = c ? c.title : id;

				// Define post link. 
				return `
				<!-- postlink -->
				<a class="postlink" href="${url}">${caption}</a>
				<!-- /postlink -->`;
			}
		}

		// Create full layout for event post. 
		function createEventPostLayout() {

			// Get associated program. 
			// let program = programData[post.programid];
			let program = getProgramById(post.programid);

			// 
			return `
			<!-- head -->
			<div class="head">

				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->

				<!-- likebtn -->
				<div class="likebtn">

					<!-- icon -->
					<svg class="icon heart" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
						<!-- <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> -->
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon heart fill" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
						<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
					</svg>
					<!-- /icon -->

					<!-- count -->
					<span class="count">${ likecount }</span>
					<!-- /count -->
					
				</div>
				<!-- /likebtn -->

			</div>
			<!-- /head -->

			<!-- content -->
			<div class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Program</span>
					<!-- /label -->
			
					<!-- value -->
					<span class="value">

						<!-- postlink -->
						<a class="postlink" href="${ getRelativeUrl(`./programs/post/?id=${post.programid}`) }">${ program ? program.title : '' }</a>
						<!-- /postlink -->

					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">When</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${ new Date(post.eventtime).toLocaleString() }</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Where</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${post.location}</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Event Description</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${content}</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</div>
			<!-- /content -->`;
		}

		// Create full layout for faculty post. 
		function createFacultyPostLayout() {

			// 
			return `
			<!-- head -->
			<div class="head">

				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->

				<!-- likebtn -->
				<div class="likebtn">

					<!-- icon -->
					<svg class="icon heart" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
						<!-- <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> -->
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon heart fill" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
						<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
					</svg>
					<!-- /icon -->

					<!-- count -->
					<span class="count">${ likecount }</span>
					<!-- /count -->
					
				</div>
				<!-- /likebtn -->

			</div>
			<!-- /head -->

			<!-- content -->
			<div class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label"></span>
					<!-- /label -->

					<!-- value -->
					<span class="value">

						<!-- avatar -->
						<img class="avatar" src="${ getRelativeUrl(post.avatarurl) }" alt="${title} photo">
						<!-- /avatar -->

					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Phone</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">

						<!-- emaillink -->
						<a class="emaillink" href="tel:${ getFullPhoneNumber(post.phone) }">${ formatPhoneNumber(post.phone) }</a>
						<!-- /emaillink -->
						
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Email</span>
					<!-- /label -->
			
					<!-- value -->
					<span class="value">

						<!-- emaillink -->
						<a class="emaillink" href="mailto:${post.email}">${post.email}</a>
						<!-- /emaillink -->

					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Current Program(s)</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${ ( (post.programids).map(createProgramLink) ).join('') }</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">About ${post.firstname}</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${post.content}</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</div>
			<!-- /content -->`;

			/**/

			// Create post link for associated program. 
			function createProgramLink(id) {

				// Get program by id. 
				let p = getProgramById(id);
				// console.log('Current program:',id,p);

				// Define link url. 
				let url = getRelativeUrl(`./program/post/?id=${id}`);

				// Define link caption. 
				let caption = p ? p.title : id;

				// Define post link. 
				return `
				<!-- postlink -->
				<a class="postlink" href="${url}">${caption}</a>
				<!-- /postlink -->`;
			}

			// Get full phone number. 
			function getFullPhoneNumber(number) {
				// 
				if((typeof number)=='object') {
					return ( '+' + number.countrycode + number.areacode + number.number.slice(0,3) + number.number.slice(3,7) );
				}
				else {
					return number;
				}
			}

			// Format phone number. 
			function formatPhoneNumber(number) {

				// 
				if((typeof number)=='object') {
					return ( '+' + number.countrycode + ' (' + number.areacode + ') ' + number.number.slice(0,3) + '-' + number.number.slice(3,7) );
				}
				else {
					return ( number.slice(0,3) + '.' + number.slice(3,6) + '.' + number.slice(6,10) );
				}
			}
		}

		// Create full layout for student post. 
		function createStudentPostLayout() {
			
			// 
			return `
			<!-- head -->
			<div class="head">

				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->

				<!-- likebtn -->
				<div class="likebtn">

					<!-- icon -->
					<svg class="icon heart" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
						<!-- <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> -->
					</svg>
					<!-- /icon -->

					<!-- icon -->
					<svg class="icon heart fill" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
						<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
					</svg>
					<!-- /icon -->

					<!-- count -->
					<span class="count">${ likecount }</span>
					<!-- /count -->
					
				</div>
				<!-- /likebtn -->

			</div>
			<!-- /head -->

			<!-- content -->
			<div class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label"></span>
					<!-- /label -->

					<!-- value -->
					<span class="value">

						<!-- avatar -->
						<img class="avatar" src="${ getRelativeUrl(post.avatarurl) }" alt="${title} photo">
						<!-- /avatar -->

					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Email</span>
					<!-- /label -->
			
					<!-- value -->
					<span class="value">

						<!-- emaillink -->
						<a class="emaillink" href="mailto:${post.email}">${post.email}</a>
						<!-- /emaillink -->

					</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Current Program</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${ createProgramLink(post.programid) }</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">About ${post.firstname}</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${post.content}</span>
					<!-- /value -->

				</span>
				<!-- /item -->
				
			</div>
			<!-- /content -->`;

			/**/

			// Create post link for associated program. 
			function createProgramLink(id) {

				// Get program by id. 
				let p = getProgramById(id);
				// console.log('Current program:',id,p);

				// Define link url. 
				let url = getRelativeUrl(`./program/post/?id=${id}`);

				// Define link caption. 
				let caption = p ? p.title : id;

				// Define post link. 
				return `
				<!-- postlink -->
				<a class="postlink" href="${url}">${caption}</a>
				<!-- /postlink -->`;
			}
		}
	}

	// Setup post navigation (links to previous post and next post). 
	function setupPostNav() {

		// Get ids for adjacent posts. 
		const adjIds = (currentPostType=='event') ?  getAdjacentIds('eventtime') : getAdjacentIds('postedtime');
		// console.log('adjIds:',adjIds);
	
		// Get id for prev post. 
		const previd = adjIds[0];
	
		// Get id for next post. 
		const nextid = adjIds[1];
		
		// Set state of pagination links for prev post button. 
		if(previd) {
	
			// Get prev post. 
			let prevpost = getPostById(previd)
	
			// Set link. 
			prevpostbtn.href = getRelativeUrl(`./${foldername}/post/?id=${previd}`);
	
			// Set contents of hover label. 
			prevpostbtn.title = prevpost.title;
	
			// Set contents of hover label. 
			// prevpostbtn.querySelector('span.caption').innerHTML = prevpost.title;
		}
		// Otherwise hide button (if no valid id). 
		else prevpostbtn.classList.add('gone');
		
		// Set state of pagination links for next post button. 
		if(nextid) {
	
			// Get next post. 
			let nextpost = getPostById(nextid)
	
			// Set link. 
			nextpostbtn.href = getRelativeUrl(`./${foldername}/post/?id=${nextid}`);
	
			// Set contents of hover label. 
			nextpostbtn.title = nextpost.title;
	
			// Set contents of hover label. 
			// nextpostbtn.querySelector('span.caption').innerHTML = nextpost.title;
		}
		// Otherwise hide button (if no valid id). 
		else nextpostbtn.classList.add('gone');

		/***/

		// Get post ids of previous post and next post. 
		function getAdjacentIds(orderProperty) {
	
			// Set order property. 
			// orderProperty = ;
	
			// Get archive data. 
			const archiveData = postregister[currentPostType]['archiveData'];
	
			// Sort archive data in chronological order. 
			archiveData.sort( (a,b) => ( a[orderProperty] - b[orderProperty]) );
	
			// Initialize id of previous post -- null id (0) for if not found. 
			let prevPostId = '';
			// Initialize id of next post -- null id (0) for if not found. 
			let nextPostId = '';
	
			// Go thru posts to find current post. 
			for(let i in archiveData) {
	
				// Get post. 
				let post = archiveData[i];
	
				// Check for matching post. 
				if(post[`${currentPostType}id`]==currentPostId) {
					// Save position of current post in sorted archive data. 
					let iCurrent = 1*i;
					// console.log('iCurrent:',iCurrent);
	
					// Use prev position in sorted archive data for chronologically prev post id. 
					let iPrev = Math.max(-1,iCurrent - 1);
					// console.log('iPrev:',iPrev);
					
					// Use next position in sorted archive data for chronologically next post id. 
					let iNext = Math.max(-1,iCurrent + 1);
					// console.log('iNext:',iNext);
	
					// Get post id of prev post. 
					prevPostId = archiveData[iPrev] ? archiveData[iPrev][`${currentPostType}id`] : '';
					// console.log('prevPostId:',prevPostId);
	
					// Get post id of next post. 
					nextPostId = archiveData[iNext] ? archiveData[iNext][`${currentPostType}id`] : '';
					// console.log('nextPostId:',nextPostId);
	
					// End search for post. 
					break;
				}
			}
	
			// Return both ids. 
			return [prevPostId,nextPostId];
		}
	}

	// Activate like button. 
	function activateLikeBtn() {

		// Set initial like state of current post/article. 
		if(post.liked) postbox.classList.add('liked');

		// Get like button. 
		const likebtn = document.querySelector('div#container main#pagecontent section.story article.story div.head div.likebtn');

		// Enable action upon like button click, 
		likebtn.addEventListener('click',toggleLike);

		// Toggle like for current user. 
		function toggleLike(event) {

			// Get selected like button. 
			const selectedLikeBtn = event.currentTarget;
			console.log('selectedLikeBtn:',selectedLikeBtn);

			// Get like count box in selected like button. 
			const selectedLikeCountBox = selectedLikeBtn.querySelector('span.count');
			let prevLikeCount = 1 * (selectedLikeCountBox.innerText);

			// Get post article. 
			const selectedPost = selectedLikeBtn.parentElement.parentElement;
			console.log('selectedPost:',selectedPost);

			// Check if already liked. 
			let alreadyLiked = selectedPost.classList.contains('liked');

			// TODO: Update like state in database (for current user). 

			// Update like state on page. 
			if(alreadyLiked) {
				selectedPost.classList.remove('liked');
				selectedLikeCountBox.innerText = (prevLikeCount - 1);
			}
			else {
				selectedPost.classList.add('liked');
				selectedLikeCountBox.innerText = (prevLikeCount + 1);
			}
		}
	}
}

