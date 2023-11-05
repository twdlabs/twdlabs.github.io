


// Get cube carousel. 
const cubecarousel = document.querySelector('div.shape');


/*****/


// Toggle shape of cube carousel. 
function toggleShape() {
	cubecarousel.classList.toggle('cube');
	cubecarousel.classList.toggle('ring');
}

// Toggle back faces. 
function toggleBackfaces() {
	cubecarousel.classList.toggle('bfv');
}
