


// Get theme list. 
const themeList = document.querySelector('div#container nav.navbar div.bin ul.navlist li.navitem div.themetoggler ul.themelist');

// Get all theme links. 
const allThemeLinks = document.querySelectorAll('div#container nav.navbar div.bin ul.navlist li.navitem div.themetoggler ul.themelist li.themeitem a.themelink');

// Get theme toggler button icon. 
const themeToggleBtnIcon = document.querySelector('div#container nav.navbar div.bin ul.navlist li.navitem div.themetoggler div.themebtn svg.icon.selected');


/*****/


// Activate theme list. 
activateThemeList();

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

		// Get theme value. 
		let themevalue = selectedThemeLink.getAttribute('data-themevalue');
		themeToggleBtnIcon.innerHTML = selectedThemeLink.querySelector('svg').innerHTML;

		// Apply selected theme: light. 
		if(themevalue=='light') document.body.classList.remove('dark');

		// Apply selected theme: dark. 
		else if(themevalue=='dark') document.body.classList.add('dark');

		// Apply default theme: auto. 
		else {
			let currentHour = (new Date()).getHours();
			let atNight = (currentHour<6) || (currentHour>18);
			if(atNight) document.body.classList.add('dark');
			else document.body.classList.remove('dark');
		}

		// Close theme list after selection. 
		themeList.classList.remove('open');
	}
}

// Toggle theme list. 
function toggleThemeList() {

	// 
	themeList.classList.toggle('open');
}
