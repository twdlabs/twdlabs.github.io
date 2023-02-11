


// Initialize selected post id. 
let selectedPostId;

// Get index of currently selected post. 
let selectedPostIndex;

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
	
	// Get id of selected post. 
	selectedPostId = urlparams.get('id');
	
	// Get index of selected post. 
	selectedPostIndex = selectedPostId ? getPostIndexById(selectedPostId) : -1;
	
	// Get data for selected post. 
	selectedPostData = selectedPostId ? getPostById(selectedPostId) : null;

	// console.log('Selected post id:',selectedPostId);
	// console.log('Selected post index:',selectedPostIndex);
	// console.log('Selected post data:',selectedPostData);

	// Return parent page (home) if no valid id found. 
	// if(!selectedPostId) location.href = '../';
}
