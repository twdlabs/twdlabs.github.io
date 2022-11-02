


// Define number of posts per preview. 
const numPreviewPosts = 2;


/*****/


// Show preview of blog posts. 
showBlogPosts();

// Show preview of event posts. 
showEventPosts();


/*****/


// Show blog posts. 
function showBlogPosts() {

	// Get destination on page. 
	let blogpostsDestination = 'section.preview div#blogposts ul.postlist';

	// Show preview posts. 
	showPostPreviews(blogPostData, numPreviewPosts, blogpostsDestination);
}

// Show event posts. 
function showEventPosts() {

	// Get destination on page. 
	let eventsDestination = 'section.preview div#events ul.postlist';

	// Show preview posts. 
	showPostPreviews(eventData, numPreviewPosts, eventsDestination);
}

// Show preview of posts. 
function showPostPreviews(postData, numPosts, destination) {
	
	// Use all posts if less posts than preview amount. 
	if(postData.length < numPosts) {
		numPosts = postData.length;
	}

	// Initialize list of posts. 
	let result = '';

	// Create post elements. 
	for (let i=0 ; i<numPosts ; i++) {

		// Get post item. 
		let post = postData[i];

		// Get post excerpt. 
		let postexcerpt = getPostExcerpt(post.postcontent);
		let d = post.posttime.date;
		
		// Append post element. 
		result += `
		<!-- post -->
		<li class="post">
			
			<!-- postdate -->
			<div class="postdate">
				<!-- date -->
				<div class="date">
					<span class="month">${monthNames[post.posttime.month-1]}</span>
					<span class="date">${(d<10) ? '0'+d : d }</span>
				</div>
				<!-- /date -->
			</div>
			<!-- /postdate -->
			
			<!-- postcontent -->
			<div class="postcontent">
			
				<!-- postname -->
				<h4 class="postname">
					<a href="javascript:void(0)">${post.posttitle}</a>
				</h4>
				<!-- /postname -->
				
				<!-- postexcerpt -->
				<p class="postexcerpt">
					
					<!-- excerpt -->
					<span class="excerpt">${postexcerpt}</span>
					<!-- /excerpt -->
					
					<!-- readlink -->
					<a href="javascript:void(0)" class="readlink">Learn More</a>
					<!-- /readlink -->
					
				</p>
				<!-- /postexcerpt -->
				
			</div>
			<!-- /postcontent -->
		
		</li>
		<!-- /post -->`;

		/*****/

		// Get post excerpt. 
		function getPostExcerpt(content) {
			
			// Set excerpt word count. 
			let excerptWordLimit = 12;

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

	// Add post elements to page. 
	document.querySelector(destination).innerHTML = result;
}
