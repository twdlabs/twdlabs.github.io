


// Activate choice links. 
activateLinks();

// Select initial choice. 
document.getElementById('choiceA').click();


/*****/


// Activate choice links. 
function activateLinks() {

	// Get all choice links. 
	let allLinks = document.getElementsByClassName('choice');
	
	// Go thru all choice links. 
	for(let link of allLinks) {
		// Activate choice link. 
		link.addEventListener('click',selectChoice);
	}
}

// Submit choice. 
function selectChoice(event) {

	// Get selected link. 
	let selectedLink = event.currentTarget;
	let value = selectedLink.children[0].value;
	let nav = document.querySelector('nav.nav');
	let main = document.querySelector('main.main');
	nav.classList.remove('a','b','c');
	nav.classList.add(value);
	main.classList.remove('a','b','c');
	main.classList.add(value);

	// Get all choice links. 
	let allLinks = document.getElementsByClassName('choice');

	// Get index of selected link. 
	let selectedIndex = getSelectedIndex();

	// Apply transformation to switch. 
	if(selectedIndex>-1) {
		let switich = document.querySelector('div.switch');
		switich.style.transform = `translate(${100*selectedIndex}%)`;
	}

	/*****/

	// Get index of selected link. 
	function getSelectedIndex() {
		let result = -1;
	
		// Get index of selected link. 
		for(let index in allLinks) {
	
			// Get link. 
			let link = allLinks[index];
	
			// Check for match. 
			if(selectedLink==link) {
				result = index;
				break;
			}
		}
	}
}
