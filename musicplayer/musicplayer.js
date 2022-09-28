


// Get container of music player components. 
const musicplayer = document.querySelector('div#container main.player');

// Get container of music playlist components. 
const musicplaylist = document.querySelector('div#container aside.playlist ul.songlist');
// const musicplaylist = document.querySelector('div#container aside.playlist');


// Get song audio container. 
const songAudio = document.querySelector('div#container audio.song');

// Get album art box. 
const albumartbox = document.querySelector('div#container main.player div.songdata.albumart');
// Get song title box. 
const songtitlebox = document.querySelector('div#container main.player div.songdata.songtitle');
// Get artist name box. 
const artistnamebox = document.querySelector('div#container main.player div.songdata.artistname');
// Get album name box. 
const albumnamebox = document.querySelector('div#container main.player div.songdata.albumname');

// Get play button. 
const playbtn = document.querySelector('div#container main.player div.btn.playbtn');
// Get delta buttons. 
const backbtn = document.querySelector('div#container main.player div.btn.backbtn');
const fwdbtn = document.querySelector('div#container main.player div.btn.fwdbtn');
// Get repeat button. 
const repeatbtn = document.querySelector('div#container main.player div.btn.repeatbtn');
// Get playlist button. 
const playlistbtn = document.querySelector('div#container main.player div.btn.playlistbtn');

// Get volume bar. 
const volumebar = document.querySelector('div#container main.player div.bar.volumebar');
const volumeball = document.querySelector('div#container main.player div.bar.volumebar div.ball');


// Initialize player state. 
let playerIsLoaded = false;

// Initialize index of current song. 
let currentSongIndex = 0;

// Initialize state of repeat button. 
let repeatState = 0;
// 0: repeat off
// 1: repeat list
// 2: repeat song


/*****/


// Load music playlist. 
loadPlaylist();

// Load music player. 
loadPlayer();


/*****/


// Load current song. 
function loadCurrentSong() {
	console.log('Loading song', currentSongIndex );

	// Get data for current song. 
	songToLoad = songdata[currentSongIndex];

	// Load song audio into player. 
	// songAudio.src = songToLoad.songlink;
	songAudio.innerHTML = `<source src="${songToLoad.songlink}" type="audio/mpeg">`;
	// Resfresh state of song audio. 
	songAudio.load();
	
	// Load song metadata into player. 
	loadSongMetadata();

	// Update playlist selection. 
	updatePlaylistSelection();

	/***/

	// Load song metadata into player. 
	function loadSongMetadata() {

		// Load song title into player. 
		let songname = songToLoad.songname;
		songtitlebox.innerHTML = songname ? `
		<!-- caption -->
		<span class="caption">${songname}</span>
		<!-- /caption -->` : '';

		// Load album name into player. 
		let albumname = songToLoad.albumname;
		albumnamebox.innerHTML = albumname ? `
		<!-- caption -->
		<span class="caption">${albumname}</span>
		<!-- /caption -->` : '';

		// Load artist name into player. 
		let artistname = songToLoad.artistname;
		artistnamebox.innerHTML = artistname ? `
		<!-- caption -->
		<span class="caption">${artistname}</span>
		<!-- /caption -->` : '';

		// TODO: Load album art into player. 
		let albumartlink = songToLoad.albumartlink;
		albumartbox.innerHTML = albumartlink ? `
		<!-- albumart -->
		<img class="albumart" src="${albumartlink}">
		<!-- /albumart -->` : '';
	}

	// Update selected song in playlist. 
	function updatePlaylistSelection() {

		// Get all song items. 
		const allSongItems = document.querySelectorAll('div#container aside.playlist ul.songlist li.songitem');
		console.log(allSongItems);
		
		// Go thru all song items to refresh highlight state. 
		for(let songitem of allSongItems) {
			
			// Get index from song link. 
			let songlink = songitem.querySelector('a.songlink');
			// console.log(songlink);
			let index = 1 * songlink.getAttribute('data-songindex');
			console.log(index,songitem);

			// Highlight selected song. 
			if(index==currentSongIndex) songitem.classList.add('active');
			// Un-highlight all other songs. 
			else songitem.classList.remove('active');
		}
	}
}


