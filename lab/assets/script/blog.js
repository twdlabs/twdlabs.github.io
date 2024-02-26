


// Get components of featured section. 
const featured = {
	blockpresent:true,
	block:document.querySelector('div#container section.blog div.grid div.body div.posts#featured'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.pagelist'),
	postsdestinationa:document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.pagelist li.postpage ul.postlist.a'),
	postsdestinationb:document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.pagelist li.postpage ul.postlist.b'),
};
// console.log('Featured section:',featured);

// Get components of archive section. 
const archive = {
	blockpresent:true,
	block:document.querySelector('div#container section.blog div.grid div.body div.posts#archive'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#archive ul.pagelist'),
	postsdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#archive ul.pagelist li.postpage ul.postlist'),
};
// console.log('Archive section:',archive);

// Get components of category section. 
const category = {
	blockpresent:true,
	block:document.querySelector('div#container section.blog div.grid div.body div.posts#category'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#category ul.pagelist'),
	postsdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#category ul.pagelist li.postpage ul.postlist'),
};
// console.log('Category section:',category);

// Get components of collection section. 
const collection = {
	blockpresent:true,
	block:document.querySelector('div#container section.blog div.grid div.body div.posts#collection'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#collection ul.pagelist'),
	postsdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#collection ul.pagelist li.postpage ul.postlist'),
};
// console.log('Collection section:',collection);


// Get indicator label for empty set of results. 
const nullresultslabel = document.querySelector('div#container section.blog div.grid div.body div.posts div.nullresultslabel');
// console.log('Null results label:',nullresultslabel);


/*****/


// Set flag for memory load (previews on by default). 
let allowPreview = true;
allowPreview = false;

// Define if pagination on. 
let paginationOn = true;


/*****/


// Load blog posts. 
loadBlog( [] );


/*****/


// Load blog posts. 
function loadBlog(selectedfilteritems) {
	console.log('Loading blog...',selectedfilteritems);

	// Check if all criteria required. 
	let passallcriteria = (typeof filterpanel != 'undefined') ? filterpanel.anyallswitch.checkbox.checked : undefined;

	// Load featured posts. 
	loadFeaturedPosts();
	
	// Load collection posts. 
	loadCollectionPosts();
	
	// Load category posts. 
	loadCategoryPosts();
	
	// Load archive posts. 
	loadArchivePosts();

	/****/
	
	// Load posts. 
	function loadPosts(section,projects,previewsOn,doMinimalPage) {

		// Filter projects. 
		projects = projects.filter(checkFilterPass);
		// console.log('Projects:', projects.length, projects);
		
		// Display layout for posts in blog section. 
		section.pagesdestination.innerHTML = createBlogLayout(projects,previewsOn,doMinimalPage);

		// Load dot panel in page navigator. 
		loadPageNavigator(section.block);

		// Display currently selected page. 
		displaySelectedPage();

		// Set state of results block. 
		setResultState(projects.length);
	
		/***/

		// Check if post passes filter criteria. 
		function checkFilterPass(projectitem) {
		
			// Pass filter if no filter items selected. 
			if(!selectedfilteritems.length) return true;
	
			// Check post for all criteria. 
			if(passallcriteria) {
				return checkFilterPassAll();
			}
			// Check post for any criteria. 
			else {
				return checkFilterPassAny();
			}
	
			/**/
	
			// Check if post passes all given filter criteria. 
			function checkFilterPassAll(/* projectitem */) {
		
				// Go thru each selected filter item. 
				for(let filteritem of selectedfilteritems) {
		
					// Get xyz. 
					let typeid = filteritem.filtertypeid;
					let valueid = filteritem.filtervalueid;
					/* if(!valueid) */ console.log('value id:',valueid,undefined);
		
					// Check for match btwn given project and current filter item. 
					let passed = (projectitem[typeid] == valueid);
		
					// Return false if any mismatch found. 
					if(!passed) return false;
				}
		
				// Return true if no mismatch found. 
				return true;
			}
		
			// Check if post passes any given filter criteria. 
			function checkFilterPassAny(/* projectitem */) {
		
				// Go thru each selected filter item. 
				for(let filteritem of selectedfilteritems) {
		
					// Get xyz. 
					let typeid = filteritem.filtertypeid;
					let valueid = filteritem.filtervalueid;
					if(!valueid) console.log('value id:',valueid/* ,undefined */);
		
					// Check for match btwn given project and current filter item. 
					let passed = (projectitem[typeid] == valueid);
		
					// Return true if any match found. 
					if(passed) return true;
				}
		
				// Return false if no match found. 
				return false;
			}
		}

		// Create layout for blog posts. 
		function createBlogLayout(rawpostlist,previewsOn,doMinimalPage) {
			// console.log('\t\tRaw post list:',rawpostlist);
			// console.log('\t\tPreviews on:',previewsOn);
		
			// Initialize blog layout. 
			let bloglayout = '';
	
			// Create single-page layout (2d data list). 
			if(!paginationOn) {
	
				// Add page of posts. 
				bloglayout += createBlogPage(0,rawpostlist,previewsOn);
	
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
					bloglayout += createBlogPage(pageindex,postlist,previewsOn,doMinimalPage);
				}
	
				// Save page count. 
				pagecount = postmatrix.length;
			}
		
			// Return blog layout. 
			return bloglayout;
	
			/**/
	
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
			
					/**/
		
					// Create card for blog post. 
					function createBlogCard(post,previewsOn) {
						// if(!post) console.warn('\t\tNull project post', post);
				
						// Get project id for given project post. 
						let projectid = post ? post.projectid : '';
						// Get project name for given project post. 
						let projectname = post ? post.projectname : '';
						// Get category name for given project post. 
						let categoryname = getCategoryNameByProject(projectid);
						// Get author name for given project post. 
						let authorname = post ? getAuthorNameById(post.authorid) : '';
				
						// Get url of project to be added. 
						// let projecturl = projectid ? getRelativeUrl(`./../${projectid}/index.html`) : 'javascript:void(0)';
						let projecturl = projectid ? getRelativeUrl(`./library/project/?pid=${projectid}`) : 'javascript:void(0)';
				
						// Compile post card for given project. 
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
						function getCategoryNameByProject(projectid) {
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
					}
				}
			}
		}

		// Load dot panel in page navigator. 
		function loadPageNavigator(section) {
	
			// Check if loading page navigator. 
			if(!dotpaneldestination) {
				console.warn('No page navigator present');
				return;
			}
	
			// Check if any matches found. 
			// console.log('Page count:',pagecount,dotpaneldestination);
	
			// Initialize layout for dot panel. 
			let dotpanellayout = '';
	
			// Go thru each page. 
			for(let i=0 ; i<pagecount ; i++) {
	
				// Add layout for page link. 
				dotpanellayout += createPageLinkLayout(i);
			}
	
			// Display layout for dot panel. 
			dotpaneldestination.innerHTML = dotpanellayout;
	
			// Activate page links in dot panel. 
			activatePageLinks();
	
			// Turn on page shifter buttons in given section (if needed). 
			if(pagecount>1) section.classList.add('multipage');
	
			/**/
	
			// Create layout for page link. 
			function createPageLinkLayout(pageindex) {
				return `
				<!-- dotitem -->
				<li class="dotitem">
	
					<!-- pagelink -->
					<a class="pagelink" href="javascript:void(0)" data-pageindex="${pageindex}"></a>
					<!-- /pagelink -->
	
				</li>
				<!-- /dotitem -->`;
			}
	
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
	
	// Load archive posts. 
	function loadArchivePosts() {

		// Check if loading archive posts. 
		if(!archive.pagesdestination) {
			// console.log('\tBypass archive posts...');

			// Mark block as not present. 
			archive.blockpresent = false;
			return;
		}
		console.log('Loading archive posts...');
	
		// Get list of archive projects. 
		let archiveProjects = getArchiveProjects();
		// console.log('Archive projects:', archiveProjects.length, archiveProjects);
	
		// Load archive posts. 
		loadPosts(archive,archiveProjects, false, false);
	
		/***/

		// Get archive projects. 
		function getArchiveProjects() {

			// Return list of projects, sorted by project id. 
			return projectData.sort(sortProjectsById);
		}
	}
	
	// Load category posts. 
	function loadCategoryPosts() {

		// Check if loading category posts. 
		if(!category.pagesdestination) {
			// console.log('\tBypass category posts...');

			// Mark block as not present. 
			category.blockpresent = false;
			return;
		}
		console.log('Loading category posts...');
	
		// Get list of projects for given category. 
		let categoryProjects = getCategoryProjects();
		// console.log('Category projects:', categoryProjects.length, categoryProjects);
	
		// Load category posts. 
		loadPosts(category,categoryProjects, allowPreview, false);

		/***/

		// Get category projects. 
		function getCategoryProjects() {

			// Get list of project ids for category. 
			let categoryprojectids = projectcategory.groupitemsidlist;

			// Get list of projects for category. 
			let categoryprojects = categoryprojectids.map(getProjectById);

			// Return list of category projects, sorted by project id. 
			return categoryprojects.sort(sortProjectsById);
		}
	}
	
	// Load collection posts. 
	function loadCollectionPosts() {

		// Check if loading collection posts. 
		if(!collection.pagesdestination) {
			// console.log('\tBypass collection posts...');

			// Mark block as not present. 
			collection.blockpresent = false;
			return;
		}
		console.log('Loading collection posts...');
	
		// Get list of projects for given collection. 
		let collectionProjects = getCollectionProjects();
		// console.log('Collection projects:', collectionProjects.length, collectionProjects);
	
		// Load general posts. 
		loadPosts(collection,collectionProjects, allowPreview, false);

		/***/
	
		// Get collection projects. 
		function getCollectionProjects() {

			// Get list of project category ids for collection. 
			let collectioncategoryids = projectcollection.groupitemsidlist;

			// Get list of project categories for collection. 
			let collectioncategories = collectioncategoryids.map(getProjectCategoryById);

			// Get matrix of project ids for collection. 
			let collectionprojectidsmatrix = collectioncategories.map( category => category.groupitemsidlist );

			// Get list of project ids for collection. 
			let collectionprojectids = flattenMatrixToList(collectionprojectidsmatrix);

			// Get list of collection projects. 
			let collectionprojects = collectionprojectids.map(getProjectById);

			// Return list of collection projects, sorted by project id. 
			return collectionprojects.sort(sortProjectsById);
		}
	}

	// Load featured posts. 
	function loadFeaturedPosts() {

		// Check if loading featured posts. 
		// if(!featured.postsdestinationa || !featured.postsdestinationb) {
		if(!featured.pagesdestination) {
			// console.log('\tBypass featured posts...');

			// Mark block as not present. 
			featured.blockpresent = false;
			return;
		}
		console.log('Loading featured posts...');
	
		// Get list of featured projects. 
		let featuredProjects = getFeaturedProjects();
		// console.log('Featured projects:', featuredProjects.length, featuredProjects);
	
		// Load general posts. 
		loadPosts(featured,featuredProjects, allowPreview, true);

		/***/

		// Get featured projects. 
		function getFeaturedProjects() {

			// Get list of all featured project ids. 
			let featuredprojectids = featuredProjectIds['a'].concat( featuredProjectIds['b'] );

			// Get list of featured projects. 
			let featuredprojects = featuredprojectids.map(getProjectById);

			// Return list of featured projects. 
			return featuredprojects;
		}

		// Get list of featured projects. 
		// let featuredProjectsA = ( featuredProjectIds['a'] ).map(getProjectById);
		// let featuredProjectsB = ( featuredProjectIds['b'] ).map(getProjectById);
		// console.log('Featured projects A:', featuredProjectsA.length, featuredProjectIds['a'], featuredProjectsA);
		// console.log('Featured projects B:', featuredProjectsB.length, featuredProjectIds['b'], featuredProjectsB);

		// Add layout for featured posts to blog section. 
		// featured.postsdestinationa.innerHTML = createBlogLayout(featuredProjectsA, allowPreview, false);
		// featured.postsdestinationb.innerHTML = createBlogLayout(featuredProjectsB, allowPreview, false);
	}

	// Sort project items by project id. 
	function sortProjectsById(a,b) {
		// console.log('Sorting posts...');
	
		// Handle equal case. 
		if(a.projectid == b.projectid) return 0;
	
		// Handle lesser case. 
		else if(a.projectid < b.projectid) return -1;
	
		// Handle greater case. 
		else if(a.projectid > b.projectid) return 1;
	
		// Handle questionable case. 
		else {
			console.warn('Questionable comparison', a.projectid,b.projectid, a,b);
			return 0;
		}
	}

	// Flatten 3d data matrix into 2d data list. 
	function flattenMatrixToList(datamatrix) {
	
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

// Set state of results block. 
function setResultState(state) {

	// Set state of null label in results block. 
	setEmptyResult(!state);

	/****/

	// Set state of null label in results block. 
	function setEmptyResult(state) {
	
		// Disregard if empty label gone. 
		if(typeof nullresultslabel == 'undefined') return;
	
		// Get block of posts. 
		const postblock = document.querySelector('div#container section.blog div.grid div.body div.posts');
		// console.log('Posts block:',postblock);
	
		// Label block as empty. 
		if(state) {
			postblock.classList.add('empty');
			// nullresultslabel.classList.add('on');
		}
		// Label block as not empty. 
		else {
			postblock.classList.remove('empty');
			// nullresultslabel.classList.remove('on');
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
