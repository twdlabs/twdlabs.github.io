


// Get destination for post content. 
const postbox = document.querySelector('div#container main#pagecontent section.story article.story');
const titlebox = document.querySelector('div#container main#pagecontent section.story article.story h1.title');
const contentbox = document.querySelector('div#container main#pagecontent section.story article.story p.content');

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

// Show current article. 
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

	/****/

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
	
		// Create full blog post. 
		if(type=='post') {
			// 
			return createBlogPostLayout();
		}

		// Create full program post. 
		else if(type=='program') {
			// 
			return createProgramPostLayout();
		}

		// Create full course post. 
		else if(type=='course') {
			// 
			return createCoursePostLayout();
		}

		// Create full event post. 
		else if(type=='event') {
			// 
			return createEventPostLayout();
		}

		// Create full faculty post. 
		else if(type=='faculty') {
			// 
			return createFacultyPostLayout();
		}
	
		// Create miscellaneous post. 
		else return '[New post type]';

		/***/

		// Create full layout for blog post. 
		function createBlogPostLayout() {

			// 
			return `
			<!-- title -->
			<h1 class="title">${title}</h1>
			<!-- /title -->

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
			// 
			if( onUndecidedProgram ) return `
			<!-- title -->
			<h1 class="title">${title}</h1>
			<!-- /title -->

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
						${ getStudentsByProgram(post.programid).map(createPersonLink).join('') }
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</div>
			<!-- /content -->`;

			// 
			return `
			<!-- title -->
			<h1 class="title">${title}</h1>
			<!-- /title -->

			<!-- content -->
			<div class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Program Description</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">hg
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
						${ getFacultyByProgram(post.programid).map(createPersonLink).join('') }
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
						${ getStudentsByProgram(post.programid).map(createPersonLink).join('') }
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

			// Create post link for related event. 
			function createPersonLink(p) {

				// Get post typw. 
				let type = p.posttype;

				// Get post typw. 
				let id = p[`${type}id`];

				// Define link url. 
				let url = getRelativeUrl(`./person/post/?id=${id}`);

				// Define link caption. 
				// let caption = `${p.title}`;

				// Define post link. 
				return `
				<!-- postlink -->
				<a class="postlink" href="${url}">${p.title}</a>
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
						<h4 class="postname">
	
							<!-- readlink -->
							<a class="readlink" href="${url}">${e.title}</a>
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
			<!-- title -->
			<h1 class="title">${post.fulltitle}</h1>
			<!-- /title -->

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
			let program = getArtistById(post.programid);

			// 
			return `
			<!-- title -->
			<h1 class="title">${title}</h1>
			<!-- /title -->

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
			<!-- title -->
			<h1 class="title">${title}</h1>
			<!-- /title -->

			<!-- content -->
			<div class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">ID#</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${post.facultyid}</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Current Program(s)</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${ ( (post.programids).map( (id)=>getArtistById(id).title ) ).join(', ') }</span>
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
		}
	}
}

