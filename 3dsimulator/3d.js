


// Get container. 
const container = document.querySelector('div#container');
const main = document.querySelector('div#container main.main');

// Get all elements. 
let allelements;


// Get controls for outer domain. 
const outercontrols = {

	// Get controls for angle of outer x-axis. 
	x:{
		slider:document.querySelector('div#container main.controller div.manual input#outerangleXslider'),
		display:document.querySelector('div#container main.controller div.manual label.label span.value#outerangleX'),
	},

	// Get controls for angle of outer y-axis. 
	y:{
		slider:document.querySelector('div#container main.controller div.manual input#outerangleYslider'),
		display:document.querySelector('div#container main.controller div.manual label.label span.value#outerangleY'),
	},

	// Get controls for angle of outer z-axis. 
	z:{
		slider:document.querySelector('div#container main.controller div.manual input#outerangleZslider'),
		display:document.querySelector('div#container main.controller div.manual label.label span.value#outerangleZ'),
	},

	// Get controls for perspective of outer domain. 
	perspective:{
		slider:document.querySelector('div#container main.controller div.panel div.manual input.perspective.outer'),
		display:document.querySelector('div#container main.controller div.panel div.manual label.label span.perspective.outer'),
	},
};
// console.log('outercontrols:',outercontrols);


// Get controls for inner domain. 
const innercontrols = {

	// Get controls for angle of inner x-axis. 
	x:{
		slider:document.querySelector('div#container main.controller div.manual input#innerangleXslider'),
		display:document.querySelector('div#container main.controller div.manual label.label span.value#innerangleX'),
	},

	// Get controls for angle of inner y-axis. 
	y:{
		slider:document.querySelector('div#container main.controller div.manual input#innerangleYslider'),
		display:document.querySelector('div#container main.controller div.manual label.label span.value#innerangleY'),
	},

	// Get controls for angle of inner z-axis. 
	z:{
		slider:document.querySelector('div#container main.controller div.manual input#innerangleZslider'),
		display:document.querySelector('div#container main.controller div.manual label.label span.value#innerangleZ'),
	},

	// Get controls for perspective of inner domain. 
	perspective:{
		slider:document.querySelector('div#container main.controller div.panel div.manual input.perspective.inner'),
		display:document.querySelector('div#container main.controller div.panel div.manual label.label span.perspective.inner'),
	},
};
// console.log('innercontrols:',innercontrols);

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
	innercontrols['x']['slider'].value = 0;
	innercontrols['y']['slider'].value = 0;
	innercontrols['z']['slider'].value = 0;

	// Clear manual angle transformations (on all axes). 
	clearManualInnerAngles();

	// Clear manual perspectives. 
	clearPerspectives();
}


// Change outer 3d perspective. 
function updateOuterPerspective() {
	console.log('updateOuterPerspective');

	// Get selected perspective. 
	let selectedperspective = outercontrols['perspective']['slider'].value * 1;
	console.log('selectedperspective:',selectedperspective);

	// Display selected angle. 
	outercontrols['perspective']['display'].textContent = selectedperspective;
	// Apply selected perspective. 
	container.style.perspective = `${selectedperspective}rem`;
}

// Change inner 3d perspective. 
function updateInnerPerspective() {
	console.log('updateInnerPerspective');

	// Get selected perspective. 
	let selectedperspective = innercontrols['perspective']['slider'].value * 1;
	console.log('selectedperspective:',selectedperspective);

	// Display selected angle. 
	innercontrols['perspective']['display'].textContent = selectedperspective;
	// Apply selected perspective. 
	main.style.perspective = `${selectedperspective}rem`;
}


// Clear angle on inner x-axis. 
function clearInnerAngleX() {
	innercontrols['x']['slider'].value = 0;
	innercontrols['x']['display'].textContent = 0;
}
// Change angle of elements (on inner x-axis). 
function updateInnerAngleX() {

	// Get selected angle. 
	let selectedangle = innercontrols['x']['slider'].value * 1;
	console.log('selectedangle:',selectedangle);
	
	// Clear auto-rotate (on all axes). 
	clearAutoRotate();
	// Clear transformations on other axes. 
	clearInnerAngleY();
	clearInnerAngleZ();

	// Display selected angle. 
	innercontrols['x']['display'].textContent = selectedangle;
	// Apply selected angle transformation to each element. 
	for(let element of allelements) {
		element.style.transform = `rotateX(${selectedangle}deg)`;
	}
}
// Toggle auto-rotate of elements (on inner x-axis). 
function toggleAutoRotateInnerAngleX() {

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
		clearManualInnerAngles();
	}
}


// Clear angle on inner y-axis. 
function clearInnerAngleY() {
	innercontrols['y']['slider'].value = 0;
	innercontrols['y']['display'].textContent = 0;
}
// Change angle of elements (on inner y-axis). 
function updateInnerAngleY() {

	// Get selected angle. 
	let selectedangle = innercontrols['y']['slider'].value * 1;
	console.log('selectedangle:',selectedangle);
	
	// Clear auto-rotate (on all axes). 
	clearAutoRotate();
	// Clear transformations on other axes. 
	clearInnerAngleX();
	clearInnerAngleZ();

	// Display selected angle. 
	innercontrols['y']['display'].textContent = selectedangle;
	// Apply selected angle transformation to each element. 
	for(let element of allelements) {
		element.style.transform = `rotateY(${selectedangle}deg)`;
	}
}
// Toggle auto-rotate of elements (on inner y-axis). 
function toggleAutoRotateInnerAngleY() {

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
		clearManualInnerAngles();
	}
}


// Clear angle on inner z-axis. 
function clearInnerAngleZ() {
	innercontrols['z']['slider'].value = 0;
	innercontrols['z']['display'].textContent = 0;
}
// Change angle of elements (on inner z-axis). 
function updateInnerAngleZ() {

	// Get selected angle. 
	let selectedangle = innercontrols['z']['slider'].value * 1;
	console.log('selectedangle:',selectedangle);
	
	// Clear auto-rotate (on all axes). 
	clearAutoRotate();
	// Clear transformations on other axes. 
	clearInnerAngleX();
	clearInnerAngleY();

	// Display selected angle. 
	innercontrols['z']['display'].textContent = selectedangle;
	// Apply selected angle transformation to each element. 
	for(let element of allelements) {
		element.style.transform = `rotateZ(${selectedangle}deg)`;
	}
}
// Toggle auto-rotate of elements (on inner z-axis). 
function toggleAutoRotateInnerAngleZ() {

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
		clearManualInnerAngles();
	}
}


// Clear manual perspectives. 
function clearPerspectives() {
	outercontrols['perspective']['slider'].value = 50;
	innercontrols['perspective']['slider'].value = 50;
}

// Clear manual angle transformations (on all axes). 
function clearManualInnerAngles() {

	// Clear manual angle on x axis. 
	clearInnerAngleX();

	// Clear manual angle on y axis. 
	clearInnerAngleY();

	// Clear manual angle on z axis. 
	clearInnerAngleZ();
}

// Clear auto-rotate of elements (on all axes). 
function clearAutoRotate() {
	container.classList.remove('x');
	container.classList.remove('y');
	container.classList.remove('z');
}
