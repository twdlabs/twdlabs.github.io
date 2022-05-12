

// Add items. 
addItems();


/*****/


// Add items. 
function addItems() {

	// Get list element. 
	let menuList = document.querySelector('ul.navlist');
	// console.log('menuList',menuList);
	
	// Initialize result. 
	let result = '';
	
	// Create menu items. 
	for(let i=0 ; i<menuItems.length ; i++) {

		// Get data for menu item. 
		let item = menuItems[i];

		// 
		// Create menu item. 
		result += `
		<!-- navitem -->
		<li class="navitem" style="--i:${i};">
			<!-- navlink -->
			<a class="navlink" href="../${item.directory}/index.html" title="${item.name}" target="_blank">
				<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					${item.innersvg}
				</svg>
			</a>
			<!-- /navlink -->
		</li>
		<!-- /navitem -->`;
	}

	// Create cursor. 
	result += '<div id="cursor"></div>';

	// Add result to list. 
	menuList.innerHTML = result;
}
