

// Get all accordion sections. 
const allSections = document.querySelectorAll('div#container main.accordion div.thing');

// Get all accordion togglers. 
const togglers = document.querySelectorAll('div#container main.accordion div.thing h2.head');


/*****/


// Enable togglers to activate/de-activate their accordion sections. 
for(let toggler of togglers) {
	toggler.addEventListener('click',toggleThing);
}


/*****/


// Toggle accordion section. 
function toggleThing(event) {
	console.log('Toggle thing');

	// Get selected accordion section. 
	let selectedSection = event.currentTarget.parentElement;

	// Check if selected section already on. 
	let alreadyOn = checkSection(selectedSection);

	// Toggle selected section. 
	if(alreadyOn) {
		// Close selected section. 
		setSection(selectedSection,false);
	}
	else {
		// Close other sections. 
		closeAllSections();
		// Open selected section. 
		setSection(selectedSection,true);
	}

	/*****/

	// Check accordion section. 
	function checkSection(section) {
		return section.classList.contains('active');
	}

	// Open accordion section. 
	function setSection(section,turnOn) {
		let textcopy = section.querySelector('p.textcopy');
		if(turnOn) {
			section.classList.add('active');
			textcopy.style.height = `${textcopy.scrollHeight}px`;
		}
		else {
			section.classList.remove('active');
			textcopy.style.height = '0';
		}
	}

	// Close all accordion sections. 
	function closeAllSections() {
		for(let section of allSections) {
			let textcopy = section.querySelector('p.textcopy');
			textcopy.style.height = '0';
			section.classList.remove('active');
		}
	}
}
