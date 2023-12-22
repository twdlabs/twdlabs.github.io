


// Get main page container. 
const pagecontainer = document.querySelector('div#container main.main div.grid');


// Get page navigator. 
const pagenavigator = document.querySelector('div#container main.main nav.pagenav');

// Get destination for page number links. 
const numlinksdestination = document.querySelector('div#container main.main nav.pagenav ul.numlist');

// Get page delta link buttons. 
const deltabtn = {
	top:document.querySelector('div#container main.main nav.pagenav a.deltalink.top'),
	prev:document.querySelector('div#container main.main nav.pagenav a.deltalink.prev'),
	next:document.querySelector('div#container main.main nav.pagenav a.deltalink.next'),
	last:document.querySelector('div#container main.main nav.pagenav a.deltalink.last'),
};


// Initialize element references for all pages. 
let allpages;

// Initialize element references for all page number links. 
let pagenumberlinks;


// Initialize index of currently selected page. 
let currentpageindex = 0;


/*****/


// Load paginator. 
loadPaginator();


/*****/


// Load paginator. 
function loadPaginator() {

	// Add pages. 
	addPages();
	
	// Add page links. 
	addPageLinks();
	
	// Show currently selected page. 
	showSelectedPage();
	
	// Activate shortcut keys. 
	activateShortcutKeys();

	/****/
}

// Add pages of data. 
function addPages() {
	
	// Initialize result. 
	let result = ``;
	
	// Go thru data for each page. 
	for(let pageindex in pageddatasource) {

		// Get data for individual page. 
		let individualpagedata = pageddatasource[pageindex];
		console.log('Page',1*pageindex, individualpagedata);

		// Add layout for new page. 
		result += `
		<!-- page -->
		<div class="page" data-pageindex="${pageindex}">

			<!-- datalist -->
			<ul class="datalist">
				${ createPageContent(individualpagedata) }
			</ul>
			<!-- /datalist -->
			
			<!-- pagenum -->
			<div class="pagenum">${ (1*pageindex + 1) }</div>
			<!-- /pagenum -->

		</div>
		<!-- /page -->`;
	}
	
	// Display data items. 
	pagecontainer.innerHTML = result;
	
	// Save all page elements. 
	allpages = document.querySelectorAll('main.main div.page');
	return;

	/****/

	// Create contents of page. 
	function createPageContent(pagedata) {
	
		// Initialize result. 
		let result = ``;
	
		// Go thru each item on page. 
		for(let itemdata of pagedata) {

			// Check for valid data item. 
			let isvaliddata = true && itemdata;
			// let isvaliddata = true && itemdata.username;
			// let isvaliddata = itemdata.fname && itemdata.lname;

			// Get item caption. 
			let itemcaption = isvaliddata ? itemdata : '';
			// let itemcaption = isvaliddata ? itemdata.username : '';
			// let itemcaption = isvaliddata ? `${itemdata.fname} ${itemdata.lname}` : '';
	
			// Add current item to layout. 
			result += `
			<!-- dataitem -->
			<li class="dataitem ${ isvaliddata ? '' : 'x' }">${ itemcaption }</li>
			<!-- /dataitem -->`;
		}
	
		// Return result. 
		return result;
	}
}

// Add page links. 
function addPageLinks() {

	// Initialize result. 
	let result = '';

	// Go thru all page numbers. 
	for(let i=0 ; i<pagecount ; i++) {
	
		// Add page number. 
		result += createPageNumber(i);
	}

	// Display page links in page navigator. 
	numlinksdestination.innerHTML = result;

	// Activate page links. 
	activatePageLinks();

	/****/

	// Create page number item. 
	function createPageNumber(index) {
		return `
		<!-- numitem -->
		<li class="numitem">

			<!-- pagelink -->
			<a class="pagelink" href="javascript:void(0)" data-pageindex="${ (1*index) }">${ (1*index + 1) }</a>
			<!-- /pagelink -->

		</li>
		<!-- /numitem -->`;
	}

	// Activate page links. 
	function activatePageLinks() {

		// Get all page number links. 
		pagenumberlinks = document.querySelectorAll('main.main nav.pagenav ul.numlist li.numitem a.pagelink');
	
		// Go thru each page number link. 
		for(let link of pagenumberlinks) {
			// Activate page link. 
			link.addEventListener('click',selectPageNumber);
		}
		
		// Activate delta button: go to first page. 
		deltabtn['top'].addEventListener('click',goToTopPage);
	
		// Activate delta button: go to previous page. 
		deltabtn['prev'].addEventListener('click',goToPrevPage);
	
		// Activate delta button: go to next page. 
		deltabtn['next'].addEventListener('click',goToNextPage);
	
		// Activate delta button: go to last page. 
		deltabtn['last'].addEventListener('click',goToLastPage);
	
		/***/
	
		// Select page by page number link. 
		function selectPageNumber(event) {
	
			// Get selected page link. 
			let selectedpagelink = event.currentTarget;
			console.log('Selected page link:',selectedpagelink);

			// Check if valid page link selected. 
			let selectedValidLink = selectedpagelink.hasAttribute('data-pageindex');
			if(!selectedValidLink) return;
	
			// Update index of currently selected page. 
			currentpageindex = selectedpagelink.getAttribute('data-pageindex') * 1;
			// Show currently selected page. 
			showSelectedPage();
		}
	
		// Go to first page. 
		function goToTopPage() {
			// Update index of selected page. 
			currentpageindex = 0;
			// Show currently selected page. 
			showSelectedPage();
		}
	
		// Go to previous page. 
		function goToPrevPage() {
			// Update index of selected page. 
			currentpageindex--;
			// Show currently selected page. 
			showSelectedPage();
		}
	
		// Go to next page. 
		function goToNextPage() {
			// Update index of selected page. 
			currentpageindex++;
			// Show currently selected page. 
			showSelectedPage();
		}
	
		// Go to last page. 
		function goToLastPage() {
			// Update index of selected page. 
			currentpageindex = 1*pagecount - 1;
			// Show currently selected page. 
			showSelectedPage();
		}
	}
}

