


// Define components of video player. 
const vidplayer = {


	// Get video player container. 
	box:document.querySelector('div#container section.media div.vidplayer'),

	// Get link loader for video player. 
	vidloader: {
		// box: document.querySelector('div#container div.vidloader'),
		loadbtn: document.querySelector('div#container div.vidloader button.gobtn'),
		linkfield: document.querySelector('div#container div.vidloader input.newvidlink'),
	},


	// Get video element. 
	vid:document.querySelector('div#container section.media div.vidplayer video.vid'),
	ghostvid:document.querySelector('div#container section.media div.vidplayer video.ghostvid'),

	// Get video shield. 
	vidshield:document.querySelector('div#container section.media div.vidplayer div.vidshield'),
	// Get components of video control screen. 
	vidcontrolscreen:{
		screen:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlscreen'),
		leftfield:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlscreen div.field.left'),
		rightfield:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlscreen div.field.right'),
		middlefield:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlscreen div.field.middle'),
	},

	// Get display boxes for playback speed in control screen. 
	screenboxplayspeed:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlscreen div.field.middle div.speedbox'),
	screenboxplayspeedcaption:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlscreen div.field.middle div.speedbox span.caption'),



	// Get video control bar. 
	vidcontrolbar:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar'),


	// Get components of progress bar. 
	progressbar:{
		bar:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.progressbar'),
		tube:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.progressbar div.progresstube'),
		progress:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.progressbar div.progresstube div.progress'),
		timebubble:{
			box:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.timebubble'),
			time:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.timebubble span.timestamp'),
			capture:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.timebubble div.frame canvas.framecapture'),
			// capturetimer:null,
		},
	},



	// Get play button in left pane bar. 
	leftpaneplaybtn:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.leftpane button.playbtn'),

	// Get volume button in left pane bar. 
	leftpanevolumebtn:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.leftpane button.volumebtn'),

	// Get components of timer button in left pane bar. 
	leftpanetimer: {
		btn:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.leftpane button.timebtn'),
		remain:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.leftpane button.timebtn span.remain'),
		elapsed:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.leftpane button.timebtn span.elapsed'),
		duration:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.leftpane button.timebtn span.duration'),
	},


	// Get toggle for video loop setting. 
	loopbtn:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.rightpane button.loopbtn'),
	looptogglecheckbox:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.settingspane ul.vidsettings li.setting label.togglevalue input#loopstate'),

	// Get speed button. 
	speedbtn:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.rightpane button.speedbtn'),
	// Get components of speed pane. 
	speedpane:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.settingspane.speedpane'),
	speedpanelist:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.settingspane.speedpane ul.vidsettings'),

	// Get settings button. 
	settingsbtn:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.rightpane button.settingsbtn'),
	// Get components of settings panel. 
	settingspane:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.settingspane.generalpane'),
	// settingspaneplayspeed:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.settingspane ul.vidsettings li.setting label.togglevalue span.caption#playspeed'),
	settingspaneplayspeedcaption:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.settingspane ul.vidsettings li.setting label.togglevalue span.caption#playspeed'),
	settingspanevolumelevelcaption:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.settingspane ul.vidsettings li.setting label.togglevalue span.caption#volumelevel'),

	// Get fullscreen toggler button. 
	fullscreentogglebtn:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.rightpane button.fullscreenbtn'),



	// Define available video play speeds. 
	playspeeds:[ 
		.125 , .25 , .5 , .75 , 1 , 
		1.25 , 1.5 , 1.75 , 2 , 2.5 , 
		3 , 4 , 6 , 8 , 12 , 
		// 16 , 20 , 24 , 28 , 32 , 
	],



	// Get activity log. 
	loadingbtn:document.querySelector('div#container section.media div.vidplayer div.vidshield div.controlbar div.controller div.panebar div.leftpane button.loadingbtn'),
	activitylog:document.querySelector('div#container section.media div.activitylog'),



	// Get xyz button. 
	// xyzbtn:document.querySelector('xyz'),
}

// Define list of recently loaded videos. 
const recentvideohistory = [];

// Define components of user session. 
const usersession = {

	// 
	history: [],
};




// Fill the speed bag. 
fillSpeedBag();

// Fill the speed bag. 
function fillSpeedBag() {

	// 
	let speedpanelayout = '';

	// 
	for( let playspeed of vidplayer['playspeeds'] ) {

		// 
		speedpanelayout += `
		<!-- setting -->
		<li class="setting">

			<!-- togglename -->
			<label class="togglename" for="playspeed">

				<!-- icon -->
				<svg class="icon xyz" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<>
				</svg>
				<!-- /icon -->

			</label>
			<!-- /togglename -->

			<!-- togglevalue -->
			<label class="togglevalue" for="playspeed">

				<!-- caption -->
				<span class="caption">${playspeed}</span>
				<!-- /caption -->

			</label>
			<!-- /togglevalue -->

		</li>
		<!-- /setting -->`;
	}

	// 
	vidplayer['speedpanelist'].innerHTML = speedpanelayout;
}
