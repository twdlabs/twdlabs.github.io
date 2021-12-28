
// Get time value of current moment. 
let now = new Date().valueOf();
// console.log('now:',now);


/*****/


// Load video on page. 
loadVideoById(0);

// Load video links. 
loadVideoLinks();

// Activate reaction buttons. 
activateReactBtns();


/*****/


// Load video on page (given video id). 
function loadVideoById(vidid) {
	console.log('Loading video... id:',vidid);

	// Get video data. 
	let vidsrc = videoData[vidid];

	// Get video author data. 
	let author = userdata[vidsrc.authorid];


	// Load video. 
	document.querySelector('main#main main.player div.vid').innerHTML = `
	<!-- video -->
	<video src="${ vidsrc.vidurl }" autoplay muted controls></video>
	<!-- /video -->`;


	// Load video title. 
	document.getElementById('title').innerHTML = vidsrc.title;
	
	// Load video view count. 
	document.getElementById('viewcount').innerHTML = formatViewCount(vidsrc.viewcount,true);

	
	// Load video reaction: liked. 
	let liked = userdata[currentuserid].likedIds.includes(vidid);
	if(liked) document.getElementById('likebtn').classList.add('active');
	else document.getElementById('likebtn').classList.remove('active');
	// console.log('liked:',liked);

	// Load video reaction: disliked. 
	let disliked = userdata[currentuserid].dislikedIds.includes(vidid);
	if(disliked) document.getElementById('dislikebtn').classList.add('active');
	else document.getElementById('dislikebtn').classList.remove('active');
	// console.log('disliked:',disliked);
	
	// Load video reaction: downloaded / not downloaded. 
	let downloaded = userdata[currentuserid].downloadedIds.includes(vidid);
	if(downloaded) document.getElementById('downloadbtn').classList.add('active');
	else document.getElementById('downloadbtn').classList.remove('active');
	
	// Load video reaction: saved / not saved. 
	let saved = userdata[currentuserid].savedIds.includes(vidid);
	if(saved) document.getElementById('savebtn').classList.add('active');
	else document.getElementById('savebtn').classList.remove('active');

	
	// Load video author. 
	document.getElementById('channelname').innerHTML = author.name;
	document.getElementById('channelsubcount').innerHTML = formatSubCount(author.subscribercount);
	document.getElementById('avatar').style.backgroundImage = `url('${author.photourl}')`;

	// Load subscriber button status. 
	let subscribed = userdata[currentuserid].subscriptions.includes(vidsrc.authorid);
	if(subscribed) document.getElementById('subbtn').classList.add('active');
	else document.getElementById('subbtn').classList.remove('active');


	// TODO: Load status of notification bell button. 
	// let notifbtn = document.getElementById('notifbtn');
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
		<li class="viditem">

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

	/*****/

	// Select video. 
	function selectVideo(event) {

		// Highlight video. 
		highlightVideo();

		// Load selected video on page. 
		let id = event.currentTarget.getAttribute('data-id');
		loadVideoById(id);

		/*****/
		
		// Highlight video. 
		function highlightVideo() {

			// Get all vid links in playlist. 
			let allviditems = document.querySelectorAll('aside.playlist ul.vidlist li.viditem');

			// Un-highlight all videos in playlist. 
			for(let viditem of allviditems) {
				viditem.classList.remove('active');
			}

			// Highlight selected video in playlist. 
			let selectedvidlink = event.currentTarget;
			let selectedviditem = selectedvidlink.parentElement;
			selectedviditem.classList.add('active');
		}
	}
}


// Format subscriber count number. 
function formatSubCount(num) {
	
	// Define components of formatted number. 
	let coeff = 1*num;
	let suffindex = 0;
	let suffix = [' subscribers','K subscribers','M subscribers','B subscribers','T subscribers',' subscriber'];	// potential suffixes

	// Divide number until less than a thousand. 
	while(coeff>1000 && suffindex<5) {

		// Divide number by thousand. 
		coeff /= 1000;
		// console.log('\tcoeff',coeff);

		// Increment suffix index. 
		suffindex++;
		// console.log('\tsuffindex',suffindex);
	}

	// Add final formatting to subscriber count. 
	coeff = coeff.toFixed(1);
	let removeExtraZero = coeff.includes('.0');
	if(removeExtraZero) coeff = coeff.substr(0,coeff.length-2);
	if(coeff==1 && suffindex==0) suffindex = 5;

	// Return final result text. 
	return ( coeff + suffix[suffindex] );
}


