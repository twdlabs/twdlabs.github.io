


// Define number of posts per preview. 
const numPreviewPosts = 3;


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
	showPostPreviews(blogPostData, numPreviewPosts, blogpostsDestination, 'blog' );
}

// Show event posts. 
function showEventPosts() {

	// Get destination on page. 
	let eventsDestination = 'section.preview div#events ul.postlist';

	// Show preview posts. 
	showPostPreviews(eventData, numPreviewPosts, eventsDestination, 'events');
}

// Show preview of posts. 
function showPostPreviews(postData, numPosts, destination,foldername) {
	console.log('postData:',postData);
	console.log('numPosts:',numPosts);
	console.log('destination:',destination);
	
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

		// Get post type. 
		let type = post.posttype;

		// Get post id. 
		let id = post[ `${type}id` ];
		console.log(`${type} id:`, id );

		// Get post url. 
		let url = `${foldername}/post/?id=${id}`

		// Get post excerpt. 
		let postexcerpt = getPostExcerpt(post.content);

		// Get date of post. 
		let datetime = new Date( post['postedtime'] );
		let m = monthNames[ datetime.getMonth() ];
		let d = datetime.getDate();
		
		// Append post element. 
		result += `
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

		/*****/

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

	// Add post elements to page. 
	document.querySelector(destination).innerHTML = result;
}
