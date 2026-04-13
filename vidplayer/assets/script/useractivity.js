



// Initialize video player. 
startVidPlayer();


/*****/


// Initialize video player. 
function startVidPlayer() {


	// Display new video progress when it changes. 
	vidplayer['vid'].addEventListener('loadstart',revertPlaySpeed);
	vidplayer['vid'].addEventListener('loadstart',resetVideoProgress);
	vidplayer['vid'].addEventListener('durationchange',updateTimeProgress);
	vidplayer['vid'].addEventListener('timeupdate',updateTimeProgress);
	// Display new video speed when it changes. 
	vidplayer['vid'].addEventListener('ratechange',displayPlaySpeed);
	// Display new video volume when it changes. 
	vidplayer['vid'].addEventListener('volumechange',displayVolumeState);
	// Update play state when video completed. 
	vidplayer['vid'].addEventListener('play',displayPlayState);
	vidplayer['vid'].addEventListener('pause',displayPlayState);
	// vidplayer['vid'].addEventListener('ended',displayPlayState);
	// Hide video suggestion wall when video playing. 
	// vidplayer['vid'].addEventListener('play',hideVideoWall);
	// vidplayer['vid'].addEventListener('playing',hideVideoWall);
	// Display video suggestion wall when video completed. 
	// vidplayer['vid'].addEventListener('ended',displayVideoWall);
	vidplayer['vid'].addEventListener('loadstart',resetVidPlayer);

	// Display message when video starts loading. 
	// vidplayer['vid'].addEventListener( 'loadstart' , function(){ updateActivityLog('Starting to load video...') } );
	// vidplayer['vid'].addEventListener( 'waiting' , function(){ updateActivityLog('Content waiting...') } );
	// Close message when video finished loading. 
	// vidplayer['vid'].addEventListener( 'canplay' , function(){ updateActivityLog('Able to play') } );
	// vidplayer['vid'].addEventListener( 'canplaythrough' , function(){ updateActivityLog('Able to play thru') } );
	// vidplayer['vid'].addEventListener( 'play' , function(){ updateActivityLog('Play command') } );
	// vidplayer['vid'].addEventListener( 'playing' , function(){ updateActivityLog('Now playing...') } );
	// vidplayer['vid'].addEventListener( 'durationchange' , function(){ updateActivityLog('Duration changed...') } );

	// Display new fullscreen state when it changes. 
	vidplayer['box'].addEventListener('fullscreenchange',displayFullscreenState);
	vidplayer['box'].addEventListener('msfullscreenchange',displayFullscreenState);
	vidplayer['box'].addEventListener('mozfullscreenchange',displayFullscreenState);
	vidplayer['box'].addEventListener('webkitfullscreenchange',displayFullscreenState);


	// Activate play button. 
	vidplayer['vid'].addEventListener('click',togglePlayState);
	vidplayer['leftpaneplaybtn'].addEventListener('click',togglePlayState);
	// vidplayer['vidcontrolscreen']['screen'].addEventListener('click',togglePlayState);
	// Activate time button. 
	vidplayer['leftpanetimer']['btn'].addEventListener('click',toggleTimeBtn);
	// Activate volume button. 
	vidplayer['leftpanevolumebtn'].addEventListener('click',toggleVolumeState);
	// Activate speed button. 
	vidplayer['speedbtn'].addEventListener('click',toggleSpeedPane);
	// Activate settings button. 
	vidplayer['settingsbtn'].addEventListener('click',toggleSettingsPane);
	// Activate fullscreen button. 
	vidplayer['vid'].addEventListener('dblclick',toggleFullscreenState);
	vidplayer['fullscreentogglebtn'].addEventListener('click',toggleFullscreenState);
	vidplayer['vidcontrolscreen']['screen'].addEventListener('dblclick',toggleFullscreenState);
	// Activate loop toggle. 
	vidplayer['loopbtn'].addEventListener('click',toggleLoopState);
	// vidplayer['looptogglecheckbox'].addEventListener('input',applyLoopState);

	// Activate progress bar. 
	vidplayer['progressbar']['bar'].addEventListener('click',jumpToVideoPoint);
	// vidplayer['progressbar']['bar'].addEventListener('mouseenter',setTimeBubble);
	// vidplayer['progressbar']['bar'].addEventListener('mouseleave',setTimeBubble);
	// vidplayer['progressbar']['bar'].addEventListener('mouseover',setTimeBubble);
	// vidplayer['progressbar']['bar'].addEventListener('mouseout',setTimeBubble);
	vidplayer['progressbar']['bar'].addEventListener('mousemove',setTimeBubble);
	// Activate skipper fields. 
	vidplayer['vidcontrolscreen']['screen'].addEventListener('contextmenu',goThruControlScreen);
	vidplayer['vidcontrolscreen']['leftfield'].addEventListener('dblclick', function(){ jumpVideoTime(-15); });
	vidplayer['vidcontrolscreen']['rightfield'].addEventListener('dblclick', function(){ jumpVideoTime(+15); });


	// Activate custom controller. 
	confirmController();
	// Maintain use of custom controller. 
	vidplayer['vid'].addEventListener('play',confirmController);
	vidplayer['vid'].addEventListener('pause',confirmController);
	vidplayer['vid'].addEventListener('ended',confirmController);


	// Activate click dispatcher. 
	document.addEventListener('click',dispatchVidPlayerClick);
	// Activate hot keys (with key press dispatcher). 
	document.addEventListener('keydown',dispatchVidPlayerKeyPress);


	// Activate video loader field. 
	vidplayer['vidloader']['loadbtn'].addEventListener('click',selectNewVideo);
	vidplayer['vidloader']['linkfield'].addEventListener('keyup', function(event) {
		// console.log(event);
		if( event.key && event.key=="Enter" ) selectNewVideo();
	} );
	// Note: When pasting, its loading the prev url from before pasting (value extraction from input field is happening before value is updated with newly pasted value -- some form of time delay needed to re-validate this)
	// vidplayer['vidloader']['linkfield'].addEventListener('paste',selectNewVideo);


	// Reset video player to original state. 
	resetVidPlayer();

	// Select new video (if present in text field). 
	selectNewVideo();
	// setTimeout( function(){ selectNewVideo(); } , 1000 );


	/****/


	// Reset video player to original state. 
	function resetVidPlayer() {
		console.log('Refreshing video player to original state...');

		// Display accurate play state of video player. 
		displayPlayState();

		// Display accurate volume state of video player. 
		displayVolumeState();

		// Display accurate fullscreen state of video player (off). 
		displayFullscreenState();

		// Display accurate video time progress in video player (0:00). 
		updateTimeProgress();

		// Reset play speed of video player. 
		revertPlaySpeed();

		// Display accurate loop state of video player (off). 
		revertLoopState();
	}

	// Dispatch mouse click inside video player window. 
	function dispatchVidPlayerClick( event ) {
		console.log('Dispatching mouse click in video player window...');
		// console.log('event:',event);

		// Get clicked element. 
		let clickedelement = event.target;
		// console.log('Clicked element:',clickedelement);

		// Check if clicked inside settings btn. 
		let clickedsettingsbtn = vidplayer['speedbtn'].contains(clickedelement) || vidplayer['settingsbtn'].contains(clickedelement);
		// console.log('Clicked inside settings btn:',clickedsettingsbtn);
		// Check if clicked inside settings pane. 
		let clickedsettingspane = vidplayer['speedpane'].contains(clickedelement) || vidplayer['settingspane'].contains(clickedelement);
		// console.log('Clicked inside settings pane:',clickedsettingspane);

		// Close all settings panes if clicked outside. 
		if( !( clickedsettingsbtn || clickedsettingspane ) /* && isSettingsPaneOpen() */ ) closeAllSettingsPanes();
	}

	// Dispatch key press inside video player window. 
	function dispatchVidPlayerKeyPress( event ) {
		console.log('Dispatching key press in video player window...');
		// console.log('Keyboard event:',event);
		// console.log('Keyboard event location:',event.target);

		// Disregard if composing in input field. 
		let usercomposinginput = event.target.tagName=='INPUT' || event.target.tagName=='TEXTAREA' || document.activeElement.tagName=='INPUT' || document.activeElement.tagName=='TEXTAREA';
		if( usercomposinginput ) return;
		// Disregard complex key strokes and composing key presses. 
		if( event.ctrlKey || event.metaKey || event.altKey ) return;

		// Override default key response behavior. 
		event.preventDefault();

		// Get selected key. 
		let selectedkey = event.key;
		let selectedkeycode = event.code;
		// console.log('selectedkey:',selectedkey,selectedkeycode);
		console.log(`selectedkey: ${selectedkey} (${selectedkeycode})`);

		// Respond to key press: "Spacebar". 
		if( selectedkey==' ' || selectedkeycode=='Space' )  togglePlayState();

		// Respond to key press: "J". 
		else if( selectedkey=='j' || selectedkey=='J' || selectedkeycode=='KeyJ' )  jumpVideoTime(-10);
		// Respond to key press: "K". 
		else if( selectedkey=='k' || selectedkey=='K' || selectedkeycode=='KeyK' )  togglePlayState();
		// Respond to key press: "L". 
		else if( selectedkey=='l' || selectedkey=='L' || selectedkeycode=='KeyL' )  jumpVideoTime(+10);

		// Respond to key press: "←". 
		else if( selectedkey=='ArrowLeft' || selectedkeycode=='ArrowLeft' )  jumpVideoTime(-5);
		// Respond to key press: "→". 
		else if( selectedkey=='ArrowRight' || selectedkeycode=='ArrowRight' )  jumpVideoTime(+5);

		// Respond to key press: "R". 
		else if( selectedkey=='r' || selectedkey=='R' || selectedkeycode=='KeyR' )  toggleLoopState();

		// Respond to key press: "M". 
		else if( selectedkey=='m' || selectedkey=='M' || selectedkeycode=='KeyM' )  toggleVolumeState();

		// Respond to key press: "F". 
		else if( selectedkey=='f' || selectedkey=='F' || selectedkeycode=='KeyF' )  toggleFullscreenState();
		// Respond to key press: "Esc". 
		else if( selectedkey=='Escape' || selectedkeycode=='Escape' )  resetVideoShield();
		// else if( selectedkey=='Escape' || selectedkeycode=='Escape' )  toggleFullscreenState(0);

		// Respond to key press: "Num 0". 
		else if( selectedkey=='0' )  jumpToVideoPercent(0);
		// Respond to key press: "Num 1". 
		else if( selectedkey=='1' )  jumpToVideoPercent(.1);
		// Respond to key press: "Num 2". 
		else if( selectedkey=='2' )  jumpToVideoPercent(.2);
		// Respond to key press: "Num 3". 
		else if( selectedkey=='3' )  jumpToVideoPercent(.3);
		// Respond to key press: "Num 4". 
		else if( selectedkey=='4' )  jumpToVideoPercent(.4);
		// Respond to key press: "Num 5". 
		else if( selectedkey=='5' )  jumpToVideoPercent(.5);
		// Respond to key press: "Num 6". 
		else if( selectedkey=='6' )  jumpToVideoPercent(.6);
		// Respond to key press: "Num 7". 
		else if( selectedkey=='7' )  jumpToVideoPercent(.7);
		// Respond to key press: "Num 8". 
		else if( selectedkey=='8' )  jumpToVideoPercent(.8);
		// Respond to key press: "Num 9". 
		else if( selectedkey=='9' )  jumpToVideoPercent(.9);

		// Respond to key press: ",". 
		else if( selectedkey==',' )  jumpVideoTime(-1);
		// Respond to key press: ".". 
		else if( selectedkey=='.' )  jumpVideoTime(+1);

		// Respond to key press: "<". 
		else if( selectedkey=='<' )  decrPlaySpeed();
		// Respond to key press: ">". 
		else if( selectedkey=='>' )  incrPlaySpeed();

		// Respond to key press: "←". 
		else if( selectedkey=='ArrowDown' || selectedkeycode=='ArrowDown' )  incrVideoVolume(-.1);
		// Respond to key press: "→". 
		else if( selectedkey=='ArrowUp' || selectedkeycode=='ArrowUp' )  incrVideoVolume(+.1);

		// Respond to key press: "?". 
		// else if( selectedkey=='?' )  displayKeyShortcuts();

		// 
		// else return;

		// Respond to key press. 
		// respondToKey();

		// Check if user composing input. 
	}

	// Select custom controller. 
	function confirmController() {
		console.log('Selecting custom controller...');

		// Remove default controller. 
		vidplayer['vid'].controls = false;
		vidplayer['vid'].removeAttribute('controls');

		// Activate custom controller. 
		vidplayer['vidshield'].classList.remove('gone');
		// vidplayer['vidcontrolbar'].classList.remove('gone');
	}

	// Go thru control screen. 
	function goThruControlScreen() {
		console.log('Going thru control screen...');

		// Lower the shield. 
		vidplayer['vidshield'].classList.add('peekaboo');

		// Raise the shield after time. 
		setTimeout( function() { vidplayer['vidshield'].classList.remove('peekaboo'); } , 1250 );
	}

	// Update activity log. 
	function updateActivityLog(caption) {
		// console.log('Updating activity log...');
		// console.log('State change:',caption);

		vidplayer['activitylog'].innerHTML += `<span class="log">${caption}</span>`;
	}
}

