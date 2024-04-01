


// Get container for menu list. 
const menulist = document.querySelector('div#container main.menu ul.menulist');

// Get dot indicator. 
// const dotindicator = document.querySelector('div#container main.menu ul.menulist li.dot');

// Initialize index for selected menu item. 
let selectedmenuindex = -1;


/*****/


// Add tabs. 
addTabs();

// Activate tabs. 
activateTabs();


/*****/


// Add tabs. 
function addTabs() {

	// Initialize result. 
	let result = '';

	// Go thru each menu item. 
	for(let menuindex in menudata) {
		
		// Add to result: layout for menu item. 
		result += createTab(menuindex);
	}

	// Display result. 
	menulist.innerHTML = result;

	/****/

	// Create layout for menu item. 
	function createTab(menuindex) {
		
		// Get details for given menu item. 
		let menuitem = menudata[menuindex];
		let icontag = menuitem.icontag;
		let currentlyselected = (menuindex==selectedmenuindex);
		
		// Compile layout for menu item. 
		return `
		<!-- menuitem -->
		<li class="menuitem${ currentlyselected ? ' active' : '' }" data-menuindex="${ menuindex }">

			<!-- menulink -->
			<a class="menulink" href="javascript:void(0)">

				<!-- icon -->
				<svg class="icon ${ icontag }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					${ icondata[icontag] }
				</svg>
				<!-- /icon -->

				<!-- caption -->
				<span class="caption">${ menuitem.caption }</span>
				<!-- /caption -->

			</a>
			<!-- /menulink -->
			
		</li>
		<!-- /menuitem -->`;
	}
}

// Activate tabs. 
function activateTabs() {

	// Get menu items. 
	const menuitems = document.querySelectorAll('div#container main.menu ul.menulist li.menuitem');

	// Go thru each menu item. 
	for(let menuitem of menuitems) {
	
		// Activate menu item. 
		// menuitem.addEventListener('mouseenter',selectTab);
		menuitem.addEventListener('click',selectTab);
	}
	
	/****/

	// Select tab. 
	function selectTab(event) {
		console.log('selectTab');
	
		// Clear all tabs. 
		clearAllTabs();
	
		// Get selected menu item. 
		let selectedmenuitem = event.currentTarget;
		// Save index from selected menu item. 
		selectedmenuindex = selectedmenuitem.getAttribute('data-menuindex') * 1;

		// Activate selected menu item. 
		selectedmenuitem.classList.add('active');

		// Highlight tab at selected menu index. 
		setStyleValue('selectedmenuindex',`${selectedmenuindex}`);

		// Get name of color associated with selected menu item. 
		let colorname = menudata[selectedmenuindex].colorname;

		// TODO: Assign selected color to menu (by style variable). 
		document.body.style.backgroundColor = `var(--${colorname})`;
		console.log(`var(--${colorname})`);
	
		/***/

		// Clear all tabs. 
		function clearAllTabs() {
		
			// Go thru each menu item. 
			for(let menuitem of menuitems) {
			
				// Clear menu item. 
				menuitem.classList.remove('active');
			}
	
			// Update index for no selection. 
			selectedmenuindex = -1
		}
	}
}


/*****/


// Get existing style value. 
function getStyleValue(name) {

	// Add variable prefix if needed. 
	if(name.sub[0]!='-') name = `--${name}`;

	// Get styles at root level. 
	let style = getComputedStyle(document.documentElement);

	// Return style value. 
	return style.getPropertyValue(name);
}

// Set new style value. 
function setStyleValue(name,value) {

	// Disregard if no value. 
	if(!value) return;

	// Add variable prefix if needed. 
	if(name.sub[0]!='-') name = `--${name}`;

	// Assign value to given variable. 
	document.documentElement.style.setProperty(name,value);
}
