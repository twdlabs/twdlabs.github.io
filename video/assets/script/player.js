


// Get video box. 
const vidbox = document.querySelector('main.player div.vid');
const vidplayervideo = document.querySelector('main.player div.vid video');
const vidplayerplaybtn = document.querySelector('main.player div.vid div.playbtn');
// Get title box. 
const titlebox = document.getElementById('title');
// Get box for view count. 
const viewcountbox = document.getElementById('viewcount');

// Get like button. 
const likebtn = document.getElementById('likebtn');
// Get dislike button. 
const dislikebtn = document.getElementById('dislikebtn');
// Get share button. 
const sharebtn = document.getElementById('sharebtn');
// Get download button. 
const downloadbtn = document.getElementById('downloadbtn');
// Get save button. 
const savebtn = document.getElementById('savebtn');


// Get box for channel name. 
const channelnamebox = document.getElementById('channelname');
// Get box for channel subscriber count.
const channelsubcount = document.getElementById('channelsubcount');
// Get box for channel avatar. 
const avatarbox = document.getElementById('avatar');
// Get subscribe button. 
const subscribebtn = document.getElementById('subbtn');
// Get notification bell button. 
// const notifbtn = document.getElementById('notifbtn');


/*****/


// Get time value of starting moment. 
let thismoment = new Date().valueOf();
// console.log('thismoment:',thismoment);

// Define id of initial video. 
let currentvideoid = 0;
// console.log('currentvideoid:',currentvideoid);


/*****/


// Activate video player. 
activateVideoPlayer();

// Load initial video. 
loadCurrentVideo();


/*****/


// Activate video player. 
function activateVideoPlayer() {

	// 
	vidplayerplaybtn.addEventListener('click',togglePlayState);

	// Select next video (upon video ending). 
	vidplayervideo.addEventListener('ended', selectNextVideo);

	// Update state of play button. 
	updatePlayBtn();

	/****/

	// Toggle play state of video. 
	function togglePlayState(event) {

		// Check initial play state. 
		// console.log('Previously playing:',!(vidplayervideo.paused));

		// Play if not already playing. 
		if(vidplayervideo.paused) {
			vidplayervideo.play();
			vidbox.classList.add('active');
		}

		// Pause if already playing. 
		else {
			vidplayervideo.pause();
			vidbox.classList.remove('active');
		}

		// Check new play state. 
		// console.log('Now playing:',!(vidplayervideo.paused));

		// Update state of play button. 
		updatePlayBtn();
	}

	// Update state of play button. 
	function updatePlayBtn() {

		// Set off current playing. 
		if(vidplayervideo.paused) {
			vidbox.classList.remove('active');
		}

		// Set on if current playing. 
		else {
			vidbox.classList.add('active');
		}
	}

	// Select next video (if available). 
	function selectNextVideo(event) {
		// console.log('\nLoading next video...',event);
	
		// Increment video index. 
		currentvideoid++;

		// Adjust video index (to beginning) if out of bounds. 
		if(currentvideoid >= videoData.length) currentvideoid = 0;
	
		// Load next video. 
		loadCurrentVideo();
	}
}

// Load video on page (given video id). 
function loadCurrentVideo() {
	console.log('\nCurrent video id:',currentvideoid);

	// Highlight video by id. 
	highlightVideoById(currentvideoid);

	// Get video data. 
	let vidsrc = videoData[currentvideoid];

	// Load video. 
	// vidbox.innerHTML = createVideo();
	vidplayervideo.src = vidsrc.vidurl || vidsrc.publicvidurl;

	// Load video metadata. 
	titlebox.innerHTML = vidsrc.title;
	viewcountbox.innerHTML = formatViewCount(vidsrc.viewcount,true);

	// Load info for video author. 
	loadAuthor(vidsrc);

	// Load state of video reaction buttons. 
	loadReactBtnStates();


	/****/
	

	// Create video layout. 
	function createVideo() {

		// Determine whether or not to use url for published videos. 
		let usePublishedVidUrl = true;

		// Create video layout with published url. 
		if(usePublishedVidUrl) {
			return `
			<!-- video -->
			<video src="${ vidsrc.publicvidurl }" autoplay muted controls></video>
			<!-- /video -->`;
		}

		// Create video layout with local url. 
		else {
			return `
			<!-- video -->
			<video src="${ vidsrc.vidurl }" autoplay muted controls></video>
			<!-- /video -->`;
		}
	}
	
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
