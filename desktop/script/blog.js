


// Get blog destination. 
const blogDestination = document.querySelector('div#container section.blog div.grid ul.postlist');


/*****/


// Define number of posts. 
let numPosts = 60;
// numPosts = 25;
numPosts = 240;
numPosts = 480;


/*****/


// Load blog posts. 
loadBlog();


/*****/


// Load blog posts. 
function loadBlog() {

	// Initialize result. 
	let result = '';
	let n = 0;
	
	// Add project group to result. 
	for(let i in projectNames) {
		if(n>=numPosts) break;
		console.log(i);

		// 
		let foldername = projectNames[i]

		// Skip infinite recursion. 
		if(foldername=='desktop') continue;

		// Add blog card to result. 
		result += createBlogCard(foldername);
		n++;
	}
	
	// Add result to page. 
	blogDestination.innerHTML = result;
	// blogDestination.insertAdjacentHTML('beforeend',result);

	/****/

	// Create blog card. 
	function createBlogCard(foldername) {

		// 
		if(true) return `
		<!-- postcard -->
		<li class="postcard">

			<!-- preview -->
			<div class="preview">

				<!-- previewlink -->
				<a class="previewlink" href="../${foldername}/index.html" target="_blank"></a>
				<!-- /previewlink -->

			</div>
			<!-- /preview -->

			<!-- namelink -->
			<a class="namelink" href="../${foldername}/index.html" target="_blank">${foldername}</a>
			<!-- /namelink -->

		</li>
		<!-- /postcard -->`;

		// 
		return `
		<!-- postcard -->
		<li class="postcard">

			<!-- preview -->
			<div class="preview">

				<!-- preview -->
				<iframe class="preview x3" src="../${foldername}/index.html"></iframe>
				<!-- /preview -->

				<!-- previewlink -->
				<a class="previewlink" href="../${foldername}/index.html" target="_blank"></a>
				<!-- /previewlink -->

			</div>
			<!-- /preview -->

			<!-- namelink -->
			<a class="namelink" href="../${foldername}/index.html" target="_blank">${foldername}</a>
			<!-- /namelink -->

		</li>
		<!-- /postcard -->`;
	}
}
