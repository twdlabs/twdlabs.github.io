


// Get destination for method blocks. 
const methodblocksdestination = document.querySelector('div#container section.blocks.methods div.grid ul.blocklist');


// Get destination for category blocks. 
const categoryblocksdestination = document.querySelector('div#container section.blocks.categories div.grid ul.blocklist');


/*****/


// Load blocks for development methods. 
loadMethodBlocks();

// Load blocks for project categories. 
loadCategoryBlocks();


/*****/


// Load blocks for development methods. 
function loadMethodBlocks() {

	// Initialize result. 
	let result = createBlockSet(methodData, 'icontag','header','description');

	// Add result to page destination. 
	methodblocksdestination.innerHTML = result;
}

// Load blocks for project categories. 
function loadCategoryBlocks() {

	// Initialize result. 
	let result = createBlockSet(projectGroupData, 'icontag','groupname','groupdescription', './category?gid=','groupid');

	// Add result to page destination. 
	categoryblocksdestination.innerHTML = result;
}

// Create layout for set of block items. 
function createBlockSet(datasource, t,n,d, urlprefix,idtag) {

	// Initialize result layout. 
	let result = '';
	
	// Go thru data for each block. 
	for(let block of datasource) {

		// Get icon tag. 
		let tag = block[t];

		// Get name. 
		let name = block[n];

		// Get description. 
		let description = block[d];

		// Get id of post. 
		let id = block[idtag];

		// Add layout for block item. 
		result += createBlockItem(tag,name,description,id);
	}

	// Return result layout. 
	return result;

	/****/

	// Create layout for block item. 
	function createBlockItem(icontag,name,description,id) {

		// Get link url. 
		let linkurl = (urlprefix&&id) ? (urlprefix+id) : ('javascript:void(0)');
		console.log('Link url:',linkurl);
	
		// Compile layout for block item. 
		return `
		<!-- blockitem -->
		<li class="blockitem">
	
			<!-- blocklink -->
			<a href="${linkurl}" class="blocklink">
	
				<!-- icon -->
				<svg class="icon ${ icontag }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					${ iconData[icontag] }
				</svg>
				<!-- /icon -->
	
				<!-- blockhead -->
				<h1 class="blockhead">${ name }</h1>
				<!-- /blockhead -->
	
				<!-- blockdescription -->
				<p class="blockdescription">${ description }</p>
				<!-- /blockdescription -->
	
			</a>
			<!-- /blocklink -->
			
		</li>
		<!-- /blockitem -->`;
	}
}
