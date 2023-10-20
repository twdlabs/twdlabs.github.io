


// Get id of current project meta-group. 
const urlparams = new URLSearchParams(window.location.search);
const projectmetagroupid = urlparams.get('cid');
// console.log('Project meta group id:',projectmetagroupid);

// Get current project meta-group. 
const projectmetagroup = getProjectMetaGroupById(projectmetagroupid);
console.log('Project meta-group:',projectmetagroup);

// Get name of current project meta-group. 
const projectmetagroupname = projectmetagroup.groupname;
console.log('Project meta-group name:',projectmetagroupname);

// Get description of current project meta-group. 
const projectmetagroupdesc = projectmetagroup.groupdescription;
console.log('Project meta-group description:',projectmetagroupdesc);



/*****/


// Customize collection headers. 
customizeHeaders();


/*****/


// Customize collection headers. 
function customizeHeaders() {

	// Set custom document title. 
	document.title = `${projectmetagroupname} | Lab Experiments`;
	
	// Get custom headers for category name. 
	const custompageheaders = document.querySelectorAll('section div.grid h1.head.custom');
	// console.log('Page headers:', [...custompageheaders].map( h => h.parentElement.parentElement) );
	
	// Set custom headers. 
	for(let header of custompageheaders) {
		header.innerHTML = projectmetagroupname;
	}
	
	// Get custom paragraph for category description. 
	const custompageparagraph = document.querySelector('section div.grid p.textcopy.custom');

	// Set custom paragraph to category description. 
	custompageparagraph.innerHTML = projectmetagroupdesc;
}
