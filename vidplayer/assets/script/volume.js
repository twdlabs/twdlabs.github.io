


// Display volume state in video player. 
function displayVolumeState() {
	// console.log('Now muted:',vidplayer['vid'].muted);
	// console.log('Current volume:',vidplayer['vid'].volume);

	// Display volume in settings pane. 
	let displayvolume = ( 100*vidplayer['vid'].volume ).toFixed(0);
	vidplayer['settingspanevolumelevelcaption'].textContent = `${ displayvolume }%`;

	// Proceed if volume currently muted. 
	if( vidplayer['vid'].muted /* || vidplayer['vid'].volume==0 */ ) {
		// console.log('Volume now muted');

		// Update volume state. 
		vidplayer['box'].classList.add('mute');
		vidplayer['box'].classList.remove('loud');
	}

	// Proceed if volume currently louder. 
	else if( vidplayer['vid'].volume > .5 ) {
		// console.log('Volume now louder');

		// Update volume state. 
		vidplayer['box'].classList.add('loud');
		vidplayer['box'].classList.remove('mute');
	}

	// Proceed if volume somewhere in-between. 
	else {
		// console.log('Volume now lower');

		// Update volume state. 
		vidplayer['box'].classList.remove('mute');
		vidplayer['box'].classList.remove('loud');
	}
}

// Toggle volume state of video player. 
function toggleVolumeState() {

	// Proceed if currently muted. 
	if( vidplayer['vid'].muted ) {

		// Unmute video. 
		vidplayer['vid'].muted = false;
	}

	// Proceed if not currently muted. 
	else {

		// Mute video. 
		vidplayer['vid'].muted = true;
	}
}

// Change volume level of video by given amount. 
function incrVideoVolume(dvol) {
	// console.log('Change in volume level:',dvol);

	// Get previous volume level. 
	let oldvolume = vidplayer['vid'].volume;
	// console.log('Old volume level:',oldvolume);

	// Calculate new volume level. 
	let newvolume = calculateNewVolumeLevel();
	
	// Apply new volume level to vid player. 
	vidplayer['vid'].volume = newvolume;
	// console.log('New volume level:',newvolume,vidplayer['vid'].volume);

	// Update volume state of video player. 
	displayVolumeState();

	/****/

	// Calculate new volume level. 
	function calculateNewVolumeLevel() {

		// Define minimum volume level. 
		const minvolume = .05;
		// Define maximum volume level. 
		const maxvolume = 1;

		// Initialize new volume level. 
		let newvolume = ( oldvolume + dvol ).toFixed(3);

		// Calculate new volume level. 
		if( newvolume < minvolume ) {
			newvolume = minvolume;
		}
		else if( newvolume > maxvolume ) {
			newvolume = maxvolume;
		}

		// Return new volume level. 
		return newvolume;
	}
}
