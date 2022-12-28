


// Get destination for list of posts. 
const listdestination = document.querySelector('div#container main.main');


/*****/


// Load list of blog posts. 
loadBlogList();


/*****/


// Load list of blog posts. 
function loadBlogList() {

	// Initialize result. 
	let result = '';
	
	// Go thru all posts. 
	for(let post of blogdata) {
		
		// Compile post item
		result += `
		<!-- item -->
		<div class="item">
	
			<!-- art -->
			<div class="art">
	
				<!-- preview -->
				<img class="preview" src="${ post.picurl }">
				<!-- /preview -->
	
			</div>
			<!-- /art -->
	
			<!-- content -->
			<div class="content">
	
				<!-- title -->
				<h1 class="title">${ post.title }</h1>
				<!-- /title -->
	
				<!-- textcopy -->
				<p class="textcopy">${ getExcerpt(post.content) }</p>
				<!-- /textcopy -->
	
				<!-- readbtn -->
				<a class="readbtn" href="./post/?id=${ post.postid }">Read More</a>
				<!-- /readbtn -->
				
			</div>
			<!-- /content -->
	
		</div>
		<!-- /item -->`;
	}
	
	// Add result to page. 
	listdestination.innerHTML = result;

	// Get excerpt of post content. 
	function getExcerpt(paragraphList) {

		// Get combined content. 
		let postcontent = paragraphList.join(' ');

		// Handle short post content. 
		if(postcontent.length<160) return postcontent;

		// Handle long post content. 
		else return postcontent.substr(0,150) + '...';
	}
}
