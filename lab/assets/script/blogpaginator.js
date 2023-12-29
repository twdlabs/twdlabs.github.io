


// Get list for post pages. 
const postpageslist = document.querySelector('div#container section.blog div.grid div.body div.posts ul.pagelist');

// Get destination for dot panel. 
const dotpaneldestination = document.querySelector('div#container section.blog div.grid div.body nav.pagepanel ul.dotpanel');

// Get destination for page number. 
const pagenumdestination = document.querySelector('div#container section.blog div.grid div.body nav.pagepanel div.numpanel span.pagenum');

// Get destination for page count. 
const pagecountdestination = document.querySelector('div#container section.blog div.grid div.body nav.pagepanel div.numpanel span.pagecount');


/*****/


// Define maximum number of posts per page. 
// const pagepostcapacity = 12;
const pagepostcapacity = 30;

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

// Select page by index. 
function selectPageByIndex(queryindex) {
	console.log('Query index:',queryindex);

	// Disregard non-numbers. 
	if( isNaN(queryindex) ) return;

	// Save index of selected page. 
	selectedpageindex = queryindex;

	// Display newly selected page. 
	displaySelectedPage();
}

// Display currently selected page. 
function displaySelectedPage() {
	
	// Assert page index within bounds of validity. 
	if(selectedpageindex<0) selectedpageindex = 0;
	else if(selectedpageindex>=pagecount) selectedpageindex = pagecount - 1;
	console.log('Selected page index:',selectedpageindex);

	// Shift page list to selected page. 
	postpageslist.style.transform = `translateX(${selectedpageindex * -100}%)`;

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

	// Highlight currently selected page in page navigator. 
	updatePageNavigator();

	/****/

	// Highlight currently selected page in page navigator. 
	function updatePageNavigator() {

		// Get all page links in dot panel. 
		const pagenavdots = document.querySelectorAll('div#container section.blog div.grid div.body nav.pagepanel ul.dotpanel li.dotitem a.pagelink');
		console.log('Page navigator dots:',pagenavdots);

		// Go thru each page link dot. 
		for(let pagelink of pagenavdots) {

			// Check if on link for selected page. 
			let onselectedpagelink = pagelink.getAttribute('data-pageindex') * 1 == 1*selectedpageindex;
			console.log('\tonselectedpagelink:',onselectedpagelink);

			// Highlight selected page link. 
			if(onselectedpagelink) pagelink.parentElement.classList.add('active');

			// Un-highlight non-selected page link. 
			else pagelink.parentElement.classList.remove('active');
		}

		// Display currently selected page number. 
		if(pagenumdestination) pagenumdestination.textContent = (1*selectedpageindex + 1);
	
		// Display total number of post pages. 
		if(pagecountdestination) pagecountdestination.textContent = pagecount;
	}
}
