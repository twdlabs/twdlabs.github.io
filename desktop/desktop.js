


// Get mini frame. 
const miniframe = document.querySelector('div#container figure.miniframe');

// Get iframe of mini frame. 
const miniframepage = document.querySelector('div#container figure.miniframe iframe.page');


// Load desktop items. 
loadDesktopItems();


/*****/


// Load desktop items. 
function loadDesktopItems() {
	console.log(projectNames);

	// Initialize result. 
	let result = '';
	
	// Add app link to result. 
	for(let name of projectNames) result += `
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
	
	// Add result to page. 
	document.querySelector('div#container main.desktop div.gbody').innerHTML = result;

	// Get all link items. 
	const allLinkItems = document.querySelectorAll('div#container main.desktop div.gbody a.item');

	// 
	for(let linkitem of allLinkItems) {
		// 
		linkitem.addEventListener('mouseenter',showMiniFrame);
		// linkitem.addEventListener('mouseover',showMiniFrame);
		// 
		linkitem.addEventListener('mouseleave',closeMiniFrame);
		// linkitem.addEventListener('mouseout',closeMiniFrame);
	}

	// Show mini frame. 
	function showMiniFrame(event) {
		console.log(event);
		
		// Get selected link item. 
		let linkitem = event.currentTarget;
		console.log(linkitem,linkitem.href);

		// Fill mini frame. 
		miniframepage.src = linkitem.href;

		// Show mini frame. 
		miniframe.classList.add('active');

		// Set position of mini frame. 
		setFramePosition();

		/****/

		// TODO: Set position of mini frame. 
		function setFramePosition() {

			// 
		}
	}

	// Close mini frame. 
	function closeMiniFrame(event) {
		console.log(event);

		// Hide mini frame. 
		miniframe.classList.remove('active');

		// 
		// xyz = document.querySelector();
	}
}
