


// Toggle data source menu. 
function toggleDataSourceMenu() {

	// 
	navbar.classList.toggle('sources');

	// 
	closeOperationsMenu();
}
// Toggle operations menu. 
function toggleOperationsMenu() {

	// 
	navbar.classList.toggle('operations');

	// 
	closeDataSourceMenu();
}

// Close data source menu. 
function closeDataSourceMenu() {

	// 
	navbar.classList.remove('sources');
}
// Close operations menu. 
function closeOperationsMenu() {

	// 
	navbar.classList.remove('operations');
}

// Close all navbar menus. 
function closeAllNavbarMenus() {

	// 
	navbar.classList.remove('sources','operations');
}
