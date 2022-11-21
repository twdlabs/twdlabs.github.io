


// Get destination for post item. 
// const postdestination = document.querySelector('div#container main#pagecontent');
const postdestination = document.querySelector('div#container main#pagecontent section.story article.story');

// Get search parameters from current url. 
const urlparams = new URLSearchParams(window.location.search);
// console.log('Url search parameters:',urlparams);


/*****/


// Check for id parameter. 
let postId = urlparams.get('id');

// Check for valid id parameter ( denies id=0 👎🏾 / denies id='' 👍 ). 
let isValidId = !!postId;
// Check for valid id parameter ( allows id=0 👍 / allows id='' 👎🏾 ). 
// let isValidId = !!postId || !isNaN(postId);
// console.log('Valid id:', isValidId, postId);

// Load page for single post. 
if(isValidId) loadPostPage(postId);


/*****/


// Load page for single post. 
function loadPostPage(id) {

	// Get post item. 
	let post = getPostById(id);
	// console.log('post:',post);

	// Add post item to page. 
	if(post) postdestination.innerHTML = createFullPostLayout(post);
	else postdestination.innerHTML = '';

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
		
		// Get title of post. 
		let title = (post.title) ? (post.title) : `[Untitled ${post.posttype}]`;
	
		// Get content of post. 
		let content = (post.content) ? (post.content) : `[Empty ${post.posttype} content]`;
	
		// Create full blog post. 
		if(post.posttype=='post') {
			// 
			return createBlogPostLayout();
		}

		// Create full program post. 
		else if(post.posttype=='program') {
			// 
			return createProgramPostLayout();
		}

		// Create full course post. 
		else if(post.posttype=='course') {
			// 
			return createCoursePostLayout();
		}

		// Create full event post. 
		else if(post.posttype=='event') {
			// 
			return createEventPostLayout();
		}

		// Create full faculty post. 
		else if(post.posttype=='faculty') {
			// 
			return createFacultyPostLayout();
		}

		// Create full student post. 
		else if(post.posttype=='student') {
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
					<span class="value">${ new Date(post.postedtime).toLocaleString() }</span>
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
						${ relatedCourses.map( (c)=>`<a class="postlink" href="${ getRelativeUrl('./courses/post/?id='+c.courseid) }">${c.title}</a>` ).join('') }
					</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</p>
			<!-- /content -->`;
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
					<span class="value">${ prereqidlist.map( (id)=> `<a class="postlink" href="${ getRelativeUrl('./courses/post/?id='+id) }">${id}</a>` ).join('') }</span>
					<!-- /value -->

				</span>
				<!-- /item -->
			
			</p>
			<!-- /content -->`;
		}

		// Create full layout for event post. 
		function createEventPostLayout() {
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
					<span class="value">${ programData[post.programid].title }</span>
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
				
			</p>
			<!-- /content -->`;
		}
	}
}

