


// Get id of current project group. 
const urlparams = new URLSearchParams(window.location.search);
const projectgroupid = urlparams.get('gid');
// console.log('Project group id:',projectgroupid);

// Get name of current project group. 
const projectgroup = getProjectGroupById(projectgroupid);
console.log('Project group:',projectgroup);
const projectgroupname = projectgroup.groupname;
console.log('Project group name:',projectgroupname);


/*****/


// Customize headers. 
customizeHeaders();


/*****/


// Customize headers. 
function customizeHeaders() {

	// Set custom document title. 
	document.title = `${projectgroupname} | Lab Experiments`;
	
	// Get custom page headers. 
	const custompageheaders = document.querySelectorAll('section div.grid h1.head.custom');
	console.log('Page headers:', [...custompageheaders].map( h => h.parentElement.parentElement) );
	
	// Set custom page headers. 
	for(let header of custompageheaders) {
		header.innerHTML = projectgroupname;
	}
}
