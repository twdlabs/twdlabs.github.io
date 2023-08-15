


// Get destination for list of posts. 
const bloglistdestination = document.querySelector('div#container section.resultposts main.grid ul.postlist');


/*****/


// Load blog posts. 
loadBlogPosts();


/*****/


// Load list of blog posts. 
function loadBlogPosts() {

	// Initialize result. 
	let result = '';
	
	// Go thru all posts. 
	for(let post of blogDataList) {
		
		// Add layout for given post. 
		result += createBlogPostLayout(post);
	}
	
	// Add result to page. 
	bloglistdestination.innerHTML = result;
}
