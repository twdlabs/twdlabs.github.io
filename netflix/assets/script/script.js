


// Get navbar. 
const navbar = document.querySelector('div#container nav.navbar');
// console.log('Navbar:',navbar);

// Get components of billboard. 
const billboard = {

	// Get play button. 
	playbtn: document.querySelector('div#container div.billboard div.hero div.vignette div.actionbox a.playbtn'),
	// Get more button. 
	morebtn: document.querySelector('div#container div.billboard div.hero div.vignette div.actionbox a.morebtn'),

	// Get billboard media poster. 
	mediaposter: document.querySelector('div#container div.billboard div.hero img.poster'),
	// Get billboard media title. 
	mediatitle: document.querySelector('div#container div.billboard div.hero div.vignette div.mediatitle'),
	// Get billboard media description. 
	mediadescription: document.querySelector('div#container div.billboard div.hero div.vignette div.mediadescription'),
};
// console.log('Billboard:',billboard);

// Get components of slide rows. 
const sliderows = {

	// Get all slide row headers. 
	rowheaders:document.querySelectorAll('div#container div.sliderow h2.rowhead'),

	// Get all slide row media lists. 
	slidermedialists:document.querySelectorAll('div#container div.sliderow div.rowbody div.slider ul.medialist'),
}
// console.log('Slide rows:',sliderows);


/*****/


// Load media into slider rows. 
loadSliderMedia();

// Activate dynamic change of navbar. 
activateDynamicNavbar();

// Set random media item as featured media. 
featureRandomMedia();


/*****/


// Load media into slider rows. 
function loadSliderMedia() {

	// Create list of indexes. 
	let mediaindexlist = createIndexList(mediasourcelist.length);
	// console.log('Media index list:',mediaindexlist);

	// Go thru each slide row header. 
	for( let sliderheaddestination of sliderows['rowheaders'] ) {

		// Compile layout for row title. 
		let rowtitlelayout = `
		<!-- rowtitle -->
		<a class="rowtitle" href="javascript:void(0)">

			<!-- caption -->
			<span class="caption">Genre Category</span>
			<!-- /caption -->

			<!-- icon -->
			<svg class="icon chevronarrow right" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
			</svg>
			<!-- /icon -->

		</a>
		<!-- /rowtitle -->`;

		// Compile layout for dot list. 
		let dotlistlayout = `
		<!-- dotlist -->
		<ul class="dotlist">

			<li class="dot" data-pageindex="-1"></li>

		</ul>
		<!-- /dotlist -->`;

		// 
		sliderheaddestination.innerHTML = rowtitlelayout + dotlistlayout;
	}

	// Go thru each slide row media list. 
	for( let slidermediadestination of sliderows['slidermedialists'] ) {
		
		// Shuffle list of indexes. 
		let shuffledmediaindexlist = shuffleList(mediaindexlist);
		console.log('Media index list (shuffled):',shuffledmediaindexlist);

		// Initialize layout of slide row. 
		let sliderlayout = '';
		// Go thru each media item. 
		for(let index of shuffledmediaindexlist) {

			// Add media item to slider layout. 
			sliderlayout += createMediaItemLayout(index);
		}
		// Display layout in slide row. 
		slidermediadestination.innerHTML = sliderlayout;
	}

	// Activate slider links. 
	activateSliderLinks();

	/****/

	// Create index list of given length. 
	function createIndexList(length) {

		// Initialize index list. 
		let indexlist = [];

		// Go thru length. 
		for(let i=0 ; i<length ; i++) {

			// Add index to list. 
			indexlist.push(i);
		}

		// Return index list. 
		return indexlist;
	}

	// Shuffle list of items. 
	function shuffleList(/* mediasource */list) {

		// Create copy of list. 
		// let list = [].concat(mediasourcelist);

		// Go thru each list item. 
		// for(let item of list)

		// Go thru each list item (backwards). 
		for( let i=list.length-1 ; i>0 ; i-- ) {

			// Get random index (below current index). 
			let r = Math.random();
			let j = Math.floor( r * (i+1) );
			[ list[i] , list[j] ] = [ list[j] , list[i] ];
		}

		// 
		return list;
		// return list.sort( (a,b)=>( b['fullimageurl']-a['fullimageurl'] ) );
	}

	// Create layout for media item. 
	function createMediaItemLayout(mediaindex) {

		// Get media item. 
		let mediaitem = mediasourcelist[mediaindex];

		// Compile layout for media item. 
		return `
		<!-- mediaitem -->
		<li class="mediaitem">
	
			<!-- medialink -->
			<a class="medialink" href="javascript:void(0)" data-mediaindex="${ mediaindex }">
	
				<!-- preview -->
				<div class="preview">
	
					<!-- thumbnail -->
					<img class="thumbnail" src="${ mediaitem['thumbnailurl'] }" alt="">
					<!-- /thumbnail -->
	
				</div>
				<!-- /preview -->
	
			</a>
			<!-- /medialink -->
	
		</li>
		<!-- /mediaitem -->`;
	}

	// Activate slider links. 
	function activateSliderLinks() {
	
		// Get all media links in slider rows. 
		let slidermedialinks = document.querySelectorAll('div#container div.sliderow div.rowbody div.slider ul.medialist li.mediaitem a.medialink');
	
		// Go thru each media link. 
		for(let medialink of slidermedialinks) {
	
			// Activate media link. 
			medialink.addEventListener('click',openOverlay);
		}
	}
}

