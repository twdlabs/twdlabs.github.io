

// Get round buttons. 
let roundbtns = document.querySelectorAll('div.head div.cover div.panel div.btn.round');

// Hadnle clicks for round buttons. 
for(btn of roundbtns) {
	btn.addEventListener('click',activateBtn);
}

// Load episodes. 
loadEpisodeData();


/*****/


// Activate round button. 
function activateBtn(event) {
	let btn = event.currentTarget;
	btn.classList.toggle('active');
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
					<div class="img">${ (episode.thumbnailurl) ? (`<img src="${episode.thumbnailurl}">`) : ('') }</div>
					<!-- /img -->
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

