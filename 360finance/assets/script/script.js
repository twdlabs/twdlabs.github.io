


// Initialize selected index. 
var selectedIndex = 0;

// Initialize total earnings. 
var totalAmountEarned;

// Initialize total spending. 
var totalAmountSpent;

// Initialize net balance. 
var netBalance;


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
				<input type="radio" name="navselection" id="select-${item.code}" value="${item.code}"${ (i==selectedIndex) ? (' checked') : ('') }>
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
		// Add to income chart label. 
		document.querySelector('section#overview article#incomesummary div.content section#incomechart div.chart div.disc').innerHTML = dollar(totalAmountEarned);

		// Aggregate total spending. 
		totalAmountSpent = 0;
		for(let t of transactiondata) {
			if(t.transactionamount<=0) totalAmountSpent += (-1) * t.transactionamount;
		}
		// console.log('Total spending:', dollar(totalAmountSpent) );
		// Add to spend chart label. 
		document.querySelector('section#overview article#spendsummary div.content section#spendchart div.chart div.disc').innerHTML = dollar(totalAmountSpent);

		// Aggregate net balance. 
		netBalance = 0;
		for(let t of transactiondata) {
			netBalance += t.transactionamount;
		}
		// console.log('Net balance:', dollar(totalAmountEarned-totalAmountSpent) );
		// console.log('Net balance:', dollar(netBalance) );
		// Add to balance chart label. 
		document.querySelector('section#overview article#balancesummary div.content section#balancechart div.chart div.disc').innerHTML = dollar(netBalance);
		// Add to balance label. 
		document.querySelector('section#overview article#balancesummary div.content section#balance h3.label span.value').innerHTML = dollar(netBalance);
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
	
			// Get selected navigation button. 
			let navbtn = event.currentTarget;
			// console.log('Navigation button:', navbtn);
	
			// Get selected page name. 
			let selectedPageName = navbtn.value;
			// console.log('Selected page name:',selectedPageName);
	
			// Save index for selected page. 
			let index = sectionNames.indexOf(selectedPageName);
			// console.log('Selected index:',index);
	
			// Open selected page using selected index. 
			openSelectedPage(index);
		}
	
		// Open selected page by index. 
		function openSelectedPage(index) {
		
			// Save index for selected page. 
			selectedIndex = index;
			console.log('Selected index:',index);
		
			// Shift navigation switch to proper position. 
			let switich = document.querySelector('nav.switcher ul.navlist li.switch');
			switich.style.transform = `translateX(${(100*selectedIndex)}%)`;
			// console.log('switich:',switich);
		
			// Get main container. 
			let inner = document.querySelector('div#container main.main div.inner');
			// console.log(inner.style.transform);
		
			// Add transformation for selected page. 
			inner.style.transform = `translateX(${-100*selectedIndex}%)`;
			// console.log(inner.style.transform);
		}
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


	// TODO: Load budget page. 
	function loadBudgetPage() {
	
		// Load budget. 
		loadBudget();

		/****/

		// Load budget on budget page. 
		function loadBudget() {

			// Get budget container. 
			let budgetbox = document.querySelector('section#bank article.buckets');
			// console.log(budgetbox);

			// Initialize result. 
			let result = '';

			for(let i in monthLabels) {
				let n = i*1 + 1;
				let ml = monthLabels[i];
				result += `
				<!-- bucket -->
				<div class="bucket">

					<label class="month">${ (false) ? (ml) : ( (n<10) ? ('0'+n) : (n) ) }</label>

				</div>
				<!-- /bucket -->`;
			}

			// Add result to page. 
			budgetbox.innerHTML = result;
		}
	}

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
