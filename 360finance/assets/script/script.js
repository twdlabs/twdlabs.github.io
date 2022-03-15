


// Initialize selected index. 
var selectedIndex = 0;

// Initialize total earnings. 
var totalAmountEarned;

// Initialize total spending. 
var totalAmountSpent;

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
				<input type="radio" name="navselection" id="select-${item.code}" value="${item.code}"${ (i==selectedIndex&&i==-1) ? (' checked') : ('') }>
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
		totalAmountSpent = 0;
		for(let t of transactiondata) {
			if(t.transactionamount<=0) totalAmountSpent += (-1) * t.transactionamount;
		}
		// console.log('Total spending:', dollar(totalAmountSpent) );

		// Aggregate net balance. 
		// netBalance = 0;
		// for(let t of transactiondata) {
		// 	netBalance += t.transactionamount;
		// }
		// console.log('Net balance:', dollar(totalAmountEarned-totalAmountSpent) );
		// console.log('Net balance:', dollar(netBalance) );
	}
	
	// Handle events. 
	function handleEvents() {
	
		// Activate navigation switcher links. 
		let radiolinks = document.querySelectorAll('nav.switcher ul.navlist li.navitem input');
		for(let link of radiolinks) {
			link.addEventListener('input',selectPage);
		}
	
		/*****/
	
		// Select page. 
		function selectPage(event) {
			let debug = false;
	
			// Get selected navigation button. 
			let navbtn = event.currentTarget;
			// console.log('Navigation button:', navbtn);
	
			// Get selected page name. 
			let selectedPageName = navbtn.value;
			// Save index for selected page. 
			let selectedIndex = sectionNames.indexOf(selectedPageName);
			console.log('Selected page:',selectedIndex,selectedPageName);
		
			// Shift navigation switch to proper position. 
			let switich = document.querySelector('nav.switcher ul.navlist li.switch');
			if(debug) console.log('\tNavSwitch transformation:',switich.style.transform,switich);
			switich.style.transform = `translateX(${(100*selectedIndex)}%)`;
			if(debug) console.log('\tNavSwitch transformation:',switich.style.transform,switich);
		
			// Get main container. 
			let inner = document.querySelector('div#container main.main div.inner');
			if(debug) console.log('\tPager transformation:',inner.style.transform,inner);
		
			// Add transformation for selected page. 
			inner.style.transform = `translateX(${-100*selectedIndex}%)`;
			if(debug) console.log('\tPager transformation:',inner.style.transform,inner);
		}
	}

	// Open page of initially selected index. 
	function openInitialPage() {

		// Get navigator radio button. 
		let pageselector = `nav.switcher ul.navlist li.navitem:nth-of-type(${ (1*selectedIndex)+1 }) input`;
		let radiobtn = document.querySelector(pageselector)
		// console.log('pageselector:',pageselector,radiobtn);

		// Click navigator radio button. 
		radiobtn.click();
	}
}


// Load page content. 
function loadPageContent() {

	// Load overview page. 
	loadOverviewPage();
	
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


// Toggle navigation. 
function toggleNavigation() {
	document.querySelector('nav.switcher').classList.toggle('active');
}
