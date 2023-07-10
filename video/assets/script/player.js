


// Get video box. 
const vidbox = document.querySelector('main.player div.vid');
// Get video player. 
const vidplayer = document.querySelector('main.player div.vid video');
// Get video play buttons. 
const vidboxplaybtns = document.querySelectorAll('main.player div.vid div.playbtn');
// Get video play button. 
const vidboxautoplaybtn = document.querySelector('main.player div.vid div.dashboard div.panel div.autoplaybtn');
// Get video volume button. 
const vidboxvolumebtn = document.querySelector('main.player div.vid div.dashboard div.panel div.volumebtn');
// Get video skip button. 
const vidboxnextbtn = document.querySelector('main.player div.vid div.dashboard div.panel div.nextbtn');

// Get title box. 
const titlebox = document.querySelector('main.player div.metadata h2#title');
// Get box for view count. 
const viewcountbox = document.querySelector('main.player div.metadata div#viewcount');

// Get like button. 
const likebtn = document.querySelector('main.player div.reaction div.btn#likebtn');
// Get dislike button. 
const dislikebtn = document.querySelector('main.player div.reaction div.btn#dislikebtn');
// Get share button. 
const sharebtn = document.querySelector('main.player div.reaction div.btn#sharebtn');
// Get download button. 
const downloadbtn = document.querySelector('main.player div.reaction div.btn#downloadbtn');
// Get save button. 
const savebtn = document.querySelector('main.player div.reaction div.btn#savebtn');


// Get box for channel name. 
const channelnamebox = document.querySelector('main.player div.channel div.brand div.details div#channelname');
// Get box for channel subscriber count.
const channelsubcount = document.querySelector('main.player div.channel div.brand div.details div#channelsubcount');
// Get box for channel avatar. 
const avatarbox = document.querySelector('main.player div.channel div.brand div#avatar');
// Get subscribe button. 
const subscribebtn = document.querySelector('main.player div.channel div.subbtns div#subbtn');
// Get notification bell button. 
const notifbtn = document.querySelector('main.player div.channel div.subbtns div#notifbtn');


/*****/


// Get time value of starting moment. 
let thismoment = new Date().valueOf();
// console.log('thismoment:',thismoment);

// Define id of initial video. 
let currentvideoid = 0;
// console.log('currentvideoid:',currentvideoid);

// Define initial state of autoplay. 
let autoplayOn = true;


/*****/


// Activate video player. 
activateVideoPlayer();

// Load initial video. 
loadCurrentVideo();


/*****/


// Activate video player. 
function activateVideoPlayer() {

	// Activate video play buttons. 
	for(let btn of vidboxplaybtns) {
		btn.addEventListener('click',togglePlayState);
	}

	// Activate video autoplay button. 
	vidboxautoplaybtn.addEventListener('click',toggleAutoplayState);

	// Activate video volume button. 
	vidboxvolumebtn.addEventListener('click',toggleVolumeState);
	vidplayer.addEventListener('volumechange',updatePlayerState);

	// Activate video volume button. 
	vidboxnextbtn.addEventListener('click',selectNextVideo);

	// Update state of video player. 
	updatePlayerState();

	/****/

	// Toggle play state of video. 
	function togglePlayState() {

		// Check initial play state. 
		// console.log('Previously playing:',!(vidplayer.paused));

		// Play if not already playing. 
		// Shift play state: paused -> playing. 
		if(vidplayer.paused) {
			vidplayer.play();
		}

		// Pause if already playing. 
		// Shift play state: playing -> paused. 
		else {
			vidplayer.pause();
		}

		// Check new play state. 
		// console.log('Now playing:',!(vidplayer.paused));

		// Update state of video player. 
		updatePlayerState();
	}

	// Toggle play state of video autoplay. 
	function toggleAutoplayState() {

		// Shift autoplay state: on -> off. 
		if(autoplayOn) {

			// Don't select next video (upon video ending). 
			vidplayer.removeEventListener('ended', selectNextVideo);

			// Save current state of autoplay. 
			vidplayer.removeAttribute('autoplay');
			autoplayOn = false;
		}

		// Shift autoplay state: off -> on. 
		else {

			// Select next video (upon video ending). 
			vidplayer.addEventListener('ended', selectNextVideo);

			// Save current state of autoplay. 
			vidplayer.setAttribute('autoplay','');
			autoplayOn = true;
		}

		// Update state of video player. 
		updatePlayerState();
	}

	// Toggle play state of video volume. 
	function toggleVolumeState() {

		// Shift volume state: muted -> volume. 
		if(vidplayer.muted) {
			vidplayer.muted = false;
		}

		// Shift volume state: volume -> muted. 
		else {
			vidplayer.muted = true;
		}

		// Update state of video player. 
		updatePlayerState();
	}

	// Update state of video player. 
	function updatePlayerState() {

		// Update current play state. 
		if(vidplayer.paused) {
			vidbox.classList.remove('active');
		}
		else {
			vidbox.classList.add('active');
		}

		// Update current autoplay state. 
		if(autoplayOn) {
			vidbox.classList.add('ap');
		}
		else {
			vidbox.classList.remove('ap');
		}

		// Update current volume state. 
		if(vidplayer.muted) {
			vidbox.classList.remove('lo','hi');
		}
		else {
			if(vidplayer.volume<.5) vidbox.classList.add('lo');
			else vidbox.classList.add('hi');
		}
	}

	// Select next video (if available). 
	function selectNextVideo() {
		// console.log('\nLoading next video...',event);
	
		// Increment video index. 
		currentvideoid++;

		// Adjust video index to beginning if out of bounds. 
		if(currentvideoid >= videoData.length) currentvideoid = 0;
	
		// Load next video. 
		loadCurrentVideo();

		// Update state of video player. 
		updatePlayerState();
	}
	// TODO: Implement playlist functionality here. 
}

