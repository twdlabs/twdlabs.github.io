


// Initialize player state. 
let playerIsLoaded = false;

// Initialize play watcher. 
let playWatcherId = undefined;
// Define interval of play watcher. 
let playWatcherPeriod = 500;

// Initialize index of current song. 
let currentSongIndex = 0;

// Initialize state of repeat button. 
let currentRepeatState = 0;
// 0: repeat off
// 1: repeat list
// 2: repeat song



// Get general container. 
const gencontainer = document.querySelector('div#container');



// Get container of music player components. 
const musicplayer = document.querySelector('div#container main.player');
// Get container of music playlist components. 
const musicplaylist = document.querySelector('div#container aside.playlist ul.songlist');


// Get song audio container. 
const songAudio = document.querySelector('div#container audio.song');

// Get minimize button. 
const minibtn = document.querySelector('div#container main.player div.btn.minibtn');
// Get overflow button. 
const overflowbtn = document.querySelector('div#container main.player div.btn.overflowbtn');
// Get overflow button. 
const overflowmenu = document.querySelector('div#container main.player div.overflowmenu');

// Get album art box. 
const albumartbox = document.querySelector('div#container main.player div.songdata.albumart');
// Get song title box. 
const songtitlebox = document.querySelector('div#container main.player div.songdata.songtitle');
// Get artist name box. 
const artistnamebox = document.querySelector('div#container main.player div.songdata.artistname');
// Get album name box. 
const albumnamebox = document.querySelector('div#container main.player div.songdata.albumname');

// Get song progress bar. 
const progressslider = document.querySelector('div#container main.player input.slider.seekbar');
const songprogressbar = document.querySelector('div#container main.player div.bar.seekbar');
const songprogressball = document.querySelector('div#container main.player div.bar.seekbar div.ball');

// Get play button. 
const playbtn = document.querySelector('div#container main.player div.btn.playbtn');
// Get back button. 
const backbtn = document.querySelector('div#container main.player div.btn.backbtn');
// Get forward button. 
const fwdbtn = document.querySelector('div#container main.player div.btn.fwdbtn');
// Get repeat button. 
const repeatbtn = document.querySelector('div#container main.player div.btn.repeatbtn');
// Get playlist button. 
const playlistbtn = document.querySelector('div#container main.player div.btn.playlistbtn');

// Get volume level bar. 
const volumeslider = document.querySelector('div#container main.player input.slider.volumebar');
const volumelevelbar = document.querySelector('div#container main.player div.bar.volumebar');
const volumelevelball = document.querySelector('div#container main.player div.bar.volumebar div.ball');



/*****/



// Load music playlist. 
loadPlaylist();

// Load music player. 
loadPlayer();



