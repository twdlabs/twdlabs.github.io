


// Get id of current project category. 
const urlparams = new URLSearchParams(window.location.search);
const projectcategoryid = urlparams.get('cid');
// console.log('Project category id:',projectcategoryid);

// Get current project category. 
const projectgroup = getProjectCategoryById(projectcategoryid);
console.log('Project category:',projectgroup);

// Get name of current project category. 
const projectcategoryname = projectgroup ? projectgroup.groupname : '';
console.log('Project category name:',projectcategoryname);

// Get description of current project category. 
const projectcategorydesc = projectgroup ? projectgroup.groupdescription : '';
console.log('Project category description:',projectcategorydesc);


/*****/


// Customize category headers. 
customizeHeaders();


/*****/


// Customize category headers. 
function customizeHeaders() {

	// Set custom document title. 
	document.title = `${projectcategoryname} | TWD Labs`;
	
	// Get custom headers for category name. 
	const custompageheaders = document.querySelectorAll('section div.grid h1.head.custom');
	// console.log('Page headers:', [...custompageheaders].map( h => h.parentElement.parentElement) );
	
	// Set custom headers. 
	for(let header of custompageheaders) {
		header.innerHTML = projectcategoryname;
	}
	
	// Get custom paragraph for category description. 
	const custompageparagraph = document.querySelector('section div.grid p.textcopy.custom');

	// Set custom paragraph to category description. 
	custompageparagraph.innerHTML = projectcategorydesc;
}
