


// Get destination for list of post items. 
const listbox = document.querySelector('div#container main#pagecontent section.archive ul.postlist');

// Get search parameters from current url. 
const urlparams = new URLSearchParams(window.location.search);
// console.log('Url search parameters:',urlparams);

// Define character limit for post excerpts. 
const excerptcharlimit = 180;
// const excerptcharlimit = 240;


/*****/


// Check for page parameter (default to page 1). 
const pagenumber = 1*urlparams.get('p') || 1;
// console.log('Archive page:',pagenumber);

// TODO: Use page number. 
// pagenumber;

// Load archive list of posts. 
loadArchivePage(archiveData);

// Show current article. 
showArticle();

// Show current list of posts. 
showPostList();
// setTimeout(showPostList,100);


/*****/


// Load page for archive of selected post type. 
function loadArchivePage(postlist) {

	// Get set name for page title. 
	// const pagetitle = defaultResults[pagekey].setname;

	// Get set list for list of posts. 
	// const postlist = defaultResults[pagekey].setlist;

	// Initialize result. 
	let result = '';

	// Accumulate post elements to result. 
	for(let post of postlist) {

		// Create post item. 
		result += createPreviewPost(post);
	}

	// Add to page: list of posts. 
	if(postlist) listbox.innerHTML = result;
	else listbox.innerHTML = '';

	/****/

	// Create preview post item. 
	function createPreviewPost(post) {
		// console.log('post:',post);
	
		// Check for valid post. 
		if(!post) {
			console.warn('Invalid post:',post);
			return '';
		}
	
		// Get title of post. 
		let title = (post.title) ? (post.title) : `[Untitled ${post.posttype}]`;
	
		// Get excerpt of post content. 
		let postexcerpt = (post.content) ? (post.content).slice(0,excerptcharlimit) : '';
	
		// Get remainder of post content. 
		// let postremainder = (post.content) ? (post.content).slice(excerptcharlimit) : '';
	
		// Get id of post. 
		let type = post.posttype;
		let id = post[`${type}id`];
		// console.log('id:',id);

		// Get post url. 
		let url = `post/?id=${id}`;
	
		// 
		// `
		// 		<!-- posted -->
		// 		<p class="posted">${ ( new Date(post.postedtime) ).toDateString() }</p>
		// 		<!-- /posted -->`;
		return `
		<!-- postitem -->
		<li class="postitem">
	
			<!-- post -->
			<article class="post">
				
				<!-- title -->
				<h2 class="title">
					<a href="${url}">${title}</a>
				</h2>
				<!-- /title -->
	
				<!-- content -->
				<p class="content">
	
					<!-- excerpt -->
					<span class="excerpt">${postexcerpt}</span>
					<!-- /excerpt -->
	
					<!-- readbtn -->
					<a class="readbtn" href="${url}">Read More</a>
					<!-- /readbtn -->
					
				</p>
				<!-- /content -->
	
			</article>
			<!-- /post -->
	
		</li>
		<!-- /postitem -->`;
	}
}
