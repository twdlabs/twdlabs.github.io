


// How can these procedures apply to a multi-page website ?


// Get display for breadcrumbs. 
const breadcrumbdisplay = document.querySelector('div#container main.main div#display');

// Get destination for navigation links. 
const navlinksdestination = document.querySelector('div#container main.main nav.navmenu');

// Get all navigation links. 
const navlinks = document.querySelectorAll('div#container main.main nav.navmenu a.navlink');


/*****/


// Load navigation links. 
// loadNavLinks();

// Activate navigation links. 
activateLinks();


/*****/


// TODO: Load navigation links. 
function loadNavLinks() {

	// Initialize result. 
	let result = '';

	// Define current level. 
	// let currentLevel = 

	// Go thru hierarchy of site map, level by level. 
	while(true) {

		// 
		result += ``;
	}

	// Display result. 
	navlinksdestination.innerHTML =  result;
}

// Activate navigation links. 
function activateLinks() {

	// Go thru all navigation links. 
	for(let link of navlinks) {
	
		// Activate link click for navigation link. 
		// link.addEventListener('mouseenter', showBreadcrumbs);
		link.addEventListener('click', showBreadcrumbs);
	}
	
	/****/

	// Display hierarchical order of pages for selected link. 
	function showBreadcrumbs(event) {
	
		// Get selected navigation link. 
		let selectednavlink = event.currentTarget;
	
		// Show breadcrumb layout on display. 
		breadcrumbdisplay.innerHTML = createBreadcrumbLayout();
	
		/***/
	
		// Get breadcrumb layout: hierarchical order of pages. 
		function createBreadcrumbLayout() {
			console.log('Now creating breadcrumb layout...');
	
			// Get list of ancestor links. 
			let ancestorlinks = getAncestorLine();
			console.log('List of ancestor links:', ancestorlinks);
	
			// Initialize breadcrumb layout of ancestor name links. 
			let breadcrumblayout = `
			<!-- navlink -->
			<a class="navlink" href="javascript:void(0)">Home</a>
			<!-- /navlink -->`;
	
			// Add icon to breadcrumb layout of ancestor name links. 
			// breadcrumblayout = `
			// <!-- navlink -->
			// <a class="navlink" href="javascript:void(0)">${ getIconByTag('house') }</a>
			// <!-- /navlink -->`;
	
			// Go thru list of ancestor link items. 
			for(let navitem of ancestorlinks) {
	
				// Add connecting arrow. 
				breadcrumblayout += getIconByTag('rightcaret');
	
				// Add link for current navigation item. 
				breadcrumblayout += `
				<!-- navlink -->
				<a class="navlink" href="${navitem.url}">${navitem.name}</a>
				<!-- /navlink -->`;
			}
			// console.log('Breadcrumbs:', breadcrumblayout);
	
			// Return breadcrumb layout of ancestor name links. 
			return breadcrumblayout;
	
			/**/
	
			// Get list of ancestor links. 
			function getAncestorLine() {
				console.log('Now getting list of ancestor links...');
	
				// Initialize list of ancestor links. 
				let result = [];
		
				// Start at selected navigation item. 
				let currentItem = selectednavlink.parentElement;
				console.log('Selected navigation item:',currentItem);
	
				// Check if good to continue going. 
				let continueGoing = isValidNavItem(currentItem);
		
				// Continue while item is valid navigation item. 
				while( continueGoing ) {
		
					// Get associated navigation link. 
					let navlink = currentItem.children[0];
					// Get name and url of current item. 
					let name = navlink.innerText;
					let url = navlink.href;
		
					// Save link at top of ancestor list. 
					result.unshift({
						name:name,
						url:url,
					});
		
					// Move to next potential ancestor item. 
					currentItem = getParentItem(currentItem);
					console.log('Current item:',currentItem);
				}
	
				// Return list of ancestor links. 
				return result;
	
				/**/
	
				// Get parent item of given navigation item. 
				function getParentItem(navitem) {
					return navitem.parentElement.parentElement;
				}
		
				// Check for valid navigation item. 
				function isValidNavItem(item) {
					return item.classList.contains('navitem');
				}
			}
	
			// Get icon by tag. 
			function getIconByTag(tag) {
				return `<svg class="icon ${tag}" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">${ iconData[tag] }</svg>`;
			}
		}
	}
}