// Activate dynamic change of navbar. 
function activateDynamicNavbar() {
	// console.log('Activating dynamic navbar...');

	// Update state of navbar upon user scroll. 
	window.addEventListener('scroll',updateNavbar);
	// document.body.addEventListener('scroll',updateNavbar);
	// document.documentElement.addEventListener('scroll',updateNavbar);
	// document.scrollingElement.addEventListener('scroll',updateNavbar);
	// document.querySelector('html').addEventListener('scroll',updateNavbar);
	// document.querySelector('body').addEventListener('scroll',updateNavbar);

	/****/

	// Update state of navbar. 
	function updateNavbar() {
		// console.log('Updating dynamic navbar...');

		// Check scroll level. 
		let scrolllevel = document.scrollingElement.scrollTop;
		// console.log('Scroll level:',scrolllevel);
		

		// Update state of navbar based on scroll level. 
		if(scrolllevel==0) navbar.classList.remove('scr');
		else navbar.classList.add('scr');
	}
}

// Set random media item as featured media. 
function featureRandomMedia() {

	// Get random index. 
	let randomindex = getRandomIndex();
	console.log('Random index:',randomindex);

	// Display randomly selected media item on billboard. 
	sendMediaToBillboard(randomindex);

	/****/

	// Display given media item on billboard. 
	function sendMediaToBillboard(mediaindex) {

		// Get selected media item. 
		let mediaitem = mediasourcelist[mediaindex];
		console.log('Featured media item:',mediaitem);

		// Get image url. 
		// let imgurl = mediaitem['fullimageurl'];
		let imgurl = mediaitem['imgurl'];

		// Update billboard media poster image. 
		// billboard['mediaposter'].style.backgroundImage = imgurl;
		billboard['mediaposter'].src = imgurl;

		// TODO: Update information in vignette. 
		billboard['mediatitle'].innerHTML = mediaitem['title'];
		billboard['mediadescription'].innerHTML = mediaitem['keywords'];
		// billboard['playbtn'];
		billboard['morebtn'].setAttribute('data-mediaindex',mediaindex);
		billboard['morebtn'].addEventListener('click',openOverlay);
	}

	/****/

	// Get random index. 
	function getRandomIndex() {

		// Choose random index from media list. 
		let r = Math.random();
		// console.log('Random proportion:',r);
		// Get number of media items. 
		let l = mediasourcelist.length;
		console.log('Media list length:',l);

		// Return random index. 
		return Math['floor'](r*l);
	}
}
