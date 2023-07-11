


// Get toggle button. 
const togglebtn = document.querySelector('div#container nav.navcircle div.togglebtn');

// Get navigation circle list. 
const navcirclelist = document.querySelector('div#container nav.navcircle ul.navlist');


/*****/


// Activate toggle button. 
togglebtn.addEventListener('click',toggleNavCircle);


/*****/


// Toggle navigation circle. 
function toggleNavCircle() {
	navcirclelist.classList.toggle('on');
}