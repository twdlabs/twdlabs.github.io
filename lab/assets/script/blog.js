


// Get featured section. 
const featured = {
	section:document.querySelector('div#container section.blog div.grid div.body div.posts#featured'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.pagelist'),
	postsdestinationa:document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.pagelist li.postpage ul.postlist.a'),
	postsdestinationb:document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.pagelist li.postpage ul.postlist.b'),
};
// console.log('Featured section:',featured);
const featuredSection = featured.section;
const featuredPagesDestination = featured.pagesdestination;
const featuredpostsdestinationA = featured.postsdestinationa;
const featuredpostsdestinationB = featured.postsdestinationb;

// Get archive section. 
const archive = {
	section:document.querySelector('div#container section.blog div.grid div.body div.posts#archive'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#archive ul.pagelist'),
	postsdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#archive ul.pagelist li.postpage ul.postlist'),
};
// console.log('Archive section:',archive);
const archiveSection = archive.section;
const archivePagesDestination = archive.pagesdestination;
const archivePostsDestination = archive.postsdestination;

// Get category section. 
const category = {
	section:document.querySelector('div#container section.blog div.grid div.body div.posts#category'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#category ul.pagelist'),
	postsdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#category ul.pagelist li.postpage ul.postlist'),
};
// console.log('Category section:',category);
const categorySection = category.section;
const categoryPagesDestination = category.pagesdestination;
const categoryPostsDestination = category.postsdestination;

// Get collection section. 
const collection = {
	section:document.querySelector('div#container section.blog div.grid div.body div.posts#collection'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#collection ul.pagelist'),
	postsdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#collection ul.pagelist li.postpage ul.postlist'),
};
// console.log('Collection section:',collection);
const collectionSection = collection.section;
const collectionPagesDestination = collection.pagesdestination;
const collectionPostsDestination = collection.postsdestination;


/*****/


// Set flag for memory load (previews on by default). 
let blockAutoPreviews = false;
// blockAutoPreviews = true;

// Define if pagination on. 
let paginationOn = false;
paginationOn = true;


/*****/


// Load blog posts. 
loadBlog();


/*****/


// Load blog posts. 
function loadBlog() {
	// console.log('Loading blog...');

	// Load featured posts. 
	loadFeaturedPosts();
	
	// Load collection posts. 
	loadCollectionPosts();
	
	// Load category posts. 
	loadCategoryPosts();
	
	// Load archive posts. 
	loadArchivePosts();

	/****/

	// Create layout for blog posts. 
	function createBlogLayout(rawpostlist,previewsOn,doMinimalPage) {
		// console.log('\t\tRaw post list:',rawpostlist);
		// console.log('\t\tPreviews on:',previewsOn);
	
		// Initialize resulting layout. 
		let result = '';

		// Create single-page layout (2d data list). 
		if(!paginationOn) {

			// Add page of posts. 
			result += createBlogPage(0,rawpostlist,previewsOn);

			// Save page count. 
			pagecount = 1;
		}

		// Create multi-page layout (3d data matrix). 
		else {

			// Paginate post data into post matrix. 
			let postmatrix = paginateData(rawpostlist,pagepostcapacity);
			// console.log('\t\tPaginated post matrix:',postmatrix);
	
			// Go thru each page in post matrix. 
			for(let pageindex in postmatrix) {

				// Get list of posts for currrent page. 
				let postlist = postmatrix[pageindex];

				// Add page of posts. 
				result += createBlogPage(pageindex,postlist,previewsOn,doMinimalPage);
			}

			// Save page count. 
			pagecount = postmatrix.length;
		}
	
		// Return resulting layout. 
		return result;

		/***/

		// Create page for blog posts layout. 
		function createBlogPage(pageindex,pagepostlist,previewsOn,doMinimalPage) {
	
			// Initialize page layout. 
			let pagelayout = '';

			// Compile blog page. 
			pagelayout += `
			<!-- postpage -->
			<li class="postpage${ doMinimalPage ? ' m' : ''}" data-pageindex="${pageindex}">

				<!-- postlist -->
				<ul class="postlist">${ createBlogList() }</ul>
				<!-- /postlist -->

			</li>
			<!-- /postpage -->`;
	
			// Return page layout. 
			return pagelayout;
		
			/**/
	
			// Create list of blog posts. 
			function createBlogList() {
	
				// Initialize list layout. 
				let listlayout = '';
	
				// Go thru each post in list. 
				for(let post of pagepostlist) {
					// console.log('Post:',post);
		
					// Disregard invalid project post. 
					// if(!post) continue;
			
					// Add to page layout: blog post card with project link. 
					listlayout += createBlogCard(post,previewsOn);
				}
	
				// Return list layout. 
				return listlayout;
			}
	
			// Create card for blog post. 
			function createBlogCard(post,previewsOn) {
				// if(!post) console.warn('\t\tNull project post', post);
		
				// Get project id for given post. 
				let projectid = post ? post.projectid : '';
				// Get project name for given post. 
				let projectname = post ? post.projectname : '';
				// Get category name for given post. 
				let categoryname = getCategoryName(projectid);
				// Get author name for given post. 
				let authorname = post ? getAuthorName(post.authorid) : '';
		
				// Get url of project to be added. 
				// let projecturl = projectid ? getRelativeUrl(`./../${projectid}/index.html`) : 'javascript:void(0)';
				let projecturl = projectid ? getRelativeUrl(`./library/project/?pid=${projectid}`) : 'javascript:void(0)';
		
				// Compile post card. 
				return `
				<!-- postcard -->
				<li class="postcard${ !post ? ' x' : '' }" data-projectid="${projectid}" title="${projectid}">
		
					<!-- projectlink -->
					<a class="projectlink" href="${projecturl}" target="_blank">
		
						<!-- preview -->
						<div class="preview">${ (previewsOn&&projectid) ? createPreviewPanel(projectid) : '' }</div>
						<!-- /preview -->
		
						<!-- caption -->
						<div class="caption">
				
							<!-- id -->
							<span class="id">${ projectid }</span>
							<!-- /id -->
		
							<!-- name -->
							<span class="name">${ projectname }</span>
							<!-- /name -->
				
							<!-- category -->
							<span class="category">${ categoryname }</span>
							<!-- /category -->
				
							<!-- author -->
							<span class="author">${ authorname }</span>
							<!-- /author -->
		
						</div>
						<!-- /caption -->
		
					</a>
					<!-- /projectlink -->
		
				</li>
				<!-- /postcard -->`;
		
				/**/
		
				// Get category name for given project. 
				function getCategoryName(projectid) {
					if(!projectid) return '';
		
					// Go thru each project category. 
					for(let projectcategory of projectCategoryData) {
		
						// Check if project found in current category. 
						let projectfound = projectcategory.groupitemsidlist.includes(projectid);
		
						// Return name of current category if project found. 
						if(projectfound) return projectcategory.groupname;
					}
		
					// Return nothing if project not found in any category. 
					return '';
				}
		
				// Get author name for given project. 
				function getAuthorName(authorid) {

					// Get author name. 
					let authorname = authorData[authorid];

					// Return nothing if author not found. 
					return (authorname ? authorname : '');
				}
			}
		}
	}
	
	// Load archive posts. 
	function loadArchivePosts() {

		// Check if loading archive posts. 
		if(!archive.pagesdestination) {
			// console.log('\tBypass archive posts...');
			return;
		}
		console.log('Loading archive posts...');
	
		// Get list of archive projects (sorted by project id). 
		let archiveProjects = projectData.sort(sortByProjectId);
		// console.log('Archive projects:', archiveProjects.length, archiveProjects);
		
		// Get layout for archive posts. 
		let archiveLayout = createBlogLayout(archiveProjects, false);
		
		// Display archive posts in blog section. 
		archive.pagesdestination.innerHTML = archiveLayout;

		// Load dot panel in page navigator. 
		loadPageNavigator(archive.section);

		// Display currently selected page. 
		displaySelectedPage();
	
		/****/
	
		// Sort projects by project id. 
		function sortByProjectId(a,b) {
			if(a.projectid == b.projectid) return 0;
			else if(a.projectid < b.projectid) return -1;
			else if(a.projectid > b.projectid) return 1;
			else {
				console.warn('Questionable comparison', a.projectid,b.projectid, a,b);
				return 0;
			}
		}
	}
	
	// Load category posts. 
	function loadCategoryPosts() {

		// Check if loading category posts. 
		if(!category.pagesdestination) {
			// console.log('\tBypass category posts...');
			return;
		}
		console.log('Loading category posts...');
	
		// Get custom list of projects for current category (sorted by project id). 
		let categoryProjects = ( projectcategory.groupitemsidlist.sort() ).map(getProjectById);
		// console.log('Category projects:', categoryProjects.length, categoryProjects);
		
		// Get layout for category posts. 
		let categoryLayout = createBlogLayout(categoryProjects, true && !blockAutoPreviews);
		
		// Display category posts in blog section. 
		category.pagesdestination.innerHTML = categoryLayout;

		// Load dot panel in page navigator. 
		loadPageNavigator(category.section);

		// Display currently selected page. 
		displaySelectedPage();
	}
	
	// Load collection posts. 
	function loadCollectionPosts() {

		// Check if loading collection posts. 
		if(!collection.pagesdestination) {
			// console.log('\tBypass collection posts...');
			return;
		}
		console.log('Loading collection posts...');
	
		// Get custom list of projects for current collection. 
		let collectionCategories = ( projectcollection.groupitemsidlist ).map(getProjectCategoryById);
		// console.log('Collection categories:', collectionCategories);
		let collectionProjectIdsMatrix = collectionCategories.map( category => category.groupitemsidlist );
		// console.log('Collection project ids matrix:',collectionProjectIdsMatrix);
		let collectionProjectIds = flatten(collectionProjectIdsMatrix).sort()
		// console.log('Collection project ids:',collectionProjectIds);
		let collectionProjects = collectionProjectIds.map(getProjectById);
		// console.log('Collection projects:', collectionProjects.length, collectionProjects);
		
		// Get layout for collection posts. 
		let collectionLayout = createBlogLayout(collectionProjects, true && !blockAutoPreviews);
		
		// Display collection posts in blog section. 
		collection.pagesdestination.innerHTML = collectionLayout;

		// Load dot panel in page navigator. 
		loadPageNavigator(collection.section);

		// Display currently selected page. 
		displaySelectedPage();

		/****/

		// Flatten 3d data matrix into 2d data list. 
		function flatten(datamatrix) {

			// Initialize result. 
			let result = [];

			// Accumulate result. 
			for(let datalist of datamatrix) {
				// result = result.concat(datalist);
				for(let datapoint of datalist) {
					result.push(datapoint);
				}
			}

			// Return result. 
			return result;
		}
	}

	// Load featured posts. 
	function loadFeaturedPosts() {

		// Check if loading featured posts. 
		// if(!featured.postsdestinationa || !featured.postsdestinationb) {
		if(!featured.pagesdestination) {
			// console.log('\tBypass featured posts...');
			return;
		}
		console.log('Loading featured posts...');
	
		// Get list of featured projects (sorted by project id). 
		let xyz = featuredProjectIds['a'].concat( featuredProjectIds['b'] );
		let featuredProjects = xyz.map(getProjectById);
		// console.log('Featured projects:', featuredProjects.length, xyz, featuredProjects);
		// let featuredProjectsA = ( featuredProjectIds['a'] ).map(getProjectById);
		// let featuredProjectsB = ( featuredProjectIds['b'] ).map(getProjectById);
		// console.log('Featured projects A:', featuredProjectsA.length, featuredProjectIds['a'], featuredProjectsA);
		// console.log('Featured projects B:', featuredProjectsB.length, featuredProjectIds['b'], featuredProjectsB);
		
		// Get layout for featured posts. 
		let featuredLayout = createBlogLayout(featuredProjects, true && !blockAutoPreviews, true);
		// console.log(featuredLayout);
		// let featuredLayoutA = createBlogLayout(featuredProjectsA, true && !blockAutoPreviews);
		// let featuredLayoutB = createBlogLayout(featuredProjectsB, true && !blockAutoPreviews);
		// console.log(featuredLayoutA);
		// console.log(featuredLayoutB);
		
		// Add featured layout to blog section. 
		featured.pagesdestination.innerHTML = featuredLayout;
		// featured.postsdestinationa.innerHTML = featuredLayoutA;
		// featured.postsdestinationb.innerHTML = featuredLayoutB;

		// Load dot panel in page navigator. 
		loadPageNavigator(featured.section);

		// Display currently selected page. 
		displaySelectedPage();
	}

	// Load dot panel in page navigator. 
	function loadPageNavigator(section) {
		// console.log('Page count:',pagecount,dotpaneldestination);
		if(!dotpaneldestination) {
			console.warn('No page navigator present');
			return;
		}

		// Initialize layout for dot panel. 
		let dotpanellayout = ''

		// Go thru each page. 
		for(let pageindex=0 ; pageindex<pagecount ; pageindex++) {

			// 
			dotpanellayout += `
			<!-- dotitem -->
			<li class="dotitem">

				<!-- pagelink -->
				<a class="pagelink" href="javascript:void(0)" data-pageindex="${pageindex}"></a>
				<!-- /pagelink -->

			</li>
			<!-- /dotitem -->`;
		}

		// Display layout for dot panel. 
		dotpaneldestination.innerHTML = dotpanellayout;

		// Activate page links in dot panel. 
		activatePageLinks();

		// Turn on page shifter buttons in given section (if needed). 
		if(pagecount>1) section.classList.add('multipage');

		/***/

		// Activate page links in dot panel. 
		function activatePageLinks() {

			// Get page links in dot panel. 
			const dotpanelpagelinks = document.querySelectorAll('div#container section.blog div.grid div.body nav.pagepanel ul.dotpanel li.dotitem a.pagelink');

			// Go thru each page link. 
			for(let pagelink of dotpanelpagelinks) {

				// 
				pagelink.addEventListener('click',selectPage)
			}

			/**/

			// Select page by index. 
			function selectPage(event) {

				// Get selected page link. 
				let pagelink = event.currentTarget;
				console.log('pagelink:',pagelink);

				// Get index of selected page. 
				let selectedindex = pagelink.getAttribute('data-pageindex');
				console.log('selectedindex:',selectedindex);

				// Select page by index. 
				selectPageByIndex(selectedindex);
			}
		}
	}
}

// Create preview panel for blog post card. 
function createPreviewPanel(projectid) {

	// Get url of page to be previewed. 
	let pageurl = projectid ? getRelativeUrl(`./../${projectid}/index.html`) : 'javascript:void(0)';

	// Compile preview panel. 
	return `
	<!-- preview -->
	<iframe class="preview" src="${pageurl}"></iframe>
	<!-- /preview -->`;
}


// // Define sort function for post items. 
// function sortPosts(a,b) {
// 	// console.log('Sorting posts...');
// 	// return (a.projectid - b.projectid);

// 	if(a.projectid < b.projectid) return -1;
// 	else if(a.projectid > b.projectid) return 1;
// 	else return 0;
// }
