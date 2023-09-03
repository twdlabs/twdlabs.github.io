


// Get destination for method blocks. 
let methodblocksdestination = document.querySelector('div#container section.blocks.methods div.grid ul.blocklist');


// Get destination for category blocks. 
let categoryblocksdestination = document.querySelector('div#container section.blocks.categories div.grid ul.blocklist');


/*****/


// Load method blocks. 
loadMethodBlocks();

// Load category blocks. 
loadCategoryBlocks();


/*****/


// Load method blocks. 
function loadMethodBlocks() {

	// Initialuze result. 
	let result = '';
	
	// Go thru data for each block item. 
	for(let block of blockData.methods) {

		// 
		result += `
		<!-- blockitem -->
		<li class="blockitem">

			<!-- blocklink -->
			<a href="javascript:void(0)" class="blocklink">

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

			</a>
			<!-- /blocklink -->
			
		</li>
		<!-- /blockitem -->`;
	}

	// Add result to page destination. 
	methodblocksdestination.innerHTML = result;
}

// Load category blocks. 
function loadCategoryBlocks() {

	// Initialuze result. 
	let result = '';
	
	// Go thru data for each block item. 
	// for(let block of blockData.categories) {
	for(let block of projectLinkData) {

		// 
		result += `
		<!-- blockitem -->
		<li class="blockitem">

			<!-- blocklink -->
			<a href="javascript:void(0)" class="blocklink">

				<!-- icon -->
				<svg class="icon ${ block.icontag }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					${ iconData[block.icontag] }
				</svg>
				<!-- /icon -->
	
				<!-- blockhead -->
				<h1 class="blockhead">${ block.groupname }</h1>
				<!-- /blockhead -->
	
				<!-- blockdescription -->
				<p class="blockdescription">${ block.groupdescription }</p>
				<!-- /blockdescription -->

			</a>
			<!-- /blocklink -->
			
		</li>
		<!-- /blockitem -->`;
	}

	// Add result to page destination. 
	categoryblocksdestination.innerHTML = result;
}