// Get new video from user input. 
function selectNewVideo() {
	console.log('Selected new video...');

	// Get url of new video. 
	const newvideourl = vidplayer['vidloader']['linkfield'].value;
	// console.log('New video url:',newvideourl);

	// Disregard empty or invalid url. 
	if( !newvideourl )  {
		console.warn(`New video url invalid: ${ newvideourl }`);
		return;
	}

	// Load new video into video player. 
	/* if( newvideourl ) */ loadNewVideo();
	// if( newvideourl ) checkFileValid(newvideourl);
	// if( newvideourl && checkFileValid(newvideourl) ) loadNewVideo();

	/****/

	// Load new video into video player. 
	function loadNewVideo() {
		console.log(`Now loading new video into player: ${ newvideourl }`);
		// if( !newvideourl ) return;

		// Apply url to video player. 
		vidplayer['vid'].src = newvideourl;
		vidplayer['ghostvid'].src = newvideourl;

		// Get video title. 
		let newvideotitle = getVidTitle(newvideourl);
		// Apply video title to document. 
		document.title = `${ newvideotitle } | VidPlayer`;

		/***/

		// Extract title of video from full url path. 
		function getVidTitle(fullurlpath) {

			// // Get position of last slash in file path. 
			// let indexoflastslash = fullurlpath.lastIndexOf('/');
			// // Get isolated file name from file path. 
			// let filename = fullurlpath.substring( indexoflastslash + 1 );

			// // Get position of last period in file name. 
			// let indexoflastperiod = filename.lastIndexOf('.');
			// // Get isolated video title from file name. 
			// let videotitle = filename.substring( 0 , indexoflastperiod );

			// Get position of last slash in file path. 
			let indexoflastslash = fullurlpath.lastIndexOf('/');
			// Get position of last period in file path. 
			let indexoflastperiod = fullurlpath.lastIndexOf('.');
			// Get isolated video title from file path. 
			let videotitle = fullurlpath.substring( indexoflastslash + 1 , indexoflastperiod );

			// Return title of video;
			return videotitle;
		}
	}

	// Check if given file valid/exists. 
	function checkFileValid(fileurl) {
		console.log('Check if file valid/exists:',fileurl);

		// Create new request. 
		let xhr = new XMLHttpRequest();
		// Define parameters of request. 
		xhr.open('HEAD',fileurl,true);
		// Attach response handler to request. 
		xhr.addEventListener('load',loadNewVideo);
	}
}

// TODO: Open control menu. 
function openControlMenu() {
	console.log('Opening control menu...');

	// 
}
