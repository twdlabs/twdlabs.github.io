


// Get hero section. 
const herosection = document.querySelector('div#container section.hero');
// Get grid in hero section. 
const herosectiongrid = document.querySelector('div#container section.hero main.grid');
// Get destination for title in hero section. 
const titledestination = document.querySelector('div#container section.hero main.grid h1.posttitle');
// Get destination for author in hero section. 
const authordestination = document.querySelector('div#container section.hero main.grid h2.postauthor');
// Get destination for author name in hero section. 
const authornamedestination = document.querySelector('div#container section.hero main.grid h2.postauthor span.caption');

// Get destination for date in post section. 
const datedestination = document.querySelector('div#container section.post aside.meta span.date');
// Get destination for post in post section. 
const postdestination = document.querySelector('div#container section.post article.post');

// Get destination for other post in other post section. 
const otherpostsdestination = document.querySelector('div#container section.otherposts main.grid');


/*****/


// Create time calculator. 
const t = new TimeCalculator();


/*****/


// Load blog post. 
loadBlogPost();

// Load other blog posts. 
loadOtherBlogPosts();


/*****/


// Load blog post. 
function loadBlogPost() {
	
	// Get post data for selected post. 
	const selectedPostData = getPostById(selectedPostId);
	console.log('Selected post data:',selectedPostData);

	// Display full post on page. 
	postdestination.innerHTML = createFullPostLayout(selectedPostData);
}

// Load other blog posts. 
function loadOtherBlogPosts() {

	// Intialize result. 
	let result = '';

	// Go thru all posts. 
	for(let post of blogdata) {
		// Add layout for given post. 
		result += createBlogPostLayout(post);
	}

	// Add result to page. 
	otherpostsdestination.innerHTML = result;
}
