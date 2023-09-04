


// Get theme list. 
const themeList = document.querySelector('div#container nav.navbar div.bin div.themetoggler ul.themelist');

// Get all theme links. 
const allThemeLinks = document.querySelectorAll('div#container nav.navbar div.bin div.themetoggler ul.themelist li.themeitem a.themelink');

// Get theme toggler button icon. 
const themeToggleBtnIcon = document.querySelector('div#container nav.navbar div.bin div.themetoggler div.themebtn svg.icon.selected');


/*****/


// Load previously selected theme. 
loadPrevTheme();

// Activate theme list. 
activateThemeList();


/*****/


// Load previously selected theme. 
function loadPrevTheme() {

	// Get previously selected theme id from memory. 
	let themeid = localStorage.getItem('savedthemeid');

	// Load theme by id. 
	loadThemeById(themeid);
}

// TODO: Load theme by id. 
function loadThemeById(themeid) {

	// Apply selected theme: light. 
	if(themeid=='light') {
		// Load light theme. 
		document.body.classList.remove('dark');
	}

	// Apply selected theme: dark. 
	else if(themeid=='dark') {
		// Load dark theme. 
		document.body.classList.add('dark');
	}

	// Apply default theme: automatic. 
	else {

		// Get current time of day. 
		let currentHour = ( new Date() ).getHours();
		// Check if within normal night time hours. 
		let atNight = (currentHour<6) || (currentHour>18);

		// Load dark theme at night. 
		if(atNight) document.body.classList.add('dark');
		// Load light theme during day. 
		else document.body.classList.remove('dark');
	}
	
	// Go thru all theme links. 
	for(let themelink of allThemeLinks) {

		// Handle selected theme link. 
		if( themelink.getAttribute('data-themeid')==themeid ) {

			// Activate selected theme link. 
			themelink.classList.add('active');

			// Get icon of selected theme. 
			let themeicon = themelink.querySelector('svg');
			// Refresh icon in theme toggler button. 
			themeToggleBtnIcon.innerHTML = themeicon.innerHTML;
		}

		// De-activate all other theme links. 
		else themelink.classList.remove('active');
	}
}

// Activate theme list. 
function activateThemeList() {

	// Go thru all theme links. 
	for(let themelink of allThemeLinks) {
		themelink.addEventListener('click',selectTheme);
	}

	/****/

	// Select theme. 
	function selectTheme(event) {
		// console.log(event);

		// Get selected theme button. 
		const selectedThemeLink = event.currentTarget;

		// Get id of selected theme. 
		let themeid = selectedThemeLink.getAttribute('data-themeid');

		// Load theme by id. 
		loadThemeById(themeid);

		// Close theme list after selection. 
		themeList.classList.remove('open');

		// Save selected theme to memory. 
		localStorage.setItem('savedthemeid',themeid);
	}
}

// Toggle theme list. 
function toggleThemeList() {
	themeList.classList.toggle('open');
}
