


// Define character limit for post excerpts. 
const excerptcharlimit = 120;

/*****/

// Populate blog. 
populateBlog();

// Activate buttons. 
activateButtons();


/*****/


// Populate blog. 
function populateBlog() {

	// Create elements for blog posts. 
	let result = '';
	for(post of blogdata) {

		// Get excerpt of post content. 
		let postexcerpt = (post.content).slice(0,excerptcharlimit);
		// Get remainder of post content. 
		let postremainder = (post.content).slice(excerptcharlimit);
		
		// Open post. 
		result += `
		<!-- post -->
		<section class="post">`;

		// Add header. 
		result += `
			<!-- head -->
			<h2 class="head">${post.title}</h2>
			<!-- /head -->`;

		// Add text content to result. 
		result += `
			<!-- textcopy -->
			<p class="textcopy">
				<span class="excerpt">${postexcerpt}</span><span class="more">${postremainder}</span>
			</p>
			<!-- /textcopy -->`;

		// Add read button if any remainder of post. 
		if(true||xyz) result += `
			<!-- readbtn -->
			<button class="readbtn">
				<span class="caption expand">Read More</span>
				<span class="caption collapse">Read Less</span>
			</button>
			<!-- /readbtn -->`;

		// Close post. 
		result += `
		</section>
		<!-- /post -->`;

		// 
		// result += ``;
		// result += ``;
	}

	// Add result to page. 
	document.getElementById('container').innerHTML = result;

}


// Activate buttons. 
function activateButtons() {

	// Get all read buttons. 
	let readbtns = document.querySelectorAll('.readbtn');
	console.log(readbtns);

	// Add event handlers. 
	for(let btn of readbtns) {
		btn.addEventListener('click', function() {
			let section = event.currentTarget.parentElement;
			section.classList.toggle('active');
		})
	}
	
}

