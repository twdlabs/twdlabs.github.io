


// Get all round buttons. 
let allroundbtns = document.querySelectorAll('div.head div.cover div.panel div.btn.round');


/*****/


// Activate overlay button. 
activateOverlayBtns();

// Load episodes. 
loadEpisodeData();


/*****/


// Activate overlay button. 
function activateOverlayBtns() {

	// Go thru each round button. 
	for(btn of allroundbtns) {
		btn.addEventListener('click',toggleBtn);
	}
	
	// Toggle state of round button. 
	function toggleBtn(event) {
		let btn = event.currentTarget;
		btn.classList.toggle('active');
	}
}

// Load episode data. 
function loadEpisodeData() {

	let result = '';
	for(let index in episodeData) {
		let episode = episodeData[index];
		result += `
		<!-- item -->
		<li class="item${ (selectedIndex==index) ? (' active') : ('') }">

			<!-- inner -->
			<div class="inner">

				<!-- thumbnail -->
				<div class="thumbnail">

					<!-- img -->
					<div class="img">

						<!-- img -->
						<img src="${ episode.thumbnailurl ? episode.thumbnailurl : './../resources/videos/thumbnails/1436812.png' }">
						<!-- /img -->

					</div>
					<!-- /img -->

					<!-- playbtn -->
					<div class="playbtn">

						<!-- icon -->
						<svg class="icon play" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
						</svg>
						<!-- /icon -->

					</div>
					<!-- /playbtn -->

				</div>
				<!-- /thumbnail -->

				<!-- metadata -->
				<div class="metadata">

					<!-- top -->
					<div class="top">
						<h4 class="title">${episode.title}</h4>
						<span class="duration">${episode.duration}m</span>
					</div>
					<!-- /top -->

					<!-- desc -->
					<div class="desc">${episode.description}</div>
					<!-- /desc -->

				</div>
				<!-- /metadata -->

			</div>
			<!-- /inner -->

		</li>
		<!-- /item -->`;
	}
	document.querySelector('div.body section.playlist ul.list').innerHTML = result;
}

