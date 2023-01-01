


// Get user block. 
const userblock = document.querySelector('div#container main.user');

// Get menu toggler button. 
const menutogglerbtn = document.querySelector('div#container main.user a.menutoggler');
// Get menu toggler avatar. 
const menutoggleravatar = document.querySelector('div#container main.user a.menutoggler img.avatar');

// Get navigation menu. 
const navmenu = document.querySelector('div#container main.user nav.menu');
// Get menu profile box. 
const profilebox = document.querySelector('div#container main.user nav.menu div.profile');
// Get user menu list. 
const usermenulist = document.querySelector('div#container main.user nav.menu ul.navlist.userlist');
// Get notification list. 
const notifmenulist = document.querySelector('div#container main.user nav.menu ul.navlist.notiflist');
// Get command menu list. 
const commandmenulist = document.querySelector('div#container main.user nav.menu ul.navlist.commandlist');
// Get bio editor field. 
const bioeditor = document.querySelector('div#container main.user nav.menu div.profileeditor textarea.bioeditor');


/*****/


// Define index of current user. 
let currentUserIndex = 16;


/*****/


// Load data for current user. 
loadCurrentUser();

// Load user menu list. 
loadUserMenuList();

// Load command menu list. 
loadCommandMenuList();

// Activate menu toggler. 
activateMenuToggler();


/*****/


// Load data for current user. 
function loadCurrentUser() {
	console.log('Current user index:',currentUserIndex);

	// Check for valid user index. 
	if( isNaN(currentUserIndex) ) return;

	// Get data for current user. 
	let currentUser = userDataList[currentUserIndex];
	console.log('Current user:',currentUser);

	// Load profile of current user. 
	loadUserProfile();

	// Load bio of current user. 
	loadUserBio();

	// Load notifications for current user. 
	loadUserNotifications();

	/****/

	// Load profile of current user. 
	function loadUserProfile() {

		// Get full name of current user. 
		let fullname = `${currentUser.fname} ${currentUser.lname}`;
	
		// Get avatar url for current user. 
		let avatarurl = currentUser.avatarurl;
	
		// Get email address of current user. 
		let email = currentUser.email;
	
		// Compile user data into menu profile. 
		profilebox.innerHTML = `
		<!-- avatar -->
		<img class="avatar" src="${ avatarurl }">
		<!-- /avatar -->
	
		<!-- name -->
		<h1 class="name">${ fullname }</h1>
		<!-- /name -->
	
		<!-- jobtitle -->
		<h2 class="jobtitle">${ email }</h2>
		<!-- /jobtitle -->`;

		// Load avatar to menu toggler. 
		menutoggleravatar.src = avatarurl;
	}

	// Load bio of current user. 
	function loadUserBio() {

		// Load user bio into editor. 
		bioeditor.value = currentUser.bio;
	}

	// Load notifications for current user. 
	function loadUserNotifications() {

		// Get user notifications. 
		// x = getUserNotifications();
	
		// Initialize result. 
		let result = '';

		// Get list of notifications. 
		// x.map( ()=>'' );

		// Go thru notifications list. 
		for(let i=0;i<10;i++) {
			// Create layout of current notification. 
			result += createNotificationLayout(/* notif */);
		}
		
		// Load user notifications into list. 
		notifmenulist.innerHTML = result;

		// Create notification layout. 
		function createNotificationLayout(/* notif */) {

			// 
			return `
			<!-- navitem -->
			<li class="navitem notif">
		
				<!-- navlink -->
				<a class="navlink" href="javascript:void(0)">
		
					<!-- icon -->
					<svg class="icon bell" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
					</svg>
					<!-- /icon -->
		
					<!-- caption -->
					<span class="caption">Caption</span>
					<!-- /caption -->
					
				</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->`;
		}
	}
}

