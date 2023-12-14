


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

	// Go thru each navigation link. 
	for(let link of navlinks) {
	
		// Enable navigation link to show breadcrumbs. 
		// link.addEventListener('mouseenter', showBreadcrumbLayout);
		link.addEventListener('click', showBreadcrumbLayout);
	}
	
	/****/

	// Show breadcrumb layout on display: hierarchical order of pages for selected link. 
	function showBreadcrumbLayout(event) {
		console.log('Now creating breadcrumb layout...');

		// Get selected navigation link. 
		let selectednavlink = event.currentTarget;

		// Get list of ancestor items. 
		let ancestoritems = getAncestorLine();
		console.log('List of ancestor links:', ancestoritems);

		// Initialize breadcrumb layout. 
		let breadcrumblayout = '';

		// Add house icon to breadcrumb layout. 
		breadcrumblayout += createNavLink('', getIconByTag('house') );
		// Add navigation link to breadcrumb layout. 
		breadcrumblayout += createNavLink('','Home');

		// Go thru list of ancestor items. 
		for(let navitem of ancestoritems) {

			// Add connecting arrow icon to breadcrumb layout. 
			breadcrumblayout += getIconByTag('rightcaret');

			// Add navigation link to breadcrumb layout for current item. 
			breadcrumblayout += createNavLink(navitem.url,navitem.caption)
		}
		// console.log('Breadcrumbs:', breadcrumblayout);

		// Show breadcrumb layout on display. 
		breadcrumbdisplay.innerHTML = breadcrumblayout;

		/***/

		// Get list of ancestor items. 
		function getAncestorLine() {
			console.log('Now getting list of ancestor items...');

			// Initialize list of ancestor items. 
			let ancestorline = [];
	
			// Start with list item for selected navigation link. 
			let currentnavitem = selectednavlink.parentElement;
			console.log('Child navigation item:',currentnavitem);

			// Initialize continuation marker for hierarchical climb. 
			let continueclimbing = true;
	
			// Continue climb till current item is outside navigation menu. 
			while( continueclimbing ) {
	
				// Get link associated to current navigation item. 
				let navlink = currentnavitem.children[0];
				// Get url and caption of current item. 
				let url = navlink.href;
				let caption = navlink.innerText;
	
				// Save current link at top of ancestor line. 
				ancestorline.unshift({
					url:url,
					caption:caption,
				});
	
				// Move to parent of current item. 
				currentnavitem = getParentItem(currentnavitem);
				console.log('Current item:',currentnavitem);

				// Check if good to continue hierarchical climb. 
				continueclimbing = checkForNavItem(currentnavitem);
			}

			// Return list of ancestor items. 
			return ancestorline;

			/**/

			// Get parent item of given navigation item. 
			function getParentItem(navitem) {
				return navitem.parentElement.parentElement;
			}
	
			// Check for navigation menu item. 
			function checkForNavItem(item) {
				return item.classList.contains('navitem');
			}
		}

		// Create navigation link. 
		function createNavLink(url,caption) {
			return `
			<!-- navlink -->
			<a class="navlink" href="${ url ? url : 'javascript:void(0)' }">${ caption }</a>
			<!-- /navlink -->`;
		}

		// Get icon by tag. 
		function getIconByTag(tag) {
			return `<svg class="icon ${tag}" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">${ iconData[tag] }</svg>`;
		}
	}
}
