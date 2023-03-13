


// Get mini frame. 
const miniframe = document.querySelector('div#container figure.miniframe');

// Get iframe of mini frame. 
const miniframepage = document.querySelector('div#container figure.miniframe iframe.page');

// Get all link items. 
const allLinkItems = document.querySelectorAll('div#container section.desktop div.group div.gbody a.item');


/*****/


// Activate mini frame. 
activateMiniFrame();


/*****/


// Activate mini frame. 
function activateMiniFrame() {
	
	// Go thru all link items. 
	for(let linkitem of allLinkItems) {

		// Show mini frame upon link hovering. 
		linkitem.addEventListener('mouseenter',showMiniFrame);
		// linkitem.addEventListener('mouseover',showMiniFrame);
		
		// Hide mini frame if no longer hovering on link. 
		linkitem.addEventListener('mouseleave',closeMiniFrame);
		// linkitem.addEventListener('mouseout',closeMiniFrame);
	}

	/****/

	// Set position of mini frame. 
	function setFramePosition(x,y,dx,dy) {
		// console.log(x,y,dx,dy);

		// Set vertical position of mini frame: underneath link. 
		miniframe.style.top = `${ y+dy }px`;
		console.log(miniframe.style.top);

		// Set horizontal position of mini frame: horizontally centered on link. 
		miniframe.style.left = `${ x/* +dx */ }px`;
		console.log(miniframe.style.left);

		// Set horizontal offet for pointer tip of miniframe. 
		miniframe.style.setProperty('--dx',`${dx/2}px`)
	}

	// Show mini frame. 
	function showMiniFrame(event) {
		console.log(event);
		
		// Get selected link item. 
		let linkitem = event.currentTarget;
		console.log(linkitem,linkitem.href);

		// Fill mini frame. 
		miniframepage.src = '';
		miniframepage.src = linkitem.href;

		// Show mini frame. 
		miniframe.classList.add('active');

		// Get position of selected link item. 
		let y0 = linkitem.offsetTop;
		let x0 = linkitem.offsetLeft;
		console.log('(x,y)',x0,y0);

		// Get size of selected link item. 
		let dx = linkitem.offsetWidth;
		let dy = linkitem.offsetHeight;
		console.log('(dx,dy)',dx,dy);

		// Set position of mini frame. 
		setFramePosition(x0,y0,dx,dy);
	}

	// Close mini frame. 
	function closeMiniFrame(event) {
		console.log(event);

		// Hide mini frame. 
		miniframe.classList.remove('active');
	}
}
