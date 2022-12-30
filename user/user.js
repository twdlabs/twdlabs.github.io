


// Get user block. 
const userblock = document.querySelector('div#container main.user');

// Get profile button. 
const profilebtn = document.querySelector('div#container main.user a.profile');

// Get navigation menu. 
const navmenu = document.querySelector('div#container main.user nav.menu');

// Get navigation list. 
const navmenulist = document.querySelector('div#container main.user nav.menu ul.navlist');


/*****/


// Load navigation menu list. 
loadMenuList();

// Activate profile button. 
activateProfileBtn();


/*****/


// Activate profile button. 
function activateProfileBtn() {

	// 
	profilebtn.addEventListener('click',toggleNavMenu);

	/****/

	// Toggle navigation menu. 
	function toggleNavMenu() {
		// Toggle menu. 
		userblock.classList.toggle('open');
	}
}

// Load navigation menu list. 
function loadMenuList() {

	// Initialize result. 
	let result = '';
	
	// Go thru all menu items. 
	for(let menuItem of userListData) {

		// Add menu item to result. 
		result += createMenuItemLayout(menuItem)
	}
	
	// Add result to page. 
	navmenulist.innerHTML = result;

	// Activate menu items. 
	activateMenuItems();

	/****/

	// Create menu item. 
	function createMenuItemLayout(item) {

		// Compile components of menu item. 
		return `
		<!-- navitem -->
		<li class="navitem">
	
			<!-- navlink -->
			<a class="navlink" href="${item.url}">
	
				<!-- icon -->
				<svg class="icon ${item.icon}" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					${ iconData[item.icon] }
				</svg>
				<!-- /icon -->
	
				<!-- caption -->
				<span class="caption">${item.caption}</span>
				<!-- /caption -->
				
			</a>
			<!-- /navlink -->
	
		</li>
		<!-- /navitem -->`;
	}

	// Activate menu items. 
	function activateMenuItems() {
	
		// Get all menu items. 
		const allMenuItems = document.querySelectorAll('div#container main.user nav.menu ul.navlist li.navitem a.navlink');
		
		// Go thru all menu items. 
		for(let menuItem of allMenuItems) {
			
			// Enable menu item selection. 
			menuItem.addEventListener('click',selectMenuItem);
		}
	
		/***/
	
		// Select menu item. 
		function selectMenuItem() {
			
			// Take action on menu item. 

			// Close menu. 
			userblock.classList.remove('open');
		}
	}
}
