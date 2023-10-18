


// Get navigation sidebar. 
const headsidebar = document.querySelector('div#container header.navbar div.bin div.sidebar');
// console.log(headsidebar);
// Get list destinations for header navigation. 
const headnavlistdestinationA = document.querySelector('div#container header.navbar div.bin div.sidebar div.navmenu.a ul.navlist');
const headnavlistdestinationB = document.querySelector('div#container header.navbar div.bin div.sidebar div.navmenu.b ul.navlist');

// Get destination for matrix of group links in footer. 
const grouplinksmatrixdestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix.groups');
console.log('grouplinksmatrixdestination:',grouplinksmatrixdestination);
// Get destination for matrix of project links in footer. 
const projectlinksmatrixdestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix.projects');
console.log('projectlinksmatrixdestination:',projectlinksmatrixdestination);


/*****/


// Load navigation links in header. 
loadNavLinks();

// Load matrix of project links in footer. 
loadSiteMap();

// Activate navigation sidebar. 
activateSidebar();


/*****/


// Create navigation item. 
function createNavLink(url,caption,icontag,newwindowmode,relativeurl) {

	// Compile layout for navigation item. 
	return `
	<!-- navitem -->
	<li class="navitem">
	
		<!-- navlink -->
		<a class="navlink" href="${ relativeurl ? getRelativeUrl(url) : url }" ${ newwindowmode ? 'target="_blank"' : '' }>

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

// Load navigation links in header. 
function loadNavLinks() {

	// Add page links to social. 
	headnavlistdestinationA.innerHTML = createLinkList(navLinkData.groupitemsidlist,true,true);

	// Add social links to social. 
	headnavlistdestinationB.innerHTML = createLinkList(socialLinkData.groupitemsidlist,true,false);

	/****/

	// Create layout for list of navigation links. 
	function createLinkList(linklist,newwindowmode,relativeurl) {

		// Initialize list of items. 
		let list = '';

		// Accumulate list of items. 
		for(link of linklist) {

			// Get url for link. 
			let url = link.linkurl;

			// Get caption for link. 
			let caption = link.linkname;

			// Get icon tag for link. 
			let icontag = link.icontag;

			// Compile navigation item. 
			list += createNavLink(url,caption,icontag,newwindowmode,relativeurl);
		}

		// Return list of items. 
		return list;
	}
}

// Load matrix of project links in footer. 
function loadSiteMap() {

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
					${ projectgroup ? createList(projectgroup.groupitemsidlist) : '' }
				</ul>
				<!-- /navlist -->`;
			}
			
			// Return result. 
			return result;
	
			/***/
	
			// Create layout for list of items. 
			function createList(itemidlist) {
				// console.log('Project group id list:',itemidlist);
	
				// Initialize layout for project list. 
				let projectgrouplayout = '';
	
				// Accumulate layout for project list. 
				for(let itemid of itemidlist) {
	
					// Get data item for current project. 
					let project = getItemById(itemid);
	
					// Get url for current project. 
					let url = `${urlprefix}${itemid}`;
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
					projectgrouplayout += createNavLink(url,caption,icontag,true,true);
				}
	
				// Return layout for project list. 
				return projectgrouplayout;
			}
		}
	}
}

// Activate navigation sidebar. 
function activateSidebar() {

	// Get all navigation togglers. 
	let allnavtogglers = document.querySelectorAll('.navtoggler');
	console.log('All nav togglers:',allnavtogglers);

	// Activate each navigation toggler. 
	for(let navtoggler of allnavtogglers) {
		navtoggler.addEventListener('click',toggleSidebar);
	}

	/****/

	// Toggle state of navigation sidebar. 
	function toggleSidebar() {
	
		// Check if sidebar already open. 
		let alreadyopen = headsidebar.classList.contains('active');
	
		// Close sidebar if already open. 
		if(alreadyopen) {
			headsidebar.classList.remove('active');
			document.body.classList.remove('freeze');
			document.documentElement.classList.remove('freeze');
		}
	
		// Open sidebar if not already open. 
		else {
			headsidebar.classList.add('active');
			document.body.classList.add('freeze');
			document.documentElement.classList.add('freeze');
		}
	}
}