// Load user menu list. 
function loadUserMenuList() {

	// Initialize result. 
	let result = '';
	
	// Go thru all user items. 
	for(let index in userDataList) {

		// Add user layout to result. 
		result += createUserItemLayout(index);
	}
	
	// Add result to user list. 
	usermenulist.innerHTML = result;

	// Activate user links. 
	activateUserLinks();

	/****/

	// Create layout for user at given index. 
	function createUserItemLayout(index) {

		// Get data for user at given index. 
		const user = userDataList[index];

		// Compile components of user menu item. 
		return `
		<!-- navitem -->
		<li class="navitem user" data-userindex="${index}">
	
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
					<span class="contact">${ user.userid }</span>
					<!-- /contact -->

				</div>
				<!-- /badge -->
				
			</a>
			<!-- /navlink -->
	
		</li>
		<!-- /navitem -->`;
	}

	// Select user link. 
	function selectUserLink(event) {

		// Get list item. 
		const li = (event.currentTarget).parentElement;
		
		// Update current user index to that of selected user. 
		currentUserIndex = li.getAttribute('data-userindex');

		// Load data for current user. 
		loadCurrentUser();

		// Close navigation menu. 
		closeNavigationMenu();
	}

	// Activate user links. 
	function activateUserLinks() {
	
		// Get all user links. 
		const allUserLinks = document.querySelectorAll('div#container main.user nav.menu ul.navlist.userlist li.navitem a.navlink');
		
		// Go thru all user links. 
		for(let userlink of allUserLinks) {
			
			// Enable user link selection. 
			userlink.addEventListener('click',selectUserLink);
		}
	}
}

// Load command menu list. 
function loadCommandMenuList() {

	// Initialize result. 
	let result = '';
	
	// Go thru all command items. 
	for(let index in userCommandList) {

		// Add command layout to result. 
		result += createCommandItemLayout(index)
	}
	
	// Add result to command list. 
	commandmenulist.innerHTML = result;

	// Activate user command links. 
	activateCommandLinks();

	/****/

	// Create layout for command at given index. 
	function createCommandItemLayout(index) {

		// Get data for command at given index. 
		let command = userCommandList[index];

		// Compile components of command menu item. 
		return `
		<!-- navitem -->
		<li class="navitem command" data-commandindex="${index}">
	
			<!-- navlink -->
			<a class="navlink" href="${ command.url }">
	
				<!-- icon -->
				<svg class="icon ${ command.icon }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					${ iconData[command.icon] }
				</svg>
				<!-- /icon -->
	
				<!-- caption -->
				<span class="caption">${ command.caption }</span>
				<!-- /caption -->
				
			</a>
			<!-- /navlink -->
	
		</li>
		<!-- /navitem -->`;
	}
	
	// Select user command link. 
	function selectCommandLink(event) {

		// Get list item. 
		const li = (event.currentTarget).parentElement;
		
		// Get index for selected command. 
		let commandindex = li.getAttribute('data-commandindex');

		// Take action on user command. 
		actOnUserCommand(commandindex);

		// Close navigation menu. 
		closeNavigationMenu();
	}

	// TODO: Take action on user command. 
	function actOnUserCommand(commandindex) {
		console.log( 'Selected:',userCommandList[commandindex].caption );
	}

	// Activate user command links. 
	function activateCommandLinks() {
	
		// Get all command links. 
		const allUserCommandLinks = document.querySelectorAll('div#container main.user nav.menu ul.navlist.commandlist li.navitem a.navlink');
		
		// Go thru all command links. 
		for(let commandlink of allUserCommandLinks) {
			
			// Enable command link selection. 
			commandlink.addEventListener('click',selectCommandLink);
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

// Toggle bio editor. 
function toggleBioEditor() {
	userblock.classList.remove('switchuser','notify');
	userblock.classList.toggle('editbio');
}

// Toggle notifications. 
function toggleNotifications() {
	userblock.classList.remove('editbio','switchuser');
	userblock.classList.toggle('notify');
}

// Toggle user switcher. 
function toggleUserSwitcher() {
	userblock.classList.remove('editbio','notify');
	userblock.classList.toggle('switchuser');
}
