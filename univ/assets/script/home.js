


// Define number of posts per preview. 
const numPreviewPosts = 3;


/*****/


// Load preview of blog posts. 
loadBlogPosts();

// Load preview of event posts. 
loadEventPosts();

// Show current list of posts. 
showPostList();


/*****/


// Load preview of posts. 
function loadPreviewPosts(postData, destination, foldername) {
	// console.log('postData:',postData);
	// console.log('destination: ',destination);
	// console.log('foldername: ',foldername);

	// Initialize list of posts. 
	let result = '';

	// Create post elements. 
	for (let i=0 ; i<numPreviewPosts ; i++) {

		// Get post item. 
		let postitem = postData[i];
		if(!postitem) return;
		
		// Append post element. 
		result += createPreviewPost(postitem);
	}

	// Add post elements to page. 
	destination.innerHTML = result;

	/****/

	// Create layout for preview post. 
	function createPreviewPost(post) {
	
		// Get post id. 
		let type = post.posttype;
		// console.log('\ttype:',type);
		let id = post[ `${type}id` ];
		// console.log(`\t${type} id:`, id );

		// Get post url. 
		let url = `${foldername}/post/?id=${id}`;

		// Get post excerpt. 
		let postexcerpt = getPostExcerpt(post.content);

		// Get date of post. 
		let datetime = (type=='event') ? new Date( post['eventtime'] ) : new Date( post['postedtime'] );
		// console.log('\tdatetime:',datetime);
		let m = monthNames[ datetime.getMonth() ];
		let d = datetime.getDate();

		// 
		return `
		<!-- post -->
		<li class="post">
			
			<!-- postdate -->
			<div class="postdate">

				<!-- date -->
				<div class="date">

					<!-- month -->
					<span class="month">${m}</span>
					<!-- /month -->

					<!-- date -->
					<span class="date">${ (d<10) ? `0${d}` : d }</span>
					<!-- /date -->

				</div>
				<!-- /date -->
				
			</div>
			<!-- /postdate -->
			
			<!-- postcontent -->
			<div class="postcontent">
			
				<!-- postname -->
				<h4 class="postname">
					<a href="${url}">${post.title}</a>
				</h4>
				<!-- /postname -->
				
				<!-- postexcerpt -->
				<p class="postexcerpt">
					
					<!-- excerpt -->
					<span class="excerpt">${postexcerpt}</span>
					<!-- /excerpt -->
					
					<!-- readlink -->
					<a href="${url}" class="readlink">Learn More</a>
					<!-- /readlink -->
					
				</p>
				<!-- /postexcerpt -->
				
			</div>
			<!-- /postcontent -->
		
		</li>
		<!-- /post -->`;

		/***/

		// Get post excerpt. 
		function getPostExcerpt(content) {
			
			// Set excerpt word count. 
			const excerptWordLimit = 18;
			// const excerptWordLimit = 55;	// default excerpt length in WordPress
	
			// Get individual words of post content. 
			let wordsFromPostContent = content.split(' ');
			// Get number of words in post content. 
			let numWordsInContent = wordsFromPostContent.length;
	
			// Check for post content overflow. 
			let postContentOverflow = false;
			if(numWordsInContent<excerptWordLimit) {
				// Use all content if less words than excerpt limit. 
				excerptWordLimit = numWordsInContent;
				postContentOverflow = false;
			}
			else {
				postContentOverflow = true;
			}
	
			// Create post content excerpt. 
			let excerpt = '';
			for (let j=0 ; j<excerptWordLimit ; j++) {
				// 
				excerpt += wordsFromPostContent[j] + ' ';
			}
			// Add ellipsis if some content is ommitted. 
			if(postContentOverflow) excerpt += '...';
	
			// 
			return excerpt;
		}
	}
}

// Load blog posts. 
function loadBlogPosts() {

	// Get destination on page. 
	const blogpostsDestination = document.querySelector('section.preview div#blogposts ul.postlist');

	// Show preview posts. 
	loadPreviewPosts(blogPostData, blogpostsDestination, 'blog' );
}

// Load event posts. 
function loadEventPosts() {

	// Get destination on page. 
	const eventsDestination = document.querySelector('section.preview div#events ul.postlist');

	// Show preview posts. 
	loadPreviewPosts(eventData, eventsDestination, 'events');
}
