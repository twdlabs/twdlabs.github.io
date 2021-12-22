

// Set sidebar navigation state.
let setupSidenav = true;



/*********************************************************/



$(document).ready(function() {

	// Setup sidebar navigation items on page.
	if(setupSidenav) {

		// Setup sidebar navigation items on page.
		setupSidenavItems(projectData);
		// if(currentlyOnPublicPage)
		// 	setupSidenavItems(projectPublicData);
		// else
		// 	setupSidenavItems(projectOrigData);

	}

});



/*********************************************************/



// Setup sidebar navigation items on page.
function setupSidenavItems(navData) {
	// console.log('navData',navData);

	// Initialize result of sidebar navigation items.
	let result = '';

	// Add dashboard items.

	// Add settings items.

	// Get number of item groups.
	let numGroups = navData.length;
	// console.log('numGroups', numGroups);
	// Prepare sidenav groups.
	for(h in navData)
	// for(let h=0 ; h<numGroups ; h++)
	{

		// Get group of items.
		let itemgroup = navData[h];
		// console.log();
		// console.log('itemgroup', itemgroup);

		//
		if(!itemgroup.includeInNavigation) continue;

		// Open section container.
		result += '<!-- section -->';
		result += '<div class="section">';

		// Get number of items in group.
		let numItems = itemgroup.items.length;
		// console.log('numItems', numItems);
		// Add sidebar navigation items.
		for(let i=0 ; i<numItems ; i++) {
			// Get item.
			let item = itemgroup.items[i];
			// console.log('item',item);

			// Compile nav item from data.
			result += '<!-- navBtn -->';
			if(item.link) {
				result += '<a class="navBtn" href="../';
				result += (item.directory) ? (item.directory+'/') : '';
				result += 'index.html">';
			}
			else {
				result += '<a class="navBtn" href="javascript:void(0)" onclick="'+item.onclick+'; closeSideNav();">';
			}
					result += '<!-- icon -->';
					result += '<div class="icon">';
						result += `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">${item.innersvg}</svg>`;
					result += '</div>';
					result += '<!-- /icon -->';
					result += ' ';
					result += '<!-- caption -->';
					result += `<span class="caption">${item.name}</span>`;
					result += '<!-- /caption -->';
			result += '</a>';
			result += '<!-- /navBtn -->';
		}

		// Close section container.
		result += '</div>';
		result += '<!-- /section -->';

		// Add section divider
		result += '<hr class="full"/>';
	}

	// Show the resulting sidebar navigation items.
	$('div#container div#mySidenav div.container').html(result);
	// console.log(result);
}
