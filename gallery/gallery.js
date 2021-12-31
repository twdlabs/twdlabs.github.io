

// Load images and tags. 
loadItUp();


/*****/


// Load everything. 
function loadItUp() {

	// Load all tags. 
	loadAllTags();

	// Load all images. 
	loadAllImages();

	/*****/

	// Load all tags. 
	function loadAllTags() {

		// Save all image tags. 
		getImageTags();

		// Define elements for all tag. 
		let result = '';
		
		// Define elements for regular tags. 
		for(let tag of allTags) {
			result += `
			<!-- tag -->
			<div class="real tag item" data-value="${tag}">
				<span class="caption">${tag}</span>
			</div>
			<!-- /tag -->`;
		}

		// Add tag elements to page. 
		document.querySelector('section#tags main').innerHTML = result;

		// Activate tag clicks. 
		let tags = document.querySelectorAll('section#tags main div.tag.real');
		for(let tag of tags) {
			tag.addEventListener('click', selectTag);
		}

		/*****/

		// Save all image tags. 
		function getImageTags() {

			// Get tags from all images. 
			for(let img of imageData) {
				for(tag of img.taglist) {
					
					// Check if tag already collected. 
					let alreadyInThere = allTags.includes(tag);

					// Get tag if not already collected. 
					if(!alreadyInThere) allTags.push(tag);
				}
			}
			
			// Sort tags in alphabetical order. 
			allTags.sort();
		}
	}

	// Load all images in gallery. 
	function loadAllImages() {
	
		// Define elements for image gallery. 
		let result = '';
		for(let index in imageData) {

			// Create element to represent image item. 
			result += createImage(index);
		}
	
		// Add images to gallery. 
		document.querySelector('section#gallery main').innerHTML = result;
	
		// Activate image clicks in gallery. 
		activateImageClicks();

		// Activate heart buttons in gallery. 
		activateGalleryLikeBtns();

		/*****/

		// Create image element. 
		function createImage(index) {
			// console.log(index,'liked:',likedImageIds.includes(1*index));
			
			let liked = likedImageIds.includes(1*index);

			// Get image object. 
			let img = imageData[index];
			
			return `
			<!-- item -->
			<div class="item${ (liked)?(' liked'):('') }" data-id="${ index }">

				<!-- image -->
				<div class="image" style="background-image:url('thumbnail/${ img.url }');"></div>
				<!-- /image -->

				<!-- panel -->
				<div class="panel">

					<!-- user -->
					<div class="user">

						<!-- avatar -->
						<div class="avatar"></div>
						<!-- /avatar -->
			
						<!-- details -->
						<div class="details">

							<!-- username -->
							<div class="username">${ 'TWDLabs' }</div>
							<!-- /username -->

							<!-- followercount -->
							<div class="followercount">${ '50k followers' }</div>
							<!-- /followercount -->
							
						</div>
						<!-- /details -->
						
					</div>
					<!-- /user -->

					<!-- btn -->
					<a class="btn like" href="javascript:void(0)">

						<!-- icon -->
						<svg class="icon heart" width=".7em" height=".7em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
						</svg>
						<!-- /icon -->

					</a>
					<!-- /btn -->

					<!-- btn -->
					<a class="btn dl" href="pic/${ img.url }" target="_blank" download="img${index}">

						<!-- icon -->
						<svg class="icon download" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
						</svg>
						<!-- /icon -->

					</a>
					<!-- /btn -->

				</div>
				<!-- /panel -->

			</div>
			<!-- /item -->`;
		}

		// Activate image clicks. 
		function activateImageClicks() {
		
			// Get all image elements. 
			let imgs = document.querySelectorAll('section#gallery main div.item div.image');
		
			// Go thru each image element. 
			for(let img of imgs) {
		
				// Add click handler to image element. 
				img.addEventListener('click', selectImage);
			}
		}

		// Activate heart buttons in gallery. 
		function activateGalleryLikeBtns() {
		
			// Get all heart buttons. 
			let likebtns = document.querySelectorAll('section#gallery main div.item div.panel a.btn.like');
		
			// Go thru each heart button. 
			for(let btn of likebtns) {
		
				// Add click handler to heart button. 
				btn.addEventListener('click', clickGalleryLikeBtn);
			}
		}
	}
}


