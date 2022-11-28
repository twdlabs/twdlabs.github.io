

// Define post register. 
const postregister = {
	post:{
		idname:'postid',
		foldername:'blog',
		archiveData:blogPostData,
	},
	program:{
		idname:'programid',
		foldername:'programs',
		archiveData:programData,
	},
	course:{
		idname:'courseid',
		foldername:'courses',
		archiveData:courseData,
	},
	event:{
		idname:'eventid',
		foldername:'events',
		archiveData:eventData,
	},
	faculty:{
		idname:'facultyid',
		foldername:'faculty',
		archiveData:facultyData,
	},
	student:{
		idname:'studentid',
		foldername:'students',
		archiveData:studentData,
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

// Add programs to list of default results. 
defaultResults.programs = 
{
	visual:false,
	setname:'Programs',
	searchlabel: {
		plural:'programs',
		singular:'program',
	},
	setlist: programData,
	foldername:'programs',
};

// Add courses to list of default results. 
defaultResults.courses = 
{
	visual:false,
	setname:'Courses',
	searchlabel: {
		plural:'courses',
		singular:'course',
	},
	setlist: courseData,
	foldername:'courses',
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

// Add faculty to list of default results. 
defaultResults.faculty = 
{
	visual:false,
	setname:'Faculty',
	searchlabel: {
		plural:'faculty',
		singular:'faculty',
	},
	setlist: facultyData,
	foldername:'faculty',
};

// Add students to list of default results. 
defaultResults.students = 
{
	visual:false,
	setname:'Students',
	searchlabel: {
		plural:'students',
		singular:'student',
	},
	setlist: studentData,
	foldername:'students',
};


