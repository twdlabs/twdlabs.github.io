


// Get desktop destination. 
const desktopDestination = document.querySelector('div#container section.desktop div.grid');

// Define group categories. 
// const leadingLetters = ['0-9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
// const leadingLetters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
const leadingLetters = [
	['A'],['B'],['C'],['D','E'],['F','G'],['H','I','J','K'],['L','M'],['N','O'],['P','Q','R'],['S'],['T'],
	['U','V','W','X','Y','Z'],
	['0','1','2','3','4','5','6','7','8','9'],
];


/*****/


// Load desktop items. 
loadDesktop();


/*****/


// Load desktop items. 
function loadDesktop() {
	// console.log(projectNames);

	// Get groups of project names by category. 
	let projectNameGroups = getNameGroups(projectNames);
	// console.log(projectNameGroups);

	// Initialize result. 
	let result = '';
	
	// Add project group to result. 
	for(let i in projectNameGroups) {
		// console.log(group);

		// Add layout for given project group. 
		result += createGroupLayout(i);
	}
	
	// Add result to page. 
	desktopDestination.insertAdjacentHTML('beforeend',result);

	// Activate group headers. 
	activateGroupHeaders();

	/****/

	// Group project names into categories. 
	function getNameGroups(nameList) {

		// Initialize result. 
		let result = [ ];
		for(let i in leadingLetters) result.push( [] );

		// Go thru all names in list. 
		for(let name of nameList) {

			// Get category index of current name. 
			let i = 1 * getCategoryIndex(name);
			// console.log('Category index:',i);

			// Add to result. 
			if(i>=0) result[i].push(name);
			else console.warn('Category index out of bounds:',i);
		}

		// Return result. 
		return result;

		/***/

		// Get category index for given name. 
		function getCategoryIndex(name) {

			// Get leading letter of given name. 
			let letter = `${name}`.substring(0,1).toUpperCase();

			// Go thru all potential leading letters. 
			for(let i in leadingLetters) {

				// Return current index if matching letter found. 
				if( leadingLetters[i].includes(letter) ) return i;
			}

			// Return null index if not found. 
			return -1;
		}
	}

	// Create layout for project group. 
	function createGroupLayout(index) {

		// Get group. 
		let group = projectNameGroups[index];

		// Skip group if empty. 
		if(!group.length) return '';

		// Get group name. 
		let groupname = leadingLetters[index].join(' ');
	
		// Return result. 
		return `
		<!-- group -->
		<div class="group ${ false ? 'active' : '' }">

			<!-- ghead -->
			<div class="ghead">
				
				<!-- icon -->
				<svg class="icon plus open" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
				</svg>
				<!-- /icon -->
				
				<!-- icon -->
				<svg class="icon minus close" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
				</svg>
				<!-- /icon -->

				<!-- head -->
				<h2 class="head">${ groupname }</h2>
				<!-- /head -->
				
				<!-- icon -->
				<svg class="icon xyz" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				</svg>
				<!-- /icon -->

			</div>
			<!-- /ghead -->

			<!-- gbody -->
			<div class="gbody">

				<!-- bin -->
				<div class="bin">
					${ getProjectLinks(group) }
				</div>
				<!-- /bin -->

			</div>
			<!-- /gbody -->

		</div>
		<!-- /group -->`;

		/***/
	
		// Get project links for group body. 
		function getProjectLinks(group) {
	
			// Initialize result. 
			let result = '';
		
			// Add project link to result. 
			for(let foldername of group) {
				result += createLinkItem(foldername)
			}
	
			// Return result. 
			return result;
		}

		// Create link item. 
		function createLinkItem(foldername) {
			// Return result. 
			return `
			<!-- item -->
			<a class="item" href="../${foldername}" target="_blank">
			
				<!-- icon -->
				<svg class="icon app" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
				</svg>
				<!-- /icon -->
			
				<!-- caption -->
				<span class="caption">${foldername}</span>
				<!-- /caption -->
				
			</a>
			<!-- /item -->`;
		}
	}

	// Activate group headers. 
	function activateGroupHeaders() {

		// Get all group headers. 
		let allGroupHeaders = document.querySelectorAll('div#container section.desktop div.grid div.group div.ghead');
	
		// Go thru all group headers. 
		for(let groupheader of allGroupHeaders) {
			// Toggle selected group upon header click. 
			groupheader.addEventListener('click',toggleGroup);
		}
	
		/***/

		// Toggle selected group. 
		function toggleGroup(event) {
			console.log(event);
	
			// Get selected group. 
			let selectedGroup = event.currentTarget.parentElement;
			let selectedGroupBody = selectedGroup.querySelector('div.gbody');

			// 
			let groupIsActive = selectedGroup.classList.contains('active');
			
			// Toggle selected group. 
			// selectedGroup.classList.toggle('active');
			if(groupIsActive) {

				selectedGroupBody.style.maxHeight = '';
				selectedGroup.classList.remove('active');
			}
			else {

				selectedGroupBody.style.maxHeight = `${selectedGroupBody.scrollHeight}px`;
				selectedGroup.classList.add('active');
			}
		}
	}
}
