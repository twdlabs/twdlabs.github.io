


// Get posts section. 
const postssection = document.querySelector('div#container section.blog div.grid div.body div.posts');
console.log('Posts section:',postssection);


// Get destination for featured posts. 
const featuredpostsdestinationA = document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.postlist.a');
const featuredpostsdestinationB = document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.postlist.b');
// console.log('Featured posts destinations:',featuredpostsdestinationA,featuredpostsdestinationB);

// Get archive section. 
const archiveSection = document.querySelector('div#container section.blog div.grid div.body div.posts#archive');
// console.log('Archive section:',archiveSection);
// Get destination for archive post pages. 
const archivePagesDestination = document.querySelector('div#container section.blog div.grid div.body div.posts#archive ul.pagelist');
// console.log('Archive pages destination:',archivePagesDestination);
// Get destination for archive posts. 
const archivePostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts#archive ul.postlist');
// console.log('Archive posts destination:',archivePostsDestination);

// Get category section. 
const categorySection = document.querySelector('div#container section.blog div.grid div.body div.posts#category');
// Get destination for category posts. 
const categoryPostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts#category ul.postlist');
// console.log('Category posts destination:',categoryPostsDestination);

// Get collection section. 
const collectionSection = document.querySelector('div#container section.blog div.grid div.body div.posts#collection');
// Get destination for collection posts. 
const collectionPostsDestination = document.querySelector('div#container section.blog div.grid div.body div.posts#collection ul.postlist');
// console.log('Collection posts destination:',collectionPostsDestination);


// Get filter panel. 
const filterpanel = document.querySelector('div#container section.blog div.grid div.body div.filterpanel');
// console.log('filterpanel:',filterpanel);
// Get group headers in filter panel. 
const filterpanelheaders = document.querySelectorAll('div#container section.blog div.grid div.body div.filterpanel ul.filterlist li.filtergroup h3.filterhead');
// console.log('filterpanelheaders:',filterpanelheaders);


// Get input field for search query. 
const searchqueryfield = document.querySelector('div#container section.blog div.grid div.head div.filter input#searchquery');
// console.log('searchqueryfield:',searchqueryfield);
// Get clear button for search query. 
const searchclearbtn = document.querySelector('div#container section.blog div.grid div.head div.filter label.searchclearbtn');
// console.log('searchclearbtn:',searchclearbtn);
// Get label for empty search results. 
const emptysearchlabel = document.querySelector('div#container section.blog div.grid div.body div.posts div.emptylabel');
// console.log('emptysearchlabel:',emptysearchlabel);


/*****/


// Set flag for memory load (previews on by default). 
let blockPreviews = false;


/*****/


// Load blog posts. 
loadBlog();


/*****/


