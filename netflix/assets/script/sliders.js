


// Load media sliders. 
function loadMediaSliders() {

	// Load media into slider rows. 
	loadMedia();

	// Activate slider media links. 
	activateMediaLinks();

	// Activate row sliders. 
	activateRowSliders();

	/****/

	// Load sample media into slider rows. 
	function loadMedia() {

		// Initialize layout for slider grid. 
		let slidergridlayout = '';

		// Select source of data for slider grid. 
		let slidergriddatasource = mediadatamatrix.length ? mediadatamatrix : samplemediadatamatrix;

		// Go thru data for each slide row. 
		for( let row of slidergriddatasource ) {

			// Add slide row to layout. 
			slidergridlayout += createSliderRow(row);
		}

		// Display layout for slide rows. 
		sliderows['grid'].innerHTML = slidergridlayout;

		/***/

		// Create layout for given slider row. 
		function createSliderRow(sliderow) {

			// Compile layout for given slide row. 
			return `
			<!-- sldrow -->
			<div class="sldrow row">

				<!-- rowhead -->
				<h2 class="rowhead">

					<!-- rowtitle -->
					<a class="rowtitle" href="javascript:void(0)">

						<!-- caption -->
						<span class="caption">${ /* 'Category' ?? */ sliderow['rowtitle'] }</span>
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
					<!-- /dotlist -->

				</h2>
				<!-- /rowhead -->

				<!-- rowbody -->
				<div class="rowbody">

					<!-- leftbtn -->
					<div class="leftbtn shifter">

						<!-- icon -->
						<svg class="icon chevronarrowthin left" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
						</svg>
						<!-- /icon -->

					</div>
					<!-- /leftbtn -->

					<!-- rightbtn -->
					<div class="rightbtn shifter">

						<!-- icon -->
						<svg class="icon chevronarrowthin right" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
						</svg>
						<!-- /icon -->

					</div>
					<!-- /rightbtn -->

					<!-- slider -->
					<div class="slider">

						<!-- medialist -->
						<ul class="medialist">${ createMediaListLayout(sliderow) }</ul>
						<!-- /medialist -->

					</div>
					<!-- /slider -->

				</div>
				<!-- /rowbody -->

			</div>
			<!-- /sldrow -->`;

			/**/

			// Compile layout for dot list. 
			function createDotListLayout() {

				// Initialize layout for dot list. 
				let dotlistlayout = '';

				// Define page size. 
				let pagesize = 4;

				// Get media count. 
				let mediacount = sliderow['mediasourcelist'].length;

				// TODO: Define page count. 
				let pagecount = mediacount / pagesize;

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

			// Create layout for media list. 
			function createMediaListLayout(sliderow) {

				// Initialize layout for slide row media list. 
				let sliderowmedialistlayout = '';

				// Create ordered list of indexes. 
				let orderedindexlist = createIndexList( sliderow['mediasourcelist'].length );
				// console.log('Media index list (ordered):',orderedindexlist);
				// Create shuffled list of indexes. 
				let shuffledindexlist = shuffleList(orderedindexlist);
				// console.log('Media index list (shuffled):',shuffledindexlist);

				// Save shuffled list of indexes. 
				sliderow['mediaindexlist'] = shuffledindexlist;

				// Go thru each media item (by index). 
				for(let currentindex of shuffledindexlist) {

					// Add media item to layout. 
					sliderowmedialistlayout += createMediaItemLayout(currentindex);
				}

				// Return layout for slide row media list. 
				return sliderowmedialistlayout;

				/**/

				// Create layout for media item. 
				function createMediaItemLayout(mediaindex) {

					// Get media item. 
					let mediaitem = sliderow['mediasourcelist'][mediaindex];

					// Compile layout for media item. 
					return `
					<!-- mediaitem -->
					<li class="mediaitem">
				
						<!-- medialink -->
						<a class="medialink" href="javascript:void(0)" data-pid="xyz" data-mediaindex="${ mediaindex }">
				
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
		
				// Shuffle list of items into random order. 
				function shuffleList(list) {
		
					// Create copy of list. 
					// let list = [].concat(list);
		
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
			}
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

	// Activate row sliders. 
	function activateRowSliders() {

		// Get row sliders. 
		sliderows['leftshifterbtns'] = document.querySelectorAll('div#container div.app div.sldrow div.rowbody div.shifter.leftbtn');
		sliderows['rightshifterbtns'] = document.querySelectorAll('div#container div.app div.sldrow div.rowbody div.shifter.rightbtn');

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

		window.addEventListener('resize',adjustMediaSliders);

		/***/

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
			let shifterbtn = event.currentTarget;
			// let delta = shifterbtn.getAttribute('data-delta');
			// console.log('Selected shifter btn:',delta,shifterbtn);

			// Get selected slide row. 
			let selectedsliderow = shifterbtn.parentElement.parentElement;
			// Get style of selected slide row. 
			let selectedsliderowstyle = getComputedStyle(selectedsliderow);
			// console.log('Selected slide row:',selectedsliderow,selectedsliderowstyle);

			// Get current page delta. 
			let oldpagedelta = selectedsliderowstyle.getPropertyValue('--sliderpagedelta') * 1;
			console.log('Old page delta:',oldpagedelta);

			// Calculate new page delta. 
			let newpagedelta = oldpagedelta + delta;
			console.log('New page delta:',newpagedelta);
			newpagedelta = regulateDelta(newpagedelta);
			console.log('New page delta:',newpagedelta);

			// Disregard if delta unchanged. 
			if(newpagedelta==oldpagedelta) return;

			// Allow for smooth transition. 
			setSmoothMode(1);

			// Update attribute on selected slide row. 
			selectedsliderow.style.setProperty('--sliderpagedelta',newpagedelta);

			// Remove smooth transition after transition time. 
			setTimeout( ()=>{ setSmoothMode(0) } , 500 );

			/**/

			// Ensure page delta within proper bounds. 
			function regulateDelta(delta) {

				// Define offset of row endpoint. 
				let endpointdelta = 4;

				// Ensure delta above lower bound. 
				if(delta<0) delta = 0;

				// Ensure delta below upper bound. 
				if(delta>=endpointdelta) delta = endpointdelta - 1;

				// Return regulated delta. 
				return delta;
			}

			// Set smooth mode. 
			function setSmoothMode(turnon) {

				// Turn on smooth transition. 
				if(turnon) selectedsliderow.classList.add('smooth');

				// Turn off smooth transition. 
				else selectedsliderow.classList.remove('smooth');
			}
		}

		// TODO: Adjust media sliders for page size. 
		function adjustMediaSliders() {

			// 
		}
	}
}
