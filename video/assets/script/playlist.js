


// Load video playlist. 
loadVideoPlaylist();


/*****/


// Load video playlist. 
function loadVideoPlaylist() {

	// Initialize result. 
	let result = '';

	// Aggregate all video items for playlist. 
	for(let vidIndex in videoData) {
		// Add video item for playlist. 
		result += createPlaylistItem(vidIndex);
	}

	// Get container for playlist items. 
	let vidlist = document.querySelector('aside.playlist ul.vidlist');

	// Add items to playlist container. 
	vidlist.innerHTML = result;

	// Get all vid links in playlist. 
	let allvidlinks = document.querySelectorAll('aside.playlist ul.vidlist li.viditem a.vidlink');

	// Activate click function on vid links. 
	for(let vidlink of allvidlinks ) {
		vidlink.addEventListener('click',selectVideo);
	}
	
	/****/

	// Select video. 
	function selectVideo(event) {
	
		// Save video index from selected video link. 
		let vidlink = event.currentTarget;
		currentvideoid = 1*vidlink.getAttribute('data-vidindex');
		
		// Load selected video on page. 
		loadCurrentVideo();
	
		// Highlight selected video on page. 
		// highlightVideo(currentvideoid);
	
		/***/
		
		// Highlight selected video. 
		// function highlightVideo() {
	
		// 	// Get all vid links in playlist. 
		// 	let allviditems = document.querySelectorAll('aside.playlist ul.vidlist li.viditem');
	
		// 	// Un-highlight all other videos in playlist. 
		// 	for(let viditem of allviditems) {
		// 		viditem.classList.remove('active');
		// 	}
	
		// 	// Highlight selected video in playlist. 
		// 	let selectedvidlink = event.currentTarget;
		// 	let selectedviditem = selectedvidlink.parentElement;
		// 	selectedviditem.classList.add('active');
		// }
	}

	// Create video item for playlist. 
	function createPlaylistItem(vidIndex) {

		// Get video object. 
		let vid = videoData[vidIndex];

		// Compile video item for playlist. 
		return `
		<!-- viditem -->
		<li class="viditem${ (vidIndex==currentvideoid) ? (' active') : ('') }">

			<!-- vidlink -->
			<a class="vidlink" href="javascript:void(0)" data-vidindex="${ vidIndex }">

				<!-- photo -->
				<div class="photo" style="background-image:url('${ /* getRelativeUrl */(vid.thumbnailurl) }');"></div>
				<!-- /photo -->

				<!-- content -->
				<div class="content">

					<!-- avatar -->
					<div class="avatar"></div>
					<!-- /avatar -->

					<!-- meta -->
					<div class="meta">

						<!-- vidtitle -->
						<div class="vidtitle">${ vid.title }</div>
						<!-- /vidtitle -->

						<!-- metadata -->
						<div class="metadata">

							<!-- vidauthor -->
							<span class="vidauthor">${ userDataList[vid.authorid].name }</span>
							<!-- /vidauthor -->

							<!-- dot -->
							<span class="dot a">&sdot;</span>
							<!-- /dot -->

							<!-- viddata -->
							<div class="viddata">

								<!-- viewcount -->
								<span class="viewcount">${ formatViewCount(vid.viewcount) }</span>
								<!-- /viewcount -->

								<!-- dot -->
								<span class="dot b">&sdot;</span>
								<!-- /dot -->

								<!-- timesince -->
								<span class="timesince">${ formatTimeAgo(vid.uploaddate) }</span>
								<!-- /timesince -->

							</div>
							<!-- /viddata -->
							
						</div>
						<!-- /metadata -->
						
					</div>
					<!-- /meta -->
					
				</div>
				<!-- /content -->

			</a>
			<!-- /vidlink -->

		</li>
		<!-- /viditem -->`;
	}
}
