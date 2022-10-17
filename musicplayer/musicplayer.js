


// Initialize player state. 
let playerIsLoaded = false;

// Initialize play watcher. 
let playWatcherId = undefined;
// Define interval of play watcher (in milliseconds). 
let playWatcherPeriod = 100;

// Initialize index of current song. 
let currentSongIndex = 0;

// Initialize player speed. 
let currentPlayerSpeed = 1.0;

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
// Get overflow menu. 
const overflowmenu = document.querySelector('div#container main.player div.overflowmenu');

// Get metadata boxes: album art, song title, artist name, album name. 
const albumartbox = document.querySelector('div#container main.player div.songdata.albumart');
const songtitlebox = document.querySelector('div#container main.player div.songdata.songtitle');
const artistnamebox = document.querySelector('div#container main.player div.songdata.artistname');
const albumnamebox = document.querySelector('div#container main.player div.songdata.albumname');

// Get control buttons: play, skip back, skip forward, repeat toggler, playlist toggler. 
const playbtn = document.querySelector('div#container main.player div.btn.playbtn');
const backbtn = document.querySelector('div#container main.player div.btn.backbtn');
const fwdbtn = document.querySelector('div#container main.player div.btn.fwdbtn');
const repeatbtn = document.querySelector('div#container main.player div.btn.repeatbtn');
const shufflebtn = document.querySelector('div#container main.player div.btn.repeatbtn');
const playlistbtn = document.querySelector('div#container main.player div.btn.playlistbtn');
const speedbtn = document.querySelector('div#container main.player div.btn.speedbtn');
const speedbtncaption = document.querySelector('div#container main.player div.btn.speedbtn span.caption');

// Get song progress bars. 
const songprogressbar = document.querySelector('div#container main.player div.bar.seekbar');
const songprogressball = document.querySelector('div#container main.player div.bar.seekbar div.ball');
const songprogressslider = document.querySelector('div#container main.player input.slider.seekbar');

