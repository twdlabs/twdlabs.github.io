


// Get components of featured section. 
const featuredsection = {
	block:document.querySelector('div#container section.blog div.grid div.body div.posts#featured'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.pagelist'),
	postsdestinationa:document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.pagelist li.postpage ul.postlist.a'),
	postsdestinationb:document.querySelector('div#container section.blog div.grid div.body div.posts#featured ul.pagelist li.postpage ul.postlist.b'),
	sectionpresent:true,
};
// console.log('Featured section:',featuredsection);


// Get components of archive section. 
const archivesection = {
	block:document.querySelector('div#container section.blog div.grid div.body div.posts#archive'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#archive ul.pagelist'),
	sectionpresent:true,
};
// console.log('Archive section:',archivesection);


// Get components of category section. 
const categorysection = {
	block:document.querySelector('div#container section.blog div.grid div.body div.posts#category'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#category ul.pagelist'),
	sectionpresent:true,
};
// console.log('Category section:',categorysection);


// Get components of collection section. 
const collectionsection = {
	block:document.querySelector('div#container section.blog div.grid div.body div.posts#collection'),
	pagesdestination:document.querySelector('div#container section.blog div.grid div.body div.posts#collection ul.pagelist'),
	sectionpresent:true,
};
// console.log('Collection section:',collectionsection);


// Initialize data for currently selected filter items. 
let selectedfilterdata = {
	// xyz:[],
	tagfilters:[],
	searchfilters:[],
};
// console.log('Selected filter data:',selectedfilterdata);


// Get indicator label for empty set of results. 
const emptyresultslabel = document.querySelector('div#container section.blog div.grid div.body div.posts div.emptyresultslabel');
// console.log('Null results label:',emptyresultslabel);


/*****/


// Set flag for memory load (previews always on by default). 
let permanentPreview = true;
// permanentPreview = false;

// Define if pagination on. 
let paginationOn = true;


/*****/


// Load blog posts. 
loadBlog();


/*****/


// Load blog posts (given selected tag filter items). 
function loadBlog() {
	console.log('Loading blog...');
	// console.log('\tSelected filter data:', selectedfilterdata );

	// Load featured posts. 
	loadFeaturedPosts();

	// Load collection posts. 
	loadCollectionPosts();

	// Load category posts. 
	loadCategoryPosts();

	// Load archive posts. 
	loadArchivePosts();

	/****/

	// Load blog layout for specified group of projects into specified section. 
	function loadBlogLayout(section,rawpostlist,previewsOn,doMinimalPage) {
		// console.log('\t\tPreviews on:',previewsOn);

		// Filter list of project posts (if filter criteria present). 
		filteredpostlist = rawpostlist.filter(checkForFilterPass);
		console.log('\t',rawpostlist.length,'raw posts',rawpostlist);
		console.log('\t',filteredpostlist.length,'filtered posts',filteredpostlist);

		// Display layout for pages of blog posts. 
		loadBlogPages();

		// Load dot panel in page navigator. 
		loadBlogPageNavigator();

		// Display currently selected page. 
		displaySelectedPage();

		// Set state of results block. 
		setResultState(filteredpostlist.length);

		/***/

		// TODO: Check if given project post passes selected filter criteria. 
		function checkForFilterPass(projectpostitem) {
			// console.log(`\tcheckForFilterPass`,projectpostitem);

			// Check for any selected tag filters. 
			let notagfilterselected = selectedfilterdata['tagfilters'].length==0;
			// Check for any selected search filters. 
			let nosearchfilterselected = selectedfilterdata['searchfilters']/* ['filteritemlist'] */.length==0;
			// Pass filter by default if no filter items selected. 
			if(notagfilterselected && nosearchfilterselected) return true;

			let passrequiresallfiltercriteria = true;
			passrequiresallfiltercriteria = false;

			// Check post for all matching criteria. 
			if(passrequiresallfiltercriteria) {
				return checkFilterPassAll();
			}
			// Check post for single matching criteria. 
			else {
				return checkFilterPassAny();
			}

			/**/

			// Check if post passes any given filter criteria. 
			function checkFilterPassAny() {

				// Go thru each selected tag filter item. 
				for(let tagfilteritem of selectedfilterdata['tagfilters']) {

					// Check if project post passes current filter criteria. 
					let passedcriteria = checkFilterItem(tagfilteritem);

					// Return true if any match found. 
					if(passedcriteria) return true;
				}

				// Go thru each selected search query item. 
				for(let searchqueryitem of selectedfilterdata['searchfilters']) {

					// Go thru each selected search filter item. 
					for(let searchfilteritem of searchqueryitem['filteritemlist']) {

						// Check if project post passes current filter criteria. 
						let passedcriteria = checkFilterItem(searchfilteritem);

						// Return true if any match found. 
						if(passedcriteria) return true;
					}
				}

				// Return false if no match found. 
				return false;
			}

			// Check if post passes all given filter criteria. 
			function checkFilterPassAll() {

				// Go thru each selected tag filter item. 
				for(let tagfilteritem of selectedfilterdata['tagfilters']) {

					// Check if project post passes current filter criteria. 
					let passedcriteria = checkFilterItem(tagfilteritem);

					// Return false if any mismatch found. 
					if(!passedcriteria) return false;
				}

				// Go thru each selected search query item. 
				for(let searchqueryitem of selectedfilterdata['searchfilters']) {

					// Go thru each selected search filter item. 
					for(let searchfilteritem of searchqueryitem['filteritemlist']) {

						// Check if project post passes current filter criteria. 
						let passedcriteria = checkFilterItem(searchqueryitem);

						// Return false if any mismatch found. 
						if(!passedcriteria) return false;
					}
				}

				// Return true if no mismatch found. 
				return true;
			}

			// Check if project post passes given filter item. 
			function checkFilterItem(filteritem) {

				// Get type id of filter item. 
				let filteritemtypeid = filteritem.typeid;
				// console.log('\tFilter item type id:', filteritemtypeid, projectpostitem[filteritemtypeid] );

				// Get value of input filter item. 
				let filteritemvalueid = filteritem.valueid;
				// console.log('\tFilter item value id:', filteritemvalueid);

				// Check for match btwn given project and current filter item. 
				// return (projectpostitem[filteritemtypeid] == filteritemvalueid);
				return ( `${ projectpostitem[filteritemtypeid] }`.toLowerCase() ).includes( filteritemvalueid.toLowerCase() );
			}
		}

		// Display layout for pages of posts in blog section. 
		function loadBlogPages() {

			// Initialize blog layout. 
			let bloglayout = '';

			// Create single-page layout (2d data list). 
			if(!paginationOn) {

				// Add page of posts. 
				bloglayout += createBlogPage(0,filteredpostlist);

				// Save page count. 
				pagecount = 1;
			}

			// Create multi-page layout (3d data matrix). 
			else {

				// Paginate post data into post matrix. 
				let postmatrix = paginateData(filteredpostlist,pagepostcapacity);
				// console.log('\t\tPaginated post matrix:',postmatrix);

				// Go thru each page in post matrix. 
				for(let pageindex in postmatrix) {

					// Get list of posts for currrent page. 
					let postlist = postmatrix[pageindex];

					// Add page of posts. 
					bloglayout += createBlogPage(pageindex,postlist,doMinimalPage);
				}

				// Save page count. 
				pagecount = postmatrix.length;
			}

			// Display blog layout. 
			section.pagesdestination.innerHTML = bloglayout;
			// return bloglayout;

			/**/

			// Create page for blog posts layout. 
			function createBlogPage(pageindex,pagepostlist,doMinimalPage) {

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
						listlayout += createBlogCard(post);
					}

					// Return list layout. 
					return listlayout;

					/**/

					// Create card for blog post. 
					function createBlogCard(post) {
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
		function loadBlogPageNavigator() {

			// Check if loading page navigator. 
			if(!dotpaneldestination) {
				console.warn('No page navigator present');
				return;
			}

			// Check if any matches found. 
			console.log('\t',pagecount,'pages of filtered posts'/* ,dotpaneldestination */);

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
			if(pagecount>1) section['block'].classList.add('multipage');

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
		archivesection.sectionpresent = !!(archivesection.pagesdestination);
		if(!archivesection.sectionpresent) {
			// console.log('\tBypass archive posts...');
			return;
		}
		// console.log('Loading archive posts...');

		// Get list of archive projects. 
		let archiveProjects = getArchiveProjects();
		// console.log('Archive projects:', archiveProjects.length, archiveProjects);

		// Load archive posts. 
		loadBlogLayout(archivesection,archiveProjects, false, false);

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
		categorysection.sectionpresent = !!(categorysection.pagesdestination);
		if(!categorysection.sectionpresent) {
			// console.log('\tBypass category posts...');
			return;
		}
		// console.log('Loading category posts...');

		// Get list of projects for given category. 
		let categoryProjects = getCategoryProjects();
		// console.log('Category projects:', categoryProjects.length, categoryProjects);

		// Load category posts. 
		loadBlogLayout(categorysection,categoryProjects, permanentPreview, false);

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
		collectionsection.sectionpresent = !!(collectionsection.pagesdestination);
		if(!collectionsection.sectionpresent) {
			// console.log('\tBypass collection posts...');
			return;
		}
		// console.log('Loading collection posts...');

		// Get list of projects for given collection. 
		let collectionProjects = getCollectionProjects();
		// console.log('Collection projects:', collectionProjects.length, collectionProjects);

		// Load general posts. 
		loadBlogLayout(collectionsection,collectionProjects, permanentPreview, false);

		/***/

		// Get collection projects. 
		function getCollectionProjects() {

			// Get list of project category ids for collection. 
			let collectioncategoryidslist = projectcollection.groupitemsidlist;

			// Get list of project categories for collection. 
			let collectioncategories = collectioncategoryidslist.map(getProjectCategoryById);

			// Get matrix of project ids for collection. 
			let collectionprojectidsmatrix = collectioncategories.map( category => category.groupitemsidlist );

			// Get list of project ids for collection. 
			let collectionprojectidslist = flattenMatrixToList(collectionprojectidsmatrix);

			// Get list of collection projects. 
			let collectionprojects = collectionprojectidslist.map(getProjectById);

			// Return list of collection projects, sorted by project id. 
			return collectionprojects.sort(sortProjectsById);
		}
	}

	// Load featured posts. 
	function loadFeaturedPosts() {

		// Check if loading featured posts. 
		featuredsection.sectionpresent = !!(featuredsection.pagesdestination);
		if(!featuredsection.sectionpresent) {
			// console.log('\tBypass featured posts...');
			return;
		}
		// console.log('Loading featured posts...');

		// Get list of featured projects. 
		let featuredProjects = getFeaturedProjects();
		// console.log('Featured projects:', featuredProjects.length, featuredProjects);

		// Load general posts. 
		loadBlogLayout(featuredsection,featuredProjects, permanentPreview, true);

		/***/

		// Get featured projects. 
		function getFeaturedProjects() {

			// Get list of all featured project ids. 
			let featuredprojectids = featuredProjectIds['all'];

			// Get list of featured projects. 
			let featuredprojects = featuredprojectids.map(getProjectById);

			// Return list of featured projects. 
			return featuredprojects;
		}
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
function setResultState(resultcount) {

	// Indicate if no matching results in results block. 
	setEmptyResult(!resultcount);

	/****/

	// Indicate if no matching results in results block. 
	function setEmptyResult(state) {

		// Disregard if empty results label not available. 
		if(typeof emptyresultslabel == 'undefined') return;

		// Get block for result posts. 
		const resultpostsblock = document.querySelector('div#container section.blog div.grid div.body div.posts');
		// console.log('Result posts block:',resultpostsblock);

		// Set state of null label in results block. 
		// Label block as empty. 
		if(state) {
			resultpostsblock.classList.add('empty');
			// emptyresultslabel.classList.add('on');
		}
		// Label block as not empty. 
		else {
			resultpostsblock.classList.remove('empty');
			// emptyresultslabel.classList.remove('on');
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