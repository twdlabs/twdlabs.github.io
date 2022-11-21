

const sitemapdata = [
	
	{	// id:0
		pagetitle:'Home',
		pagelevel:0,
		rootpageurl:'./',
		parentpageid:undefined,
	},
	
	{	// id:1
		pagetitle:'Story',
		pagelevel:1,
		rootpageurl:'./story',
		parentpageid:0,
	},
	
	{	// id:2
		pagetitle:'Blog',
		pagelevel:1,
		rootpageurl:'./blog',
		parentpageid:0,
	},
	{	// id:3
		pagetitle:'Programs',
		pagelevel:1,
		rootpageurl:'./programs',
		parentpageid:0,
	},
	{	// id:4
		pagetitle:'Courses',
		pagelevel:1,
		rootpageurl:'./courses',
		parentpageid:0,
	},
	{	// id:5
		pagetitle:'Events',
		pagelevel:1,
		rootpageurl:'./events',
		parentpageid:0,
	},
	{	// id:6
		pagetitle:'Faculty',
		pagelevel:1,
		rootpageurl:'./faculty',
		parentpageid:0,
	},
	{	// id:7
		pagetitle:'Students',
		pagelevel:1,
		rootpageurl:'./students',
		parentpageid:0,
	},

	{	// id:8
		pagetitle:'Blog Post',
		pagelevel:2,
		rootpageurl:'./blog/post/?id=1',
		parentpageid:2,
	},
	{	// id:9
		pagetitle:'Program Post',
		pagelevel:2,
		rootpageurl:'./programs/post/?id=1',
		parentpageid:3,
	},
	{	// id:10
		pagetitle:'Course Post',
		pagelevel:2,
		rootpageurl:'./courses/post/?id=1',
		parentpageid:4,
	},
	{	// id:11
		pagetitle:'Event Post',
		pagelevel:2,
		rootpageurl:'./events/post/?id=1',
		parentpageid:5,
	},
	{	// id:12
		pagetitle:'Faculty Post',
		pagelevel:2,
		rootpageurl:'./faculty/post/?id=1',
		parentpageid:6,
	},
	{	// id:13
		pagetitle:'Student Post',
		pagelevel:2,
		rootpageurl:'./students/post/?id=1',
		parentpageid:7,
	},

	// {	// id:14
	// 	pagetitle:'xyz',
	// 	pagelevel:1,
	// 	rootpageurl:'./xyz',
	// 	parentpageid:0,
	// },

];


/*****/


const rightarrow = `
<!-- icon -->
<svg class="icon rightarrow" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
	<path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
</svg>
<!-- /icon -->`;


/*****/


// Initialize trail of breadcrumbs. 
let trail = '';

// Add current page to trail. 
trail += createPageNode('./', 'PostName');

// Add breadcrumbs for each level of hierarchy traversed. 
while( hasValidParent(page) ) {
	// Prepend current parent to trail. 
	trail = createPageNode('./', 'ParentName') + rightarrow + trail;
}


/*****/


// Check for valid parent. 
function hasValidParent(page) {
	return !isNaN(page.parentpageid)
}

// Create link for page node. 
function createPageNode(url,pagename) {
	// 
	return `
	<!-- node -->
	<a class="node" href="${ getRelativeUrl(url) }">${pagename}</a>
	<!-- /node -->`;
}
