


// Initialize current page index. 
var currentPageIndex = 1;

// Initialize horizontal position of pointer. 
var lastPointX;

// const swipeActive = true;


// Initialize total earnings. 
var totalAmountEarned;

// Initialize total spending. 
var totalAmountSpent;
var totalSpendPerMonth = [ 0,0,0, 0,0,0, 0,0,0, 0,0,0 ];
// var totalSpendPerCategory = [];

// Initialize net balance. 
// var netBalance;


/*****/


// Load basic stuff. 
startItUp();


/*****/


// Load basic stuff. 
function startItUp() {


	// Load navigation bar. 
	loadNavigation();

	// Calculate account metrics. 
	getAccountMetrics();


	// Load page content. 
	loadPageContent();

	
	// Handle events. 
	handleEvents();


	// Open page of initially selected index. 
	openInitialPage();


	/*****/


	// Load navigation bar. 
	function loadNavigation() {

		// Get navigation list. 
		let navlist = document.querySelector('div#container nav.switcher ul.navlist');
		// let navquads = document.querySelector('div#container nav.quads');
		
		// Initialize resulting nav list items. 
		let result = '';
		// let result2 = '';
		
		// Add nav list items. 
		for(let i in navdata) {

			// Get navigation data item. 
			let item = navdata[i];

			// Append nav list item. 
			result += `
			<!-- navitem -->
			<li class="navitem${(i==0)?(' home'):('')}">

				<!-- bg -->
				<img src="../atgicon.ico" class="bg">
				<!-- /bg -->
		
				<!-- radio -->
				<input type="radio" name="navselection" id="select-${item.code}" value="${item.code}"${ (i==currentPageIndex&&i==-1) ? (' checked') : ('') }>
				<!-- /radio -->
		
				<!-- navlabel -->
				<label class="navlabel" for="select-${item.code}">${item.name}</label>
				<!-- /navlabel -->

				<!-- tooltip -->
				<span class="tooltip">${item.tooltip}</span>
				<!-- /tooltip -->
		
			</li>
			<!-- /navitem -->`;

			// Append nav list item. 
			// result2 += `
			// <!-- quadrant -->
			// <div class="quadrant">

			// 	<!-- link -->
			// 	<a class="link" href="javascript:void(0)" data-val="${item.code}">
			// 		<span class="caption">${item.name}</span>
			// 	</a>
			// 	<!-- /link -->
				
			// </div>
			// <!-- /quadrant -->`;
		}
		
		// Add nav list switch last. 
		result += `
		<!-- switch -->
		<li class="switch"></li>
		<!-- /switch -->`;
		
		// Add resulting nav list to page. 
		navlist.innerHTML = result;
		// navquads.innerHTML = result2;
	}

	// Calculate account metrics. 
	function getAccountMetrics() {

		// Aggregate total earnings. 
		totalAmountEarned = 0;
		for(let t of transactiondata) {
			if(t.transactionamount>=0) totalAmountEarned += t.transactionamount;
		}
		// console.log('Total earnings:', dollar(totalAmountEarned) );

		// Aggregate total spending. 
		// Aggregate total spend per month. 
		totalAmountSpent = 0;
		for(let t of transactiondata) {
			// Check for spend transaction. 
			if(t.transactionamount<=0) {
				let transactionAmount = (-1 * t.transactionamount);
				totalAmountSpent += transactionAmount;

				let monthIndex = t.transactiondate.m-1;
				let alreadyValidAmount = !isNaN( totalSpendPerMonth[monthIndex] );
				if(alreadyValidAmount) totalSpendPerMonth[monthIndex] += transactionAmount;
				else totalSpendPerMonth[monthIndex] = transactionAmount;
			}
		}
		console.log('Total spending:', dollar(totalAmountSpent) );
		console.log('Total spend per month:', totalSpendPerMonth.map(dollar)/* dollar(totalAmountSpent) */ );

		// Aggregate net balance. 
		// netBalance = 0;
		// for(let t of transactiondata) {
		// 	netBalance += t.transactionamount;
		// }
		// console.log('Net balance:', dollar(totalAmountEarned-totalAmountSpent) );
		// console.log('Net balance:', dollar(netBalance) );
	}

	// Load page content. 
	function loadPageContent() {
	
		// Load overview page. 
		loadOverviewPage();
		
		// Load activity page. 
		loadActivityPage();
		
		// Load budget page. 
		loadBudgetPage();
	
		// Load taxes page. 
		loadTaxesPage();
		
		// Load investing page. 
		loadInvestingPage();
		
		// Load insurance page. 
		loadInsurancePage();
	
	
		/*****/
		
	
		// TODO: Load taxes page. 
		function loadTaxesPage() {
	
			/****/
		}
	
		// TODO: Load investing page. 
		function loadInvestingPage() {
	
			/****/
		}
	
		// TODO: Load insurance page. 
		function loadInsurancePage() {
	
			/****/
		}
	}

	// Open page of initially selected index. 
	function openInitialPage() {

		// Get navigator radio button. 
		let n = (1*currentPageIndex) + 1;
		let navselector = `nav.switcher ul.navlist li.navitem:nth-of-type(${n}) input`;
		let radiobtn = document.querySelector(navselector)
		// console.log('navselector:',navselector,radiobtn);

		// Click navigator radio button. 
		radiobtn.click();
	}
	
	// Handle events. 
	function handleEvents() {
	

		// Enable header click to toggle navigation switcher. 
		let header = document.querySelector('div#container header.header');
		header.addEventListener('click',toggleNavigation);
	
		// Activate navigation switcher links. 
		let radiolinks = document.querySelectorAll('nav.switcher ul.navlist li.navitem input');
		for(let link of radiolinks) {
			link.addEventListener('input',selectPage);
		}

		// // Enable swipe gesture. 
		// let container = document.getElementById('container');
		// container.addEventListener('touchstart',beginSwipe);
		// container.addEventListener('touchend',endSwipe);
		// container.addEventListener('mousedown',beginSwipe);
		// container.addEventListener('mouseup',endSwipe);


		// Overview: Enable pie chart disc clicks to toggle between full and brief dollar amount. 
		let piechartdiscs = document.querySelectorAll('main.main section.page article.summary div.content section.piechart div.chart div.disc');
		for(let disc of piechartdiscs) {
			disc.addEventListener('click', function(event) {
				// console.log(this);
				this.classList.toggle('full');
				// console.log(this);
			});
		}


		// Budget: Enable show mode toggle on all budget boxes. 
		let budgetboxes = document.querySelectorAll('main.main section#budget article#monthlysummary div.content section.budgetbox');
		for(let box of budgetboxes) {
			box.addEventListener('click', function(event) {
				// console.log(this);
				this.classList.toggle('showmode');
				// console.log(this);
			});
		}
	
		/*****/

		// Toggle navigation. 
		function toggleNavigation() {
			document.querySelector('nav.switcher').classList.toggle('active');
		}
	
		// Select page. 
		function selectPage(event) {
	
			// Get selected navigation button. 
			let navbtn = event.currentTarget;
			// console.log('Navigation button:', navbtn);
	
			// Get name of currently selected page. 
			let selectedPageName = navbtn.value;

			// Save index for selected page. 
			currentPageIndex = pageNames.indexOf(selectedPageName);

			console.log('Current page:',currentPageIndex,selectedPageName);
			openSelectedPage();
		}

		// Open selected page. 
		function openSelectedPage() {
			let debug = false;
		
			// Shift navigation switch to proper position. 
			let switich = document.querySelector('nav.switcher ul.navlist li.switch');
			if(debug) console.log('\tNavSwitch transformation:',switich.style.transform,switich);
			switich.style.transform = `translateX(${(100*currentPageIndex)}%)`;
			if(debug) console.log('\tNavSwitch transformation:',switich.style.transform,switich);
		
			// Get main container. 
			let inner = document.querySelector('div#container main.main div.inner');
			if(debug) console.log('\tPager transformation:',inner.style.transform,inner);
		
			// Add transformation for selected page. 
			inner.style.transform = `translateX(${-100*currentPageIndex}%)`;
			if(debug) console.log('\tPager transformation:',inner.style.transform,inner);
		}

		// TODO: Begin swipe gesture. 
		function beginSwipe(event) {
			// console.log(event.type,event);

			// 
			lastPointX = event.clientX || event.touches[0].clientX;
			// console.log('Last point x:',lastPointX);
		}

		// TODO: End swipe gesture. 
		function endSwipe(event) {
			console.log(event.type,event);

			// 
			let newPointX = event.clientX || event.touches[0].clientX;
			// console.log('New point x:',newPointX);

			// Check direction of swipe gesture. 
			if(swipeActive) checkSwipe(newPointX-lastPointX);

			// Reset horizontal position of pointer. 
			lastPointX = undefined;
		}

		// TODO: Check direction of swipe gesture. 
		function checkSwipe(dx) {
			console.log('dx:',dx);

			// Set swipe length threshold. 
			const dxThreshold = 100;
			
			// Handle left swipe gesture. 
			if(dx<(-1)*dxThreshold) {

				// Increment page index (if possible). 
				currentPageIndex++;
				if(currentPageIndex>=pageNames.length) currentPageIndex = 0;

				// Open page at current index. 
				openSelectedPage();
			}

			// Handle right swipe gesture. 
			if(dx>dxThreshold) {

				// Decrement page index (if possible). 
				currentPageIndex--;
				if(currentPageIndex<0) currentPageIndex = pageNames.length-1;

				// Open page at current index. 
				openSelectedPage();
			}
		}
	}
}