/*****/



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
		// console.log(allSongLinks);
		
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

	// Activate minimize button. 
	minibtn.addEventListener('click',toggleMiniPlayer);
	// Activate overflow button. 
	overflowbtn.addEventListener('click',toggleOverflowMenu);

	// Activate music player buttons. 
	playbtn.addEventListener('click',togglePlayState);
	albumartbox.addEventListener('click',togglePlayState);
	backbtn.addEventListener('click',skipBack);
	fwdbtn.addEventListener('click',skipFwd);
	repeatbtn.addEventListener('click',toggleRepeatState);
	playlistbtn.addEventListener('click',togglePlaylistState);

	// Make player automatically move to next song upon song end. 
	songAudio.addEventListener('ended',uponSongEnd);

	// Activate song progress bar: Set song progress when clicked/changed. 
	progressslider.addEventListener('input',function(event) {
		// Get new value. 
		let newValue = event.currentTarget.value;
		console.log('New value:',newValue,event);
		// Set new value. 
		setSongProgress(newValue);
	});
	songprogressbar.addEventListener('click',function(event) {
		// TODO: Get new value (based on click location). 
		// let newValue = xyz;
		console.log('New value:',newValue,event);
		// Set new value. 
		setSongProgress(newValue);
	});

	// Activate volume level bar: Set volume level when clicked/changed. 
	volumeslider.addEventListener('input',function(event) {
		// Get new value. 
		let newValue = event.currentTarget.value;
		console.log('New value:',newValue,event);
		// Set new value. 
		setVolumeLevel(newValue);
	});
	volumelevelbar.addEventListener('click',function(event) {
		// TODO: Get new value (based on click location). 
		// let newValue = xyz;
		console.log('New value:',newValue,event);
		// Set new value. 
		setVolumeLevel(newValue);
	});

	
	// Activate recognition of shortcut keys. 
	document.body.addEventListener('keyup',checkForShortcutKey);

	// Activate closer for outside clicks. 
	document.body.addEventListener('click',checkForOutsideClicks);
	

	/****/


	// Set new song progress. 
	function setSongProgress(newValue = 0) {

		// Apply new level. 
		songAudio.currentTime = (newValue/100)*songAudio.duration;

		// Show current song progress. 
		showSongProgress();
	}
	// Show current song progress in progress bar. 
	function showSongProgress() {
		
		// Get song progress. 
		let songProgress = `${ 100 * ( songAudio.currentTime / songAudio.duration ) }%`;
		// console.log('Updating song progress:',songProgress);
		
		// Set song progress to bar. 
		songprogressbar.style.setProperty('--fillage',songProgress);
	}

	// Set new volume level. 
	function setVolumeLevel(newValue = 0) {

		// Apply new level. 
		songAudio.volume = (newValue/100);

		// Show current volume level. 
		showVolumeLevel();
	}
	// Show current volume level in volume bar. 
	function showVolumeLevel() {
		
		// Get volume level. 
		let volumeLevel = `${ 100 * songAudio.volume }%`;
		// console.log('Updating volume level:',volumeLevel);
		
		// Set volume level to bar. 
		volumelevelbar.style.setProperty('--fillage',volumeLevel);
	}

	// Toggle minimization of music player. 
	function toggleMiniPlayer() {
		
		// Check if already minimized. 
		let alreadyMini = gencontainer.classList.contains('mini');
	
		// Maximize if already minimized. 
		if(alreadyMini) {
	
			// Maximize player. 
			gencontainer.classList.remove('mini');
		}
		
		// Minimize if not already minimized. 
		else {
			
			// Close playlist slider. 
			gencontainer.classList.remove('open');
			// Close overflow window. 
			gencontainer.classList.remove('overflow');
			
			// Minimize player. 
			gencontainer.classList.add('mini');
		}
	}
	
	// Toggle overflow menu. 
	function toggleOverflowMenu() {
		
		// Check if overflow menu already open. 
		let alreadyOpen = gencontainer.classList.contains('overflow');
	
		// Close if already open. 
		if(alreadyOpen) {
			gencontainer.classList.remove('overflow');
		}
	
		// Open if not already open. 
		else {
			gencontainer.classList.add('overflow');
		}
	}

	// Play music player. 
	function playSong() {
		
		// Toggle state of song audio. 
		songAudio.play();
		
		// Toggle state of music player (for play button). 
		musicplayer.classList.add('active');

		// Start play watcher upon play (twice per second). 
		startPlayWatcher();

		console.log('Now playing...');

		/***/

		// Start play watcher. 
		function startPlayWatcher() {
			playWatcherId = setInterval(showSongProgress, playWatcherPeriod);
			console.log('Play watcher id:',playWatcherId);
		}
	}
	// Pause music player. 
	function pauseSong() {
		
		// Toggle state of song audio. 
		songAudio.pause();
		
		// Toggle state of music player (for play button). 
		musicplayer.classList.remove('active');
	
		// Stop play watcher upon pause. 
		stopPlayWatcher();

		console.log('Now paused.');

		/***/

		// Stop play watcher. 
		function stopPlayWatcher() {
			clearInterval(playWatcherId);
			playWatcherId = null;
		}
	}
	// Toggle song play state. 
	function togglePlayState() {

		// Get previous play state. 
		let prevPlaying = musicplayer.classList.contains('active');

		// Play music player if not previously playing. 
		if(!prevPlaying) {
			playSong();
		}
		
		// Pause music player if previously playing. 
		else {
			pauseSong();
		}
	}

	// Skip backward. 
	function skipBack() {

		// Check if song just started (before 3 sec). 
		let justStarted = (1*songAudio.currentTime) < 3.00;
	
		// Go to previous song if already near beginning of current song. 
		if(justStarted) {

			// Go to previous song. 
			goToPrevSong();

			// Play music player. 
			playSong();
		}
		// Otherwise: Restart playing from beginning of current song. 
		else {

			// Go to beginning of current song. 
			songAudio.currentTime = 0;

			// Play music player. 
			playSong();
		}

		/***/

		// Go to previous song. 
		function goToPrevSong() {
			console.log('Current song index (before):',currentSongIndex);

			// Increment current song index. 
			currentSongIndex -= 1;
			console.log('Current song index (during):',currentSongIndex);
			
			// Ensure song index within range. 
			if(currentSongIndex<0) {

				// Check if current repeat state indicates list repeat. 
				let repeatListOn = (currentRepeatState===1);
				
				// Go back to tail of circular list if 'repeat list' selected. 
				if(repeatListOn) currentSongIndex = songdata.length - 1;

				// Remain on first song if 'repeat list' not selected
				else currentSongIndex = 0;
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

		// Get previous play state. 
		let prevPlaying = musicplayer.classList.contains('active');
		// Check if past last song. 
		let pastLastSong = (currentSongIndex==0);
		// Check if current repeat state indicates list repeat. 
		let repeatListOn = (currentRepeatState===1);
		
		// Pause music player if (wasn't previously playing) or if (past last song and 'repeat list' not selected). 
		if( !prevPlaying || (pastLastSong && !repeatListOn) ) {
			pauseSong();
		}
		// Otherwise: Play newly loaded song. 
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
	// Take action upon end of song. 
	function uponSongEnd() {
		
		// Check if repeat state indicates song repeat. 
		let repeatSongOn = currentRepeatState===2;

		// Play same song if song repeat is on. 
		if(repeatSongOn) playSong();
		// Otherwise: Skip forward to next song. 
		else skipFwd();
	}

	// Toggle repeat state. 
	function toggleRepeatState() {
		
		// Increment repeat state indicator. 
		currentRepeatState += 1;
		// Ensure repeat state indicator within range (modulus 3). 
		currentRepeatState %= 3;

		// Update repeat button. 
		if(currentRepeatState==2) {
			musicplayer.classList.remove('repeatlist');
			musicplayer.classList.add('repeatsong');
		}
		else if(currentRepeatState==1) {
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
		gencontainer.classList.toggle('open');
	}

	// TODO: Increase volume (by 1/16 of capacity). 
	function incrVolume() {

		// Get current volume level. 

		// Update volume level. 
		
		// Show new volume level. 
		// volumeslider
		// volumelevelbar.style.setProperty('--fillage',xyz);
	}

	// TODO: Decrease volume (by 1/16 of capacity). 
	function decrVolume() {

		// Get current volume level. 

		// Update volume level. 
		
		// Show new volume level. 
		// volumeslider
		// volumelevelbar.style.setProperty('--fillage',xyz);
	}

	// Check for press of special shortcut keys. 
	function checkForShortcutKey(event) {
		// console.log(event);
		
		// Check for special keys pressed. 
		let isSpaceBar = (event.keyCode==32 || event.key==' ');
		let isLeftArrow = (event.keyCode==37 || event.key=='ArrowLeft');
		let isRightArrow = (event.keyCode==39 || event.key=='ArrowRight');
		let isUpArrow = (event.keyCode==38 || event.key=='ArrowUp');
		let isDownArrow = (event.keyCode==40 || event.key=='ArrowDown');

		// Spacebar: Toggle play state. 
		if(isSpaceBar) togglePlayState();
		// Left arrow: Skip backward. 
		if(isLeftArrow) skipBack();
		// Right arrow: Skip forward. 
		if(isRightArrow) skipFwd();
		// Up arrow: Increase volume. 
		if(isUpArrow) incrVolume();
		// Down arrow: Decrease volume. 
		if(isDownArrow) decrVolume();
	}

	// Check for outside mouse clicks. 
	function checkForOutsideClicks(event) {
		// console.log(event);
		// let x = event.clientX;
		// let y = event.clientY;
		// console.log('(x,y):',x,y);
		
		// Get target of this click. 
		const clickTarget = event.target;

		// Get current states. 
		let playlistOpen = gencontainer.classList.contains('open');
		// console.log('Playlist open:',playlistOpen);
		let overflowOpen = gencontainer.classList.contains('overflow');
		// console.log('Overflow open:',overflowOpen);

		// Check for external clicks. 
		let clickedInPlaylist = musicplaylist.contains(clickTarget);
		// console.log('Clicked in playlist:',clickedInPlaylist);
		let clickedInOverflowMenu = overflowmenu.contains(clickTarget);
		// console.log('Clicked in overflow menu:',clickedInOverflowMenu);

		// Close playlist if open and clicked outside. 
		// if(playlistOpen && !clickedInPlaylist) closePlaylist();

		// Close overflow menu if open and clicked outside. 
		// if(overflowOpen && !clickedInOverflowMenu) closeOverflowMenu();

		/***/

		// Close playlist. 
		function closePlaylist() {
			// 
			gencontainer.classList.remove('open');
		}

		// Close overflow menu. 
		function closeOverflowMenu() {
			// 
			gencontainer.classList.remove('overflow');
		}
	}
}


// Load current song. 
function loadCurrentSong(index = currentSongIndex) {
	console.log('Loading song at index:', index );

	// Get data for current song. 
	// currentSongIndex = index;
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

		// Load album art into player. 
		let albumartlink = songToLoad.albumartlink;
		albumartbox.innerHTML = albumartlink ? `
		<!-- albumart -->
		<img class="albumart" src="${albumartlink}">
		<!-- /albumart -->` : '';
	}

	// Update highlighted song in playlist. 
	function updatePlaylistSelection() {

		// Get all song items. 
		const allSongItems = document.querySelectorAll('div#container aside.playlist ul.songlist li.songitem');
		// console.log(allSongItems);
		
		// Go thru all song items to refresh highlight state. 
		for(let songitem of allSongItems) {
			
			// Get song link. 
			let songlink = songitem.querySelector('a.songlink');
			// console.log(songlink);

			// Get index from song link. 
			let index = 1 * songlink.getAttribute('data-songindex');
			// console.log(index,songitem);

			// Highlight song if it matches selection. 
			if(index==currentSongIndex) songitem.classList.add('active');

			// Otherwise, un-highlight song. 
			else songitem.classList.remove('active');
		}
	}
}

