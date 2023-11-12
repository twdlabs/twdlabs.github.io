


// Define tag scroller object. 
class TagSlider {

	// Create new tag scroller. 
	constructor(slider,tagbox,tagitems,leftedge,rightedge,leftslidebtn,rightslidebtn) {
		let anythingMissing = ( slider==null || tagbox==null || tagitems==null || leftedge==null || rightedge==null || leftslidebtn==null || rightslidebtn==null );
		if(anythingMissing) {
			console.error('Missing element for TagSlider');
			return;
		}

		// Initialize dragging state of tag list bin. 
		this.isCurrentlyDragging = false;
		
		// Define edge width (rem to px). 
		this.edgewidth = 4*16;

		// Get page elements for tag scroller. 
		this.slider = slider;
		this.tagbox = tagbox;
		this.tagitems = tagitems;
		// Get page elements for tag scroller edge. 
		this.leftedge = leftedge;
		this.rightedge = rightedge;
		this.leftslidebtn = leftslidebtn;
		this.rightslidebtn = rightslidebtn;

		// Handle events. 
		this.handleEvents();

		// Reset slider position. 
		this.slider.scrollLeft = 0;

		// Update state of edge buttons. 
		this.updateEdgeBtns();
	}

	/*****/

	// Handle events. 
	handleEvents() {
		// console.log('handleEvents',this);

		// Activate tags. 
		activateTags.bind(this)();
		
		// Activate tag scroller. 
		activateTagSlider.bind(this)();

		/*****/
		
		// Activate tags. 
		function activateTags() {
		
			// Go thru all tags. 
			for(let tag of this.tagitems) {

				// Activate tag: Select tag upon click. 
				tag.addEventListener('click', selectTag.bind(this) );
			}
		
			/****/
			
			// Select tag. 
			function selectTag(event) {
		
				// Get previously selected tag. 
				let oldtag = this.tagbox.querySelector('.active');
				// Get newly selected tag. 
				let newtag = event.currentTarget;

				// Un-highlight previously selected tag. 
				oldtag.classList.remove('active');

				// Highlight newly selected tag. 
				newtag.classList.add('active');
				console.log('New tag selected:',newtag.innerText);
			}
		}
		
		// Activate tag scroller. 
		function activateTagSlider() {
		
			// Respond to normal scroll. 
			this.slider.addEventListener('scroll', this.updateEdgeBtns.bind(this) );
			// Respond to scroll button clicks. 
			this.leftslidebtn.addEventListener('click', slideLeft.bind(this) );
			this.rightslidebtn.addEventListener('click', slideRight.bind(this) );
		
			// Start dragging. 
			this.tagbox.addEventListener('mousedown', startDragging.bind(this) );
			// Ccontinue dragging. 
			this.tagbox.addEventListener('mousemove', continueDragging.bind(this) );
			// Finish dragging. 
			document.addEventListener('mouseup', finishDragging.bind(this) );
		
			/****/
		
			// Show more tags from leftward direction. 
			function slideLeft() {
			
				// Decrement scroll position. 
				this.scrollDelta(-1);
			}
			// Show more tags from rightward direction. 
			function slideRight() {
			
				// Increment scroll position. 
				this.scrollDelta(+1);
			}
		
			// Start dragging. 
			function startDragging(event) {
				// console.log('Drag start:',event);
		
				// Turn on drag mode. 
				this.isCurrentlyDragging = true;
			}
			// Ccontinue dragging. 
			function continueDragging(event) {
		
				// Ignore mouse movement when not in drag mode. 
				if(!this.isCurrentlyDragging) return;
				// console.log('Dragging:',event);
		
				// Allow insta-movement of slider. Prevent tag clicks. 
				this.slider.classList.add('dragmode');
			
				// Get horizontal movement. 
				let dx = event.movementX;
				// console.log('\tdx:',dx);
			
				// Apply horizontal offset. 
				// console.log('\tscrollLeft b:', this.slider.scrollLeft);
				this.slider.scrollLeft -= dx;
				// console.log('\tscrollLeft a:', this.slider.scrollLeft);
			}
			// Finish dragging. 
			function finishDragging(event) {
				// console.log('Drag done:',event);
		
				// Turn off drag mode. 
				this.isCurrentlyDragging = false;
				this.slider.classList.remove('dragmode');
		
				// Update state of edge buttons. 
				this.updateEdgeBtns();
			}
		}
	}

	/*****/

	// Change scroll position of slider. 
	scrollDelta(delta) {
	
		// Update scroll position. 
		this.slider.scrollLeft += delta * (this.slider.clientWidth - this.edgewidth);
	
		// Update state of edge buttons. 
		this.updateEdgeBtns();
	}

	// Update state of edge buttons. 
	updateEdgeBtns() {
		// console.log('updateEdgeBtns',this);
		let asideconsole = document.querySelector('div#container aside.console span.caption');

		// Check if slider horizontally scrollable. 
		let notScrollableX = (this.slider.scrollLeftMax == 0) || (this.slider.clientWidth >= this.slider.scrollWidth);
		console.log('notScrollableX:',notScrollableX);
		
		// Set initial scroll status of slider. 
		let scrolledLeft = true;
		let scrolledRight = true;
		console.log('Scrolled left:',scrolledLeft);
		console.log('Scrolled right:',scrolledRight);

		// Note if slider not horizontally scrollable. 
		if(notScrollableX) {
			if(asideconsole) asideconsole.innerHTML = `n/a`;
		}

		// Note if slider horizontally scrollable. 
		else {
		
			// Get scroll percentage. 
			let px = (this.slider.scrollLeft / this.slider.scrollLeftMax);
			// console.log('px:',px, this.slider.scrollLeft, this.slider.scrollLeftMax);
			if(asideconsole) asideconsole.innerHTML = `${ (px*100).toFixed(1) }%`;
		
			// Check scroll status of slider. 
			scrolledLeft = px < .025;
			scrolledRight = px > .975;
			console.log('Scrolled left:',scrolledLeft,px);
			console.log('Scrolled right:',scrolledRight,px);
		}
	
		// Hide left button if scrolled to left edge. 
		if(scrolledLeft) (this.leftedge).classList.add('gone');
		// Show left button otherwise. 
		else (this.leftedge).classList.remove('gone');
	
		// Hide right button if scrolled to right edge. 
		if(scrolledRight) (this.rightedge).classList.add('gone');
		// Show right button otherwise. 
		else (this.rightedge).classList.remove('gone');
	}
}

