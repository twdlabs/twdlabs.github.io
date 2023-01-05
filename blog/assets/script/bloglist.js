


// Define character limit for post excerpts. 
const excerptcharlimit = 150;


// Get destination for list of posts. 
const listdestination = document.querySelector('div#container section.blog main.grid');


/*****/


// Load list of blog posts. 
loadBlogList();


/*****/


// Load list of blog posts. 
function loadBlogList() {

	// Initialize result. 
	let result = '';

	// Sort list of blog posts. 
	blogdata.sort( (a,b) => b.timeposted-a.timeposted );
	
	// Go thru all posts. 
	for(let post of blogdata) {

		// Get author. 
		let author = getUserById(post.authorid);
		console.log(author,post.authorid,userDataList);
		
		// Compile post item
		result += `
		<!-- item -->
		<div class="item">
	
			<!-- artlink -->
			<a class="artlink" href="./post/?id=${ post.postid }">
	
				<!-- preview -->
				<img class="preview" src="${ post.picurl }">
				<!-- /preview -->

			</a>
			<!-- /artlink -->
	
			<!-- content -->
			<div class="content">
	
				<!-- title -->
				<h1 class="title">

					<!-- titlelink -->
					<a class="titlelink" href="./post/?id=${ post.postid }">${ post.title }</a>
					<!-- /titlelink -->

				</h1>
				<!-- /title -->

				<!-- bar -->
				<div class="bar">

					<!-- userbadge -->
					<a class="userbadge" href="javascript:void(0)">
	
						<!-- avatar -->
						<img class="avatar" src="${ author ? `../user/${author.avatarurl}` : '' }" title="${ author ? author.userid : '' }">
						<!-- /avatar -->
	
						<!-- username -->
						<span class="username">${ author ? author.fullname : '' }</span>
						<!-- /username -->
	
					</a>
					<!-- /userbadge -->
	
					<!-- timestamp -->
					<div class="timestamp">${ formatTimeSince(post.timeposted) }</div>
					<!-- /timestamp -->

				</div>
				<!-- /bar -->
	
				<!-- textcopy -->
				<p class="textcopy">${ getExcerpt(post.content) }</p>
				<!-- /textcopy -->

				<!-- ctabox -->
				<div class="ctabox">
	
					<!-- readbtn -->
					<a class="readbtn" href="./post/?id=${ post.postid }">Read More</a>
					<!-- /readbtn -->

				</div>
				<!-- /ctabox -->
				
			</div>
			<!-- /content -->
	
		</div>
		<!-- /item -->`;
	}
	
	// Add result to page. 
	listdestination.innerHTML = result;

	//

	// Format time elapsed since given date/time. 
	function formatTimeSince(dt) {

		// Create new time calculator. 
		let t = new TimeCalculator();

		// 
		return t.formatTimeSince(dt);
		// return new Date(dt);
	}

	// Get excerpt of post content. 
	function getExcerpt(paragraphList) {

		// Get combined content. 
		let postcontent = paragraphList.join(' ');

		// Handle short post content. 
		if(postcontent.length<excerptcharlimit) return postcontent;

		// Handle long post content. 
		else return postcontent.substr(0,excerptcharlimit) + '...';
	}
}
