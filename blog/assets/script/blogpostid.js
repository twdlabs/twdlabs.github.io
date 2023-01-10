


// Initialize selected post id. 
let selectedPostId;

// Initialize data for selected post. 
let selectedPostData;


/*****/


// Save id of current post. 
savePostId();


/*****/


// Save id of current post. 
function savePostId() {

	// Get search parameters from current url. 
	const urlparams = new URLSearchParams(window.location.search);
	// console.log('Url search parameters:',urlparams);
	
	// Get selected post id. 
	selectedPostId = urlparams.get('id') /* || '' */;
	// console.log('Selected post id:',selectedPostId);
	
	// Get post data for selected post. 
	selectedPostData = getPostById(selectedPostId);
	// console.log('Selected post data:',selectedPostData);

	// Return parent page (home) if no valid id found. 
	// if(!selectedPostId) location.href = '../';
}
