



// Get navigation menu. 
const headnavmenu = document.querySelector('div#container nav.navbar div.bin div.navmenu');
// Get list destinations for header navigation. 
const headnavlistdestinationL = document.querySelector('div#container nav.navbar div.bin div.navmenu ul.navlist.l');
const headnavlistdestinationR = document.querySelector('div#container nav.navbar div.bin div.navmenu ul.navlist.r');
// console.log(headnavmenu);

// Get matrix destination for footer navigation. 
const footMatrixDestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix');
// console.log(footMatrixDestination);


/*****/


// Add navigation links to header. 
loadNavLinks();

// Add matrix of project links to footer. 
loadProjectGroupMatrix();


/*****/


// Add navigation links to header. 
function loadNavLinks() {

	// Add result to page. 
	// headnavmenu.innerHTML = result;

	// Add list of links to page. 
	headnavlistdestinationL.innerHTML = createLinkList(navLinkData.grouplist);

	// Add list of links to page. 
	headnavlistdestinationR.innerHTML = createLinkList(socialLinkData.grouplist);

	/****/

	// Create layout for list of navigation links. 
	function createLinkList(linklist) {

		// Initialize list of items. 
		let list = '';

		// Set target of links. 
		let newwindow = true;

		// Accumulate list of items. 
		for(link of linklist) {

			// Get url for link. 
			let url = link.linkurl;

			// Get caption for link. 
			let caption = link.linkname;

			// Get icon tag for link. 
			let icontag = link.icontag;

			// Compile navigation item. 
			list += createNavLink(url,caption,icontag,newwindow);
		}

		// Return list of items. 
		return list;
	}
}


// Add matrix of project links to footer. 
function loadProjectGroupMatrix() {

	// Initialize matrix layout. 
	let matrixlayout = '';
	let addExtras = true;

	// Initialize total number of project links in matrix. 
	// let totalMatrixLinks = 0;

	// Add grouped projects to matrix layout. 
	matrixlayout += createGroupedProjects();

	// Add orphan projects to matrix layout. 
	if(addExtras) matrixlayout += createOrphanProjects();

	// Add missing projects to matrix layout. 
	if(addExtras) matrixlayout += createMissingProjects();

	// Add matrix layout to page. 
	footMatrixDestination.innerHTML = matrixlayout;
	// footMatrixDestination.insertAdjacentHTML('beforeend',matrixlayout);
	// console.log('Total number of matrix project links:',totalMatrixLinks);

	// // Accumulate list boxes. 
	// for(let i in projectGroupData) {
	// 	// Get project group. 
	// 	let projectgroup = projectGroupData[i];
	// }

	/****/

	// Create layout for column of project groups. 
	function createProjectGroupSet(projectgroupset) {
		// console.log('projectgroupset:',projectgroupset);

		// Initialize result. 
		let result = '';

		// Go thru each project group in set. 
		for(let projectgroup of projectgroupset) {

			// // Proceed if project group exists. 
			// if(projectgroup) {
			// }

			// Add header for current project group. 
			result += `
			<!-- head -->
			<h2 class="head">${ projectgroup.groupname }</h2>
			<!-- /head -->`;

			// Add list for current project group. 
			result += `
			<!-- navlist -->
			<ul class="navlist">
				${ createProjectGroup(projectgroup.grouplist) }
			</ul>
			<!-- /navlist -->`;
		}
		
		// Return result. 
		return result;

		/***/

		// Create layout for group of projects. 
		function createProjectGroup(projectgroupidlist) {
			// console.log('Project group id list:',projectgroupidlist);

			// Set window target for project links. 
			let newwindow = true;

			// Initialize layout for project list. 
			let projectgrouplayout = '';

			// Accumulate layout for project list. 
			for(let projectid of projectgroupidlist) {

				// Get project. 
				let project = getProjectById(projectid);

				// Increment total number of project links in matrix. 
				// totalMatrixLinks++;

				// Get url for project. 
				let url = getRelativeUrl(`../${projectid}`);
				// console.log('\turl:',url);
	
				// Get caption for project. 
				let caption = project ? project.projectname : projectid;
				// console.log('\tcaption:',caption);
	
				// Get icon tag for project. 
				let icontag = project ? project.icontag : '';
				// console.log('\ticontag:',icontag);

				// Compile navigation item. 
				projectgrouplayout += createNavLink(url,caption,icontag,newwindow);
			}

			// Return layout for project list. 
			return projectgrouplayout;
		}
	}

	// Create box layout for grouped projects. 
	function createGroupedProjects() {

		// Initialize result. 
		let result = '';
	
		// Go thru each set of project groups. 
		for(let i in projectGroupMatrixData) {
	
			// Get set of project groups. 
			let projectgroupset = projectGroupMatrixData[i].map( getProjectGroupById );
			console.log('Project group set:',projectgroupset);
		
			// Add list box to result layout. 
			result += `
			<!-- listbox -->
			<div class="listbox b${i}">
				${ createProjectGroupSet(projectgroupset) }
			</div>
			<!-- /listbox -->`;
		}

		// Return result layout. 
		return result;
	}

	// Create box layout for missing projects. 
	function createMissingProjects() {

		// Get set of project groups. 
		let projectgroupset = [
			{
				groupname:'Missing Projects',
				grouplist:missingProjectIds,
			},
		];
		
		// Return result layout. 
		return `
		<!-- listbox -->
		<div class="listbox missing">
			${ createProjectGroupSet(projectgroupset) }
		</div>
		<!-- /listbox -->`;
	}

	// Create box layout for orphan projects. 
	function createOrphanProjects() {

		// Get set of project groups. 
		let projectgroupset = [
			{
				groupname:'Orphan Projects',
				grouplist:orphanProjectIds,
			},
		];
		
		// Return result layout. 
		return `
		<!-- listbox -->
		<div class="listbox orphans">
			${ createProjectGroupSet(projectgroupset) }
		</div>
		<!-- /listbox -->`;
	}
}


// Create navigation item. 
function createNavLink(url,caption,icontag,newwindow) {

	// Compile layout for navigation item. 
	return `
	<!-- navitem -->
	<li class="navitem">
	
		<!-- navlink -->
		<a class="navlink" href="${url}" ${ newwindow ? 'target="_blank"' : '' }>

			${ icontag ? createIcon(icontag) : '' }

			<!-- caption -->
			<span class="caption">${caption}</span>
			<!-- /caption -->
			
		</a>
		<!-- /navlink -->

	</li>
	<!-- /navitem -->`;

	/****/

	// Create layout for link icon. 
	function createIcon(icontag) {
		
		// Compile link icon. 
		return `
		<!-- icon -->
		<svg class="icon ${icontag}" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
			${ iconData[icontag] }
		</svg>
		<!-- /icon -->`;
	}
}

// Toggle navigation menu. 
function toggleNavMenu() {

	// Toggle state of navigation menu. 
	headnavmenu.classList.toggle('active');
}
