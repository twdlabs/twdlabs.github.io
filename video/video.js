

// Load video links. 
// loadVideoLinks();


/*****/


// Load video links. 
function loadVideoLinks() {

	// Initialize result. 
	let result = '';

	// Add all data to result. 
	for(let vid of videoData) {
		result += `
		<!-- viditem -->
		<li class="viditem">
			<!-- vidlink -->
			<a class="vidlink" href="javascript:void(0)" data-src="${vid.vidurl}">

				<!-- photo -->
				<div class="photo" style="background-image:url('${vid.thumbnailurl}');"></div>
				<!-- /photo -->

				<!-- content -->
				<div class="content">

					<!-- title -->
					<span class="title">${vid.title}</span>
					<!-- /title -->

					<!-- author -->
					<span class="author">${vid.author}</span>
					<!-- /author -->

					<!-- details -->
					<div class="details">${formatViewCount(vid.views)} &bull; ${formatViewCount(vid.views)}</div>
					<!-- /details -->
					
				</div>
				<!-- /content -->

			</a>
			<!-- /vidlink -->
		</li>
		<!-- /viditem -->`;
	}

	// Get vid playlist. 
	let vidlist = document.querySelector('aside.playlist ul.vidlist');

	// Add result to playlist. 
	vidlist.innerHTML = result;

	// Get all vid links in playlist. 
	let allvidlinks = document.querySelectorAll('aside.playlist ul.vidlist li.viditem a.vidlink');

	// Activate click function on vid links. 
	for(let vidlink of allvidlinks ) {
		vidlink.addEventListener('click',selectVideo);
	}
}

// Select video. 
function selectVideo(event) {

	// Highlight video. 
	highlightVideo();

	// Load selected video on page. 
	loadVideo();

	/*****/
	
	// Highlight video. 
	function highlightVideo() {

		// Get all vid links in playlist. 
		let allviditems = document.querySelectorAll('aside.playlist ul.vidlist li.viditem');

		// Un-highlight all videos in playlist. 
		for(let viditem of allviditems) {
			viditem.classList.remove('active');
		}

		// Highlight selected video in playlist. 
		let selectedvidlink = event.currentTarget;
		let selectedviditem = selectedvidlink.parentElement;
		selectedviditem.classList.add('active');
	}

	// Load selected video on page. 
	function loadVideo() {

		// Get video source. 
		let vidsrc = event.currentTarget.getAttribute('data-src');

		// Apply video source. 
		document.querySelector('main#main main.player div.video').innerHTML = `
		<!-- video -->
		<video src="${vidsrc}" autoplay muted controls></video>
		<!-- /video -->`;
	}
}

// Format view count number. 
function formatViewCount(num) {
	
	// Define components of formatted number. 
	let coeff = 1*num;
	let suffindex = 0;
	let suffix = [' views','K views','M views','B views','T views',' view'];	// potential suffixes

	// Divide number until less than a thousand. 
	while(coeff>1000 && suffindex<5) {

		// Divide number by thousand. 
		coeff /= 1000;

		// Increment suffix index. 
		suffindex++;
	}

	// Add final formatting to view count. 
	coeff = coeff.toFixed(1);
	let removeExtraZero = coeff.includes('.0');
	if(removeExtraZero) coeff = coeff.substr(0,coeff.length-2);
	if(coeff==1 && suffindex==0) suffindex = 5;

	// Return final result text. 
	return ( coeff + suffix[suffindex] );
}

// TODO: Format time ago number. 
function formatTimeAgo(ets) {

	// Define components of formatted number. 
	let coeff = 1*ets;
	let suffindex = 0;
	let suffix = [' second','minute','hour','day','week','month','year'];	// potential suffixes
}

