


// Get destination for list of post items. 
const destinationlist = document.querySelector('div#container main#pagecontent section.archive ul.postlist');


// Define character limit for post excerpts. 
const excerptcharlimit = 240;


/*****/


// Load archive of posts. 
loadArchivePage(archiveSource);


/*****/


// Load archive of posts for current post type. 
function loadArchivePage(postlist) {

	// Get set name for page title. 
	// const pagetitle = defaultResults[pagekey].setname;
	// Get set list for list of posts. 
	// const postlist = defaultResults[pagekey].setlist;

	// Initialize result. 
	let result = '';

	// Accumulate post elements to result. 
	for(let post of postlist) {

		// Get excerpt of post content. 
		let postexcerpt = (post.content) ? (post.content).slice(0,excerptcharlimit) : '';
		// Get remainder of post content. 
		let postremainder = (post.content) ? (post.content).slice(excerptcharlimit) : '';

		// Create post item. 
		result += `
		<!-- postitem -->
		<li class="postitem">

			<!-- post -->
			<article class="post ${ (!postremainder) ? 'active' : '' }">
				
				<!-- title -->
				<h1 class="title">${post.title}</h1>
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
					<button class="readbtn ${ (!postremainder) ? 'gone' : '' }">

						<!-- expand -->
						<span class="expand">Read More</span>
						<!-- /expand -->

						<!-- collapse -->
						<span class="collapse">Read Less</span>
						<!-- /collapse -->

					</button>
					<!-- /readbtn -->
					
				</p>
				<!-- /content -->

			</article>
			<!-- /post -->

		</li>
		<!-- /postitem -->`;
	}

	// Add result to page. 
	destinationlist.innerHTML = result;

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