// Get volume level bars. 
const volumelevelbar = document.querySelector('div#container main.player div.bar.volumebar');
const volumelevelball = document.querySelector('div#container main.player div.bar.volumebar div.ball');
const volumelevelslider = document.querySelector('div#container main.player input.slider.volumebar');



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
	albumartbox.addEventListener('click',togglePlayState);
	playbtn.addEventListener('click',togglePlayState);
	backbtn.addEventListener('click',skipBack);
	fwdbtn.addEventListener('click',skipFwd);
	// Activate music player buttons. 
	speedbtn.addEventListener('click',togglePlayerSpeed);
	repeatbtn.addEventListener('click',toggleRepeatState);
	shufflebtn.addEventListener('click',toggleShuffleState);
	playlistbtn.addEventListener('click',togglePlaylistState);

	// Make player automatically move to next song upon song end. 
	songAudio.addEventListener('ended',uponSongEnd);

	// Activate song progress bar: Set song progress when clicked/changed. 
	songprogressslider.addEventListener('input',function(event) {
		// Get new value. 
		let newValue = event.currentTarget.value;
		console.log('New value:',newValue,event);
		// Set new value. 
		setSongProgress(newValue);
	});
	// songprogressbar.addEventListener('click',function(event) {
	// 	// TODO: Get new value (based on click location). 
	// 	// let newValue = xyz;
	// 	console.log('New value:',newValue,event);
	// 	// Set new value. 
	// 	setSongProgress(newValue);
	// });

	// Activate volume level bar: Set volume level when clicked/changed. 
	volumelevelslider.addEventListener('input',function(event) {
		// Get new value. 
		let newValue = event.currentTarget.value;
		console.log('New value:',newValue,event);
		// Set new value. 
		setVolumeLevel(newValue);
	});
	// volumelevelbar.addEventListener('click',function(event) {
	// 	// TODO: Get new value (based on click location). 
	// 	// let newValue = xyz;
	// 	console.log('New value:',newValue,event);
	// 	// Set new value. 
	// 	setVolumeLevel(newValue);
	// });

	
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

		// Get timestamp boxes. 
		const timeA = document.querySelector('div#container main.player span.timestamp.timeA');
		const timeB = document.querySelector('div#container main.player span.timestamp.timeB');
		
		// Get song progress. 
		let songProgress = 100 * ( songAudio.currentTime / songAudio.duration );
		// console.log('Updating song progress:',songProgress);
		
		// Set song progress to bar. 
		songprogressbar.style.setProperty('--fillage',`${ songProgress }%`);
		// Set song progress to slider. 
		songprogressslider.value = (songProgress);

		// Show corresponding timestamps. 
		showTimestamps();

		/***/

		// Show current timestamp. 
		function showTimestamps() {

			// Get elapsed time. 
			let timeElapsed = formatTime(songAudio.currentTime);			
			// Get remaining time. 
			let timeRemaining = '-' + formatTime(songAudio.duration - songAudio.currentTime);
			// Get song duration. 
			let songLength = formatTime(songAudio.duration);
			console.log('\tTimer\t\t',timeElapsed,'/',songLength,'\t',timeRemaining,'/',songLength);

			// Show elapsed time. 
			timeA.innerHTML = timeElapsed;
			// console.log('Time elapsed:',timeElapsed,'/',songLength);
			
			// Show remaining time. 
			timeB.innerHTML = timeRemaining;
			// console.log('Time remaining:',timeRemaining,'/',songLength);
			
			// Show song duration. 
			// timeB.innerHTML = songLength;
			// console.log("Song length:",songLength);
			
			/**/

			// Format time (minutes and seconds). 
			function formatTime(totalNumSeconds) {

				// Set number of decimal places for seconds format. 
				let numDecimalPlaces = 0;

				// Separate numbers of minutes and seconds. 
				let min = (totalNumSeconds / 60).toFixed(0);
				let sec = (totalNumSeconds % 60).toFixed(numDecimalPlaces);

				// Return result. 
				return `${ min }:${ ( sec<10 ) ? ( '0'+sec ) : ( sec ) }`;
			}
		}
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

		// Start play watcher upon play (if not already running). 
		if(playWatcherId==null) startPlayWatcher();

		console.log('Now playing...');

		/***/

		// Start play watcher. 
		function startPlayWatcher() {
			showSongProgress();
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
			let a = currentSongIndex;
			// console.log('Current song index (before):',currentSongIndex);

			// Increment current song index. 
			currentSongIndex -= 1;
			let b = currentSongIndex;
			// console.log('Current song index (during):',currentSongIndex);
			
			// Ensure song index within range. 
			if(currentSongIndex<0) {

				// Check if current repeat state indicates list repeat. 
				let repeatListOn = (currentRepeatState===1);
				
				// Go back to tail of circular list if 'repeat list' selected. 
				if(repeatListOn) currentSongIndex = songdata.length - 1;

				// Remain on first song if 'repeat list' not selected
				else currentSongIndex = 0;
			}
			let c = currentSongIndex;
			// console.log('Current song index (after):',currentSongIndex);

			console.log('Current song index:',`${a} –> ${b} –> ${c}`);

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
			let a = currentSongIndex;
			// console.log('Current song index (before):',currentSongIndex);
			
			// Increment current song index. 
			currentSongIndex += 1;
			let b = currentSongIndex;
			// console.log('Current song index (during):',currentSongIndex);
			
			// Ensure song index within range (modulus [length]). 
			currentSongIndex %= songdata.length;
			let c = currentSongIndex;
			// console.log('Current song index (after):',currentSongIndex);

			console.log('Current song index:',`${a} –> ${b} –> ${c}`);

			// Load new song into music player. 
			loadCurrentSong();
		}
	}
	// Take action upon end of song. 
	function uponSongEnd() {
		
		// Check if repeat state indicates song repeat. 
		let repeatSongOn = currentRepeatState===2;

		// Play same song if song repeat is on. 
		if(repeatSongOn) {
			// Play current song. 
			playSong();
		}
		// Otherwise: Skip forward to next song. 
		else {
			// TODO: Do more here to overcome unintended nexting. 
			// Skip forward to next song. 
			skipFwd();
		}
	}

	// Toggle player speed. 
	function togglePlayerSpeed() {

		// Get pre-value. 
		let prevalue = currentPlayerSpeed;

		// Increment play speed. 
		currentPlayerSpeed += 0.5;

		// Ensure play speed is within range. 
		if(currentPlayerSpeed>2.0) currentPlayerSpeed %= 2.0;

		// Get post-value. 
		let postvalue = currentPlayerSpeed;

		console.log('Changing player speed',prevalue,postvalue);

		// Update caption on speed button. 
		speedbtncaption.innerHTML = currentPlayerSpeed.toFixed(1);

		// Update speed on song audio. 
		songAudio.playbackRate = currentPlayerSpeed;
	}
	// Toggle shuffle state. 
	function toggleShuffleState() {
		// Check current shuffle state. 
		let shuffleon = gencontainer.classList.contains('shuffle');

		if(shuffleon) {
			// TODO: Revert to original playlist order. 
			// Change shuffle state. 
			gencontainer.classList.remove('shuffle');
		}
		else {
			// TODO: Scramble playlistin random order. 
			// Change shuffle state. 
			gencontainer.classList.add('shuffle');
		}
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

	// // TODO: Increase volume (by 1/16 of capacity). 
	// function incrVolume() {

	// 	// Get current volume level. 
	// 	let currentVolumeLevel = volumelevelslider.value;
	// 	console.log('Current volume level:',currentVolumeLevel);

	// 	// Update current volume level. 
	// 	// currentVolumeLevel += ;
		
	// 	// Show new volume level. 
	// 	// volumelevelslider.value = currentVolumeLevel;
	// }

	// // TODO: Decrease volume (by 1/16 of capacity). 
	// function decrVolume() {

	// 	// Get current volume level. 
	// 	let currentVolumeLevel = volumelevelslider.value;
	// 	console.log('Current volume level:',currentVolumeLevel);

	// 	// Update current volume level. 
	// 	// currentVolumeLevel += ;
		
	// 	// Show new volume level. 
	// 	// volumelevelslider.value = currentVolumeLevel;
	// }

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
		// if(isUpArrow) incrVolume();
		// Down arrow: Decrease volume. 
		// if(isDownArrow) decrVolume();
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

