


// Get body section. 
const bodysection = document.querySelector('div#container section.blog div.grid div.body');
// console.log('Body section:',bodysection);

// Get posts section. 
const postssection = document.querySelector('div#container section.blog div.grid div.body div.posts');
// console.log('Posts section:',postssection);

// Get posts section. 
// postssection = featuredsection['block'] || archivesection['block'] || categorysection['block'] || collectionsection['block'];
// console.log('Posts section:',postssection);


/*****/


// Define id of current layout style. 
let currentlayoutstyleid = -1;

// Define layout styles. 
const layoutsizestyles = [
	{
		body:'',
		posts:'sm',
	},
	{
		body:'',
		posts:'md',
	},
	{
		body:'split',
		posts:'lg',
	},
];


/*****/


// Toggle to next layout style. 
function toggleLayoutStyle() {
	console.log('Current layout style id (old):',currentlayoutstyleid);

	// Increment id of layout style. 
	currentlayoutstyleid++;

	// Ensure style id within valid range. 
	if( currentlayoutstyleid >= layoutsizestyles.length ) currentlayoutstyleid = 0;
	console.log('Current layout style id (new):',currentlayoutstyleid);

	// 
	setLayoutSizeStyleById(currentlayoutstyleid)
}

// Set size/style of blog layout. 
function setLayoutSizeStyle(event) {

	// Get selected toggle button. 
	let selectedtogglebtn = event.currentTarget;
	console.log(selectedtogglebtn);

	// Get id of selected style. 
	let selectedstyleid = selectedtogglebtn.getAttribute('data-styleid') * 1;

	// Set size/style of blog layout with selected id. 
	setLayoutSizeStyleById(selectedstyleid);
}

// Set size/style of blog layout with given id. 
function setLayoutSizeStyleById(styleid) {
	console.log('Style id:',styleid);
	console.log('Posts section:',postssection);

	// Disregard invalid style id. 
	if( isNaN(styleid) ) {
		console.warn('Invalid style id provided.');
		return;
	}

	// Disregard if no posts section. 
	if(!postssection) {
		console.warn('Invalid posts section selected.');
		return;
	}

	// Go thru each layout style. 
	for(let index in layoutsizestyles) {

		// Get style id of current body layout. 
		let bodystyle = layoutsizestyles[index]['body'];
		// Get style id of current post layout. 
		let postsstyle = layoutsizestyles[index]['posts'];

		// Turn on selected style. 
		if(index==styleid) {
			// Apply style to posts section. 
			postssection.classList.add(postsstyle);
			console.log('posts style id:',postsstyle);
			// Apply style to body section (if valid). 
			if(bodystyle && tagfilterpane['block']) bodysection.classList.add(bodystyle);
			console.log('body style id:',bodystyle);
		}

		// Turn off unselected styles. 
		else {
			// Remove style from posts section. 
			postssection.classList.remove(postsstyle);
			// Remove style from body section (if valid). 
			if(bodystyle && tagfilterpane['block']) bodysection.classList.remove(bodystyle);
		}
	}
}

// Toggle section like accordion. 
function toggleLikeAccordion(section,sectionbin) {

	// Check if section already folded. 
	let sectionfolded = section.classList.contains('folded');
	// console.log('Section folded:',sectionfolded);

	// Get full height of section bin. 
	let fullheight = sectionbin.scrollHeight;
	// console.log('Full height:',fullheight);

	// Open if already folded. 
	if(sectionfolded) {
		section.classList.remove('folded');
		sectionbin.style.maxHeight = `${fullheight}px`;
	}

	// Close if not already folded. 
	else {
		section.classList.add('folded');
		sectionbin.style.maxHeight = 0;
	}
}
