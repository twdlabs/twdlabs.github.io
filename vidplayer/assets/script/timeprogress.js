


// Display video time progress in video player. 
function updateTimeProgress() {

	// Get full duration of video. 
	let videodurationtime = vidplayer['vid'].duration;
	// console.log('Video duration time:',videodurationtime);

	// Get elapsed time thru video. 
	let videoelapsedtime = vidplayer['vid'].currentTime;
	// console.log('Video elapsed time:',videoelapsedtime);

	// Get time remaining in video. 
	let videoremaintime = videodurationtime - videoelapsedtime;
	// console.log('Video remain time:',videoremaintime);

	// Display video timestamp. 
	displayVideoTime();

	// Display video progress. 
	displayVideoProgress();

	/****/

	// Display video timestamp. 
	function displayVideoTime() {

		// Display time remaining in control bar timer. 
		vidplayer['leftpanetimer']['remain'].textContent = createDisplayTime(videoremaintime);

		// Display time elapsed in control bar timer. 
		vidplayer['leftpanetimer']['elapsed'].textContent = createDisplayTime(videoelapsedtime);

		// Display video duration in control bar timer. 
		vidplayer['leftpanetimer']['duration'].textContent = createDisplayTime(videodurationtime);
	}

	// Display video progress. 
	function displayVideoProgress() {

		// Define assumed progress proportion of video. 
		const defaultprogressvalue = 1;

		// Get proportion of video progress. 
		let videoprogressproportion = ( videoelapsedtime / videodurationtime );
		videoprogressproportion = videoprogressproportion ? videoprogressproportion : defaultprogressvalue ;
		// console.log('Video progress proportion:',videoprogressproportion);

		// Display progress amount in progress bar. 
		vidplayer['progressbar']['progress'].style.setProperty( '--currentprogresspercent' , `${ (videoprogressproportion*100).toFixed(3) }%` );
	}
}

// Reset video progress in video player. 
function resetVideoProgress() {

	// Display time remaining in control bar timer. 
	vidplayer['leftpanetimer']['remain'].textContent = createDisplayTime(0);
	// Display time elapsed in control bar timer. 
	vidplayer['leftpanetimer']['elapsed'].textContent = createDisplayTime(0);
	// Display video duration in control bar timer. 
	vidplayer['leftpanetimer']['duration'].textContent = createDisplayTime(0);

	// Display progress amount in progress bar. 
	vidplayer['progressbar']['progress'].style.removeProperty( '--currentprogresspercent' );
	// vidplayer['progressbar']['progress'].style.setProperty( '--currentprogresspercent' , `0%` );
}

// Toggle mode of time button. 
function toggleTimeBtn() {
	vidplayer['leftpanetimer']['btn'].classList.toggle('r');
}

// Change current video time by given amount. 
function jumpVideoTime(dt) {
	vidplayer['vid'].currentTime += dt;
}

// Jump to specific point in video. 
function jumpToVideoPoint(event) {
	// console.log('event:',event);

	// Get bounds of progress bar. 
	let progressbarbounds = vidplayer['progressbar']['bar'].getBoundingClientRect();
	// console.log('Full bar:',progressbarbounds);
	// Get full length of progress bar (duration of video). 
	let fullbarlength = progressbarbounds['width'];
	// console.log('Full bar length (X):',fullbarlength);
	// Get minimum position on progress bar. 
	let leftminX = progressbarbounds['left'];
	// console.log('Left minimum:',leftminX);
	// Get maximum position on progress bar. 
	// let rightmaxX = progressbarbounds['right'];
	// console.log('Right maximum:',rightmaxX);

	// Get proportion for new position in video. 
	let selectedproportion = ( event.x - leftminX ) / fullbarlength ;
	// console.log('Selected progress percent:', `${ (selectedproportion*100).toFixed(5) }%` );
	// Jump to selected proportion in video progress. 
	jumpToVideoPercent(selectedproportion);
}

