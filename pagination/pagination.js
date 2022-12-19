


// Get main page container. 
const pagecontainer = document.querySelector('main.main div.inner');
// Initialize all page elements. 
let allPages;

// Get paginator container. 
const paginator = document.querySelector('main.main aside.paginator');
const paginatorinner = document.querySelector('main.main aside.paginator div.numlinks');
// Initialize elements for links to all pages. 
let allPageLinks;
// Get delta page buttons. 
const firstPageBtn = document.querySelector('main.main aside.paginator a.deltalink.firstpage');
const prevPageBtn = document.querySelector('main.main aside.paginator a.deltalink.prevpage');
const nextPageBtn = document.querySelector('main.main aside.paginator a.deltalink.nextpage');
const lastPageBtn = document.querySelector('main.main aside.paginator a.deltalink.lastpage');


/*****/


// Define number of items per page. 
const numPerPage = 10;

// Get numebr of items. 
const numItems = dataSource.length;
console.log('Number of items:',numItems);

// Get number of pages. 
const numPages = Math.ceil(numItems/numPerPage);
console.log('Number of pages:',numPages);

// Initialize number of currently selected page. 
let currentPageNumber = 1;


/*****/


// Add pages. 
addPages();

// Add page links. 
addPageLinks();

// Show currently selected page. 
showSelectedPage();

// Activate shortcut keys. 
document.addEventListener('keyup',checkForShortcutKeys);


/*****/


// Add pages. 
function addPages() {
	
	// Initialize result. 
	let result = ``;
	
	// Add data to pages. 
	for(let i=0 ; i<dataSource.length ; i++) {
	// for(let dataItem of dataSource) {

		// Get current page number. 
		let pagenum = Math.floor(i/numPerPage) + 1;
	
		// Open new page. 
		if( (i%numPerPage)==0 ) {
			result += `
			<!-- page -->
			<div class="page" data-pagenum="${pagenum}">`;
		}
	
		// 
		dataItem = dataSource[i];
	
		// Add data item. 
		result += `
		<!-- item -->
		<div class="item">Item ${ dataItem.toUpperCase() }</div>
		<!-- /item -->`;
	
		// Close finished page. Move to next page. 
		if( (i%numPerPage)==(numPerPage-1) || i==(dataSource.length-1) ) {
	
			// Add page number to page. 
			result += `
			<!-- pagenum -->
			<div class="pagenum">${pagenum}</div>
			<!-- /pagenum -->`;

			// Close finished page. 
			result += `
			</div>
			<!-- /page -->`;
		}
	}
	
	// Display data items. 
	pagecontainer.innerHTML = result;
	
	// Access all pages. 
	allPages = document.querySelectorAll('main.main div.page');
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
		
		// Activate delta button: go to first page. 
		firstPageBtn.addEventListener('click',goToFirstPage);
	
		// Activate delta button: go to previous page. 
		prevPageBtn.addEventListener('click',goToPrevPage);
	
		// Activate delta button: go to next page. 
		nextPageBtn.addEventListener('click',goToNextPage);
	
		// Activate delta button: go to last page. 
		lastPageBtn.addEventListener('click',goToLastPage);
	
		// Go thru all numbered page links. 
		for(let pagelink of allPageLinks) {
			// Activate page link. 
			pagelink.addEventListener('click',selectPageNumber);
		}
	
		/***/
	
		// Select page number. 
		function selectPageNumber(event) {
	
			// Get selected page link. 
			let pagelink = event.currentTarget;
	
			// Get selected page number. 
			currentPageNumber = pagelink.getAttribute('data-pagenum');
	
			// Show currently selected page. 
			showSelectedPage();
		}
	
		// Go to first page. 
		function goToFirstPage() {
	
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
	
	// Go thru all pages. 
	for(let page of allPages) {

		// Check for matching page. 
		let matchFound = ( 1*page.getAttribute('data-pagenum') ) == 1*currentPageNumber;

		// Show selected page. 
		if(matchFound) page.classList.add('active');

		// Hide other pages. 
		else page.classList.remove('active');
	}
	
	// Go thru all page links. 
	for(let pagelink of allPageLinks) {

		// Check for matching page. 
		let matchFound = ( 1*pagelink.getAttribute('data-pagenum') ) == 1*currentPageNumber;

		// Show selected page. 
		if(matchFound) pagelink.classList.add('active');

		// Hide other pages. 
		else pagelink.classList.remove('active');
	}

	// 
	if(currentPageNumber==1) {
		// 
		paginator.classList.add('f');
	}
	else if(currentPageNumber==numPages) {
		// 
		paginator.classList.add('l');
	}
	else {
		paginator.classList.remove('f');
		paginator.classList.remove('l');
	}
}

// Check for shortcut keys. 
function checkForShortcutKeys(event) {
	console.log(event);

	// 
	if(event.keyCode==37 || event.key=='ArrowLeft') {

		// Update crement current page number. 
		currentPageNumber--;

		// Show selected page. 
		showSelectedPage();
	}

	// 
	if(event.keyCode==39 || event.key=='ArrowRight') {

		// Update crement current page number. 
		currentPageNumber++;

		// Show selected page. 
		showSelectedPage();
	}
}
