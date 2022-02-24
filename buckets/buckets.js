

// Define section names. 
const sections = ['bank','taxes','invest','insurance'];

// Get all quadrant links. 
let quadlinks = document.querySelectorAll('nav.quads div.quadrant a.link')
for(let link of quadlinks) {
	link.addEventListener('click',selectArticle);
}


/*****/


// Select article. 
function selectArticle(event) {

	// Get selected name. 
	let nizame = event.currentTarget.getAttribute('data-val')

	// Get main container. 
	let main = document.querySelector('div#container main.main');

	// Go thru all section names. 
	for(let name of sections) {
		// Remove section name. 
		main.classList.remove(name);
	}

	// Add selected name. 
	main.classList.add(nizame);
}
