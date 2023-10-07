



// Get navigation menu. 
const headnavmenu = document.querySelector('div#container nav.navbar div.bin div.navmenu');
// Get list destinations for header navigation. 
const headnavlistdestinationL = document.querySelector('div#container nav.navbar div.bin div.navmenu ul.navlist.l');
const headnavlistdestinationR = document.querySelector('div#container nav.navbar div.bin div.navmenu ul.navlist.r');
// console.log(headnavmenu);

// Get matrix destination for footer navigation. 
const linkmatrixdestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix');
// console.log(linkmatrixdestination);


/*****/


/*****/


// Add navigation links to header. 
loadNavLinks();

// Add matrix of project links to footer. 
loadProjectGroupMatrix();


/*****/


// Create navigation item. 
function createNavLink(url,caption,icontag,newwindowmode) {

	// Compile layout for navigation item. 
	return `
	<!-- navitem -->
	<li class="navitem">
	
		<!-- navlink -->
		<a class="navlink" href="${ getRelativeUrl(url) }" ${ newwindowmode ? 'target="_blank"' : '' }>

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

		// Set state of new window mode. 
		let newwindowmode = true;

		// Accumulate list of items. 
		for(link of linklist) {

			// Get url for link. 
			let url = link.linkurl;

			// Get caption for link. 
			let caption = link.linkname;

			// Get icon tag for link. 
			let icontag = link.icontag;

			// Compile navigation item. 
			list += createNavLink(url,caption,icontag,newwindowmode);
		}

		// Return list of items. 
		return list;
	}
}

// Add matrix of project links to footer. 
function loadProjectGroupMatrix() {

	// Initialize matrix layout. 
	let matrixlayout = '';

	// Initialize total number of project links in matrix. 
	// let totalMatrixLinks = 0;

	// Add grouped projects to matrix layout. 
	matrixlayout += createGroupedProjects();

	// Add matrix layout to page. 
	linkmatrixdestination.innerHTML = matrixlayout;
	// console.log('Total number of matrix project links:',totalMatrixLinks);

	// // Accumulate list boxes. 
	// for(let i in projectGroupData) {
	// 	// Get project group. 
	// 	let projectgroup = projectGroupData[i];
	// }

	/****/

	// Create layout for set of project lists. 
	function createProjectListSet(projectgroupslist) {
		// console.log('Project group set:',projectgroupslist);

		// Initialize result. 
		let result = '';

		// Go thru each project group in set. 
		for(let projectgroup of projectgroupslist) {

			// // Proceed if project group exists. 
			// if(projectgroup) {
			// }

			// Add header for current project group. 
			result += `
			<!-- head -->
			<h2 class="head">${ projectgroup ? projectgroup.groupname : '' }</h2>
			<!-- /head -->`;

			// Add list for current project group. 
			result += `
			<!-- navlist -->
			<ul class="navlist">
				${ projectgroup ? createProjectList(projectgroup.grouplist) : '' }
			</ul>
			<!-- /navlist -->`;
		}
		
		// Return result. 
		return result;

		/***/

		// Create layout for list of projects. 
		function createProjectList(projectgroupidlist) {
			// console.log('Project group id list:',projectgroupidlist);

			// Set window target for project links. 
			// Set state of new window mode. 
			let newwindowmode = true;

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
				projectgrouplayout += createNavLink(url,caption,icontag,newwindowmode);
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

			// Get project group set. 
			let set = projectGroupMatrixData[i];

			// Get list of ids for project groups. 
			let projectgroupidslist = set.setlist;
			console.log('Project group ids:',projectgroupidslist);
	
			// Get list of project groups. 
			let projectgroupslist = projectgroupidslist.map( getProjectGroupById );
			console.log('Project groups:',projectgroupslist);
		
			// Add list box to result layout. 
			result += `
			<!-- listset -->
			<div class="listset ${ set.setid }">
				${ createProjectListSet(projectgroupslist) }
			</div>
			<!-- /listset -->`;
		}

		// Return result layout. 
		return result;
	}
}

// Toggle navigation menu. 
function toggleNavMenu() {

	// Toggle state of navigation menu. 
	headnavmenu.classList.toggle('active');
}
