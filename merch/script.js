

// Define navigation data. 
let navdata = [
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	},
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	},
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	},
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	},
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	},
	{
		name:'MenuItemName',
		url:'javascript:void(0)'
	}
];


/*****/


// Load navigation bar from file. 
// $(document).ready(function() {loadNav();});


/*****/


// Load navigation bar from file. 
function loadNav(atRootDirectory) {
	let url = ( (atRootDirectory) ? ('') : ('../') ) + 'navbar.html';
	console.log('navbar url:',url);
	$('#navbar').load(url);
	// $('#navbar').load(url,populateNavList);

	// populateNavList();
}

// Populate navigation list. 
function populateNavList() {

	// Create elements for navigation data items. 
	let result = '';
	for(item of navdata) {
		console.log('item',item);
		result += `
		<!-- navitem -->
		<li class="navitem">

			<!-- navlink -->
			<a href="${item.url}" class="navlink page">${item.name}</a>
			<!-- /navlink -->

		</li>
		<!-- /navitem -->`;
	}

	// Add result to page. 
	console.log('result',result);
	document.getElementById('navlist').innerHTML = (result);
}

// Close all other navbar slide drawers. 
function closeOtherDrawers(exceptionId) {
	let ids = ['navlist','searchbar'];
	for(id of ids) {
		// Set drawer as inactive. 
		if(id!=exceptionId) document.getElementById(id).classList.remove('active');
	}
}
