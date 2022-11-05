

// Get destination. 
const destination = document.querySelector('ul.userlist');

// Initialize result. 
let result = '';

// Go thru each list item. 
for(let listitem of userlistdata) {
	result += `
	<!-- useritem -->
	<li class="useritem">

		<!-- icon -->
		<svg class="icon user" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
			${listitem.innersvg}
		</svg>
		<!-- /icon -->

		<!-- caption -->
		<span class="caption">${listitem.caption}</span>
		<!-- /caption -->

	</li>
	<!-- /useritem -->`;
}

// Add result to destination. 
destination.innerHTML = result;

