

// Toggle navbar slide drawer. 
function toggleDrawer(id) {
	console.log('Toggling drawer:',id);

	// Bring focus to search query field if search selected. 
	if(id=='searchbar') {
		let field = document.getElementById('searchquery');
		field.focus();
		field.value = '';
	}

	// Bring focus to user id field if login selected. 
	if(id=='loginbox') {
		let field = document.getElementById('userid');
		field.focus();
		field.value = '';
	}

	// Close all other drawers. 
	closeAllDrawersBut(id);
	
	// Toggle selected drawer. 
	document.getElementById(id).classList.toggle('active');

	// Set scroll mode. 
	setScrollMode();

	// Set toggle button mode. 
	setToggleButtonMode();
}


// Open navbar slide drawer. 
function openDrawer(id) {
	console.log('Opening drawer:',id);

	// Close all other drawers. 
	closeAllDrawersBut(id);
	
	// Open selected drawer. 
	document.getElementById(id).classList.add('active');

	// Set scroll mode. 
	// setScrollMode();

	// Set toggle button mode. 
	setToggleButtonMode();
}


// Close all other navbar slide drawers. 
function closeAllDrawersBut(exceptionId) {
	// console.log('Closing all drawers except:', (exceptionId?exceptionId:'none') );

	// let drawerIds = ['navlist','searchbar','likebox','cartbox','accountbox'];

	// Get all nav drawers. 
	let navDrawers = document.querySelectorAll('div.navbin');
	navDrawers = [...navDrawers];
	// console.log('navDrawers', navDrawers);

	// Get id's for all nav drawers. 
	let drawerIds = navDrawers.map( (node) => (node.id) );
	// console.log('drawerIds', drawerIds);

	// De-activate all other drawers. 
	for(id of drawerIds) {
		// Set drawer as inactive. 
		if(id!=exceptionId) document.getElementById(id).classList.remove('active');
	}

	// Set scroll mode. 
	setScrollMode();

	// Set toggle button mode. 
	setToggleButtonMode();
}

// Set scroll mode: Check if drawer open, and freeze browser window scroll if open. 
function setScrollMode() {

	// Get all nav drawers. 
	let navDrawers = document.querySelectorAll('div.navbin');
	navDrawers = [...navDrawers];
	// console.log('navDrawers', navDrawers);

	// Check if any drawer open. 
	let drawerOpen = false;
	for(drawer of navDrawers) {
		if( drawer.classList.contains('active') ) {
			drawerOpen = true;
			break;
		}
	}
	
	// Freeze browser window scroll when drawer open. 
	if(drawerOpen) {
		document.body.classList.add('freeze');
		document.documentElement.classList.add('freeze');
	}
	else {
		document.body.classList.remove('freeze');
		document.documentElement.classList.remove('freeze');
	}
}


// Set toggle button mode. 
function setToggleButtonMode() {

	// Get all drawers.
	let allDrawers = document.querySelectorAll('div.navbin');
	// console.log('allDrawers',allDrawers);

	// Get all drawer handles (togglers).
	let allTogglers = document.querySelectorAll('a.navlink.toggler');
	// console.log('allTogglers',allTogglers);

	// Set appropriate state for each drawer handle (toggler). 
	for(let i=0 ; i<allDrawers.length ; i++) {

		// Get drawer. 
		let drawer = allDrawers[i];
		// console.log('drawer',drawer);
		
		// Get corresponding drawer handle (toggler). 
		let toggler = allTogglers[i];
		// console.log('toggler',toggler);

		// Check if drawer open. 
		let drawerOpen = drawer.classList.contains('active');
		// console.log('drawerOpen',drawerOpen);

		// Change toggler button mode based on drawer open state. 
		if(drawerOpen) toggler.classList.add('active');
		else toggler.classList.remove('active');
	}
}
