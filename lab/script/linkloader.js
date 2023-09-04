


// Get destination for head navigation. 
const headNavDestination = document.querySelector('div#container nav.navbar div.bin div.navmenu');
const headNavListLDestination = document.querySelector('div#container nav.navbar div.bin div.navmenu ul.navlist.l');
const headNavListRDestination = document.querySelector('div#container nav.navbar div.bin div.navmenu ul.navlist.r');
// console.log(headNavDestination);

// Get destination for foot matrix. 
const footMatrixDestination = document.querySelector('div#container footer.footer div.grid');
// console.log(footMatrixDestination);


/*****/


// Add links to head navigation. 
loadHeadNavLinks();

// Add links to footer. 
loadFooterNavLinks();


/*****/


// Add links to head navigation. 
function loadHeadNavLinks() {

	// Add result to page. 
	// headNavDestination.innerHTML = result;

	// Add list of links to page. 
	headNavListLDestination.innerHTML = createListOfLinks( navLinkData.grouplist, false);

	// Add list of links to page. 
	headNavListRDestination.innerHTML = createListOfLinks( socialLinkData.grouplist, true);

	/****/

	// Create layout for list of links. 
	function createListOfLinks(linklist, useicons) {

		// Initialize list of items. 
		let list = '';

		// Accumulate list of items. 
		for(link of linklist) {

			// Get link url. 
			let url = link.linkurl;

			// Get link caption. 
			let caption = useicons ? createIcon(link.icontag) : link.linkname;

			// Compile navigation item. 
			list += createNavItem(url,caption,false);
		}

		// Return list of items. 
		return list;

		/****/
	
		// Create link icon. 
		function createIcon(icontag) {
			
			// Compile link icon. 
			return `
			<svg class="icon ${icontag}" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				${ iconData[icontag] }
			</svg>`;
		}
	}
}

// Add links to footer. 
function loadFooterNavLinks() {

	// Initialize result. 
	let result = '';
	// Initialize total number of footer links. 
	// let totalNumFootLinks = 0;

	// Accumulate list boxes. 
	// for(let i in projectGroupData) {
	for(let i in projectLinkMatrix) {

		// Get set of link groups. 
		// let linkgroupset = projectGroupData[i];
		let linkgroupset = projectLinkMatrix[i].map( getLinkGroupById );
		// console.log('linkgroupset:',linkgroupset);
	
		// Add list box. 
		// result += createListBox(linkgroupset);
		result += `
		<!-- listbox -->
		<div class="listbox box${i}">

			${ createBoxOfLinkGroups(linkgroupset) }

		</div>
		<!-- /listbox -->`;
	}

	// Add result to page. 
	footMatrixDestination.insertAdjacentHTML('beforeend',result);
	// console.log('Total number of footer links:',totalNumFootLinks);

	/****/

	// Create column of link groups. 
	function createBoxOfLinkGroups(linkgroupset) {
		// console.log('linkgroupset:',linkgroupset);

		// Initialize result. 
		let result = '';

		// Go thru each link group. 
		for(let linkgroup of linkgroupset) {

			// Proceed if link group exists. 
			if(linkgroup) {
				result += `
				<!-- head -->
				<h2 class="head">${ linkgroup.groupname }</h2>
				<!-- /head -->
	
				<!-- navlist -->
				<ul class="navlist">
	
					${ createListOfLinks(linkgroup.grouplist) }
	
				</ul>
				<!-- /navlist -->`;
			}
		}
		
		// Return result. 
		return result;

		/***/

		// Create layout for list of links. 
		function createListOfLinks(linklist) {

			// Initialize list of items. 
			let list = '';

			// Accumulate list of items. 
			for(link of linklist) {

				// Increment total number of footer links. 
				// totalNumFootLinks++;

				// Get link url. 
				let url = link.linkurl;

				// Get link caption. 
				let caption = link.linkname;

				// Compile navigation item. 
				list += createNavItem(url,caption,true);
			}

			// Return list of items. 
			return list;
		}
	}
}

// Create navigation item. 
function createNavItem(url,caption,newwindow) {

	// Compile navigation item. 
	return `
	<!-- navitem -->
	<li class="navitem">

		<!-- navlink -->
		<a class="navlink" href="${ url }" ${ newwindow ? 'target="_blank"' : '' }>${ caption }</a>
		<!-- /navlink -->

	</li>
	<!-- /navitem -->`;
}
