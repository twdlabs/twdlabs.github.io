


// Get destination for page number. 
const pagenumdestination = document.querySelector('div#container section.blog div.grid div.body div.posts nav.pagepanel div.numpanel span.pagenum');

// Get destination for page count. 
const pagecountdestination = document.querySelector('div#container section.blog div.grid div.body div.posts nav.pagepanel div.numpanel span.pagecount');


/*****/


// Define total number of post pages. 
let pagecount = undefined;

// Initialize index of currently selected page. 
let selectedpageindex = 0;


/*****/


// Go to previous page of posts. 
function goPrevPage() {

	// Decrement page index. 
	selectedpageindex--;

	// Display newly selected page. 
	displaySelectedPage();
}

// Go to next page of posts. 
function goNextPage() {

	// Increment page index. 
	selectedpageindex++;

	// Display newly selected page. 
	displaySelectedPage();
}

// Display currently selected page. 
function displaySelectedPage() {
	
	// Assert page index within bounds of validity. 
	if(selectedpageindex<0) selectedpageindex = 0;
	else if(selectedpageindex>=pagecount) selectedpageindex = pagecount - 1;
	console.log('Selected page index:',selectedpageindex);

	// Get all post pages. 
	const allpostpages = document.querySelectorAll('div#container section.blog div.grid div.body div.posts ul.pagelist li.postpage');

	// Go thru each post page. 
	for(let page of allpostpages) {

		// Get index of current page. 
		let pageindex = page.getAttribute('data-pageindex');

		// Check if selected page found. 
		let selectedpagefound = pageindex == selectedpageindex;
	
		// Display page at currently selected index. 
		if(selectedpagefound) page.classList.add('active');
		// Hide page not at currently selected index. 
		else page.classList.remove('active');
	}

	// Update page navigator. 
	updatePageNavigator();

	/****/

	// Update page navigator. 
	function updatePageNavigator() {

		// Display currently selected page number. 
		if(pagenumdestination) pagenumdestination.textContent = (1*selectedpageindex + 1);
	
		// Display total number of post pages. 
		if(pagecountdestination) pagecountdestination.textContent = pagecount;

		// Get all page link dots. 
		const pagelinkdots = document.querySelectorAll('div#container section.blog div.grid div.body div.posts nav.pagepanel ul.dotpanel li.dotitem a.pagelink');
		console.log('pagelinkdots:',pagelinkdots);

		// Go thru each page link dot. 
		for(let pagelink of pagelinkdots) {

			// Check if on link for selected page. 
			let onselectedpagelink = pagelink.getAttribute('data-pageindex') * 1 == 1*selectedpageindex;
			console.log('onselectedpagelink:',onselectedpagelink);

			// Highlight selected page link. 
			if(onselectedpagelink) pagelink.parentElement.classList.add('active');

			// Un-highlight non-selected page link. 
			else pagelink.parentElement.classList.remove('active');
		}
	}
}
