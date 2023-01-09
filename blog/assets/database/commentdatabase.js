


// Define data for all blog comments. 
const allCommentData = [

	// {
	// 	postid:'abc',
	// 	authorid:'aventura',
	// 	timeposted:164109380000,
	// 	commentcontent:'Hi, this is a commment that has been written in relation to a blog post.',
	// },

	// {
	// 	postid:'abc',
	// 	authorid:'aventura',
	// 	timeposted:164179380000,
	// 	commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	// },

	// {
	// 	postid:'def',
	// 	authorid:'aventura',
	// 	timeposted:164107380000,
	// 	commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	// },

	// {
	// 	postid:'ghi',
	// 	authorid:'aventura',
	// 	timeposted:164109380000,
	// 	commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	// },

	// {
	// 	postid:'jkl',
	// 	authorid:'aventura',
	// 	timeposted:164107938000,
	// 	commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	// },

	// {
	// 	postid:'def',
	// 	authorid:'aventura',
	// 	timeposted:1641079380000,
	// 	commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	// },

	// {
	// 	postid:'ghi',
	// 	authorid:'aventura',
	// 	timeposted:1641079380000,
	// 	commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	// },

	// {
	// 	postid:'jkl',
	// 	authorid:'aventura',
	// 	timeposted:1641079380000,
	// 	commentcontent:'Hello, this is a commment that has been written in relation to a blog post.',
	// },

];


/*****/


// Generate data for 12 random comments on each post. 
generateRandomCommentData();


/*****/


// Get all comments by author. 
function getAllCommentsByAuthorId(id) {

	// Initialize list of matching comments. 
	let matchingComments = [];

	// Go thru all comments. 
	for(let comment of allCommentData) {

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
	for(let comment of allCommentData) {

		// Add comment to list if match found. 
		if(comment.postid==id) matchingComments.push(comment);
	}

	// Return list of matching comments. 
	return matchingComments;
}
