

// Toggle image 'like' by id. 
function toggleImageLikeById(id) {

	if(id==-1) console.error('Toggle like error: Invalid image id found on overlay');

	// Check if image already liked. 
	let alreadyLiked = userData[currentuserindex]['likedImageIds'].includes(id);
	// console.log('toggleImageLikeById', id, alreadyLiked?'turning off':'turning on' );

	// console.log('Liked images (before):',userData[currentuserindex]['likedImageIds']);
	// Add selected image to like list. 
	if(!alreadyLiked) addImageLikeById(id);
	// Remove selected image from like list. 
	else removeImageLikeById(id);
	// console.log('Liked images (after)':,userData[currentuserindex]['likedImageIds']);


	// Check if item now liked. 
	let nowLiked = userData[currentuserindex]['likedImageIds'].includes(id);

	// Get corresponding item in gallery. 
	let item = document.querySelectorAll('section#gallery main div.item')[id];
	// Get overlay heart button. 
	let likebtn = document.getElementById('likebtn');


	if(nowLiked) {

		// Update heart button of item in gallery. 
		item.classList.add('liked');

		// Update overlay heart button. 
		likebtn.classList.add('active');
	}
	else {

		// Update heart button of item in gallery. 
		item.classList.remove('liked');

		// Update overlay heart button. 
		likebtn.classList.remove('active');
	}

	/*****/

	// Add image 'like' by id. 
	function addImageLikeById(id) {

		// Add image id to list. 
		userData[currentuserindex]['likedImageIds'].push(id);
	}

	// Remove image 'like' by id. 
	function removeImageLikeById(id) {

		// Get index of image id to remove from list. 
		let removeIndex = userData[currentuserindex]['likedImageIds'].indexOf(id);

		// Remove image id from list. 
		userData[currentuserindex]['likedImageIds'].splice(removeIndex,1);
	}
}

// Select image in gallery to toggle 'like' for. 
function clickGalleryLikeBtn(event) {
	console.log('clickGalleryLikeBtn', event.currentTarget.parentElement.parentElement);

	// Get id of selected image. 
	let item = event.currentTarget.parentElement.parentElement;
	let hasImageId = item.hasAttribute('data-imageid');
	let id = ( hasImageId ) ? ( 1*item.getAttribute('data-imageid') ) : ( -1 );

	// Toggle 'like' for selected image. 
	toggleImageLikeById(id);
}

// Select displayed image to toggle 'like' for. 
function clickOverlayLikeBtn(event) {
	// console.log('clickOverlayLikeBtn', event.currentTarget);

	// Get id of displayed image. 
	let overlay = document.getElementById('overlay');
	let hasImageIdOnOverlay = overlay.hasAttribute('data-displayedimageid');
	let id = ( hasImageIdOnOverlay ) ? ( 1*overlay.getAttribute('data-displayedimageid') ) : ( -1 );

	// Toggle 'like' for selected image. 
	toggleImageLikeById(id);
}
