

// 
const toggler = document.querySelector('header.header div.toggler');
// 
const navmenu = document.querySelector('header.header ul.navmenu');
// Get drop togglers. 
let droptogglers = document.querySelectorAll('header.header ul.navmenu li.navitem.drop');


/*****/


// 
toggler.addEventListener('click',toggleNavMenu);


// Enable drop togglers. 
for(let d of droptogglers) {
	d.addEventListener('click',toggleDropdown);
	d.addEventListener('click',toggleDropdown);
	d.addEventListener('click',toggleDropdown);
}


/*****/


// Toggle nav menu. 
function toggleNavMenu(event) {
	navmenu.classList.toggle('active');
}

// Toggle dropdown menu. 
function toggleDropdown(event) {
	let dropper = event.currentTarget;
	dropper.classList.toggle('active');
}
