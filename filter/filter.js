


// Get filter query field. 
const filterqueryfield = document.querySelector('div#container div.grid div.row div.colA input#filterBox');
// console.log('Filter query field:',filterqueryfield);

// Get list items in menu list. 
const menuitems = document.querySelectorAll('div#container div.grid div.row div.colA ul.menulist li.menuitem');
// const menuitems = document.getElementsByTagName('li');
// console.log('Menu items:',menuitems);

// Activate filter query field. 
filterqueryfield.addEventListener('keyup',refreshMenuItems);


/*****/


// Refresh matching menu items. 
function refreshMenuItems() {

	// Get filter query. 
	let filterquery = filterqueryfield.value.toUpperCase();
	console.log('Filter query:',filterquery);

	for (var i=0 ; i<menuitems.length ; i++) {

		// Get menu link. 
		// a = menuitems[i].getElementsByTagName('a')[0];
		let a = menuitems[i].querySelector('a');
		// Get caption of menu link. 
		let caption = a.innerHTML.toUpperCase();

		// Check if match found. 
		let matchfound = caption.indexOf(filterquery) > -1;

		// Show menu item if match found. 
		if (matchfound) menuitems[i].style.display = '';
		// Hide menu item if match not found. 
		else menuitems[i].style.display = 'none';
	}
}
