


// Get mini frame. 
const miniframe = document.querySelector('div#container figure.miniframe');

// Get iframe of mini frame. 
const miniframepage = document.querySelector('div#container figure.miniframe iframe.page');


// Load desktop items. 
loadDesktopItems();


/*****/


// Load desktop items. 
function loadDesktopItems() {
	// console.log(projectNames);

	// Define group categories. 
	const groupCategories = ['0-9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

	// Initialize result. 
	let result = '';

	// Open group. 
	result += ``;
	
	// Add app link to result. 
	for(let name of projectNames) {
		// 
		result += createLinkItem(name)
	}

	// Close group. 
	result += ``;
	
	// Add result to page. 
	document.querySelector('div#container main.desktop div.group div.gbody').innerHTML = result;

	// Activate mini frame. 
	activateMiniFrame();

	// Activate group headers. 
	activateGroupHeaders();

	/****/

	// Create link item. 
	function createLinkItem(name) {
		// 
		return `
		<!-- item -->
		<a class="item" href="../${name}" target="_blank">
		
			<!-- icon -->
			<svg class="icon app" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
			</svg>
			<!-- /icon -->
		
			<!-- caption -->
			<span class="caption">${name}</span>
			<!-- /caption -->
			
		</a>
		<!-- /item -->`;
	}

	// Activate mini frame. 
	function activateMiniFrame() {

		// Get all link items. 
		const allLinkItems = document.querySelectorAll('div#container main.desktop div.group div.gbody a.item');
		
		// Go thru all link items. 
		for(let linkitem of allLinkItems) {
	
			// Show mini frame upon link hovering. 
			linkitem.addEventListener('mouseenter',showMiniFrame);
			// linkitem.addEventListener('mouseover',showMiniFrame);
			
			// Hide mini frame if no longer hovering on link. 
			linkitem.addEventListener('mouseleave',closeMiniFrame);
			// linkitem.addEventListener('mouseout',closeMiniFrame);
		}
	
		/***/

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
	
			/**/
	
			// Set position of mini frame. 
			function setFramePosition(x,y,dx,dy) {
				console.log(x,y,dx,dy);
	
				// Set vertical position of mini frame. 
				miniframe.style.top = `${y+dy}px`;
				console.log(miniframe.style.top);
	
				// Set horizontal position of mini frame. 
				miniframe.style.left = `${x/* +dx */}px`;
				console.log(miniframe.style.left);
	
				// 
				miniframe.style.setProperty('--dx',`${dx/2}px`)
			}
		}
	
		// Close mini frame. 
		function closeMiniFrame(event) {
			console.log(event);
	
			// Hide mini frame. 
			miniframe.classList.remove('active');
		}
	}

	// Activate group headers. 
	function activateGroupHeaders() {

		// Get all group headers. 
		let allGroupHeaders = document.querySelectorAll('div#container main.desktop div.group div.ghead');
	
		// Go thru all group headers. 
		for(let groupheader of allGroupHeaders) {
			// Toggle selected group upon header click. 
			groupheader.addEventListener('click',toggleGroup);
		}
	
		/***/

		// Toggle selected group. 
		function toggleGroup(event) {
			console.log(event);
	
			// Get selected group. 
			let selectedGroup = event.currentTarget.parentElement;
			
			// Toggle selected group. 
			selectedGroup.classList.toggle('active');
		}
	}
}
