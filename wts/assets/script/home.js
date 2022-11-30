


// Define number of posts per preview. 
const numPreviewPosts = 3;

// Set excerpt word count. 
const excerptWordLimit = 18;
// const excerptWordLimit = 55;	// default excerpt length in WordPress


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
		// console.log('post:',post);
	
		// Check for valid post. 
		if(!post) {
			console.warn('Invalid post:',post);
			return '';
		}
	
		// Get post id. 
		let type = post.posttype;
		// console.log('\ttype:',type);
		let id = post[ `${type}id` ];
		// console.log(`\t${type} id:`, id );

		// Get post url. 
		let url = `${foldername}/post/?id=${id}`;

		// Get date of post. 
		let datetime = new Date( (type=='event') ? (post['eventtime']) : (post['postedtime']) );
		// let datetime = (type=='event') ? new Date( post['eventtime'] ) : new Date( post['postedtime'] );
		// console.log('\tdatetime:',datetime);
		let y = datetime.getFullYear();
		let m = monthNames[ datetime.getMonth() ];
		let d = datetime.getDate();

		// Get excerpt from post content. 
		let postexcerpt = getExcerpt(post.content);

		// 
		return `
		<!-- postitem -->
		<li class="postitem">

			<!-- post -->
			<article class="post">
			
				<!-- postdate -->
				<div class="postdate">

					<!-- date -->
					<div class="date">
		
						<!-- year -->
						<span class="year">${y}</span>
						<!-- /year -->

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

						<!-- readlink -->
						<a class="readlink" href="${url}">${post.title}</a>
						<!-- /readlink -->
						
					</h4>
					<!-- /postname -->
					
					<!-- postexcerpt -->
					<p class="postexcerpt">
						
						<!-- excerpt -->
						<span class="excerpt">${postexcerpt}</span>
						<!-- /excerpt -->
						
						<!-- readlink -->
						<a class="readlink" href="${url}">Learn More</a>
						<!-- /readlink -->
						
					</p>
					<!-- /postexcerpt -->
					
				</div>
				<!-- /postcontent -->
				
			</article>
			<!-- /post -->
		
		</li>
		<!-- /postitem -->`;

		/***/

		// Get excerpt from post content. 
		function getExcerpt(content) {

			// Define word limit for current excerpt. 
			let currentWordLimit = excerptWordLimit
	
			// Get individual words of post content. 
			let wordsFromPostContent = content.split(' ');
			// Get number of words in post content. 
			let numWordsInContent = wordsFromPostContent.length;
	
			// Check for post content overflow. 
			let postContentOverflow = false;
			if(numWordsInContent<currentWordLimit) {
				// Use all content if less words than excerpt limit. 
				currentWordLimit = numWordsInContent;
				postContentOverflow = false;
			}
			else {
				postContentOverflow = true;
			}
	
			// Create post content excerpt. 
			let excerpt = '';
			for (let j=0 ; j<currentWordLimit ; j++) {
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
	const blogDestination = document.querySelector('section.preview div#blog ul.postlist');

	// Show preview posts. 
	loadPreviewPosts(blogPostData, blogDestination, 'blog' );
}

// Load event posts. 
function loadEventPosts() {

	// Get destination on page. 
	const eventsDestination = document.querySelector('section.preview div#events ul.postlist');

	// Show preview posts. 
	loadPreviewPosts(eventData, eventsDestination, 'events');
}
