


// Get main page container. 
const pagecontainer = document.querySelector('main.main div.grid');

// Get page navigator. 
const paginator = document.querySelector('main.main nav.paginator');
// Get page delta links. 
const topPageBtn = document.querySelector('main.main nav.paginator a.deltalink.toppage');
const prevPageBtn = document.querySelector('main.main nav.paginator a.deltalink.prevpage');
const nextPageBtn = document.querySelector('main.main nav.paginator a.deltalink.nextpage');
const lastPageBtn = document.querySelector('main.main nav.paginator a.deltalink.lastpage');
// Get destination for page number links. 
const numlinksdestination = document.querySelector('main.main nav.paginator ul.numlist');

// Initialize element references for all pages. 
let allpages;
// Initialize element references for all page number links. 
let pagenumberlinks;

// Initialize index of currently selected page. 
let currentpageindex = 0;


/*****/


// Get number of data items. 
const numItems = dataSource.length;
console.log('Item count:',numItems);
console.log('Page capacity:',numPerPage);

// Get number of pages. 
const numPages = Math.ceil(numItems/numPerPage);
console.log('Page count:',numPages);


/*****/


// Add pages. 
addPages();

// Add page links. 
addPageLinks();

// Show currently selected page. 
showSelectedPage();

// Activate shortcut keys. 
// activateShortcutKeys();


/*****/


// Add pages of data. 
function addPages() {
	
	// Initialize result. 
	let result = ``;
	
	// Go thru data for each page. 
	for(let pageindex in pagedData) {

		// Get page data. 
		let pagedata = pagedData[pageindex];
		console.log('Page data:',pageindex,pagedata);

		// Add layout for new page. 
		result += `
		<!-- page -->
		<div class="page" data-pageindex="${pageindex}">

			<!-- bin -->
			<div class="bin">
				${ createPageContent(pagedata) }
			</div>
			<!-- /bin -->
			
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

			// Get item caption. 
			let itemcaption = `${itemdata.fname} ${itemdata.lname}`;
	
			// Add current item to layout. 
			result += `
			<!-- item -->
			<div class="item">${ itemcaption }</div>
			<!-- /item -->`;
		}
	
		// Return result. 
		return result;
	}
}

// Add page links. 
function addPageLinks() {

	// Initialize result. 
	let result = ``;

	// Go thru all page numbers. 
	for(let i=0 ; i<numPages ; i++) {
	
		// Add page number to paginator. 
		result += createPageNumber(i);
	}

	// Display page links. 
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
		pagenumberlinks = document.querySelectorAll('main.main nav.paginator ul.numlist li.numitem a.pagelink');
	
		// Go thru each page number link. 
		for(let link of pagenumberlinks) {
			// Activate page link. 
			link.addEventListener('click',selectPageNumber);
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
	
		// Select page by page number link. 
		function selectPageNumber(event) {
	
			// Get selected page number link. 
			let selectedpagenumberlink = event.currentTarget;
			console.log('Selected page number link:',selectedpagenumberlink);

			// Check if valid page number link selected. 
			let selectedValidLink = selectedpagenumberlink.hasAttribute('data-pageindex');
			if(!selectedValidLink) return;
	
			// Update index of selected page. 
			currentpageindex = selectedpagenumberlink.getAttribute('data-pageindex') * 1;
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
			currentpageindex = numPages-1;
			// Show currently selected page. 
			showSelectedPage();
		}
	}
}

// Show currently selected page. 
function showSelectedPage() {

	// Confirm valid page. 
	confirmValidPage();
	console.log('Current page number:', (currentpageindex+1) );

	// Update pages. 
	updatePages();

	// Update page links. 
	updatePageLinks();

	// Update status of paginator. 
	updatePaginator();

	/****/

	// Confirm valid page selected. 
	function confirmValidPage() {

		// Go to first page if below range. 
		if(currentpageindex<0) currentpageindex = 0;

		// Go to last page if above range. 
		else if(currentpageindex>=numPages) currentpageindex = numPages-1;
	}

	// Update pages. 
	function updatePages() {
	
		// Go thru each page element. 
		for(let page of allpages) {
	
			// Check for matching page. 
			let matchFound = ( 1*page.getAttribute('data-pageindex') ) == 1*currentpageindex;
	
			// Show selected page. 
			if(matchFound) page.classList.add('active');
	
			// Hide non-selected page. 
			else page.classList.remove('active');
		}
	}

	// Update page links. 
	function updatePageLinks() {
	
		// Go thru each page number link. 
		for(let link of pagenumberlinks) {
	
			// Check for matching page. 
			let matchFound = ( 1*link.getAttribute('data-pageindex') ) == 1*currentpageindex;
	
			// Show selected page. 
			if(matchFound) link.classList.add('active');
	
			// Hide other pages. 
			else link.classList.remove('active');
		}
	}

	// Update status of page navigator. 
	function updatePaginator() {
		
		// Check if on first page. 
		let onFirstPage = currentpageindex == 0;
		// Check if on last page. 
		let onLastPage = currentpageindex == (numPages-1);
		
		// Indicate first page. 
		if(onFirstPage) {
			paginator.classList.add('f');
			paginator.classList.remove('l');
		}
		
		// Indicate last page. 
		else if(onLastPage) {
			paginator.classList.add('l');
			paginator.classList.remove('f');
		}
		
		// Indicate middle page. 
		else {
			paginator.classList.remove('f');
			paginator.classList.remove('l');
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
		console.log(event);
	
		// Respond to left arrow key. 
		if(event.keyCode==37 || event.key=='ArrowLeft') {
	
			// Decrement current page index. 
			currentpageindex--;
	
			// Show selected page. 
			showSelectedPage();
		}
	
		// Respond to right arrow key. 
		if(event.keyCode==39 || event.key=='ArrowRight') {
	
			// Increment current page index. 
			currentpageindex++;
	
			// Show selected page. 
			showSelectedPage();
		}
	}
}
