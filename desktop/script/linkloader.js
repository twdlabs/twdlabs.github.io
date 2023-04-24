


// Get head navigation destination. 
const headnavDestination = document.querySelector('div#container nav.navbar div.bin div.navmenu');
// console.log(headnavDestination);

// Get footer destination. 
const footerDestination = document.querySelector('div#container footer.footer div.grid');
// console.log(footerDestination);


/*****/


// Add links to head navigation. 
loadHeadNavLinks();

// Add links to footer. 
loadFooterNavLinks();


/*****/


// Add links to head navigation. 
function loadHeadNavLinks() {

	// Initialize list of links. 
	let linklist;
	// Initialize result. 
	let result = '';

	// Get list of links. 
	linklist = navLinkData[0].grouplist;

	// Add list of links to result. 
	result += `
	<!-- navlist -->
	<ul class="navlist l">
		${ createListOfLinks(linklist,false) }
	</ul>
	<!-- /navlist -->`;

	// Get list of links. 
	linklist = socialLinkData[0].grouplist;

	// Add list of links to result. 
	result += `
	<!-- navlist -->
	<ul class="navlist m">
		${ createListOfLinks(linklist,true) }
	</ul>
	<!-- /navlist -->`;

	// Add result to page. 
	headnavDestination.innerHTML = result;

	/****/

	// Create list of links. 
	function createListOfLinks(linklist, useicon) {

		// Initialize list of items. 
		let list = '';

		// Accumulate list of items. 
		for(link of linklist) {

			// 
			list += `
			<!-- navitem -->
			<li class="navitem">

				<!-- navlink -->
				<a class="navlink" href="${ link.linkurl }">${ useicon ? createIcon(link.icontag) : link.linkname }</a>
				<!-- /navlink -->

			</li>
			<!-- /navitem -->`;
		}

		// Return list of items. 
		return list;

		/****/
	
		// Create link icon. 
		function createIcon(icontag) {
			return `
			<svg class="icon twitter" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				${ iconData[icontag] }
			</svg>`;
		}
	}
}


// Add links to footer. 
function loadFooterNavLinks() {

	// Initialize result. 
	let result = '';

	// Accumulate list boxes. 
	for(let linkgroupset of footerLinkData) {
	
		// Add list box. 
		result += createListBox(linkgroupset);

		// // Accumulate list boxes. 
		// for(let linkgroup of linkgroupset) {
	
		// 	// Add list box. 
		// 	result += createListBox(linkgroup);
		// }
	}

	// Add result to page. 
	footerDestination.insertAdjacentHTML('beforeend',result);

	/****/

	// Create list box. 
	function createListBox(groupset) {

		// 
		return `
		<!-- listbox -->
		<div class="listbox">

			${ createSetOfLinkLists(groupset) }

		</div>
		<!-- /listbox -->`;

		/***/
	
		// Create sets of link lists. 
		function createSetOfLinkLists(linklistset) {

			// Initialize result. 
			let result = '';

			// 
			for(let linklist of linklistset) {
				result += `
				<!-- head -->
				<h2 class="head">${ linklist.groupname }</h2>
				<!-- /head -->
	
				<!-- navlist -->
				<ul class="navlist">
	
					${ createLinkList(linklist.grouplist) }
	
				</ul>
				<!-- /navlist -->`;
			}
			
			// Return result. 
			return result;

			/**/
	
			// Create list of links. 
			function createLinkList(linklist) {
	
				// Initialize list of items. 
				let list = '';
	
				// Accumulate list of items. 
				for(link of linklist) {
	
					// 
					list += `
					<!-- navitem -->
					<li class="navitem">
		
						<!-- navlink -->
						<a class="navlink" href="${ link.linkurl }">${ link.linkname }</a>
						<!-- /navlink -->
		
					</li>
					<!-- /navitem -->`;
				}
	
				// Return list of items. 
				return list;
			}
		}
	}
}
