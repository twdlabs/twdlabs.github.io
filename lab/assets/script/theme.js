


// Get elements of light/dark theme selector. 
const ltdrkswitcher = {

	// Get toggle button for theme selector list. 
	togglerbtn:document.querySelector('div#container header.navbar div.bin div.cornerpanel div.themeswitcher.ltdrk div.togglebtn'),

	// Get icon of toggle button for theme selector list. 
	togglericon:document.querySelector('div#container header.navbar div.bin div.cornerpanel div.themeswitcher.ltdrk div.togglebtn svg.icon.selection'),

	// Get theme selector list. 
	themeselectorlist:document.querySelector('div#container header.navbar div.bin div.cornerpanel div.themeswitcher.ltdrk ul.themelist'),

	// Get all theme selector buttons. 
	themeselectorbtns:document.querySelectorAll('div#container header.navbar div.bin div.cornerpanel div.themeswitcher.ltdrk ul.themelist li.themeitem a.themebtn'),

	// Initialize timer for periodic theme check. 
	themechecktimer:null,
};

// Get elements of color theme selector. 
const colorswitcher = {

	// Get toggle button for theme selector list. 
	togglerbtn:document.querySelector('div#container header.navbar div.bin div.cornerpanel div.themeswitcher.color div.togglebtn'),

	// Get icon of toggle button for theme selector list. 
	togglericon:document.querySelector('div#container header.navbar div.bin div.cornerpanel div.themeswitcher.color div.togglebtn span.color.selection'),

	// Get theme selector list. 
	themeselectorlist:document.querySelector('div#container header.navbar div.bin div.cornerpanel div.themeswitcher.color ul.themelist'),

	// Get all theme selector buttons. 
	themeselectorbtns:document.querySelectorAll('div#container header.navbar div.bin div.cornerpanel div.themeswitcher.color ul.themelist li.themeitem a.themebtn'),
};


/*****/


// Load previously selected themes. 
loadPrevThemes();

// Activate theme selectors. 
activateThemeSelectors();


/*****/


// Load previously selected themes. 
function loadPrevThemes() {

	// Get from memory: ids of previously selected themes. 
	let savedcolorthemeid = localStorage.getItem('savedcolorthemeid');
	let savedltdrkthemeid = localStorage.getItem('savedltdrkthemeid');

	// Load themes using saved ids. 
	loadColorThemeById(savedcolorthemeid);
	loadLtDrkThemeById(savedltdrkthemeid);
}

// Load theme by id. 
function loadColorThemeById(themeid) {

	// Apply selected theme: blue. 
	if(themeid=='b') loadBlueTheme();

	// Apply selected theme: green. 
	else if(themeid=='g') loadGreenTheme();

	// Apply selected theme: green. 
	else if(themeid=='o') loadOrangeTheme();

	// Update state of theme buttons. 
	updateThemeBtns();

	/****/

	// Load blue theme. 
	function loadBlueTheme() {
		document.body.classList.add('b');
		document.body.classList.remove('g');
		document.body.classList.remove('o');
	}

	// Load green theme. 
	function loadGreenTheme() {
		document.body.classList.add('g');
		document.body.classList.remove('b');
		document.body.classList.remove('o');
	}

	// Load orange theme. 
	function loadOrangeTheme() {
		document.body.classList.add('o');
		document.body.classList.remove('b');
		document.body.classList.remove('g');
	}

	// Update state of theme selector buttons. 
	function updateThemeBtns() {
	
		// Go thru each theme selector button. 
		for(let themebtn of colorswitcher['themeselectorbtns']) {

			// Check if on selected theme button. 
			let onSelectedBtn = themebtn.getAttribute('data-colorthemeid')==themeid;
	
			// Activate selected theme button. 
			if(onSelectedBtn) {
	
				// Activate selected theme button. 
				themebtn.classList.add('active');
			}
	
			// De-activate other theme buttons. 
			else {

				// De-activate theme button. 
				themebtn.classList.remove('active');
			}
		}
	}
}

