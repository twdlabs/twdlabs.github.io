


// Get destination for list of posts. 
const bloglistdestination = document.querySelector('div#container section.resultposts main.grid ul.postlist');

// Get destination for list of filters. 
const filterlistdestination = document.querySelector('div#container section.blogtable main.grid ul.filterlist');


/*****/


// Define post filters and criteria. 
const postFilters = [
	{
		title:'X Authors',
		criteria:[
			'Ace Ventura',
			'Bill Diamond',
			'Christine Brophy',
			'David Doe',
			'Eli Jah',
			'Fred Flinstone',
			'George Doe',
			'Hilary Doe',
			'Ian Robertson',
		],
	},
	{
		title:'Y Authors',
		criteria:[
			'Jane Doe',
			'Jay Jenkins',
			'Jenny Joe',
			'Jill Jackson',
			'Jim Doe',
			'Joe Doe',
			'John Luke Smith',
			'Kate Croix',
			'Leah Lloyd',
			'Mike Myers',
		],
	},
	{
		title:'Z Authors',
		criteria:[
			'Nina Nash',
			'Oscar DeLaHoya',
			'Peter Pan',
			'Quinten Doe',
			'Rachel Roy',
			'Steve Stephens',
			'Tim Toole',
			'Tori Doe',
			'Ursula Doe',
			'Victor Victorian',
			'Wendy Will',
			'Xavier Toven',
			'Yolanda Yokes',
		],
	},
];
// Define post filters and criteria. 
// postFilters = {
// 	author:[
		
// 	],
// };

// Load blog posts. 
loadBlogPosts();

// Load blog post filters. 
// loadBlogPostFilters();


/*****/


// Load blog post filters. 
function loadBlogPostFilters() {

	// Initialize list of filter criterion items. 
	let result = '';

	// TODO: Accumulate filter criterion items. 
	for(let filter of postFilters) {
	
		// 
		result += `
		<!-- filter -->
		<li class="filter">

			<!-- head -->
			<h3 class="head">${filter.title}</h3>
			<!-- /head -->

			<!-- criterialist -->
			<ul class="criterialist">`;

		// TODO: Accumulate filter criterion items. 
		for(let criterion of filter.criteria) {
	
			// 
			result += `
				<!-- criterion -->
				<li class="criterion">${criterion}</li>
				<!-- /criterion -->`;
		}
	
		// 
		result += `
			</ul>
			<!-- /criterialist -->

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

	// TODO: Toggle selected filter criterion for list of posts. 
	function toggleFilterCriterion() {
	
		// 
	}
}

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
