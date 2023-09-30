


// Get id of given project group. 
const urlparams = new URLSearchParams(window.location.search);
const projectgroupid = urlparams.get('gid');
// console.log('Project group id:',projectgroupid);

// Get name of given project group. 
const projectgroup = getProjectGroupById(projectgroupid);
console.log('Project group:',projectgroup);
const projectgroupname = projectgroup.groupname;
console.log('Project group name:',projectgroupname);


/*****/


// Update titles. 
updateTitles();


/*****/


// Update titles. 
function updateTitles() {

	// Set document title. 
	document.title = `${projectgroupname} | Lab Experiments`;
	
	// Get page titles. 
	const pageheaders = document.querySelectorAll('section div.grid h1.head');
	console.log('Page headers:',pageheaders);
	
	// Set page titles. 
	for(let header of pageheaders) {
		header.innerHTML = projectgroupname;
	}
}
