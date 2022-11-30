

// Define site map data. 
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
		pageid:'blogarchive',
		pagetitle:'Blog',
		breadcrumbpagelevel:1,
		rootpageurl:'./blog',
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
		pageid:'artistarchive',
		pagetitle:'Artists',
		breadcrumbpagelevel:1,
		rootpageurl:'./artists',
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
		pageid:'eventpost',
		pagetitle:'Event Post',
		breadcrumbpagelevel:2,
		rootpageurl:'./events/post/?id=',
		parentpageid:'eventarchive',
	},
	{
		pageid:'artistpost',
		pagetitle:'Artist Post',
		breadcrumbpagelevel:2,
		rootpageurl:'./artists/post/?id=',
		parentpageid:'artistarchive',
	},
	
	{
		pageid:'404',
		pagetitle:'Page Not Found',
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
	
	// Start hieracrchy traversal with current page. 
	let currentId = currentPageId;
	let validParent = hasValidParent(currentId)
	// console.log( 'Current id:', currentId );
	// console.log( '\tGot parent:', validParent );
	
	// Add current page id to list. 
	result.unshift(currentId);
	
	// Go up the hierarchy until home page. 
	while(validParent) {
	
		// Go to next parent page. 
		currentId = getPageById(currentId).parentpageid;
		validParent = hasValidParent(currentId);
		// console.log( 'Current id:', currentId );
		// console.log( '\tGot parent:', validParent );
		
		// Add current page id to list. 
		result.unshift(currentId);
	}

	// 
	return result;

	/****/

	// Check for valid parent given page id. 
	function hasValidParent(id) {
		// console.log('\thasValidParent');
	
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