// Filter images that match selected tag. 
function selectTag(event) {
	console.log(event.currentTarget);

	// Get tag value. 
	let tag = event.currentTarget.getAttribute('data-value');
	// let tag = event.currentTarget.innerText;
	console.log('tag:',tag);

	// Initialize list of matching image indexes. 
	let matchedIndexes = [];

	// Find matching images and save index. 
	for(let index in imageData) {
		let img = imageData[index];
		// console.log(img);

		// Check if image matches tag. 
		let weGotAMatch = img.taglist.includes(tag);

		// Add url to list if matched. 
		if(weGotAMatch) matchedIndexes.push(index);
	}
	console.log('matchedIndexes',matchedIndexes);

	// Show matched images. 
	showMatchedImages();

	/*****/

	// Show matched images. 
	function showMatchedImages() {

		// Get all images. 
		let allImgs = document.querySelectorAll('section#gallery main div.item');
		console.log('allImgs',allImgs);

		// Go thru each image element. 
		for(let index in imageData) {

			// Check if image matches selected tag. 
			let weGotAMatch = matchedIndexes.includes(index);

			// Adjust class based on match status. 
			if(weGotAMatch) allImgs[index].classList.remove('gone');
			else allImgs[index].classList.add('gone');
		}
	}
}

// Select image to blow up on overlay. 
function selectImage(event) {
	// console.log('selectImage', event.currentTarget);

	// Get parent item. 
	let item = event.currentTarget.parentElement;

	// Get id of selected image. 
	let id = item.getAttribute('data-id');
	// console.log('selected id:', id, item);

	// Attach selected id to overlay. 
	overlay.setAttribute('data-displayed-img-id',id);

	// Open page overlay, displaying selected image (by id). 
	openPicOverlay(id);
}

// Open picture overlay popup. 
function openPicOverlay(id) {
	// console.log('id', id);

	let img = imageData[id];
	// console.log('img', img);

	// Add selected image to overlay. 
	document.querySelector('section#overlay main.main div.content').innerHTML = `<img src="pic/${img.url}">`;

	// Activate like button if image in liked list. 
	if(img.liked) document.getElementById('likebtn').classList.add('active');
	else document.getElementById('likebtn').classList.remove('active');

	// Create string representation for tags of selected image. 
	let tizags = '';
	for(let i in img.taglist) {

		// Get tag. 
		let t = img.taglist[i];

		// Add tag to string representation. 
		if(i==0) tizags += t;
		else tizags += `, ${t}`;
	}
	// Add string representation of tags to overlay. 
	document.querySelector('section#overlay main.main div.head div.title').innerHTML = `Tags: ${tizags}`;

	// Activate buttons in overlay popup. 
	updateOverlayBtns();

	// Show overlay on page. 
	document.getElementById('overlay').classList.add('active');

	/*****/

	// Activate buttons in overlay popup. 
	function updateOverlayBtns() {

		// Get overlay. 
		let overlay = document.getElementById('overlay');

		// Check if id present in overlay. 
		let hasId = overlay.hasAttribute('data-displayed-img-id');

		// Get id of displayed image. 
		let id = ( hasId ) ? ( 1*overlay.getAttribute('data-displayed-img-id') ) : ( -1 );
		

		// Get download button in overlay. 
		let dlbtn = document.getElementById('dlbtn');

		// Get url of displayed image. 
		let imgurl = imageData[id].url;
		// console.log(`imgurl: '${imgurl}'`);

		// Set download button attributes: 'href' & 'download'. 
		dlbtn.setAttribute('download',`img${id}`);
		dlbtn.setAttribute('href',`pic/${imgurl}`);


		// Get heart button in overlay. 
		let likebtn = document.getElementById('likebtn');
		likebtn.addEventListener('click', clickOverlayLikeBtn);

		// Check if displayed item now liked. 
		let nowLiked = likedImageIds.includes(id);

		// Set heart button in overlay popup to appropriate initial state. 
		if(nowLiked) likebtn.classList.add('active');
		else likebtn.classList.remove('active');
	}
}

