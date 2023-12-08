


// Get theme switcher list. 
const themeList = document.querySelector('div#container header.navbar div.bin div.themeswitcher ul.themelist');

// Get all theme selector buttons. 
const allthemeselectorbtns = document.querySelectorAll('div#container header.navbar div.bin div.themeswitcher ul.themelist li.themeitem a.themebtn');

// Get toggle button for theme switcher list. 
const themelisttoggler = document.querySelector('div#container header.navbar div.bin div.themeswitcher div.togglebtn');

// Get icon of toggle button for theme switcher list. 
const themelisttogglericon = document.querySelector('div#container header.navbar div.bin div.themeswitcher div.togglebtn svg.icon.selection');

// Initialize timer for periodic theme check. 
let themechecktimer;


/*****/


// Load previously selected theme. 
loadPrevTheme();

// Activate theme switcher. 
activateThemeSwitcher();


/*****/


// Load previously selected theme. 
function loadPrevTheme() {

	// Get from memory: id of previously selected theme. 
	let savedthemeid = localStorage.getItem('savedthemeid');

	// Load theme using saved id. 
	loadThemeById(savedthemeid);
}

// Load theme by id. 
function loadThemeById(themeid) {

	// Apply selected theme: light. 
	if(themeid=='light') {

		// Load light theme. 
		loadLightTheme();

		// End theme check timer if running. 
		clearInterval(themechecktimer);
		themechecktimer = null;
		// console.log('Theme timer:',themechecktimer);
	}

	// Apply selected theme: dark. 
	else if(themeid=='dark') {

		// Load dark theme. 
		loadDarkTheme();

		// End theme check timer if running. 
		clearInterval(themechecktimer);
		themechecktimer = null;
		// console.log('Theme timer:',themechecktimer);
	}

	// Apply default theme: automatic. 
	else {

		// Check time to update theme. 
		checkTimeForTheme();

		// Check once per minute. 
		let dt = 60000;
		// Start theme check timer. 
		themechecktimer = setInterval(checkTimeForTheme,dt);
		// console.log('Theme timer:',themechecktimer);
	}

	// Update status of theme buttons. 
	updateThemeBtns();

	/****/

	// Load light theme. 
	function loadLightTheme() {
		document.body.classList.remove('dark');
	}

	// Load dark theme. 
	function loadDarkTheme() {
		document.body.classList.add('dark');
	}

	// Check time to update theme. 
	function checkTimeForTheme() {

		// Get current time of day. 
		let currentHour = ( new Date() ).getHours();
		// Check if within normal night time hours. 
		let atNight = (currentHour<6) || (currentHour>18);

		// Load dark theme at night. 
		if(atNight) loadDarkTheme();
		// Load light theme during day. 
		else loadLightTheme();
	}

	// Update state of theme selector buttons. 
	function updateThemeBtns() {
	
		// Go thru each theme selector button. 
		for(let themebtn of allthemeselectorbtns) {

			// Check if on selected theme button. 
			let onSelectedBtn = themebtn.getAttribute('data-themeid')==themeid;
	
			// Activate selected theme button. 
			if(onSelectedBtn) {
	
				// Activate selected theme button. 
				themebtn.classList.add('active');
	
				// Get icon from selected theme button. 
				let selectedthemeicon = themebtn.querySelector('svg');
				// Update icon in theme switcher button. 
				themelisttogglericon.innerHTML = selectedthemeicon.innerHTML;
			}
	
			// De-activate other theme buttons. 
			else {

				// De-activate theme button. 
				themebtn.classList.remove('active');
			}
		}
	}
}

// Activate theme switcher. 
function activateThemeSwitcher() {

	// Activate theme switcher toggle button. 
	themelisttoggler.addEventListener('click',toggleThemeList);

	// Go thru all theme selector buttons. 
	for(let themebtn of allthemeselectorbtns) {
		// Activate click of theme selector button. 
		themebtn.addEventListener('click',selectNewTheme);
	}

	/****/

	// Toggle theme list. 
	function toggleThemeList() {
		themeList.classList.toggle('open');
	}

	// Select new theme. 
	function selectNewTheme(event) {
		// console.log(event);

		// Get selected theme button. 
		const selectedthemebtn = event.currentTarget;

		// Get id of selected theme. 
		let selectedthemeid = selectedthemebtn.getAttribute('data-themeid');

		// Load theme by id. 
		loadThemeById(selectedthemeid);

		// Close theme list after selection made. 
		themeList.classList.remove('open');

		// Save to memory: id of selected theme. 
		localStorage.setItem('savedthemeid',selectedthemeid);
	}
}
