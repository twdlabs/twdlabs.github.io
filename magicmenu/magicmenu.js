


// Get menu items. 
const menuitems = document.querySelectorAll('div#container main.menu ul.menulist li.menuitem');

// Get dot indicator. 
const dotindicator = document.querySelector('div#container main.menu ul.menulist li.dot');


/*****/


// Activate tabs. 
activateTabs();


/*****/


// Activate tabs. 
function activateTabs() {

	// Go thru each menu item. 
	for(let menuitem of menuitems) {
	
		// Activate menu item. 
		menuitem.addEventListener('mouseenter',selectTab);
	}
}

// Clear all tabs. 
function clearAllTabs() {

	// Go thru each menu item. 
	for(let menuitem of menuitems) {
	
		// Clear menu item. 
		menuitem.classList.remove('active');
	}
}

// Select tab. 
function selectTab(event) {

	// Clear all tabs. 
	clearAllTabs();

	// Get selected menu item. 
	let selectedmenuitem = event.currentTarget;
	// Activate selected menu item. 
	selectedmenuitem.classList.add('active');

	// Get index from selected menu item. 
	let selectedmenuindex = selectedmenuitem.getAttribute('data-menuindex') * 1;
	// Show tab at selected menu index. 
	showTabAtIndex(selectedmenuindex);

	/****/

	// Show tab at given menu index. 
	function showTabAtIndex(menuindex) {
	
		// TODO: Get vertical position for dot indicator. 
		let dotposition = 100 * menuindex;

		// TODO: Move dot indicator. 
		dotindicator.style.transform = `translateY(${ dotposition }%)`;
	}
}
