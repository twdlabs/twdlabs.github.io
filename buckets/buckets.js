

// Define section names. 
const sectionNames = ['bank','taxes','invest','insurance'];

// Define navigation data. 
const navdata = [
	{
		name:'Banking',
		code:'bank'
	},
	{
		name:'Taxes',
		code:'taxes'
	},
	{
		name:'Investments',
		code:'invest'
	},
	{
		name:'Insurance',
		code:'insurance'
	},
];

// Initialize selected index. 
let selectedIndex = 0;




// Add navigation. 
addNavigation();


// Handle events. 
handleEvents();


/*****/


// Add navigation. 
function addNavigation() {

	// Get navigation list. 
	let navlist = document.querySelector('div#container nav.switcher ul.navlist');
	
	// Initialize resulting nav list items. 
	let result = '';
	
	// Add nav list items. 
	for(let i in navdata) {
		let item = navdata[i];
		result += `
		<!-- navitem -->
		<li class="navitem">
	
			<!-- radio -->
			<input type="radio" name="navselection" id="select-${item.code}" value="${item.code}"${ (i==selectedIndex) ? (' checked') : ('') }>
			<!-- /radio -->
	
			<!-- navlabel -->
			<label class="navlabel" for="select-${item.code}">${item.name}</label>
			<!-- /navlabel -->
	
		</li>
		<!-- /navitem -->`;
	}
	
	// Add nav list switch. 
	result += `
	<!-- switch -->
	<li class="switch"></li>
	<!-- /switch -->`;
	
	// Add resulting nav list to page. 
	navlist.innerHTML = result;
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
	let selectedPageName = ( navbtn.value ) || ( navbtn.getAttribute('data-val') );

	// Get index of selected page. 
	let selectedIndex = sectionNames.indexOf(selectedPageName);
	console.log('selectedIndex:',selectedIndex);

	// Shift navigation switchto proper position. 
	let switich = document.querySelector('nav.switcher ul.navlist li.switch');
	console.log('switich:',switich);
	switich.style.transform = `translateX(${(100*selectedIndex)}%)`;

	// Get main container. 
	let main = document.querySelector('div#container main.main');

	// Remove all previous page names. 
	for(let name of sectionNames) {
		// Remove page name. 
		main.classList.remove(name);
	}

	// Add selected page name. 
	main.classList.add(selectedPageName);
}

