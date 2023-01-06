


// Initialize selected post id. 
let selectedPostId;


/*****/


// Save id of current post. 
savePostId();


/*****/


// Save id of current post. 
function savePostId() {

	// Define null post id. 
	const nullPostId = -1;

	// Get search parameters from current url. 
	const urlparams = new URLSearchParams(window.location.search);
	// console.log('Url search parameters:',urlparams);
	
	// Get selected post id. 
	selectedPostId = urlparams.get('id') /* || '' */;
	console.log('Selected post id:',selectedPostId);

	// Return parent page (home) if no valid id found. 
	// if(!selectedPostId) location.href = '../';
}