// Show currently selected page. 
function showSelectedPage() {

	// Confirm valid page. 
	confirmValidPage();
	console.log('Current page index:', currentpageindex );

	// Update page navigator. 
	updatePageNav();

	// Update page display. 
	updatePageDisplay();

	/****/

	// Confirm valid page selected. 
	function confirmValidPage() {

		// Go to first page if below range. 
		if(currentpageindex<0) currentpageindex = 0;

		// Go to last page if above range. 
		else if(currentpageindex>=pagecount) currentpageindex = 1*pagecount - 1;
	}

	// Update page navigator. 
	function updatePageNav() {
		
		// Check if on first page. 
		let onFirstPage = currentpageindex <= 0;
		// Check if on last page. 
		let onLastPage = currentpageindex >= (pagecount-1);
		
		// Indicate status of first page. 
		if(onFirstPage) {
			pagenavigator.classList.add('f');
			pagenavigator.classList.remove('l');
		}
		
		// Indicate status of last page. 
		else if(onLastPage) {
			pagenavigator.classList.remove('f');
			pagenavigator.classList.add('l');
		}
		
		// Indicate status of middle page. 
		else {
			pagenavigator.classList.remove('f');
			pagenavigator.classList.remove('l');
		}

		// Update page links. 
		updatePageLinks();

		/***/

		// Update page links. 
		function updatePageLinks() {
		
			// Go thru each page number link. 
			for(let link of pagenumberlinks) {

				// Get index of current page. 
				let pageindex = link.getAttribute('data-pageindex') * 1;
		
				// Check for selected page. 
				let onselectedpage = pageindex == 1*currentpageindex;
		
				// Show link for selected page. 
				if(onselectedpage) link.classList.add('active');
				// Hide link for non-selected page. 
				else link.classList.remove('active');
			}
		}
	}

	// Update page display. 
	function updatePageDisplay() {
	
		// Go thru each page element. 
		for(let page of allpages) {

			// Get index of current page. 
			let pageindex = page.getAttribute('data-pageindex') * 1;
	
			// Check for selected page. 
			let onselectedpage = pageindex == 1*currentpageindex;
	
			// Show selected page. 
			if(onselectedpage) page.classList.add('active');
			// Hide non-selected page. 
			else page.classList.remove('active');
		}
	}
}

// Activate shortcut keys. 
function activateShortcutKeys() {
	
	// Activate shortcut keys. 
	document.addEventListener('keyup',checkForShortcutKey);

	/****/

	// Check if shortcut key selected. 
	function checkForShortcutKey(event) {
		// console.log(event);

		// Respond to space bar. 
		if(event.keyCode==32 || event.key==' ') showSelectedPage();
	
		// Respond to up arrow key. 
		else if(event.keyCode==38 || event.key=='ArrowUp') {
	
			// Decrement page index to first. 
			currentpageindex = 0;
	
			// Show selected page. 
			showSelectedPage();
		}
	
		// Respond to left arrow key. 
		else if(event.keyCode==37 || event.key=='ArrowLeft') {
	
			// Decrement page index by one. 
			currentpageindex--;
	
			// Show selected page. 
			showSelectedPage();
		}
	
		// Respond to right arrow key. 
		else if(event.keyCode==39 || event.key=='ArrowRight') {
	
			// Increment page index by one. 
			currentpageindex++;
	
			// Show selected page. 
			showSelectedPage();
		}
	
		// Respond to down arrow key. 
		else if(event.keyCode==40 || event.key=='ArrowDown') {
	
			// Increment page index to last. 
			currentpageindex = 1*pagecount - 1;
	
			// Show selected page. 
			showSelectedPage();
		}
	}
}