// Load theme by id. 
function loadLtDrkThemeById(themeid) {

	// Apply selected theme: light. 
	if(themeid=='light') {

		// Load light theme. 
		loadLightTheme();

		// End theme check timer if running. 
		clearInterval(ltdrkswitcher['themechecktimer']);
		ltdrkswitcher['themechecktimer'] = null;
		// console.log('Theme timer:',ltdrkswitcher['themechecktimer']);
	}

	// Apply selected theme: dark. 
	else if(themeid=='dark') {

		// Load dark theme. 
		loadDarkTheme();

		// End theme check timer if running. 
		clearInterval(ltdrkswitcher['themechecktimer']);
		ltdrkswitcher['themechecktimer'] = null;
		// console.log('Theme timer:',ltdrkswitcher['themechecktimer']);
	}

	// Apply default theme: automatic. 
	else {

		// Check time to update theme. 
		checkTimeForTheme();

		// Check once per minute. 
		let dt = 60000;
		// Start theme check timer. 
		ltdrkswitcher['themechecktimer'] = setInterval(checkTimeForTheme,dt);
		// console.log('Theme timer:',ltdrkswitcher['themechecktimer']);
	}

	// Update state of theme buttons. 
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
		for(let themebtn of ltdrkswitcher['themeselectorbtns']) {

			// Check if on selected theme button. 
			let onSelectedBtn = themebtn.getAttribute('data-ltdrkthemeid')==themeid;
	
			// Activate selected theme button. 
			if(onSelectedBtn) {
	
				// Activate selected theme button. 
				themebtn.classList.add('active');
	
				// Get icon from selected theme button. 
				let selectedthemeicon = themebtn.querySelector('svg.icon');

				// Update icon contents for selector list toggle button. 
				ltdrkswitcher['togglericon'].innerHTML = selectedthemeicon.innerHTML;
			}
	
			// De-activate other theme buttons. 
			else {

				// De-activate theme button. 
				themebtn.classList.remove('active');
			}
		}
	}
}

// Activate theme selectors. 
function activateThemeSelectors() {

	// Activate toggle button for color theme selector. 
	colorswitcher['togglerbtn'].addEventListener('click',toggleColorThemeList);

	// Go thru all color theme selector buttons. 
	for(let themebtn of colorswitcher['themeselectorbtns']) {
		// Activate click of theme selector button. 
		themebtn.addEventListener('click',selectNewColorTheme);
	}

	// Activate toggle button for light/dark theme selector. 
	ltdrkswitcher['togglerbtn'].addEventListener('click',toggleLtDrkThemeList);

	// Go thru all light/dark theme selector buttons. 
	for(let themebtn of ltdrkswitcher['themeselectorbtns']) {
		// Activate click of theme selector button. 
		themebtn.addEventListener('click',selectNewLtDrkTheme);
	}

	/****/

	// Toggle color theme list. 
	function toggleColorThemeList() {

		// Check if already open. 
		let alreadyopen = colorswitcher['themeselectorlist'].classList.contains('open');

		// Close if already open. 
		if(alreadyopen) {
			colorswitcher['themeselectorlist'].classList.remove('open');
		}
		// Open if not already open. 
		else {
			colorswitcher['themeselectorlist'].classList.add('open');
			ltdrkswitcher['themeselectorlist'].classList.remove('open');
		}
	}

	// Select new color theme. 
	function selectNewColorTheme(event) {
		
		// Get selected theme button. 
		const selectedthemebtn = event.currentTarget;
		console.log('Selected color theme button:',selectedthemebtn);
		
		// Get id of selected theme. 
		let selectedthemeid = selectedthemebtn.getAttribute('data-colorthemeid');
		console.log('Selected color theme:',selectedthemeid);

		// Load theme by id. 
		loadColorThemeById(selectedthemeid);

		// Close theme list after selection made. 
		colorswitcher['themeselectorlist'].classList.remove('open');

		// Save to memory: id of selected theme. 
		localStorage.setItem('savedcolorthemeid',selectedthemeid);
	}

	// Toggle light/dark theme list. 
	function toggleLtDrkThemeList() {

		// Check if already open. 
		let alreadyopen = ltdrkswitcher['themeselectorlist'].classList.contains('open');

		// Close if already open. 
		if(alreadyopen) {
			ltdrkswitcher['themeselectorlist'].classList.remove('open');
		}
		// Open if not already open. 
		else {
			ltdrkswitcher['themeselectorlist'].classList.add('open');
			colorswitcher['themeselectorlist'].classList.remove('open');
		}
	}

	// Select new light/dark theme. 
	function selectNewLtDrkTheme(event) {
		
		// Get selected theme button. 
		const selectedthemebtn = event.currentTarget;
		console.log('Selected light/dark theme button:',selectedthemebtn);
		
		// Get id of selected theme. 
		let selectedthemeid = selectedthemebtn.getAttribute('data-ltdrkthemeid');
		console.log('Selected light/dark theme:',selectedthemeid);

		// Load theme by id. 
		loadLtDrkThemeById(selectedthemeid);

		// Close theme list after selection made. 
		ltdrkswitcher['themeselectorlist'].classList.remove('open');

		// Save to memory: id of selected theme. 
		localStorage.setItem('savedltdrkthemeid',selectedthemeid);
	}
}