// Prepare music player for user interaction. 
function loadPlayer() {

	// Load first song into music player. 
	currentSongIndex = 0;
	loadCurrentSong();

	// Reset player state. 
	musicplayer.classList.remove('active');
	musicplayer.classList.remove('repeatlist');
	musicplayer.classList.remove('repeatsong');
	playerIsLoaded = true;

	// Activate music player buttons. 
	playbtn.addEventListener('click',togglePlayState);
	backbtn.addEventListener('click',skipBack);
	fwdbtn.addEventListener('click',skipFwd);
	repeatbtn.addEventListener('click',toggleRepeatState);
	playlistbtn.addEventListener('click',togglePlaylistState);
	// document.body.addEventListener('click',loadCurrentSong);

	// Make player automatically move to next song upon song end. 
	songAudio.addEventListener('ended',uponSongEnd);

	// TODO: Update progress bar fillage once per second since play. 
	setInterval(updateProgress,1000);
	// ^ Is this correct ?

	// TODO: Update volume bar fillage once clicked. 
	volumebar.addEventListener('click',updateVolume)
	
	/****/

	// TODO: Update progress bar fillage. 
	function updateProgress() {
		// 
	}

	// TODO: Update volume bar fillage. 
	function updateVolume(event) {
		// 
	}

	// Take action upon end of song. 
	function uponSongEnd() {
		
		// Check if repeat state indicates song repeat. 
		let repeatSongOn = repeatState===2;

		// Play same song if song repeat is on. 
		if(repeatSongOn) playSong();
		// Otherwise: Skip forward to next song. 
		else skipFwd();
	}

	// Play music player. 
	function playSong() {
		
		// Toggle state of song audio. 
		songAudio.play();
		
		// Toggle state of play button. 
		musicplayer.classList.add('active');

		console.log('Now playing...');
	}
	// Pause music player. 
	function pauseSong() {
		
		// Toggle state of song audio. 
		songAudio.pause();
		
		// Toggle state of play button. 
		musicplayer.classList.remove('active');

		console.log('Now paused.');
	}
	// Toggle song play state. 
	function togglePlayState() {

		// Get current play state. 
		let currentlyPlaying = musicplayer.classList.contains('active');

		// Play music player if not currently playing. 
		if(!currentlyPlaying) {
			playSong();
		}
		
		// Pause music player if currently playing. 
		else {
			pauseSong();
		}
	}

	// Skip backward. 
	function skipBack() {

		// Check if song just started (before 3 sec). 
		let justStarted = (1*songAudio.currentTime) < 3.00;
	
		// Go to previous song if already near beginning of current song. 
		if(justStarted) goToPrevSong();
		// Otherwise: Go to beginning of current song. 
		else restartSong();

		/***/

		// Go to beginning of current song. 
		function restartSong() {
			songAudio.currentTime = 0;
		}

		// Go to previous song. 
		function goToPrevSong() {
			console.log('Current song index (before):',currentSongIndex);

			// Increment current song index. 
			currentSongIndex -= 1;
			console.log('Current song index (during):',currentSongIndex);
			
			// Ensure song index within range. 
			if(currentSongIndex<0) {
				currentSongIndex = songdata.length - 1;
			}
			console.log('Current song index (after):',currentSongIndex);

			// Load new song into music player. 
			loadCurrentSong();
		}
	}
	// Skip forward to next song. 
	function skipFwd() {
		
		// Go to next song. 
		goToNextSong();
		
		// Check if past last song. 
		let pastLastSong = (currentSongIndex==0);
		
		// Check if repeat state indicates list repeat. 
		let repeatListOn = repeatState===1;

		// Get current play state. 
		let currentlyPlaying = musicplayer.classList.contains('active');

		// End here if not currently playing. 
		if(!currentlyPlaying) return;
		
		// Pause music player if (past last song and 'repeat list' not selected). 
		if( (pastLastSong && !repeatListOn) /* || !currentlyPlaying */ ) {
			pauseSong();
		}
		// Otherwise: Play nextly loaded song. 
		else {
			playSong();
		}
		
		/***/
		
		// Go to next song. 
		function goToNextSong() {
			console.log('Current song index (before):',currentSongIndex);
			
			// Increment current song index. 
			currentSongIndex += 1;
			console.log('Current song index (during):',currentSongIndex);
			
			// Ensure song index within range (modulus [length]). 
			currentSongIndex %= songdata.length;
			console.log('Current song index (after):',currentSongIndex);

			// Load new song into music player. 
			loadCurrentSong();
		}
	}

	// Toggle repeat state. 
	function toggleRepeatState() {
		
		// Increment repeat state indicator. 
		repeatState += 1;
		// Ensure repeat state indicator within range (modulus 3). 
		repeatState %= 3;

		// Update repeat button. 
		if(repeatState==2) {
			musicplayer.classList.remove('repeatlist');
			musicplayer.classList.add('repeatsong');
		}
		else if(repeatState==1) {
			musicplayer.classList.remove('repeatsong');
			musicplayer.classList.add('repeatlist');
		}
		else {
			musicplayer.classList.remove('repeatlist');
			musicplayer.classList.remove('repeatsong');
		}
	}

	// Toggle playlist state. 
	function togglePlaylistState() {
		// 
		container.classList.toggle('open');
	}
}


