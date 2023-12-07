


// Get destination for method blocks. 
const methodblocksdestination = document.querySelector('div#container section.blocks.methods div.grid ul.blocklist');

// Get destination for category blocks. 
const categoryblocksdestination = document.querySelector('div#container section.blocks.categories.all div.grid ul.blocklist');

// Get destination for meta-category blocks. 
const metacategoryblocksdestination = document.querySelector('div#container section.blocks.categories.meta div.grid ul.blocklist');


/*****/


// Load blocks for development methods. 
loadMethodBlockSet();

// Load blocks for project categories. 
loadCategoryBlockSet();

// Load blocks for project meta-categories. 
loadMetaCategoryBlockSet();


/*****/


// Load blocks for development methods. 
function loadMethodBlockSet() {
	if(!methodblocksdestination) return;

	// Get key for icon tag. 
	let tk = 'icontag';
	// Get key for name. 
	let nk = 'header';
	// Get key for description. 
	let dk = 'description';

	// Add block set to page destination. 
	methodblocksdestination.innerHTML = createBlockSet(methodData, tk,nk,dk);
}

// Load blocks for project categories. 
function loadCategoryBlockSet() {
	if(!categoryblocksdestination) return;

	// Get key for icon tag. 
	let tk = 'groupicontag';
	// Get key for name. 
	let nk = 'groupname';
	// Get key for description. 
	let dk = 'groupdescription';
	// Get key for id. 
	let idkey = 'groupid';

	// Get url prefix for blocks. 
	let urlprefix = './category/?cid=';

	// Add block set to page destination. 
	categoryblocksdestination.innerHTML = createBlockSet(projectGroupData, tk,nk,dk, true,idkey,urlprefix);
}

// Load blocks for project meta-categories. 
function loadMetaCategoryBlockSet() {
	if(!metacategoryblocksdestination) return;

	// Get key for icon tag. 
	let tk = 'groupicontag';
	// Get key for name. 
	let nk = 'groupname';
	// Get key for description. 
	let dk = 'groupdescription';
	// Get key for id. 
	let idkey = 'groupid';

	// Get url prefix for blocks. 
	let urlprefix = './collection/?cid=';

	// Add block set to page destination. 
	metacategoryblocksdestination.innerHTML = createBlockSet(projectMetaGroupData, tk,nk,dk, true,idkey,urlprefix);
}

// Create layout for set of block items. 
function createBlockSet(datasource, tagkey,namekey,descriptionkey, newwindowmode,idkey,urlprefix) {

	// Initialize result layout. 
	let result = '';
	
	// Go thru data for each block. 
	for(let block of datasource) {

		// Skip ghost blocks. 
		if(block.ghostblock) continue;

		// Get icon tag for current block. 
		let tag = block[tagkey];
		// Get name for current block. 
		let name = block[namekey];
		// Get description for current block. 
		let description = block[descriptionkey];
		// Get id of current block. 
		let id = block[idkey];

		// Add layout for block item. 
		result += createBlockItem(tag,name,description,id,block.wideblock);
	}

	// Return result layout. 
	return result;

	/****/

	// Create layout for block item. 
	function createBlockItem(icontag,name,description,urlid,onwideblock) {

		// Get link url. 
		let uselink = (urlprefix && urlid);
		let linkurl = uselink ? getRelativeUrl(urlprefix + urlid) : 'javascript:void(0)';
		// console.log('Link url:',linkurl);
	
		// Compile layout for block item. 
		return `
		<!-- blockitem -->
		<li class="blockitem ${ onwideblock ? 'wide' : '' }">
	
			<!-- blocklink -->
			<a class="blocklink" href="${linkurl}" ${ (uselink && newwindowmode) ? 'target="_blank"' : '' }>
	
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
