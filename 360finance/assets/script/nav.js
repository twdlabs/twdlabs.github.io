

// Define navigation data. 
const navdata = [
	{
		name:'Overview',
		code:'overview',
		tooltip:'Overall Big Picture',
	},
	{
		// name:'Banking',
		name:'Activity',
		code:'activity',
		tooltip:'Recent Daily Transactions',
	},
	{
		name:'Budget',
		code:'budget',
		tooltip:'Spending Categories',
	},
	// {
	// 	name:'Taxes',
	// 	code:'taxes',
	// 	tooltip:'Yearly Accounting for Filing',
	// },
	// {
	// 	name:'Investments',
	// 	code:'invest',
	// 	tooltip:'Long-term Growth',
	// },
	// {
	// 	name:'Insurance',
	// 	code:'insurance',
	// 	tooltip:'Risk Management Strategy',
	// },
];



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
		<li class="navitem">

			<!-- bg -->
			<img src="../atgicon.ico" class="bg">
			<!-- /bg -->
	
			<!-- radio -->
			<input type="radio" name="navselection" id="select-${item.code}" value="${i}" ${ (i==currentPageIndex) ? ('checked') : ('') }>
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


// Toggle navigation. 
function toggleNavigation() {
	document.querySelector('nav.switcher').classList.toggle('active');
}

// Select page. 
function setNewPageIndex(event) {

	// Get selected navigation button. 
	let navbtn = event.currentTarget;
	// Save index for selected page. 
	currentPageIndex = navbtn.value;
	console.log('New page index:', currentPageIndex,navbtn);

	// Open selected page. 
	openSelectedPage();
	// setTimeout(openSelectedPage,250);

	// Close navigation. 
	// toggleNavigation();
	setTimeout(toggleNavigation,500);
}

// Open selected page. 
function openSelectedPage() {

	// Get navigation tab indicator. 
	let tabindicator = document.querySelector('nav.switcher ul.navlist li.switch');
	// console.log('\tNavigation tabber:',tabindicator.style.transform,tabindicator);

	// Shift navigation tab indicator to proper position. 
	tabindicator.style.transform = `translateX(${(100*currentPageIndex)}%)`;
	// console.log('\tNavigation tabber:',tabindicator.style.transform,tabindicator);

	// Get page container. 
	let inner = document.querySelector('div#container main.main div.inner');
	// console.log('\tNavigation pager:',inner.style.transform,inner);

	// Shift to selected page. 
	inner.style.transform = `translateX(${-100*currentPageIndex}%)`;
	// console.log('\tNavigation pager:',inner.style.transform,inner);
}

