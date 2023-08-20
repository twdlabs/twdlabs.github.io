


// Get destination for list of posts. 
const bloglistdestination = document.querySelector('div#container section.resultposts main.grid ul.postlist');

// Get destination for list of filters. 
const filterlistdestination = document.querySelector('div#container section.blogtable main.grid ul.filterlist');


/*****/


// Load blog posts. 
loadBlogPosts();

// Load blog post filters. 
loadBlogPostFilters();


/*****/


// Load list of blog posts. 
function loadBlogPosts() {

	// Initialize result. 
	let result = '';
	
	// Go thru all posts. 
	for(let post of blogDataList) {
		
		// Add layout for given post. 
		result += createBlogPostLayout(post);
	}
	
	// Add result to page. 
	bloglistdestination.innerHTML = result;
}

// Load blog post filters. 
function loadBlogPostFilters() {

	// Initialize list of filter criterion items. 
	let result = '';

	// Accumulate filter items. 
	for(let filter of postFilterList) {
	
		// Open filter. 
		result += `
		<!-- filter -->
		<li class="filter">

		<!-- head -->
		<h3 class="head">${filter.title}</h3>
		<!-- /head -->`;
	
		// Open criteria list. 
		result += `
		<!-- criterialist -->
		<ul class="criterialist">`;

		// Accumulate filter criterion items. 
		for(let criterion of filter.criteria) {
	
			// Add individual filter criterion. 
			if(criterion) result += `
			<!-- criterion -->
			<li class="criterion">${criterion}</li>
			<!-- /criterion -->`;
		}
	
		// Close criteria list. 
		result += `
		</ul>
		<!-- /criterialist -->`;
	
		// Close filter. 
		result += `
		</li>
		<!-- /filter -->`;
	}

	// Add filter criterion items to page. 
	filterlistdestination.innerHTML = result;

	// Get filter criterion items. 
	let filtercriterionitems = document.querySelectorAll('div#container section.blogtable main.grid ul.filterlist li.filter ul.criterialist li.criterion');

	// Go thru filter criterion items. 
	for(let item of filtercriterionitems) {
		
		// Activate filter criterion item. 
		item.addEventListener('click',toggleFilterCriterion);
	}

	/****/

	// Toggle selected filter criterion for list of posts. 
	function toggleFilterCriterion() {
	
		// TODO: Toggle element highlight for selected filter tag. 
	
		// TODO: Toggle post results that match selected filter tag. 
	}
}
