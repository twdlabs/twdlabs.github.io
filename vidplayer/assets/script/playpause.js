


// Display new play state in video player (based on video play state). 
function displayPlayState() {
	console.log('Displaying new play state...');

	// Check if video paused. 
	let videopaused = vidplayer['vid'].paused;
	// Check if video completed. 
	let videocompleted = vidplayer['vid'].ended;

	// Update play state of video player. 
	if( videocompleted ) {
		vidplayer['box'].classList.remove('run');
		vidplayer['box'].classList.add('done');
	}
	else if( videopaused ) {
		vidplayer['box'].classList.remove('run');
		vidplayer['box'].classList.remove('done');
	}
	else {
		vidplayer['box'].classList.add('run');
		vidplayer['box'].classList.remove('done');
	}
}

// Toggle play state of video player. 
function togglePlayState() {

	// Check if video currently playing. 
	let videocurrentlypaused = vidplayer['vid'].paused;

	// Proceed if currently paused. 
	if( videocurrentlypaused ) {

		// Play video. 
		vidplayer['vid'].play();

		// Update play state of video player. 
		vidplayer['box'].classList.remove('done');
		vidplayer['box'].classList.add('run');
	}

	// Proceed if currently playing. 
	else {

		// Pause video. 
		vidplayer['vid'].pause();

		// Update play state of video player. 
		vidplayer['box'].classList.remove('run');
		vidplayer['box'].classList.remove('done');
	}
}


// Toggle loop state of video player. 
function toggleLoopState() {

	// Get old loop state. 
	let oldloopstate = vidplayer['looptogglecheckbox'].checked;
	// Get new loop state. 
	let newloopstate = !oldloopstate;

	// Display new loop state to player. 
	vidplayer['looptogglecheckbox'].checked = newloopstate;
	// Apply new loop state to video. 
	applyLoopState(newloopstate);
}

// Apply given loop state to video player. 
function applyLoopState(givenloopstate) {

	// Get new loop state. 
	let newloopstate = givenloopstate ?? ( vidplayer['looptogglecheckbox'].checked );
	// console.log('New loop state:',newloopstate);

	// Apply loop state to video player box. 
	if(newloopstate) vidplayer['box'].classList.add('loop');
	else vidplayer['box'].classList.remove('loop');
	// Apply loop state to video player video. 
	vidplayer['vid'].loop = newloopstate;
	// Apply loop state to video player state manager. 
	vidplayer['looptogglecheckbox'].checked = newloopstate;
}

// Apply loop state to video player. 
function revertLoopState() {
	applyLoopState(false);
}
