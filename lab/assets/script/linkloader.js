


// Get navigation sidebar. 
const headsidebar = document.querySelector('div#container header.navbar div.bin div.drawer');
// console.log('headsidebar:',headsidebar);

// Get list destinations for header navigation. 
const headnavdestination = {
	navlistA:document.querySelector('div#container header.navbar div.bin div.drawer div.navmenu.a ul.navlist'),
	navlistB:document.querySelector('div#container header.navbar div.bin div.drawer div.navmenu.b ul.navlist'),
};
// console.log('headnavdestination:',headnavdestination);

// Get list destinations for footer navigation. 
const footnavdestination = {
	navlistA:document.querySelector('div#container footer.footer div.grid div.linkline.a ul.navlist'),
	navlistB:document.querySelector('div#container footer.footer div.grid div.linkline.b ul.navlist'),
	navlistC:document.querySelector('div#container footer.footer div.grid div.linkline.c ul.navlist'),
};
// console.log('footnavdestination:',footnavdestination);


/*****/


// Load navigation links in header. 
loadNavLinks();

// Activate navigation sidebar. 
activateSidebar();


/*****/


// Create navigation item. 
function createNavLink(url,caption,icontag,usenewwindow,userelativeurl) {

	// Compile layout for navigation item. 
	return `
	<!-- navitem -->
	<li class="navitem">

		<!-- navlink -->
		<a class="navlink" href="${ url ? ( userelativeurl ? getRelativeUrl(url) : url ) : 'javascript:void(0)' }" title="${caption}" ${ url&&usenewwindow ? 'target="_blank"' : '' }>

			${ icontag ? createIcon(icontag) : '' }

			<!-- caption -->
			<span class="caption">${caption}</span>
			<!-- /caption -->

		</a>
		<!-- /navlink -->

	</li>
	<!-- /navitem -->`;

	/****/

	// Create layout for link icon. 
	function createIcon(icontag) {

		// Compile link icon. 
		return `
		<!-- icon -->
		<svg class="icon ${icontag}" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
			${ iconData[icontag] }
		</svg>
		<!-- /icon -->`;
	}
}

// Load navigation links. 
function loadNavLinks() {

	let navlinks = createLinkList(linkData['nav']['groupitems'],true,true);
	let sociallinks = createLinkList(linkData['social']['groupitems'],true,false);
	let footlinks = createLinkList(linkData['foot']['groupitems'],true,true);

	// Add page links in header. 
	headnavdestination['navlistA'].innerHTML = navlinks /* + footlinks */;

	// Add social links in header. 
	// headnavdestination['navlistB'].innerHTML = sociallinks;
	headnavdestination['navlistB'].innerHTML = footlinks;

	// Add page links in footer. 
	let space = '<span class="space"></span>';
	// footnavdestination['navlistA'].innerHTML = navlinks + space + footlinks;
	footnavdestination['navlistA'].innerHTML = navlinks;
	footnavdestination['navlistB'].innerHTML = sociallinks;
	footnavdestination['navlistC'].innerHTML = footlinks;

	/****/

	// Create layout for list of navigation links. 
	function createLinkList(linklist,usenewwindow,userelativeurl) {

		// Initialize list of items. 
		let list = '';

		// Accumulate list of items. 
		for(link of linklist) {

			// Get url for link. 
			let url = link.linkurl;

			// Get caption for link. 
			let caption = link.linkname;

			// Get icon tag for link. 
			let icontag = link.icontag;

			// Compile navigation item. 
			list += createNavLink(url,caption,icontag,usenewwindow,userelativeurl);
		}

		// Return list of items. 
		return list;
	}
}

// Activate navigation sidebar. 
function activateSidebar() {

	// Get all navigation togglers. 
	let allnavtogglers = document.querySelectorAll('.navtoggler');
	// console.log('All nav togglers:',allnavtogglers);

	// Activate each navigation toggler. 
	for(let navtoggler of allnavtogglers) {
		navtoggler.addEventListener('click',toggleSidebar);
	}

	/****/

	// Toggle state of navigation sidebar. 
	function toggleSidebar() {

		// Check if sidebar already open. 
		let alreadyopen = headsidebar.classList.contains('active');

		// Close sidebar if already open. 
		if(alreadyopen) {
			headsidebar.classList.remove('active');
			document.body.classList.remove('freeze');
			document.documentElement.classList.remove('freeze');
		}

		// Open sidebar if not already open. 
		else {
			headsidebar.classList.add('active');
			document.body.classList.add('freeze');
			document.documentElement.classList.add('freeze');
		}
	}
}
