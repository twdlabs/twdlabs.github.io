


// Define metadata for list of blog post data. 
const blogCommentListMetaData = {
	postid:{
		label:'Post ID',
		visible:true,
	},
	authorid:{
		label:'Author ID',
		visible:true,
	},
	timeposted:{
		label:'Time Posted',
		visible:true,
	},
	commentcontent:{
		label:'Comment',
		visible:true,
	},
};

// Define data for all blog comments. 
const blogCommentDataList = [

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


// Get all comments by author. 
function getAllCommentsByAuthorId(id) {

	// Initialize list of matching comments. 
	let matchingComments = [];

	// Go thru all comments. 
	for(let comment of blogCommentDataList) {

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
	for(let comment of blogCommentDataList) {

		// Add comment to list if match found. 
		if(comment.postid==id) matchingComments.push(comment);
	}

	// Return list of matching comments. 
	return matchingComments;
}
