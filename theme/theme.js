

// Get main page container. 
let container = document.getElementById('container');

// Get color selector buttons. 
let colorbtns = document.querySelectorAll('div#colorpicker label.colorbtn input.rb');
console.log('colorbtns',colorbtns);

// Get all color class names. 
const colorList = [...colorbtns].map( (b)=>(b.value) );
console.log('colorList',colorList);

// Add click handler to color selector buttons. 
for(let btn of colorbtns) {
	// console.log('btn',btn);
	btn.addEventListener( 'click', chooseColor )
}

// TODO: Activate theme by current selections upon loading. 


/*****/


// Select theme. 
function chooseTheme(event) {
	
}

// Select color. 
function chooseColor(event) {

	// Get selected button. 
	let btn = event.currentTarget;

	// Get selected color value. 
	let clr = btn.value

	// Apply selected color theme. 
	for(c of colorList) {
		container.classList.remove(c);
	}
	container.classList.add(clr);
}

// Open sidebar. 
function openSidebar() {
	document.getElementById('bar').classList.add('active');
}

// Close sidebar. 
function closeSidebar() {
	document.getElementById('bar').classList.remove('active');
}
