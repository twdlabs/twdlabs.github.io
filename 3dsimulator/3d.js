


// Get container. 
const container = document.querySelector('div#container');
const main = document.querySelector('div#container main.main');

// Get all elements. 
let allelements;


// Get controls for outer perspective. 
const outerperspective = {
	slider:document.querySelector('div#container main.controller div.panel div.manual input.perspective.outer'),
	display:document.querySelector('div#container main.controller div.panel div.manual label.label span.perspective.outer'),
}
// console.log('outerperspective:',outerperspective);

// Get controls for angle of outer x-axis. 

// Get controls for angle of outer y-axis. 

// Get controls for angle of outer z-axis. 


// Get controls for inner perspective. 
const innerperspective = {
	slider:document.querySelector('div#container main.controller div.panel div.manual input.perspective.inner'),
	display:document.querySelector('div#container main.controller div.panel div.manual label.label span.perspective.inner'),
}
// console.log('innerperspective:',innerperspective);

// Get controls for angle of inner x-axis. 
const angleX = {
	slider:document.querySelector('div#container main.controller div.manual input.angle#anglesliderX'),
	display:document.querySelector('div#container main.controller div.manual label.label span.value#angleX'),
};
// console.log('angleX:',angleX);

// Get controls for angle of inner y-axis. 
const angleY = {
	slider:document.querySelector('div#container main.controller div.manual input.angle#anglesliderY'),
	display:document.querySelector('div#container main.controller div.manual label.label span.value#angleY'),
};
// console.log('angleY:',angleY);

// Get controls for angle of inner z-axis. 
const angleZ = {
	slider:document.querySelector('div#container main.controller div.manual input.angle#anglesliderZ'),
	display:document.querySelector('div#container main.controller div.manual label.label span.value#angleZ'),
};
// console.log('angleZ:',angleZ);


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
	angleX['slider'].value = 0;
	angleY['slider'].value = 0;
	angleZ['slider'].value = 0;

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
	angleX['slider'].value = 0;
	angleX['display'].textContent = 0;
}
// Change angle of elements (on x-axis). 
function updateAngleX() {

	// Get selected angle. 
	let selectedangle = angleX['slider'].value * 1;
	console.log('selectedangle:',selectedangle);
	
	// Clear auto-rotate (on all axes). 
	clearAutoRotate();
	// Clear transformations on other axes. 
	clearAngleY();
	clearAngleZ();

	// Display selected angle. 
	angleX['display'].textContent = selectedangle;
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
	angleY['slider'].value = 0;
	angleY['display'].textContent = 0;
}
// Change angle of elements (on y-axis). 
function updateAngleY() {

	// Get selected angle. 
	let selectedangle = angleY['slider'].value * 1;
	console.log('selectedangle:',selectedangle);
	
	// Clear auto-rotate (on all axes). 
	clearAutoRotate();
	// Clear transformations on other axes. 
	clearAngleX();
	clearAngleZ();

	// Display selected angle. 
	angleY['display'].textContent = selectedangle;
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
	angleZ['slider'].value = 0;
	angleZ['display'].textContent = 0;
}
// Change angle of elements (on z-axis). 
function updateAngleZ() {

	// Get selected angle. 
	let selectedangle = angleZ['slider'].value * 1;
	console.log('selectedangle:',selectedangle);
	
	// Clear auto-rotate (on all axes). 
	clearAutoRotate();
	// Clear transformations on other axes. 
	clearAngleX();
	clearAngleY();

	// Display selected angle. 
	angleZ['display'].textContent = selectedangle;
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
