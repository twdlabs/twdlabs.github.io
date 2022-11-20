


// Get destination for list of post items. 
const listdestination = document.querySelector('div#container main#pagecontent section.archive ul.postlist');
const postdestination = document.querySelector('div#container main#pagecontent');


// Define character limit for post excerpts. 
const excerptcharlimit = 240;


/*****/


// Choose page type. 
choosePageType();


/*****/


// Choose page type. 
function choosePageType() {

	// Get search parameters from current url. 
	const urlparams = new URLSearchParams(window.location.search);
	// console.log('Url search parameters:',urlparams);

	// Check for id parameter. 
	let postId = urlparams.get('id');
	
	// Check for valid id parameter ( denies id=0 👎🏾 / denies id='' 👍 ). 
	let isValidId = !!postId;
	// Check for valid id parameter ( allows id=0 👍 / allows id='' 👎🏾 ). 
	// let isValidId = !!postId || !isNaN(postId);
	// console.log('Valid id:', isValidId, postId);

	// Load page for single post. 
	if(isValidId) loadPostPage(postId);

	// Load archive list of posts. 
	else loadArchivePage(archiveSource);

	/****/

	// Load page for single post. 
	function loadPostPage(id) {
	
		// Get post item. 
		let post = getPostById(id);
		// console.log('post:',post);
	
		// Add post item to page. 
		if(post) postdestination.innerHTML = createFullPostLayout(post);
		else loadArchivePage(archiveSource);

		/***/

		// Get post by id. 
		function getPostById(id) {
		
			// Get post type. 
			let type = currentPostType;
			// console.log('type:',type,`${type}id`);
			// console.log('Archive source:',archiveSource);
		
			// 
			for(let post of archiveSource) {
				// 
				let postid = post[`${type}id`];
				if(postid==id) return post;
			}

			// Return nothing if post not found. 
			return null;
		}
	}
	
	// Load page for archive of selected post type. 
	function loadArchivePage(postlist) {
	
		// Get set name for page title. 
		// const pagetitle = defaultResults[pagekey].setname;
	
		// Get set list for list of posts. 
		// const postlist = defaultResults[pagekey].setlist;
	
		// Initialize result. 
		let result = '';
	
		// Accumulate post elements to result. 
		for(let post of postlist) {
	
			// Create post item. 
			result += createPreviewPost(post);
		}
	
		// Add result to page. 
		listdestination.innerHTML = result;
	
		// Activate buttons. 
		activateButtons();
	
		/****/
	
		// Activate buttons. 
		function activateButtons() {
		
			// Get all read buttons. 
			const readbtns = document.querySelectorAll('main#pagecontent section.archive ul.postlist li.postitem article.post p.content button.readbtn');
			// console.log('readbtns:',readbtns);
		
			// Add event handlers. 
			for(let btn of readbtns) {
				btn.addEventListener('click', togglePostContent);
			}
		
			/****/
		
			// Toggle post excerpt mode. 
			function togglePostContent(event) {
		
				// Get post. 
				let post = (event.currentTarget).parentElement.parentElement;
		
				// Toggle post. 
				post.classList.toggle('active');
			}
		}
	}

	// Create preview post item. 
	function createPreviewPost(post) {
		// console.log('post:',post);
	
		// 
		if(!post) {
			console.warn('Invalid post:',post);
			return '';
		}
	
		// Get title of post. 
		let title = (post.title) ? (post.title) : `[Untitled ${post.posttype}]`;
	
		// Get excerpt of post content. 
		let postexcerpt = (post.content) ? (post.content).slice(0,excerptcharlimit) : '';
	
		// Get remainder of post content. 
		let postremainder = (post.content) ? (post.content).slice(excerptcharlimit) : '';
	
		// Get id of post. 
		let type = post.posttype;
		let id = post[type+'id'];
		// console.log('id:',id);
	
		// 
		return `
		<!-- postitem -->
		<li class="postitem">
	
			<!-- post -->
			<article class="post ${ (!postremainder) ? 'active' : '' }">
				
				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->
	
				<!-- content -->
				<p class="content">
	
					<!-- excerpt -->
					<span class="excerpt">${postexcerpt}</span>
					<!-- /excerpt -->
	
					<!-- remainder -->
					<span class="remainder">${postremainder}</span>
					<!-- /remainder -->
	
					<!-- readbtn -->
					<a class="readbtn" href="?id=${ id }">Read More</a>
					<!-- /readbtn -->
					
				</p>
				<!-- /content -->
	
			</article>
			<!-- /post -->
	
		</li>
		<!-- /postitem -->`;
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


		// Create full program post. 
		if(post.posttype=='program') return `
		<!-- story -->
		<section class="story">
	
			<!-- story -->
			<article class="story">
				
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
						<span class="value">${ getCoursesByProgram(post.programid).map( (c)=>c.title ).join('<br>') }</span>
						<!-- /value -->

					</span>
					<!-- /item -->
				
				</p>
				<!-- /content -->
	
			</article>
			<!-- /story -->
					
		</section>
		<!-- /story -->`;

		// Create full course post. 
		else if(post.posttype=='course') return `
		<!-- story -->
		<section class="story">
	
			<!-- story -->
			<article class="story">
				
				<!-- title -->
				<h1 class="title">${post.fulltitle}</h1>
				<!-- /title -->
	
				<!-- content -->
				<p class="content">

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
						<span class="label">Prerequisites</span>
						<!-- /label -->

						<!-- value -->
						<span class="value">${ (post.courseprereqs)/* .map( (id)=> getCourseById(id).title ) */.join('<br>') }</span>
						<!-- /value -->

					</span>
					<!-- /item -->
				
				</p>
				<!-- /content -->
	
			</article>
			<!-- /story -->
					
		</section>
		<!-- /story -->`;

		// Create full event post. 
		else if(post.posttype=='event') return `
		<!-- story -->
		<section class="story">
	
			<!-- story -->
			<article class="story">
				
				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->
	
				<!-- content -->
				<p class="content">

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
						<span class="label">What</span>
						<!-- /label -->

						<!-- value -->
						<span class="value">${content}</span>
						<!-- /value -->

					</span>
					<!-- /item -->
				
				</p>
				<!-- /content -->
	
			</article>
			<!-- /story -->
					
		</section>
		<!-- /story -->`;

		// Create full faculty post. 
		else if(post.posttype=='faculty') return `
		<!-- story -->
		<section class="story">
	
			<!-- story -->
			<article class="story">
				
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
				<!-- /content -->
	
			</article>
			<!-- /story -->
					
		</section>
		<!-- /story -->`;

		// Create full student post. 
		else if(post.posttype=='student') return `
		<!-- story -->
		<section class="story">
	
			<!-- story -->
			<article class="story">
				
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
				<!-- /content -->
	
			</article>
			<!-- /story -->
					
		</section>
		<!-- /story -->`;
	
		// Create full blog post. 
		else return `
		<!-- story -->
		<section class="story">
	
			<!-- story -->
			<article class="story">
				
				<!-- title -->
				<h1 class="title">${title}</h1>
				<!-- /title -->
	
				<!-- content -->
				<p class="content">

					<!-- item -->
					<span class="item">

						<!-- label -->
						<span class="label"></span>
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
				<!-- /content -->
	
			</article>
			<!-- /story -->
					
		</section>
		<!-- /story -->`;
	}
}