// Close picture overlay popup. 
function closePicOverlay() {

	// Get overlay. 
	let overlay = document.getElementById('overlay');

	// Hide overlay popup from page. 
	overlay.classList.remove('active');
	
	// Remove image content from overlay popup. 
	document.querySelector('section#overlay main div.content').innerHTML = '';
	
	// Remove id value from overlay popup. 
	overlay.removeAttribute('data-displayed-img-id');

	// De-activate buttons in overlay popup. 
	clearOverlayBtns();

	/*****/

	// De-activate buttons in overlay popup. 
	function clearOverlayBtns() {

		// Get download button from overlay. 
		let dlbtn = document.getElementById('dlbtn');

		// Clear download button attributes: 'href' & 'download'. 
		dlbtn.setAttribute('download','');
		dlbtn.setAttribute('href','javascript:void(0)');

		// Get heart button from overlay. 
		let likebtn = document.getElementById('likebtn');
		likebtn.removeEventListener('click', clickOverlayLikeBtn);
	}
}

// Select displayed image to toggle 'like' for. 
function clickOverlayLikeBtn(event) {
	// console.log('clickOverlayLikeBtn', event.currentTarget);

	// Get id of displayed image. 
	let overlay = document.getElementById('overlay');
	let hasId = overlay.hasAttribute('data-displayed-img-id');
	let id = ( hasId ) ? ( 1*overlay.getAttribute('data-displayed-img-id') ) : ( -1 );

	// Toggle 'like' for selected image. 
	toggleImageLikeById(id);
}

// Select image in gallery to toggle 'like' for. 
function clickGalleryLikeBtn(event) {
	console.log('clickGalleryLikeBtn', event.currentTarget.parentElement.parentElement);

	// Get id of selected image. 
	let item = event.currentTarget.parentElement.parentElement;
	let hasId = item.hasAttribute('data-id');
	let id = ( hasId ) ? ( 1*item.getAttribute('data-id') ) : ( -1 );

	// Toggle 'like' for selected image. 
	toggleImageLikeById(id);
}

// Toggle image 'like' by id. 
function toggleImageLikeById(id) {

	// Check if image already liked. 
	let alreadyLiked = likedImageIds.includes(id);
	// console.log('toggleImageLikeById', id, alreadyLiked?'turn off':'turn on' );


	// console.log('likedImageIds (before)',likedImageIds);

	// Add selected image to like list. 
	if(!alreadyLiked) {

		// Add image id to list. 
		likedImageIds.push(id);
	}
	// Remove selected image from like list. 
	else {
		
		// Get index of image id to remove from list. 
		let removeIndex = likedImageIds.indexOf(id);

		// Remove image id from list. 
		likedImageIds.splice(removeIndex,1);
	}

	// console.log('likedImageIds (after)',likedImageIds);


	// Check if item now liked. 
	let nowLiked = likedImageIds.includes(id);

	// Get overlay heart button. 
	let likebtn = document.getElementById('likebtn');

	// Update heart button in overlay popup. 
	if(nowLiked) likebtn.classList.add('active');
	else likebtn.classList.remove('active');

	// Get corresponding item in gallery. 
	let item = document.querySelectorAll('section#gallery main div.item')[id];

	// Update item's heart button in gallery. 
	if(nowLiked) item.classList.add('liked');
	else item.classList.remove('liked');
}

