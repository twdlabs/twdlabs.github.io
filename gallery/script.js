

// Load images and tags. 
loadItUp();

/*****/

// Load images and tags. 
function loadItUp() {

	// Load all images. 
	loadImages();

	// Load all tags. 
	loadTags();

	/****/

	// Load all images. 
	function loadImages() {

		// Define elements for images. 
		let result = '';
		for(let pic of images) {
			result += `
				<!-- image -->
				<div class="image item" style="background-image:url('thumbnail/${pic.url}');"></div>
				<!-- /image -->`;
		}

		// Add images to page. 
		document.querySelector('section#gallery main').innerHTML = result;
	}

	// Load all tags. 
	function loadTags() {

		// Collect all image tags. 
		collectTags();

		// Define elements for tags. 
		let tizags = `
			<!-- tag -->
			<div class="tag item">All</div>
			<!-- /tag -->`;
		for(let tag of tagCollection) {
			tizags += `
			<!-- tag -->
			<div class="tag item">${tag}</div>
			<!-- /tag -->`;
		}

		// Add tags to page. 
		document.querySelector('section#tags main').innerHTML = tizags;

		/***/

		// Get tags from all images. 
		function collectTags() {
			for(let pic of images) {
				for(tag of pic.tags) {
					
					// Check if tag already collected. 
					let alreadyInThere = tagCollection.includes(tag);

					// Collect tag if not already collected. 
					if(!alreadyInThere) tagCollection.push(tag);
				}
			}
		}
	}
}
