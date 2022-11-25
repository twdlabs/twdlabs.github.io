


// Get destination for post item. 
const postbox = document.querySelector('div#container main#pagecontent section.story article.story');
const titlebox = document.querySelector('div#container main#pagecontent section.story article.story h1.title');
const contentbox = document.querySelector('div#container main#pagecontent section.story article.story p.content');

// Get search parameters from current url. 
const urlparams = new URLSearchParams(window.location.search);
// console.log('Url search parameters:',urlparams);


/*****/


// Check for id parameter. 
let postId = urlparams.get('id');

// Check for valid id parameter ( denies id=0 👎🏾 / denies id='' 👍 ). 
// let isValidId = !!postId;
// Check for valid id parameter ( allows id=0 👍 / allows id='' 👎🏾 ). 
// let isValidId = !!postId || !isNaN(postId);
// console.log('Valid id:', isValidId, postId);

// Load page for single post. 
/* if(isValidId) */ loadPostPage(postId);

// Show current article. 
showArticle();


/*****/


// Load page for single post. 
function loadPostPage(id) {

	// Get post item. 
	let post = getPostById(id);
	console.log('post:',post);

	// Add post item to page. 
	if(post) postbox.innerHTML = createFullPostLayout(post);
	else postbox.innerHTML = '';

	/****/

	// Get post by id. 
	function getPostById(id) {

		// Ensure capitalization of course id. 
		id = (`${id}`).toUpperCase();
	
		// Get post type. 
		let type = currentPostType;
		// console.log('type:',type,`${type}id`);
		// console.log('Archive source:',archiveData);
	
		// Go thru all post items. 
		for(let post of archiveData) {

			// Check for matching post. 
			let matchingPost = id==post[`${type}id`];

			// Return matching post if found. 
			if(matchingPost) return post;
		}

		// Return nothing if post not found. 
		return null;
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

		// Create full student post. 
		else if(type=='student') {
			// 
			return createStudentPostLayout();
		}
	
		// Create miscellaneous post. 
		else return '[Miscellaneous post type]';

		/***/

		// Create full layout for blog post. 
		function createBlogPostLayout() {

			// 
			return `
			<!-- title -->
			<h1 class="title">${title}</h1>
			<!-- /title -->

			<!-- content -->
			<p class="content">

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
			
			</p>
			<!-- /content -->`;
		}

		// Create full layout for program post. 
		function createProgramPostLayout() {

			// Get related courses. 
			let relatedCourses = getCoursesByProgram(post.programid);
			console.log('relatedCourses:',relatedCourses);

			// 
			return `
			<!-- title -->
			<h1 class="title">${title}</h1>
			<!-- /title -->

			<!-- content -->
			<p class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Program Description</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${content}</span>
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
						${ relatedCourses.map( createPostLink ).join('') }
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
					<span class="value">${''}</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">${post.title} Students</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${''}</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Upcoming ${post.title} Events</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${''}</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</p>
			<!-- /content -->`;

			/**/

			// Create post link for related course. 
			function createPostLink(c) {

				// 
				return `
				<!-- postlink -->
				<a class="postlink" href="${ getRelativeUrl(`./courses/post/?id=${c.courseid}`) }">${c.title}</a>
				<!-- /postlink -->`;
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
			<p class="content">

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
					<span class="value">${ prereqidlist.map(createPostLink).join('') }</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</p>
			<!-- /content -->`;

			/**/

			// Create post link for prerequisite course. 
			function createPostLink(id) {

				// Get course by id. 
				let c = getCourseById(id);
				console.log('Current course:',id,c);

				// 
				return `
				<!-- postlink -->
				<a class="postlink" href="${ getRelativeUrl(`./courses/post/?id=${id}`) }">${ c ? c.title : id }</a>
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
			<!-- title -->
			<h1 class="title">${title}</h1>
			<!-- /title -->

			<!-- content -->
			<p class="content">

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
			
			</p>
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
			<p class="content">

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
					<span class="value">${ ( (post.programids).map( (id)=>getProgramById(id).title ) ).join(', ') }</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">About ${post.firstname}</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${post.bio}</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</p>
			<!-- /content -->`;
		}

		// Create full layout for student post. 
		function createStudentPostLayout() {
			
			// 
			return `
			<!-- title -->
			<h1 class="title">${title}</h1>
			<!-- /title -->

			<!-- content -->
			<p class="content">

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">ID#</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${post.studentid}</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">Current Program</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${ getProgramById(post.programid).title }</span>
					<!-- /value -->

				</span>
				<!-- /item -->

				<!-- item -->
				<span class="item">

					<!-- label -->
					<span class="label">About ${post.firstname}</span>
					<!-- /label -->

					<!-- value -->
					<span class="value">${post.bio}</span>
					<!-- /value -->

				</span>
				<!-- /item -->
				
			</p>
			<!-- /content -->`;
		}
	}
}

