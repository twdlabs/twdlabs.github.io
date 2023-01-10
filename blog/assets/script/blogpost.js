


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

// Get destination for author bio in author section. 
const authorbiodestination = document.querySelector('div#container section.author main.grid');

// Get destination for other post in other post section. 
const otherpostsdestination = document.querySelector('div#container section.otherposts main.grid ul.postlist');


/*****/


// Create time calculator. 
const t = new TimeCalculator();


/*****/


// Load blog post. 
loadBlogPost();

// Load blog author. 
loadBlogAuthor();

// Load other blog posts. 
loadOtherBlogPosts();


/*****/


// Load blog post. 
function loadBlogPost() {

	// Display full post on page. 
	postdestination.innerHTML = createFullPostLayout(selectedPostData);
}

// Load blog author. 
function loadBlogAuthor() {
	
	// Get user data for author of selected post. 
	const postauthor = getUserById(selectedPostData.authorid);
	// console.log('Selected post author:',postauthor);

	// Display author post on page. 
	authorbiodestination.innerHTML = createAuthorLayout(postauthor);

	/****/

	// Create layout for author of selected post. 
	function createAuthorLayout(user) {
		console.log('Author:',user);

		// 
		return `
		<!-- name -->
		<h1 class="name">${ user.fullname }</h1>
		<!-- /name -->

		<!-- briefbio -->
		<p class="briefbio">${ user.bio }</p>
		<!-- /briefbio -->

		<!-- avatar -->
		<img class="avatar" src="${ `../../user/${user.avatarurl}` }">
		<!-- /avatar -->`;
	}
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

	// // 
	// let currentUserId = 'aventura';
	// let user = getUserById(currentUserId);
	// if(user.admin) bloglistdestination.classList.add('admincontrols');
	// else bloglistdestination.classList.remove('admincontrols');
}
