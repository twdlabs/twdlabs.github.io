


// Define character limit for post excerpts. 
const excerptcharlimit = 120;


/*****/


// Populate blog. 
populateBlog();


/*****/


// Populate blog. 
function populateBlog() {

	// Initialize result. 
	let result = '';

	// Create elements for blog posts. 
	for(post of blogdata) {

		// Get excerpt of post content. 
		let postexcerpt = (post.content) ? (post.content).slice(0,excerptcharlimit) : '';
		// Get remainder of post content. 
		let postremainder = (post.content) ? (post.content).slice(excerptcharlimit) : '';
		
		// Open post. 
		// Add header and text content to result. 
		// Add read button if any remainder of post. 
		// Close post. 
		result += `
		<!-- post -->
		<section class="post ${ (!postremainder) ? 'active' : '' }">
		
			<!-- head -->
			<h2 class="head">${post.title}</h2>
			<!-- /head -->
			
			<!-- textcopy -->
			<p class="textcopy">

				<!-- excerpt -->
				<span class="excerpt">${postexcerpt}</span>
				<!-- /excerpt -->

				<!-- more -->
				<span class="more">${postremainder}</span>
				<!-- /more -->
			
				<!-- readbtn -->
				<button class="readbtn ${ (!postremainder) ? 'gone' : '' }">
	
					<!-- caption -->
					<span class="caption expand">Read More</span>
					<!-- /caption -->
	
					<!-- caption -->
					<span class="caption collapse">Read Less</span>
					<!-- /caption -->
	
				</button>
				<!-- /readbtn -->

			</p>
			<!-- /textcopy -->
			
		</section>
		<!-- /post -->`;

		// 
		// result += ``;
		// result += ``;
	}

	// Add result to page. 
	document.getElementById('container').innerHTML = result;

	// Activate buttons. 
	activateButtons();

	/****/

	// Activate buttons. 
	function activateButtons() {
	
		// Get all read buttons. 
		const readbtns = document.querySelectorAll('div#container section.post p.textcopy button.readbtn');
		console.log('readbtns:',readbtns);
	
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


