

// Initialize mouse coordinate tracker. 
let pointerX = -1;
let pointerY = -1;

// Initialize state of play/pause button. 
let playBtnActive = false;


/*****/


// Load playlist. 
loadPlaylist();

// Activate song links. 
activateSongLinks();


/*****/


// Load playlist. 
function loadPlaylist() {

	let result = '';
	for(let index in songData) {

		// Get song object. 
		let song = songData[index];

		// Get artist id. 
		let artistid = song.artistid;
		// let artistid = Math.floor(artistData.length*Math.random());
		
		// Get artist name. 
		let artistname = artistData[artistid];
	
		// Get length of song. 
		let length = 120+Math.floor(180*Math.random());
		let min = Math.floor(length/60);
		let sec = Math.floor(length%60);
	
		// Create playlist item. 
		result += `
		<!-- playitem -->
		<li class="playitem">

			<!-- playlink -->
			<a class="playlink" href="javascript:void(0)" data-songid="${index}">
		
				<!-- albumart -->
				<div class="albumart">
					<img src="${'../podcast/albumart.jpg'}">
				</div>
				<!-- /albumart -->
		
				<!-- metadata -->
				<div class="metadata">
		
					<!-- title -->
					<div class="title">${song.title}</div>
					<!-- /title -->
		
					<!-- bottom -->
					<div class="bottom">
		
						<!-- artist -->
						<div class="artist">${artistname}</div>
						<!-- /artist -->
		
						<!-- duration -->
						<div class="duration">${ (min<10)?('0'+min):(min) }:${ (sec<10)?('0'+sec):(sec) }</div>
						<!-- /duration -->
		
					</div>
					<!-- /bottom -->
					
				</div>
				<!-- /metadata -->
				
			</a>
			<!-- /playlink -->
	
		</li>
		<!-- /playitem -->`;
	}
	document.getElementById('playlist').innerHTML = result;
}


// Load playlist. 
function activateSongLinks() {

	// Get playlist items. 
	let playlistlinks = document.querySelectorAll('ul#playlist li.playitem a.playlink');

	// Attach function to playlist link. 
	for(let links of playlistlinks) {
		links.addEventListener('click',selectSong);
	}

	/*****/

	// Select song in playlist. 
	function selectSong(event) {

		// Get selected song item. 
		let selectedItem = event.currentTarget;
		console.log('\nselected item:',selectedItem);

		// Get id of selected song. 
		let songid = selectedItem.getAttribute('data-songid');
		console.log('Song id:',songid);

		// Get title of selected song. 
		let songtitle = songData[songid].title;
		console.log('Song title:',songtitle);

		// Get artist name associated with selected song. 
		let artistname = artistData[songData[songid].artistid];
		console.log('Artist name:',artistname);

		let albumarturl = songData[songid].albumarturl;
		console.log('Album art:',albumarturl);
		

		// Add song attributes to media player. 
		document.getElementById('songtitle').innerHTML = createCaption(songtitle);
		document.getElementById('artistname').innerHTML = createCaption(artistname);
		document.getElementById('albumart').style.backgroundImage = `url('${albumarturl}')`;
		// Activate play/pause button. 
		if(!playBtnActive) activatePlayBtn();

		/*****/

		// Activate play/pause button. 
		function activatePlayBtn() {

			// Attach play/pause toggle function to play/pause button. 
			document.getElementById('playbtn').addEventListener('click',function() {
				this.parentElement.parentElement.classList.toggle('active');
			});

			// Change state of play/pause button. 
			playBtnActive = true;
		}

		// Create caption. 
		function createCaption(content) {
			return `
			<!-- caption -->
			<span class="caption">${content}</span>
			<!-- /caption -->`;
		}
	}
}


// Skip to selected position in song. 
function skipToPosition(event) {
	// console.log(event);

	// Get coordinates of mouse pointer. 
	pointerX = event.offsetX;
	pointerY = event.offsetY;
	// console.log('x',pointerX);
	// console.log('y',pointerY);

	// Get proportion of progress bar selected. 
	let totalWidth = document.querySelector('.line').getBoundingClientRect().width;
	let proportion = 100*(pointerX/totalWidth);
	document.getElementById('progress').style.width = `${proportion}%`;
	
	// document.getElementById('tracker').innerHTML = `x:${pointerX}, y:${pointerY}`;
}

