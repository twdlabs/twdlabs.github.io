


// Get destination for list of posts. 
const bloglistdestination = document.querySelector('div#container section.resultposts main.grid ul.postlist');

// Get destination for list of filters. 
const filterlistdestination = document.querySelector('div#container section.blogtable main.grid ul.filterlist');


/*****/


// Load blog posts. 
loadBlogPosts();

// Load blog post filters. 
loadBlogPostFilters();

// Activate blog post filters. 
activateBlogPostFilters();

// Show blog post filters. 
console.log('Post filter list:',postFilterList);


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
	for(let index in postFilterList) {
	// for(let filter of postFilterList) {

		// Get filter item. 
		let filter = postFilterList[index];

		// Get filter name. 
		let filtername = (filter.title).toLowerCase()
	
		// Add filter item and criteria list. 
		result += `
		<!-- filter -->
		<li class="filter">

			<!-- head -->
			<h3 class="head">${ filter.title }</h3>
			<!-- /head -->

			<!-- criteriafilter -->
			<div class="criteriafilter">

				<!-- criteriafilterquery -->
				<input type="text" class="criteriafilterquery" id="${ filtername }filterquery" placeholder="Search ${ filtername }...">
				<!-- /criteriafilterquery -->

				<!-- searchlabel -->
				<label class="searchlabel" for="${ filtername }filterquery">

					<!-- icon -->
					<svg class="icon search" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
					</svg>
					<!-- /icon -->
					
				</label>
				<!-- /searchlabel -->

			</div>
			<!-- /criteriafilter -->
			
			<!-- criterialist -->
			<ul class="criterialist">${ createFilterCriteriaList(index,filter) }</ul>
			<!-- /criterialist -->
			
		</li>
		<!-- /filter -->`;
	}

	// Add filter criterion items to page. 
	filterlistdestination.innerHTML = result;

	/****/

	// Create list of filter criterion items. 
	function createFilterCriteriaList(filterindex,filter) {

		// Initialize result. 
		let result = '';

		// Accumulate filter criterion items. 
		for(let criterionindex in filter['criterionidlist']) {
		// for(let criterionid of filter['criterionidlist']) {

			// Get criterion id. 
			let criterionid = filter['criterionidlist'][criterionindex];
			// console.log(`(${filterindex},${criterionindex}):`,criterionid);

			// Get criterion title. 
			let criteriontitle = criterionid;
	
			// Add individual filter criterion. 
			if(criterionid) result += `
			<!-- criterion -->
			<li class="criterion" data-filterindex="${filterindex}" data-criterionindex="${criterionindex}">${criteriontitle}</li>
			<!-- /criterion -->`;
		}

		// Return result. 
		return result;
	}
}

// Activate blog post filters. 
function activateBlogPostFilters() {

	// Get filter criterion items. 
	let filtercriterionitems = document.querySelectorAll('div#container section.blogtable main.grid ul.filterlist li.filter ul.criterialist li.criterion');

	// Go thru filter criterion items. 
	for(let item of filtercriterionitems) {
		
		// Activate filter criterion item. 
		item.addEventListener('click',toggleFilterCriterion);
	}

	/****/

	// Toggle selected filter criterion for list of posts. 
	function toggleFilterCriterion(event) {
	
		// Get selected filter criterion item. 
		let selectedcriterion = event.currentTarget;
		// // Get selected filter item. 
		// let selectedfilter = selectedcriterion.parentElement.parentElement;
	
		// Get index of selected filter. 
		let selectedfilterindex = selectedcriterion.getAttribute('data-filterindex') * 1;
		// Get index of selected filter criterion. 
		let selectedcriterionindex = selectedcriterion.getAttribute('data-criterionindex') * 1;
	
		// Check if selected filter criterion already in active list. 
		let alreadyActiveTag = postFilterList[selectedfilterindex]['activecriterionindexlist'].includes(selectedcriterionindex);
		
		// Toggle selected filter criterion in active list. 
		console.log('Selected filter criterion:',`(${selectedfilterindex},${selectedcriterionindex})`,selectedcriterion);
		if(alreadyActiveTag) {
	
			// Get index of selected criterion in active list. 
			let selectedcriterionactiveindex = postFilterList[selectedfilterindex]['activecriterionindexlist'].indexOf(selectedcriterionindex);
	
			// Remove index of criterion from active list. 
			console.log( postFilterList[selectedfilterindex] );
			postFilterList[selectedfilterindex]['activecriterionindexlist'].splice(selectedcriterionactiveindex,1);
			console.log( postFilterList[selectedfilterindex] );
		}
		else {
	
			// Add index of criterion to active list. 
			console.log( postFilterList[selectedfilterindex],postFilterList );
			postFilterList[selectedfilterindex]['activecriterionindexlist'].push(selectedcriterionindex);
			console.log( postFilterList[selectedfilterindex],postFilterList );
		}
	
		// Refresh highlights for filter tag elements. 
		refreshFilterTagHighlights();
	
		// Refresh matching post results for active filter tags. 
		refreshMatchingPostResults();
	
		/***/
	
		// Refresh highlights for filter tag elements. 
		function refreshFilterTagHighlights() {
	
			// Go thru filter criterion items. 
			for(let item of filtercriterionitems) {
				
				// Check if criterion active. 
				let isCriterionActive = checkIfCriterionActive(item);

				// Set proper state for criterion item. 
				if(isCriterionActive) item.classList.add('active');
				else item.classList.remove('active');
			}
	
			/**/

			// Check if criterion active. 
			function checkIfCriterionActive(criterionitem) {

				// Get filter index. 
				let filterindex = criterionitem.getAttribute('data-filterindex') * 1;
				// Get criterion index. 
				let criterionindex = criterionitem.getAttribute('data-criterionindex') * 1;

				// Assume active if found in active list. 
				return postFilterList[filterindex]['activecriterionindexlist'].includes(criterionindex);
			}
		}
	
		// TODO: Refresh matching post results for active filter tags. 
		function refreshMatchingPostResults() {

			// Get all blog post items. 
			let allpostitems = document.querySelectorAll('div#container section.blogtable main.grid ul.postlist li.postcard');
			
			// Go thru blog post items. 
			for(let item of allpostitems) {

				// Check if post matches filter criteria. 
				let isMatchingPost = checkForMatch(item);

				// Set post to appropriate state. 
				if(isMatchingPost) item.classList.remove('x');
				else item.classList.add('x');
			}

			/**/

			// Check if post matches filter criteria. 
			function checkForMatch(item) {

				// Go thru each post filter category. 
				for(let filterindex in postFilterList) {

					// Get filter category. 
					let filtercategory = postFilterList[filterindex];
					// console.log('Filter category:',filtercategory);

					// Go thru each active criterion. 
					for(let criterionindex of filtercategory['activecriterionindexlist']) {
						// console.log('Criterion index:',criterionindex);
						
						// Get active criterion id (using criterion index). -
						let activecriterionid = filtercategory['criterionidlist'][criterionindex];
						console.log('Active criterion id:',activecriterionid);

						// 
					}
				}

				// Assume no match if none found. 
				return false;
			}
		}
	}
}
