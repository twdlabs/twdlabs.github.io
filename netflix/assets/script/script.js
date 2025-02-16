


// Get navbar. 
const navbar = document.querySelector('div#container nav.navbar');
// console.log('Navbar:',navbar);

// Get components of billboard. 
const billboard = {

	// Get play button. 
	playbtn: document.querySelector('div#container div.app div.bbrow div.billboard div.poster div.vignette div.actionbox a.playbtn'),
	// Get more button. 
	morebtn: document.querySelector('div#container div.app div.bbrow div.billboard div.poster div.vignette div.actionbox a.morebtn'),

	// Get billboard media poster. 
	mediaposter: document.querySelector('div#container div.app div.bbrow div.billboard div.mediaposter'),
	// Get billboard media poster image. 
	mediaposterimg: document.querySelector('div#container div.app div.bbrow div.billboard div.mediaposter img.hero'),
	// Get billboard media title. 
	mediatitle: document.querySelector('div#container div.app div.bbrow div.billboard div.poster div.vignette div.mediatitle'),
	// Get billboard media description. 
	mediadescription: document.querySelector('div#container div.app div.bbrow div.billboard div.poster div.vignette div.mediadescription'),
};
// console.log('Billboard:',billboard);

// Get components of slide rows. 
const sliderows = {

	// Get all slide row heads. 
	heads:document.querySelectorAll('div#container div.app div.sldrow h2.rowhead'),
	// Get all slide row head titles. 
	titles:document.querySelectorAll('div#container div.app div.sldrow h2.rowhead a.rowtitle'),
	// Get all slide row dot lists. 
	dotlists:document.querySelectorAll('div#container div.app div.sldrow h2.rowhead ul.dotlist'),

	// Get all slide row bodies. 
	// bodies:document.querySelectorAll('div#container div.app div.sldrow div.rowbody'),
	// Get all slide row shifter buttons. 
	leftshifterbtns:document.querySelectorAll('div#container div.app div.sldrow div.rowbody div.shifter.leftbtn'),
	rightshifterbtns:document.querySelectorAll('div#container div.app div.sldrow div.rowbody div.shifter.rightbtn'),
	// Get all slide row media lists in row bodies. 
	bodymedialists:document.querySelectorAll('div#container div.app div.sldrow div.rowbody div.slider ul.medialist'),
}
// console.log('Slide rows:',sliderows);


/*****/


// Activate dynamic change of navbar. 
activateDynamicNavbar();

// Set random media item as featured media. 
featureRandomMedia();

// Load media sliders. 
loadSliders();


/*****/


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

	// Display given media item on billboard. 
	function sendMediaToBillboard(mediaindex) {

		// Get selected media item. 
		let mediaitem = mediasourcelist[mediaindex];
		console.log('Featured media item:',mediaitem);

		// Get image url. 
		// let imgurl = mediaitem['fullimageurl'];
		let imgurl = mediaitem['imgurl'];

		// Update billboard media poster image. 
		billboard['mediaposter'].style.backgroundImage = `url(${imgurl})`;
		billboard['mediaposterimg'].src = imgurl;

		// TODO: Update information in vignette. 
		billboard['mediatitle'].innerHTML = mediaitem['title'];
		billboard['mediadescription'].innerHTML = `${mediaitem['caption']}.. ${mediaitem['keywords'].join(' ')}`;
		// billboard['playbtn'];
		billboard['morebtn'].setAttribute('data-mediaindex',mediaindex);
		billboard['morebtn'].addEventListener('click',openOverlay);
	}
}

