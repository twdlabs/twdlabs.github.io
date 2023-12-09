


// Get id of current project group. 
const urlparams = new URLSearchParams(window.location.search);
const projectgroupid = urlparams.get('cid');
// console.log('Project group id:',projectgroupid);

// Get current project group. 
const projectgroup = getProjectGroupById(projectgroupid);
console.log('Project group:',projectgroup);

// Get name of current project group. 
const projectgroupname = projectgroup.groupname;
console.log('Project group name:',projectgroupname);

// Get description of current project group. 
const projectgroupdesc = projectgroup.groupdescription;
console.log('Project group description:',projectgroupdesc);



/*****/


// Customize category headers. 
customizeHeaders();


/*****/


// Customize category headers. 
function customizeHeaders() {

	// Set custom document title. 
	document.title = `${projectgroupname} | TWD Labs`;
	
	// Get custom headers for category name. 
	const custompageheaders = document.querySelectorAll('section div.grid h1.head.custom');
	// console.log('Page headers:', [...custompageheaders].map( h => h.parentElement.parentElement) );
	
	// Set custom headers. 
	for(let header of custompageheaders) {
		header.innerHTML = projectgroupname;
	}
	
	// Get custom paragraph for category description. 
	const custompageparagraph = document.querySelector('section div.grid p.textcopy.custom');

	// Set custom paragraph to category description. 
	custompageparagraph.innerHTML = projectgroupdesc;
}
