


// Get gallery container. 
// let gallerybox = document.querySelector('div#container section.gallery');

// Get destination for gallery media. 
let gallerymediadestination = document.querySelector('div#container section.gallery div.grid ul.medialist');

// Get destination for tag list in headbar. 
let headbartaglistdestination = document.querySelector('div#container section#headbar div.grid ul.taglist');

// Get destination for tag list in sidebar. 
let sidebartaglistdestination = document.querySelector('div#container section#sidebar div.grid ul.taglist');


/*****/


// Load images and tags. 
loadItUp();


/*****/


// Load everything. 
function loadItUp() {

	// Load all images. 
	loadAllImages();

	// Load all tags. 
	loadAllTags();

	/****/

	// Load all images in gallery. 
	function loadAllImages() {

		// Define elements for image gallery. 
		let result = '';
		for(let index in galleryMediaData) {

			// Create layout for image item. 
			result += createImageByIndex(index);
		}

		// Add images to gallery. 
		gallerymediadestination.innerHTML = result;

		// Activate image clicks in gallery. 
		activateImageClicks();

		// Activate heart buttons in gallery. 
		activateGalleryLikeBtns();

		/***/

		// Create layout for media item by index. 
		function createImageByIndex(index) {
			// console.log(index,'liked:',userData[currentuserid]['likedMediaIds'].includes(1*index));

			// Get data for given media item. 
			let givenmediaitem = galleryMediaData[index];
			
			// Get author data. 
			let authorid = givenmediaitem['authorid'];
			let authoruser = userData[authorid];
			
			// Check if media is included liked list. 
			let currentuser = userData[currentuserid];
			let liked = currentuser['likedMediaIds'].includes(1*index);
			// Check if media is stored locally. 
			let local = !!givenmediaitem['localmedia']

			return `
			<!-- item -->
			<li class="item ${ (liked) ? ('liked') : ('') }" data-mediaid="${ index }">

				<!-- panel -->
				<div class="panel top">

					<!-- profile -->
					<div class="profile">

						<!-- avatar -->
						<div class="avatar">
							<img src="${ authoruser['avatarurl'] }">
						</div>
						<!-- /avatar -->

						<!-- details -->
						<div class="details">

							<!-- username -->
							<div class="username">${ authoruser['username'] }</div>
							<!-- /username -->

							<!-- followercount -->
							<div class="followercount">${ ( authoruser['followercount'] ) ? formatFollowerCount( authoruser['followercount'] ) : ('0') }</div>
							<!-- /followercount -->

						</div>
						<!-- /details -->

					</div>
					<!-- /profile -->

				</div>
				<!-- /panel -->

				<!-- media -->
				<div class="media ${ (local) ? ('local') : ('') }" style="background-image:url('${ givenmediaitem['thumbnailurl'] }');"></div>
				<!-- /media -->

				<!-- panel -->
				<div class="panel bottom">

					<!-- btn -->
					<a class="btn like" href="javascript:void(0)">

						<!-- icon -->
						<svg class="icon heart" width=".75em" height=".75em" fill="currentColor" viewBox="0 0 16 16">
							<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
							<!-- <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> -->
						</svg>
						<!-- /icon -->

						<!-- icon -->
						<svg class="icon heart bold" width=".75em" height=".75em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
							<!-- <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/> -->
						</svg>
						<!-- /icon -->

					</a>
					<!-- /btn -->

					<!-- btn -->
					<a class="btn comment" href="javascript:void(0)">

						<!-- icon -->
						<svg class="icon chatbubble" width=".75em" height=".75em" fill="currentColor" viewBox="0 0 16 16">
							<!-- <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/> -->
							<path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
						</svg>
						<!-- /icon -->

					</a>
					<!-- /btn -->

					<!-- btn -->
					<a class="btn share" id="commentbtn" href="javascript:void(0)">

						<!-- icon -->
						<svg class="icon paperplane" width=".75em" height=".75em" fill="currentColor" viewBox="0 0 16 16">
							<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
						</svg>
						<!-- /icon -->

					</a>
					<!-- /btn -->

					<!-- space -->
					<div class="space"></div>
					<!-- /space -->

					<!-- btn -->
					<a class="btn dl" href="${ givenmediaitem['fullimageurl'] }" target="_blank" download="img${index}">

						<!-- icon -->
						<svg class="icon download" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
							<path d="M1.5 14a.5.5 0 0 0 0 1v-1zm13 1a.5.5 0 0 0 0-1v1zm-13 0h13v-1h-13v1z"/>
						</svg>
						<!-- /icon -->

					</a>
					<!-- /btn -->

				</div>
				<!-- /panel -->

			</li>
			<!-- /item -->`;
		}

		// Activate image clicks. 
		function activateImageClicks() {

			// Get all media item images. 
			let mediaitemimagecanvases = document.querySelectorAll('div#container section.gallery div.grid ul.medialist li.item div.media');

			// Go thru each media item. 
			for(let imagecanvas of mediaitemimagecanvases) {

				// Add click handler to media item. 
				imagecanvas.addEventListener('click', selectImage);
			}

			/**/

			// Select image to blow up on overlay. 
			function selectImage(event) {
				// console.log('selectImage', event.currentTarget);

				// Get parent item. 
				let item = event.currentTarget.parentElement;

				// Get id of selected image. 
				let id = item.getAttribute('data-mediaid');
				// console.log('selected id:', id, item);

				// Attach selected id to overlay. 
				overlay['box'].setAttribute('data-displayedmediaid',id);

				// Open page overlay, displaying selected image (by id). 
				openPicOverlay(id);
			}
		}

		// Activate heart buttons in gallery. 
		function activateGalleryLikeBtns() {

			// Get all heart buttons. 
			let likebtns = document.querySelectorAll('div#container section.gallery div.grid ul.medialist li.item div.panel a.btn.like');

			// Go thru each heart button. 
			for(let btn of likebtns) {

				// Add click handler to heart button. 
				btn.addEventListener('click', clickGalleryLikeBtn);
			}
		}
	}

	// Load all tags. 
	function loadAllTags() {

		// Collect list of tags from all media items. 
		collectMediaTags();

		// Define elements for all tag. 
		let result = '';

		// Define elements for regular tags. 
		for(let tagcaption of galleryTagData) {
			result += `
			<!-- tag -->
			<li class="tag" data-value="${tagcaption}">
				<span class="caption">${tagcaption}</span>
			</li>
			<!-- /tag -->`;
		}

		// Display tag list in headbar. 
		headbartaglistdestination.innerHTML = result;
		// Display tag list in sidebar. 
		sidebartaglistdestination.innerHTML = result;

		// Get all filter tags. 
		let filtertags = document.querySelectorAll('div#container section.navbox div.grid ul.taglist li.tag');
		// Go thru each filter tag. 
		for(let tag of filtertags) {
			// Activate tag click. 
			tag.addEventListener('click', filterByTag);
		}

		/***/

		// Filter images that match selected tag. 
		function filterByTag(event) {
			
			// Get selected tag. 
			let selectedtag = event.currentTarget;
			console.log('Selected tag:',selectedtag);

			// Get value from selected tag. 
			// let selectedtagvalue = selectedtag.innerText;
			let selectedtagvalue = selectedtag.getAttribute('data-value');
			console.log('Selected tag value:',selectedtagvalue);

			// Initialize list of matching image indexes. 
			let matchedIndexes = [];

			// Find matching images and save index. 
			for(let index in galleryMediaData) {

				// Get current media item. 
				let currentmediaitem = galleryMediaData[index];
				// console.log('Current media item:',currentmediaitem);

				// Check if media item matches tag. 
				let mediamatchestag = currentmediaitem['taglist'].includes(selectedtagvalue);

				// Add id to match list if media item matches tag. 
				if(mediamatchestag) matchedIndexes.push(index);
			}
			console.log('Matched media indexes:',matchedIndexes);

			// Show matched images. 
			showMatchedImages();

			/**/

			// Show matched images. 
			function showMatchedImages() {

				// Get all images. 
				let allImgs = document.querySelectorAll('div#container section.gallery div.grid ul.medialist li.item');
				console.log('allImgs',allImgs);

				// Go thru data for each media item. 
				for(let index in galleryMediaData) {

					// Check if image matches selected tag. 
					let weGotAMatch = matchedIndexes.includes(index);

					// Adjust class based on match status. 
					if(weGotAMatch) allImgs[index].classList.remove('gone');
					else allImgs[index].classList.add('gone');
				}
			}
		}

		// Collect list of tags from all media items. 
		function collectMediaTags() {

			// Go thru each media item. 
			for(let currentmediaitem of galleryMediaData) {

				// Go thru each tag for current media item. 
				for(tag of currentmediaitem['taglist']) {

					// Check if tag already collected. 
					let tagalreadycollected = galleryTagData.includes(tag);

					// Save tag if not already collected. 
					if(!tagalreadycollected) galleryTagData.push(tag);
				}
			}

			// Sort tags in alphabetical order. 
			galleryTagData.sort();
		}
	}
}

// Toggle sidebar. 
function toggleSidebar(/* event */) {

	// Toggle sidebar. 
	document.getElementById('sidebar').classList.toggle('active');

	// TODO: Show overlay. 
}

// Close sidebar. 
function closeSidebar(/* event */) {

	// Toggle sidebar. 
	document.getElementById('sidebar').classList.remove('active');
}
