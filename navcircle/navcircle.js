


// Get navigation circle. 
const navcircle = document.querySelector('div#container nav.navcircle');

// Get toggle button. 
const togglebtn = document.querySelector('div#container nav.navcircle div.togglebtn');

// Get navigation circle list. 
// const navcirclelist = document.querySelector('div#container nav.navcircle ul.navlist');


/*****/


// Activate toggle button. 
togglebtn.addEventListener('click',toggleNavCircle);

// Activate mobility of navigation circle. 
makeItemMovable(navcircle,'div.togglebtn');


/*****/


// Toggle navigation circle. 
function toggleNavCircle() {
	navcircle.classList.toggle('on');
}