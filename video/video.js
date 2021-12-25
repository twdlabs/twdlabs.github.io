

// Get all vid links in playlist. 
let allvidlinks = document.querySelectorAll('aside.playlist ul.vidlist li.viditem a.vidlink');

for(let vidlink of allvidlinks ) {
	vidlink.addEventListener('click',selectVideo);
}

// Select video. 
function selectVideo(event) {

	// Highlight video. 
	highlightVideo();

	/*****/
	
	// Highlight video. 
	function highlightVideo() {

		// Un-highlight all videos in playlist. 
		for(let vidlink of allvidlinks) {
			let viditem = vidlink.parentElement;
			viditem.classList.remove('active');
		}

		// Highlight selected video in playlist. 
		let selectedvidlink = event.currentTarget;
		let selectedviditem = selectedvidlink.parentElement;
		selectedviditem.classList.add('active');
	}
}
