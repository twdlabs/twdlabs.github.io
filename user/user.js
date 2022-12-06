

// Get navlist
const navlist = document.querySelector('div#container main.user nav.menu ul.navlist');


// Initialize result. 
let result = '';

// Add list items to result. 
for(let userListItem of userListData) {
	result += createListItem(userListItem)
}

// Add result to page. 
navlist.innerHTML = result;


/*****/


// Create nav list item. 
function createListItem(item) {
	return `
	<!-- navitem -->
	<li class="navitem">

		<!-- navlink -->
		<a class="navlink" href="${item.url}">

			<!-- icon -->
			<svg class="icon user" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				${ iconData[item.icon] }
			</svg>
			<!-- /icon -->

			<!-- caption -->
			<span class="caption">${item.caption}</span>
			<!-- /caption -->
			
		</a>
		<!-- /navlink -->

	</li>
	<!-- /navitem -->`;
}