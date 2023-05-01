


// Get menu destination. 
const menudestination = document.querySelector('div#container nav.sidebar div.destination');

// Initialize all menu items. 
let menulinks/*  = document.querySelectorAll('div#container nav.sidebar div.navmenu ul.navlist li.navitem a.navlink') */;

// Initialize all sub-menu titles. 
let submenutitles/*  = document.querySelectorAll('div#container nav.sidebar div.navmenu ul.navlist li.navitem div.navmenu h2.head') */;


/*****/


// Define back icon. 
const backicon = `
<!-- icon -->
<svg class="icon arrowleft" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
	<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
<!-- /icon -->`;

// Define forward icon. 
const fwdicon = `
<!-- icon -->
<svg class="icon arrowright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
	<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
<!-- /icon -->`;


/*****/


// Load multi-menu. 
loadMultiMenu();

// Activate multi-menu. 
activateMultiMenu();


/*****/


// Load multi-menu. 
function loadMultiMenu() {

	// Set initial menu level. 
	// let currentMenu = menuData;

	// Load multi-menu from menu database. 
	menudestination.innerHTML = createMenu(menuData,0);

	/****/

	// Create menu. 
	function createMenu(currentMenu,currentlevel) {
		console.log('Creating menu, level', currentlevel);

		// Initialize result. 
		let result = '';

		// Get menu name. 
		let menuname = currentMenu.itemname;

		// Get menu name. 
		let menulist = currentMenu.menulist;

		// Define atTopLevel. 
		let atTopLevel = (currentlevel==0);

		// 
		result += `
		<!-- navmenu -->
		<div class="navmenu ${ atTopLevel ? 'home' : '' }">

			<!-- head -->
			<h2 class="head">

				${ atTopLevel ? '' : backicon }

				<!-- caption -->
				<span class="caption">${ menuname }</span>
				<!-- /caption -->
				
			</h2>
			<!-- /head -->
	
			<!-- navlist -->
			<ul class="navlist">
				${ createMenuItems(menulist) }
			</ul>
			<!-- /navlist -->

		</div>
		<!-- /navmenu -->`;

		// Return result. 
		return result;

		/***/
	
		// Create menu items. 
		function createMenuItems(menulist) {

			// Initialize result. 
			let menuitems = '';

			// Go thru menu items. 
			for(let menuitem of menulist) {

				// Get name of current menu item. 
				let name = menuitem.itemname;

				// Get sub-menu of current menu item. 
				let submenu = menuitem.menulist;

				// 
				menuitems += `
				<!-- navitem -->
				<li class="navitem">
	
					<!-- navlink -->
					<a class="navlink" href="javascript:void(0)"${ submenu.length ? `data-golevelsdeep="${ currentlevel+1 }"` : '' }>
	
						<!-- caption -->
						<span class="caption">${ name }</span>
						<!-- /caption -->

						${ submenu.length ? fwdicon : '' }
	
					</a>
					<!-- /navlink -->

					${ submenu.length ? createMenu(menuitem,currentlevel+1) : '' }
	
				</li>
				<!-- /navitem -->`;
			}

			// Return result. 
			return menuitems;
		}
	}
}

// Activate multi-menu. 
function activateMultiMenu() {

	// Get all menu items. 
	menulinks = document.querySelectorAll('div#container nav.sidebar div.navmenu ul.navlist li.navitem a.navlink');
	
	// Get all sub-menu titles. 
	submenutitles = document.querySelectorAll('div#container nav.sidebar div.navmenu ul.navlist li.navitem div.navmenu h2.head');

	// Go thru all menu items. 
	for(let link of menulinks) {
	
		// Activate click of menu link: forward motion. 
		link.addEventListener('click',openSubMenu);
	
		// Activate hover of menu link. 
		// link.addEventListener('mouseenter',openSubMenu);
		// link.addEventListener('mouseleave',closeSubMenu);
	}
	
	// Go thru all sub-menu titles. 
	for(let title of submenutitles) {
	
		// Activate click of sub-menu title: backward motion. 
		title.addEventListener('click',closeSubMenu);
	}

	/****/
	
	// Open sub-menu. 
	function openSubMenu(event) {
		// console.log('Opening sub-menu...');
	
		// Get selected navigation item. 
		let selectedLink = event.currentTarget;
		let selectedItem = selectedLink.parentElement;
		// console.log('Selected item:',selectedItem,selectedLink);
	
		// Get level of sub-menu. 
		let haslevelsdeep = selectedLink.hasAttribute('data-golevelsdeep');
		// console.log('haslevelsdeep:',haslevelsdeep);
	
		// 
		if(haslevelsdeep) {
	
			// Get level of sub-menu. 
			let levelsdeep = selectedLink.getAttribute('data-golevelsdeep') * 1;
			// console.log('levelsdeep:',levelsdeep);
	
			// Apply level of sub-menu. 
			document.querySelector(':root').style.setProperty('--levelsdeep',levelsdeep);
		}
	
		// Open submenu of selected navigation item. 
		selectedItem.classList.add('showsub');
	}
	
	// Close sub-menu. 
	function closeSubMenu(event) {
		// console.log('Closing sub-menu...');
	
		// Get selected navigation item. 
		let selectedTitle = event.currentTarget;
		let selectedItem = selectedTitle.parentElement.parentElement;
		// console.log('Selected item:',selectedItem);
	
		// Close submenu of selected navigation item. 
		selectedItem.classList.remove('showsub');
		// selectedItem.classList.add('nosub');
	
		// Get all child items. 
		let childItems = selectedItem.querySelectorAll('li.navitem');
		for(let item of childItems) {
	
			// 
			item.classList.remove('showsub');
		}
	
		// Get current sub-menu level. 
		let levelsdeep = document.querySelector(':root').style.getPropertyValue('--levelsdeep') * 1;
	
		// Decrement sub-menu level. 
		document.querySelector(':root').style.setProperty('--levelsdeep',levelsdeep-1);
	}
}
