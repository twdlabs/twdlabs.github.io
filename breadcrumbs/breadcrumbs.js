


let navlinks = document.querySelectorAll('a.navlink');
for(let link of navlinks) link.addEventListener('click', clickLink);

// Handle link click. 
function clickLink(event) {

	// Get caption of clicked link. 
	let clickedLinkCaption = event.currentTarget.innerText;

	// Get hierarchical order of pages. 
	let result = getBreadcrumbs();

	// Display hierarchical order of pages. 
	let syllabus = document.getElementById('syllabus');
	syllabus.innerHTML = result;

	/*****/

	// Get hierarchical order of pages. 
	function getBreadcrumbs() {

		// Create list of ancestor names. 
		let ancestors = [];
		let currentItem = event.currentTarget.parentElement;
		while( isValidItem(currentItem) ) {

			// Get name and url of current item. 
			let navlink = currentItem.children[0];
			let name = navlink.innerText;
			let url = navlink.href;

			// Save name at beginning of list. 
			ancestors.unshift({
				name:name,
				url:url,
			});

			// Move to next potential ancestor. 
			currentItem = getAncestor(currentItem);
		}
		console.log('Breadcrumbs:', ancestors);

		// Create string of names. 
		let breadcrumbs = '<a class="navlink" href="javascript:void(0)">Home</a>';
		for(let item of ancestors) {
			// Add connecting arrow with item name. 
			breadcrumbs += ' / '+`<a class="navlink" href="${item.url}">${item.name}</a>`;
		}
		// console.log('Breadcrumbs:', breadcrumbs);

		return breadcrumbs;

		/*****/

		// Get parent item. 
		function getAncestor(item) {
			return item.parentElement.parentElement;
		}

		// Check for valid item. 
		function isValidItem(item) {
			return item.classList.contains('navitem');
		}

	}
}

