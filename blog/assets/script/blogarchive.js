


// Get destination for list of posts. 
const bloglistdestination = document.querySelector('div#container section.resultposts main.grid div.posts ul.postlist');

// Get destination for list of filters. 
const filterlistdestination = document.querySelector('div#container section.blogtable main.grid div.filters ul.filterlist');


/*****/


// Load blog posts. 
loadBlogPosts();

// Load blog post filters. 
loadBlogPostFilters();

// Activate blog post filters. 
activateBlogPostFilters();

// Show blog post filters. 
// console.log('Post filter list:',postFilterList);


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

		// Get filter category item. 
		let filtercategory = postFilterList[index];
		// Get filter category title. 
		let filtercategorytitle = filtercategory.filtertitle;
		// Get filter category label. 
		let filtercategorylabel = ( filtercategorytitle ).toLowerCase();
		// Get filter category filter query id. 
		let filtercategoryfilterqueryid = `${ filtercategorylabel }filterquery`;
	
		// Add filter item and criteria list. 
		result += `
		<!-- filter -->
		<li class="filter">

			<!-- head -->
			<h3 class="head">${ filtercategorytitle }</h3>
			<!-- /head -->

			<!-- criteriafilter -->
			<div class="criteriafilter">

				<!-- criteriafilterquery -->
				<input type="text" class="criteriafilterquery" id="${ filtercategoryfilterqueryid }" placeholder="Search ${ filtercategorylabel }...">
				<!-- /criteriafilterquery -->

				<!-- searchlabel -->
				<label class="searchlabel" for="${ filtercategoryfilterqueryid }">

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
			<ul class="criterialist">${ createFilterCriteriaList(index,filtercategory) }</ul>
			<!-- /criterialist -->
			
		</li>
		<!-- /filter -->`;
	}

	// Add filter criterion items to page. 
	filterlistdestination.innerHTML = result;

	/****/

	// Create list of filter criterion items. 
	function createFilterCriteriaList(filterindex,filtercategory) {
		// console.log('filtercategory:',filtercategory);

		// Initialize result. 
		let result = '';

		// TODO: Sort criterion items for given filter category (alphabetically by criterion title). 
		// filtercategory['criterialist'].sort();
		// filtercategory['criterialist'].sort(sortByCriterionId);
		// filtercategory['criterialist'].sort(sortByCriterionTitle);

		// Accumulate filter criterion items. 
		for(let criterionindex in filtercategory['criterialist']) {
		// for(let criterionid of filtercategory['criterialist']) {

			// Get criterion item. 
			let criterionitem = filtercategory['criterialist'][criterionindex];
			// console.log(`(${filterindex},${criterionindex}):`,criterionitem);

			// Get criterion id. 
			// let criterionid = criterionitem.criterionid;
			// console.log('criterionid:',criterionid);

			// Get criterion title. 
			let criteriontitle = criterionitem.criteriontitle;
			// console.log('criteriontitle:',criteriontitle);
	
			// Add individual filter criterion. 
			if(criterionitem) result += `
			<!-- criterion -->
			<li class="criterion" data-filterindex="${filterindex}" data-criterionindex="${criterionindex}">${criteriontitle}</li>
			<!-- /criterion -->`;
		}

		// Return result. 
		// console.log(result);
		return result;

		/***/

		// Sort by criterion id. 
		function sortByCriterionId(a,b) {
			console.log(a,b,a.criterionid - b.criterionid);
			return (a.criterionid - b.criterionid);
		}

		// Sort by criterion title. 
		function sortByCriterionTitle(a,b) {
			console.log(a,b,a.criteriontitle - b.criteriontitle);
			return (a.criteriontitle - b.criteriontitle);
		}
	}
}

// Activate blog post filters. 
function activateBlogPostFilters() {

	// Get filter criterion items. 
	let filtercriterionitems = document.querySelectorAll('div#container section.blogtable main.grid div.filters ul.filterlist li.filter ul.criterialist li.criterion');

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
		let alreadyActiveTag = postFilterList[selectedfilterindex]['criterionindexactivelist'].includes(selectedcriterionindex);
		
		// Toggle selected filter criterion in active list. 
		console.log('Selected filter criterion:',`(${selectedfilterindex},${selectedcriterionindex})`,selectedcriterion);
		if(alreadyActiveTag) {
	
			// Get index of selected criterion in active list. 
			let selectedcriterionactiveindex = postFilterList[selectedfilterindex]['criterionindexactivelist'].indexOf(selectedcriterionindex);
	
			// Remove index of criterion from active list. 
			console.log( postFilterList[selectedfilterindex] );
			postFilterList[selectedfilterindex]['criterionindexactivelist'].splice(selectedcriterionactiveindex,1);
			console.log( postFilterList[selectedfilterindex] );
		}
		else {
	
			// Add index of criterion to active list. 
			console.log( postFilterList[selectedfilterindex],postFilterList );
			postFilterList[selectedfilterindex]['criterionindexactivelist'].push(selectedcriterionindex);
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
				return postFilterList[filterindex]['criterionindexactivelist'].includes(criterionindex);
			}
		}
	
		// Refresh matching post results for active filter tags. 
		function refreshMatchingPostResults() {

			// Get all blog post items. 
			let allpostitems = document.querySelectorAll('div#container section.blogtable main.grid div.posts ul.postlist li.postcard');
			
			// Go thru blog post items. 
			for(let item of allpostitems) {

				// Check if post matches filter criteria. 
				let isMatchingPost = checkForMatchingPost(item);

				// Show matching post. 
				if(isMatchingPost) item.classList.remove('x');
				// Hide non-matching post. 
				else item.classList.add('x');
			}

			/**/

			// Check if given post matches any one filter criterion (for given post and filter criterion). 
			function checkForMatchingPost(postitem) {
				console.log('Checking for matching post:',postitem);

				// Go thru each post filter category. 
				for(let filterindex in postFilterList) {
					// Get filter category. 
					let filtercategory = postFilterList[filterindex];
					// console.log('Filter category:',filtercategory);

					// Go thru each active criterion. 
					for(let criterionindex of filtercategory['criterionindexactivelist']) {
						// console.log('Criterion index:',criterionindex);
						
						// Get active criterion item. -
						let activecriterionitem = filtercategory['criterialist'][criterionindex];
						console.log('\tActive criterion item:',activecriterionitem);
						
						// Get active criterion id. -
						let activecriterionid = activecriterionitem.criterionid;
						// console.log('\tActive criterion id:',activecriterionid);
						
						// TODO: Get property tag sequence for active criterion (or current filter). 
						let activecriteriontagsequence = activecriterionitem.filtertagsequence;
						console.log('\tActive criterion tag sequence:',activecriteriontagsequence);
						// console.log('\tAuthor id:',postitem.authorid);

						// Get post id. 
						let postid = postitem.getAttribute('data-postid');

						// TODO: Check if post item matches criterion. 
						let matchesOne = getPropertyValueByTagSequence( getPostById(postid) ,activecriteriontagsequence) == activecriterionid;
						// let matchesOne = postitem['authorid'] == activecriterionid;
						// let matchesOne = Math.random()<=Math.random();

						// End check if/when post item match found. 
						if(matchesOne) return true;

						// Get post by id. 
						// function getPostById(querypostid)
					}
				}

				// Assume no match if none found. 
				return false;
			}
		}
	}
}
