

// Initialize selected index. 
let selectedIndex = 0;


/*****/


// Add navigation. 
addNavigation();


// Add budget. 
addBudget();


// Handle events. 
handleEvents();


// Open selected page using selected index. 
openSelectedPage();


/*****/


// Add navigation. 
function addNavigation() {

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
			<img src="abc.png" class="bg">
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


// Add budget. 
function addBudget() {

	// Get budget container. 
	let budget = document.querySelector('article#bank section.buckets');
	console.log(budget);

	// Initiate result. 
	let result = '';

	for(let ml of monthLabels) {
		result += `
		<!-- bucket -->
		<div class="bucket">

			<label class="month">${ml}</label>

		</div>
		<!-- /bucket -->`;
	}

	// Add result to page. 
	budget.innerHTML = result;
}


// Handle events. 
function handleEvents() {
	
	// Activate navigation quadrant links. 
	let quadlinks = document.querySelectorAll('nav.quads div.quadrant a.link')
	for(let link of quadlinks) {
		link.addEventListener('click',selectPage);
	}
	
	// Activate navigation switcher links. 
	let radiolinks = document.querySelectorAll('nav.switcher ul.navlist li.navitem input');
	for(let link of radiolinks) {
		link.addEventListener('input',selectPage);
	}
}


// Open selected page. 
function selectPage(event) {
	console.log('Select page:', event.currentTarget);

	// Get selected navigation button. 
	let navbtn = event.currentTarget;

	// Get selected page name. 
	let selectedPageName = navbtn.value;
	console.log('selectedPageName:',selectedPageName);

	// Set index for selected page. 
	selectedIndex = sectionNames.indexOf(selectedPageName);
	console.log('selectedIndex:',selectedIndex);

	// Open selected page using selected index. 
	openSelectedPage();
}


// Open selected page by index. 
function openSelectedPage() {

	// Shift navigation switch to proper position. 
	let switich = document.querySelector('nav.switcher ul.navlist li.switch');
	console.log('switich:',switich);
	switich.style.transform = `translateX(${(100*selectedIndex)}%)`;

	// Get main container. 
	let inner = document.querySelector('div#container main.main div.inner');
	// console.log(inner.style.transform);

	// Add transformation for selected page. 
	inner.style.transform = `translateX(${-100*selectedIndex}%)`;
	// console.log(inner.style.transform);

	// // Remove all previous page names. 
	// for(let name of sectionNames) {
	// 	// Remove page name. 
	// 	main.classList.remove(name);
	// }

	// // Add selected page name. 
	// main.classList.add(selectedPageName);
}

