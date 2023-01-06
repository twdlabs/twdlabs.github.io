


// Get hero section. 
const herosection = document.querySelector('div#container section.hero');

// Get banner upload. 
const bannerUpload = document.querySelector('div#container section.hero main.grid input.bannerupload');

// Get title field. 
let titlefield = document.querySelector('div#container section.post main.grid input.title');

// Get content field. 
let contentfield = document.querySelector('div#container section.post main.grid textarea.content');


/*****/


// Load blog post. 
loadBlogPost();

// Activate banner upload. 
activateBannerUpload();


/*****/


// Load blog post. 
function loadBlogPost() {
	
	// Get post data for selected post. 
	const selectedPostData = getPostById(selectedPostId);

	// 
	if(!selectedPostData) {
		console.warn('Missing post data:',selectedPostData);
		return;
	}

	// 
	console.log('Selected post data:',selectedPostData);

	// 
	herosection.style.backgroundImage = `url('${ getRelativeUrl(selectedPostData.picurl) }')`;

	// 
	titlefield.value = selectedPostData.title;
	// 
	contentfield.value = (selectedPostData.content).join('\n ');
	// console.log((selectedPostData.content).join(' '));
}

// Activate banner upload. 
function activateBannerUpload() {

	// 
	// bannerUpload.addEventListener('input',saveNewBanner);
	bannerUpload.addEventListener('change',saveNewBanner);

	/****/

	// TODO: Save new banner to page and to database. 
	function saveNewBanner(event) {
		console.log(event.target, event.target.value,event.target.files);

		// 
		// herosection.style.backgroundImage = '';
	}
}
