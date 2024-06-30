


// Create data space for author names. 
const authorData = {
	twd:{
		authorname:'Titus',
		authorname:'TWD Labs',
		website:'https://twdlabs.xyz',
		// xyz:'xyz',
	},
	w3s:{
		authorname:'W3 Schools',
		website:'https://w3schools.org',
		// xyz:'xyz',
	},
	cp:{
		authorname:'Code Pen',
		website:'https://codepen.com',
		// xyz:'xyz',
	},
};


/*****/


// Get author name by given id (used for filter pane list and post details). 
function getAuthorNameById(authorid) {

	// Get data for given author. 
	let authordata = authorData[authorid];

	// Get name of given author. 
	let authorname = authordata.authorname;

	// Return nothing if author not found. 
	return authorname ? authorname : '';
}
