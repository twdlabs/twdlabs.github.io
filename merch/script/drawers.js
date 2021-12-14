

// Toggle navbar slide drawer. 
function toggleDrawer(id) {
	console.log('Toggling drawer');

	// Close all other drawers. 
	closeOtherDrawers(id);
	
	// Toggle selected drawer. 
	document.getElementById(id).classList.toggle('active');

	// Set drawer scroll mode. 
	setDrawerScrollMode();
}


// Open navbar slide drawer. 
function openDrawer(id) {
	console.log('Opening drawer...');

	// Close all other drawers. 
	closeOtherDrawers(id);
	
	// Open selected drawer. 
	document.getElementById(id).classList.add('active');

	// Set drawer scroll mode. 
	setDrawerScrollMode();
}


// Close all other navbar slide drawers. 
function closeOtherDrawers(exceptionId) {
	// let drawerIds = ['navlist','searchbar','likebox','cartbox','accountbox'];

	// Get all nav drawers. 
	let navDrawers = document.querySelectorAll('.navdrawer');
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

	// Set drawer scroll mode. 
	setDrawerScrollMode();
}

// Set drawer scroll mode. 
// Check if drawer open. If so, freeze browser window scroll. 
function setDrawerScrollMode() {

	// Get all nav drawers. 
	let navDrawers = document.querySelectorAll('.navdrawer');
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
