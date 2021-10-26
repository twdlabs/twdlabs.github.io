

// Set sidebar navigation state. 
let setupSidenav = true;


$(document).ready(function() {
	// Setup sidebar navigation items on page. 
	if(setupSidenav) setupSidenavItems();
});


/*****/


// Setup sidebar navigation items on page. 
function setupSidenavItems() {
	console.log('desktopData',desktopData);

	// Initialize result of sidebar navigation items. 
	let result = '';

	// Get number of item groups. 
	let numGroups = desktopData.length;

	// Prepare sidenav groups. 
	for(let h=0 ; h<numGroups ; h++) {

		// Get group of items. 
		let itemgroup = desktopData[h];
		console.log();
		console.log('itemgroup',itemgroup);
		// Get number of items in group. 
		let numItems = itemgroup.items.length;
		console.log('numItems',numItems);
		
		// Open section container. 
		result += '<!-- section -->';
		result += '<div class="section">';

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
				result += '<a class="navBtn" href="javascript:void(0)" onclick="'+item.onclick+'">';
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
		result += '<hr class="full"/>';
	}

	// Show the resulting sidebar navigation items. 
	$('div#container div#mySidenav div.container').html(result);
	// console.log(result);
}

