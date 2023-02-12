


// Get video box. 
const vidbox = document.querySelector('section#body main.player div.vid');
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

// Define initial user. 
let currentuserid = 0;
// console.log('currentuserid:',currentuserid);

// Define initial video. 
let currentvideoid = 0;
// console.log('currentvideoid:',currentvideoid);


/*****/


// Load initial video on page. 
loadVideoById(currentvideoid);

// Activate video reaction buttons. 
activateReactBtns();

// Load video links. 
loadVideoLinks();


/*****/


// Load video on page (given video id). 
function loadVideoById(vidid) {
	currentvideoid = vidid;
	console.log('\nNew video id:',currentvideoid);

	// Highlight video by id. 
	highlightVideoById(currentvideoid);

	// Get video data. 
	let vidsrc = videoData[currentvideoid];

	// Load video. 
	vidbox.innerHTML = createVideo();

	// Get video author data. 
	let author = userdata[vidsrc.authorid];

	// Load video metadata. 
	titlebox.innerHTML = vidsrc.title;
	viewcountbox.innerHTML = formatViewCount(vidsrc.viewcount,true);

	
	// Load video reaction: liked. 
	let liked = userdata[currentuserid].likedIds.includes(currentvideoid);
	if(liked) likebtn.classList.add('active');
	else likebtn.classList.remove('active');
	// console.log('liked:',liked);

	// Load video reaction: disliked. 
	let disliked = userdata[currentuserid].dislikedIds.includes(currentvideoid);
	if(disliked) dislikebtn.classList.add('active');
	else dislikebtn.classList.remove('active');
	// console.log('disliked:',disliked);
	
	// Load video reaction: downloaded / not downloaded. 
	let downloaded = userdata[currentuserid].downloadedIds.includes(currentvideoid);
	if(downloaded) downloadbtn.classList.add('active');
	else downloadbtn.classList.remove('active');
	
	// Load video reaction: saved / not saved. 
	let saved = userdata[currentuserid].savedIds.includes(currentvideoid);
	if(saved) savebtn.classList.add('active');
	else savebtn.classList.remove('active');

	// Load video author. 
	channelnamebox.innerHTML = author.name;
	channelsubcount.innerHTML = formatSubCount(author.subscribercount);
	avatarbox.style.backgroundImage = `url('${author.photourl}')`;

	// Load subscriber button status. 
	let subscribed = userdata[currentuserid].subscriptions.includes(vidsrc.authorid);
	if(subscribed) subscribebtn.classList.add('active');
	else subscribebtn.classList.remove('active');


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

	// Activate action upon video ending. 
	const video = document.querySelector('section#body main.player div.vid video');
	video.addEventListener('ended', selectNextVideo);


	/****/
	

	// Create video. 
	function createVideo() {

		// 
		let usePublicUrl = true;

		// 
		if(usePublicUrl) {
			return `
			<!-- video -->
			<video src="${ vidsrc.publicvidurl }" autoplay muted controls></video>
			<!-- /video -->`;
		}

		// 
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
		let selectedvidlink = getVidLinkByVidId(id);
		if(selectedvidlink) {
			let selectedviditem = selectedvidlink.parentElement;
			selectedviditem.classList.add('active');
		}
		else {
			console.log('Invalid video link highlighted by id...');
		}

		/*****/

		// Get video link by id. 
		function getVidLinkByVidId(queryvidid) {
			// console.log('queryvidid:',queryvidid);

			// Initialize video link result. 
			let result = undefined;

			// Get all video links. 
			let allvidlinks = document.querySelectorAll('aside.playlist ul.vidlist li.viditem a.vidlink');
			// console.log('allvidlinks',allvidlinks);

			// Go thru all video links. 
			for(let link of allvidlinks) {
				
				// Get id of current link. 
				let id = 1*link.getAttribute('data-id');

				// Check for match. 
				if(id==queryvidid) {
					// Save matching video link. 
					result = link;
					break;
				}
			}

			// Return result. 
			return result;
		}
	}
}


