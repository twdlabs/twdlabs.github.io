


// Get destination for blocks. 
let blockdestination = document.querySelector('div#container section.blocks div.grid ul.blocklist');


/*****/


// Load blocks. 
loadBlocks();


/*****/


// Load blocks. 
function loadBlocks() {

	// Initialuze result. 
	let result = '';
	
	// Go thru data for each block item. 
	for(let block of blockData) {

		// 
		result += `
		<!-- blockitem -->
		<li class="blockitem">

			<!-- icon -->
			<svg class="icon ${ block.icontag }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				${ iconData[block.icontag] }
			</svg>
			<!-- /icon -->

			<!-- blockhead -->
			<h1 class="blockhead">${ block.header }</h1>
			<!-- /blockhead -->

			<!-- blockdescription -->
			<p class="blockdescription">${ block.description }</p>
			<!-- /blockdescription -->
			
		</li>
		<!-- /blockitem -->`;
	}

	// Add result to page destination. 
	blockdestination.innerHTML = result
}
