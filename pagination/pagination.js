


// Get main page container. 
const pagecontainer = document.querySelector('main.main div.grid');

// Get paginator container. 
const paginator = document.querySelector('main.main aside.paginator');
const paginatorinner = document.querySelector('main.main aside.paginator div.numlinks');
// Get delta page buttons. 
const topPageBtn = document.querySelector('main.main aside.paginator a.deltalink.toppage');
const prevPageBtn = document.querySelector('main.main aside.paginator a.deltalink.prevpage');
const nextPageBtn = document.querySelector('main.main aside.paginator a.deltalink.nextpage');
const lastPageBtn = document.querySelector('main.main aside.paginator a.deltalink.lastpage');

// Initialize all page elements. 
let allPages;
// Initialize elements for links to all pages. 
let allPageLinks;

// Initialize number of currently selected page. 
let currentPageNumber = 1;


/*****/


// Get number of data items. 
const numItems = dataSource.length;
console.log('Number of items:',numItems);

// Get number of pages. 
const numPages = Math.ceil(numItems/numPerPage);
console.log('Number of pages:',numPages);


/*****/


// Add pages. 
addPages();

// Add page links. 
addPageLinks();

// Show currently selected page. 
showSelectedPage();

// Activate shortcut keys. 
activateShortcutKeys();


/*****/


// Add pages. 
function addPages() {
	
	// Initialize result. 
	let result = ``;
	
	// Add data to pages. 
	for(let i=0 ; i<numItems ; i++) {
	// for(let itemdata of dataSource) {

		// Get current page number. 
		let pagenum = Math.floor(i/numPerPage) + 1;
	
		// Open new page. 
		if( (i%numPerPage)==0 ) result += createPageOpener();
	
		// Get data for current item. 
		itemdata = `${dataSource[i].fname} ${dataSource[i].lname}`;
	
		// Add current item to layout. 
		result += `
		<!-- item -->
		<div class="item">${ itemdata }</div>
		<!-- /item -->`;
	
		// Check if at end of page. 
		let atEndOfPage = (i%numPerPage) == (numPerPage-1);
		// Check if on last item. 
		let onLastItem = i == (numItems-1);
		
		// Add remaining items. 
		if( onLastItem ) {
			// 
		}
		
		// Close finished page. 
		if( atEndOfPage || onLastItem ) {
	
			// Add page number to page. 
			result += `
			<!-- pagenum -->
			<div class="pagenum">${pagenum}</div>
			<!-- /pagenum -->`;

			// Close finished page. 
			result += createPageCloser();
		}
	}
	
	// Display data items. 
	pagecontainer.innerHTML = result;
	
	// Save all page elements. 
	allPages = document.querySelectorAll('main.main div.page');

	// 

	// Create page opener. 
	function createPageOpener() {
		return `
		<!-- page -->
		<div class="page" data-pagenum="${pagenum}">`;
	}

	// Create page closer. 
	function createPageCloser() {
		return `
		</div>
		<!-- /page -->`;
	}
}

