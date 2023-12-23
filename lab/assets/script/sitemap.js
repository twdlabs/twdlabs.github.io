


// Get destination for matrix of project links on site map page. 
const pagegroupmatrixdestination = document.querySelector('div#container section.sitemap div.grid div.linkmatrix.groups');
// console.log('pagegroupmatrixdestination:',pagegroupmatrixdestination);

// Get destination for matrix of project links on site map page. 
const pageprojectmatrixdestination = document.querySelector('div#container section.sitemap div.grid div.linkmatrix.projects');
// console.log('pageprojectmatrixdestination:',pageprojectmatrixdestination);

// Get destination for matrix of group links in footer. 
const footergroupmatrixdestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix.groups');
// console.log('footergroupmatrixdestination:',footergroupmatrixdestination);

// Get destination for matrix of project links in footer. 
const footerprojectmatrixdestination = document.querySelector('div#container footer.footer div.grid div.linkmatrix.projects');
// console.log('footerprojectmatrixdestination:',footerprojectmatrixdestination);


/*****/


// Load site map link matrices. 
loadSiteMap();


/*****/


// Load site map link matrices. 
function loadSiteMap() {

	// Create layout for group matrix. 
	console.log('\nMatrix: Project category by collection grouping');
	let groupmatrixlayout = createLinkMatrix( projectMetaGroupMatrixData, getProjectGroupById,getProjectMetaGroupById, './category/?cid=','groupname' );
	// console.log('groupmatrixlayout:',groupmatrixlayout);

	// Create layout for project matrix. 
	console.log('\nMatrix: Project items by category by arbitrary grouping');
	let projectmatrixlayoutA = createLinkMatrix( projectGroupMatrixData, getProjectById,getProjectGroupById, '../','projectname' );
	// console.log('projectmatrixlayoutA:',projectmatrixlayoutA);

	// Create layout for project matrix. 
	console.log('\nMatrix: Project items by category by collection grouping');
	let xyz = projectMetaGroupData.map( collection => { return { setid:'abc', setlist:collection.groupitemsidlist } } );
	console.log(xyz);
	let projectmatrixlayoutB = createLinkMatrix( xyz, getProjectById,getProjectGroupById, '../','projectname' );
	// console.log('projectmatrixlayoutB:',projectmatrixlayoutB);

	// Add layout for group matrix to footer. 
	if(pagegroupmatrixdestination) pagegroupmatrixdestination.innerHTML = groupmatrixlayout/*  + projectmatrixlayoutB */;
	// Add layout for project matrix to site map page. 
	if(pageprojectmatrixdestination) pageprojectmatrixdestination.innerHTML = projectmatrixlayoutA;

	// Add layout for group matrix to footer. 
	if(footergroupmatrixdestination) footergroupmatrixdestination.innerHTML = groupmatrixlayout;
	// Add layout for project matrix to footer. 
	if(footerprojectmatrixdestination) footerprojectmatrixdestination.innerHTML = projectmatrixlayoutA;

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
			// console.log('Project group set:',projectgroupslist);
		
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
				<h3 class="head">${ projectgroup ? projectgroup.groupname : '' }</h3>
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
	
					// Get data item for current item (i.e. group, project). 
					let item = getItemById(itemid);
					// if(!item) console.debug('\tItem absent from database:',itemid);
	
					// Get url for current item (i.e. group, project). 
					let url = `${urlprefix}${itemid}`;
					// console.log('\turl:',url);
		
					// Get caption for current item (i.e. group, project). 
					let caption = item ? item[namekey] : `⋅ ${itemid} ⋅`;
					// let caption = item ? item['groupname'] : itemid;
					// let caption = item ? item['projectname'] : itemid;
					// console.log('\tcaption:',caption);
		
					// Get icon tag for current item (i.e. group, project). 
					let icontag = item ? item['icontag'] : '';
					// console.log('\ticontag:',icontag);
	
					// Compile navigation link for current item. 
					projectgrouplayout += createNavLink(url,caption,icontag,true,true);
				}
	
				// Return layout for project list. 
				return projectgrouplayout;
			}
		}
	}
}
