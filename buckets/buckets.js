

// Initialize selected index. 
let selectedIndex = 1;


/*****/


// Load the whole jawn. 
loadWholeJawn();


// Handle events. 
handleEvents();


// Open selected page using selected index. 
openSelectedPage();


/*****/


// Load the whole jawn. 
function loadWholeJawn() {

	// Add navigation. 
	addNavigation();
	
	// Add budget. 
	addBudget();

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
		// console.log(budget);

		// Initiate result. 
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
		budget.innerHTML = result;
	}
}


// Handle events. 
function handleEvents() {

	// Activate navigation switcher links. 
	let radiolinks = document.querySelectorAll('nav.switcher ul.navlist li.navitem input');
	for(let link of radiolinks) {
		link.addEventListener('input',selectPage);
	}

	/*****/

	// Open selected page. 
	function selectPage(event) {

		// Get selected navigation button. 
		let navbtn = event.currentTarget;
		// console.log('Navigation button:', navbtn);

		// Get selected page name. 
		let selectedPageName = navbtn.value;
		// console.log('Selected page name:',selectedPageName);

		// Save index for selected page. 
		selectedIndex = sectionNames.indexOf(selectedPageName);
		console.log('Selected index:',selectedIndex);

		// Open selected page using selected index. 
		openSelectedPage();
	}
}


// Open selected page by index. 
function openSelectedPage() {

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