// Format view count number. 
function formatViewCount(num,expanded=false) {
	// console.log('num',num, (expanded)?('expanded'):('abbreviated') );
	
	// Format general integer. 
	if(expanded) {

		// Create string representation of number. 
		let numstr = '' + Math.floor(num);
		// console.log('numstr:',numstr);

		// Add commas to numbers longer than 3 digits. 
		if(numstr.length>3) {

			// Split number into pieces. 
			let splitNumber = numstr.split('');
			let newSplitNumber = [];
			// console.log('splitNumber:',splitNumber);
			// console.log('newSplitNumber:',newSplitNumber);
	

			// Get bottom digit group and add comma. Repeat till last digit group. 
			while(splitNumber.length>3) {
				newSplitNumber.unshift( splitNumber.pop() );
				newSplitNumber.unshift( splitNumber.pop() );
				newSplitNumber.unshift( splitNumber.pop() );
				newSplitNumber.unshift(',');
			}
			// console.log('splitNumber:',splitNumber);
			// console.log('newSplitNumber:',newSplitNumber);

			// Get last digit group. 
			while(splitNumber.length) {
				newSplitNumber.unshift( splitNumber.pop() );
			}
			// console.log('splitNumber:',splitNumber);
			// console.log('newSplitNumber:',newSplitNumber);
	
			// Reassemble split number into string. 
			numstr = newSplitNumber.join('');
		}

		// Return final result text. 
		if(numstr==1) return ( numstr + ' view' );
		else return ( numstr + ' views' );
	}

	// Format abbreviated number. 
	else {
	
		// Define components of formatted number. 
		let coeff = 1*num;
		let suffindex = 0;
		let suffix = [' views','K views','M views','B views','T views',' view'];	// potential suffixes
	
		// Divide number until less than a thousand. 
		while(coeff>1000 && suffindex<5) {
	
			// Divide number by thousand. 
			coeff /= 1000;
			// console.log('\tcoeff',coeff);
	
			// Increment suffix index. 
			suffindex++;
			// console.log('\tsuffindex',suffindex);
		}
	
		// Add final formatting to view count. 
		coeff = coeff.toFixed(1);
		let removeExtraZero = coeff.includes('.0');
		if(removeExtraZero) coeff = coeff.substr(0,coeff.length-2);
		if(coeff==1 && suffindex==0) suffindex = 5;
	
		// Return final result text. 
		return ( coeff + suffix[suffindex] );

	}
}


// Format 'time since upload' number. 
function formatTimeAgo(uploaddate) {

	// Get estimated time since upload date (ETS). 
	let dt = now - 1*uploaddate;
	// console.log('dt:',dt);

	// Treat non-positive ets numbers as right now. 
	if(dt<=0) return 'now';

	// Define components of formatted number. 
	let coeff = dt;	// /1000/60/60/24/365
	let suffindex = 0;
	let suffix = [' millisecond',' second',' minute',' hour',' day',' week',' month',' year'];	// potential suffixes
	let limits = [1000, 60, 60, 24, 7, 4.3, 12, 1000];

	// Divide number until... 
	while(coeff>limits[suffindex]) {

		// Divide coefficient. 
		coeff /= limits[suffindex];
		// console.log('\tcoeff',coeff);

		// Increment suffix index. 
		suffindex++;
		// console.log('\tsuffindex',suffindex);
	}

	// Add final formatting to view count. 
	coeff = coeff.toFixed(0);
	// let removeExtraZero = coeff.includes('.0');
	// if(removeExtraZero) coeff = coeff.substr(0,coeff.length-2);

	return (coeff + suffix[suffindex]+((coeff>1)?('s ago'):(' ago')) );
}


// Activate reaction buttons. 
function activateReactBtns() {

	// Get all reaction buttons. 
	// let allreactbtns = document.querySelectorAll('main.player div.reaction div.btn');

	// Attach function to all reaction buttons. 
	// for(let btn of allreactbtns) {
	// 	btn.addEventListener('click',reactToVideo);
	// }

	// Activate like and dislike buttons. 
	let likebtn = document.getElementById('likebtn');
	likebtn.addEventListener('click',likeVideo);
	let dislikebtn = document.getElementById('dislikebtn');
	dislikebtn.addEventListener('click',dislikeVideo);

	// TODO: Activate share button. 
	let sharebtn = document.getElementById('sharebtn');
	sharebtn.addEventListener('click',reactToVideo);

	// TODO: Activate download button. 
	let downloadbtn = document.getElementById('downloadbtn');
	downloadbtn.addEventListener('click',reactToVideo);

	// TODO: Activate save button. 
	let savebtn = document.getElementById('savebtn');
	savebtn.addEventListener('click',reactToVideo);

	/*****/

	// TODO: React to video. 
	function reactToVideo(event) {
		// console.log('Reacting to video with btn:', event.currentTarget);
		let btn = event.currentTarget;
		btn.classList.toggle('active');
	}

	// Add 'like' to video. 
	function likeVideo(event) {

		// De-activate 'dislike' button. 
		dislikebtn.classList.remove('active');

		// Activate 'like' button. 
		likebtn.classList.add('active');

		// TODO: Save reaction to database. 
	}

	// Add 'dislike' to video. 
	function dislikeVideo(event) {

		// De-activate 'like' button. 
		likebtn.classList.remove('active');

		// Activate 'dislike' button. 
		dislikebtn.classList.add('active');

		// TODO: Save reaction to database. 
	}
}

