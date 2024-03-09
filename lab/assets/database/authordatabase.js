


// Create data space for author names. 
const authorData = {
	twd:'TWD Labs',
	w3s:'W3 Schools',
	codepen:'Code Pen',
};


/*****/


// Get author name by given id (used for filter pane list and post details). 
function getAuthorNameById(authorid) {

	// Get author name. 
	let authorname = authorData[authorid];

	// Return nothing if author not found. 
	return authorname ? authorname : '';
}
