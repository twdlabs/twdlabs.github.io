

// Load images and tags. 
loadItUp();

/*****/

// Load everything. 
function loadItUp() {

	// Load images and tags. 
	loadContent();

	// Handle events. 
	handleEvents();

	/*****/

	// Load images and tags. 
	function loadContent() {

		// Load all images. 
		loadAllImages();

		// Load all tags. 
		loadTags();

		/*****/

		// Load all tags. 
		function loadTags() {

			// Collect all image tags. 
			collectTags();

			// Define elements for tags. 
			let tizags = `
				<!-- tag -->
				<div class="tag item" onclick="loadAllImages()">
					<span class="caption">All</span>
				</div>
				<!-- /tag -->`;
			for(let tag of tagCollection) {
				tizags += `
				<!-- tag -->
				<div class="real tag item">
					<span class="caption">${tag}</span>
				</div>
				<!-- /tag -->`;
			}

			// Add tags to page. 
			document.querySelector('section#tags main').innerHTML = tizags;

			/***/

			// Collect all image tags. 
			
			function collectTags() {
				// Get tags from all images. 
				for(let img of imageData) {
					for(tag of img.taglist) {
						
						// Check if tag already collected. 
						let alreadyInThere = tagCollection.includes(tag);

						// Collect tag if not already collected. 
						if(!alreadyInThere) tagCollection.push(tag);
					}
				}
				
				// Sort tags in alphabetical order. 
				tagCollection.sort();
			}
		}

		// Load all images. 
		function loadAllImages() {
		
			// Define elements for images. 
			let result = '';
			for(let id in imageData) {

				// Get image object. 
				let img = imageData[id]

				// Create element to represent image. 
				result += `
					<!-- image -->
					<div class="image item" data-id="${id}" style="background-image:url('thumbnail/${img.url}');"></div>
					<!-- /image -->`;
			}
		
			// Add images to page. 
			document.querySelector('section#gallery main').innerHTML = result;
		}
	}

	// Handle events for images and tags. 
	function handleEvents() {

		// Activate tag clicks. 
		let tags = document.querySelectorAll('section#tags main div.tag.real');
		for(let tag of tags) {
			tag.addEventListener('click', selectTag);
		}
	
		// Activate image clicks. 
		let imgs = document.querySelectorAll('section#gallery main div.image');
		for(let img of imgs) {
			img.addEventListener('click', selectImage);
		}
	}
}


// Filter images that match selected tag. 
function selectTag(event) {
	console.log(event.currentTarget);

	// Get tag value. 
	let tag = event.currentTarget.innerText;

	// Initialize list of matching image urls. 
	let matchedUrls = [];

	// Find matching images andsave urls. 
	for(let img of imageData) {
		// console.log(img);

		// Check if image matches tag. 
		let weGotAMatch = img.taglist.includes(tag);

		// Add url to list if matched. 
		if(weGotAMatch) matchedUrls.push(img.url);
	}
	console.log('matchedUrls',matchedUrls);

	// Load matched images. 
	loadMatchedImages();

	/*****/

	// Load matched images. 
	function loadMatchedImages() {
		
		// Define elements for matched images. 
		let result = '';
		for(let url of matchedUrls) {
			result += `
				<!-- image -->
				<div class="image item" style="background-image:url('thumbnail/${url}');"></div>
				<!-- /image -->`;
		}

		// Add images to page. 
		document.querySelector('section#gallery main').innerHTML = result;
	}
}

// Show popup for selected image. 
function selectImage(event) {
	console.log('selectImage', event.currentTarget);

	// Get id of selected image. 
	let selectedId = event.currentTarget.getAttribute('data-id');
	console.log('selectedId', selectedId);

	// Open page overlay, displaying selected image. 
	openPicOverlay( imageData[selectedId] );
}

// Open picture overlay. 
function openPicOverlay(imgObj) {
	console.log('imgObj', imgObj);

	// Add selected image to overlay. 
	document.querySelector('section#overlay main.main div.content').innerHTML = `<img src="pic/${imgObj.url}">`;

	// Create string representation for tags of selected image. 
	let tizags = '';
	for(let i in imgObj.taglist) {

		// Get tag. 
		let t = imgObj.taglist[i];

		// Add tag to string representation. 
		if(i==0) tizags += t;
		else tizags += `, ${t}`;
	}
	// Add string representation of tags to overlay. 
	document.querySelector('section#overlay main.main div.head div.title').innerHTML = `Tags: ${tizags}`;

	// Show overlay on page. 
	document.getElementById('overlay').classList.add('active');
}

// Close picture overlay. 
function closePicOverlay() {

	// Hide overlay from page. 
	document.getElementById('overlay').classList.remove('active');
}

