


// Get destination for list of posts. 
const bloglistdestination = document.querySelector('div#container section.allposts main.grid ul.postlist');


/*****/


// Create time calculator. 
const t = new TimeCalculator();


/*****/


// Load list of blog posts. 
loadBlogList();


/*****/


// Load list of blog posts. 
function loadBlogList() {

	// Initialize result. 
	let result = '';

	// Sort list of blog posts. 
	blogdata.sort( (a,b) => b.timeposted-a.timeposted );
	
	// Go thru all posts. 
	for(let post of blogdata) {
		// Add layout for given post. 
		result += createBlogPostLayout(post);
	}
	
	// Add result to page. 
	bloglistdestination.innerHTML = result;

	// // 
	// let currentUserId = 'aventura';
	// let user = getUserById(currentUserId);
	// if(user.admin) bloglistdestination.classList.add('admincontrols');
	// else bloglistdestination.classList.remove('admincontrols');
}
