


// Get tag list slider. 
const tagslider = document.querySelector('div#container main.main div.slider');

// Get tag list slider bin. 
const tagsliderbox = document.querySelector('div#container main.main div.slider ul.taglist');

// Get tag list items. 
// const tagslideritems = document.querySelectorAll('div#container main.main div.slider ul.taglist li.tagitem');


/*****/


// Set motion preference. 
let prefersreducedmotion = false;
// prefersreducedmotion = true;


/*****/


// Populate slider with tag items. 
addTags();

// Set motion preference. 
setMotion();


/*****/


// Populate slider with tag items. 
function addTags() {

	// Initialize result. .
	let result = '';

	// Add tag items to result. 
	for(let tag of tagdata) {

		// Get tag caption. 
		let tagcaption = tag.caption;

		// 
		result += `
		<!-- tagitem -->
		<li class="tagitem ${ tag.selected ? 'active' : '' }">

			<!-- caption -->
			<span class="caption">${tagcaption}</span>
			<!-- /caption -->

		</li>
		<!-- /tagitem -->`;
	}

	// Add duplicate tag items to result. 
	if(!prefersreducedmotion) 
	for(let tag of tagdata) {

		// Get tag caption. 
		let tagcaption = tag.caption;

		// 
		result += `
		<!-- tagitem -->
		<li class="tagitem ${ tag.selected ? 'active' : '' }" aria-hidden="true">

			<!-- caption -->
			<span class="caption">${tagcaption}</span>
			<!-- /caption -->

		</li>
		<!-- /tagitem -->`;
	}

	// Add result to page. 
	tagsliderbox.innerHTML = result;
}

// Set motion preference. 
function setMotion() {

	// Remove motion. 
	if(prefersreducedmotion) tagslider.classList.remove('motion');

	// Add motion. 
	else tagslider.classList.add('motion');
}
