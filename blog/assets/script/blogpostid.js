


// Initialize selected post id. 
let selectedPostId;

// Get index of currently selected post. 
let selectedPostIndex;

// Initialize data for selected post. 
let selectedPostData;


/*****/


// Save info for current post. 
savePostInfo();


/*****/


// Save info for current post. 
function savePostInfo() {

	// Get search parameters from current url. 
	const urlparams = new URLSearchParams(window.location.search);
	// console.log('Url search parameters:',urlparams);
	
	// Get id of selected post. 
	selectedPostId = urlparams.get('bpid');
	// console.log('Selected post id:',selectedPostId);
	
	// Get index of selected post. 
	selectedPostIndex = selectedPostId ? getPostIndexById(selectedPostId) : -1;
	// console.log('Selected post index:',selectedPostIndex);
	
	// Get data for selected post. 
	selectedPostData = selectedPostId ? getPostById(selectedPostId) : null;
	// console.log('Selected post data:',selectedPostData);

	// Return to parent page (home) if no valid post id found. 
	if(!selectedPostId) location.href = '../';

	/****/

	// Get post index by post id. 
	function getPostIndexById(id) {
	
		// Go thru all posts. 
		for(let i in blogDataList) {
	
			// Get current post. 
			let post = blogDataList[i];
	
			// Return index if post found. 
			if(post.postid==id) return i;
		}
	
		// Return nothing if post not found. 
		return -1;
	}
	
	// Get post by id. 
	function getPostById(id) {
	
		// Go thru all posts. 
		for(let post of blogDataList) {
	
			// Return post if found. 
			if(post.postid==id) return post;
		}
	
		// Return nothing if post not found. 
		return null;
	}
}
