


// Update participants list on page. 
updateParticipantsList();

// Update ratings grid on page. 
updateRatingsGrid();

// Click to last page. 
let lastpage = document.querySelector('main#main nav.pager ul.navlist li.navitem:last-child a.navlink');
lastpage.click();


/*****/


// Go to page based on given id. 
function goToPage(id) {

	// Define page ids. 
	// let pageIds = ['one','two'];
	
	// Get page ids. 
	let pages = document.querySelector('main#main div.container div.inner').children;
	let pageIds = [...pages].map( (item) => item.id );
	// console.log('pageIds',pageIds);

	// Get page index. 
	let pageIndex = pageIds.indexOf(id);

	// Get horizontal offset percentage. 
	let dx = (-100*pageIndex)+'%';

	// Get page holder. 
	let pageholder = document.querySelector('main#main div.container div.inner');

	// Add transformation to page holder. 
	pageholder.style.transform = `translateX(${dx})`;


	// Highlight nav item corresponding to selected page. 
	let pageritems = document.getElementById('pagerlist').children;
	// console.log('pageritems',pageritems);
	// Remove all highlights. 
	for(item of pageritems) {
		item.classList.remove('active');
	}
	// Highlight selected item. 
	pageritems[pageIndex].classList.add('active');
	// console.log('Highlight',pageritems[pageIndex]);
}