// Load video on page (given video id). 
function loadCurrentVideo() {
	console.log('\nCurrent video id:',currentvideoid);

	// Highlight video by id. 
	highlightVideoById(currentvideoid);

	// Get video source data. 
	let vidsrc = videoData[currentvideoid];

	// Load video source data. 
	vidplayer.src = vidsrc.vidurl || vidsrc.publicvidurl;

	// Load video metadata. 
	titlebox.innerHTML = vidsrc.title;
	viewcountbox.innerHTML = formatViewCount(vidsrc.viewcount,true);

	// Load info for video author. 
	loadAuthor(vidsrc);

	// Load state of video reaction buttons. 
	loadReactBtnStates();


	/****/
	
	
	// Highlight video by id. 
	function highlightVideoById(id) {

		// Get all vid links in playlist. 
		let allviditems = document.querySelectorAll('aside.playlist ul.vidlist li.viditem');

		// Un-highlight all other videos in playlist. 
		for(let viditem of allviditems) {
			viditem.classList.remove('active');
		}

		// Highlight selected video in playlist. 
		let selectedvidlink = getVidLinkByIndex(id);
		if(selectedvidlink) {
			let selectedviditem = selectedvidlink.parentElement;
			selectedviditem.classList.add('active');
		}
		else {
			console.log('Invalid video link highlighted by id...');
		}

		/***/

		// Get video link by index. 
		function getVidLinkByIndex(queryvidindex) {
			// console.log('queryvidindex:',queryvidindex);

			// Initialize video link result. 
			let result = undefined;

			// Get all video links. 
			let allvidlinks = document.querySelectorAll('aside.playlist ul.vidlist li.viditem a.vidlink');
			// console.log('allvidlinks',allvidlinks);

			// Go thru all video links. 
			for(let link of allvidlinks) {
				
				// Get id of current link. 
				let id = 1*link.getAttribute('data-vidindex');

				// Check for match. 
				if(id==queryvidindex) {
					// Save matching video link. 
					result = link;
					break;
				}
			}

			// Return result. 
			return result;
		}
	}

	// Load info for video author. 
	function loadAuthor(vidsrc) {
	
		// Get video author data. 
		let author = userDataList[vidsrc.authorid];
	
		// Load video author. 
		channelnamebox.innerHTML = author.name;
		channelsubcount.innerHTML = formatSubCount(author.subscribercount);
		avatarbox.style.backgroundImage = `url('${author.photourl}')`;
	
		// Load subscriber button status. 
		let subscribed = userDataList[currentuserid].subscriptions.includes(vidsrc.authorid);
		if(subscribed) subscribebtn.classList.add('active');
		else subscribebtn.classList.remove('active');
	}
	
	// Load state of video reaction buttons. 
	function loadReactBtnStates() {
		
		// Load video reaction: liked. 
		let liked = userDataList[currentuserid].likedIds.includes(currentvideoid);
		if(liked) likebtn.classList.add('active');
		else likebtn.classList.remove('active');
		// console.log('liked:',liked);
	
		// Load video reaction: disliked. 
		let disliked = userDataList[currentuserid].dislikedIds.includes(currentvideoid);
		if(disliked) dislikebtn.classList.add('active');
		else dislikebtn.classList.remove('active');
		// console.log('disliked:',disliked);
		
		// Load video reaction: downloaded / not downloaded. 
		let downloaded = userDataList[currentuserid].downloadedIds.includes(currentvideoid);
		if(downloaded) downloadbtn.classList.add('active');
		else downloadbtn.classList.remove('active');
		
		// Load video reaction: saved / not saved. 
		let saved = userDataList[currentuserid].savedIds.includes(currentvideoid);
		if(saved) savebtn.classList.add('active');
		else savebtn.classList.remove('active');
	
	
		// TODO: Load status of notification bell button. 
		// let notifs = 2;
		// if(notifs>=2) {
		// 	notifbtn.classList.add('all');
		// 	// notifbtn.classList.add('on','all');
		// }
		// if(notifs==1) {
		// 	notifbtn.classList.remove('all');
		// 	notifbtn.classList.add('on');
		// }
		// else notifbtn.classList.remove('all','on');
	}
}
