


// Get destination for matrices on site map page. 
let pagematrices = {
	// Get destination for matrix of category links by collection. 
	collectioncategoriesdestination: document.querySelector('div#container section.sitemap div.grid div.linkmatrix.cc'),
	// Get destination for matrix of project links by category, and by collection. 
	collectioncategoryprojectsdestination: document.querySelector('div#container section.sitemap div.grid div.linkmatrix.ccp'),
	// Get destination for matrix of project links by category. 
	categoryprojectsdestination: document.querySelector('div#container section.sitemap div.grid div.linkmatrix.cp'),
	// xyz:xyz,
}
// console.log('Page matrices:',pagematrices);



// Get destination for matrices in footer. 
let footermatrices = {
	// Get destination for matrix of category links by collection. 
	collectioncategoriesdestination: document.querySelector('div#container footer.footer div.grid div.linkmatrix.cc'),
	// Get destination for matrix of project links by category. 
	categoryprojectsdestination: document.querySelector('div#container footer.footer div.grid div.linkmatrix.cp'),
	// xyz:xyz,
}
// console.log('Footer matrices:',footermatrices);



/*****/


// Load site map link matrices. 
loadSiteMaps();


/*****/


// Load site map link matrices. 
function loadSiteMaps() {

	// Create basis for last matrix. 
	let collectionCategoryMatrixData = projectCollectionData.map( collection => { return { setid:collection.groupid, setlist:collection.groupitemsidlist } } );

	// Create set of matrix layouts. 
	let matrixlayouts = {

		// Create matrix layout: categories by collection. 
		collectioncategories: createLinkMatrix( collectionMatrixData, getProjectCategoryById,getProjectCollectionById, './category/?cid=','groupname' ),

		// Create matrix layout: projects by category (arbitrarily arranged). 
		// categoryprojects: createLinkMatrix( categoryMatrixData, getProjectById,getProjectCategoryById, '../','projectname' ),
		categoryprojects: createLinkMatrix( categoryMatrixData, getProjectById,getProjectCategoryById, './library/project/?pid=','projectname' ),

		// Create matrix layout: projects by category (by collection). 
		collectioncategoryprojects: createLinkMatrix( collectionCategoryMatrixData, getProjectById,getProjectCategoryById, '../','projectname' ),
	};
	// console.log('Matrix layouts:',matrixlayouts);


	// 
	if(pagematrices.collectioncategoriesdestination) {
		// Add layout for group matrix to footer. 
		pagematrices.collectioncategoriesdestination.innerHTML = matrixlayouts.collectioncategories;
	}
	// 
	if(pagematrices.collectioncategoryprojectsdestination) {
		pagematrices.collectioncategoryprojectsdestination.innerHTML = matrixlayouts.collectioncategoryprojects;
	}
	// 
	if(pagematrices.categoryprojectsdestination) {
		// Add layout for project matrix to site map page. 
		pagematrices.categoryprojectsdestination.innerHTML = matrixlayouts.categoryprojects;
	}

	// 
	if(footermatrices.collectioncategoriesdestination) {
		// Add layout for group matrix to footer. 
		footermatrices.collectioncategoriesdestination.innerHTML = matrixlayouts.collectioncategories;
	}
	// 
	if(footermatrices.categoryprojectsdestination) {
		// Add layout for project matrix to footer. 
		footermatrices.categoryprojectsdestination.innerHTML = matrixlayouts.categoryprojects;
	}


	/****/


	// Create layout for matrix grouped projects. 
	function createLinkMatrix(matrixData,getItemById,getMetaById,urlprefix,namekey) {

		// Initialize result. 
		let result = '';

		// Go thru each set of project groups. 
		for(let i in matrixData) {

			// Get project group set. 
			let set = matrixData[i];

			// Get list of ids for project groups. 
			let projectgroupidslist = set.setlist;
			// console.log('Project group ids:',projectgroupidslist);

			// Get list of project groups. 
			let projectgroupslist = projectgroupidslist.map( getMetaById );
			// console.log('Project group set:',projectgroupslist);

			// Add list set to result layout. 
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
