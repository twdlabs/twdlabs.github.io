

// Get navigation tab indicator. 
let tabindicator = document.querySelector('nav.switcher ul.navlist li.switch');
// console.log('\tNavigation tabber:',tabindicator.style.transform,tabindicator);

// Get page container. 
let pageshifter = document.querySelector('main.main div.inner');
// console.log('\tNavigation pager:',pageshifter.style.transform,pageshifter);

// Get all app pages. 
let appPages = document.querySelectorAll('main.main div.inner section.page');



// Define navigation data. 
const navdata = [
	{
		name:'Overview',
		code:'overview',
		tooltip:'Get an overall feel for the all-around big picture (360)',
	},
	{
		name:'Activity',
		code:'activity',
		tooltip:'See a list of your bank activity and most recent transactions',
	},
	{
		name:'Budget',
		code:'budget',
		tooltip:'See your spending categories',
	},
	{
		name:'Settings',
		code:'settings',
		tooltip:'Customize how the app works',
	},
	// {
	// 	name:'Taxes',
	// 	code:'taxes',
	// 	tooltip:'Get tax accounting for your yearly filing',
	// },
	// {
	// 	name:'Investments',
	// 	code:'invest',
	// 	tooltip:'See your long-term growth',
	// },
	// {
	// 	name:'Insurance',
	// 	code:'insurance',
	// 	tooltip:'Optimize your risk management strategy',
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
			<label class="navlabel" for="select-${item.code}" title="${item.tooltip}">${item.name}</label>
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

// Go to previous page. 
function goToPrevPage() {
	
	// Decrement page index to previous page. 
	currentPageIndex--;
	// Go to end if past lower bound. 
	if(currentPageIndex<0) {
		currentPageIndex = navdata.length-1;
	}
	console.log('New page index:', currentPageIndex);

	// Open selected page. 
	openSelectedPage();

	// TODO: Highlight corresponding radio button. 
	// abc.setAttribute('checked','');
}
// Go to next page. 
function goToNextPage() {
	
	// Increment page index to next page. 
	currentPageIndex ++;
	// Go to beginning if past upper bound. 
	if(currentPageIndex>=navdata.length) {
		currentPageIndex = 0;
	}
	console.log('New page index:', currentPageIndex);

	// Open selected page. 
	openSelectedPage();

	// TODO: Highlight corresponding radio button. 
	// abc.setAttribute('checked','');
}


// Toggle navigation. 
function toggleNavigation() {
	document.querySelector('nav.switcher').classList.toggle('active');
}

// Select new page. 
function selectNewPage(event) {

	// Get selected navigation button. 
	let navbtn = event.currentTarget;
	// Save index for selected page. 
	currentPageIndex = 1*navbtn.value;
	console.log('New page index:', currentPageIndex/* , navbtn */);

	// Open selected page. 
	openSelectedPage();
	// setTimeout(openSelectedPage,250);

	// Close navigation. 
	// toggleNavigation();
	setTimeout(toggleNavigation,500);
}

// Open selected page. 
function openSelectedPage() {

	// Shift navigation tab indicator to proper position. 
	tabindicator.style.transform = `translateX(${(100*currentPageIndex)}%)`;
	// console.log('\tNavigation tabber:',tabindicator.style.transform,tabindicator);

	// Shift to selected page. 
	pageshifter.style.transform = `translateX(${-100*currentPageIndex}%)`;
	// console.log('\tNavigation pager:',pageshifter.style.transform,pageshifter);

	// De-activate other pages. 
	for(let page of appPages) {
		page.classList.remove('active');
	}

	// Activate selected page. 
	appPages[currentPageIndex].classList.add('active');
}

