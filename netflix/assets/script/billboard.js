


// Set random media item as featured media on billboard. 
function featureBillboardMedia() {

	// Select random index for featured billboard media. 
	billboard['selectedmediaindex'] = 9 ?? getRandomIndex(mediasourcelist.length);
	console.log('Featured media index:', billboard['selectedmediaindex'] );

	// Display randomly selected media item on billboard. 
	sendMediaToBillboard();

	/****/

	// Get random index. 
	function getRandomIndex(medialistlength) {

		// Choose random index from media list. 
		let r = Math.random();
		// console.log('Random proportion:',r);

		// Get number of media items. 
		// let l = medialistlength;
		// console.log('Media list length:',medialistlength);
	
		// Return random index. 
		return Math['floor'](r*medialistlength);
	}

	// Display given media item on billboard. 
	function sendMediaToBillboard() {

		// Get selected media item. 
		let selectedmediaindex = billboard['selectedmediaindex'];
		let selectedmediaitem = mediasourcelist[selectedmediaindex];
		console.log('Featured media item:',selectedmediaitem);

		// Get image url. 
		// let imgurl = selectedmediaitem['fullimageurl'];
		let imgurl = selectedmediaitem['imgurl'];

		// Update billboard media poster image. 
		billboard['mediaposter'].style.backgroundImage = `url(${imgurl})`;
		billboard['mediaposterimg'].src = imgurl;

		// Update information in vignette. 
		billboard['mediatitle'].innerHTML = selectedmediaitem['title'];
		billboard['mediadescription'].innerHTML = `${selectedmediaitem['caption']}.. ${selectedmediaitem['keywords'].join(' ')}`;

		// TODO: Update action buttons. 
		// billboard['playbtn'].href = `./watch?i=${selectedmediaindex}`;
		billboard['morebtn'].setAttribute('data-mediaindex',selectedmediaindex);
		billboard['morebtn'].addEventListener('click',openOverlay);
	}
}
