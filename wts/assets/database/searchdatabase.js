

// Define post register. 
const postregister = {
	post:{
		idname:'postid',
		foldername:'blog',
		archiveData:blogPostData,
	},
	event:{
		idname:'eventid',
		foldername:'events',
		archiveData:eventData,
	},
	artist:{
		idname:'artistid',
		foldername:'artists',
		archiveData:artistData,
	},
};


// Define default search results, the basis of final search results. 
const defaultResults = {

	// xyz: {
	// 	visual:false,
	// 	setname:'Result Set Name',
	// 	searchlabel: {
	// 		plural:'results',
	// 		singular:'result',
	// 	},
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	],
	// 	foldername:'results',
	// },
	
};



// Add all other databases as components of results database. 

// Add blog posts to list of default results. 
defaultResults.blog = 
{
	visual:false,
	setname:'Blog Posts',
	searchlabel: {
		plural:'blog posts',
		singular:'blog post',
	},
	setlist: blogPostData,
	foldername:'blog',
};

// Add events to list of default results. 
defaultResults.events = 
{
	visual:false,
	setname:'Events',
	searchlabel: {
		plural:'events',
		singular:'event',
	},
	setlist: eventData,
	foldername:'events',
};

// Add artists to list of default results. 
defaultResults.artists = 
{
	visual:false,
	setname:'Artists',
	searchlabel: {
		plural:'artists',
		singular:'artist',
	},
	setlist: artistData,
	foldername:'artists',
};


