


// Define logo icon. 
const logoicon = `
<!-- logo -->
<svg class="logo icon awardfull" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
	<path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
	<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>
<!-- /logo -->`;

// Define house icon. 
const houseicon = `
<!-- logo -->
<svg class="icon house" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
	<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
	<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg>
<!-- /logo -->`;

// Define right caret icon. 
const rightcaret = `
<!-- icon -->
<svg class="icon rightcaret" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
	<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
<!-- /icon -->`;

// Define left chevron icon (wide). 
const leftchevron = `
<!-- icon -->
<svg class="icon leftchevron" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
	<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
<!-- /icon -->`;

// Define right chevron icon (narrow). 
const rightchevron = `
<!-- icon -->
<svg class="icon rightchevron" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
	<path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
</svg>
<!-- /icon -->`;


/*****/


const siteMapData = [
	
	{
		pageid:'home',
		pagetitle:'Home',
		breadcrumbpagelevel:0,
		rootpageurl:'./',
		parentpageid:undefined,
	},
	
	{
		pageid:'story',
		pagetitle:'Story',
		breadcrumbpagelevel:1,
		rootpageurl:'./story',
		parentpageid:'home',
	},
	
	{
		pageid:'privacy',
		pagetitle:'Privacy Policy',
		breadcrumbpagelevel:1,
		rootpageurl:'./privacy',
		parentpageid:'home',
	},
	
	{
		pageid:'contact',
		pagetitle:'Contact Us',
		breadcrumbpagelevel:1,
		rootpageurl:'./contact',
		parentpageid:'home',
	},
	
	{
		pageid:'blogarchive',
		pagetitle:'Blog',
		breadcrumbpagelevel:1,
		rootpageurl:'./blog',
		parentpageid:'home',
	},
	{
		pageid:'programarchive',
		pagetitle:'Programs',
		breadcrumbpagelevel:1,
		rootpageurl:'./programs',
		parentpageid:'home',
	},
	{
		pageid:'coursearchive',
		pagetitle:'Courses',
		breadcrumbpagelevel:1,
		rootpageurl:'./courses',
		parentpageid:'home',
	},
	{
		pageid:'eventarchive',
		pagetitle:'Events',
		breadcrumbpagelevel:1,
		rootpageurl:'./events',
		parentpageid:'home',
	},
	{
		pageid:'facultyarchive',
		pagetitle:'Faculty',
		breadcrumbpagelevel:1,
		rootpageurl:'./faculty',
		parentpageid:'home',
	},
	{
		pageid:'studentarchive',
		pagetitle:'Students',
		breadcrumbpagelevel:1,
		rootpageurl:'./students',
		parentpageid:'home',
	},

	{
		pageid:'blogpost',
		pagetitle:'Blog Post',
		breadcrumbpagelevel:2,
		rootpageurl:'./blog/post/?id=',
		parentpageid:'blogarchive',
	},
	{
		pageid:'programpost',
		pagetitle:'Program Post',
		breadcrumbpagelevel:2,
		rootpageurl:'./programs/post/?id=',
		parentpageid:'programarchive',
	},
	{
		pageid:'coursepost',
		pagetitle:'Course Post',
		breadcrumbpagelevel:2,
		rootpageurl:'./courses/post/?id=',
		parentpageid:'coursearchive',
	},
	{
		pageid:'eventpost',
		pagetitle:'Event Post',
		breadcrumbpagelevel:2,
		rootpageurl:'./events/post/?id=',
		parentpageid:'eventarchive',
	},
	{
		pageid:'facultypost',
		pagetitle:'Faculty Post',
		breadcrumbpagelevel:2,
		rootpageurl:'./faculty/post/?id=',
		parentpageid:'facultyarchive',
	},
	{
		pageid:'studentpost',
		pagetitle:'Student Post',
		breadcrumbpagelevel:2,
		rootpageurl:'./students/post/?id=',
		parentpageid:'studentarchive',
	},
	
	{
		pageid:'404',
		pagetitle:'Page Not Found',
		breadcrumbpagelevel:0,
		breadcrumbpagelevel:1,
		rootpageurl:'./not_found.html',
		parentpageid:'home',
	},

	// {
	// 	pageid:'xyzabcxyz',
	// 	pagetitle:'xyz',
	// 	breadcrumbpagelevel:1,
	// 	rootpageurl:'./xyz',
	// 	parentpageid:'home',
	// },

];


/*****/


// Get breadcrumb trail data for all levels of site map's page hierarchy. 
function getTrailData() {

	// Initialize list of trail data for breadcrumbs. 
	let result = [];
	
	// Initialize page trail index. 
	let index = 0;
	
	// Start hieracrchy traversal with current page. 
	let currentId = currentPageId;
	// console.log( 'Original id:', currentId, currentPageId );
	
	// Add current page id to list. 
	result.push( {pageid:currentId, uplevels:index,} );

	// Increment page trail index. 
	index++;
	
	// Go up the hierarchy until home page. 
	do {
	
		// Go to next parent page. 
		currentId = getPageById(currentId).parentpageid;
		hasValidParent = checkForValidParent(currentId);
		// console.log( 'Current id:', currentId );
		// console.log( '\tGot parent:', hasValidParent );
		
		// Add current page id to list. 
		result.push( {pageid:currentId, uplevels:index,} );

		// Increment page trail index. 
		index++;
	} while(hasValidParent);

	// Return trail data. 
	return result;

	/****/

	// Check for valid parent given page id. 
	function checkForValidParent(id) {
		// console.log('\tcheckForValidParent');
	
		// Get page with given page id. 
		let page = getPageById(id);
		// console.log('\tPage found:',!!page,page);
	
		// Return if no page found. 
		// if(!page) return false;
		
		// Check for valid parent page. 
		return !!(page.parentpageid);
	}
}

// Get page by id. 
function getPageById(id) {

	// Go thru each page until match found. 
	for(let page of siteMapData) {
		
		// Return page with matching id. 
		if(page.pageid==id) return page;
	}

	// Return nothing if match not found. 
	return null;
}