// Jump to specific proportion in video progress. 
function jumpToVideoPercent(newproportion) {
	// console.log('New proportion:',newproportion);

	// Disregard non-numeric proportion values. 
	if( isNaN(newproportion) ) return;

	// Get full duration of video. 
	let videodurationtime = vidplayer['vid'].duration;
	// console.log('Video duration:',videodurationtime);
	// Disregard time jump if no valid video duration. 
	if( isNaN(videodurationtime) ) return;

	// Get desired elapsed time for video. 
	let desiredelapsedtime = newproportion * videodurationtime;
	// console.log('Selected elapsed time',desiredelapsedtime);

	// Apply desired elapsed time to video. 
	vidplayer['vid'].currentTime = desiredelapsedtime;
}

// Set position and visibility of time bubble. 
function setTimeBubble(event) {
	// console.log('Mouse event:',event);
	// console.log('Mouse event location:',event.target);

	// Get bounds of progress bar. 
	let progressbarbounds = vidplayer['progressbar']['bar'].getBoundingClientRect();
	// Get width of progress bar. 
	let fullbarsize = progressbarbounds.width;
	// Get width of progress selection. 
	let progressselectsize = event.x - progressbarbounds.left;
	// Get proportion of seek progress (based on mouse position). 
	let progressselectproportion = ( progressselectsize / fullbarsize ) ;
	// console.log('Progress selected (proportion):',progressselectproportion);
	// Apply percentage to time bubble. 
	vidplayer['progressbar']['timebubble']['box'].style.setProperty( '--seekprogresspercent' , `${ (100*progressselectproportion).toFixed(3) }%` );

	// Get full duration of video. 
	let videodurationtime = vidplayer['vid'].duration;
	// console.log('Video duration:',videodurationtime);
	// Disregard time bubble if no valid video duration. 
	if( isNaN(videodurationtime) ) return;

	// Get selected position in video (in seconds). 
	let progressselectposition = progressselectproportion * videodurationtime;
	// console.log('Progress selected position (sec):',progressselectposition);

	// Apply percentage to time bubble. 
	vidplayer['progressbar']['timebubble']['time'].textContent = createDisplayTime( progressselectposition );

	// Display preview in time bubble. 
	showPreview(progressselectposition);

	/****/

	// Display preview in time bubble. 
	function showPreview(framecapturetime) {
		clearTimeout( vidplayer['progressbar']['timebubble']['capturetimer'] );

		// Get frame capture video. 
		let v = vidplayer['ghostvid'];

		// Display preview frame when time updated. 
		v.addEventListener('seeked',displayPreviewFrame);

		// Update time on frame capture video. 
		v.currentTime = framecapturetime;

		// Display preview frame in time bubble. 
		function displayPreviewFrame() {

			// Get canvas. 
			let c = vidplayer['progressbar']['timebubble']['capture'];
			// Get canvas paint brush. 
			let paintbrush = c.getContext('2d');

			// Display frame capture in time bubble. 
			c.width = v.videoWidth;
			c.height = v.videoHeight;
			// vidplayer['progressbar']['timebubble']['capturetimer'] = setTimeout( 
			// function(){
				paintbrush.drawImage( v , 0 , 0 );
			// } , 250 );

			// 
			v.removeEventListener('seeked',displayPreviewFrame);
		}
	}
}

// Convert seconds count to displayable time (minnutes and seconds). 
function createDisplayTime(totalseconds) {
	// console.log('totalseconds',totalseconds);

	// Regulate number of seconds (assert integer). 
	totalseconds = totalseconds ? Math.ceil(1*totalseconds) : 0 ;
	// console.log('totalseconds',totalseconds);

	// Get regulated number of hours. 
	let reghrs = Math.floor( totalseconds/60/60 );
	totalseconds -= reghrs*60*60;

	// Get regulated number of minutes. 
	let regmin = Math.floor( totalseconds / 60 );
	totalseconds -= regmin*60;
	regmin = ( regmin<10 && reghrs ) ? `0${regmin}` : regmin ;

	// Get regulated number of seconds. 
	let regsec = Math.ceil( totalseconds );
	regsec = (regsec<10) ? `0${regsec}` : regsec ;

	// 
	return reghrs ? `${reghrs}:${regmin}:${regsec}` : `${regmin}:${regsec}`;
	// return `0:${Math.ceil(1*totalseconds)}`;
}
