

// Define default search results, the basis of final search results. 
const defaultResults = {

	// xyz: {
	// 	setname:'Set Name',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },

	// blog: {
	// 	setname:'Blog Posts',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	// programs: {
	// 	setname:'Programs',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	// courses: {
	// 	setname:'Courses',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	// events: {
	// 	setname:'Events',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	// faculty: {
	// 	setname:'Faculty',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	// students: {
	// 	setname:'Students',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	
};



// Add all other databases as components of results database. 

// Add blog posts to list of default results. 
defaultResults.blog = 
{
	setname:'Blog Posts',
	setlist:blogPostData,
	posttype:{
		plural:'blog posts',
		singular:'blog post',
	},
};

// Add programs to list of default results. 
defaultResults.programs = 
{
	setname:'Programs',
	setlist:programData,
	posttype:{
		plural:'programs',
		singular:'program',
	},
};

// Add courses to list of default results. 
defaultResults.courses = 
{
	setname:'Courses',
	setlist:courseData,
	posttype:{
		plural:'courses',
		singular:'course',
	},
};

// Add events to list of default results. 
defaultResults.events = 
{
	setname:'Events',
	setlist:eventData,
	posttype:{
		plural:'events',
		singular:'event',
	},
};

// Add faculty to list of default results. 
defaultResults.faculty = 
{
	setname:'Faculty',
	setlist:facultyData,
	posttype:{
		plural:'faculty',
		singular:'faculty',
	},
};

// Add students to list of default results. 
defaultResults.students = 
{
	setname:'Students',
	setlist:studentData,
	posttype:{
		plural:'students',
		singular:'student',
	},
};


