


// Get navigation sidebar. 
const headsidebar = document.querySelector('div#container nav.navbar div.bin div.sidebar');
// console.log(headsidebar);
// Get list destinations for header navigation. 
const headnavlistdestinationA = document.querySelector('div#container nav.navbar div.bin div.sidebar div.navmenu.a ul.navlist');
const headnavlistdestinationB = document.querySelector('div#container nav.navbar div.bin div.sidebar div.navmenu.b ul.navlist');

// Get destination for matrix of group links in footer. 
const grouplinksmatrixdestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix.groups');
console.log('grouplinksmatrixdestination:',grouplinksmatrixdestination);
// Get destination for matrix of project links in footer. 
const projectlinksmatrixdestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix.projects');
console.log('projectlinksmatrixdestination:',projectlinksmatrixdestination);


/*****/


// Add navigation links to header. 
loadNavLinks();

// Add matrix of project links to footer. 
loadLinkMatrix();


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
	// headsidebar.innerHTML = result;

	// Add list of links to page. 
	headnavlistdestinationA.innerHTML = createLinkList(navLinkData.groupidlist);

	// Add list of links to page. 
	headnavlistdestinationB.innerHTML = createLinkList(socialLinkData.groupidlist);

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
function loadLinkMatrix() {

	// Add layout for link matrix to page. 
	console.log('grouplinksmatrixdestination:',grouplinksmatrixdestination);
	if(grouplinksmatrixdestination) {
		let matrixlayout = createLinkMatrix(projectMetaGroupMatrixData,getProjectGroupById,getProjectMetaGroupById,'./category/?gid=','groupname');
		grouplinksmatrixdestination.innerHTML = matrixlayout;
	}

	// Add layout for link matrix to page. 
	console.log('projectlinksmatrixdestination:',projectlinksmatrixdestination);
	if(projectlinksmatrixdestination) {
		let matrixlayout = createLinkMatrix(projectGroupMatrixData,getProjectById,getProjectGroupById,'../','projectname');
		projectlinksmatrixdestination.innerHTML = matrixlayout;
	}

	/****/

	// Create box layout for grouped projects. 
	function createLinkMatrix(matrixData,getItemById,getMetaById,urlprefix,namekey) {

		// Initialize result. 
		let result = '';
	
		// Go thru each set of project groups. 
		for(let i in matrixData) {

			// Get project group set. 
			let set = matrixData[i];

			// Get list of ids for project groups. 
			let projectgroupidslist = set.setlist;
			console.log('Project group ids:',projectgroupidslist);
	
			// Get list of project groups. 
			let projectgroupslist = projectgroupidslist.map( getMetaById );
			console.log('Project groups:',projectgroupslist);
		
			// Add list box to result layout. 
			result += `
			<!-- listset -->
			<div class="listset ${ set.setid }">
				${ createSet(projectgroupslist) }
			</div>
			<!-- /listset -->`;
		}

		// Return result layout. 
		return result;

		/***/

		// Create layout for set of project lists. 
		function createSet(projectgroupslist) {
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
					${ projectgroup ? createList(projectgroup.groupidlist) : '' }
				</ul>
				<!-- /navlist -->`;
			}
			
			// Return result. 
			return result;
	
			/***/
	
			// Create layout for list of items. 
			function createList(itemidlist) {
				// console.log('Project group id list:',itemidlist);
	
				// Set window target for project links. 
				// Set state of new window mode. 
				let newwindowmode = true;
	
				// Initialize layout for project list. 
				let projectgrouplayout = '';
	
				// Accumulate layout for project list. 
				for(let itemid of itemidlist) {
	
					// Get data item for current project. 
					let project = getItemById(itemid);
	
					// Get url for current project. 
					let url = getRelativeUrl(`${urlprefix}${itemid}`);
					// let url = getRelativeUrl(`./category/?gid=${itemid}`);
					// let url = getRelativeUrl(`../${itemid}`);
					// console.log('\turl:',url);
		
					// Get caption for current project. 
					let caption = project ? project[namekey] : itemid;
					// let caption = project ? project['groupname'] : itemid;
					// let caption = project ? project['projectname'] : itemid;
					// console.log('\tcaption:',caption);
		
					// Get icon tag for current project. 
					let icontag = project ? project['icontag'] : '';
					// console.log('\ticontag:',icontag);
	
					// Compile navigation item. 
					projectgrouplayout += createNavLink(url,caption,icontag,newwindowmode);
				}
	
				// Return layout for project list. 
				return projectgrouplayout;
			}
		}
	}
}

// Toggle state of navigation sidebar. 
function toggleSidebar() {
	headsidebar.classList.toggle('active');
}