// Prepare music playlist for user interaction. 
function loadPlaylist() {

	// Add songs to list. 
	populateSongList();

	// Activate song link clicks. 
	activateSongLinks();

	/****/
	
	// Add songs to list. 
	function populateSongList() {

		// Initialize result. 
		let result = '';
	
		// Go thru song data. 
		for(let index in songdata) {
	
			// Get data for individual song. 
			let songitem = songdata[index];
	
			// Add song item to result. 
			result += `
			<!-- songitem -->
			<li class="songitem">
	
				<!-- songlink -->
				<a class="songlink" data-songindex="${index}" href="javascript:void(0)">
	
					<!-- albumart -->
					<div class="albumart">${ (songitem.albumartlink) ? `<img class="albumart" src="${songitem.albumartlink}">` : '' }</div>
					<!-- /albumart -->
	
					<!-- metadata -->
					<div class="metadata">
	
						<!-- songtitle -->
						<div class="songdata songtitle">
	
							<!-- caption -->
							<span class="caption">${ (songitem.songname) ? songitem.songname : '' }</span>
							<!-- /caption -->
	
						</div>
						<!-- /songtitle -->
	
						<!-- artistname -->
						<div class="songdata artistname">
	
							<!-- caption -->
							<span class="caption">${ (songitem.artistname) ? songitem.artistname : '' }</span>
							<!-- /caption -->
	
						</div>
						<!-- /artistname -->
						
					</div>
					<!-- /metadata -->
	
				</a>
				<!-- /songlink -->
				
			</li>
			<!-- /songitem -->`;
		}
	
		// Add result to page. 
		musicplaylist.innerHTML = result;
	}
	
	// Activate song link clicks. 
	function activateSongLinks() {

		// Get all song links. 
		const allSongLinks = document.querySelectorAll('div#container aside.playlist ul.songlist li.songitem a.songlink');
		console.log(allSongLinks);
		
		// Go thru all song links to activate link clicks. 
		for(let songlink of allSongLinks) {

			// Activate link click. 
			songlink.addEventListener('click',setNewSong);
		}

		/***/

		// Set new song. 
		function setNewSong(event) {

			// Get song link. 
			let songlink = event.currentTarget;

			// Get index from song link. 
			let index = 1 * songlink.getAttribute('data-songindex');

			// Set new song index. 
			currentSongIndex = index;

			// Load new song into music player. 
			loadCurrentSong();
		}
	}
}