// Load media sliders. 
function loadSliders() {

	// Load media into slider rows. 
	loadSliderMedia();

	// Activate slider media links. 
	activateMediaLinks();

	// Activate slider shifters. 
	activateShifters();

	/****/

	// Load all media into each slider row. 
	function loadSliderMedia() {

		// Create list of indexes. 
		let mediaindexlist = createIndexList(mediasourcelist.length);
		// console.log('Media index list:',mediaindexlist);
	
		// Go thru each slide row head. 
		for( let sliderheaddestination of sliderows['heads'] ) {
	
			// Compile layout for row head: title and dot list. 
			let rowheadlayout = `
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
			<!-- /rowtitle -->

			<!-- dotlist -->
			<ul class="dotlist">${ createDotListLayout() }</ul>
			<!-- /dotlist -->`;
	
			// Display layout in slide row head. 
			sliderheaddestination.innerHTML = rowheadlayout;
		}
	
		// Go thru each slide row media list. 
		for( let slidermediadestination of sliderows['bodymedialists'] ) {
			
			// Shuffle list of indexes. 
			let shuffledmediaindexlist = shuffleList(mediaindexlist);
			console.log('Media index list (shuffled):',shuffledmediaindexlist);
	
			// Initialize layout of slide row. 
			let sliderowlayout = '';
			// Go thru each media item. 
			for(let index of shuffledmediaindexlist) {
	
				// Add media item to slider layout. 
				sliderowlayout += createMediaItemLayout(index);
			}
			// Display layout in slide row. 
			slidermediadestination.innerHTML = sliderowlayout;
		}

		/***/

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

		// Compile layout for dot list. 
		function createDotListLayout() {

			// Initialize layout for dot list. 
			let dotlistlayout = '';

			// TODO: Define page count. 
			let pagecount = 8;

			// Go for each page. 
			for( let i=0 ; i<pagecount ; i++ ) {

				// Add dot for current page. 
				dotlistlayout += createDotLayout(i);
			}

			// Return layout for dot list. 
			return dotlistlayout;

			/**/

			// Create layout for single dot. 
			function createDotLayout(index) {

				// Compile layout for single dot. 
				return `
				<!-- dot -->
				<li class="dot${ (index==0) ? ' on' : '' }" data-pageindex="${index}"></li>
				<!-- /dot -->`;
			}
		}

		// Shuffle list of items. 
		function shuffleList(list) {

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

			// Return shuffled list. 
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

						<!-- backuptext -->
						<div class="backuptext">

							<!-- medianame -->
							<span class="medianame">${ mediaitem['title'] }</span>
							<!-- /medianame -->

						</div>
						<!-- /backuptext -->

					</div>
					<!-- /preview -->
		
				</a>
				<!-- /medialink -->
		
			</li>
			<!-- /mediaitem -->`;
		}
	}

	// Activate slider media links. 
	function activateMediaLinks() {
	
		// Get all media links in slider rows. 
		let slidermedialinks = document.querySelectorAll('div#container div.app div.sldrow div.rowbody div.slider ul.medialist li.mediaitem a.medialink');
	
		// Go thru each media link. 
		for(let medialink of slidermedialinks) {
	
			// Activate media link. 
			medialink.addEventListener('click',openOverlay);
		}
	}

	// Activate slider shifters. 
	function activateShifters() {

		// Go thru each slide row shifter button. 
		for( let btn of sliderows['leftshifterbtns'] ) {

			// Shift selected slider to the left when clicked. 
			btn.addEventListener('click', decrSliderPageDelta);
		}
		// Go thru each slide row shifter button. 
		for( let btn of sliderows['rightshifterbtns'] ) {

			// Shift selected slider to the right when clicked. 
			btn.addEventListener('click', incrSliderPageDelta);
		}

		// Decrement page delta for given slide row. 
		function decrSliderPageDelta(event) {
			console.log('Left...',event);
		
			// Update attribute on selected slide row. 
			changeSliderPageDelta(-1,event);
		}
		
		// Increment page delta for given slide row. 
		function incrSliderPageDelta(event) {
			console.log('Right...',event);
		
			// Update attribute on selected slide row. 
			changeSliderPageDelta(+1,event);
		}

		// Change page delta for given slide row. 
		function changeSliderPageDelta(delta,event) {
			console.log('Changing...',event);
		
			// Get selected shifter button. 
			let shifter = event.currentTarget;
			// let delta = shifter.getAttribute('data-delta');
			// console.log('Selected shift btn:',delta,shifter);

			// Get selected slide row. 
			let selectedsliderow = shifter.parentElement.parentElement;
			// console.log('Selected slide row:',selectedsliderow);
		
			// Get current page delta. 
			let rs = getComputedStyle(selectedsliderow);
			let currentpagedelta = rs.getPropertyValue('--sliderpagedelta') * 1;
			console.log('Old page delta:',currentpagedelta);
		
			// Update attribute on selected slide row. 
			currentpagedelta += delta;
			currentpagedelta;
			selectedsliderow.style.setProperty('--sliderpagedelta',currentpagedelta);
			console.log('New page delta:',currentpagedelta);
		}
	}
}