// Load blog posts. 
function loadBlog() {
	console.log('Loading blog...');

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
	function createBlogPostsLayout(rawpostlist,previewsOn,paginationOn) {
		console.log('\trawpostlist:',rawpostlist);
		console.log('\tpreviewsOn:',previewsOn);
		console.log('\tpaginationOn:',paginationOn);
	
		// Initialize resulting layout. 
		let result = '';

		// Deal with 3d data matrix. 
		if(paginationOn) {

			// Define number of posts per page. 
			// const pagepostcapacity = 120;
			const pagepostcapacity = 60;

			// Get paginated post matrix. 
			let postmatrix = paginateData(rawpostlist,pagepostcapacity);
			console.log('\tpostmatrix:',postmatrix);
	
			// Go thru each list in matrix. 
			for(let pageindex in postmatrix) {

				// Get post list for currrent page. 
				let postlist = postmatrix[pageindex];

				// Open page. 
				result += openPage(pageindex);
	
				// Go thru each post in list. 
				for(let post of postlist) {
					// console.log('Post:',post);
		
					// Show message for invalid project post. 
					if(!post) {
						console.warn('Null project post', post);
						// continue;
					}
			
					// Add to layout result: blog post card with project link. 
					result += createBlogCard(post,previewsOn);
				}

				// Close page. 
				result += closePage();
			}

			// Save page count. 
			pagecount = postmatrix.length;
			console.log('Page count:',pagecount);
		}

		// Deal with 2d data list. 
		else {
	
			// Go thru each post in list. 
			for(let post of rawpostlist) {
				// console.log('Post:',post);
		
				// Show message for invalid project post. 
				if(!post) {
					console.warn('Null project post found', post);
					continue;
				}
		
				// Add to layout result: blog post card with project link. 
				result += createBlogCard(post,previewsOn);
			}

			// Save page count. 
			pagecount = 1;
			console.log('Page count:',pagecount);
		}

		// Activate page navigator. 
		activatePageNav();
	
		// Return resulting layout. 
		return result;

		/***/

		// Open page. 
		function openPage(pageindex) {
			return `
			<!-- postpage -->
			<li class="postpage" data-pageindex="${pageindex}">

				<!-- postlist -->
				<ul class="postlist">`;
			// return `
			// <!-- postpage -->
			// <li class="postpage${ 1*pageindex ? '' : ' active' }" data-pageindex="${pageindex}">

			// 	<!-- postlist -->
			// 	<ul class="postlist">`;
		}

		// Close page. 
		function closePage() {
			return `
				</ul>
				<!-- /postlist -->

			</li>
			<!-- /postpage -->`;
		}
	
		// Create blog card. 
		function createBlogCard(post,previewsOn) {
	
			// Get project id for given post. 
			let projectid = post.projectid;
			// Get project name for given post. 
			let projectname = post.projectname;
			// Get category name for given post. 
			let categoryname = getCategoryName(projectid);
			// Get author name for given post. 
			let authorname = getAuthorName(post.authorid);
	
			// Get url of page to be added. 
			let pageurl = getRelativeUrl(`../${projectid}/index.html`);
	
			// Compile post card. 
			return `
			<!-- postcard -->
			<li class="postcard${ !post ? ' x' : '' }" data-projectid="${projectid}" title="${projectid}">
	
				<!-- projectlink -->
				<a class="projectlink" href="${pageurl}" target="_blank">
	
					<!-- preview -->
					<div class="preview">${ /* previewsOn ? createPreviewPanel(projectid) : */ '' }</div>
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
			function getAuthorName(queryid) {
	
				// Create data space for author names. 
				const authorData = {
					twd:'TWD Labs',
					w3s:'W3 Schools',
					codepen:'Code Pen',
				}
	
				// Go thru each project category. 
				for(let authorid in authorData) {
	
					// Check if author found. 
					let authorfound = /* author. */authorid == queryid;
	
					// Return name of author if found. 
					if(authorfound) return authorData[authorid];
					// if(authorfound) return author.authorname;
				}
	
				// Return nothing if author not found. 
				return '';
			}
		}

		// TODO: Activate page navigator. 
		function activatePageNav() {

			// Display currently selected page. 
			displaySelectedPage();
		}
	}

	// Load featured posts. 
	function loadFeaturedPosts() {

		// Check if loading featured posts. 
		if(!featuredpostsdestinationA || !featuredpostsdestinationB) {
			console.log('No featured posts...');
			return;
		}
		console.log('Loading featured posts...');
	
		// Get list of featured projects (sorted by project id). 
		let featuredProjectsA = ( featuredProjectIds['a']/* .sort() */ ).map(getProjectById);
		let featuredProjectsB = ( featuredProjectIds['b']/* .sort() */ ).map(getProjectById);
		// console.log('Featured projects A:', featuredProjectsA.length, featuredProjectIds['a'], featuredProjectsA);
		// console.log('Featured projects B:', featuredProjectsB.length, featuredProjectIds['b'], featuredProjectsB);
		
		// Get layout for featured posts. 
		let featuredLayoutA = createBlogPostsLayout(featuredProjectsA, true && !blockPreviews, false);
		let featuredLayoutB = createBlogPostsLayout(featuredProjectsB, true && !blockPreviews, false);
		
		// Add featured layout to blog section. 
		featuredpostsdestinationA.innerHTML = featuredLayoutA;
		featuredpostsdestinationB.innerHTML = featuredLayoutB;
	}
	
	// Load collection posts. 
	function loadCollectionPosts() {

		// Check if loading collection posts. 
		if(!collectionPostsDestination) {
			console.log('No collection posts...');
			return;
		}
		console.log('Loading collection posts...');
	
		// Get custom list of projects for current collection. 
		let collectionCategories = ( projectmetagroup.groupitemsidlist ).map(getProjectCategoryById);
		// console.log('Collection categories:', collectionCategories);
		let collectionProjectIdsMatrix = collectionCategories.map(x=>x.groupitemsidlist);
		// console.log('Collection project ids matrix:',collectionProjectIdsMatrix);
		let collectionProjectIds = flatten(collectionProjectIdsMatrix).sort()
		// console.log('Collection project ids:',collectionProjectIds);
		let collectionProjects = collectionProjectIds.map(getProjectById);
		// console.log('Collection projects:', collectionProjects.length, collectionProjects);
		
		// Get layout for collection posts. 
		let collectionPostsLayout = createBlogPostsLayout(collectionProjects, true && !blockPreviews, false);
		
		// Add layout to blog section. 
		collectionPostsDestination.innerHTML = collectionPostsLayout;

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
	
	// Load category posts. 
	function loadCategoryPosts() {

		// Check if loading category posts. 
		if(!categoryPostsDestination) {
			console.log('No category posts...');
			return;
		}
		console.log('Loading category posts...');
	
		// Get custom list of projects for current category (sorted by project id). 
		let categoryProjects = ( projectgroup.groupitemsidlist.sort() ).map(getProjectById);
		// console.log('Category projects:', categoryProjects.length, categoryProjects);
		
		// Get layout for category posts. 
		let categoryPostsLayout = createBlogPostsLayout(categoryProjects, true && !blockPreviews, false);
		
		// Add layout to blog section. 
		categoryPostsDestination.innerHTML = categoryPostsLayout;
	}
	
	// Load archive posts. 
	function loadArchivePosts() {

		// Check if loading archive posts. 
		if(!archivePostsDestination) {
			console.log('Bypass archive posts...');
			return;
		}
		console.log('Loading archive posts...');
	
		// Get list of archive projects (sorted by project id). 
		let archiveProjects = projectData.sort(sortByProjectId);
		// console.log('Archive projects:', archiveProjects.length, archiveProjects);

		// Define if pagination on. 
		let paginationOn = false;
		paginationOn = true;
		
		// Get layout for archive posts. 
		let archiveLayout = createBlogPostsLayout(archiveProjects, false, paginationOn);
		
		// Add archive layout to blog section. 
		if(paginationOn) {
			// archivePagesDestination.insertAdjacentHTML('afterbegin',archiveLayout);
			archivePagesDestination.innerHTML = archiveLayout;
		}
		else {
			archivePostsDestination.innerHTML = archiveLayout;
		}

		// Display currently selected page. 
		if(paginationOn) displaySelectedPage();
	
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
}

// Toggle style of posts. 
function togglePostStyle(togglebtn) {
	
	// Get selected style id. 
	let styleid = togglebtn.getAttribute('data-styleid');

	// Toggle style of posts by id. 
	togglePostStyleById(styleid);
}

// Toggle style of posts by id. 
function togglePostStyleById(styleid) {

	// Define style ids. 
	const styleids = ['small','large','listed',];

	// Go thru each style id. 
	for(let id of styleids) {
		
		// Turn off style id. 
		archiveSection.classList.remove(id);
	}
	
	// Turn on selected style id. 
	archiveSection.classList.add(styleid);
}


// // Define sort function for post items. 
// function sortPosts(a,b) {
// 	// console.log('Sorting posts...');
// 	// return (a.projectid - b.projectid);

// 	if(a.projectid < b.projectid) return -1;
// 	else if(a.projectid > b.projectid) return 1;
// 	else return 0;
// }
