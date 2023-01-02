

const commentdata = [

	{
		postid:'abc',
		authorid:'xyz',
		posted:1641079380000,
		commentcontent:'Hi, this is a commment that has been written in relation to a blog post.',
	},

	{
		postid:'abc',
		authorid:'xyz',
		posted:1641079380000,
		commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	},

	{
		postid:'def',
		authorid:'xyz',
		posted:1641079380000,
		commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	},

	{
		postid:'ghi',
		authorid:'xyz',
		posted:1641079380000,
		commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	},

	{
		postid:'jkl',
		authorid:'xyz',
		posted:1641079380000,
		commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	},

];


/*****/


// Get all comments by author. 
function getAllCommentsByAuthorId(id) {

	// Initialize list of matching comments. 
	let matchingComments = [];

	// Go thru all comments. 
	for(let comment of commentdata) {

		// Add comment to list if match found. 
		if(comment.authorid==id) matchingComments.push(comment);
	}

	// Return list of matching comments. 
	return matchingComments;
}

// Get all comments by post. 
function getAllCommentsByPostId(id) {

	// Initialize list of matching comments. 
	let matchingComments = [];

	// Go thru all comments. 
	for(let comment of commentdata) {

		// Add comment to list if match found. 
		if(comment.postid==id) matchingComments.push(comment);
	}

	// Return list of matching comments. 
	return matchingComments;
}
