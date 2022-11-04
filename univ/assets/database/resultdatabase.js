

// Define default search results, the basis of final search results. 
const defaultResults = [

	// {
	// 	setname:'Set Name',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },

	// {
	// 	setname:'Courses',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	// {
	// 	setname:'Students',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	// {
	// 	setname:'Faculty',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	// {
	// 	setname:'Programs',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	// {
	// 	setname:'Blog Posts',
	// 	setlist: [
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 		{
	// 			name:'XyzResult',
	// 			link:'javascript:void(0)'
	// 		},
	// 	]
	// },
	
];



// TODO: Add all other databases as components of results database. 

// Add courses to list of default results. 
defaultResults.push(
	{
		setname:'Courses',
		setlist:courseData,
		posttype:{
			sing:'course',
			plural:'courses',
		},
	},
);

// Add faculty to list of default results. 
defaultResults.push(
	{
		setname:'Faculty',
		setlist:facultyData,
		posttype:{
			sing:'faculty',
			plural:'faculty',
		},
	},
);

// Add students to list of default results. 
defaultResults.push(
	{
		setname:'Students',
		setlist:studentData,
		posttype:{
			sing:'student',
			plural:'students',
		},
	},
);

// Add events to list of default results. 
defaultResults.push(
	{
		setname:'Events',
		setlist:eventData,
		posttype:{
			sing:'event',
			plural:'events',
		},
	},
);

// Add programs to list of default results. 
defaultResults.push(
	{
		setname:'Programs',
		setlist:programData,
		posttype:{
			sing:'program',
			plural:'programs',
		},
	},
);

// Add blog posts to list of default results. 
defaultResults.push(
	{
		setname:'Blog Posts',
		setlist:blogPostData,
		posttype:{
			sing:'blog post',
			plural:'blog posts',
		},
	},
);








