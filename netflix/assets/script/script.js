


// Get navbar. 
const navbar = document.querySelector('div#container nav.navbar');

// Get overlay. 
let overlaybox = document.querySelector('div#overlay');

// Get all slider rows. 
let allsliderrowdestinations = document.querySelectorAll('div#container div.slider ul.medialist');


/*****/


// Load media into slider rows. 
loadSliderMedia();

// Activate dynamic change of navbar. 
activateNavbarDynamic();


/*****/


// Load media into slider rows. 
function loadSliderMedia() {

	// Go thru each slider row. 
	for(let sliderrowdestination of allsliderrowdestinations) {
	
		// Initialize layout of slider row. 
		let sliderlayout = '';

		// Shuffle list of media items. 
		let medialist = shuffleList(galleryMediaData);
		
		// Go thru each media item. 
		for( let mediaitem of medialist ) {
		
			// Add media item to slider layout. 
			sliderlayout += createMediaItemLayout(mediaitem);
		}
	
		// Display layout in slider row. 
		sliderrowdestination.innerHTML = sliderlayout;
	}

	// Activate slider links. 
	activateSliderLinks();

	/****/

	// Shuffle list of items. 
	function shuffleList(list) {
		
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
		return list.sort( (a,b)=>( b['fullimageurl']-a['fullimageurl'] ) );
	}

	// Create layout for media item. 
	function createMediaItemLayout(mediaitem) {

		// Compile layout for media item. 
		return `
			<!-- mediaitem -->
			<li class="mediaitem">
		
				<!-- medialink -->
				<a class="medialink" href="javascript:void(0)">
		
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
		let slidermedialinks = document.querySelectorAll('div#container div.slider ul.medialist li.mediaitem a.medialink');
	
		// Go thru each media link. 
		for(let medialink of slidermedialinks) {
	
			// Activate media link. 
			medialink.addEventListener('click',openOverlay);
		}
	
		/***/
	
		// Open overlay. 
		function openOverlay() {
			overlaybox.classList.add('active');
		}
	}
}

// Activate dynamic change of navbar. 
function activateNavbarDynamic() {
	console.log('Scroll level:',scrolllevel);

	// Update state of navbar upon user scroll. 
	document.scrollingElement.addEventListener('scroll',updateNavbar);

	// Update state of navbar. 
	function updateNavbar() {

		// Check scroll level. 
		let scrolllevel = document.scrollingElement.scrollTop;
		console.log('Scroll level:',scrolllevel);
		

		// Update state of navbar based on scroll level. 
		if(scrolllevel==0) navbar.classList.remove('scr');
		else navbar.classList.add('scr');
	}
}
