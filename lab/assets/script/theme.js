


// Get theme list. 
const themeList = document.querySelector('div#container header.navbar div.bin div.themetoggler ul.themelist');

// Get all theme buttons. 
const allThemeBtns = document.querySelectorAll('div#container header.navbar div.bin div.themetoggler ul.themelist li.themeitem a.themebtn');

// Get theme toggler button. 
const themeToggleBtn = document.querySelector('div#container header.navbar div.bin div.themetoggler div.themebtn');

// Get theme toggler button icon. 
const themeToggleBtnIcon = document.querySelector('div#container header.navbar div.bin div.themetoggler div.themebtn svg.icon.selected');

// Initialize theme time checker. 
let themeTimer;


/*****/


// Load previously selected theme. 
loadPrevTheme();

// Activate theme selector. 
activateThemeSelector();


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

		// End theme timer if running. 
		clearInterval(themeTimer);
		themeTimer = null;
		// console.log('Theme timer:',themeTimer);
	}

	// Apply selected theme: dark. 
	else if(themeid=='dark') {

		// Load dark theme. 
		loadDarkTheme();

		// End theme timer if running. 
		clearInterval(themeTimer);
		themeTimer = null;
		// console.log('Theme timer:',themeTimer);
	}

	// Apply default theme: automatic. 
	else {

		// Check time to update theme. 
		checkTimeForTheme();

		// Check once per minute. 
		let dt = 60000;
		// Start theme timer. 
		themeTimer = setInterval(checkTimeForTheme,dt);
		// console.log('Theme timer:',themeTimer);
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

	// Update status of theme buttons. 
	function updateThemeBtns() {
	
		// Go thru each theme button. 
		for(let themebtn of allThemeBtns) {

			// Check if on selected theme button. 
			let onSelectedBtn = themebtn.getAttribute('data-themeid')==themeid;
	
			// Activate selected theme button. 
			if(onSelectedBtn) {
	
				// Activate selected theme button. 
				themebtn.classList.add('active');
	
				// Get icon from selected theme button. 
				let selectedthemeicon = themebtn.querySelector('svg');
				// Refresh icon in theme toggler button. 
				themeToggleBtnIcon.innerHTML = selectedthemeicon.innerHTML;
			}
	
			// De-activate other theme buttons. 
			else {

				// De-activate theme button. 
				themebtn.classList.remove('active');
			}
		}
	}
}

// Activate theme selector. 
function activateThemeSelector() {

	// Activate theme toggler button. 
	themeToggleBtn.addEventListener('click',toggleThemeList);

	// Go thru all theme buttons. 
	for(let themebtn of allThemeBtns) {
		// Activate clicks of theme button. 
		themebtn.addEventListener('click',selectTheme);
	}

	/****/

	// Toggle theme list. 
	function toggleThemeList() {
		themeList.classList.toggle('open');
	}

	// Select theme. 
	function selectTheme(event) {
		// console.log(event);

		// Get selected theme button. 
		const selectedthemebtn = event.currentTarget;

		// Get id of selected theme. 
		let selectedthemeid = selectedthemebtn.getAttribute('data-themeid');

		// Load theme by id. 
		loadThemeById(selectedthemeid);

		// Close theme list after selection. 
		themeList.classList.remove('open');

		// Save to memory: id of selected theme. 
		localStorage.setItem('savedthemeid',selectedthemeid);
	}
}
