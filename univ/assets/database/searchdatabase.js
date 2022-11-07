

// Define post register. 
const postregister = {
	'post':'postid',
	'program':'programid',
	'course':'courseid',
	'event':'eventid',
	'faculty':'facultyid',
	'student':'studentid',
};


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
	foldername:'resources/blog',
	searchlabel: {
		plural:'blog posts',
		singular:'blog post',
	},
	setlist: blogPostData,
};

// Add programs to list of default results. 
defaultResults.programs = 
{
	setname:'Programs',
	foldername:'resources/programs',
	searchlabel: {
		plural:'programs',
		singular:'program',
	},
	setlist: programData,
};

// Add courses to list of default results. 
defaultResults.courses = 
{
	setname:'Courses',
	foldername:'resources/courses',
	searchlabel: {
		plural:'courses',
		singular:'course',
	},
	setlist: courseData,
};

// Add events to list of default results. 
defaultResults.events = 
{
	setname:'Events',
	foldername:'resources/events',
	searchlabel: {
		plural:'events',
		singular:'event',
	},
	setlist: eventData,
};

// Add faculty to list of default results. 
defaultResults.faculty = 
{
	setname:'Faculty',
	foldername:'resources/faculty',
	searchlabel: {
		plural:'faculty',
		singular:'faculty',
	},
	setlist: facultyData,
};

// Add students to list of default results. 
defaultResults.students = 
{
	setname:'Students',
	foldername:'resources/students',
	searchlabel: {
		plural:'students',
		singular:'student',
	},
	setlist: studentData,
};


