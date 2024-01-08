


// Get id of current project collection. 
const urlparams = new URLSearchParams(window.location.search);
const projectcollectionid = urlparams.get('cid');
// console.log('Project collection id:',projectcollectionid);

// Get current project collection. 
const projectcollection = getProjectCollectionById(projectcollectionid);
console.log('Project collection:',projectcollection);

// Get name of current project collection. 
const projectcollectionname = projectcollection ? projectcollection.groupname : '';
console.log('Project collection name:',projectcollectionname);

// Get description of current project collection. 
const projectcollectiondesc = projectcollection ? projectcollection.groupdescription : '';
console.log('Project collection description:',projectcollectiondesc);


/*****/


// Customize collection headers. 
customizeHeaders();


/*****/


// Customize collection headers. 
function customizeHeaders() {
	if(!projectcollectionname) return;

	// Set custom document title. 
	document.title = `${projectcollectionname} | TWD Labs`;
	
	// Get custom headers for category name. 
	const custompageheaders = document.querySelectorAll('div#container section div.grid h1.head.custom');
	// console.log('Page headers:', [...custompageheaders].map( h => h.parentElement.parentElement) );
	
	// Set custom headers. 
	for(let header of custompageheaders) {
		header.innerHTML = projectcollectionname;
	}
	
	// Get custom paragraph for category description. 
	const custompageparagraph = document.querySelector('section div.grid p.textcopy.custom');

	// Set custom paragraph to category description. 
	custompageparagraph.innerHTML = projectcollectiondesc;
}
