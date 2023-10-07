


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
	let t = 'icontag';
	// Get key for name. 
	let n = 'header';
	// Get key for description. 
	let d = 'description';

	// Add block set to page destination. 
	methodblocksdestination.innerHTML = createBlockSet(methodData, t,n,d);
}

// Load blocks for project categories. 
function loadCategoryBlockSet() {
	if(!categoryblocksdestination) return;

	// Get key for icon tag. 
	let t = 'groupicontag';
	// Get key for name. 
	let n = 'groupname';
	// Get key for description. 
	let d = 'groupdescription';
	// Get key for id. 
	let idkey = 'groupid';

	// Get url prefix for blocks. 
	let urlprefix = './category/?gid=';

	// Add block set to page destination. 
	categoryblocksdestination.innerHTML = createBlockSet(projectGroupData, t,n,d, idkey,urlprefix,true);
}

// Load blocks for project meta-categories. 
function loadMetaCategoryBlockSet() {
	if(!metacategoryblocksdestination) return;

	// Get key for icon tag. 
	let t = 'groupicontag';
	// Get key for name. 
	let n = 'groupname';
	// Get key for description. 
	let d = 'groupdescription';
	// Get key for id. 
	let idkey = 'groupid';

	// Get url prefix for blocks. 
	let urlprefix = './metacategory/?gid=';

	// Add block set to page destination. 
	metacategoryblocksdestination.innerHTML = createBlockSet(projectMetaGroupData, t,n,d, idkey,urlprefix,true);
}

// Create layout for set of block items. 
function createBlockSet(datasource, t,n,d, idtag,urlprefix,openLinksInNewTab) {

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

		// Set whether or not to open link in new tab. 
		// let openLinksInNewTab = true;

		// Get link url. 
		let linkurl = (urlprefix && id) ? getRelativeUrl(urlprefix + id) : 'javascript:void(0)';
		// console.log('Link url:',linkurl);
	
		// Compile layout for block item. 
		return `
		<!-- blockitem -->
		<li class="blockitem">
	
			<!-- blocklink -->
			<a class="blocklink" href="${linkurl}" ${ openLinksInNewTab ? 'target="_blank"' : '' }>
	
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