// Activate reaction buttons. 
function activateReactBtns() {

	// Get all reaction buttons. 
	// let allreactbtns = document.querySelectorAll('main.player div.reaction div.btn');

	// Attach function to all reaction buttons. 
	// for(let btn of allreactbtns) {
	// 	btn.addEventListener('click',toggleVideoReaction);
	// }

	// Activate like and dislike buttons. 
	likebtn.addEventListener('click',likeVideo);
	dislikebtn.addEventListener('click',dislikeVideo);

	// TODO: Activate share button. 
	sharebtn.addEventListener('click',toggleVideoReaction);

	// TODO: Activate download button. 
	downloadbtn.addEventListener('click',toggleVideoReaction);

	// TODO: Activate save button. 
	savebtn.addEventListener('click',toggleVideoReaction);

	/*****/

	// Toggle video reaction. 
	function toggleVideoReaction(event) {
		// console.log('Reacting to video with btn:', event.currentTarget);
		let btn = event.currentTarget;
		btn.classList.toggle('active');
	}

	// Add 'like' to video. 
	function likeVideo(event) {

		// TODO: Remove obsolete video reaction from database. 
		let notRemovedYet = dislikedIds.includes(currentvideoid);
		if(notRemovedYet) dislikedIds.length;

		// De-activate 'dislike' button. 
		dislikebtn.classList.remove('active');

		// Save video like reaction to database. 
		let alreadySaved = likedIds.includes(currentvideoid);
		if(!alreadySaved) userdata[currentuserid].likedIds.push(currentvideoid);

		// Activate 'like' button. 
		likebtn.classList.add('active');
	}

	// Add 'dislike' to video. 
	function dislikeVideo(event) {

		// TODO: Remove obsolete video reaction from database. 
		let notRemovedYet = likedIds.includes(currentvideoid);
		if(notRemovedYet) likedIds.length;

		// De-activate 'like' button. 
		likebtn.classList.remove('active');

		// Save video dislike reaction to database. 
		let alreadySaved = dislikedIds.includes(currentvideoid);
		if(!alreadySaved) userdata[currentuserid].dislikedIds.push(currentvideoid);

		// Activate 'dislike' button. 
		dislikebtn.classList.add('active');
	}
}


// Load video links. 
function loadVideoLinks() {

	// Initialize result. 
	let result = '';

	// Add all data to result. 
	for(let vidIndex in videoData) {

		// Get video object. 
		let vid = videoData[vidIndex];

		// Construct video item. 
		result += `
		<!-- viditem -->
		<li class="viditem${ (vidIndex==currentvideoid) ? (' active') : ('') }">

			<!-- vidlink -->
			<a class="vidlink" href="javascript:void(0)" data-id="${ vidIndex }">

				<!-- photo -->
				<div class="photo" style="background-image:url('${ vid.thumbnailurl }');"></div>
				<!-- /photo -->

				<!-- content -->
				<div class="content">

					<!-- avatar -->
					<div class="avatar"></div>
					<!-- /avatar -->

					<!-- meta -->
					<div class="meta">

						<!-- vidtitle -->
						<div class="vidtitle">${ vid.title }</div>
						<!-- /vidtitle -->

						<!-- metadata -->
						<div class="metadata">

							<!-- vidauthor -->
							<span class="vidauthor">${ userdata[vid.authorid].name }</span>
							<!-- /vidauthor -->

							<!-- dot -->
							<span class="dot a">&sdot;</span>
							<!-- /dot -->

							<!-- viddata -->
							<div class="viddata">

								<!-- viewcount -->
								<span class="viewcount">${ formatViewCount(vid.viewcount) }</span>
								<!-- /viewcount -->

								<!-- dot -->
								<span class="dot b">&sdot;</span>
								<!-- /dot -->

								<!-- timesince -->
								<span class="timesince">${ formatTimeAgo(vid.uploaddate) }</span>
								<!-- /timesince -->

							</div>
							<!-- /viddata -->
							
						</div>
						<!-- /metadata -->
						
					</div>
					<!-- /meta -->
					
				</div>
				<!-- /content -->

			</a>
			<!-- /vidlink -->

		</li>
		<!-- /viditem -->`;
	}

	// Get vid playlist. 
	let vidlist = document.querySelector('aside.playlist ul.vidlist');

	// Add result to playlist. 
	vidlist.innerHTML = result;

	// Get all vid links in playlist. 
	let allvidlinks = document.querySelectorAll('aside.playlist ul.vidlist li.viditem a.vidlink');

	// Activate click function on vid links. 
	for(let vidlink of allvidlinks ) {
		vidlink.addEventListener('click',selectVideo);
	}
}


// Select video. 
function selectVideo(event) {

	// Get video index from selected video link. 
	let vidlink = event.currentTarget;
	let currentvideoid = 1*vidlink.getAttribute('data-id');
	
	// Load selected video on page. 
	loadVideoById(currentvideoid);

	// Highlight selected video on page. 
	// highlightVideo(currentvideoid);

	/*****/
	
	// Highlight selected video. 
	// function highlightVideo() {

	// 	// Get all vid links in playlist. 
	// 	let allviditems = document.querySelectorAll('aside.playlist ul.vidlist li.viditem');

	// 	// Un-highlight all other videos in playlist. 
	// 	for(let viditem of allviditems) {
	// 		viditem.classList.remove('active');
	// 	}

	// 	// Highlight selected video in playlist. 
	// 	let selectedvidlink = event.currentTarget;
	// 	let selectedviditem = selectedvidlink.parentElement;
	// 	selectedviditem.classList.add('active');
	// }
}


// Select next video (if available). 
function selectNextVideo(event) {
	// console.log('\nLoading next video...',event);

	// Increment video index. 
	currentvideoid++;
	if(currentvideoid >= videoData.length) currentvideoid = 0;

	// Load next video. 
	loadVideoById(currentvideoid);
}

