


// Get destination for matrix of group links in footer. 
const groupmatrixdestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix.groups');
// console.log('groupmatrixdestination:',groupmatrixdestination);

// Get destination for matrix of project links in footer. 
const projectmatrixdestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix.projects');
// console.log('projectmatrixdestination:',projectmatrixdestination);

// Get destination for matrix of project links in footer. 
const projectmatrixdestinationX = document.querySelector('div#container section.sitemap div.grid div.linkmatrix.projects');
// console.log('projectmatrixdestination:',projectmatrixdestination);


/*****/


// Load matrix of project links in footer. 
loadSiteMap();


/*****/


// Load matrix of project links in footer. 
function loadSiteMap() {

	// Create layout for group link matrix. 
	let groupmatrixlayout = createLinkMatrix(projectMetaGroupMatrixData,getProjectGroupById,getProjectMetaGroupById,'./category/?cid=','groupname');
	// console.log('groupmatrixlayout:',groupmatrixlayout);

	// Create layout for project link matrix. 
	let projectmatrixlayout = createLinkMatrix(projectGroupMatrixData,getProjectById,getProjectGroupById,'../','projectname');
	// console.log('projectmatrixlayout:',projectmatrixlayout);

	// Add layout for project link matrix. 
	if(projectmatrixdestinationX) projectmatrixdestinationX.innerHTML = projectmatrixlayout;

	// Add layout for group link matrix. 
	if(groupmatrixdestination) groupmatrixdestination.innerHTML = groupmatrixlayout;
	// Add layout for project link matrix. 
	// if(projectmatrixdestination) projectmatrixdestination.innerHTML = projectmatrixlayout;

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
