


// Get user block. 
const userblock = document.querySelector('div#container main.user');

// Get menu toggler button. 
const menutogglerbtn = document.querySelector('div#container main.user a.menutoggler');

// Get navigation menu. 
const navmenu = document.querySelector('div#container main.user nav.menu');

// Get user menu list. 
const usermenulist = document.querySelector('div#container main.user nav.menu ul.navlist.userlist');

// Get command menu list. 
const commandmenulist = document.querySelector('div#container main.user nav.menu ul.navlist.commandlist');


/*****/


// Load user menu list. 
loadUserMenuList();

// Load command menu list. 
loadCommandMenuList();

// Activate menu toggler button. 
activateMenuToggler();


/*****/


// Load user menu list. 
function loadUserMenuList() {

	// Initialize result. 
	let result = '';
	
	// Go thru all user items. 
	for(let userItem of userDataList) {

		// Add user layout to result. 
		result += createUserItemLayout(userItem)
	}
	
	// Add result to user list. 
	usermenulist.innerHTML = result;

	/****/

	// Create layout for user item. 
	function createUserItemLayout(user) {

		// Compile components of user menu item. 
		return `
		<!-- navitem -->
		<li class="navitem user">
	
			<!-- navlink -->
			<a class="navlink" href="javascript:void(0)">

				<!-- avatar -->
				<img class="avatar" src="${ user.avatarurl }">
				<!-- /avatar -->

				<!-- badge -->
				<div class="badge">
	
					<!-- name -->
					<span class="name">${ `${user.fname} ${user.lname}` }</span>
					<!-- /name -->
	
					<!-- contact -->
					<span class="contact">${ user.userid && '' }</span>
					<!-- /contact -->

				</div>
				<!-- /badge -->
				
			</a>
			<!-- /navlink -->
	
		</li>
		<!-- /navitem -->`;
	}
}

// Load command menu list. 
function loadCommandMenuList() {

	// Initialize result. 
	let result = '';
	
	// Go thru all command items. 
	for(let commandItem of userCommandList) {

		// Add command layout to result. 
		result += createCommandItemLayout(commandItem)
	}
	
	// Add result to command list. 
	commandmenulist.innerHTML = result;

	// Activate user command links. 
	activateUserCommandLinks();

	/****/

	// Create layout for command item. 
	function createCommandItemLayout(item) {

		// Compile components of command menu item. 
		return `
		<!-- navitem -->
		<li class="navitem command">
	
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

	// Activate user command links. 
	function activateUserCommandLinks() {
	
		// Get all command links. 
		const allUserCommandLinks = document.querySelectorAll('div#container main.user nav.menu ul.navlist.commandlist li.navitem a.navlink');
		// const allUserCommandLinks = commandmenulist.querySelectorAll('li.navitem a.navlink');
		
		// Go thru all command links. 
		for(let commandlink of allUserCommandLinks) {
			
			// Enable command link selection. 
			commandlink.addEventListener('click',selectCommandLink);
		}
	
		/***/
	
		// Select user command link. 
		function selectCommandLink() {
			
			// TODO: Take action on user command. 

			// Close navigation menu. 
			closeNavigationMenu();
		}
	}
}

// Activate menu toggler button. 
function activateMenuToggler() {

	// Toggle navigation menu upon click of toggler button. 
	menutogglerbtn.addEventListener('click',toggleNavMenu);

	// Close navigation menu if clicked outside of menu. 
	document.addEventListener('click',closeIfOutsideNavMenu);

	/****/

	// Toggle navigation menu. 
	function toggleNavMenu() {

		// Check if navigation menu currently open. 
		let menuCurrentlyOpen = userblock.classList.contains('open');
		// console.log('Menu currently open:',menuCurrentlyOpen);

		// Close navigation menu if already open. 
		if(menuCurrentlyOpen) {
			// Close navigation menu. 
			closeNavigationMenu();
		}

		// Open navigation menu if not already open. 
		else {
			// Open navigation menu. 
			openNavigationMenu();
		}
	}

	// Close navigation menu if clicked outside of menu. 
	function closeIfOutsideNavMenu(event) {

		// Check if navigation menu currently open. 
		let menuCurrentlyOpen = userblock.classList.contains('open');
		// console.log('Menu currently open:',menuCurrentlyOpen);

		// Check if clicked outside menu. 
		let clickedOutsideMenu = !( userblock.contains(event.target) );
		// console.log('Clicked outside menu:',clickedOutsideMenu,event.target);

		// Close menu if both true: nav menu currently open & clicked outside menu. 
		if(menuCurrentlyOpen && clickedOutsideMenu) closeNavigationMenu();
	}
}

// Open navigation menu. 
function openNavigationMenu() {

	// Freeze page scrollling. 
	document.documentElement.classList.add('freeze');
	document.body.classList.add('freeze');

	// Hide user switcher. 
	userblock.classList.remove('switchuser');

	// Open menu block. 
	userblock.classList.add('open');
}

// Close navigation menu. 
function closeNavigationMenu() {

	// Un-freeze page scrollling. 
	document.documentElement.classList.remove('freeze');
	document.body.classList.remove('freeze');

	// Close menu block. 
	userblock.classList.remove('open');

	// Hide user switcher. 
	userblock.classList.remove('switchuser');
}

// Toggle user switcher. 
function toggleUserSwitcher() {
	// Toggle user switcher. 
	userblock.classList.toggle('switchuser');
}