// Add page links. 
function addPageLinks() {

	// Initialize result. 
	let result = ``;

	// Add prev button. 
	result += ``;

	// Go thru all page numbers. 
	for(let i=1 ; i<=numPages ; i++) {
	
		// Add page number to paginator. 
		result += createPageLink(i);
	}

	// Add next button. 
	result += ``;

	// Display page links. 
	paginatorinner.innerHTML = result;

	// Activate page links. 
	activatePageLinks();

	/****/

	// Create page link. 
	function createPageLink(n) {

		// 
		return `
		<!-- pagelink -->
		<a class="pagelink" href="javascript:void(0)" data-pagenum="${n}">${n}</a>
		<!-- /pagelink -->`;
	}

	// Activate page links. 
	function activatePageLinks() {

		// Access all numbered page links. 
		allPageLinks = document.querySelectorAll('main.main aside.paginator div.numlinks a.pagelink');
	
		// Go thru each numbered page link. 
		for(let pagelink of allPageLinks) {
			// Activate page link. 
			pagelink.addEventListener('click',selectPageNumber);
		}
		
		// Activate delta button: go to first page. 
		topPageBtn.addEventListener('click',goToTopPage);
	
		// Activate delta button: go to previous page. 
		prevPageBtn.addEventListener('click',goToPrevPage);
	
		// Activate delta button: go to next page. 
		nextPageBtn.addEventListener('click',goToNextPage);
	
		// Activate delta button: go to last page. 
		lastPageBtn.addEventListener('click',goToLastPage);
	
		/***/
	
		// Select page by numbered page link. 
		function selectPageNumber(event) {
	
			// Get selected page link. 
			let pagelink = event.currentTarget;

			// Check for valid page link. 
			let isValidPageLink = pagelink.hasAttribute('data-pagenum');
			if(!isValidPageLink) {
				console.warn('Invalid page link selected',pagelink);
				return;
			}
	
			// Get number of selected page. 
			currentPageNumber = pagelink.getAttribute('data-pagenum') * 1;
			// Show currently selected page. 
			showSelectedPage();
		}
	
		// Go to first page. 
		function goToTopPage() {
			// Set newly selected page number. 
			currentPageNumber = 1;
			// Show currently selected page. 
			showSelectedPage();
		}
	
		// Go to previous page. 
		function goToPrevPage() {
			// Set newly selected page number. 
			currentPageNumber--;
			// Show currently selected page. 
			showSelectedPage();
		}
	
		// Go to next page. 
		function goToNextPage() {
			// Set newly selected page number. 
			currentPageNumber++;
			// Show currently selected page. 
			showSelectedPage();
		}
	
		// Go to last page. 
		function goToLastPage() {
			// Set newly selected page number. 
			currentPageNumber = numPages;
			// Show currently selected page. 
			showSelectedPage();
		}
	}
}

// Show currently selected page. 
function showSelectedPage() {

	// Go to first page if below range. 
	if(currentPageNumber<1) currentPageNumber = 1;
	// Go to last page if above range. 
	else if(currentPageNumber>numPages) currentPageNumber = numPages;

	console.log('Page selected:',currentPageNumber);
	
	// Go thru each page. 
	for(let page of allPages) {

		// Check for matching page. 
		let matchFound = ( 1*page.getAttribute('data-pagenum') ) == 1*currentPageNumber;

		// Show selected page. 
		if(matchFound) page.classList.add('active');

		// Hide other pages. 
		else page.classList.remove('active');
	}
	
	// Go thru each page link. 
	for(let pagelink of allPageLinks) {

		// Check for matching page. 
		let matchFound = ( 1*pagelink.getAttribute('data-pagenum') ) == 1*currentPageNumber;

		// Show selected page. 
		if(matchFound) pagelink.classList.add('active');

		// Hide other pages. 
		else pagelink.classList.remove('active');
	}

	// Indicate first page. 
	if(currentPageNumber==1) {
		paginator.classList.add('f');
		paginator.classList.remove('l');
	}

	// Indicate last page. 
	else if(currentPageNumber==numPages) {
		paginator.classList.add('l');
		paginator.classList.remove('f');
	}
	
	// Indicate middle page. 
	else {
		paginator.classList.remove('f');
		paginator.classList.remove('l');
	}
}

// Activate shortcut keys. 
function activateShortcutKeys() {
	
	// Activate shortcut keys. 
	document.addEventListener('keyup',checkForShortcutKeys);

	/****/

	// Check for shortcut keys. 
	function checkForShortcutKeys(event) {
		console.log(event);
	
		// Respond to left arrow key. 
		if(event.keyCode==37 || event.key=='ArrowLeft') {
	
			// Update crement current page number. 
			currentPageNumber--;
	
			// Show selected page. 
			showSelectedPage();
		}
	
		// Respond to right arrow key. 
		if(event.keyCode==39 || event.key=='ArrowRight') {
	
			// Update crement current page number. 
			currentPageNumber++;
	
			// Show selected page. 
			showSelectedPage();
		}
	}
}
