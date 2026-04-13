


// Display fullscreen state in video player. 
function displayFullscreenState() {
	
	// Check if video player currently in fullscreen mode. 
	let infullscreenmode = checkFullscreenState();

	// Proceed if currently in fullscreen mode. 
	if(infullscreenmode) {

		// Enter fullscreen mode. 
		vidplayer['box'].classList.add('full');
	}

	// Proceed if not currently in fullscreen mode. 
	else {

		// Reset scroll level of video shield (before exiting fullscreen mode). 
		resetVideoShield();

		// Exit fullscreen mode. 
		vidplayer['box'].classList.remove('full');
	}
}
// Toggle fullscreen state of video player. 
function toggleFullscreenState(/* desiredstate=null */) {
	// console.log('desiredstate:',desiredstate);

	// // Check if desired state defined. 
	// let desiredstatedefined = !isNaN( desiredstate );
	// // Proceed if desired state defined. 
	// if( desiredstatedefined ) {
	// 	if(desiredstate==0) exitFullscreenMode();
	// 	return;
	// }

	// Check if video player currently in fullscreen mode. 
	let infullscreenmode = checkFullscreenState();

	// Exit fullscreen mode (if already in). 
	if(infullscreenmode) exitFullscreenMode( vidplayer['box'] );

	// Enter fullscreen mode (if not already in). 
	else enterFullscreenMode( vidplayer['box'] );

	/****/

	// Enter fullscreen mode. 
	function enterFullscreenMode(box) {
		// console.log( );
		// checkFullscreenState();


		// Enter fullscreen mode. 
		if(box.requestFullscreen) {
			box.requestFullscreen();
			console.log('Entering fullscreen mode...');
		}
		else if(box.webkitRequestFullscreen) {
			box.webkitRequestFullscreen();
			console.log('Entering fullscreen mode (webkit)...');
		}
		else if(box.msRequestFullscreen) {
			box.msRequestFullscreen();
			console.log('Entering fullscreen mode (MS)...');
		}
		else console.log('Entering fullscreen mode not available...');
	}

	// Exit fullscreen mode. 
	function exitFullscreenMode() {
		// console.log( );
		// checkFullscreenState();


		// Reset scroll level of video shield (before exiting fullscreen mode). 
		resetVideoShield();

		// Exit fullscreen mode. 
		if(document.exitFullscreen) {
			document.exitFullscreen();
			console.log('Exiting fullscreen mode...');
		}
		else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
			console.log('Exiting fullscreen mode (webkit)...');
		}
		else if(document.msExitFullscreen) {
			document.msExitFullscreen();
			console.log('Exiting fullscreen mode (MS)...');
		}
		else console.log('Exiting fullscreen mode not available...');
	}
}
// Reset scroll level of video shield. 
function resetVideoShield() {
	// console.log('Now resetting video shield:',vidplayer['vidshield'].scrollTop);
	vidplayer['vidshield'].scrollTop = 0;
	// console.log('Video shield reset:',vidplayer['vidshield'].scrollTop);
}

// Check fullscreen state of video player. 
function checkFullscreenState() {

	// Check fullscreen state of video player. 
	let infullscreenmode = !!( document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement );
	// console.log('Fullscreen mode:',infullscreenmode);

	// Return fullscreen state of video player. 
	return infullscreenmode;
}
