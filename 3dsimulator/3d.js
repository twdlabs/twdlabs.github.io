


// Get container. 
const container = document.querySelector('div#container');
const main = document.querySelector('div#container main.main');

// Get all elements. 
let allelements;

// Get angle slider for x-axis. 
const anglesliderX = document.querySelector('div#container main.controller div.manual input.angle#anglesliderX');
// console.log('anglesliderX:',anglesliderX);

// Get angle slider for y-axis. 
const anglesliderY = document.querySelector('div#container main.controller div.manual input.angle#anglesliderY');
// console.log('anglesliderY:',anglesliderY);

// Get angle slider for z-axis. 
const anglesliderZ = document.querySelector('div#container main.controller div.manual input.angle#anglesliderZ');
// console.log('anglesliderZ:',anglesliderZ);

// Get angle display for x-axis. 
const angledisplayX = document.querySelector('div#container main.controller div.manual label.label span.value#angleX');
// console.log('angledisplayX:',angledisplayX);

// Get angle display for y-axis. 
const angledisplayY = document.querySelector('div#container main.controller div.manual label.label span.value#angleY');
// console.log('angledisplayY:',angledisplayY);

// Get angle display for z-axis. 
const angledisplayZ = document.querySelector('div#container main.controller div.manual label.label span.value#angleZ');
// console.log('angledisplayZ:',angledisplayZ);

// Get controls for outer perspective. 
const outerperspective = {
	slider:document.querySelector('div#container main.controller div.panel div.manual input.perspective.outer'),
	display:document.querySelector('div#container main.controller div.panel div.manual label.label span.perspective.outer'),
}
// console.log('outerperspective:',outerperspective);

// Get controls for inner perspective. 
const innerperspective = {
	slider:document.querySelector('div#container main.controller div.panel div.manual input.perspective.inner'),
	display:document.querySelector('div#container main.controller div.panel div.manual label.label span.perspective.inner'),
}
// console.log('innerperspective:',innerperspective);


/*****/


// Add elements. 
addElements();


/*****/


// Add elements. 
function addElements() {

	// Initialize result. 
	let result = '';
	
	// Accumulate result. s
	for(let i=1 ; i<=9 ; i++) {
		result += `
		<!-- item -->
		<div class="item">${i}</div>
		<!-- /item -->`;
	}
	
	// Display result. 
	// main.innerHTML = result;
	// main.insertAdjacentHTML('beforeend',result);
	main.insertAdjacentHTML('afterbegin',result);

	// Access all elements. 
	allelements = document.querySelectorAll('div#container main.main div.item');

	// Clear transformations on all axes. 
	anglesliderX.value = 0;
	anglesliderY.value = 0;
	anglesliderZ.value = 0;

	// Clear manual angle transformations (on all axes). 
	clearManualAngles();

	// Clear manual perspectives. 
	clearPerspectives();
}


// Change outer 3d perspective. 
function updateOuterPerspective() {
	console.log('updateOuterPerspective');

	// Get selected perspective. 
	let selectedperspective = outerperspective['slider'].value * 1;
	console.log('selectedperspective:',selectedperspective);

	// Display selected angle. 
	outerperspective['display'].textContent = selectedperspective;
	// Apply selected perspective. 
	container.style.perspective = `${selectedperspective}rem`;
}

// Change inner 3d perspective. 
function updateInnerPerspective() {
	console.log('updateInnerPerspective');

	// Get selected perspective. 
	let selectedperspective = innerperspective['slider'].value * 1;
	console.log('selectedperspective:',selectedperspective);

	// Display selected angle. 
	innerperspective['display'].textContent = selectedperspective;
	// Apply selected perspective. 
	main.style.perspective = `${selectedperspective}rem`;
}


