


// Get body section. 
const bodysection = document.querySelector('div#container section.blog div.grid div.body');
// console.log('Body section:',bodysection);

// Get posts section. 
const postssection = document.querySelector('div#container section.blog div.grid div.body div.posts');
// console.log('Posts section:',postssection);

// Get posts section. 
// postssection = featured.block || archive.block || category.block || collection.block;
// console.log('Posts section:',postssection);


/*****/


// Define layout styles. 
const layoutstyle = [
	{
		body:'',
		posts:'small',
	},
	{
		body:'',
		posts:'large',
	},
	{
		body:'split',
		posts:'listed',
	},
];


/*****/


// Set style of blog layout. 
function setLayoutStyle(togglebtn) {
	
	// Get selected style index. 
	let styleindex = togglebtn.getAttribute('data-styleindex') * 1;

	// Toggle style of posts by index. 
	setLayoutStyleById(styleindex);
}

// Set style of blog layout by index. 
function setLayoutStyleById(styleindex) {
	console.log('Style index:',styleindex);
	// Disregard if no valid style index. 
	if( isNaN(styleindex) ) {
		console.warn('Invalid style index provided:',styleindex);
		return;
	}

	// console.log('Posts section:',postssection);
	// Disregard if no posts section. 
	if(!postssection) {
		console.warn('Invalid posts section selected',postssection);
		return;
	}

	// Go thru each layout style. 
	for(let index in layoutstyle) {

		// Get current body layout style id. 
		let bodyid = layoutstyle[index].body;
		// Get current post layout style id. 
		let postsid = layoutstyle[index].posts;
	
		// Turn on selected style. 
		if(index==styleindex) {
			// Apply style to posts section. 
			postssection.classList.add(postsid);
			// Apply style to body section (if valid). 
			if(bodyid && filterpanel.box) bodysection.classList.add(bodyid);
		}
		
		// Turn off non-selected style. 
		else {
			// Remove style from posts section. 
			postssection.classList.remove(postsid);
			// Remove style from body section (if valid). 
			if(bodyid && filterpanel.box) bodysection.classList.remove(bodyid);
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
