


// Get tag list slider. 
const slider = document.querySelector('div#container main.main div.slider');
// Get tag list slider bin. 
const tagbox = document.querySelector('div#container main.main div.slider ul.taglist');
// Get tag list items. 
const tagitems = document.querySelectorAll('div#container main.main div.slider ul.taglist li.tagitem');

// Get slider edges. 
const leftedge = document.querySelector('div#container main.main div.edge.left');
const rightedge = document.querySelector('div#container main.main div.edge.right');
// Get slide buttons. 
const leftslidebtn = document.querySelector('div#container main.main div.edge.left div.slidebtn');
const rightslidebtn = document.querySelector('div#container main.main div.edge.right div.slidebtn');


/*****/


// Populate slider with tags. 
populateSliderTags();

// Create tag slider. 
const ts = new TagSlider(slider,tagbox,tagitems,leftedge,rightedge,leftslidebtn,rightslidebtn);


/*****/


// Populate slider with tags. 
function populateSliderTags() {

	// Initialize result. .
	let result = '';

	// Add tag item to result. 
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

	// Add result to page. 
	tagbox.innerHTML = result;
}