// Clear angle on x-axis. 
function clearAngleX() {
	anglesliderX.value = 0;
	angledisplayX.textContent = 0;
}
// Change angle of elements (on x-axis). 
function updateAngleX() {

	// Get selected angle. 
	let selectedangle = anglesliderX.value * 1;
	console.log('selectedangle:',selectedangle);
	
	// Clear auto-rotate (on all axes). 
	clearAutoRotate();
	// Clear transformations on other axes. 
	clearAngleY();
	clearAngleZ();

	// Display selected angle. 
	angledisplayX.textContent = selectedangle;
	// Apply selected angle transformation to each element. 
	for(let element of allelements) {
		element.style.transform = `rotateX(${selectedangle}deg)`;
	}
}
// Toggle auto-rotate of elements (on x-axis). 
function toggleAutoRotateX() {

	// Check if auto-rotate already on. 
	let alreadyOn = container.classList.contains('x');
	console.log('alreadyOn:',alreadyOn);

	// Turn off auto-rotate if already on. 
	if(alreadyOn) container.classList.remove('x');
	// Turn on auto-rotate if not already on. 
	else {
		container.classList.add('x');
		container.classList.remove('y');
		container.classList.remove('z');

		// Clear manual angles (on all axes). 
		clearManualAngles();
	}
}


// Clear angle on y-axis. 
function clearAngleY() {
	anglesliderY.value = 0;
	angledisplayY.textContent = 0;
}
// Change angle of elements (on y-axis). 
function updateAngleY() {

	// Get selected angle. 
	let selectedangle = anglesliderY.value * 1;
	console.log('selectedangle:',selectedangle);
	
	// Clear auto-rotate (on all axes). 
	clearAutoRotate();
	// Clear transformations on other axes. 
	clearAngleX();
	clearAngleZ();

	// Display selected angle. 
	angledisplayY.textContent = selectedangle;
	// Apply selected angle transformation to each element. 
	for(let element of allelements) {
		element.style.transform = `rotateY(${selectedangle}deg)`;
	}
}
// Toggle auto-rotate of elements (on y-axis). 
function toggleAutoRotateY() {

	// Check if auto-rotate already on. 
	let alreadyOn = container.classList.contains('y');
	console.log('alreadyOn:',alreadyOn);

	// Turn off auto-rotate if already on. 
	if(alreadyOn) container.classList.remove('y');
	// Turn on auto-rotate if not already on. 
	else {
		container.classList.remove('x');
		container.classList.add('y');
		container.classList.remove('z');

		// Clear manual angles (on all axes). 
		clearManualAngles();
	}
}


// Clear angle on z-axis. 
function clearAngleZ() {
	anglesliderZ.value = 0;
	angledisplayZ.textContent = 0;
}
// Change angle of elements (on z-axis). 
function updateAngleZ() {

	// Get selected angle. 
	let selectedangle = anglesliderZ.value * 1;
	console.log('selectedangle:',selectedangle);
	
	// Clear auto-rotate (on all axes). 
	clearAutoRotate();
	// Clear transformations on other axes. 
	clearAngleX();
	clearAngleY();

	// Display selected angle. 
	angledisplayZ.textContent = selectedangle;
	// Apply selected angle transformation to each element. 
	for(let element of allelements) {
		element.style.transform = `rotateZ(${selectedangle}deg)`;
	}
}
// Toggle auto-rotate of elements (on z-axis). 
function toggleAutoRotateZ() {

	// Check if auto-rotate already on. 
	let alreadyOn = container.classList.contains('z');
	console.log('alreadyOn:',alreadyOn);

	// Turn off auto-rotate if already on. 
	if(alreadyOn) container.classList.remove('z');
	// Turn on auto-rotate if not already on. 
	else {
		container.classList.remove('x');
		container.classList.remove('y');
		container.classList.add('z');

		// Clear manual angles (on all axes). 
		clearManualAngles();
	}
}


// Clear manual perspectives. 
function clearPerspectives() {
	outerperspective['slider'].value = 50;
	innerperspective['slider'].value = 50;
}

// Clear manual angle transformations (on all axes). 
function clearManualAngles() {

	// Clear manual angle on x axis. 
	clearAngleX();

	// Clear manual angle on y axis. 
	clearAngleY();

	// Clear manual angle on z axis. 
	clearAngleZ();
}

// Clear auto-rotate of elements (on all axes). 
function clearAutoRotate() {
	container.classList.remove('x');
	container.classList.remove('y');
	container.classList.remove('z');
}
