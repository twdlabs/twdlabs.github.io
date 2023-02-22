


// Set conditions for closure of context menu. 
document.body.addEventListener('scroll',closeContextMenu);
document.documentElement.addEventListener('scroll',closeContextMenu);
document.scrollingElement.addEventListener('scroll',closeContextMenu);


/*****/


// Open context menu. 
function openContextMenu(event) {
	console.log('Opening context menu:',event);

	// Prevent opening of default context menu. 
	event.preventDefault();

	// Get selected entry row. 
	let selectedrow = event.currentTarget;
	// console.log('Selected row:',selectedrow);

	// Get vertical offset for parent of selected entry row. 
	let parentOffsetY = selectedrow.parentElement.offsetTop;
	// console.log('Parent vertical offset:',parentOffsetY);
	// Get position of context menu. 
	let x = event.pageX;
	let y = event.pageY;
	
	// Get context menu for selected entry row. 
	// let contextmenu = selectedrow.querySelector('xyz');
	// Set position of context menu. 
	contextmenu.style.left = `${ x }px`;
	// contextmenu.style.top = `${ y }px`;
	contextmenu.style.top = `${ y-parentOffsetY }px`;
	// Show context menu. 
	contextmenu.classList.add('open');
	
	// Get context menu for selected entry row. 
	let crudmenu = selectedrow.querySelector('.panel.full');
	// Set position of context menu. 
	crudmenu.style.left = 0;
	// crudmenu.style.top = `${ y }px`;
	crudmenu.style.top = 0;
	// Show context menu. 
	crudmenu.classList.add('open');

	setTimeout(addClickCheckers,500);

	/****/

	// Add click checkers. 
	function addClickCheckers() {

		// 
		document.addEventListener('click',clickChecker);
		document.addEventListener('contextmenu',clickChecker);
	}
}

// Close context menu. 
function closeContextMenu() {
	console.log('Closing context menu:',event);

	// 
	contextmenu.classList.remove('open');

	// 
	contextmenu.style.left = '';
	contextmenu.style.top = '';

	// // 
	// contextmenu.classList.remove('open');

	// // 
	// contextmenu.style.left = '';
	// contextmenu.style.top = '';

	document.removeEventListener('click',clickChecker);
	document.removeEventListener('contextmenu',clickChecker);
}

// Check document clicks. 
function clickChecker(event) {

	// Check for context menu. 
	checkForContextMenu();

	/****/

	// Check for context menu. 
	function checkForContextMenu() {

		// Get selected click target. 
		let clicktarget = event.target;

		// Check if context menu is open. 
		let contextMenuOpen = contextmenu.classList.contains('open');
		// Check if clicked within context menu. 
		let clickedWithinContextMenu = contextmenu.contains(clicktarget);

		// Close context menu if its already open and user clicks outside it. 
		if(contextMenuOpen && !clickedWithinContextMenu) closeContextMenu();
	}

	// Check if clicked within an entry row. 
	// let withinEntryRow = false;
	// for(let row of allentryrows) {
	// 	// 
	// 	if( row.contains(clicktarget) ) {
	// 		withinEntryRow = true;
	// 	}
	// }
	// return withinEntryRow;
}