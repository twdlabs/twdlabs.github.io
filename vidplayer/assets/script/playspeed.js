


// Decrease video play speed. 
function decrPlaySpeed() {
	shiftPlaySpeed(-1);
}
// Increase video play speed. 
function incrPlaySpeed() {
	shiftPlaySpeed(+1);
}
// Reset play speed back to normal. 
function revertPlaySpeed() {
	sessionStorage.removeItem('videoplayspeedindex');
}
// Shift play speed index of video player by given amount. 
function shiftPlaySpeed(dindex) {

	// Get index of previous play speed. 
	let prevplayspeedindex = 1 * getSavedPlaySpeed();
	// let prevplayspeedindex = vidplayer['playspeeds'].indexOf(prevplayspeed);
	// Calculate index for new play speed. 
	let newplayspeedindex = prevplayspeedindex + dindex;
	// Disregard new index if out of range. 
	if( newplayspeedindex < 0 || newplayspeedindex >= vidplayer['playspeeds'].length ) return;
	// Save index of new play speed. 
	savePlaySpeed(newplayspeedindex);

	// Get value of new play speed. 
	let newplayspeed = vidplayer['playspeeds'][newplayspeedindex];

	// Apply new play speed to video. 
	vidplayer['vid'].playbackRate = newplayspeed;

	/****/

	// Get index of previous play speed. 
	function getSavedPlaySpeed() {

		// Retrieve previously saved play speed from storage. 
		let prevplayspeedindex = sessionStorage.getItem('videoplayspeedindex') ?? 4;
		let prevplayspeed = vidplayer['playspeeds'][prevplayspeedindex] * 1;
		// prevplayspeed = prevplayspeed ?? 1;
		console.log('Saved play speed (old):',`${ prevplayspeedindex }: ${ prevplayspeed }`);

		// Return current play speed. 
		return prevplayspeedindex;
	}

	// Save new play speed for video player. 
	function savePlaySpeed(newplayspeedindex) {
		let newplayspeed = vidplayer['playspeeds'][newplayspeedindex] * 1;
		console.log('Saving new play speed:',`${ newplayspeedindex }: ${ newplayspeed }`);

		// Save new play speed to storage. 
		return sessionStorage.setItem('videoplayspeedindex',newplayspeedindex);
	}
}
// Display video play speed. 
function displayPlaySpeed() {

	// Get display-ready speed. 
	let displayspeed = vidplayer['vid'].playbackRate;
	displayspeed = (displayspeed!=1) ? displayspeed : 'Normal';

	// Display speed. 
	vidplayer['screenboxplayspeedcaption'].textContent = displayspeed;
	vidplayer['settingspaneplayspeedcaption'].textContent = displayspeed;
}
